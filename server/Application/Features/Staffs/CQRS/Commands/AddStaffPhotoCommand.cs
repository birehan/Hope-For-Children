using Application.Contracts.Persistence;
using Application.Interfaces;
using Application.Responses;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace Application.Features.Staffs.CQRS.Commands
{
    public class AddStaffPhotoCommand : IRequest<Result<Unit>>
    {
        public Guid Id { get; set; }
        public IFormFile File { get; set; }

    }


    public class AddStaffCommandHandler : IRequestHandler<AddStaffPhotoCommand, Result<Unit>>
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly IPhotoAccessor _photoAccessor;


        public AddStaffCommandHandler(IUnitOfWork unitOfWork, IPhotoAccessor photoAccessor)
        {
            _unitOfWork = unitOfWork;
            _photoAccessor = photoAccessor;

        }

        public async Task<Result<Unit>> Handle(AddStaffPhotoCommand request, CancellationToken cancellationToken)
        {

            try
            {


                var Staff = await _unitOfWork.StaffRepository.Get(request.Id);

                if (Staff == null) return null;


                var photoUploadResult = await _photoAccessor.AddPhoto(request.File);

                if (photoUploadResult == null)
                    return Result<Unit>.Failure("Creation Failed");


                var photo = new Photo
                {
                    Url = photoUploadResult.Url,
                    Id = photoUploadResult.PublicId
                };


                Staff.Images.Add(photo);



                if (await _unitOfWork.Save() > 0)
                    return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Creation Failed");
            }
            catch (Exception ex)
            {
                return Result<Unit>.Failure($"Creation Failed: {ex.Message}");

            }
        }
    }


}
