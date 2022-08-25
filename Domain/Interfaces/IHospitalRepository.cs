namespace Domain.Interfaces;

public interface IHospitalRepository
{
    Task AddAsync(Hospital hospital);
    Task DeleteAsync(int hospitalId);
    Task<IEnumerable<Hospital>> GetAsync();
    Task PutAsync(Hospital hospital);
}
