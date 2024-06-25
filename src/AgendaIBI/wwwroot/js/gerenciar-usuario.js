//receber e impprimir todos os usuários na tabela


const bodyTabela = document.getElementById('table-body');
const headTabela = document.getElementById('table-head');



const mostrarProfessor = document.getElementById('mostrar-professor');
const mostrarResponsavel = document.getElementById('mostrar-responsavel');


mostrarProfessor.addEventListener("click", imprimirProfessores);
mostrarResponsavel.addEventListener("click", imprimirResponsavel);

fetch(baseUrl +'api/Usuarios',{
    headers: {'Authorization': "Bearer " + token}
})
    .then(response => response.json())
    .then(data => imprimirUsuarios(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
});

function imprimirUsuarios(data){
    let temp = "";
    data.forEach(usuario => {
        if (usuario.perfil==1){
            temp += '<tr style="display:none;" class="linha-professor">'
        } else if (usuario.perfil==2){
            temp += '<tr style="display:none;" class="linha-responsavel">';
        } else {
            temp += '<tr style="display:none;">';
        }
        temp += "<td>"+ usuario.id +"</td>";
        temp += "<td>"+ usuario.nome +"</td>";
        temp += "<td>"+ getPerfilName(usuario.perfil) + "</td>";
        switch(usuario.perfil){
            case 1:
                return temp += "<td>" + getTurmas(usuario.turmas) + "</td></tr>";
            case 2:
                return temp += "<td>" + getAlunos(usuario.alunos) + "</td></tr>";
            default:
                return temp += "<td></td></tr>"
        }
        
        
    })
    bodyTabela.innerHTML = temp;
};

function getTurmas(turmas){
    let tempTurmas = ""
    if (turmas && turmas.length > 0) {
        turmas.forEach(turma => {
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

function imprimirProfessores(){
    const linhasTabela = document.querySelectorAll("#table-body tr");
    headTabela.innerHTML = `<tr class="table-header">
                            <td>ID</td>
                            <td>Nome usuário</td>
                            <td>Perfil</td>
                            <td>Turmas</td>
                            </tr>`;
    linhasTabela.forEach(linha => {
        if(linha.classList.contains("linha-professor")==true){
            linha.style.display= "table-row";
        }   else {
            linha.style.display= "none";
        }
    })
}

function imprimirResponsavel(){
    const linhasTabela = document.querySelectorAll("#table-body tr");
    headTabela.innerHTML = `<tr class="table-header">
                            <td>ID</td>
                            <td>Nome usuário</td>
                            <td>Perfil</td>
                            <td>Alunos</td>
                        </tr>`;
    linhasTabela.forEach(linha => {
        if(linha.classList.contains("linha-responsavel")==true){
            linha.style.display= "table-row";
        } else {
            linha.style.display= "none";
        }
    })
}


