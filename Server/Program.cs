using Domain;
using Domain.Interfaces;
using Infrastructure;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.StackExchangeRedis;
using MySqlConnector;

var config = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .AddJsonFile("appsettings.json")
                 .Build();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var corsPolicy = "policy";
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsPolicy,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000");
        });
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "redis:6379";
    options.InstanceName = "HospitalRedis";
});
builder.Services.AddTransient(_ => new MySqlConnection(config["ConnectionString"]));
builder.Services.AddScoped<IHospitalService, HospitalService>();
builder.Services.AddScoped<IHospitalRepository, HospitalRepository>();

var app = builder.Build();
app.UseCors(corsPolicy);


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
