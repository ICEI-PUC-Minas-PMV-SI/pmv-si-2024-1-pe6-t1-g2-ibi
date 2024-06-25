document.getElementById('criar-usuario').addEventListener('submit', async function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const password = document.getElementById('password').value;
  const perfil = document.getElementById('perfil').value;
  
  const userData = {
    nome: nome,
    password: password,
    perfil: +perfil
  };
  try {
    const response = await fetch(baseUrl + 'api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      body: JSON.stringify(userData)
    })
    if(response.ok){
      alert(`Você criou um usuário com sucesso`);
      window.location.reload();
    }
  }catch(err) {console.log(err)}
});
