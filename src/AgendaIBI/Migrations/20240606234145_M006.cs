using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_ORIGINAL_01.Migrations
{
    /// <inheritdoc />
    public partial class M006 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Turmas_Usuarios_UsuarioId",
                table: "Turmas");

            migrationBuilder.DropIndex(
                name: "IX_Turmas_UsuarioId",
                table: "Turmas");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "Turmas");

            migrationBuilder.CreateTable(
                name: "TurmaUsuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(type: "int", nullable: false),
                    TurmaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TurmaUsuarios", x => new { x.UsuarioId, x.TurmaId });
                    table.ForeignKey(
                        name: "FK_TurmaUsuarios_Turmas_TurmaId",
                        column: x => x.TurmaId,
                        principalTable: "Turmas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TurmaUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TurmaUsuarios_TurmaId",
                table: "TurmaUsuarios",
                column: "TurmaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TurmaUsuarios");

            migrationBuilder.AddColumn<int>(
                name: "UsuarioId",
                table: "Turmas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Turmas_UsuarioId",
                table: "Turmas",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Turmas_Usuarios_UsuarioId",
                table: "Turmas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id");
        }
    }
}
