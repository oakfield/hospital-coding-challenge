using AutoMapper;
using Domain;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class HospitalsController : ControllerBase
{
    private readonly IHospitalService _hospitalService;
    private readonly ILogger<HospitalsController> _logger;
    private readonly IMapper _mapper;

    public HospitalsController(
        IHospitalService hospitalService,
        ILogger<HospitalsController> logger,
        IMapper mapper)
    {
        _hospitalService = hospitalService;
        _logger = logger;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task AddAsync(AddHospitalRequest addHospitalRequest)
    {
        var hospital = _mapper.Map<Hospital>(addHospitalRequest);
        await _hospitalService.AddAsync(hospital);
    }

    [Route("/{hospitalId}")]
    [HttpDelete]
    public async Task DeleteAsync(int hospitalId)
    {
        await _hospitalService.DeleteAsync(hospitalId);
    }

    [HttpGet]
    public async Task<IEnumerable<Hospital>> GetAsync()
    {
        return await _hospitalService.GetAsync();
    }

    [Route("/{hospitalId}")]
    [HttpPut]
    public async Task PutAsync(int hospitalId, PutHospitalRequest putHospitalRequest)
    {
        var hospital = _mapper.Map<Hospital>(putHospitalRequest) with
        {
            HospitalId = hospitalId
        };
        await _hospitalService.PutAsync(hospital);
    }
}