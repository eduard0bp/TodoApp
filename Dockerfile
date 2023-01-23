FROM node:16.18.0-alpine as buildStage

LABEL stage="builder"

# Instala o React e as dependências do projeto
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# RUN ["rm", "-rf", "node_modules"]
# RUN npm ci express uuid http-proxy-middleware morgan

# FROM node:16.18.0-alpine
# LABEL author="Eduardo Batista Pereira<eduardo.pereira@southsystem.com.br>"

# WORKDIR /app

# # # Copia os arquivos do projeto para o container
# COPY --from=buildStage /app/build/. /app/
# COPY --from=buildStage /app/server.js /app/
# COPY --from=buildStage /app/node_modules/ /app/node_modules

# Inicia a aplicação
CMD ["node", "server.js"]