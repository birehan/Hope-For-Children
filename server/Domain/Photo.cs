namespace Domain
{
    public class Photo
    {
        public string Id { get; set; }
        public Guid SubCategoryId { get; set; }
        public SubCategory SubCategory { get; set; }
        public string Url { get; set; }
    }
}
