document.getElementById('search-btn').addEventListener("click",getUserByID);

const baseUrl = 'https://localhost:7247/api/';

async function getUserByID() {
    const searchId = document.getElementById("search-id").value;
    fetch(baseUrl + `Alunos/${searchId}`)
    .then(response => {
        if (response.status === 404) {
          alert('Aluno não encontrado');
          throw new Error('Erro 404: Recurso não encontrado');
        } else {
          return response.json();
        }
      })
    .then(data=> preencherInfo(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });
}

function preencherInfo(data) {

    const userName = document.getElementById('aluno-nome');
        userName.innerHTML = `${data.nome}`;

}

function callCalendar(date) {
    var datasQuery = date.toISOString();
    var datas = datasQuery.split('T');
    const searchId = document.getElementById("search-id").value;

    if (searchId == "") {
        alert("Insira o ID do aluno")
    } else {
        var url = `Agendaaluno.html?id=${searchId}&data=${datas[0]}`;
        window.location.href = url;
    };
}

