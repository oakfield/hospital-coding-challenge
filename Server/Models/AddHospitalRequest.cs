using System.ComponentModel.DataAnnotations;

namespace Server.Models;

public record AddHospitalRequest(
    [MaxLength(50)]
    string Name);