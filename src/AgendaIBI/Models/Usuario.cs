using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using WebApplication_IBI1.Models;
using static Azure.Core.HttpHeader;

namespace API_IBI_01.Models
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
        public ICollection<AgendasUsuarios> Agendas { get; set; }

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
    

