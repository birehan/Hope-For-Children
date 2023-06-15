using Microsoft.EntityFrameworkCore;
using Application.Contracts.Persistence;
using Domain;

namespace Persistence.Repositories
{
    public class StaffRepository : GenericRepository<Domain.Staff>, IStaffRepository
    {

        private readonly DataContext _dbContext;

        public StaffRepository(DataContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IReadOnlyList<Staff>> GetAll()
        {
            return await _dbContext.Set<Staff>().Include(x => x.Photo).AsNoTracking().ToListAsync();
        }



        // public async Staff<IReadOnlyList<Staff>> GetAll()
        // {
        //     return await _dbContext.Set<Domain.Staff>().Include(x => x.Creator).AsNoTracking().ToListAsync();
        // }


        // public async Staff<Domain.Staff> Get(int id)
        // {
        //     return await _dbContext.Set<Domain.Staff>().Include(x => x.Creator).FirstOrDefaultAsync(b => b.Id == id);
        // }

    }
}