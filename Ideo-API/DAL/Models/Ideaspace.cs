using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Ideaspace
    {
        public Ideaspace()
        {
            Idea = new HashSet<Idea>();
        }

        public int IdeaspaceId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string PasswordSalt { get; set; }
        public string Description { get; set; }

        public ICollection<Idea> Idea { get; set; }
    }
}
