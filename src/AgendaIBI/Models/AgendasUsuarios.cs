using API_IBI_01.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication_IBI1.Models

{

    [Table("AgendasUsuarios")]
    public class AgendasUsuarios
    {
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public int AgendaId { get; set; }
        public Agenda Agenda { get; set; }
    }
}
