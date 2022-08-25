namespace Domain.Interfaces;

public interface IHospitalRepository
{
    Task<Hospital> GetAsync();
}
