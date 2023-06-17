// using System.Text.Json;
// using Microsoft.AspNetCore.Mvc.ModelBinding;

// namespace API.Middleware
// {


//     public class ValidationErrorsMiddleware
//     {
//         private readonly RequestDelegate _next;

//         public ValidationErrorsMiddleware(RequestDelegate next)
//         {
//             _next = next;
//         }

//         public async Task Invoke(HttpContext context)
//         {
//             context.Response.OnStarting(() =>
//             {
//                 if (context.Response.StatusCode == 400 && context.Items.ContainsKey("ValidationErrors"))
//                 {
//                     var errors = context.Items["ValidationErrors"] as ModelStateDictionary;
//                     var responseObj = new CustomErrorResponse(errors);
//                     context.Response.ContentType = "application/json";
//                     var responseJson = JsonSerializer.Serialize(responseObj);
//                     context.Response.WriteAsync(responseJson);
//                 }

//                 return Task.CompletedTask;
//             });

//             await _next(context);
//         }
//     }
// }

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using System.Text.Json;


namespace API.Middleware
{
    public class DTOErrorMiddleware
    {
        private readonly RequestDelegate _next;

        public DTOErrorMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ValidationException ex)
            {
                var errors = ex.ValidationResult.MemberNames.Select((propertyName, index) => new
                {
                    PropertyName = propertyName,
                    ErrorMessage = ex.ValidationResult.ErrorMessage
                });

                context.Response.StatusCode = 400;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync(JsonSerializer.Serialize(errors));
            }


        }
    }
}