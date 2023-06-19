using Application.Features.Common;
using Application.Photos;

namespace Application.Features.SubCategories.DTOs
{
    public class SubCategoryDto : BaseDto, ISubCategoryDto
    {
        public string Title { get; set; }
        public Guid CategoryId { get; set; }
        public PhotoUploadResult MainPhoto { get; set; }
        public List<PhotoUploadResult> Photos { get; set; }
    }
}
