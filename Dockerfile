FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install -g @nestjs/cli

RUN npm install --silent

COPY . .

EXPOSE 5555

CMD ["npm", "run", "start:dev"]
