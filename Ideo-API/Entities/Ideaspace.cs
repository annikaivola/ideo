using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    class Ideaspace
    {
        public int ideaspace_ID { get; set; }
        public string name { get; set; }
        public string password { get; set; }
        public string description { get; set; }
        public List<Idea> Ideas { get; set; }
    }
}
