using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace API_ORIGINAL_01.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AlunosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AlunosController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            //var model = await _context.Alunos.ToListAsync();
            var model = await _context.Alunos
                .Include(u => u.Usuarios)
                    .ThenInclude(ut => ut.Usuario)
                .Include(u => u.Turmas)
                .Select(u => new
                {
                    u.Id,
                    u.Matricula,
                    u.Nome,
                    u.DataNascimento,
                    Usuarios = u.Usuarios.Select(a => new
                    {
                        a.UsuarioId,
                        a.Usuario.Nome
                    }).ToList(),
                    Turmas = u.Turmas.Select(t => new
                    {
                        t.TurmaId,
                        t.Turma.NumeroTurma,
                        t.Turma.AnoLetivo
                    }).ToList()
                })
                .ToListAsync();
            return Ok(model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public async Task<ActionResult> Creat(Aluno model)
        {
            _context.Alunos.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }



        [Authorize(Roles = "Administrador,Professor")]
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Alunos
                .Include(t => t.Usuarios).ThenInclude(t => t.Usuario)
                .Include(t => t.Turmas).ThenInclude(t => t.Turma)
                .Where(c => c.Id == id)
                .Select(u => new
                {
                    u.Id,
                    u.Matricula,
                    u.Nome,
                    u.DataNascimento,
                    Usuarios = u.Usuarios.Select(a => new
                    {
                        a.UsuarioId,
                        a.Usuario.Nome
                    }).ToList(),
                    Turmas = u.Turmas.Select(t => new
                    {
                        t.TurmaId,
                        t.Turma.NumeroTurma,
                        t.Turma.AnoLetivo
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            if (model == null) return NotFound();

            //GerarLinks(model);

            return Ok(model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpPut("{id}")]
        public async Task<ActionResult> update(int id, Aluno model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Alunos.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Alunos.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();


        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Alunos.FindAsync(id);

            if (model == null) return NotFound();

            _context.Alunos.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }

        private void GerarLinks(Aluno model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost("{id}/usuarios")]
        public async Task<ActionResult> AddUsuario(int id, AlunosResponsaveis model)
        {
            //if (id != model.AlunoId) return BadRequest();
            _context.AlunosResponsaveis.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.AlunoId }, model);
        }

        [Authorize(Roles = "Administrador")]
        [HttpDelete("{id}/usuarios/{UsuarioId}")]
        public async Task<ActionResult> DeleteUsuario(int id, int UsuarioId)
        {
            var model = await _context.AlunosResponsaveis
                .Where(c => c.AlunoId == id && c.UsuarioId == UsuarioId)
                .FirstOrDefaultAsync();
            if (model == null) return NotFound();

            _context.AlunosResponsaveis.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }
    }
}
