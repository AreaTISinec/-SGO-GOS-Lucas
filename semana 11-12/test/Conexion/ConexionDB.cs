﻿namespace test.Conexion
{
    public class ConexionDB
    {
        private string connectionString = string.Empty;
        public ConexionDB() 
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            connectionString = builder.GetSection("ConnectionStrings:conexionmaestra").Value;
        }
        public string cadenaSQL()
        {
            return connectionString;
        }
    }
}
