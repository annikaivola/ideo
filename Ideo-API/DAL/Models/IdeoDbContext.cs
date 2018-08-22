using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class IdeoDbContext : DbContext
    {
        public IdeoDbContext()
        {
        }

        public IdeoDbContext(DbContextOptions<IdeoDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Comment> Comment { get; set; }
        public virtual DbSet<Idea> Idea { get; set; }
        public virtual DbSet<Ideaspace> Ideaspace { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=tcp:ideoapp.database.windows.net,1433;Initial Catalog=IdeoDb;Persist Security Info=False;User ID=Ylijumala;Password=VegaaniBrownie123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.Property(e => e.CommentId)
                    .HasColumnName("comment_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Comment1)
                    .IsRequired()
                    .HasColumnName("comment")
                    .HasMaxLength(100);

                entity.Property(e => e.IdeaId).HasColumnName("idea_ID");

                entity.Property(e => e.Procon).HasColumnName("procon");

                entity.HasOne(d => d.Idea)
                    .WithMany(p => p.Comment)
                    .HasForeignKey(d => d.IdeaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Comment_Idea");
            });

            modelBuilder.Entity<Idea>(entity =>
            {
                entity.Property(e => e.IdeaId)
                    .HasColumnName("idea_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Idea1)
                    .IsRequired()
                    .HasColumnName("idea")
                    .HasMaxLength(100);

                entity.Property(e => e.IdeaspaceId).HasColumnName("ideaspace_ID");

                entity.Property(e => e.Time)
                    .HasColumnName("time")
                    .HasColumnType("datetime");

                entity.Property(e => e.Votecounter).HasColumnName("votecounter");

                entity.HasOne(d => d.IdeaNavigation)
                    .WithOne(p => p.InverseIdeaNavigation)
                    .HasForeignKey<Idea>(d => d.IdeaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Idea_Idea");

                entity.HasOne(d => d.Ideaspace)
                    .WithMany(p => p.Idea)
                    .HasForeignKey(d => d.IdeaspaceId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Idea_Ideaspace");
            });

            modelBuilder.Entity<Ideaspace>(entity =>
            {
                entity.Property(e => e.IdeaspaceId)
                    .HasColumnName("ideaspace_ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnName("description")
                    .HasMaxLength(200);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50);
            });
        }
    }
}
