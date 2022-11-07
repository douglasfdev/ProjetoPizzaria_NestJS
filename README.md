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
Para ambiente de desenvolvimento, digite no terminal:
`export NODE_ENV=development`
Para ambiente de desenvolvimento, digite no terminal:
`export NODE_ENV=production`
##### Docker
_
##### Swagger
Para acessar as rotas e documentaçao das rotas e suas propriedades basta acessar ao endpoint: http://localhost:3000/docs

Para ver a documentaçao em JSON basta adicionar `-json` no fim do link: http://localhost:3000/docs-json
