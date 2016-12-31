using Dapper;
using System.Data.Common;
using System.Collections.Generic;

public class ProductRepository
{
    private string connectionString;
    private DbConnection _dbconnection;
    public ProductRepository(DbConnection dbConnection)
    {
        _dbconnection = dbConnection;
    }

    public DbConnection Connection
    {
        get  {
            return _dbconnection;
        }
    }

    public void Add(Book prod)
    {
        using (DbConnection dbConnection = Connection)
        {
            string sQuery = "INSERT INTO Books (Name, Quantity, Price)"
                            + " VALUES(@Name, @Quantity, @Price)";
            dbConnection.Open();
            dbConnection.Execute(sQuery, prod);
        }
    }

    public IEnumerable<Book> GetAll()
    {
        using (DbConnection dbConnection = Connection)
        {
            dbConnection.Open();
            return dbConnection.Query<Book>("SELECT * FROM books");
        }
    }

    // public Product GetByID(int id)
    // {
    //     using (DbConnection dbConnection = Connection)
    //     {
    //         string sQuery = "SELECT * FROM Products" 
    //                        + " WHERE ProductId = @Id";
    //         dbConnection.Open();
    //         return dbConnection.Query<Product>(sQuery, new { Id = id }).FirstOrDefault();
    //     }
    // }

    public void Delete(int id)
    {
        using (DbConnection dbConnection = Connection)
        {
             string sQuery = "DELETE FROM Products" 
                          + " WHERE ProductId = @Id";
            dbConnection.Open();
            dbConnection.Execute(sQuery, new { Id = id });
        }
    }

    public void Update(Book prod)
    {
        using (DbConnection dbConnection = Connection)
        {
            string sQuery = "UPDATE Products SET Name = @Name,"
                           + " Quantity = @Quantity, Price= @Price" 
                           + " WHERE ProductId = @ProductId";
            dbConnection.Open();
            dbConnection.Query(sQuery, prod);
        }
    }
}