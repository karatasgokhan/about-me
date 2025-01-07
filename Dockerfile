# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install yarn
RUN apk add --no-cache yarn

# Copy package files
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
