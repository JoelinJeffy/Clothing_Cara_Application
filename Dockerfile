# Stage 1: Build the angular application
FROM node:20 AS build

WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install
# RUN npm install -g @angular/cli@17

# Copy the entire project to the working directory
COPY . .

# Build the application in production mode
RUN npm run build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Copy the built files from the previous stage to nginx's default html directory
COPY --from=build /app/dist/angularmainproject/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
