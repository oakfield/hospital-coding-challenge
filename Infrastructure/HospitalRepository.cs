﻿using AutoMapper;
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
        await _connection.QueryAsync<HospitalDto>(
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
    }

    public async Task DeleteAsync(int hospitalId)
    {
        await _connection.OpenAsync();
        await _connection.QueryAsync<HospitalDto>(
            @"DELETE FROM Hospitals
            WHERE HospitalID = @HospitalId;",
            new
            {
                HospitalId = hospitalId
            });
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