function pedirSenha() {
    var senha = prompt("Digite sua senha:");
    if (senha == null || senha == "") {
        txt = "Para prosseguir digite sua senha"
        event.preventDefault();
    } else {
        txt = "Acesso liberado"
    }
    alert(txt);
}

