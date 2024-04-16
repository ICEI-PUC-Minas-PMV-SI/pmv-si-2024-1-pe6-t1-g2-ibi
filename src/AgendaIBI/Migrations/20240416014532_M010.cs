using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_IBI1.Migrations
{
    /// <inheritdoc />
    public partial class M010 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkDto_RelatorioAlunos_RelatorioAlunoId",
                table: "LinkDto");

            migrationBuilder.DropTable(
                name: "RelatorioAlunos");

            migrationBuilder.RenameColumn(
                name: "RelatorioAlunoId",
                table: "LinkDto",
                newName: "AgendaId");

            migrationBuilder.RenameIndex(
                name: "IX_LinkDto_RelatorioAlunoId",
                table: "LinkDto",
                newName: "IX_LinkDto_AgendaId");

            migrationBuilder.CreateTable(
                name: "Agendas",
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
                    table.PrimaryKey("PK_Agendas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Agendas_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AgendasAlunos",
                columns: table => new
                {
                    AlunoId = table.Column<int>(type: "int", nullable: false),
                    AgendaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgendasAlunos", x => new { x.AlunoId, x.AgendaId });
                    table.ForeignKey(
                        name: "FK_AgendasAlunos_Agendas_AgendaId",
                        column: x => x.AgendaId,
                        principalTable: "Agendas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AgendasAlunos_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AgendasUsuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(type: "int", nullable: false),
                    AgendaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgendasUsuarios", x => new { x.UsuarioId, x.AgendaId });
                    table.ForeignKey(
                        name: "FK_AgendasUsuarios_Agendas_AgendaId",
                        column: x => x.AgendaId,
                        principalTable: "Agendas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AgendasUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Agendas_AlunoId",
                table: "Agendas",
                column: "AlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_AgendasAlunos_AgendaId",
                table: "AgendasAlunos",
                column: "AgendaId");

            migrationBuilder.CreateIndex(
                name: "IX_AgendasUsuarios_AgendaId",
                table: "AgendasUsuarios",
                column: "AgendaId");

            migrationBuilder.AddForeignKey(
                name: "FK_LinkDto_Agendas_AgendaId",
                table: "LinkDto",
                column: "AgendaId",
                principalTable: "Agendas",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkDto_Agendas_AgendaId",
                table: "LinkDto");

            migrationBuilder.DropTable(
                name: "AgendasAlunos");

            migrationBuilder.DropTable(
                name: "AgendasUsuarios");

            migrationBuilder.DropTable(
                name: "Agendas");

            migrationBuilder.RenameColumn(
                name: "AgendaId",
                table: "LinkDto",
                newName: "RelatorioAlunoId");

            migrationBuilder.RenameIndex(
                name: "IX_LinkDto_AgendaId",
                table: "LinkDto",
                newName: "IX_LinkDto_RelatorioAlunoId");

            migrationBuilder.CreateTable(
                name: "RelatorioAlunos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AlunoId = table.Column<int>(type: "int", nullable: false),
                    Almoco = table.Column<int>(type: "int", nullable: false),
                    AlunoNaoTrouxe = table.Column<int>(type: "int", nullable: false),
                    Atividade_EmFamilia = table.Column<bool>(type: "bit", nullable: false),
                    CafeDaManha = table.Column<int>(type: "int", nullable: false),
                    CienteProfessor = table.Column<int>(type: "int", nullable: false),
                    CienteResponsavel = table.Column<int>(type: "int", nullable: false),
                    Data = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Evacuacao = table.Column<int>(type: "int", nullable: false),
                    Janta = table.Column<int>(type: "int", nullable: false),
                    LancheDaTarde = table.Column<int>(type: "int", nullable: false),
                    Medicacao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ObservacaoProfessor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ObservacaoResponsavel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RelatorioAlunoId = table.Column<int>(type: "int", nullable: true),
                    Repousou = table.Column<bool>(type: "bit", nullable: false)
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
                    table.ForeignKey(
                        name: "FK_RelatorioAlunos_RelatorioAlunos_RelatorioAlunoId",
                        column: x => x.RelatorioAlunoId,
                        principalTable: "RelatorioAlunos",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_RelatorioAlunos_AlunoId",
                table: "RelatorioAlunos",
                column: "AlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_RelatorioAlunos_RelatorioAlunoId",
                table: "RelatorioAlunos",
                column: "RelatorioAlunoId");

            migrationBuilder.AddForeignKey(
                name: "FK_LinkDto_RelatorioAlunos_RelatorioAlunoId",
                table: "LinkDto",
                column: "RelatorioAlunoId",
                principalTable: "RelatorioAlunos",
                principalColumn: "Id");
        }
    }
}
