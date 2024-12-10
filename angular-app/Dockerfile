# Use a imagem Node.js como base
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install -g @angular/cli && npm install

# Copie o restante do código
COPY . .

# Exponha a porta padrão do Angular
EXPOSE 4200

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["ng", "serve"]