using MediatR;
using Application.Responses;

namespace Application.Features.Staffs.CQRS.Commands
{
    public class DeleteStaffCommand: IRequest<Result<int>>
    {
        public int Id { get; set; }
    }
}
