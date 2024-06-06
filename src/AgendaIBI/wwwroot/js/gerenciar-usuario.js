//receber todos os usuários

function readContato(processaDados) {
    fetch('https://localhost:7247/api/Usuarios')
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler contatos via API JSONServer:', error);
        });
}

console.log(readContato);