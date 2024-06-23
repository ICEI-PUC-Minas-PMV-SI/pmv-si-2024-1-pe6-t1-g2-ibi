const baseUrl = 'https://localhost:7247/api/';

// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const vars = queryString.split('&');
    vars.forEach(param => {
        const pair = param.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    });
    return params;
}

// Obtém os parâmetros da URL
const params = getQueryParams();
const turmaId = params.id;

// Exibe os detalhes do usuário
if (turmaId) {
    displayUserDetails(turmaId);
} else {
    alert('ID da turma não fornecido');
}

// Função para exibir os detalhes do usuário
function displayUserDetails(turmaId) {
    
    fetch(baseUrl + `Turmas/${turmaId}`)
    .then(response => response.json())
    .then(data => imprimirTurma(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });    

    function imprimirTurma(data){

        const professor = getProfessores(data.usuarios);

        const alunos = getAlunos(data.alunos);
        

        const userDetailsDiv = document.getElementById('user-details');
            userDetailsDiv.innerHTML = `
                <tr class="table-line">
                    <td class="column-1">ID:</td>
                    <td>${data.id}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Número da turma:</td>
                    <td>${data.numeroTurma}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Ano letivo:</td>
                    <td>${data.anoLetivo}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Professores:</td>
                    <td>${professor}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Alunos:</td>
                    <td>${alunos}</td>
                </tr>                
            `;        

        function getProfessores(usuarios){
            let tempUsuarios = ""

            if (usuarios && usuarios.length > 0) {
                usuarios.forEach((usuario) => {                        
                    tempUsuarios += usuario.nome + "<br>";
                });
            } else {
                tempUsuarios += "Sem responsáveis vinculados<br>";
            }
            return tempUsuarios;
        }; 
            
        function getAlunos(alunos){
            let tempAlunos = ""

            if (alunos && alunos.length > 0) {
                alunos.forEach((aluno) => {                        
                    tempAlunos += aluno.nome + "<br>";
                });
            } else {
                tempAlunos += "Sem alunos vinculados<br>";
            }
            return tempAlunos;
        };
    };
    
}

//Adicionar aluno à turma
function addAlunoToTurma (){
    const idAluno = prompt("Digite o id do aluno que deseja adicionar à esta turma");
    if(idAluno == null) return;
    if(idAluno == "" || isNaN(+idAluno)) return alert("Verifique o numéro digitado");
    addAluno(idAluno);
}

async function addAluno(idAluno){
    userData = {
        turmaId: +turmaId,
        alunoId: +idAluno
    }

    try {
        const response = await fetch(`${baseUrl}Turmas/${turmaId}/Alunos`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(userData)
        })
        if(response.ok) {
            alert(`Você adicionou à turma ${turmaId} o(a) aluno(a) de id ${idAluno}`);
            window.location.reload();
    }
    } catch(err){console.log(err);}
}


//Remover aluno da turma
function removeAlunoToTurma (){
    const idAlunoDel = prompt("Digite o id do aluno que deseja remover da turma");
    if(idAlunoDel == null) return;
    if(idAlunoDel == "" || isNaN(+idAlunoDel)) return alert("Verifique o numéro digitado");
    deleteTableEntry(idAlunoDel);
}

async function deleteTableEntry(idAlunoDel){
    const idAlunoDelete = +idAlunoDel;
    const idTurmaDelete = +turmaId;

    try {
        let response;
        response = await fetch(`${baseUrl}Turmas/${idTurmaDelete}/Alunos/${idAlunoDelete}`, {
            method: "DELETE",
        })
        if(response.ok){
            alert(`Você removeu o id ${idAlunoDelete} da turma ${idTurmaDelete}`);
            window.location.reload();
    }}
    catch(err) {console.log(err)}
}

//Excluir turma
async function excluirTurma () {
    var confirmado = confirm('Ceteza que deseja excluir essa turma?');
    if(confirmado){
        try {
            const response = await fetch(`${baseUrl}Turmas/${turmaId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }})
                if(response.ok) {
                    alert(`Você excluiu a turma ${turmaId}`);
                    window.location.assign('https://localhost:7247/Gerenciarturmas.html');
              }
            } catch(err){console.log(err);}
    }
}