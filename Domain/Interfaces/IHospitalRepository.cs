namespace Domain.Interfaces;

public interface IHospitalRepository
{
    Task AddAsync(Hospital hospital);
    Task<IEnumerable<Hospital>> GetAsync();
}
