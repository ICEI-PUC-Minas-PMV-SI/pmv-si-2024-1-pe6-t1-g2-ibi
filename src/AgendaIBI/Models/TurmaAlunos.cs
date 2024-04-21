using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{

    [Table("TurmaAlunos")]
    public class TurmaAlunos
    {
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public int TurmaId { get; set; }
        public Turma Turma { get; set; }
    }
}
