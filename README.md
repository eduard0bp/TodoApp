# Todo App

Este é um projeto de aplicativo Todo construído usando o framework JavaScript React.

## Funcionalidades

- Criar itens Todo
- Ler itens Todo
- Atualizar itens Todo
- Deletar itens Todo

## Como usar

Para usar este projeto, você precisará ter o Node.js instalado em sua máquina.

1. Faça o clone do repositório:

```bash
git clone https://github.com/eduard0bp/TodoApp.git
```

2. Entre na pasta do projeto:

```bash
cd TodoApp
```

3. Instale as dependências:

```bash
npm install
```

4. Gere uma versão de produção:

```bash
npm run build
```

5. Inicie o servidor node:

```bash
node server.js
```

6. Acesse o projeto no seu navegador, usando a seguinte URL: http://localhost:3000/

## Como usar com Docker

1. Construa a imagem:

```bash
docker build -t todoapp .
```

2. Execute o container:

```bash
docker run -p 3000:3000 todoapp
```

3. Acesse o projeto no seu navegador, usando a seguinte URL: http://localhost:3000/

## Tecnologias usadas

| Front-End  | Back-end | Diversos |
| ---------- | -------- | -------- |
| Typescript | MockAPI  | Docker   |
| React      | Node     | Toastify |
| HTML / CSS | Express  |          |

## Contribuição

Este projeto é mantido por [Eduardo](https://github.com/eduard0bp).

Sinta-se à vontade para contribuir com o projeto, abrindo issues ou enviando pull requests.

Link do projeto: https://desafio-frontend-modulo5-eduardo.vercel.app/
