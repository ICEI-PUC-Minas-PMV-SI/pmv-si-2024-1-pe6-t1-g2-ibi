document.getElementById('criar-aluno').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const data = document.getElementById('data').value;

    dia = data.split("/");

    const datanova = dia[2] + "-" + dia[1] + "-" + dia[0] + "T00:00:00.000";
    
    const userData = {
      matricula: matricula,
      nome: nome,
      dataNascimento: datanova
    };

    fetch('https://garods-001-site1.dtempurl.com/api/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(data => {
      //document.getElementById('resposta').innerText = `A turma foi criado com sucesso`;
      alert('Aluno(a) ' + nome + ' adicionado(a) com sucesso!');
      window.location.reload()
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});