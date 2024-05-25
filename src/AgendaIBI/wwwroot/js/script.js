// criar agenda
 document.getElementById('criar-agenda').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const dados = {};
    const form = event.currentTarget;


    formData.forEach((value, key) => {
            dados[key] = value;
    });

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');  
    checkboxes.forEach(checkbox => {
    if (!formData.has(checkbox.name)) {
        dados[checkbox.name] = false;
    } else {
        dados[checkbox.name] = checkbox.checked;
    }
});

    try {
        const resposta = await fetch('https://localhost:7247/api/Agendas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            const resultado = await resposta.json();
            document.getElementById('resposta').innerText = `Resposta da API: ${JSON.stringify(resultado)}`;
        } else {
            document.getElementById('resposta').innerText = `Erro na requisição: ${resposta.statusText}`;
        }
    } catch (erro) {
        document.getElementById('resposta').innerText = `Erro: ${erro.message}`;
    }
});

//login 
document.getElementById('login-autenticar').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const idUsuario = document.getElementById('id-usuario').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://localhost:7247/api/Usuarios/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ idUsuario, password })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;

            // Armazene o token JWT localmente (pode ser no localStorage, sessionStorage ou cookie)
            localStorage.setItem('jwtToken', token);

            console.log(token);
            document.getElementById('login-response').innerText = 'Login successful!';
        } else {
            document.getElementById('login-response').innerText = 'Login failed: ' + response.statusText;
        }
    } catch (error) {
        document.getElementById('login-response').innerText = 'Error: ' + error.message;
    }
});