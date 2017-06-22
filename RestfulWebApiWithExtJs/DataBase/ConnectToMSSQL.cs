using System.Collections.Generic;
using System.Data.SqlClient;

using RestfulWebApiWithExtJs.Models;


namespace RestfulWebApiWithExtJs.DataBase
{
    public class ConnectToMSSQL
    {
        public List<Product> AllProduct()
        {
            
            List<Product> listOfMovies = new List<Product>();
            using(SqlConnection connection = new SqlConnection("Integrated Security=SSPI;Persist Security Info=True;Initial Catalog=Products;Data Source=(local);"))
            {
                string query = "SELECT * FROM Product";
                using(SqlCommand cmd = new SqlCommand(query, connection))
                {
                    // cmd.CommandText = "SELECT * FROM Product";
                    // cmd.Connection = connection;
                    connection.Open();
                    using(SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while(reader.Read())
                        {
                            Product item = new Product();
                            item.Id = reader.GetInt32(0);
                            item.Name = reader.GetString(1);
                            item.Count = reader.GetInt32(2);
                            item.Stock = reader.GetString(3);
                            listOfMovies.Add(item);
                        }
                    }
                    connection.Close();
                }
            }
            return listOfMovies;
        }
        
    }
}