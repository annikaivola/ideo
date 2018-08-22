using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Comment
    {
        public int CommentId { get; set; }
        public int IdeaId { get; set; }
        public string Comment1 { get; set; }
        public int Procon { get; set; }

        public Idea Idea { get; set; }
    }
}
