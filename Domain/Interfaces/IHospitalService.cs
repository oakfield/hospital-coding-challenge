namespace Domain.Interfaces;

public interface IHospitalService
{
    Task<IEnumerable<Hospital>> GetAsync();
}
