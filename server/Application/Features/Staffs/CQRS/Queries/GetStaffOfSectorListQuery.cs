
using MediatR;
using Application.Features.Staffs.DTOs;
using Application.Responses;
using static Domain.Staff;

namespace Application.Features.Staffs.CQRS.Queries
{
    public class GetStaffOfSectorListQuery : IRequest<Result<StaffDto>>
    {
        public Sector Sector { get; set; }
    }
}