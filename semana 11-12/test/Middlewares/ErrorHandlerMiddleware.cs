﻿using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;
using test.Wrappers;

namespace test.Middlewares
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch(Exception err) 
            {
                var response = context.Response;
                response.ContentType = "application/json";
                var responseModel = new Response<string>() { Succeeded = false, Message = err?.Message };
                switch (err)
                {
                    case Exceptions.ApiException e:
                        response.StatusCode = (int)HttpStatusCode.BadRequest;
                        break;
                    case KeyNotFoundException e:
                        response.StatusCode= (int)HttpStatusCode.NotFound;
                        break;

                    default:
                        response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        break;
                }

                var result = JsonSerializer.Serialize(responseModel);

                await response.WriteAsync(result);
                
            }
        }
    }
}
