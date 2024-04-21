using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{
    [Table("AlunosResponsaveis")]
    public class AlunosResponsaveis

    {
        
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
