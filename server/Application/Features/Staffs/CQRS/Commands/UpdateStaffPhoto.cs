using Application.Responses;
using MediatR;
using Microsoft.AspNetCore.Http;
using Domain;

namespace Application.Features.Staffs.CQRS.Commands
{
    public class UpdateStaffPhotoCommand : IRequest<Result<Unit>>
    {
        public string Id { get; set; }
        public IFormFile File { get; set; }

    }
}
