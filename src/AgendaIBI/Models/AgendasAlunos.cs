using API_IBI_01.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication_IBI1.Models
{
    [Table("AgendasAlunos")]
    public class AgendasAlunos
    {
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public int AgendaId { get; set; }
        public Agenda Agenda { get; set; }
    }
}
