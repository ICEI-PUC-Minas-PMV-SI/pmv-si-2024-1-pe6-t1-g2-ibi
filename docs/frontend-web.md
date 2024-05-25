# Front-end Web

Como já indicado, o presente projeto tem como escopo a elaboração de uma agenda virtual para o Instituto Batista Itatiaia. Porém, essa etapa se trata da elaboração da página web, principalmente com o foco no registro de atividades dos alunos pelos professores/coordenadores. Além disso, será realizada com a estrutura montada do backend, possibilitando, assim, o registro dos dados na nuvem.

Deste modo, o objetivo desta etapa é desenvolvimento do front-end, por meio da codificação das páginas em html e css, usando as ferramentas disponíveis, como o Visual Code Studio, sendo mais uma etapa na execução da aplicação proposta.

## Tecnologias Utilizadas

Visual Code Studio: Ferramente gratuita disponibilizada pelo Windows em que, nesta etapa, será utilizado na elaboração do front-web, mais especificamente na criação do código em HTML e CSS. Além do uso da biblioteca jQuery para complementar o código.

Figma: Editor gráfico utilizado na elaboração dos wireframes desta etapa (conforme exposto mais a frente), os quais serviram como base de todas as páginas web do projeto.

## Arquitetura

A estrutura consiste em uma arquitetura Web composta por HTML e CSS, projetada para fazer acesso por meio do login. Além disso, terá como arquitetura o preenchimento das requisições dispostas na agenda, bem como colocar observações ao final desta. Ainda, terá funções específicas para o perfil de administrador, como, por exemplo, a criação/exclusão de alunos de uma determinada turma. Por fim, em conjunto, será mantido o site leve e responsivo.
 
## Modelagem da Aplicação

Diagrama de Classes

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/diagramaclasse.png)

## Projeto da Interface Web

### Wireframes

* Administrador: Vai poder visualizar todas as telas.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/Telas_admin.png)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/tela_login.png)

* Professor: número limitado de telas com funções que não vão estar à mostra.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/Telas_professor.png)
  
* Responsável: Número extremamente limitado de telas com poucas funções disponíveis.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/tela_responsavel.png)

### Design Visual

* Tipografia: 
  * Roboto sans-serif
  * Tamanho: Títulos: 25px / Menu lateral e Nome de campos: 20px / Texto nos campos e Botões: 16px / Links pequenos: 14,5px
    
* Paleta de cores: Cores retiradas da logo do próprio Instituto Batista Itatiaia.
	 * #1AB24C – Primária
  * #EE1B24 – Secundária
    
* Ícones para abrir e fechar o menu lateral no modo para telas pequenas foi retirado do Google Fonts.

  ![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/identidade_visual.png)

### Layout Responsivo

* Transformar colunas duplas do design original em uma única coluna.
* Esconder o menu lateral em telas pequenas

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/telas_reponsivas.png)

### Interações do Usuário

Ao passar o mouse em um botão ou link, deve ter uma mudança na cor do objeto e/ou mudança no cursor para identificar como clicável.

Quando a tela for pequena e o menu lateral estiver escondido, deve ter uma animação do objeto deslizando para a tela do usuário e saindo, caso seja fechado.

## Fluxo de Dados

![Black and White Blue Yellow Basic Fishbone Diagram Whiteboard Brainstorm](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/assets/90218407/091ea765-f403-4edc-9471-8758e6156679)

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o administrador gerencie os usuários | ALTA |
|RF-002| Permitir que os professores publiquem e edite a rotina dos alunos no sistema   | ALTA |  
|RF-003| Permitir que os responsáveis dos alunos tenham acesso aos relatórios dos professores pelo calendário   | ALTA | 
|RF-004| Acessar o sistema via login   | ALTA | 
|RF-005| Permitir que os responsáveis possam fazer observações nos relatórios dos professores   | MÉDIA |
|RF-006| Permitir que os usuários alterem a senha   | MÉDIA |
|RF-007| Permitir que os responsáveis tenham acesso a mais de uma matrícula com o mesmo login   | MÉDIA |
|RF-008| Permitir que os relatórios possam ser baixados | BAIXA |
|RF-009| Permitir a integração com o back-end | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O sistema deve possuir uma interface de boa usabilidade | ALTA | 
|RNF-003| O sistema será acessado apenas online | MÉDIA | 
|RNF-004| O sistema deve ter a identidade visual do instituto | MÉDIA |
|RNF-005| O sistema será hospedado na nuvem | BAIXA |
|RNF-006| O sistema deverá permitir a redifição de senha, apenas, por sms | BAIXA |

## Considerações de Segurança

Como já informado durante a elaboração do back-end, permanecerá a preocupação com a segurança de informação, tendo em vista que o projeto lida com dados pessoais dos usuários, sejam funcionários, responsáveis e alunos. Portanto, tem-se que a tela de login não oferece a opção de cadastro, pois esta seria responsabilidade da coordenação da escola, com o perfil de Administrador. Na tela login, ainda, existira a possibilidade de redifinição da senha por meio do envio de sms.

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

1.  O Coordenador/Professor/Responsável acessa o sítio do Instituto;
2.  O Coordenador/Professor/Responsável indica os valores de login e senha;
3.  O Sistema realiza a validação do login e da senha apresentados;
4.  Se o usuário não informou o login ou a senha corretos, o sistema apresenta mensagem de erro “Login/Senha Incorretos” e o caso de uso retorna ao passo 2; caso contrário o caso de uso terminar.

**Resultado esperado:** O usuário deve ser capaz de acessar o sistema.

![Print do resultado do teste de caso 1](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g2-ibi/blob/main/docs/img/Acesso.png?raw=true)

# Referências

Foram utilizadas as aulas existentes da Plataforma Canvas da PUC-Minas.
