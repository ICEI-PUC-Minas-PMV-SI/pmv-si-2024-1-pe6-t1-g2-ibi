//get o usuario que será editado

const baseUrl = 'https://localhost:7247/api/';
const idForm = document.getElementById('id-form');
const nomeForm = document.getElementById('nome');
const passwordForm = document.getElementById('password');
const perfilForm = document.getElementById('perfil');
const bodyTable = document.getElementById('table-body');
const headTable = document.getElementById('table-header');
const titleTable = document.getElementById('table-titulo');
const btnForm = document.getElementById('novo-TurmaAluno');



function preencherCampos(data) {
    idForm.value = data.id;
    nomeForm.placeholder = `${data.nome}`;
    perfilForm.value = data.perfil;
    document.getElementById('perfil-display').value = `${getPerfilName(data.perfil)}`;
    if(data.perfil === 1){mostrarTurmas(data.turmas)};
    if (data.perfil === 2){mostrarAlunos(data.alunos)};
}

async function getUserByID() {
    const searchId = document.getElementById("search-id").value;
    fetch(baseUrl + `Usuarios/${searchId}`)
    .then(response => response.json())
    .then(data=> preencherCampos(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });
}  

async function deleteUser(){
    const idToDelete = idForm.value;
    fetch(`Usuarios/${idToDelete}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json)
    .then(data => data)
    .catch(error => console.error('Erro ao deletar o usuário via API JSONServer', error)
    );
}

async function updateUser(){
    const idToUpdate = idForm.value;
    const formUpdate = {
        "id": idToUpdate,
        "nome": nomeForm.value,
        "perfil": +perfilForm.value,
        "password": passwordForm.value
    }
    fetch(`${baseUrl}Usuarios/${idToUpdate}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formUpdate)
    })
    .then(res => res.json)
    .then(data => window.location.reload())
    .catch(err => console.error('Erro ao deletar o usuário via API JSONServer', error))
}

function deleteTableEntry(button){
    const linhaTabela = button.closest('tr');
    const linhaTabelaId = +linhaTabela.id.slice(6);
    const idUsuario = +idForm.value;
    
    fetch(`${baseUrl}Turmas/${linhaTabelaId}/Usuarios/${idUsuario}`, {
        method: "DELETE",
    })
    .then(res => res.json)
    .then(window.location.reload())
    .catch(err => console.error('Erro ao deletar o usuário via API JSONServer', error))
}

function mostrarTurmas(turmas){
    titleTable.innerHTML = '<h2>Turmas</h2>';
    headTable.innerHTML = `<tr class='table-header'>
                            <td>Numero</td>
                            <td>Ano Letivo</td>
                            <td>Numéro de Alunos</td>
                            <td></td>
                            </tr>`;
    let temp = '';
    turmas.forEach(turma => {
        temp += `<tr id="aluno-${turma.id}" class="linha-professor">`;
        temp += "<td>"+ turma.numeroTurma +"</td>";
        temp += "<td>"+ turma.anoLetivo +"</td>";
        temp += "<td>"+ turma.numeroAlunos + "</td>";
        return temp += `<td class="end-line"><button type="button" class="btn red-btn" onclick="deleteTableEntry(this)">Remover</button></td></tr>`;
        });
    bodyTable.innerHTML = temp;
    btnForm.innerHTML = `<button class="btn green-btn" onclick="addAlunoToTurma()">Adicionar turma</button>`;
}

function addAlunoToTurma (){
    const idTurma = prompt("Digite a turma que deseja adicionar a este professor");
    if(idTurma == null || idTurma == "" || isNaN(+idTurma)) alert("Verifique o numéro digitado");

}

document.getElementById('btn-editar').addEventListener("click", updateUser);
document.getElementById('btn-excluir').addEventListener("click", deleteUser);
document.getElementById('search-btn').addEventListener("click",getUserByID);