using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
      private readonly IdeoDbContext dbc;
        public CommentsController(IdeoDbContext dbc)
        {
            this.dbc = dbc;
        }

        // GET api/ideaspaces
        [HttpGet]
        public ActionResult<IEnumerable<Comment>> GetAll()
        {
            return Ok(dbc.Comment.ToList());
        }

    }
}