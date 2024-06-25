document.getElementById('btn-editar').addEventListener("click", updateUser);
document.getElementById('btn-excluir').addEventListener("click", deleteUser);
document.getElementById('search-btn').addEventListener("click",getUserByID);

const idForm = document.getElementById('id-form');
const nomeForm = document.getElementById('nome');
const matriculaForm = document.getElementById('matricula');
const dataForm = document.getElementById('data');


async function getUserByID() {
    const searchId = document.getElementById("search-id").value;
    fetch(baseUrl + `api/Alunos/${searchId}`)
    .then(response => {
        if (response.status === 404) {
          alert('Aluno não encontrado');
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

    const datas = data.dataNascimento;
    const data1 = datas.slice(0,10);
    const data2 = data1.split("-");
    const datanova = data2[2] + "/" + data2[1] + "/" + data2[0];

    idForm.value = data.id;
    nomeForm.value = data.nome;
    matriculaForm.value = data.matricula;
    dataForm.value = datanova;
}

async function deleteUser(){
    const idToDelete = idForm.value;
    try {
    const response = await fetch(baseUrl + `api/Alunos/${idToDelete}`, {
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

    const dataFormatada= dataForm.value;
    dia = dataFormatada.split("/");
    const dataFormatada2 = dia[2] + "-" + dia[1] + "-" + dia[0] + "T00:34:39.578";

    const formUpdate = {
        "id": idToUpdate,
        "nome": nomeForm.value,
        "matricula": matriculaForm.value,
        "dataNascimento": dataFormatada2
    }
    try {const response = await fetch(baseUrl + `api/Alunos/${idToUpdate}`, {
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