using API_ORIGINAL_01.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API_ORIGINAL_01.Controllers
{
    //[Authorize(Roles = "Administrador")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var usuarios = await _context.Usuarios
                .Include(u => u.Turmas)
                    .ThenInclude(ut => ut.Turma)
                .Include(u => u.Alunos)
                .Select(u => new
                {
                    u.Id,
                    u.Nome,
                    u.Perfil,
                    Alunos = u.Alunos.Select(a => new
                    {
                        a.AlunoId,
                        a.Aluno.Nome,
                        a.Aluno.Matricula
                    }).ToList(),
                    Turmas = u.Turmas.Select(t => new
                    {
                        t.Turma.NumeroTurma,
                        t.Turma.AnoLetivo
                    }).ToList()
                })
                .ToListAsync();

            return Ok(usuarios);
        }


        [HttpPost]

        public async Task<ActionResult> Creat(UsuarioDto model)
        {
            Usuario novo = new Usuario()
            {
                Nome = model.Nome,
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Perfil = model.Perfil

            };

            _context.Usuarios.Add(novo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = novo.Id }, novo);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Usuarios
                .Include(t => t.Alunos).ThenInclude(t => t.Aluno)
                .Include(t => t.Turmas).ThenInclude(t => t.Turma)
                .Where(c => c.Id == id)
                .Select(user => new
                {
                    user.Id,
                    user.Nome,
                    user.Perfil,
                    Alunos = user.Alunos.Select(a => new {
                        a.Aluno.Id,
                        a.Aluno.Matricula,
                        a.Aluno.Nome,
                        Turmas = a.Aluno.Turmas.Select(t => new {
                            t.Turma.AnoLetivo,
                            t.Turma.NumeroTurma
                        }).ToList()
                    }).ToList(),
                    Turmas = user.Turmas.Select(t => new {
                        t.Turma.Id,
                        t.Turma.NumeroTurma,
                        t.Turma.AnoLetivo,
                        NumeroAlunos = t.Turma.Alunos == null ? 0 : t.Turma.Alunos.Count()
                    }).ToList()
                })
                .FirstOrDefaultAsync();
            if (model == null) return NotFound();



            return Ok(model);



        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, UsuarioDto model)
        {
            if (id != model.Id) return BadRequest();

            var modeloDb = await _context.Usuarios.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            modeloDb.Nome = model.Nome;
            modeloDb.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
            modeloDb.Perfil = model.Perfil;

            _context.Usuarios.Update(modeloDb);
            await _context.SaveChangesAsync();

            return NoContent();


        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Usuarios.FindAsync(id);

            if (model == null) return NotFound();

            _context.Usuarios.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var usuarioDb = await _context.Usuarios.FindAsync(model.Id);

            if (usuarioDb == null || !BCrypt.Net.BCrypt.Verify(model.Password, usuarioDb.Password))
                return Unauthorized();

            var jwt = GenerateJwtToken(usuarioDb);

            return Ok(new { jwtToken = jwt });

        }

        private string GenerateJwtToken(Usuario model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Id.ToString()),
                new Claim(ClaimTypes.Role, model.Perfil.ToString())
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }






    }
}
