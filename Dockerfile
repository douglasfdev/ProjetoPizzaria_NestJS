FROM node:lts-alpine

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY ./package.json /home/node/app/

RUN npm i -g @nestjs/cli && \
    npm i @nestjs/swagger

RUN npm i --silent

COPY . .

EXPOSE 5555

CMD ["npm", "run", "start:dev"]
