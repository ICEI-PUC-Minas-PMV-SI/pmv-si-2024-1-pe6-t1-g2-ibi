using API_IBI_01.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication_IBI1.Models
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
