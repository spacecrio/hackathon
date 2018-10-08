FROM node:10-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY ./src ./src
EXPOSE 8080
CMD [ "node", "src/index.js" ]
