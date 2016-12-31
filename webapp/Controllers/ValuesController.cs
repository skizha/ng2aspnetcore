using Microsoft.AspNetCore.Mvc;
using System.Data.Common;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPNETCoreAngular2Demo.Controller
{
   
    [Route("api/[controller]")]
    public class ValuesController : Microsoft.AspNetCore.Mvc.Controller
    {


         DbConnection db;
         ConnectionString cs; 

        public ValuesController(IOptions<ConnectionString> connectionString){
            cs = connectionString.Value;
            db = new MySqlConnection(cs.TestDatabase);
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            ProductRepository pr = new ProductRepository(db);
            var a = pr.GetAll();

            return new JsonResult(new string[] { "value1", "value2", cs.TestDatabase, cs.DefaultConnection, "Something else" });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return new JsonResult("value");
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]string value)
        {
            return new CreatedAtRouteResult("anyroute", null);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]string value)
        {
            return new OkResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return new NoContentResult();
        }
    }
}