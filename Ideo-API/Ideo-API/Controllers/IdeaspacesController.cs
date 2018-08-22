using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class IdeaspacesController : ControllerBase
    {
        private readonly IdeoDbContext dbc;
        public IdeaspacesController(IdeoDbContext dbc)
        {
            this.dbc = dbc;
        }

        // GET api/ideaspaces
        [HttpGet]
        public ActionResult<Ideaspace> Get()
        {
            return Ok(dbc.Ideaspace);
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
