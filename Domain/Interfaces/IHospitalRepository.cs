namespace Domain.Interfaces;

public interface IHospitalRepository
{
    Task<IEnumerable<Hospital>> GetAsync();
}
