using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class IdeoDbContext : DbContext
    {
        public IdeoDbContext(DbContextOptions<IdeoDbContext> options) : base(options) { }
        public IdeoDbContext() { }

        private DbSet<Ideaspace> Ideaspaces { get; set; }
        private DbSet<Idea> Ideas { get; set; }
        private DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ideaspace>()
            .ToTable("Ideaspace")
            .HasMany(c => c.Ideas)
            .WithOne()
            ;

            modelBuilder.Entity<Idea>()
                .ToTable("Idea")
                .HasMany(c => c.Comments)
                .WithOne()
                ;

            modelBuilder.Entity<Comment>()
                .ToTable("Comment")
                ;
        }
    }
}
