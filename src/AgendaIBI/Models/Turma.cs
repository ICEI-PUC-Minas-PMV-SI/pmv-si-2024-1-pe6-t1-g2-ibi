using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{

    [Table("Turmas")]
    public class Turma
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int NumeroTurma { get; set; }
        [Required]
        public int AnoLetivo { get; set; }

        public ICollection<TurmaAlunos> Alunos { get; set; }
    }
}
