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
                byte[] passwordHash = Hash(password, Convert.FromBase64String(ideaspace.PasswordSalt));
                var pol = Encoding.UTF8.GetBytes(ideaspace.Password);
                bool correct = Convert.FromBase64String(ideaspace.Password).SequenceEqual(passwordHash);
                if (correct)
                {
                    return Ok(ideaspace);
                }
                else
                {
                    return Unauthorized();
                }
            }
            else
                return NotFound();
        }
        
        // GET api/ideaspace/getideaspacebyid
        [HttpGet]
        public ActionResult<Ideaspace> GetIdeaspaceById(int ideaspaceid)
        {
            Ideaspace ideaspace = dbc.Ideaspace.Where(i => i.IdeaspaceId == ideaspaceid).FirstOrDefault();

            return Ok(ideaspace);
        }
        
        // POST
        [HttpPost]
        [ProducesResponseType(201)]
        public ActionResult<Ideaspace> PostIdeaSpace(Ideaspace ideaspace)
        {
            //Ideaspace ideaspace = new Ideaspace { Name = name, Password = password, Description = description };
            var q = dbc.Ideaspace.Where(i => i.Name == ideaspace.Name).FirstOrDefault();
            if (q!= null)
            {
                return Unauthorized();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            byte[] salt = new byte[16];

            ideaspace.Password = Convert.ToBase64String(Hash(ideaspace.Password, salt));
            ideaspace.PasswordSalt = Convert.ToBase64String(salt);

            dbc.Ideaspace.Add(ideaspace);
            dbc.SaveChanges();

            return Ok(ideaspace);
        }

        private bool IdeaspaceExists(int id)
        {
            return dbc.Ideaspace.Count(e => e.IdeaspaceId == id) > 0;
        }
    }
}
