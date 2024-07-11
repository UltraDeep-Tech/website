# Use a specific Node.js version that satisfies '>=18.17.0'
FROM node:18.17.0

WORKDIR /app

COPY package*.json ./

# Set environment variables
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install the required version of npm
RUN npm install -g npm@10.8.2

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application
COPY . .

# Start the application
CMD ["npm", "start"]
