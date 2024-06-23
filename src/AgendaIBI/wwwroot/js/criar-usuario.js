document.getElementById('criar-usuario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const password = document.getElementById('password').value;
    const perfil = document.getElementById('perfil').value;
    
    const userData = {
      nome: nome,
      password: password,
      perfil: parseInt(perfil, 10)
    };

    fetch('https://localhost:7247/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(data => {
      //document.getElementById('resposta').innerText = `O usuário foi criado com sucesso`;
      alert('O usuário ' + nome + ' foi criado com sucesso!');
      window.location.reload()   
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});
