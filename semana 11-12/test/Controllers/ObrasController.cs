using Microsoft.AspNetCore.Mvc;
using test.Datos;
using test.Model;
using System.Net;



namespace test.Controllers
{
    [ApiController]
    [Route("api/obras")]
    public class ObrasController
    {
        [HttpGet]
        public async Task<ActionResult<List<MObras>>> Get()
        {
            var funcion = new DObras();
            var lista = await funcion.MostrarObras();
            return lista;
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<MObras>> GetById(int id)
        {
            
                var funcion = new DObras();
                var obra = await funcion.mostrarObraByID(id);
                return obra;
          
            
        }

        [HttpPost]
        public async Task Post([FromForm] MObras parametros)
        {
            var funcion = new DObras();
            await funcion.InsertarObra(parametros);
        }
    }
}
