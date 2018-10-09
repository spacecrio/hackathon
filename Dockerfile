FROM node:8-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install --only=production \
    && apk del build-dependencies
COPY ./src ./src
EXPOSE 8080
CMD [ "node", "src/index.js" ]
