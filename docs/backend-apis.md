# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]

## Objetivos da API

O primeiro passo é definir os objetivos da sua API. O que você espera alcançar com ela? Você quer que ela seja usada por clientes externos ou apenas por aplicações internas? Quais são os recursos que a API deve fornecer?

[Inclua os objetivos da sua api.]


## Arquitetura

[Descrição da arquitetura das APIs, incluindo os componentes e suas interações.]

## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]

Diagrama de Classes
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/diagramaclasse.png)

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

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

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

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

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
