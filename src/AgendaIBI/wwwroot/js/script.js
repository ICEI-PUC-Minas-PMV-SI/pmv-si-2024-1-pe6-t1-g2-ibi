// Função para obter e decodificar o token JWT do localStorage
function getUserRole() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            return decodedToken.role; // Retorna o papel (role) do usuário
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    }
    return null;
}

function checkAuthorization(allowedRoles) {
    const role = getUserRole();
    if (!role || !allowedRoles.includes(role)) {
        // Redireciona para a página inicial se o usuário não estiver autorizado
        window.location.href = "https://localhost:7247/login.html";
        return false;
    }
    return true;
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
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const botaoLogout = document.getElementById('logout');
    if (botaoLogout) {
        botaoLogout.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.removeItem("jwtToken");
            window.location.href = "https://localhost:7247/login.html";
        });
    } else {
        console.error("Elemento com ID 'logout' não encontrado.");
    }

    // Obter as roles permitidas do atributo data-allowed-roles
    const allowedRolesString = document.body.getAttribute('data-allowed-roles');
    if (!allowedRolesString) {
        console.error("Atributo 'data-allowed-roles' não encontrado no elemento <body>.");
        window.location.href = "https://localhost:7247/calendario.html";
        return;
    }
    const allowedRoles = allowedRolesString.split(',').map(role => role.trim());

    // Verifique a autorização antes de renderizar a UI
    if (checkAuthorization(allowedRoles)) {
        // Chame renderUI quando a página for carregada e o usuário estiver autorizado
        renderUI();

    }
});

//retornar o nome de cada perfil
function getPerfilName(perfil) {
    switch(perfil) {
        case 0:
            return "Administrador";
        case 1:
            return "Professor";
        case 2:
            return "Responsavel";
    }
}
