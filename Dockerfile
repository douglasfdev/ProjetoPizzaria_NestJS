FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli

USER node

WORKDIR /home/node/app

RUN npm i &&\
    npm run build &&\
    npm run start:dev
