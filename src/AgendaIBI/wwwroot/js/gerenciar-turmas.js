const bodyTabela = document.getElementById('table-body');


fetch( baseUrl + 'api/Turmas',{
    headers: {'Authorization': "Bearer " + token}
})
    .then(response => response.json())
    .then(data => imprimirTurmas(data))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
});

function imprimirTurmas(data){
    let temp = "";
    data.forEach(turma => {
        temp += "<td>"+ turma.id +"</td>";
        temp += "<td><a href='Paginaturma.html?id=" + turma.id + "' class='page'>"+ turma.numeroTurma +"</td>";
        temp += "<td>"+ turma.anoLetivo +"</td>";
        temp += "<td>"+ getProfessores(turma.usuarios) + "</td></tr>";
    })
    bodyTabela.innerHTML = temp;
};

function getProfessores(usuarios){
    let tempUsuarios = ""
    if (usuarios && usuarios.length > 0) {
        usuarios.forEach(usuario => {
            if (usuario) {
                tempUsuarios += usuario.nome + "<br>";
            } else {
                tempUsuarios += "Sem professores vinculados<br>";
            }
        });
    }
    return tempUsuarios;
}

