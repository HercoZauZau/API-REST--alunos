# API-REST--alunos

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
  
