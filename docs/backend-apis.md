# APIs e Web Services

O presente projeto tem como escopo a elaboração de uma agenda virtual para o Instituto Batista Itatiaia, com possibilidade de registro de atividades dos alunos pelos professores/coordenadores. Desse modo, será mais eficiente o registro de informações pelos professores/coordenadores, bem como ocorrerá o acesso dos pais/responsáveis a rotina dos seus filhos de forma virtual, otimizando o tempo não só dos trabalhadores do Instituto, mas também dos pais/responsáveis

Entretanto, para isto, a construção de uma aplicação de API web é uma etapa fundamental do projeto, tendo em vista que será o esqueleto de toda a estrutura digital a ser criada, possibilitando a execução da agenda do Instituto. Logo, na presente descrição, serão observados dados gerais da API, bem como serão realizados testes de problemas. DDiante do exposto, as informações que demonstrarão que a API é segura, escalável e eficiente.

## Objetivos da API

Primeiramente, o que se pretende com a API no backend é que diferentes sistemas se comuniquem e interajam com os dados da agenda de forma padronizada e segura.

O acesso de dados seria um dos principais pontos a serem trabalhadores com a criação de API, pois deverá ocorrer uma interação entre os dados da agenda, como registro das atividades dos alunos e inserção de comentários pelos pais/responsáveis, além da possibilidade de leitura posterior dos dados salvos em nuvem.

Ainda, a API deve ter como foco segurança, escalabildiade e flexibilidade, pois o escopo do trabalho desenvolvido pelo IBI pode, com o tempo, demandar uso crescente, com a inserção de novos usuários e funcionalidades. Devendo, neste caso, ser garantida a segurança dos dados ali produzidos/inseridos, em razão dos dados sensíveis que são trabalhados. Logo, apenas, coordenadores/administradores terão permissão de criar/excluir usuários, bem como um maior acesso às informações registradas na agenda.

Por fim, a API será desenvolvida com o foco de eficiência no desempenho, para que a sua manutenção não seja indevidamente elevada, com o objetivo de redução de custos, portanto, os dados produzidos serão registrados em nuvem.

## Arquitetura

A estrutura consiste em uma arquitetura REST (Representational State Transfer), projetada para receber as requisições de diversos tipos de usuários (Coordenador, Professor e Pais/Responsável) em uma interface web/mobile, usando, como base, um banco de dados MySQL.

Além dos Endpoints indicados abaixo, como padrão, serão utilizados métodos HTTP como GET, POST, PUT e DELETE na alteração dos recursos disponíveis no servidor. Como exposto no tópico anterior, com o objetivo na eficiência, será utilizado JSON no formato dos dados registrados.

## Modelagem da Aplicação

Diagrama de Classes

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/diagramaclasse.png)

## Fluxo de Dados
![3b62096e-007f-44cf-b132-152f3872b589](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/assets/90218407/ddfc0824-c87d-46a6-996b-0ef7ce2f3254)

## Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o administrador gerencie os usuários | ALTA |
|RF-002| Permitir que os professores publiquem e edite a rotina dos alunos no sistema   | ALTA |  
|RF-003| Permitir que os responsáveis dos alunos tenham acesso aos relatórios dos professores pelo calendário   | ALTA | 
|RF-004| Acessar o sistema via login   | ALTA | 
|RF-005| Permitir que os responsáveis possam fazer observações nos relatórios dos professores   | MÉDIA |
|RF-006| Permitir que os usuários alterem a senha   | MÉDIA |
|RF-007| Permitir que os responsáveis tenham acesso a mais de uma matrícula com o mesmo login   | MÉDIA |

## Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----| 
|RNF-001| O sistema será acessado apenas online | MÉDIA 

## Tecnologias Utilizadas

Existem muitas tecnologias diferentes que podem ser usadas para desenvolver APIs Web. A tecnologia certa para o seu projeto dependerá dos seus objetivos, dos seus clientes e dos recursos que a API deve fornecer.

[Lista das tecnologias principais que serão utilizadas no projeto.]

