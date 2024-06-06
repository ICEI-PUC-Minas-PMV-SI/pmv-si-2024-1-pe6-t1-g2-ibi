// Função para obter e decodificar o token JWT do localStorage
function getUserRole() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            console.log(decodedToken);
            return decodedToken.role; // Retorna o papel (role) do usuário
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    }
    return null;
}

// Função para renderizar a UI com base na role do usuário
function renderUI() {
    const role = getUserRole();

    // Verificar a role do usuário e ocultar elementos de acordo
    switch (role) {
        case 'Administrador':
            // Ocultar elementos específicos para administradores, se existirem
            document.querySelectorAll('.admin-only').forEach(el => {
                el.style.display = 'none';
            });
            break;
        case 'Professor':
            // Ocultar elementos específicos para professores, se existirem
            document.querySelectorAll('.teacher-only').forEach(el => {
                el.style.display = 'none';
            });
            break;
        case 'Responsavel':
            // Ocultar elementos específicos para responsáveis, se existirem
            document.querySelectorAll('.user-only').forEach(el => {
                el.style.display = 'none';
            });
            break;
        default:
            // Caso o papel (role) do usuário não seja reconhecido
            window.location = "https://localhost:7247/index.html";
            break;
    }
}

// Chame renderUI quando a página for carregada
document.addEventListener('DOMContentLoaded', function() {
    renderUI();
});
