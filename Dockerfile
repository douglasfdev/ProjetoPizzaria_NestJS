FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/adpp

EXPOSE 3000

CMD npm install && \
npm run build  && \
npm run start:dbdev
