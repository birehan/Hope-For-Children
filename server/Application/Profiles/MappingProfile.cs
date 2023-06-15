using AutoMapper;
using Application.Features.Staffs.DTOs;
using Domain;

namespace Application.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
      
            CreateMap<CreateStaffDto, Staff>().ReverseMap();
            CreateMap<UpdateStaffDto, Staff>().ReverseMap();
            CreateMap<Staff, StaffDto>()
            .ForMember(x => x.PhotoUrl, o => o.MapFrom(s => s.Photo.Url))
            .ForMember(dest => dest.ImageUrls, opt => opt.MapFrom(src => src.Images.Select(i => i.Url).ToList()));



        }
    }
}