using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API_ORIGINAL_01.Migrations
{
    /// <inheritdoc />
    public partial class M005 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AlunoNaoTrouxe",
                table: "Agendas");

            migrationBuilder.AlterColumn<bool>(
                name: "CienteResponsavel",
                table: "Agendas",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<bool>(
                name: "CienteProfessor",
                table: "Agendas",
                type: "bit",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<bool>(
                name: "Bico",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Chinelo",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Condicionador",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "LençoUmedecido",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Mantinha_Coberta",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Pente",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "PomadaDeAssadura",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "RoupasParaTroca",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Sabonete",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Shampoo",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Toalha",
                table: "Agendas",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bico",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Chinelo",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Condicionador",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "LençoUmedecido",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Mantinha_Coberta",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Pente",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "PomadaDeAssadura",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "RoupasParaTroca",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Sabonete",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Shampoo",
                table: "Agendas");

            migrationBuilder.DropColumn(
                name: "Toalha",
                table: "Agendas");

            migrationBuilder.AlterColumn<int>(
                name: "CienteResponsavel",
                table: "Agendas",
                type: "int",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<int>(
                name: "CienteProfessor",
                table: "Agendas",
                type: "int",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AddColumn<int>(
                name: "AlunoNaoTrouxe",
                table: "Agendas",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
