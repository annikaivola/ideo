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

        // GET api/ideas/getideasbyideaspaceid
        [HttpGet]
        public ActionResult<List<Idea>> GetIdeasByIdeaspaceId(int ideaspaceId)
        {
            Ideaspace ids = dbc.Ideaspace.Find(ideaspaceId);
            if (ids == null)
                return NotFound();
            List<Idea> ideasById = dbc.Idea.Where(i => i.IdeaspaceId == ideaspaceId).ToList<Idea>();
            return Ok(ideasById);
        }
        // POST api/idea
        [HttpPost]
        public ActionResult PostIdea(Idea idea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            idea.Time = DateTime.Now;
            dbc.Idea.Add(idea);

            dbc.SaveChanges();

            return Ok(idea);
        }
    }
}

