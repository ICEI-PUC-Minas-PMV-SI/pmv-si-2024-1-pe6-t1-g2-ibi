# Front-end Móvel

O presente projeto tem como escopo o desenvolvimento de uma agenda virtual para o Instituto Batista Itatiaia. Porém, essa etapa se trata da elaboração do aplicativo móvel, principalmente na criação de toda estrutura utilizando o react. Além disso, será realizada a integração com o backend e  o frontend web, possibilitando, assim, a finalização do projeto desenvolvido.

Deste modo, o objetivo desta etapa é desenvolvimento do aplicativo mobile, por meio da codificação utilizando o react, usando as ferramentas disponíveis, como o Expo.dev, sendo mais uma etapa na execução da aplicação proposta.

## Tecnologias Utilizadas

Expo.dev: Sítio que permite a criação conjunta do aplicativo mobile utilizando react, além da exibição do preview em tempo real, possibilitando a correção de eventuais erros no código.

Visual Code Studio: Ferramente gratuita disponibilizada pelo Windows em que, nesta etapa, será utilizado como suplemento do trabalho desenvolvido no Expo.dev.

Figma: Editor gráfico utilizado na elaboração dos wireframes desta etapa, os quais serviram como base de todas as páginas web do projeto.

## Arquitetura

A estrutura consiste em uma arquitetura Web Mobile criada utilizada react, projetada para ter acesso por meio do login. Além disso, terá como arquitetura o preenchimento das requisições dispostas na agenda, bem como colocar observações ao final desta. Ainda, terá funções específicas para o perfil de administrador, como, por exemplo, a criação/exclusão de alunos de uma determinada turma. Por fim, em conjunto, será mantido o aplicativo leve e responsivo.

## Modelagem da Aplicação

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/diagramaclasse.png)

## Projeto da Interface
### Wireframes

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/telas_reponsivas.png)

### Design Visual

* Tipografia: 
  * Roboto sans-serif
  * Tamanho: Títulos: 25px / Menu lateral e Nome de campos: 20px / Texto nos campos e Botões: 16px / Links pequenos: 14,5px
    
* Paleta de cores: Cores retiradas da logo do próprio Instituto Batista Itatiaia.
	 * #1AB24C – Primária
  * #EE1B24 – Secundária
    
* Ícones para abrir e fechar o menu lateral no modo para telas pequenas foi retirado do Google Fonts.

### Layout Responsivo

Como pode ser observado nos demais tópicos do projeto, o foco do aplicativo será em manter-se leve e responsivo. Ainda, existirá, após a tela de login, um menu lateral reversível, sendo escondido quando não acionado para que um das suas opções sejam escolhidas. Ademais, por se tratar de um aplicativo acessado em celulares/tablets, os icones devem ser proporcionais ao tamanho da tela para, além de serem intuitivos por meio de imagem (utilizando a biblioteca de icones do react), facilitar o acionamento com os dedos, evitando cliques errados.

Por fim, como o objetivo é a utilização do aplicativo por usuários das mais diversos background, sendo, também, subentendindo o uso por pessoas com baixa experiência em tecnologia, o aplicativo mobile deve ser intuitivo, com baixo número de telas e fácil acessibilidade. 

### Interações do Usuário

Ao clicar com o dedo na tela do celular/tablet, deve ter uma mudança na cor do objeto para identificá-lo como clicado.

Quando a tela for pequena e o menu lateral estiver escondido, deve ter uma animação do objeto deslizando para a tela do usuário e saindo, caso seja fechado.

## Fluxo de Dados

![Black and White Blue Yellow Basic Fishbone Diagram Whiteboard Brainstorm](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/assets/90218407/091ea765-f403-4edc-9471-8758e6156679)

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o administrador gerencie os usuários | ALTA |
|RF-002| Permitir que os professores publiquem e edite a rotina dos alunos no sistema   | ALTA |  
|RF-003| Permitir que os responsáveis dos alunos tenham acesso aos relatórios dos professores pelo calendário   | ALTA | 
|RF-004| Acessar o sistema via login  | ALTA | 
|RF-005| Permitir que os responsáveis possam fazer observações nos relatórios dos professores   | MÉDIA |
|RF-006| Permitir que os usuários alterem a senha por meio de sms | MÉDIA |
|RF-007| Permitir que os responsáveis tenham acesso a mais de uma matrícula com o mesmo login   | MÉDIA |
|RF-008| Permitir que os relatórios possam ser baixados | BAIXA |
|RF-009| Permitir a integração com o back-end e front-end web | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O sistema deve possuir uma interface de boa usabilidade | ALTA | 
|RNF-003| O sistema será acessado apenas online | MÉDIA | 
|RNF-004| O sistema deve ter a identidade visual do instituto | MÉDIA |
|RNF-005| O sistema será hospedado na nuvem | BAIXA |

## Considerações de Segurança

Como já informado durante a elaboração do back-end e front-end web, permanecerá a preocupação com a segurança de informação, tendo em vista que o projeto lida com dados pessoais dos usuários, sejam funcionários, responsáveis e alunos. Portanto, tem-se que a tela de login não oferece a opção de cadastro, pois esta seria responsabilidade da coordenação da escola, com o perfil de Administrador. Na tela login, ainda, existira a possibilidade de redifinição da senha por meio do envio de sms.

Além disso, reitera-se a preocupação com o cumprimento da Lei Geral de Proteção de Dados Pessoais - LGPD, tendo em vista se tratar de um banco de dados com informações pesssoais dos usuários, sendo sugerido, mais uma vez, a assinatura de um Termo de Privacidade.

Com o objetivo de evitar problemas físicos e corte de custos, os dados serão armazenados na nuvem, em plataforma compatível com a segurança digital dos dados, para, dessa forma, evitar, também, eventuais invasões do sistema. Por fim, também será sugerido um espelhamento dos dados produzidos na plataforma, para funcionar como backup, em caso de falha crítica nos dados principais.

## Implantação

* Requisitos de hardware:
  * Computador, celular ou tablet com acesso a internet
  * Roteador Wi-fi

* Requisitos de software:
  * Acesso ao navegador

* Plataforma de hospedagem: AWS

## Testes

### Login na plataforma  (CST01)

**Sumário:** O Coordenador/Professor/Responsável deve ser capaz de acessar a plafatorma.

**Executor:** Coordenador/Professor/Responsável.

**Pré-Condição:** O Coordenador/Professor/Responsável deve estar cadastrado no sistema.

**Passos:**

1.  O Coordenador/Professor/Responsável acessa o aplicativo do Instituto;
2.  O Coordenador/Professor/Responsável indica os valores de login e senha;
3.  O Sistema realiza a validação do login e da senha apresentados;
4.  Se o usuário não informou o login ou a senha corretos, o sistema apresenta mensagem de erro “Login/Senha Incorretos” e o caso de uso retorna ao passo 2; caso contrário o caso de uso terminar.

**Resultado esperado:** O usuário deve ser capaz de acessar o sistema.
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/LoginReact.PNG)

# Referências

Foram utilizadas as aulas existentes da Plataforma Canvas da PUC-Minas.
