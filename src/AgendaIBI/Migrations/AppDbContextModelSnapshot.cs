﻿// <auto-generated />
using System;
using API_ORIGINAL_01.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API_ORIGINAL_01.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("API_ORIGINAL_01.Models.Agenda", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Almoco")
                        .HasColumnType("int");

                    b.Property<int>("AlunoId")
                        .HasColumnType("int");

                    b.Property<bool>("Atividade_EmFamilia")
                        .HasColumnType("bit");

                    b.Property<bool>("Bico")
                        .HasColumnType("bit");

                    b.Property<int>("CafeDaManha")
                        .HasColumnType("int");

                    b.Property<bool>("Chinelo")
                        .HasColumnType("bit");

                    b.Property<bool>("CienteProfessor")
                        .HasColumnType("bit");

                    b.Property<bool>("CienteResponsavel")
                        .HasColumnType("bit");

                    b.Property<bool>("Condicionador")
                        .HasColumnType("bit");

                    b.Property<DateTime>("Data")
                        .HasColumnType("datetime2");

                    b.Property<int>("Evacuacao")
                        .HasColumnType("int");

                    b.Property<int>("Janta")
                        .HasColumnType("int");

                    b.Property<int>("LancheDaTarde")
                        .HasColumnType("int");

                    b.Property<bool>("LençoUmedecido")
                        .HasColumnType("bit");

                    b.Property<bool>("Mantinha_Coberta")
                        .HasColumnType("bit");

                    b.Property<string>("Medicacao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObservacaoProfessor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObservacaoResponsavel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Pente")
                        .HasColumnType("bit");

                    b.Property<bool>("PomadaDeAssadura")
                        .HasColumnType("bit");

                    b.Property<bool>("Repousou")
                        .HasColumnType("bit");

                    b.Property<bool>("RoupasParaTroca")
                        .HasColumnType("bit");

                    b.Property<bool>("Sabonete")
                        .HasColumnType("bit");

                    b.Property<bool>("Shampoo")
                        .HasColumnType("bit");

                    b.Property<bool>("Toalha")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("AlunoId");

                    b.ToTable("Agendas");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Aluno", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime2");

                    b.Property<int>("Matricula")
                        .HasColumnType("int");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Alunos");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.AlunosResponsaveis", b =>
                {
                    b.Property<int>("AlunoId")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("AlunoId", "UsuarioId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("AlunosResponsaveis");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.LinkDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("AgendaId")
                        .HasColumnType("int");

                    b.Property<int?>("AlunoId")
                        .HasColumnType("int");

                    b.Property<string>("Href")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Metodo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rel")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AgendaId");

                    b.HasIndex("AlunoId");

                    b.ToTable("LinkDto");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Turma", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AnoLetivo")
                        .HasColumnType("int");

                    b.Property<int>("NumeroTurma")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Turmas");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.TurmaAlunos", b =>
                {
                    b.Property<int>("AlunoId")
                        .HasColumnType("int");

                    b.Property<int>("TurmaId")
                        .HasColumnType("int");

                    b.HasKey("AlunoId", "TurmaId");

                    b.HasIndex("TurmaId");

                    b.ToTable("TurmaAlunos");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.TurmaUsuarios", b =>
                {
                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.Property<int>("TurmaId")
                        .HasColumnType("int");

                    b.HasKey("UsuarioId", "TurmaId");

                    b.HasIndex("TurmaId");

                    b.ToTable("TurmaUsuarios");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Perfil")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Agenda", b =>
                {
                    b.HasOne("API_ORIGINAL_01.Models.Aluno", null)
                        .WithMany("Agendas")
                        .HasForeignKey("AlunoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.AlunosResponsaveis", b =>
                {
                    b.HasOne("API_ORIGINAL_01.Models.Aluno", "Aluno")
                        .WithMany("Usuarios")
                        .HasForeignKey("AlunoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API_ORIGINAL_01.Models.Usuario", "Usuario")
                        .WithMany("Alunos")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aluno");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.LinkDto", b =>
                {
                    b.HasOne("API_ORIGINAL_01.Models.Agenda", null)
                        .WithMany("Links")
                        .HasForeignKey("AgendaId");

                    b.HasOne("API_ORIGINAL_01.Models.Aluno", null)
                        .WithMany("Links")
                        .HasForeignKey("AlunoId");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.TurmaAlunos", b =>
                {
                    b.HasOne("API_ORIGINAL_01.Models.Aluno", "Aluno")
                        .WithMany("Turmas")
                        .HasForeignKey("AlunoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API_ORIGINAL_01.Models.Turma", "Turma")
                        .WithMany("Alunos")
                        .HasForeignKey("TurmaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Aluno");

                    b.Navigation("Turma");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.TurmaUsuarios", b =>
                {
                    b.HasOne("API_ORIGINAL_01.Models.Turma", "Turma")
                        .WithMany("Usuarios")
                        .HasForeignKey("TurmaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API_ORIGINAL_01.Models.Usuario", "Usuario")
                        .WithMany("Turmas")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Turma");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Agenda", b =>
                {
                    b.Navigation("Links");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Aluno", b =>
                {
                    b.Navigation("Agendas");

                    b.Navigation("Links");

                    b.Navigation("Turmas");

                    b.Navigation("Usuarios");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Turma", b =>
                {
                    b.Navigation("Alunos");

                    b.Navigation("Usuarios");
                });

            modelBuilder.Entity("API_ORIGINAL_01.Models.Usuario", b =>
                {
                    b.Navigation("Alunos");

                    b.Navigation("Turmas");
                });
#pragma warning restore 612, 618
        }
    }
}
