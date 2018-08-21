using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
      private readonly IdeoDbContext _context;
        public CommentsController(IdeoDbContext context)
        {
            _context = context;
        }

        // GET api/ideaspaces
        [HttpGet]
        public ActionResult<IEnumerable<Comment>> GetAll()
        {
            return Ok(_context.Comments.ToList());
        }

    }
}