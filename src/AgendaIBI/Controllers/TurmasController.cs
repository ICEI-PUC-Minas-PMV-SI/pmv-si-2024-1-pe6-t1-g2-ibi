using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_ORIGINAL_01.Controllers
{
    [Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class TurmasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TurmasController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Turmas.ToListAsync();
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Turma model)
        {
            _context.Turmas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }  

        [HttpPost("{id}/usuarios")]
        public async Task<ActionResult> AddUsuario(int id, TurmaUsuarios model)
        {
    if (id != model.TurmaId) return BadRequest();
    _context.TurmaUsuarios.Add(model);
    await _context.SaveChangesAsync();

    return CreatedAtAction("GetById", new { id = model.TurmaId }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Turmas

                .Include(t => t.Alunos).ThenInclude(t => t.Aluno)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();


            return Ok(model);
        }

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


        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Turmas.FindAsync(id);

            if (model == null) return NotFound();

            _context.Turmas.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }






        [HttpPost("{id}/alunos")]
        public async Task<ActionResult> AddAluno(int id, TurmaAlunos model)
        {
            if (id != model.TurmaId) return BadRequest();
            _context.TurmaAluno.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.TurmaId }, model);
        }


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
