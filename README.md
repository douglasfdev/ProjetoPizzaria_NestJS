# API VDT Hub B2B
### Description
#### Essa API será usada para fornecer os serviços Vá de Taxi para chamadas de taxistas, e interagir com o banco de dados sobre tudo relacionado a chamada de taxistas.

##### Váriaveis de Ambiente
```
src
├── common
│   └── envs
│   │   ├── development.env
│   │   ├── production.env
│   │   ├── local.env
│   └── helpers
│   │   ├── env.helper.ts
...etc.
```
Para ambiente de desenvolvimento, digite no terminal: `npm run start:dev` \
Para ambiente de produçao, digite no terminal: `npm run start:prod`
##### Docker
Apontar no Dockerfile

Digitar no terminal: `docker-compose up-d`
Digitar no terminal: `docker run -p 3000:3000 vdt-hub-b2b`
##### Swagger
Para acessar as rotas e documentaçao das rotas e suas propriedades basta acessar ao endpoint: http://localhost:3000/docs

Para ver a documentaçao em JSON basta adicionar `-json` no fim do link: http://localhost:3000/docs-json

Para ver a documentaçao em YML basta adicionar `-yaml` no fim do link: http://localhost:3000/docs-yaml
