FROM node:14

WORKDIR /app

COPY package*.json ./

ENV NEW_RELIC_NO_CONFIG_FILE=true

ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node","src/index.js" ]
