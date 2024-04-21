using System.ComponentModel.DataAnnotations;

namespace API_ORIGINAL_01.Models
{
    public class UsuarioDto
    {

        public int? Id { get; set; }
        [Required]
        public string Nome { get; set; }

        [Required]

        public string Password { get; set; }

        [Required]
        public Perfil Perfil { get; set; }

        
    }
}
