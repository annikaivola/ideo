using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;

namespace Ideo_API.Controllers
{
    [Route("api/[controller]/[action]")]
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

        //POST api/comment
        [HttpPost]
        public ActionResult PostComment(int idea, string comment, int plusmiinus)
        {
            Comment createComment = new Comment { IdeaId = idea, Comment1 = comment, Procon = plusmiinus};
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var vote = dbc.Idea.Where(i => i.IdeaId == idea).FirstOrDefault();
            vote.Votecounter += plusmiinus;
            dbc.Comment.Add(createComment);
            dbc.SaveChanges();

            return Ok(createComment);
        }

    }
}