## API Endpoints

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```


## Considerações de Segurança

O Instituto Batista Itatiaia é uma entidade ensino infantil de âmbito municipal, possuindo uma grande quantidade de alunos. Por esta razão, a preocupação com a segurança de informação se faz necessária, tendo em vista que lida com dados pessoais dos usuários, sejam funcionários, responsáveis e alunos.

Inicialmente, o cadastro de todos os usuários seria de responsabilidade da coordenação da escola, a qual teria um perfil de Administrador, centralizando os poderes de maior importância na plataforma em um número reduzido de pessoas.

Ademais, existe uma preocupação com o cumprimento da Lei Geral de Proteção de Dados Pessoais - LGPD, tendo em vista se tratar de um banco de dados com informações pesssoais dos usuários, em que, pela natureza econômica da atividade, só poderão ser utilizados para o próprio funcionamento do aplicativo. Ainda, quanto a este tópico, é sugerido que, no momento que o usuário solicita seu cadastro, seja assinado um  Termo de Privacidade, esclarecendo quais dados pessoais estão sendo coletados e como serão utilizados.

Após o cadastro, o Administrador fornecerá uma senha ao usuário cadastrado, em que este poderá substituir por uma de cunho pessoal. O acesso ao sistema será por meio de Login (número de telefone) e Senha.

Com o objetivo de evitar problemas físicos e corte de custos, os dados serão armazenados na nuvem, em plataforma compatível com a segurança digital dos dados, para, dessa forma, evitar, também, eventuais invasões do sistema. Por fim, também será sugerido um espelhamento dos dados produzidos na plataforma, para funcionar como backup, em caso de falha crítica nos dados principais.

## Implantação

* Requisitos de hardware:
  * Computador, celular ou tablet com acesso a internet
  * Roteador Wi-fi

* Requisitos de software:
  * Acesso ao navegador

* Plataforma de hospedagem: AWS
  

## Testes

### Gerenciar Usuário (CST01)

**Sumário:** O Administrador deve ser capaz de criar, visualizar, atualizar e excluir (CRUD) usuários.

**Executor:** Administrador.

**Pré-Condição:** O administrador deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create de usuário;
2. Preencher as informações: nome, senha e perfil (administrador, professor ou responsável) e enviar a requisição;
3. As informações devem ser retornadas com a senha oculta, e o Id do usuário que foi criado;
4. Acessar a rota GetById de usuário, e acessar o usuário criado, pelo Id;
5. As informações devem ser retornadas com a senha oculta;
6. Acessar a rota Update de usuário, acessar o usuário criado, pelo Id e enviar a request com as mudanças do usuário;
7. A mensagem de “201 created” deve aparecer;
8. Acessar a rota Delete de usuário, e acessar o usuário criado, pelo Id;
9. A mensagem de “204 No Content” deve aparecer;
10. Acessar a rota GetAll de usuário e realizar a requisição;
11. O usuário criado no início não deve aparecer.

**Resultado esperado:** Todas as etapas do CRUD devem ter acontecido sem erros.

![Print do resultado do teste de caso 1](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST01.png?raw=true)


### Visualização geral da Agenda (CST02)

**Sumário:** O professor e o administrador devem ser capazes de visualizar a agenda dos alunos.

**Executor:** Professor e administrador.

**Pré-Condição:** O usuário deve estar logado no sistema.

**Passos:**

1. Acessar a rota GetAll da agenda;
2. As informações de todas as agendas devem ser retornadas e aparecer a mensagem “200 OK”.

**Resultado esperado:** Todas as agendas devem ser visualizadas.

![Print do resultado do teste de caso 2](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST02.png?raw=true)


### Edição da Agenda (CST03)

**Sumário:** O professor deve ser capaz de editar a agenda dos alunos.

**Executor:** Professor.

**Pré-Condição:** O professor deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create da agenda;
2. Preencher as informações: Data, Observação do professor, Repousou, Evacuação (Normal, Diarreia, Não evacuou), Café da manhã (Aceitou tudo, Boa parte, Parte, Rejeitou), Almoço (Aceitou tudo, Boa parte, Parte, Rejeitou), Lanche da tarde (Aceitou tudo, Boa parte, Parte, Rejeitou), Janta (Aceitou tudo, Boa parte, Parte, Rejeitou), Lenço umedecido(true ou false), fralda(true ou false), Pomada De Assadura(true ou false), Lençol(true ou false), Mantinha Cobertor(true ou false), Toalha(true ou false), Bico(true ou false), Chinelo(true ou false), Roupas Para Troca(true ou false), Shampoo(true ou false), Condicionador(true ou false), Sabonete(true ou false), Pente(true ou false), Atividade em família(true ou false), Medicação, Ciente responsável(true ou false), Observação responsável, Ciente Professor(true ou false), ID do Aluno) e enviar a requisição;
3. As informações devem ser retornadas com o Id da agenda preenchida e retornar a mensagem de “200 OK”;

**Resultado esperado:** A agenda deve ter sido preenchida corretamente.

![Print do resultado do teste de caso 3](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST03.png?raw=true)


### Exclusão da Agenda diária (CST04)

**Sumário:** O administrador deve ser capaz de deletar a agenda dos alunos.

**Executor:** Administrador.

**Pré-Condição:** O administrador deve estar logado no sistema.

**Passos:**

1. Acessar a rota Delete da agenda;
2. Preencher com o ID da agenda que se deseja deletar;
3. A mensagem de “204 No Content” deve aparecer;
4. Acessar a rota GetAll da agenda;
5. Verifique se a agenda do dia escolhido foi deletada.

**Resultado esperado:** A agenda do dia selecionado deve ter sido deletada.

![Print do resultado do teste de caso 4](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST04.png?raw=true)


### Testar permissão (CST05)

**Sumário:** Tentar requisitar uma mudança que o usuário não tenha permissão.

**Executor:** Professor ou responsável

**Pré-Condição:** O usuário deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create da turma, e tentar fazer uma requisição;
2. A mensagem de erro “403 Forbidden” deve aparecer.

**Resultado esperado:** O usuário não deve ter permissão para criar a turma.

![Print do resultado do teste de caso 5](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST05.png?raw=true)


### Observação na Agenda pelo responsável (CST06)

**Sumário:** O Responsável deve ser capaz de realizar uma observação na agenda diária do aluno relacionada ao seu perfil.

**Executor:** Responsável.

**Pré-Condição:** O Responsável deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create da agenda;
2. Preencher o campo “Observação do responsável” e enviar a requisição;
3. As informações devem ser retornadas com a observação preenchida.

**Resultado esperado:** O responsável deve ter conseguido preencher a observação na agenda do aluno.

![Print do resultado do teste de caso 6](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST06.png?raw=true)


### Alteração de senha (CST07)

**Sumário:** O usuário deve ser capaz de alterar a própria senha.

**Executor:** Responsável ou Administrador ou Professor

**Pré-Condição:** O usuário deve estar logado no sistema.

**Passos:**

1. Acessar a rota Update de usuário, acessar o próprio usuário e enviar a request com as mudanças de senha;
2. A mudança deve ter sido salva;
3. Fazer logout;
4. Logar novamente com a nova senha;
5. Verificar se o acesso foi permitido.

**Resultado esperado:** O usuário deve ter conseguido alterar sua senha.v

![Print do resultado do teste de caso 7](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST07.png?raw=true)


### Gerenciar Aluno (CST08)

**Sumário:** O Administrador deve ser capaz de criar, visualizar, atualizar e excluir (CRUD) alunos.

**Executor:** Administrador.

**Pré-Condição:** O administrador deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create de aluno;
2. Preencher as informações: matrícula, nome completo e data de nascimento, e enviar a requisição;
3. As informações devem ser retornadas com o Id do aluno que foi criado;
4. Acessar a rota GetById de aluno, e acessar o aluno criado, pelo Id;
5. As informações devem ser retornadas;
6. Acessar a rota Update de aluno, acessar o aluno criado, pelo Id e enviar a request com as mudanças do aluno;
7. A mensagem de sucesso deve aparecer;
8. Acessar a rota Delete de aluno, e acessar o aluno criado, pelo Id;
9. A mensagem de “204 No Content” deve aparecer;
10. Acessar a rota GetAll de aluno e realizar a requisição;
11. O aluno criado no início não deve aparecer.

**Resultado esperado:** Todas as etapas do CRUD devem ter acontecido sem erros.

![Print do resultado do teste de caso 8](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST08.png?raw=true)


### Gerenciar Turma (CST09)

**Sumário:** O Administrador deve ser capaz de criar, visualizar e atualizar turmas.

**Executor:** Administrador.

**Pré-Condição:** O administrador deve estar logado no sistema.

**Passos:**

1. Acessar a rota Create da turma;
2. Preencher as informações: número da turma e ano letivo, enviar a requisição;
3. As informações devem ser retornadas com o Id da turma que foi criada;
4. Acessar a rota GetById da turma, e acessar a turma criada, pelo Id;
5. As informações devem ser retornadas;
6. Acessar a rota Update da turma, acessar a turma criada, pelo Id e enviar a request com as mudanças da turma;
7. A mensagem de “204 No Content” deve aparecer;
8. Acessar a rota AddAluno da turma;
9. Preencher as informações: ID do aluno e ID da turma, enviar a requisição;
10. As informações devem ser retornadas com o aluno relacionado à turma;
11. Acessar a rota DeleteAluno da turma, e acessar o aluno adicionado, pelo Id;
12. A mensagem de “no content” deve aparecer;
13. Acessar a rota AddProfessor da turma;
14. Preencher as informações: ID do professor e ID da turma, enviar a requisição;
15. As informações devem ser retornadas com o professor relacionado à turma;
16. Acessar a rota DeleteProfessor da turma, e acessar o professor adicionado, pelo Id;
17. A mensagem de “204 No Content” deve aparecer;
18. Acessar a rota GetAll da turma e realizar a requisição;
19. O aluno e o professor não devem aparecer.

**Resultado esperado:** Todas as etapas do CRUD devem ter acontecido sem erros.

![Print do resultado do teste de caso 9](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/CST09.png?raw=true)

# Referências

Foram utilizadas as aulas existentes na matéria APIs e Web Services da Plataforma Canvas da PUC-Minas. Além disso, foram utilizados os seguintes sítios:
<https://developer.mozilla.org/pt-BR/docs/Web/HTTP>
