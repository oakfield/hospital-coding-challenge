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

        using var command = new MySqlCommand("SELECT field FROM table;", _connection);

        return new Hospital();
    }
}