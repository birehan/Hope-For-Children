using Domain.Common;

namespace Domain
{
    public class SubCategory : BaseDomainEntity
    {
        public string Title { get; set; }
        public string MainPhotoUrl { get; set; }
        public Guid CategoryId { get; set; }
        public List<Photo> Photos { get; set; }
        public Category Category { get; set; }
        public SubCategory()
        {
            Photos = new List<Photo>();
        }
    }
}
