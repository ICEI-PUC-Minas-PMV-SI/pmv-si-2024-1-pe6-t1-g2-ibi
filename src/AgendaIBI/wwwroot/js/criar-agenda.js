// criar agenda

const criarAgendaForm = document.getElementById('criar-agenda');
if (criarAgendaForm) {
    criarAgendaForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const dados = {};

        Array.from(criarAgendaForm.elements).forEach(element => {
            if(!element.name) return;
            if (element.type === 'checkbox') {
                dados[element.name] = element.checked;
            } else {
                dados[element.name] = element.value;
            }
        });

        function convertStringsToNumbers(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === "string" && !isNaN(obj[key]) && obj[key].trim() !== "") {
                        obj[key] = parseInt(obj[key], 10);
                    }
                }
            }
            return obj;
        }

        const dadosConvertidos = convertStringsToNumbers(dados);

        console.log(dados);

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
                document.getElementById('resposta').innerText = `A agenda foi criada com sucesso`;
            } else {
                document.getElementById('resposta').innerText = `Erro na requisição: ${resposta.statusText}`;
            }
        } catch (erro) {
            document.getElementById('resposta').innerText = `Erro: ${erro.message}`;
        }
    })};
