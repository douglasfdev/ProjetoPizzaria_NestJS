# Development mode
FROM node:lts-alpine As development

RUN apk add --no-cache bash

# Create app directory, this is in our container/in our image
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

## Digitar no console Docker run -p 3000:3000 vdt-hub-b2b
EXPOSE 3000

CMD [ "node", "dist/main" ]

#Production mode

#Local mode
