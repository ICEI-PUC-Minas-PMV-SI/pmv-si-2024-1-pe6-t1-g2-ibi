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
            
            const token = data.jwtToken; 

            if (token) {
                localStorage.setItem('jwtToken', token);
                document.getElementById('login-response').innerText = 'Login successful!';
                
                window.location = "https://localhost:7247/calendario.html";
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
