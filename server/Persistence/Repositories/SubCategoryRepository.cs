using Application.Contracts.Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repositories
{
    public class SubCategoryRepository : GenericRepository<SubCategory>, ISubCategoryRepository
    {
        private readonly DataContext _dbContext;
        public SubCategoryRepository(DataContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<SubCategory> GetByTitleAsync(string title)
        {
            return await _dbContext.SubCategories.FirstOrDefaultAsync(s => s.Title == title);
        }
    }
}
