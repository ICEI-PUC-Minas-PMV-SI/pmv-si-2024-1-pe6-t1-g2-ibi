//get o usuario que será editado

const idForm = document.getElementById('id-form');
const nomeForm = document.getElementById('nome');
const passwordForm = document.getElementById('password');
const perfilForm = document.getElementById('perfil');




function preencherCampos(data) {
    idForm.value = `${data.id}`
    nomeForm.placeholder = `${data.nome}`;
    perfilForm.value = `${data.perfil}`;
    document.getElementById('perfil-display').value = `${getPerfilName(data.perfil)}`;
}

async function getUserByID() {
    const searchId = document.getElementById("search-id").value;
    fetch(`https://localhost:7247/api/Usuarios/${searchId}`)
    .then(response => response.json())
    .then(data=> preencherCampos(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });
}  

async function deleteUser(){
    const idToDelete = idForm.value;
    fetch(`https://localhost:7247/api/Usuarios/${idToDelete}`, {
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
        "id": parseInt(idToUpdate, 10),
        "nome": nomeForm.value,
        "perfil": parseInt(perfilForm.value, 10),
        "password": passwordForm.value
    }
    fetch(`https://localhost:7247/api/Usuarios/${idToUpdate}`, {
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

document.getElementById('btn-editar').addEventListener("click", updateUser);
document.getElementById('btn-excluir').addEventListener("click", deleteUser);
document.getElementById('search-btn').addEventListener("click",getUserByID);