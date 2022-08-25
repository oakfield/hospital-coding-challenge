namespace Domain.Interfaces;

public interface IHospitalService
{
    Task<Hospital> GetAsync();
}
