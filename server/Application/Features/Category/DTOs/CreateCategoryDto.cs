using Application.Features.SubCategories.DTOs;

namespace Application.Features.Categories.DTOs
{
    public class CreateCategoryDto : ICategoryDto
    {
        public string Title { get; set; }
        public List<CreateSubCategoryDto> SubCategories { get; set; }
    }
}
