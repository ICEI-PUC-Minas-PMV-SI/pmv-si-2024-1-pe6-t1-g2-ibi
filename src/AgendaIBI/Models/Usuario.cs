using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace API_ORIGINAL_01.Models
{

    [Table("Usuarios")]
    public class Usuario
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nome { get; set; }

        [Required]
        [JsonIgnore]
        public string Password { get; set; }

        [Required]
        public Perfil Perfil { get; set; }

        public ICollection<AlunosResponsaveis> Alunos { get; set; }

        public ICollection<TurmaUsuarios> Turmas { get; set; }



    }


    public enum Perfil
    {

        [Display(Name = "Administrador")]
        Administrador,
        [Display(Name = "Professor")]
        Professor,
        [Display(Name = "Responsavel")]
        Responsavel
    }
}
