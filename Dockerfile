# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto
COPY . .

# Concede permissões para evitar erros
RUN chmod -R 777 /app

# Expõe a porta 3000 (usada pelo React)
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
