# Use a imagem Node.js como base
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo de dependências
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta padrão do backend
EXPOSE 3000

# Comando padrão para iniciar o servidor
CMD ["npm", "start"]