# Impulsionar 2.0: Desafio de frontend módulo 5
Docker Básico

## Objetivo do desafio
Neste desafio vamos escrever dois arquivos de configuração para que possamos gerar uma imagem da nossa aplicação além de construir um ambiente local para desenvolvimento com o Docker Compose.

## O Desafio
- [X] Crie um Dockerfile para o projeto feito no módulo 3 e 4
    - [X] Use uma imagem node
    - [X] rode o script de build da aplicação React
- [X] Crie um arquivo de configuração do Docker Compose para iniciar esse projeto para um ambiente de desenvolvimento.
- [ ] Crie uma conta em [heroku.com](https://www.heroku.com/)
    - [ ] Faça um "deploy" do projeto no heroku.
    - [ ] Insira o link da  sua aplicação no "Readme" deste projeto.
- [ ] Faça um "Readme" com instruções de como o aplicativo deve ser executado e "deployado".

## Instruções para Realização do Desafio
- Faça um fork do repositório para a sua conta.
- Implemente a sua solução conforme solicitado.
- Compartilhe o link do projeto com o seu mentor.

## Critérios de avaliação
- Existe um documento "Readme" no projeto com informações deste desafio?
- Executando o comando `docker build -t impulsionar .` gera uma imagem no Docker?
- Após gerar a imagem é possível rodar um container dela?
- Após criar o container é possível acessar a aplicação pelo navegador no endereço `http://localhost:8080` ou alguma porta sugerida pelo desenvolvedor?
- Executar o comando `docker-compose up` inicia-se um container no Docker da aplicação em modo desenvolvimento?
- Após executar o comando do Compose é possível acessar a aplicação pelo navegador no endereço `http://localhost:8080` ou alguma porta sugerida pelo desenvolvedor?
- O link para a aplicação no Heroku está funcionando?