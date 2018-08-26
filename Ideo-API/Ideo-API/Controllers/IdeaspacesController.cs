using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;
using System.Text;
using System.Security.Cryptography;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class IdeaspacesController : ControllerBase
    {
        public static byte[] Hash(string value, byte[] salt)
        {
            return Hash(Encoding.UTF8.GetBytes(value), salt);
        }

        public static byte[] Hash(byte[] value, byte[] salt)
        {
            byte[] saltedValue = value.Concat(salt).ToArray();

            return new SHA256Managed().ComputeHash(saltedValue);
        }
        private readonly IdeoDbContext dbc;
        public IdeaspacesController(IdeoDbContext dbc)
        {
            this.dbc = dbc;
        }

        // GET api/ideaspaces
        [HttpGet]
        public ActionResult<Ideaspace> GetIdeaspaces()
        {
            return Ok(dbc.Ideaspace);
        }

        [HttpGet]
        public ActionResult<Ideaspace> GetIdeaspace(string name, string password)
        {
            Ideaspace ideaspace = dbc.Ideaspace.Where(i => i.Name == name).FirstOrDefault(); ;
            if (ideaspace != null)
            {

                return Ok(ideaspace);
            }
            else
                return NotFound();
        }
        // GET api/ideaspaces/:name/:password
        //[HttpGet]
        //public ActionResult GetIdeaspace(string name, string password)
        //{
        //    Ideaspace ideaspace = dbc.Ideaspace.Where(u => u.Name == name).FirstOrDefault();
        //    if (ideaspace != null)
        //    {
        //        if (password == ideaspace.Password)

        //            return Ok(ideaspace);
        //        else
        //            return NotFound();
        //    }
        //    return NotFound();
        //}
        // POST api/ideaspaces
        //[HttpPost]
        //[ProducesResponseType(201)]
        //public ActionResult<Ideaspace> PostIdeaSpace(Ideaspace ideaspace)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    dbc.Ideaspace.Add(ideaspace);
        //    dbc.SaveChanges();

        //    return Ok(ideaspace);
        //}
        [HttpPost]
        [ProducesResponseType(201)]
        public ActionResult<Ideaspace> PostIdeaSpace(string name, string password, string description)
        {
            Ideaspace ideaspace = new Ideaspace { Name = name, Password = password, Description = description };

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Ideaspace unique = dbc.Ideaspace.Where(i => i.Name == ideaspace.Name).FirstOrDefault();
            if (unique != null)
            {
                throw new ArgumentException("Ideaspace already exists!");
            }
            byte[] salt = new byte[16];

            ideaspace.Password = Convert.ToBase64String(Hash(ideaspace.Password, salt));
            ideaspace.PasswordSalt = Convert.ToBase64String(salt);

            dbc.Ideaspace.Add(ideaspace);
            dbc.SaveChanges();

            return Ok(ideaspace);
        }

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        dbc.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool IdeaspaceExists(int id)
        {
            return dbc.Ideaspace.Count(e => e.IdeaspaceId == id) > 0;
        }
        // GET api/values/5
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
