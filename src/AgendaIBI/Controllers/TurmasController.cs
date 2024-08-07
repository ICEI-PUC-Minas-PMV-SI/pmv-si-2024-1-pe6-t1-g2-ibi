﻿using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_ORIGINAL_01.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TurmasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TurmasController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            //var model = await _context.Turmas.ToListAsync();
            var model = await _context.Turmas
                .Include(u => u.Usuarios)
                    .ThenInclude(ut => ut.Usuario)
                .Include(u => u.Alunos)
                .Select(u => new
                {
                    u.Id,
                    u.NumeroTurma,
                    u.AnoLetivo,
                    Usuarios = u.Usuarios.Select(a => new
                    {
                        a.UsuarioId,
                        a.Usuario.Nome
                    }).ToList(),
                    Alunos = u.Alunos.Select(t => new
                    {                     
                        t.AlunoId,
                        t.Aluno.Nome,
                        t.Aluno.Matricula
                    }).ToList()
                })
                .ToListAsync();
            return Ok(model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public async Task<ActionResult> Create(Turma model)
        {
            _context.Turmas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost("{id}/usuarios")]
        public async Task<ActionResult> AddUsuario(int id, TurmaUsuarios model)
        {
            if (id != model.TurmaId) return BadRequest();
            _context.TurmaUsuarios.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.TurmaId }, model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}/Usuarios/{UsuarioId}")]
        public async Task<ActionResult> DeleteUsuario(int id, int UsuarioId)
        {
            var model = await _context.TurmaUsuarios
                .Where(c => c.TurmaId == id && c.UsuarioId == UsuarioId)
                .FirstOrDefaultAsync();
            if (model == null) return NotFound();

            _context.TurmaUsuarios.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }


        [Authorize(Roles = "Administrador,Professor")]
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Turmas
                .Include(t => t.Usuarios).ThenInclude(t => t.Usuario)
                .Include(t => t.Alunos).ThenInclude(t => t.Aluno)
                .Where(c => c.Id == id)
                .Select(u => new
                {
                    u.Id,
                    u.NumeroTurma,
                    u.AnoLetivo,
                    Usuarios = u.Usuarios.Select(a => new
                    {
                        a.UsuarioId,
                        a.Usuario.Nome
                    }).ToList(),
                    Alunos = u.Alunos.Select(t => new
                    {
                        t.AlunoId,
                        t.Aluno.Nome,
                        t.Aluno.Matricula
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (model == null) return NotFound();


            return Ok(model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Turma model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Turmas.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Turmas.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Turmas.FindAsync(id);

            if (model == null) return NotFound();

            _context.Turmas.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }


        [Authorize(Roles = "Administrador")]
        [HttpPost("{id}/alunos")]
        public async Task<ActionResult> AddAluno(int id, TurmaAlunos model)
        {
            if (id != model.TurmaId) return BadRequest();
            _context.TurmaAluno.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.TurmaId }, model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}/alunos/{AlunoId}")]
        public async Task<ActionResult> DeleteAluno(int id, int AlunoId)
        {
            var model = await _context.TurmaAluno
                .Where(c => c.TurmaId == id && c.AlunoId == AlunoId)
                .FirstOrDefaultAsync();
            if (model == null) return NotFound();

            _context.TurmaAluno.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }
    }
}
