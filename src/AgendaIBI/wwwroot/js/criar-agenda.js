document.addEventListener('DOMContentLoaded', (event) => {
    const alunoIDInput = document.getElementById('alunoID');
    const nomeAlunoDiv = document.getElementById('nome-aluno');

    alunoIDInput.addEventListener('blur', function() {
        const alunoID = alunoIDInput.value.trim();
        const baseUrl = 'https://garods-001-site1.dtempurl.com/api/';        
        
        if (alunoID) {
            fetch(baseUrl + `Alunos/${alunoID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Aluno não encontrado');
                }
                return response.json();
            })
            .then(aluno=> preencherAluno(aluno))
            .catch(error => {
                console.error('Erro ao ler contatos via API JSONServer:', error);
                alert("ID invalido");
            });

            function preencherAluno(aluno){
                nomeAlunoDiv.textContent = `${aluno.nome}`;
            }            
        } else {
            nomeAlunoDiv.textContent = '';
        }
    });
});


// criar agenda
const criarAgendaForm = document.getElementById('criar-agenda');
if (criarAgendaForm) {
    criarAgendaForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const dados = {};
        let alunoId, dataFormatada;

        Array.from(criarAgendaForm.elements).forEach(element => {
            if(!element.name) return;

            if (element.id === 'data') {
                const data = element.value;
                const datanova = data + "T00:00:00";
                dataFormatada = data;
                dados[element.name] = `${datanova}`;
            } else if (element.type === 'checkbox') {
                dados[element.name] = element.checked;
            } else {
                dados[element.name] = element.value;
                if (element.name === 'alunoID') {
                    alunoId = element.value;
                }
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

        // Verificar se já existe uma agenda para o aluno e data especificados
        try {
            const checkResponse = await fetch(`https://garods-001-site1.dtempurl.com/api/Agendas`);
            if (checkResponse.ok) {
                const existingAgendas = await checkResponse.json();
                if (existingAgendas.length > 0) {
                    const agendaExists = existingAgendas.some(agenda => {
                        agendaData = agenda.data;
                        agendaDataNova = agendaData.split('T');

                        if(String(agenda.alunoId) === String(alunoId) && agendaDataNova[0] === dataFormatada){
                            alert('Já existe uma agenda criada para este aluno nesta data.');
                            return true; // Impede a criação de uma nova agenda
                        }
                        return false;
                    });

                    if (agendaExists) {
                        return; // Impede a criação de uma nova agenda
                    }
                }
            } else {
                alert(`Erro na verificação de agendas existentes: ${checkResponse.statusText}`);
                return;
            }
        } catch (error) {
            console.error(`Erro ao verificar agendas existentes: ${error.message}`);
            return;
        }

        try {
            const resposta = await fetch('https://garods-001-site1.dtempurl.com/api/Agendas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });

            if (resposta.ok) {
                const resultado = await resposta.json();
                alert('A agenda foi criada com sucesso');
                var url = `Gerenciaragenda.html`;
                window.location.href = url;
            } else {
                alert(`Erro na requisição: ${resposta.statusText}`);
            }
        } catch (erro) {
          console.log(`Erro: ${erro.message}`);
        }
    })};
