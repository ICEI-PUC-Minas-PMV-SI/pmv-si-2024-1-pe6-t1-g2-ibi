using Microsoft.EntityFrameworkCore;
using WebApplication_IBI1.Models;

namespace API_IBI_01.Models
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions options) : base(options)  
        
        {


        }


        protected override void OnModelCreating(ModelBuilder builder )
        {
            builder.Entity<AlunosResponsaveis>()
                .HasKey(c => new { c.AlunoId, c.UsuarioId });

            builder.Entity<AlunosResponsaveis>()
                .HasOne(c => c.Aluno).WithMany(c => c.Usuarios)
                .HasForeignKey(c => c.AlunoId);

            builder.Entity<AlunosResponsaveis>()
                .HasOne(c => c.Usuario).WithMany(c => c.Alunos)
                .HasForeignKey(c => c.UsuarioId);





            builder.Entity<TurmaAlunos>()
                .HasKey(c => new { c.AlunoId, c.TurmaId });

            builder.Entity<TurmaAlunos>()
                .HasOne(c => c.Aluno).WithMany(c => c.Turmas)
                .HasForeignKey(c => c.AlunoId);

            builder.Entity<TurmaAlunos>()
                .HasOne(c => c.Turma).WithMany(c => c.Alunos)
                .HasForeignKey(c => c.TurmaId);




            builder.Entity<AgendasAlunos>()
               .HasKey(c => new { c.AlunoId, c.AgendaId });

            builder.Entity<AgendasAlunos>()
                .HasOne(c => c.Aluno).WithMany(c => c.Agendas)
                .HasForeignKey(c => c.AlunoId);

            builder.Entity<AgendasAlunos>()
                .HasOne(c => c.Agenda).WithMany(c => c.Alunos)
                .HasForeignKey(c => c.AgendaId);



            builder.Entity<AgendasUsuarios>()
               .HasKey(c => new { c.UsuarioId, c.AgendaId });

            builder.Entity<AgendasUsuarios>()
                .HasOne(c => c.Usuario).WithMany(c => c.Agendas)
                .HasForeignKey(c => c.UsuarioId);

            builder.Entity<AgendasUsuarios>()
                .HasOne(c => c.Agenda).WithMany(c => c.Usuarios)
                .HasForeignKey(c => c.AgendaId);
        }


        

        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Agenda> Agendas { get; set; }

        public DbSet<Turma> Turmas { get;  set; }


        public DbSet<AgendasAlunos> AgendasAlunos { get; set; }

        public DbSet<TurmaAlunos> TurmaAluno { get; set; }


        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<AlunosResponsaveis> AlunosResponsaveis { get; set; }
        
    }
}
