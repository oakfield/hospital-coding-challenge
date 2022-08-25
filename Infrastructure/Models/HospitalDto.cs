namespace Infrastructure.Models;

public readonly record struct HospitalDto(
    int HospitalId,
    string Name,
    DateTimeOffset CreatedAt);
