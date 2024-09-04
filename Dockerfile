FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist/angularmainproject/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the angular application

# Copy package.json and package-lock.json to the working directory

# Install the dependencies

# RUN npm install -g @angular/cli@17

# Copy the entire project to the working directory

# Build the application in production mode

# Stage 2: Serve the application using nginx

# Copy the built files from the previous stage to nginx's default html directory

# Expose port 80 to the outside world

# Start nginx
