# Usa una imagen base oficial de Node.js.
FROM node:14

# Establece el directorio de trabajo.
WORKDIR /app

# Copia el archivo package.json y package-lock.json.
COPY package*.json ./

# Instala las dependencias.
RUN npm install

# Copia el resto del código de la aplicación.
COPY . .

# Construye la aplicación.
RUN npm run build

# Expone el puerto en el que correrá la aplicación.
EXPOSE 8080

# Comando para ejecutar la aplicación.
CMD ["npm", "start"]
