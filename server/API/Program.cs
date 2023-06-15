using Persistence;
using Application;
using API.Extensions;
using Application.Interfaces;
using Infrastructure.Security;
using Infrastructure.Photos;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();

builder.Services.AddScoped<IPhotoAccessor, PhotoAccessor>();
builder.Services.Configure<CloudinarySettings>(builder.Configuration.GetSection("Cloudinary"));

// builder.Services.AddControllers(opt =>
// {
//     var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
//     opt.Filters.Add(new AuthorizeFilter(policy));
// });


// Add services to the container.
builder.Services.ConfigurePersistenceServices(builder.Configuration);
builder.Services.ConfigureApplicationServices();
builder.Services.AddIdentityServices(builder.Configuration);


builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    policy.AllowAnyMethod().
    AllowCredentials().
    AllowAnyHeader());
});

// builder.Services.AddDbContext<HFCDbContext>(); // Replace "YourDbContext" with the actual name of your DbContext class
builder.Services.AddScoped<IUserAccessor, UserAccessor>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");




app.UseHttpsRedirection();

app.UseAuthentication();

// app.UseAuthorization();



app.UseRouting();

app.MapControllers();
// app.UseMiddleware<ValidationErrorResponseMiddleware>();


// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
// });

app.Run();


