FROM node-16.10.0-slim

# Get the dependencies ready
RUN apt-get -y update \
    && apt-get install git -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Define the working directory
WORKDIR /app

# Copy all the package files and Next config
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the source files
COPY . .

# Run build command
RUN npm run build

# Expose the PORT
EXPOSE 3000

# Start the container
ENTRYPOINT ["npm", "run", "serve"]
