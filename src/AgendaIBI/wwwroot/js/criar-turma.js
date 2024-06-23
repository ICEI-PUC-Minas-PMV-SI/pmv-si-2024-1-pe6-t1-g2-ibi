document.getElementById('criar-turma').addEventListener('submit', function(event) {
    event.preventDefault();

    const turma = document.getElementById('turma').value;
    const ano = document.getElementById('ano').value;
    
    const userData = {
      numeroTurma: turma,
      anoLetivo: ano
    };

    fetch('https://localhost:7247/api/turmas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(data => {
      //document.getElementById('resposta').innerText = `A turma foi criado com sucesso`;
      alert('A turma ' + turma + ' foi criada com sucesso!');
      window.location.reload()
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});
