using Application.Responses;
using MediatR;
using static Domain.Staff;

namespace Application.Features.Staffs.CQRS.Commands
{
    public class UpdateStaffSectorCommand : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public Sector Sector { get; set; }
    }
}
