const bodyTabela = document.getElementById('table-body');


fetch( baseUrl + 'api/Alunos',{
    headers: {'Authorization': "Bearer " + token}
})
    .then(response => response.json())
    .then(data => imprimirTurmas(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
});

function imprimirTurmas(data){
    let temp = "";
    data.forEach(aluno => {
        temp += "<td>"+ aluno.id +"</td>";
        temp += "<td><a href='Paginaaluno.html?id=" + aluno.id + "' class='page'>"+ aluno.nome +"</a></td>";
        temp += "<td>"+ getTurma(aluno.turmas) + "</td>";
        temp += "<td>"+ getResponsaveis(aluno.usuarios) + "</td></tr>";
    })
    bodyTabela.innerHTML = temp;
};

function getResponsaveis(usuarios){
    let tempUsuarios = ""
    if (usuarios && usuarios.length > 0) {
        usuarios.forEach(usuario => {
            if (usuario) {
                tempUsuarios += usuario.nome + "<br>";
            } else {
                tempUsuarios += "Sem responsáveis vinculados<br>";
            }
        });
    }
    return tempUsuarios;
}

function getTurma(turmas){
    let tempTurmas = ""
    if (turmas && turmas.length > 0) {
        turmas.forEach(turma => {
            if (turma) {
                tempTurmas += turma.numeroTurma + "<br>";
            } else {
                tempTurmas += "Sem turma vinculada<br>";
            }
        });
    }
    return tempTurmas;
}


