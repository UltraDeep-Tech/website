# Usa una imagen base oficial de Node.js 20.
FROM node:20

# Establece el directorio de trabajo.
WORKDIR /app

# Copia el archivo package.json y package-lock.json.
COPY package*.json ./

# Configura el límite de memoria para Node.js.
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Actualiza npm a la versión requerida.
RUN npm install -g npm@10.8.2

# Instala las dependencias utilizando npm ci.
RUN npm ci

# Copia el resto del código de la aplicación.
COPY . .

# Expone el puerto en el que correrá la aplicación.
EXPOSE 8080

# Comando para ejecutar la aplicación.
CMD ["npm", "start"]
