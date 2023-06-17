using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace API.Middleware
{


    public class CustomErrorResponse
    {
        public int Status { get; set; }
        public string Message { get; set; }
        public Dictionary<string, string[]> Errors { get; set; }

        public CustomErrorResponse(ModelStateDictionary modelState)
        {
            Status = 400;
            Message = "One or more validation errors occurred Hola temosa.";
            Errors = modelState.ToDictionary(
                kvp => kvp.Key,
                kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray()
            );
        }
    }
}