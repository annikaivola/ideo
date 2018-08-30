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
        // GET api/comments/getcommentsbyideaid
        [HttpGet]
        public ActionResult<IEnumerable<List<Comment>>> GetCommentByIdeaId(int id)
        {
            Idea idea = dbc.Idea.Find(id);
            
            if (idea == null)
            {
                return NotFound();
            }
            List<Comment> comments=new List<Comment>();
            var q = dbc.Comment.Where(i => i.IdeaId == id).OrderByDescending(i=>i.Procon);
            foreach (var a in q)
            {
                comments.Add(a);
            }
            return Ok(comments);
        }
        //POST api/comment
        [HttpPost]
        public ActionResult PostComment(Comment comment)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var vote = dbc.Idea.Where(i => i.IdeaId == comment.IdeaId).FirstOrDefault();
            vote.Votecounter += comment.Procon;
            dbc.Comment.Add(comment);
            dbc.SaveChanges();

            return Ok(comment);
        } 

    }
}