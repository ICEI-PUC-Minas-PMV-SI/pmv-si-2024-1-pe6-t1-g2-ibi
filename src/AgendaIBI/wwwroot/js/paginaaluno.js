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
const userId = params.id;

// Exibe os detalhes do usuário
if (userId) {
    displayUserDetails(userId);
} else {
    alert('ID do aluno não fornecido');
}

// Função para exibir os detalhes do usuário
function displayUserDetails(userId) {

    const baseUrl = 'https://garods-001-site1.dtempurl.com/api/';
    
    fetch(baseUrl + `Alunos/${userId}`)
    .then(response => response.json())
    .then(data => imprimirAluno(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });    

    function imprimirAluno(data){

        const datas = data.dataNascimento;
        data1 = datas.slice(0,10);
        data2 = data1.split("-");
        const datanova = data2[2] + "/" + data2[1] + "/" + data2[0];

        const responsavel = getResponsaveis(data.usuarios);

        const turma = getTurma(data.turmas);
        

        const userDetailsDiv = document.getElementById('user-details');
            userDetailsDiv.innerHTML = `
                <tr class="table-line">
                    <td class="column-1">ID:</td>
                    <td>${data.id}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Nome:</td>
                    <td>${data.nome}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Matricula:</td>
                    <td>${data.matricula}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Data de nascimento:</td>
                    <td>${datanova}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Responsáveis:</td>
                    <td>${responsavel}</td>
                </tr>
                <tr class="table-line">
                    <td class="column-1">Turma:</td>
                    <td>${turma}</td>
                </tr>
                
            `;

            function getResponsaveis(usuarios){
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
            
            function getTurma(turmas){
                let tempTurmas = ""

                if (turmas && turmas.length > 0) {
                    turmas.forEach((turma) => {                        
                        tempTurmas += turma.numeroTurma + " - Ano Letivo: " + turma.anoLetivo + "<br>";
                    });
                } else {
                    tempTurmas += "Sem turma vinculada<br>";
                }
                return tempTurmas;
            };
    };
    
}