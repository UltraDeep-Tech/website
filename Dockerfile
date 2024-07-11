FROM node:18.17.0

WORKDIR /app

COPY package*.json ./

ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm install -g npm@10.8.2
RUN npm install

COPY . .

CMD ["node", "your-start-script.js"]

