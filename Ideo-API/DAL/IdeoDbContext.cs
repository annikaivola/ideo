using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace DAL
{
    public class IdeoDbContext : DbContext
    {
        //public IdeoDbContext() { }

        public DbSet<Ideaspace> Ideaspaces { get; set; }
        public ObservableCollection<Idea> Ideas { get; set; }
        public ObservableCollection<Comment> Comments { get; set; }
        public IdeoDbContext(DbContextOptions<IdeoDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=tcp:ideoapp.database.windows.net,1433;Initial Catalog=IdeoDb;Persist Security Info=False;User ID=Ylijumala;Password=VegaaniBrownie1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }
    }
}
