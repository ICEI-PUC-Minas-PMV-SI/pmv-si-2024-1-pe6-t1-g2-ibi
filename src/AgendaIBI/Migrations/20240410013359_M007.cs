using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_IBI1.Migrations
{
    /// <inheritdoc />
    public partial class M007 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RelatorioAlunoId",
                table: "RelatorioAlunos",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Turmas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NumeroTurma = table.Column<int>(type: "int", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turmas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TurmaAluno",
                columns: table => new
                {
                    AlunoId = table.Column<int>(type: "int", nullable: false),
                    TurmaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TurmaAluno", x => new { x.AlunoId, x.TurmaId });
                    table.ForeignKey(
                        name: "FK_TurmaAluno_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TurmaAluno_Turmas_TurmaId",
                        column: x => x.TurmaId,
                        principalTable: "Turmas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelatorioAlunos_RelatorioAlunoId",
                table: "RelatorioAlunos",
                column: "RelatorioAlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_TurmaAluno_TurmaId",
                table: "TurmaAluno",
                column: "TurmaId");

            migrationBuilder.AddForeignKey(
                name: "FK_RelatorioAlunos_RelatorioAlunos_RelatorioAlunoId",
                table: "RelatorioAlunos",
                column: "RelatorioAlunoId",
                principalTable: "RelatorioAlunos",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RelatorioAlunos_RelatorioAlunos_RelatorioAlunoId",
                table: "RelatorioAlunos");

            migrationBuilder.DropTable(
                name: "TurmaAluno");

            migrationBuilder.DropTable(
                name: "Turmas");

            migrationBuilder.DropIndex(
                name: "IX_RelatorioAlunos_RelatorioAlunoId",
                table: "RelatorioAlunos");

            migrationBuilder.DropColumn(
                name: "RelatorioAlunoId",
                table: "RelatorioAlunos");
        }
    }
}
