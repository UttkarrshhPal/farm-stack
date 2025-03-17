# Use Node.js image
FROM node:20


# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
