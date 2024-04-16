using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_IBI1.Migrations
{
    /// <inheritdoc />
    public partial class vandeir : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LinkDto",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Href = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Metodo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AlunoId = table.Column<int>(type: "int", nullable: true),
                    RelatorioAlunoId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LinkDto", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LinkDto_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_LinkDto_RelatorioAlunos_RelatorioAlunoId",
                        column: x => x.RelatorioAlunoId,
                        principalTable: "RelatorioAlunos",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Resposaveis",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Perfil = table.Column<int>(type: "int", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Contato = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resposaveis", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AlunosResponsaveis",
                columns: table => new
                {
                    AlunoId = table.Column<int>(type: "int", nullable: false),
                    ResponsavelId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AlunosResponsaveis", x => new { x.AlunoId, x.ResponsavelId });
                    table.ForeignKey(
                        name: "FK_AlunosResponsaveis_Alunos_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Alunos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AlunosResponsaveis_Resposaveis_ResponsavelId",
                        column: x => x.ResponsavelId,
                        principalTable: "Resposaveis",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AlunosResponsaveis_ResponsavelId",
                table: "AlunosResponsaveis",
                column: "ResponsavelId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_AlunoId",
                table: "LinkDto",
                column: "AlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_LinkDto_RelatorioAlunoId",
                table: "LinkDto",
                column: "RelatorioAlunoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AlunosResponsaveis");

            migrationBuilder.DropTable(
                name: "LinkDto");

            migrationBuilder.DropTable(
                name: "Resposaveis");
        }
    }
}
