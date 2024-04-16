using API_IBI_01.Models;
using Azure;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication_IBI1.Models
{
    [Table("AlunosResponsaveis")]
    public class AlunosResponsaveis
    {
        public int  AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set;}
    }
}
