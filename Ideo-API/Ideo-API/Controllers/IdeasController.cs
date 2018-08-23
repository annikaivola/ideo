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

        // GET api/idea
        [HttpGet]
        public ActionResult<Idea> GetAllIdeas()
        {
            return Ok(dbc.Idea);
        }
       // GET api/ideabyid
        [HttpGet]
        public ActionResult <IEnumerable<Idea>> GetIdea(int id)
        {
            Idea idea = dbc.Idea.Find(id);
            if(idea == null)
            {
                return NotFound();
            }
            return Ok(idea);
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

            try
            {
                dbc.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (IdeaExists(idea.IdeaId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return Ok(idea);
            }
        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        dbc.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        private bool IdeaExists(int id)
        {
            return dbc.Idea.Count(e => e.IdeaId == id) > 0;
        }
    }
    }

