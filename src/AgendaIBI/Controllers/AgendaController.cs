using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_ORIGINAL_01.Controllers
{
    //[Authorize(Roles = "Administrador, Professor")]
    [Route("api/[controller]")]
    [ApiController]
    public class AgendasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AgendasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {

            var model = await _context.Agendas.ToListAsync();

            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Creat(Agenda model)
        {
            _context.Agendas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Agendas

                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            GerarLinks(model);

            return Ok(model);



        }


       

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








