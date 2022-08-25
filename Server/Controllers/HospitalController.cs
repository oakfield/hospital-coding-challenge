using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class HospitalController : ControllerBase
{
    private readonly ILogger<HospitalController> _logger;

    public HospitalController(ILogger<HospitalController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Hospital> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Hospital
        {
            Name = "Test"
        })
        .ToArray();
    }
}