FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/adpp

EXPOSE 3000

RUN npm install
RUN npm run build
RUN npm run start:dbdev
