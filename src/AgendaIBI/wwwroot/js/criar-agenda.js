// criar agenda
//document.addEventListener('DOMContentLoaded', function() {
    const criarAgendaForm = document.getElementById('criar-agenda');
    if (criarAgendaForm) {
        criarAgendaForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const dados = {};

            formData.forEach((value, key) => {
                // Se o campo é um checkbox
                console.log(dados[key], value)
                if (key.startsWith('check-')) {
                    // Define o valor como true se o value é "on", false caso contrário
                    dados[key] = value === 'on';
                } else {
                    dados[key] = value;
                }
                console.log(dados)
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
        })};