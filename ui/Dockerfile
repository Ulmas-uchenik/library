FROM node:20.4.0-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
CMD ["npm", "run", "dev"]