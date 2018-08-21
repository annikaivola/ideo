using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;


namespace Ideo_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdeasController : ControllerBase
    {
        private readonly IdeoDbContext _context;
        public IdeasController(IdeoDbContext context)
        {
            _context = context;
        }

        // GET api/idea
        [HttpGet]
        public ActionResult<IEnumerable<Idea>> GetAll()
        {
            return Ok(_context.Ideas.ToList());
        }
       
    }
}