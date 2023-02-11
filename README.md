## Sobre

**API feita em Nodejs para gestão de dados de alunos, usando MariaDB para persistência dos dados.**

O usuário precisa criar uma conta para ter acesso aos dados dos alunos, onde poderá fazer um CRUD dos mesmos.

Cada usuário terá acesso também aos seus dados pessoais e não dos outros usuários.

É usado **JWT** para autenticação e autorização de rotas e usuários. O usuário pode gerar o token com seu ID e Email.

As senhas dos usuários são encriptadas.

---

## Dados

| Modelo | Estrutura |
| --- | --- |
| Usuário | Nome, Email, Senha                                |
| Aluno | Nome, Sobrenome, Email, Idade, Peso, Altura, Foto   |
| Foto | Nome original, Novo nome, Url                        |

<br>
<br>


| Campo | Validação |
| --- | --- |
| Nome e Sobrenome | Deve ter entre 3 e 50 caracteres   |
| Email | Deve ser válido e único na Base de Dados      |
| Senha | Deve ter entre 3 e 50 caracteres              |
| Idade | Deve ser do tipo inteiro                      |
| Peso | Deve ser do tipo real                          |
| Altura | Deve ser do tipo real                        |
| Url | -                                               |
| Nomes de arquivos | -                                 |

---
## Instalação

 - Abra o terminal do projecto
 - `npm install` para instalar os pacotes necessários
 - `npm start` para rodar o projecto na `localhost:3001`
 - `ctrl + c` para parar o servidor
 - `npm run build` para atualizar a dist


## Migrations

- npx sequelize migration:create --name=`nome da migration`
- npx sequelize db:migrate


## Execução

 - Crie uma conta de usuário `localhost:3001/users/` 
 - Gere um Token para autenticação das secções `localhost:3001/tokens/` 

## .env

Não esqueça de criar um arquivo `.env` com as configurações necessárias:

  - DATABASE= `nome da DB`
  - DATABASE_HOST= `link da DB`
  - DATABASE_PORT= `porta a rodar na DB`
  - DATABASE_USERNAME= `nome de usuário na DB`
  - DATABASE_PASSWORD= `senha de acesso a DB`
  - TOKEN_SECRET= `secret dos tokens que serão gerados`
  - TOKEN_EXPIRATION= `tempo de validade do token`
  - APP_URL= `url da API` exemplo `http://localhost:3001`
  - APP_PORT= `porta` exemplo `3001`


---

## Exemplo

```json
[
    {
        "id": 1,
        "nome": "Tatiana",
        "sobrenome": "Langa",
        "email": "tlanga@email.com",
        "idade": 20,
        "peso": 76.9,
        "altura": 1.5,
        "Fotos": []
    },
    {
        "id": 2,
        "nome": "Marcos",
        "sobrenome": "Chissano",
        "email": "chissano@email.com",
        "idade": 18,
        "peso": 69.3,
        "altura": 1.8,
        "Fotos": []
    },
    {
        "id": 3,
        "nome": "Carlos",
        "sobrenome": "Zucula",
        "email": "czucula@email.com",
        "idade": 18,
        "peso": 60,
        "altura": 1.2,
        "Fotos": [
            {
                "url": "http://localhost/images/1675062594842_1811.jpg",
                "filename": "1675062594842_1811.jpg"
            },
            {
                "url": "http://localhost/images/1675062418734_1811.jpg",
                "filename": "1675062418734_1811.jpg"
            }
        ]
    }
]
```
---

## Feito com
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 

---

## Autor
- [Hérco ZauZau](https://github.com/HercoZauZau)
- Link do projecto: https://github.com/HercoZauZau/API-REST--alunos
  
