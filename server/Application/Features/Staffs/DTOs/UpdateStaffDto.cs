using Application.Features.Common;
using static Domain.Staff;

namespace Application.Features.Staffs.DTOs
{
    public class UpdateStaffDto : BaseDto, IStaffDto
    {
        public string Name { get; set; }
        public string About { get; set; }

        public Sector UserSector { get; set; }


        public string Title { get; set; }


    }
}