# Use the official Node.js Current image (lightweight Alpine version)
FROM node:current-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to cache dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (change 3000 if your app uses a different port)
EXPOSE 8080

# The command to start your application
CMD [ "npm", "start" ]
