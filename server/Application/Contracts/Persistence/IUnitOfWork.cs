

namespace Application.Contracts.Persistence
{
    public interface IUnitOfWork : IDisposable
    {

        IStaffRepository StaffRepository { get; }
        ICategoryRepository CategoryRepository { get; }
        ISubCategoryRepository SubCategoryRepository { get; }
        Task<int> Save();

    }
}
