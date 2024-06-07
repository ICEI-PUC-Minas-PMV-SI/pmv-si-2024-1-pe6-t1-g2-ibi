using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_ORIGINAL_01.Models
{
    [Table("Agendas")]   
    public class Agenda : LinksHATEOS
    {

        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime Data { get; set; }
        public string ObservacaoProfessor { get; set; }
        public bool Repousou { get; set; }
        public Evacuacao Evacuacao { get; set; }
        [Required]
        public Refeicoes CafeDaManha { get; set; }
        public Refeicoes Almoco { get; set; }
        [Required]
        public Refeicoes LancheDaTarde { get; set; }
        [Required]
        public Refeicoes Janta { get; set; }
        
        //Checklist itens

        [Required]
        public bool LençoUmedecido { get; set; }
        [Required]
        public bool PomadaDeAssadura { get; set; }
        [Required]
        public bool Mantinha_Coberta { get; set; }
        [Required]
        public bool Toalha { get; set; }
        [Required]
        public bool Bico { get; set; }
        [Required]
        public bool Chinelo { get; set; }
        [Required]
        public bool RoupasParaTroca { get; set; }
        [Required]
        public bool Shampoo { get; set; }
        [Required]
        public bool Condicionador { get; set; }

        [Required]
        public bool Sabonete { get; set; }
        [Required]
        public bool Pente { get; set; }

        public bool Atividade_EmFamilia { get; set; }

        public string Medicacao { get; set; }
        [Required]
        public bool CienteResponsavel { get; set; }
        public string ObservacaoResponsavel { get; set; }

        [Required]
        public bool CienteProfessor { get; set; }

        [Required]
        public int AlunoId { get; set; }

        


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

    
    
}
