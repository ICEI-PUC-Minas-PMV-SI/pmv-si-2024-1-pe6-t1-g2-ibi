using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{
    [Table("Alunos")]
    public class Aluno : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int Matricula { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public DateTime DataNascimento { get; set; }

        public ICollection<AlunosResponsaveis> Usuarios { get; set; }
        public ICollection<TurmaAlunos> Turmas { get; set; }
       
        public ICollection<Agenda> Agendas { get; set; }

    }
}
