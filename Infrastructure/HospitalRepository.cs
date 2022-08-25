using AutoMapper;
using Dapper;
using Domain;
using Domain.Interfaces;
using Infrastructure.Models;
using MySqlConnector;

namespace Infrastructure;

public class HospitalRepository : IHospitalRepository
{
    private readonly MySqlConnection _connection;
    private readonly IMapper _mapper;

    public HospitalRepository(MySqlConnection connection, IMapper mapper)
    {
        _connection = connection;
        _mapper = mapper;
    }

    public async Task AddAsync(Hospital hospital)
    {
        await _connection.OpenAsync();
        await _connection.QueryAsync(
            @"INSERT INTO Hospitals
            (
                Name
            )
            VALUES
            (
                @Name
            );",
            new
            {
                hospital.Name
            });
        await _connection.CloseAsync();
    }

    public async Task DeleteAsync(int hospitalId)
    {
        await _connection.OpenAsync();
        await _connection.QueryAsync(
            @"DELETE FROM Hospitals
            WHERE HospitalID = @HospitalId;",
            new
            {
                HospitalId = hospitalId
            });
        await _connection.CloseAsync();
    }

    public async Task<IEnumerable<Hospital>> GetAsync()
    {
        await _connection.OpenAsync();
        var dtos = await _connection.QueryAsync<HospitalDto>(
            @"SELECT
                HospitalID,
                Name,
                CreatedAt
            FROM
                Hospitals;");
        await _connection.CloseAsync();

        return _mapper.Map<IEnumerable<Hospital>>(dtos);
    }

    public async Task PutAsync(Hospital hospital)
    {
        await _connection.OpenAsync();
        await _connection.QueryAsync(
            @"UPDATE Hospitals
            SET
                Name = @Name
            WHERE HospitalID = @HospitalId;",
            new
            {
                hospital.Name,
                hospital.HospitalId
            });
        await _connection.CloseAsync();
    }
}