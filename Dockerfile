FROM node:20

WORKDIR /app

COPY package*.json ./

# Set environment variables
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install the required version of npm
RUN npm install -g npm@10.8.2

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Start the application
CMD ["npm", "start"]
