namespace Domain.Interfaces;

public interface IHospitalService
{
    Task AddAsync(Hospital hospital);
    Task DeleteAsync(int hospitalId);
    Task<IEnumerable<Hospital>> GetAsync();
}
