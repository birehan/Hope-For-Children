using static Domain.Staff;

namespace Application.Features.Staffs.DTOs
{
    public interface IStaffDto
    {
        public string Name { get; set; }
        public string About { get; set; }

        public string Title { get; set; }
        public Sector UserSector { get; set; }
    }
}