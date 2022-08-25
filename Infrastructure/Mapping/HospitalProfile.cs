using AutoMapper;
using Domain;
using Infrastructure.Models;

namespace Infrastructure.Mapping;

public class HospitalProfile : Profile
{
    public HospitalProfile()
    {
        CreateMap<HospitalDto, Hospital>();
    }
}
