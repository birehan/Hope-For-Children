using Application.Contracts.Persistence;
using Application.Features.SubCategories.DTOs;
using Application.Interfaces;
using Application.Responses;
using AutoMapper;
using Domain;
using MediatR;

namespace Application.Features.SubCategories.Commands
{
    public class CreateSubCategoryCommand : IRequest<Result<Guid>>
    {
        public CreateSubCategoryDto SubCategoryDto { get; set; }
    }


    public class CreateSubCategoryCommandHandler : IRequestHandler<CreateSubCategoryCommand, Result<Guid>>
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPhotoAccessor _photoAccessor;

        public CreateSubCategoryCommandHandler(IUnitOfWork unitOfWork, IMapper mapper, IPhotoAccessor photoAccessor)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _photoAccessor = photoAccessor;
        }

        public async Task<Result<Guid>> Handle(CreateSubCategoryCommand request, CancellationToken cancellationToken)
        {
            var existingSubCategory = await _unitOfWork.SubCategoryRepository.GetByTitleAsync(request.SubCategoryDto.Title);

            if (existingSubCategory != null)
            {
                var mainPhoto = await _photoAccessor.AddPhoto(request.SubCategoryDto.MainPhoto);

                if (mainPhoto == null)
                {
                    return Result<Guid>.Failure("Error uploading main photo");
                }

                existingSubCategory.MainPhotoUrl = mainPhoto.Url;

                var photoUploadTasks = request.SubCategoryDto.Photos.Select(p => _photoAccessor.AddPhoto(p));
                var photoUploadResults = await Task.WhenAll(photoUploadTasks);
                if (photoUploadResults.Any(r => r == null))
                {
                    return Result<Guid>.Failure("Error uploading one or more photos");
                }

                existingSubCategory.Photos.AddRange(photoUploadResults.Select(r => new Photo { Url = r.Url, Id = r.PublicId }));
                await _unitOfWork.SubCategoryRepository.Update(existingSubCategory);

                if (await _unitOfWork.Save() > 0)
                    return Result<Guid>.Success(existingSubCategory.Id);

                return Result<Guid>.Failure("Error while saving changes");
            }

            var subCategory = _mapper.Map<SubCategory>(request.SubCategoryDto);

            var result = await _photoAccessor.AddPhoto(request.SubCategoryDto.MainPhoto);
            if (result == null)
            {
                return Result<Guid>.Failure("Error uploading main photo");
            }

            subCategory.MainPhotoUrl = result.Url;

            var subCategoryPhotos = request.SubCategoryDto.Photos.Select(p => new Photo { Url = "" }).ToList();
            subCategory.Photos.AddRange(subCategoryPhotos);

            var subCategoryPhotoUploadTasks = request.SubCategoryDto.Photos.Select((p, i) => _photoAccessor.AddPhoto(p));
            var subCategoryPhotoUploadResults = await Task.WhenAll(subCategoryPhotoUploadTasks);

            if (subCategoryPhotoUploadResults.Any(r => r == null))
            {
                return Result<Guid>.Failure("Error uploading one or more photos");
            }

            for (int i = 0; i < subCategoryPhotoUploadResults.Length; i++)
            {
                subCategory.Photos[i].Url = subCategoryPhotoUploadResults[i].Url;
                subCategory.Photos[i].Id = subCategoryPhotoUploadResults[i].PublicId;
            }

            await _unitOfWork.SubCategoryRepository.Add(subCategory);

            if (await _unitOfWork.Save() > 0)
                return Result<Guid>.Success(subCategory.Id);

            return Result<Guid>.Failure("Error while saving changes");
        }
    }
}
