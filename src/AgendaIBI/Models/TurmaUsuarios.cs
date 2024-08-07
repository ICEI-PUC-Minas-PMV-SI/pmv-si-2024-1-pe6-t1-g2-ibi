using API_ORIGINAL_01.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{

    [Table("TurmaUsuarios")]
    public class TurmaUsuarios
    {
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public int TurmaId { get; set; }
        public Turma Turma { get; set; }
    }
}
