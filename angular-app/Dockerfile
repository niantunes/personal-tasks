# Use a imagem Node.js como base
FROM node:20

WORKDIR /app

# Configura o NPM para ignorar SSL estrito
RUN npm config set strict-ssl false

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

EXPOSE 4200

# Comando padrão para iniciar o servidor de desenvolvimento
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]