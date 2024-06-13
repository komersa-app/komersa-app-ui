# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Install global packages (including next)
RUN npm install -g next

# Bundle app source inside the Docker image
COPY . .

# Make port 80 available outside the container
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "run", "dev" ]

# build and run the app
# docker build -t <image-name>.
# docker run -p 4000:80 <image-name> -- port -- externe:interne
