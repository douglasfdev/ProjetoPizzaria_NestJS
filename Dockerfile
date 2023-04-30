FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY ./package.json /home/node/app/

RUN npm i -g @nestjs/cli

RUN npm i --silent

COPY . .
