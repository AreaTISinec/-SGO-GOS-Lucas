using System.Data.SqlClient;
using System.Data;
using test.Conexion;
using test.Model;
namespace test.Datos
{
    public class DObras
    {
        ConexionDB db = new ConexionDB();
        public async Task <List<MObras>> MostrarObras()
        {
            var lista = new List<MObras>();
            using (var sql = new SqlConnection(db.cadenaSQL()))
            {
                using (var cmd = new SqlCommand("mostrarObras", sql))
                {
                    await sql.OpenAsync();
                    cmd.CommandType = CommandType.StoredProcedure;
                    using(var reader = await cmd.ExecuteReaderAsync())
                    {
                        while(await reader.ReadAsync())
                        {
                            var mobras = new MObras();
                            mobras.nombre_obra = (string)reader["nombre_obra"];
                            mobras.ce_ne = (int)reader["ce_ne"];
                            mobras.id= (int)reader["id_obra"];
                            mobras.monto_neto = (decimal)reader["monto_neto"];
                            mobras.empresa = (string)reader["empresa"];
                            mobras.responsable= (string)reader["responsable"];
                            mobras.cliente= (string)reader["cliente"];
                            mobras.area = (string)reader["area"];
                            lista.Add(mobras);
                        }
                    }
                }
            }
            return lista;
        }
        public async Task InsertarObra(MObras parametros)
        {
            using (var sql = new SqlConnection(db.cadenaSQL()))
            {
                using(var cmd = new SqlCommand("insertarProductos", sql))
                {
                    cmd.CommandType= CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@ce_ne", parametros.ce_ne);
                    cmd.Parameters.AddWithValue("@monto_neto", parametros.monto_neto);
                    cmd.Parameters.AddWithValue("@empresa", parametros.empresa);
                    cmd.Parameters.AddWithValue("@nombre_obra", parametros.nombre_obra);
                    cmd.Parameters.AddWithValue("@responsable", parametros.responsable);
                    cmd.Parameters.AddWithValue("@cliente", parametros.cliente);
                    cmd.Parameters.AddWithValue("@area", parametros.area);
                    
                    
                    await sql.OpenAsync();
                    await cmd.ExecuteNonQueryAsync();
                }
            }
        }

        public async Task<MObras> mostrarObraByID(int id)
        {
            var mobras = new MObras();
            using (var sql = new SqlConnection(db.cadenaSQL()))
            {
                using (var cmd = new SqlCommand("mostrarObraById", sql))
                {
                    await sql.OpenAsync();
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@id", id);
                    using (var reader = await cmd.ExecuteReaderAsync())
                    {
                        await reader.ReadAsync();
                            
                            mobras.nombre_obra = (string)reader["nombre_obra"];
                            mobras.ce_ne = (int)reader["ce_ne"];
                            mobras.id = (int)reader["id_obra"];
                            mobras.monto_neto = (decimal)reader["monto_neto"];
                            mobras.empresa = (string)reader["empresa"];
                            mobras.responsable = (string)reader["responsable"];
                            mobras.cliente = (string)reader["cliente"];
                            mobras.area = (string)reader["area"];
                            
                        
                    }
                }
            }
            return mobras;
        }
     }
}
