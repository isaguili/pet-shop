# Pet Shop Scheduler
![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Rocketseat](https://img.shields.io/badge/Rocketseat-FullStack-8257E5)

Projeto desenvolvido durante a Trilha FullStack da Rocketseat, com o objetivo de praticar o desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript. Durante o desenvolvimento foram explorados conceitos de manipulação da DOM, consumo de API REST, persistência de dados, empacotamento de módulos e transpilação de código.

<img width="1898" height="924" alt="{AB2B7198-7D83-4348-9687-EF38D7C35276}" src="https://github.com/user-attachments/assets/c45192ce-d018-4626-9469-5adb590534d4" />


## Funcionalidades

- Exibição da agenda diária de atendimentos.
- Cadastro de novos agendamentos.
- Consulta e atualização automática dos horários disponíveis.
- Exclusão de agendamentos.
- Persistência dos dados por meio de uma API simulada.
- Atualização dinâmica da interface sem recarregar a página.

## Tecnologias
<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
   <img src="https://img.shields.io/badge/mockapi-5C5CFF?style=for-the-badge&logo=mockapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/webpack-1C78C0?style=for-the-badge&logo=webpack&logoColor=white"/>
  <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black"/>
</p>

## Principais aprendizados
- Consumo de API utilizando **fetch**, integrando com **MockAPI** para leitura e escrita de dados.  
- Compreensão do conceito de **persistência de dados** por meio de uma API externa.  
- Organização do código em módulos e separação de responsabilidades.  
- Utilização do **Webpack** para empacotamento e organização dos arquivos do projeto.  
- Uso do **Babel** para garantir compatibilidade de código JavaScript moderno com diferentes navegadores.  

## Estrutura do Projeto

```text
pet-shop/
├── src/
│   ├── assets/                  # Recursos estáticos (imagens, ícones, etc.)
│   ├── libs/                    # Bibliotecas e utilitários compartilhados
│   ├── scripts/
│   │   ├── form/                # Lógica do formulário de agendamento
│   │   ├── load/                # Carregamento e atualização dos horários
│   │   └── services/            # Comunicação com a API
│   ├── styles/
│   ├── main.js                  # Ponto de entrada da aplicação
├── .gitignore
├── index.html                   # Página principal
├── package.json                 # Dependências e scripts
├── package-lock.json
├── webpack.config.js            # Configuração do Webpack
└── README.md                    # Documentação do projeto
```

## Como executar

### Clone o projeto

```bash
git clone https://github.com/isaguili/pet-shop.git
```

### Entre na pasta

```bash
cd pet-shop
```

### Instale as dependências

```bash
npm install
```

### Inicie a API

```bash
npm run server
```

### Inicie o projeto

```bash
npm run dev
```

O projeto ficará disponível em:

```
http://localhost:3333
```


### 👩‍💻 Autora
**Isabella Guimarães**  
Estudante de Análise e Desenvolvimento de Sistemas
