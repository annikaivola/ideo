using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class IdeasController : ControllerBase
    {
        private readonly IdeoDbContext dbc;
        public IdeasController(IdeoDbContext dbc)
        {
            this.dbc = dbc;
        }

        // GET api/ideas/getideas
        [HttpGet]
        public ActionResult<IEnumerable<Idea>> GetIdeas()
        {
            return Ok(dbc.Idea.ToList());
        }
        // GET api/idea/getideabyid
        [HttpGet]
        public ActionResult<IEnumerable<Idea>> GetIdeabyId(int id)
        {
            Idea idea = dbc.Idea.Find(id);
            if (idea == null)
            {
                return NotFound();
            }
            return Ok(idea);
        }
        // POST api/idea
        [HttpPost]
        public ActionResult PostIdea(int ideaspace, string idea)
        {
            Idea createIdea = new Idea{ IdeaspaceId=ideaspace, Idea1 = idea, Time = DateTime.Now };
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            dbc.Idea.Add(createIdea);

            dbc.SaveChanges();

            return Ok(idea);
        }
    }
}

