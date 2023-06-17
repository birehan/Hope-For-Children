using Domain.Common;

namespace Domain
{
    public class GallerySubCategory : BaseDomainEntity
    {
        public string Title { get; set; }
        public string MainPhotoUrl { get; set; }
        public List<Photo> Photos { get; set; }
        public GallerySubCategory()
        {
            Photos = new List<Photo>();
        }
    }
}
