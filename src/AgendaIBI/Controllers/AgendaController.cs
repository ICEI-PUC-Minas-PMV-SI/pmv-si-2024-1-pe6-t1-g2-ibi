using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_ORIGINAL_01.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AgendasController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AgendasController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Administrador,Professor")]
        [HttpGet]
        public async Task<ActionResult> GetAll()
        {

            var model = await _context.Agendas.ToListAsync();

            return Ok(model);
        }

        [Authorize(Roles = "Administrador,Professor")]
        [HttpPost]
        public async Task<ActionResult> Creat(Agenda model)
        {
            _context.Agendas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [Authorize(Roles = "Administrador,Professor")]
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Agendas

                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);

            return Ok(model);
        }


         [HttpGet("data/{alunoId}")]
         public async Task<ActionResult> GetByData(DateTime data, int  alunoId)
         {
         var model = _context.Agendas
         .Where(r => EF.Functions.DateDiffDay(r.Data, data) == 0 && r.AlunoId == alunoId)
         .ToList();
    
         // .FirstOrDefaultAsync(c => c.Data == data);
    
         if (model == null) return NotFound();

     

         return Ok(model);
         }

        
        [HttpGet("Aluno/{alunoId}")]
        public async Task<ActionResult> GetAllByAlunoId(int alunoId)
        {
            var agendas = await _context.Agendas
                .Where(a => a.AlunoId == alunoId)
                .ToListAsync();

            if (agendas == null || agendas.Count == 0)
            {
                return NotFound();
            }

            return Ok(agendas);
        }


        [Authorize(Roles = "Administrador,Professor")]
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Agenda model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Agendas.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Agendas.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();


        }

        [Authorize(Roles = "Administrador,Professor")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Agendas.FindAsync(id);

            if (model == null) return NotFound();

            _context.Agendas.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        

        private void GerarLinks(Agenda model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "Delete"));
        }
    }
}








