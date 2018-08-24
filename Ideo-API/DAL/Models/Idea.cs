using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Idea
    {
        public Idea()
        {
            Comment = new HashSet<Comment>();
        }

        public int IdeaId { get; set; }
        public int IdeaspaceId { get; set; }
        public string Idea1 { get; set; }
        public int Votecounter { get; set; }
        public DateTime Time { get; set; }

        //public Idea IdeaNavigation { get; set; }
        public Ideaspace Ideaspace { get; set; }
        //public Idea InverseIdeaNavigation { get; set; }
        public ICollection<Comment> Comment { get; set; }
    }
}
