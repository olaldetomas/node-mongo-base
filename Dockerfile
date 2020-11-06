FROM node:14.15.0-alpine3.10 AS node-14

WORKDIR /node/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]