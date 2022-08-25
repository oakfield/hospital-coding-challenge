namespace Domain;

public record Hospital
{
    public int HospitalId { get; set; }
    public string Name { get; set; } = "";
    public DateTimeOffset CreatedAt { get; set; }
}