// Função para obter os parâmetros da URL
function getQueryParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var regex = /([^&=]+)=([^&]*)/g;
    var m;
    while ((m = regex.exec(queryString)) !== null) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

// Usando a função para obter os parâmetros
var queryParams = getQueryParams();
var searchId = queryParams.id;
var data = queryParams.data;

if (searchId && data) {
    displayUserDetails(searchId, data);
} else {
    alert('ID do aluno não fornecido');
}

// Função para exibir os detalhes do usuário
function displayUserDetails(userId, dia) {

    document.getElementById('btn-editar').addEventListener("click", updateAgenda);
    document.getElementById('btn-excluir').addEventListener("click", deleteAgenda);

    const baseUrl = 'https://localhost:7247/api/';
    const idAlunoForm = document.getElementById('alunoID');
    const dataForm = document.getElementById('data');
    const cafe = document.getElementById('cafe');
    const almoco = document.getElementById('almoco');
    const lanche = document.getElementById('lanche');
    const jantar = document.getElementById('jantar');
    const evacuacao = document.getElementById('evacuacao');
    const repouso = document.getElementById('repouso');
    const medicacao = document.getElementById('medicacao');
    const atividade = document.getElementById('atividade');
    const lenco = document.getElementById('check-lenco');
    const pomada = document.getElementById('check-pomada');
    const mantinha = document.getElementById('check-mantinha');
    const toalha = document.getElementById('check-toalha');
    const bico = document.getElementById('check-bico');
    const chinelo = document.getElementById('check-chinelo');
    const roupa = document.getElementById('check-roupa');
    const shampoo = document.getElementById('check-shampoo');
    const condicionador = document.getElementById('check-condicionador');
    const sabonete = document.getElementById('check-sabonete');
    const pente = document.getElementById('check-pente');
    const obsProf = document.getElementById('obsprof');
    const obsResp = document.getElementById('obsresp');
    
    fetch(baseUrl + `Agendas`)
    .then(response => response.json())
    .then(data => imprimirAgenda(data, userId, dia))    
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });

    fetch(baseUrl + `Alunos/${searchId}`)
    .then(response => response.json())
    .then(aluno=> preencherAluno(aluno))
    .catch(error => {
        console.error('Erro ao ler contatos via API JSONServer:', error);
    });


    function preencherAluno(aluno){
        document.getElementById('nome-aluno').textContent = `${aluno.nome}`;
    }

    function imprimirAgenda(data, idAluno, dataAgenda){

        let found = false;

        for (let agenda of data) {

            const data1 = agenda.data;
            const data2 = data1.split('T');

            // Verificando se o item atual atende aos critérios especificados
            if (String(agenda.alunoId) === idAluno && data2[0] == dataAgenda) {
                found = true;
                idAlunoForm.value = agenda.alunoId;
                dataForm.value = dataAgenda;
                cafe.value = agenda.cafeDaManha;
                almoco.value = agenda.almoco;
                lanche.value = agenda.lancheDaTarde;
                jantar.value = agenda.janta;
                evacuacao.value = agenda.evacuacao;
                repouso.checked = agenda.repousou;
                medicacao.value = agenda.medicacao;
                atividade.checked = agenda.atividade_EmFamilia;
                lenco.checked = agenda.lençoUmedecido;
                pomada.checked = agenda.pomadaDeAssadura;
                mantinha.checked = agenda.mantinha_Coberta;
                toalha.checked = agenda.toalha;
                bico.checked = agenda.bico;
                chinelo.checked = agenda.chinelo;
                roupa.checked = agenda.roupasParaTroca;
                shampoo.checked = agenda.shampoo;
                condicionador.checked = agenda.condicionador;
                sabonete.checked = agenda.sabonete;
                pente.checked = agenda.pente;
                obsProf.value = agenda.observacaoProfessor;
                obsResp.value = agenda.observacaoResponsavel;
                break;

            }
          };
          if (!found) {
            var criarUser = confirm("Não existe um relatório vinculado à esse aluno nesse dia. Deseja criar?");
            if (criarUser == true) {
                var urlCriarAgenda = `Criaragenda.html`;
                window.location.href = urlCriarAgenda;
            } else {
                var urlCalendario = `Calendario.html`;
                window.location.href = urlCalendario;
            }
        }
    };

    async function updateAgenda(){        

        fetch(baseUrl + `Agendas`)
        .then(response => response.json())
        .then(data => updateAgenda2(data, userId, dia))  
        .catch(error => {
            console.error('Erro ao ler contatos via API JSONServer:', error);
        });

        async function updateAgenda2(data, idAluno, dataAgenda){

            for (let agenda of data) {               

                const data1 = agenda.data;
                const data2 = data1.split('T');
    
                if (String(agenda.alunoId) === idAluno && data2[0] == dataAgenda) {
                    const idToUpdate = agenda.id;
                    const evacuacaoUpdate = parseInt(evacuacao.value, 10);
                    const cafeUpdate = parseInt(cafe.value, 10);
                    const almocoUpdate = parseInt(almoco.value, 10);
                    const lancheUpdate = parseInt(lanche.value, 10); 
                    const jantarUpdate = parseInt(jantar.value, 10);

                    const formUpdate = {
                        "id": idToUpdate,
                        "data": dataAgenda,
                        "observacaoProfessor": obsProf.value,
                        "repousou": repouso.checked,
                        "evacuacao": evacuacaoUpdate,
                        "cafeDaManha": cafeUpdate,
                        "almoco": almocoUpdate,
                        "lancheDaTarde": lancheUpdate,
                        "janta": jantarUpdate,
                        "lençoUmedecido": lenco.checked,
                        "pomadaDeAssadura": pomada.checked,
                        "mantinha_Coberta": mantinha.checked,
                        "toalha": toalha.checked,
                        "bico": bico.checked,
                        "chinelo": chinelo.checked,
                        "roupasParaTroca": roupa.checked,
                        "shampoo": shampoo.checked,
                        "condicionador": condicionador.checked,
                        "sabonete": sabonete.checked,
                        "pente": pente.checked,
                        "atividade_EmFamilia": atividade.checked, 
                        "medicacao": medicacao.value,
                        "observacaoResponsavel": obsResp.value,
                        "alunoId": idAluno
                    }

                    try {const response = await fetch(`${baseUrl}Agendas/${idToUpdate}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formUpdate)
                    })
                    if(response.ok) {
                        alert(`Você atualizou a agenda do aluno de ID ${idAluno}`);
                        var url = `Calendario.html`;
                        window.location.href = url;
                        return;
    
                    }} catch(err){
                        console.log(err);
                    }                                       
                }
            }            
        }
    }


    async function deleteAgenda(){

        fetch(baseUrl + `Agendas`)
        .then(response => response.json())
        .then(data => deleteAgenda2(data, userId, dia))  
        .catch(error => {
            console.error('Erro ao ler contatos via API JSONServer:', error);
        });

        async function deleteAgenda2(data, idAluno, dataAgenda){

            for (let agenda of data) {

                const data1 = agenda.data;
                const data2 = data1.split('T');

                if (String(agenda.alunoId) === idAluno && data2[0] == dataAgenda) {
                    const idToDelete = agenda.id;

                    try {
                        const response = await fetch(`${baseUrl}Agendas/${idToDelete}`, {
                            method: "DELETE",
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        if(response.ok) {
                            alert(`Você excluiu a agenda ${idToDelete}`);
                            var url = `Calendario.html`;
                            window.location.href = url;
                            return;
                        }
                    } catch(err){
                        console.log(err);
                    }
                }
            }
        }        
    }
}
