//receber todos os usuários
document.getElementById('table-contatos');

fetch('https://localhost:7247/api/Usuarios')
    .then(response => response.json())
    .then(data => {
        const linhaTabela = document.getElementById('table-contatos');
        let temp = "";
        data.forEach(usuario => {
            temp += "<tr>";
            temp += "<td>"+ usuario.id +"</td>";
            temp += "<td>"+ usuario.nome +"</td>";
            temp += "<td>" + getPerfilName(usuario.perfil) + "</td>";
            // temp += "<td>" + (usuario.perfil === 1 ? getTurmas(usuario.turmas) : "") + "</td>";
            switch(usuario.perfil){
                case 1:
                    return temp += "<td>" + getTurmas(usuario.turmas) + "</td>";
                case 2:
                    return temp += "<td>" + getAlunos(usuario.alunos) + "</td>";
                default:
                    return "<td></td>"
            }
            temp += "</tr>"
        });

        linhaTabela.innerHTML = temp;
    })
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });

    function getPerfilName(perfil) {
        switch(perfil) {
            case 0:
                return "Administrador";
            case 1:
                return "Professor";
            case 2:
                return "Responsavel";
            default:
                return "Desconhecido";
        }
    }

//Retornar as turmas para impressão no html para usuários professores
function getTurmas(turmas){
    let tempTurmas = ""
    if (turmas && turmas.length > 0) {
        turmas.forEach(turma => {
            console.log(turma)
            if (turma) {
                tempTurmas += "Turma: " + turma.numeroTurma + " - Ano Letivo: " + turma.anoLetivo + "<br>";
            } else {
                tempTurmas += "Turma não disponível<br>";
            }
        });
    }
    return tempTurmas;
}

function getAlunos(alunos){
    let tempAlunos = ""
    if (alunos && alunos.length > 0) {
        alunos.forEach(aluno => {
            console.log(aluno)
            if (aluno) {
                tempAlunos += "Aluno: " + aluno.nome + " - Matricula: " + aluno.matricula + "<br>";
            } else {
                tempAlunos += "Aluno não disponível<br>";
            }
        });
    } else {
        tempAlunos += "Sem Alunos Matriculados";
    }
    return tempAlunos;
}




