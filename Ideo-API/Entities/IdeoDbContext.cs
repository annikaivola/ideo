using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace Entities
{
    public class IdeoDbContext : DbContext
    {
        public IdeoDbContext(DbContextOptions<IdeoDbContext> options) : base(options) { }
        public IdeoDbContext() { }

        public ObservableCollection<Ideaspace> Ideaspaces { get; set; }
        public ObservableCollection<Idea> Ideas { get; set; }
        public ObservableCollection<Comment> Comments { get; set; }
    }
}
