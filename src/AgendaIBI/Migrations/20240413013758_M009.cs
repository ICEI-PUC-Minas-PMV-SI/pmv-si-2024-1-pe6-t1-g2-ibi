using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication_IBI1.Migrations
{
    /// <inheritdoc />
    public partial class M009 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TurmaAluno_Alunos_AlunoId",
                table: "TurmaAluno");

            migrationBuilder.DropForeignKey(
                name: "FK_TurmaAluno_Turmas_TurmaId",
                table: "TurmaAluno");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TurmaAluno",
                table: "TurmaAluno");

            migrationBuilder.RenameTable(
                name: "TurmaAluno",
                newName: "TurmaAlunos");

            migrationBuilder.RenameIndex(
                name: "IX_TurmaAluno_TurmaId",
                table: "TurmaAlunos",
                newName: "IX_TurmaAlunos_TurmaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TurmaAlunos",
                table: "TurmaAlunos",
                columns: new[] { "AlunoId", "TurmaId" });

            migrationBuilder.AddForeignKey(
                name: "FK_TurmaAlunos_Alunos_AlunoId",
                table: "TurmaAlunos",
                column: "AlunoId",
                principalTable: "Alunos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TurmaAlunos_Turmas_TurmaId",
                table: "TurmaAlunos",
                column: "TurmaId",
                principalTable: "Turmas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TurmaAlunos_Alunos_AlunoId",
                table: "TurmaAlunos");

            migrationBuilder.DropForeignKey(
                name: "FK_TurmaAlunos_Turmas_TurmaId",
                table: "TurmaAlunos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_TurmaAlunos",
                table: "TurmaAlunos");

            migrationBuilder.RenameTable(
                name: "TurmaAlunos",
                newName: "TurmaAluno");

            migrationBuilder.RenameIndex(
                name: "IX_TurmaAlunos_TurmaId",
                table: "TurmaAluno",
                newName: "IX_TurmaAluno_TurmaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_TurmaAluno",
                table: "TurmaAluno",
                columns: new[] { "AlunoId", "TurmaId" });

            migrationBuilder.AddForeignKey(
                name: "FK_TurmaAluno_Alunos_AlunoId",
                table: "TurmaAluno",
                column: "AlunoId",
                principalTable: "Alunos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_TurmaAluno_Turmas_TurmaId",
                table: "TurmaAluno",
                column: "TurmaId",
                principalTable: "Turmas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
