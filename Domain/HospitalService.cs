using Domain.Interfaces;

namespace Domain;

public class HospitalService : IHospitalService
{
    private readonly IHospitalRepository _repository;

    public HospitalService(IHospitalRepository repository)
    {
        _repository = repository;
    }

    public async Task<Hospital> GetAsync()
    {
        return await _repository.GetAsync();
    }
}