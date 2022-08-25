namespace Domain.Interfaces;

public interface IHospitalService
{
    Task AddAsync(Hospital hospital);
    Task<IEnumerable<Hospital>> GetAsync();
}
