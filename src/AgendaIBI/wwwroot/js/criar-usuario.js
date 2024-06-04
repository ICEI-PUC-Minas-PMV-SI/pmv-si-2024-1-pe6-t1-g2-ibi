document.getElementById('criar-usuario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const nome = document.getElementById('nome').value;
    const password = document.getElementById('password').value;
    const perfil = document.getElementById('perfil').value;

    const userData = {
      nome: nome,
      password: password,
      role: perfil
    };

    fetch('https://localhost:7247/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(data => {
      console.log('Usuário registrado com sucesso');
      // Faça algo com a resposta, se necessário
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});
