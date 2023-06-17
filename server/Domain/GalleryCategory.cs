using Domain.Common;

namespace Domain
{
    public class GalleryCategory : BaseDomainEntity
    {
        public string Title { get; set; }
        public List<GallerySubCategory> SubCategorys { get; set; }
        public GalleryCategory()
        {
            SubCategorys = new List<GallerySubCategory>();
        }
    }
}
