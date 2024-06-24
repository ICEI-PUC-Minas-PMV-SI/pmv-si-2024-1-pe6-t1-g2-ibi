document.getElementById('btn-editar').addEventListener("click", updateUser);
document.getElementById('btn-excluir').addEventListener("click", deleteUser);
document.getElementById('search-btn').addEventListener("click",getUserByID);

const idForm = document.getElementById('id-form');
const nomeForm = document.getElementById('nome');
const passwordForm = document.getElementById('password');
const perfilForm = document.getElementById('perfil');
const bodyTable = document.getElementById('table-body');
const headTable = document.getElementById('table-header');
const titleTable = document.getElementById('table-titulo');
const btnForm = document.getElementById('novo-TurmaAluno');

async function getUserByID() {
    const searchId = document.getElementById("search-id").value;
    fetch(baseUrl + `api/Usuarios/${searchId}`)
    .then(response => {
        if (response.status === 404) {
          alert('Usuário não encontrado');
          throw new Error('Erro 404: Recurso não encontrado');
        } else {
          return response.json();
        }
      })
    .then(data=> preencherCampos(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });
}  

function preencherCampos(data) {

    idForm.value = data.id;
    nomeForm.value = data.nome;
    perfilForm.value = data.perfil;
    document.getElementById('perfil-display').value = `${getPerfilName(data.perfil)}`;
    if(data.perfil === 1){mostrarTurmas(data.turmas)};
    if (data.perfil === 2){mostrarAlunos(data.alunos)};
}

async function deleteUser(){
    const idToDelete = idForm.value;
    try {
    const response = await fetch(baseUrl + `api/Usuarios/${idToDelete}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }})
        if(response.ok) {
            alert(`Você excluiu o usuário ${idToDelete}`);
            window.location.reload();
      }
    } catch(err){console.log(err);}
}

async function updateUser(){
    const idToUpdate = idForm.value;
    const formUpdate = {
        "id": idToUpdate,
        "nome": nomeForm.value,
        "perfil": +perfilForm.value,
        "password": passwordForm.value
    }
    try {const response = await fetch(baseUrl + `api/Usuarios/${idToDelete}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formUpdate)
    })
    if(response.ok) {
        alert(`Você atualizou o usuário ${idToUpdate}`);
        window.location.reload();
  }} catch(err){console.log(err);}
}


function mostrarTurmas(turmas){
    titleTable.innerHTML = '<h2>Turmas</h2>';
    headTable.innerHTML = `<tr class='table-header'>
                            <td>Id</td>
                            <td>Nº da Turma</td>
                            <td>Ano Letivo</td>
                            <td>Número de Alunos</td>
                            <td></td>
                            </tr>`;
    let temp = '';
    turmas.forEach(turma => {
        temp += `<tr id="turma-${turma.id}" class="linha-professor">`;
        temp += "<td>"+ turma.id +"</td>";
        temp += "<td><a href='Paginaturma.html?id=" + turma.id + "' class='page'>"+ turma.numeroTurma +"</td>";
        temp += "<td>"+ turma.anoLetivo +"</td>";
        temp += "<td>"+ turma.numeroAlunos + "</td>";
        return temp += `<td class="end-line"><button type="button" class="btn red-btn" onclick="deleteTableEntry(this)">Remover</button></td></tr>`;
        });
    bodyTable.innerHTML = temp;
    btnForm.innerHTML = `<button class="btn green-btn" onclick="addUsuarioToTurma()">Adicionar turma</button>`;
}

function mostrarAlunos(alunos){
    titleTable.innerHTML = '<h2>Alunos</h2>';
    headTable.innerHTML = `<tr class='table-header'>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Nº da Matrícula</td>                            
                            <td>Turma</td>
                            <td></td>
                            </tr>`;
    let temp = '';
    alunos.forEach(aluno => {
        temp += `<tr id="aluno-${aluno.id}" class="linha-aluno">`;
        temp += "<td>"+ aluno.id +"</td>";        
        temp += "<td> <a href='Paginaaluno.html?id=" + aluno.id + "' class='page'>"+ aluno.nome +"</td>";
        temp += "<td>"+ aluno.matricula +"</td>";
        temp += "<td>" + getTurmas(aluno.turmas) + "</td>";
        return temp += `<td class="end-line"><button type="button" class="btn red-btn" onclick="deleteTableEntry(this)">Remover</button></td></tr>`;
        });
    bodyTable.innerHTML = temp;
    btnForm.innerHTML = `<button class="btn green-btn" onclick="addUsuarioToAluno()">Adicionar aluno</button>`;
}

async function deleteTableEntry(button){
    const linhaTabela = button.closest('tr');
    const idLinha = linhaTabela.id;
    const idToDelete = +linhaTabela.id.slice(6);
    const idUsuario = +idForm.value;
    try {
        let response;
        if(idLinha.startsWith('turma')){
            response = await fetch(baseUrl + `api/Turmas/${idToDelete}/Usuarios/${idUsuario}`, {
                method: "DELETE",
            })
            if(response.ok){
                alert(`Você excluiu o ${getPerfilName(+perfilForm.value).toLowerCase()} da turma ${idToDelete}`);
                window.location.reload();
            }}  else if(idLinha.startsWith('aluno')){
            response = await fetch(baseUrl + `api/Alunos/${idToDelete}/Usuarios/${idUsuario}`, {
                method: "DELETE",
            })
            if(response.ok){
                alert(`Você excluiu o ${getPerfilName(+perfilForm.value).toLowerCase()} do aluno ${idToDelete}`);
                window.location.reload();
        }
        } 
        }
    catch(err) {console.log(err)}
}



function addUsuarioToTurma (){
    const idTurma = prompt("Digite o id da turma que deseja adicionar este professor");
    if(idTurma == null) return;
    if(idTurma == "" || isNaN(+idTurma)) return alert("Verifique o numéro digitado");
    addTurma(idTurma);
}

async function addTurma(idTurma){
    userData = {
        usuarioId: +idForm.value,
        turmaId: +idTurma
    }
    try {
        const response = await fetch(baseUrl + `api/Turmas/${idTurma}/Usuarios`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert(`Você adicionou o professor a turma de id ${idTurma}`);
            window.location.reload();
      }
    } catch(err){console.log(err);}
}

function addUsuarioToAluno (){
    const idAluno = prompt("Digite o id do aluno que deseja adicionar este responsável");
    if(idAluno == null) return;
    if(idAluno == "" || isNaN(+idAluno)) return alert("Verifique o numéro digitado");
    addAluno(idAluno);
}

async function addAluno(idAluno){
    userData = {
        usuarioId: +idForm.value,
        alunoId: +idAluno
    }
    try {
        const response = await fetch(baseUrl + `api/Alunos/${idAluno}/Usuarios`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert(`Você adicionou o responsável ao aluno de id ${idAluno}`);
            window.location.reload();
      }
    } catch(err){console.log(err);}
}








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