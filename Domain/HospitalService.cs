using Domain.Interfaces;

namespace Domain;

public class HospitalService : IHospitalService
{
    private readonly IHospitalRepository _repository;

    public HospitalService(IHospitalRepository repository)
    {
        _repository = repository;
    }

    public async Task AddAsync(Hospital hospital)
    {
        await _repository.AddAsync(hospital);
    }

    public async Task DeleteAsync(int hospitalId)
    {
        await _repository.DeleteAsync(hospitalId);
    }

    public async Task<IEnumerable<Hospital>> GetAsync()
    {
        return await _repository.GetAsync();
    }

    public async Task PutAsync(Hospital hospital)
    {
        await _repository.PutAsync(hospital);
    }
}