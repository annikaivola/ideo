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

        // GET api/ideaspaces/:name/:password
        [HttpGet]
        public ActionResult GetIdeaspace(string name, string password)
        {
            Ideaspace ideaspace = dbc.Ideaspace.Where(u => u.Name == name).FirstOrDefault();
            if (ideaspace != null)
            {
                //byte[] passwordHash = Hash(password, Convert.FromBase64String(ideaspace.PasswordSalt));
                var pol = Encoding.UTF8.GetBytes(ideaspace.Password);
                //bool correct = Convert.FromBase64String(ideaspace.Password).SequenceEqual(passwordHash);
                //if (correct)
                //{
                //    return Ok(ideaspace);
                //}
            }
            return NotFound();
        }
        // POST api/ideaspaces
        [HttpPost]
        [ProducesResponseType(201)]
        public ActionResult<Ideaspace>PostIdeaSpace(Ideaspace ideaspace)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            byte[] salt = new byte[16];

            ideaspace.Password = Convert.ToBase64String(Hash(ideaspace.Password, salt));
            //ideaspace.PasswordSalt = Convert.ToBase64String(salt);

            dbc.Ideaspace.Add(ideaspace);
            dbc.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ideaspace.IdeaspaceId }, ideaspace);
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
