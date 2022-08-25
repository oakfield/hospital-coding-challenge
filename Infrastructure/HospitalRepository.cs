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

        return _mapper.Map<IEnumerable<Hospital>>(dtos);
    }
}