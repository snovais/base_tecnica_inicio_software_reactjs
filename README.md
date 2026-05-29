# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
# 🚀 Projeto Base TCC - Sistema com Autenticação e Dashboard

Bem-vindo ao repositório base para o seu Trabalho de Conclusão de Curso (TCC). 

Este projeto foi estruturado com as melhores práticas de mercado para o desenvolvimento Front-End utilizando **React JS** e **Vite**. O objetivo desta base não é entregar o sistema pronto, mas sim fornecer uma **arquitetura sólida, profissional e escalável** para que você e sua equipe possam continuar o desenvolvimento com organização.

Neste projeto, utilizamos **CSS Puro** de forma intencional. Entender como estilizar componentes do zero (usando Flexbox, Grid e variáveis) é um conhecimento fundamental para qualquer desenvolvedor antes de utilizar bibliotecas prontas.

---

## 🛠️ Como rodar o projeto na sua máquina

Para começar a trabalhar, siga os passos abaixo no seu terminal (dentro da pasta do projeto):

1. **Instale as dependências:**
   O Vite e o React precisam baixar os pacotes necessários para funcionar.
```bash
   npm install
Inicie o servidor de desenvolvimento:

Bash
   npm run dev
Abra o navegador no link fornecido no terminal (geralmente http://localhost:5173/).

📁 Estrutura de Pastas: Onde cada coisa fica?
A organização das pastas (Arquitetura) é vital para que o projeto não vire uma bagunça quando começar a crescer. Tudo acontece dentro da pasta src/:

/components/: Guarda "pedaços" de tela que se repetem. Se um botão, um alerta ou um menu vai ser usado em várias telas diferentes, ele deve ser criado aqui.

/contexts/: Guarda a inteligência global do aplicativo. Serve para armazenar informações que precisam ser acessadas por várias telas ao mesmo tempo (ex: "Quem é o usuário que está logado agora?").

/pages/: Guarda as telas inteiras do sistema (ex: Tela de Login, Tela de Cadastro, Dashboard principal).

App.jsx: É o coração da aplicação. É aqui que definimos as Rotas (qual URL abre qual tela).

index.css: Nosso arquivo de estilos globais, onde guardamos as cores padrão (variáveis) do sistema.

🧩 Entendendo os Arquivos e Funções Principais
Aqui está a explicação detalhada do que cada parte do código faz e por que ela existe.

1. O Gerenciador de Rotas (src/App.jsx)
Por que existe? Num site normal, clicar em um link recarrega a página inteira. No React (Single Page Application), nós trocamos os componentes dinamicamente sem recarregar. O App.jsx gerencia isso.

<BrowserRouter> e <Routes>: Cria o ambiente de navegação.

<Route>: Define que, quando o usuário acessar /, o componente <Login /> será renderizado na tela.

Função PrivateRoute: Esta é uma trava de segurança. Ela verifica se o usuário está logado. Se estiver, deixa entrar no Dashboard. Se não estiver, "chuta" o usuário de volta para a tela de Login (<Navigate to="/" />).

2. O Controle de Usuário (src/contexts/AuthContext.jsx)
Por que existe? Se o usuário faz login na página Login.jsx, a página Dashboard.jsx precisa saber disso. O Contexto resolve esse problema distribuindo a informação para o projeto todo.

useState(null): Começa assumindo que ninguém está logado (o usuário é nulo).

Função login(email, password): No momento, ela simula um login. Recebe o e-mail digitado e o salva no estado global da aplicação. No futuro, é aqui que vocês conectarão com o Banco de Dados ou API (Backend) para validar a senha real.

Função logout(): Simplesmente apaga os dados do usuário, forçando o sistema a expulsá-lo do Dashboard (graças ao PrivateRoute).

3. A Tela de Entrada (src/pages/Login.jsx)
Por que existe? É a porta de entrada. Utiliza um design moderno de tela dividida (Split Screen).

useState('') para email e senha: Essas funções "escutam" tudo o que o usuário digita nos campos em tempo real e guardam na memória do componente.

Função handleLogin(e): É disparada quando o usuário clica em "Log In". O e.preventDefault() impede que a página recarregue. Em seguida, ela chama a função login() lá do nosso contexto.

useNavigate(): É o nosso redirecionador. Se o login der certo, ele automaticamente manda o usuário para a URL /dashboard.

4. O Painel Principal (src/pages/Dashboard.jsx)
Por que existe? É a área logada do sistema. Onde a mágica do projeto do TCC de fato vai acontecer.

Este arquivo foi estruturado usando Flexbox e Grid do CSS. Ele possui uma Sidebar (menu lateral) e a área de Main Content (conteúdo principal).

Ele "puxa" os dados do usuário logado através do useContext(AuthContext) para poder exibir o e-mail na barra superior e ter acesso à função de logout.

🎯 Próximos Passos para a Equipe
Agora que a base está pronta e segura, o trabalho de vocês é expandir o sistema:

Tela de Cadastro (Register.jsx): A estrutura está criada, mas o formulário ainda é um esboço. Estilizem essa tela utilizando os mesmos padrões visuais do Login (vocês podem reaproveitar as classes CSS).

Integração com Backend: Quando começarem a programar o Banco de Dados, alterem a função de login no AuthContext.jsx para fazer uma requisição real.

Novas Telas: Criem novas telas na pasta /pages e adicionem as novas rotas no App.jsx sempre dentro da proteção do <PrivateRoute>.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Esta base é apenas o começo. Para que este projeto se torne um TCC completo e de nível profissional, a equipe deve seguir as etapas de desenvolvimento abaixo. Recomendamos que vocês dividam essas tarefas entre os membros do grupo utilizando metodologias ágeis (como um quadro Kanban no Trello ou GitHub Projects).

### Fase 1: Finalização da Interface (Front-End Estático)
Antes de conectar com banco de dados, garanta que todas as telas existem e são navegáveis.
* [ ] **Criar a Tela de Cadastro (`Register.jsx`):** A estrutura básica já existe, mas precisa ser estilizada. Usem o mesmo padrão visual (Flexbox, divisão de tela) que aplicamos no `Login.jsx`.
* [ ] **Criar as Telas Internas do Dashboard:** No menu lateral, temos links para "Usuários" e "Relatórios". Criem essas novas páginas dentro da pasta `/pages/` e configurem as rotas delas no `App.jsx`, sempre dentro do `<PrivateRoute>`.
* [ ] **Criar Componentes Reutilizáveis:** Pensem em elementos que se repetem. Criem um componente `<Modal />` para avisos, ou um `<Button />` padrão na pasta `/components/` para não ter que reescrever o mesmo código CSS em toda tela.

### Fase 2: Lógica de Programação e Validação
Um bom sistema não confia cegamente no que o usuário digita. É hora de aplicar a lógica.
* [ ] **Validação de Formulários:** Na tela de Login e Cadastro, criem lógicas em JavaScript puro para verificar se o e-mail tem um formato válido (`@` e `.com`) e se a senha tem o tamanho mínimo exigido antes de tentar enviar os dados.
* [ ] **Feedbacks Visuais:** Se o usuário errar a senha ou o login falhar, o sistema deve avisar. Criem mensagens de erro que aparecem na tela (ex: texto vermelho abaixo do input) avisando o que deu errado.

### Fase 3: Conexão com Banco de Dados e Backend
É aqui que o sistema ganha vida e deixa de ser apenas uma interface visual.
* [ ] **Modelagem dos Dados:** Definam quais informações o sistema de vocês realmente precisa salvar (Tabelas de Usuários, Produtos, Clientes, etc.) no banco de dados.
* [ ] **Consumo de API:** Substituam a simulação que criamos no `AuthContext.jsx`. Utilizem `fetch` ou `axios` para enviar o e-mail e a senha digitados para a API (Backend) de vocês. 
* [ ] **Gestão do Token de Acesso:** Quando o login for bem-sucedido no backend, ele devolverá um Token (JWT). Vocês devem salvar esse token no `localStorage` do navegador para que o usuário não precise logar de novo toda vez que apertar F5 na página.

### Fase 4: Refinamento e Apresentação do TCC
* [ ] **Tratamento de Erros da API:** O que acontece se a internet cair ou o servidor do backend estiver desligado? O Front-end deve estar preparado para capturar esse erro (`catch`) e mostrar uma mensagem amigável para o usuário.
* [ ] **Responsividade Final:** Testem todas as telas pelo celular. Abram as ferramentas de desenvolvedor do navegador (F12) e garantam que nada "quebra" em telas menores.

> 💡 **Dica de Ouro para a Equipe:** Não tentem fazer a Fase 3 antes de terminar a Fase 1. Desenvolvam uma funcionalidade por vez, testem até funcionar perfeitamente, façam o *commit* no Git e só então avancem para o próximo desafio.# base_tecnica_inicio_software_reactjs
