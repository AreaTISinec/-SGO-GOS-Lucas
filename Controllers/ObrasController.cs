using Microsoft.AspNetCore.Mvc;
using test.Datos;
using test.Model;

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
        [HttpPost]
        public async Task Post([FromForm] MObras parametros)
        {
            var funcion = new DObras();
            await funcion.InsertarObra(parametros);
        }
    }
}
