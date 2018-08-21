using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Comment
    {
        public int comment_ID { get; set; }
        public int idea_ID { get; set; }
        public string comment { get; set; }
        public int procon { get; set; }
    }
}
