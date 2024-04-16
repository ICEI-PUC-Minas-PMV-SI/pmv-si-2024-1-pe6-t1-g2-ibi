using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using WebApplication_IBI1.Models;

namespace API_IBI_01.Models
{
    [Table("Agendas")]
    public class Agenda : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime Data { get; set; }
        [Required]
        public string ObservacaoProfessor { get; set; }
        public bool Repousou {  get; set; }
        public Evacuacao Evacuacao { get; set; }
        [Required]
        public Refeicoes CafeDaManha { get; set; }
        public Refeicoes Almoco { get; set; }
        [Required]
        public Refeicoes LancheDaTarde { get; set; }
        [Required]
        public Refeicoes Janta { get; set; }
        [Required]
        public Itens AlunoNaoTrouxe { get; set; }
       
        public bool Atividade_EmFamilia { get; set; }

        public string Medicacao { get; set; }
        [Required]
        public  Ciente CienteResponsavel { get; set; }
        public string ObservacaoResponsavel { get; set; } 

        [Required]
        public Ciente CienteProfessor { get; set; }

        [Required]
        public int AlunoId { get; set; }

        [Required]
        
        public Aluno Aluno { get; set; }

        public ICollection<AgendasAlunos> Alunos { get; set; }

        public ICollection<AgendasUsuarios> Usuarios { get; set; }


    }


    public enum Refeicoes
    {
        Aceitou_tudo,
        Boa_Parte,
        Parte,
        Rejeitou
    }

    public enum Evacuacao
    {
        Normal,
        Diareia,
        Nao_Evaacuo
       
    }

    public enum Itens
    {
        LençoUmedecido,
        Fralda,
        PomadaDeAssadura,
        Lençol,
        Mantinha_Coberta,
        Toalha,
        Bico,
        Chinelo,
        RoupasParaTroca,
        Shampoo,
        Condicionador,
        Sabonete,
        Pente
    }

    public enum Ciente
    {
        Ciente,
    }
}
