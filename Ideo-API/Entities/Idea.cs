using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class Idea
    {
        public int idea_ID { get; set; }
        public int ideaspace_ID { get; set; }
        public string idea { get; set; }
        public int votecounter { get; set; }
        public DateTime time { get; set; }
    }
}
