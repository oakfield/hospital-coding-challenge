using AutoMapper;
using Domain;
using Server.Models;

namespace Server.Mapping;

public class HospitalProfile : Profile
{
    public HospitalProfile()
    {
        CreateMap<AddHospitalRequest, Hospital>();
        CreateMap<PutHospitalRequest, Hospital>();
    }
}
