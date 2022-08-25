using Domain;
using Domain.Interfaces;
using MySqlConnector;

namespace Infrastructure;

public class HospitalRepository : IHospitalRepository
{
    private readonly MySqlConnection _connection;

    public HospitalRepository(MySqlConnection connection)
    {
        _connection = connection;
    }

    public async Task<Hospital> GetAsync()
    {
        await _connection.OpenAsync();

        using var command = new MySqlCommand(
            @"SELECT
                HospitalID,
                Name,
                CreatedAt
            FROM
                Hospitals;",
            _connection);
        using var reader = await command.ExecuteReaderAsync();

        var hospital = new Hospital();
        while (await reader.ReadAsync())
        {
            hospital.HospitalId = int.Parse(reader.GetValue(0).ToString());
            hospital.Name = reader.GetValue(1).ToString();
            hospital.CreatedAt = DateTimeOffset.Parse(reader.GetValue(2).ToString());
        }

        return hospital;
    }
}