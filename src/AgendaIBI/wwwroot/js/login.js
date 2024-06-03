//login 
document.getElementById('login-autenticar').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const id = document.getElementById('id-usuario').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://localhost:7247/api/Usuarios/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Response data:', data); // Log para ver a estrutura completa da resposta
            
            // Verifique os campos disponíveis na resposta
            for (const [key, value] of Object.entries(data)) {
                console.log(`Response key: ${key}, value: ${value}`);
            }

            const token = data.jwtToken; // Certifique-se de que o nome do campo está correto
            console.log('Token:', token);

            if (token) {
                // Armazene o token JWT localmente (pode ser no localStorage, sessionStorage ou cookie)
                localStorage.setItem('jwtToken', token);
                document.getElementById('login-response').innerText = 'Login successful!';
                
                // Redireciona para outra página
                window.location = "https://localhost:7247/home.html";
            } else {
                document.getElementById('login-response').innerText = 'Login successful, but token is missing!';
            }
        } else {
            document.getElementById('login-response').innerText = 'Login failed: ' + response.statusText;
        }
    } catch (error) {
        document.getElementById('login-response').innerText = 'Error: ' + error.message;
    }
});
