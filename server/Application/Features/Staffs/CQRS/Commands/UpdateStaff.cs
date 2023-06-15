
using MediatR;
using Application.Features.Staffs.DTOs;
using Application.Responses;

namespace Application.Features.Staffs.CQRS.Commands
{
    public class UpdateStaffCommand : IRequest<Result<Unit>>
    {
        public UpdateStaffDto StaffDto { get; set; }

    }
}
