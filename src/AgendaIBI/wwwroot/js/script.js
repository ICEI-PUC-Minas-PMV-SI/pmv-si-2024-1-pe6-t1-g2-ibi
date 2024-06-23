
function getUserRole() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        try {
            const decodedToken = jwt_decode(token);
            return decodedToken.role; 
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
        window.location.href = "https://localhost:7247/login.html";
        return false;
    }
    return true;
}

function renderUI() {
    const role = getUserRole();

    switch (role) {
        case 'Administrador':
            document.querySelectorAll('.admin-only').forEach(el => {
                el.style.display = 'none';
            });
            break;
        case 'Professor':
            document.querySelectorAll('.teacher-only').forEach(el => {
                el.style.display = 'none';
            });
            break;
        case 'Responsavel':
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

    const allowedRolesString = document.body.getAttribute('data-allowed-roles');
    if (!allowedRolesString) {
        console.error("Atributo 'data-allowed-roles' não encontrado no elemento <body>.");
        window.location.href = "https://localhost:7247/calendario.html";
        return;
    }
    const allowedRoles = allowedRolesString.split(',').map(role => role.trim());

    if (checkAuthorization(allowedRoles)) {
        renderUI();

    }
});

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

function goBack() {
    history.back();
}
