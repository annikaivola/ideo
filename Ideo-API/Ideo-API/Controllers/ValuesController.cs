using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        //private readonly IdeoDbContext _context;
        //public ValuesController(IdeoDbContext context)
        //{
        //    _context = context;
        //}

        //[HttpPost]
        //public async Task<ActionResult<string>> CreateDatabase([FromBody] string key)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    if (key != "Oikeesti") return BadRequest("Key must be 'Oikeesti'");

        //    await _context.Database.EnsureDeletedAsync();
        //    await _context.Database.EnsureCreatedAsync();

        //    _context.Ideaspace.Add(new Ideaspace { Name = "testi", Password = "jee", PasswordSalt = "jeejeesuola", Description = "demo" });

        //    await _context.SaveChangesAsync();

        //    return Ok("Created a new DB");
        //}
        //// GET api/values
        //[HttpGet]
        //public ActionResult<IEnumerable<string>> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public ActionResult<string> Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
