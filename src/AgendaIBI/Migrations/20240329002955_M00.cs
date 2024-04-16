using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_IBI1.Migrations
{
    /// <inheritdoc />
    public partial class M00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alunos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Matricula = table.Column<int>(type: "int", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alunos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RelatorioAlunos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ObservacaoProfessor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Repousou = table.Column<bool>(type: "bit", nullable: false),
                    Evacuacao = table.Column<int>(type: "int", nullable: false),
                    CafeDaManha = table.Column<int>(type: "int", nullable: false),
                    Almoco = table.Column<int>(type: "int", nullable: false),
                    LancheDaTarde = table.Column<int>(type: "int", nullable: false),
                    Janta = table.Column<int>(type: "int", nullable: false),
                    AlunoNaoTrouxe = table.Column<int>(type: "int", nullable: false),
                    Atividade_EmFamilia = table.Column<bool>(type: "bit", nullable: false),
                    Medicacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CienteResponsavel = table.Column<int>(type: "int", nullable: false),
                    ObservacaoResponsavel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CienteProfessor = table.Column<int>(type: "int", nullable: false),
                    AlunoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RelatorioAlunos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RelatorioAlunos_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelatorioAlunos_AlunoId",
                table: "RelatorioAlunos",
                column: "AlunoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RelatorioAlunos");

            migrationBuilder.DropTable(
                name: "Alunos");
        }
    }
}
