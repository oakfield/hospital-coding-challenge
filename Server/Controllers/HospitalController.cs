using Domain;
using Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class HospitalController : ControllerBase
{
    private readonly IHospitalService _hospitalService;
    private readonly ILogger<HospitalController> _logger;

    public HospitalController(
        IHospitalService hospitalService,
        ILogger<HospitalController> logger)
    {
        _hospitalService = hospitalService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IEnumerable<Hospital>> Get()
    {
        return await _hospitalService.GetAsync();
    }
}