# Introdução

Texto descritivo com a visão geral do projeto abordado. Inclui o contexto, o problema, os objetivos, a justificativa e o público-alvo do projeto.

## Problema
O Instituto Batista Itatiaia (IBI) é uma entidade ensino infantil, poussindo uma grande quantidade de alunos. Devido a isto, há uma demanda muito alta para os professores e administradores, que detém, dentre outras atividades decorrentes do ensino, a tarefa de registrar os eventos ocorridos de cada aluno durante todo o período do dia em que as crianças se encontram na instituição.

Atualmente, todo o processo desse registro de informações é feito de modo manual, com isso, o tempo para realizar esses relatórios tem se tornado muito extenso, gerando uma sobrecarga para os professores e administradores. Sendo assim, é uma necessidade fundamental a modernização do sistema que vem sendo utilizado no ambiente escolar.

Portanto, existe a dificuldade de criar um aplicativo responsivo e funcional, em um curto período de tempo, para o fácil acesso dos professores, coordenadores, pais e demais responsáveis.


## Objetivos
### Objetivo Geral
- Fazer uma agenda virtual para o Instituto Batista Itatiaia, com possibilidade de registro de atividades dos alunos pelos professores/coordenadores.

### Objetivos Específicos
- Tornar mais eficiente o registro de informações pelos professores/coordenadores.
- Facilitar o acesso dos pais/responsáveis a rotina dos seus filhos.
- Auxiliar o controle das turmas pelos professores/coordenadores.

## Justificativa

O grupo escolheu trabalhar com esse tema após identificar a necessidade de modernização no processo de comunicação entre escola e responsável da criança, conforme exposto nos objetivos supracitados. Atualmente, o processo é feito manualmente pelo Instituto Batista Itatiaia, de forma que ocupa bastante tempo do profissional e não permite uma ciência imediata por parte do responsável.

Com a migração desse processo para uma aplicação, ocorreria uma melhora na alocação de recursos e gestão de tempo da escola, além de aproximar os pais/responsáveis das rotinas das crianças, facilitando assim a interação entre professor, família e aluno.

## Público-Alvo

A agenda para o IBI tem como público-alvo todos os que estão envolvidos no dia a dia da instituição. Logo, são os coordenadores que vão participar da gestão das turmas; os professores que vão ser responsáveis pelas atualizações diárias da agenda e no relacionamento direto com os pais por via do aplicativo; e os pais que são o público-alvo principal dos aplicativos, pois vão utilizar o aplicativo para acompanhar a rotina do filho e fazer eventuais comentários aos professores.

# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

**Márcia Moreira** é a *coordenadora* do Instituto há 15 anos, sempre enfrentou muitas dificuldades como coordenadora, sempre lidando com reclamações diariamente de pais é alunos. Com toda essa dificuldade Márcia decide aderir a um projeto de modernização, onde o Instituto passaria todas suas anotações sobre os alunos para uma forma virtual, assim facilitando a interação entre pais e a coordenação do Instituto. Com a modernização já implantada, os pais terão acesso ao rendimento do filho. Com isso, Márcia irá enfrentar menos problemas diários.

**Daniele Ferreira** de 32 anos é *professora* de uma turma de 37 alunos, sua turma permanece em tempo integral na instituição, tendo alguns alunos com muitas intercorrências a serem registradas. Muito do seu tempo tomado decorre de relatórios manuais, já que esse processo é feito de modo individual. A modernização desse sistema daria a ela mais tempo para pensar em outras atividades recreativas para sua turma.

**Ana Barros Ferreira**, 46 anos, é *professora* por mais de 20 anos e está no instituto há 8 anos. Ana não é particularmente muito favorável na modernização que está ocorrendo atualmente. Usa seu celular, por exemplo, apenas para troca de mensagens e acompanhar alguns vídeos sobre notícias diárias. Quando necessita acessar um aplicativo, pede auxílio a terceiros. Já no computador, Ana possui um conhecimento básico, pois foi necessitado utilizar para preenchimento de diário em trabalhos anteriores. Entretanto, se limitou a fazer apenas isso, sem possuir muito conhecimento em outras utilidades do computador.

**Jose da Silva** é um pedreiro de 45 anos, bem como também é *pai* de um estudante do IBI. Por ser um profissional muito atarefado, dedica a maior parte do seu dia ao trabalho.  Devido as longas jornadas de serviço, Jose tem pouco tempo para acompanhar o dia a dia do seu filho, que é aluno do IBI. Sendo assim Jose gostaria de alguma forma presenciar a rotina do seu filho.

**Clara Gomes** de 29 anos é *mãe* solteira e trabalha como gerente de marketing de uma grande empresa. Em meio às responsabilidades do trabalho, Clara dá o seu melhor para ser uma mãe carinhosa e presente. Dessa forma, gostaria muito de acompanhar mais ativamente o progresso de sua filha Ana Beatriz na escola, mas devido a sua rotina exaustiva isso se torna muito mais complicado. Um aplicativo, que viabilizasse o acompanhamento do desempenho de Ana pelo celular, iria permitir que Clara pudesse se manter atualizada em qualquer hora ou lugar.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Catálogo de Serviços

Descreva aqui todos os serviços que serão disponibilizados pelo seu projeto, detalhando suas características e funcionalidades.


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
