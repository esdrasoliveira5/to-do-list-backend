# to-do-list-backend

## GET / - Retorna a mensagem 'Api to-do list online!!'.
https://to-do-list-back-end-3456.herokuapp.com/

## POST /user - Retorna um token e cria um usuario quando e enviado um name, lastName email e password pelo body da requisicao. 
https://to-do-list-back-end-3456.herokuapp.com/user

## POST /login - Retorna um token quando enviando um email e uma password pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/login

##  GET /user/:id - Retorna um usuario cadastrado quando enviado um token valido peloo header da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/user/3

## PUT /user/:id - Atualiza um usuario cadastrado quando enviado um um id como parametro um token no header e um name, lastName e password pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/user/1

## DELETE /user/:id - Retorna a mensagem 'User deleted' e deleta um usuario cadastrado quando enviado um id como parametro e um token valido pelo header da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/user/1

## POST /tasks - Retorna uma tarefa criada no banco de dados qunado enviado um token no header e um title, description, priority, dateLimit pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks

##  GET /tasks - Retorna todas as tarefas relacionadas a um usuario quando enviado um token. 
https://to-do-list-back-end-3456.herokuapp.com/tasks

## GET /tasks/:id - Retorna uma tarefa relacionada a um usuario quando enviado um token valido pelo header da requisicao e o id pelo parametro.
https://to-do-list-back-end-3456.herokuapp.com/tasks/2

## GET tasks/category/:id - Retorna todas as tarefas de um usuario de acordo com a sua categoria quando enviado o id por parametro e um token valido.
https://to-do-list-back-end-3456.herokuapp.com/tasks/category/1

## PUT /tasks/:id - Retorna um tarefa com os dados atualizados qunado enviado enviado um id pelo parametro, um token de autenticacao pelo header e title, description, priority, dateLimit pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks/2

## DELETE /tasks/:id - Retorna a mensagem 'Task deleted' e deleta uma tarefa quando enviado um id pelo parametro e um token valido pelo header da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks/2

# Tests API

## Sumário

- [Descrição](#Descrição)
- [Pré-requisitos](#Pre-requisitos)
  - [Instalação](#Instalação)
  - [Instruções para iniciar o projeto](#Intruções-para-iniciar-o-projeto)
- [Documentação](#Documentação)
  - [Registrar Usuário](#Registrar-Usuário)
  - [Login](#Login)
  - [Criação de Provas](#Criação-de-Provas) 
  - [Listar Uma Prova](#Listar-Uma-Prova)
  - [Listar Todas as Provas](#Listar-Todas-as-Provas)
  - [Atualizar uma Prova](#Atualizar-uma-Prova)
  - [Deletar uma Prova](#Deletar-uma-Prova)
  - [Criação de Questões](#Criação-de-Questões)
  - [Listar Todas as Questões](#Listar-Todas-as-Questões)
  - [Atualizar Uma Questão](#Atualizar-Uma-Questão)
  - [Deletar Uma Questão](#Deletar-Uma-Questão)
  - [Criação de Alternativas](#Criação-de-Alternativas)
  - [Listar Todas as Alternativas](#Listar-Todas-as-Alternativas)
  - [Atualizar Uma Alternativa](#Atualizar-Uma-Alternativa)
  - [Deletar Uma Alternativa](#Deletar-Uma-Alternativa)
  - [Enviar Uma Prova](#Enviar-Uma-Prova)

<br>

## Descrição

**Objetivo**: O objetivo dessa aplicação, é manipular um banco de dados. Os conhecimentos aplicados foram:

- Arquitetura REST;
- Autenticações e Permissões com JWT;
- Modelagem de Dados e Migrations;
- Banco de Dados SQL (PostgreSQL);
- Serialização;
- Uso de containers (Docker).

## Pré-requisitos

- `docker`
- `npm version 6.14.13`
- `node version 14.17.0`
- `Um banco de dados postgreSQL`


## Instalação

- Clone o repositório
  ```sh
    git clone git@github.com:esdrasoliveira5/to-do-list-backend.git
- Vá para a pasta da aplicação
  ```sh
    cd to-do-list-backend
- Configure o arquivo .env (use o arquivo .env.example como guia)

## Instruções para iniciar o projeto

<br>

- Comando para iniciar
  ```sh
    docker image build -t todobackend 
<br/>

## Documentação

<br/>

### **Registrar Usuário**
##### `POST` /api/users
<br/>

  Esse endpoint registra um usuário e retorna um objeto com alguns dados do usuário e o token de acesso dele.
  - Exemplo `request body` 
    ``` json
      {
        "name": "tiago paz",
        "email": "tiago22@email.com",
        "password": "123456",
      }
    ```

  - Exemplo `response body`
    ```json
      {
        {
          "user": {
            "name": "tiago paz",
            "email": "tiago22@email.com",
            "id": 1
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGlhZ28gcGF6IiwiZW1haWwiOiJ0aWFnbzIyQGVtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2MzI4Mzk4NTIsImV4cCI6MTYzMjkyNjI1Mn0.ooXK7rodH3q2hF9OTSpmnfSH0M_ZHNMbm8ws5M7yB0k"
        }
      }
    ```
  <br/>

### **Login** 
##### `POST` /api/users/login
  <br/>

  Esse endpoint valida o login do usuário e retorna um objeto com alguns dados do usuário e o token de acesso dele.

  - Exemplo `request body` 
    ``` json
      {
        "name": "tiago paz",
        "email": "tiago22@email.com",
        "password": "123456",
      }
    ```

  - Exemplo `response body`
    ```json
      {
        {
          "user": {
            "name": "tiago paz",
            "email": "tiago22@email.com",
            "id": 1
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGlhZ28gcGF6IiwiZW1haWwiOiJ0aWFnbzIyQGVtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE2MzI4Mzk4NTIsImV4cCI6MTYzMjkyNjI1Mn0.ooXK7rodH3q2hF9OTSpmnfSH0M_ZHNMbm8ws5M7yB0k"
        }
      }
    ```
  <br/>
  
### **Criação de Provas**
##### `POST` /api/tests
  <br/>

  Esse endpoint cria uma prova e retorna o objeto criado.

  - Exemplo `request headers`
      ```json
        {
          "Authorization": "(Bearer Token)"
        }
      ```
  - Exemplo `request body` 
    ``` json
        {
          "title": "prova 01",
          "categorie": "tech",
          "timeLimit": 20
        }
    ```

  - Exemplo `response body`
    ```json
        {
          "title": "prova 01",
          "categorie": "tech",
          "time_limit": 20,
          "user_id": 1,
          "id": 3,
          "created_at": "2021-09-29T13:05:26.370Z",
          "updated_at": "2021-09-29T13:05:26.370Z",
        }
    ```
  <br/>

### **Listar Uma Prova**
##### `GET` /api/tests/:id
  <br/>

  Esse endpoint retorna a prova com o ID fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode visualizar ela.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
        {
          "id": 1,
          "title": "prova 01",
          "categorie": "tech",
          "time_limit": 20,
          "user_id": 1,
          "created_at": "2021-09-29T13:05:26.370Z",
          "updated_at": "2021-09-29T13:05:26.370Z",
          "questions": []
        }
    ```
  <br/>

### **Listar Todas as Provas**
##### `GET` /api/tests
  <br/>

  Esse endpoint retorna todas as provas criadas pelo usuário.

  *Obs: Apenas o usuário que criou as provas pode visualizar elas.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      [
        {
          "id": 1,
          "title": "prova 01",
          "categorie": "tech",
          "time_limit": 20,
          "user_id": 1,
          "created_at": "2021-09-29T13:05:26.370Z",
          "updated_at": "2021-09-29T13:05:26.370Z",
          "questions": []
        },
        {
          "id": 2,
          "title": "prova 02",
          "categorie": "tech",
          "time_limit": 20,
          "user_id": 1,
          "created_at": "2021-09-29T13:05:26.370Z",
          "updated_at": "2021-09-29T13:05:26.370Z",
          "questions": []
        },
      ]
    ```
  <br/>

### **Atualizar uma Prova**
##### `PUT` /api/tests/:id
  <br/>

  Esse endpoint atualiza a prova com o ID fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode alterar ela.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body` 
    ``` json
        {
          "title": "prova 03",
          "categorie": "RH",
          "timeLimit": 25
        }
    ```

  - Exemplo `response body`
    ```json
        {
          "title": "prova 03",
          "categorie": "RH",
          "time_limit": 25,
          "user_id": 1,
          "id": 1,
          "created_at": "2021-09-29T13:05:26.370Z",
          "updated_at": "2021-09-29T13:17:14.996Z",
        }
    ```
  <br/>

### **Deletar uma Prova**
##### `DELETE` /api/tests/:id
  <br/>
  
  Esse endpoint é responsável por deletar a prova com o ID fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode a deletar.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      No content
    ```
  <br/>

### **Criação de Questões**
##### `POST` /api/questions/:testId
  <br/>

  Esse endpoint cria uma questão relacionada ao teste com o ID passado na rota.

  *Obs: Apenas o usuário que criou a prova pode criar uma questão para ela.*
  *Obs2: O campo "type" ainda não possui nenhuma aplicação prática, mas seria relacionado ao tipo da questão (Multipla escolha, Dissertação, Verdadeiro ou Falso).*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
      ```json
        {
          "question": "que dia é o natal?",
          "categorie": "conhecimento gerais",
          "type": 1
        }
      ```

  - Exemplo `response body`
    ```json
      {
        "question": "que dia é o natal?",
        "categorie": "conhecimento gerais",
        "type": 1,
        "test": 1,
        "id": 1,
        "created_at": "2021-09-29T13:59:11.429Z",
        "updated_at": "2021-09-29T13:59:11.429Z"
      }
    ```
  <br/>

### **Listar Todas as Questões**
##### `GET` /api/questions/:testId
  <br/>

  Esse endpoint retorna todas as questões criadas pelo usuário para a prova com o ID passada na rota.

  *Obs: Apenas o usuário que criou as provas pode visualizar as questões.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `response body`
    ```json
      [
        {
          "id": 1,
          "question": "que dia é o natal?",
          "categorie": "conhecimento gerais",
          "type": 1,
          "created_at": "2021-09-29T13:59:11.429Z",
          "updated_at": "2021-09-29T13:59:11.429Z",
          "answers": []
        }
      ]
    ```
  <br/>

### **Atualizar Uma Questão**
##### `PUT` /api/questions/:testId/:questionId
  <br/>

  Esse endpoint é responsável por atualizar uma questão (questionId) da prova com o ID (testId) fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode atualizar uma questão relacionada a ela.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
    ```json
      {
        "question": "que dia é a páscoa?",
        "categorie": "conhecimento gerais",
        "type": 2
      }
    ```

  - Exemplo `response body`
    ```json
        {
          "id": 1,
          "question": "que dia é a páscoa?",
          "categorie": "conhecimento gerais",
          "type": 2,
          "created_at": "2021-09-29T13:59:11.429Z",
          "updated_at": "2021-09-29T14:09:46.586Z",
          "answers": []
        }
    ``` 
  <br/>

### **Deletar Uma Questão**
##### `DELETE` /api/questions/:testId/:questionId
  <br/>

  Esse endpoint é responsável por deletar uma questão (questionId) da prova com o ID (testId) fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode deletar uma questão relacionada a ela.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      No content
    ```
  <br/>

### **Criação de Alternativas**
##### `POST` /api/answers/:testId
 <br/>

  Esse endpoint é responsável por criar uma alternativa para uma questão(question) da prova com o ID (testId) fornecido na rota.

  *Obs: Apenas o usuário que criou a prova pode criar uma alternativa relacionada a uma questão dela.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
    ```json
      {
        "answer": "Dia 25",
        "isRight": true,
        "question": 1
      }
    ```

  - Exemplo `response body`
    ```json
        {
          "answer": "Dia 25",
          "is_right": true,
          "question": 1,
          "id": 1,
          "created_at": "2021-09-28T17:50:29.152Z",
          "updated_at": "2021-09-28T17:50:29.152Z"
        }
    ``` 
  <br/>

### **Listar Todas as Alternativas**
##### `GET` /api/answers/:testId/:questionId
  <br/>

    Esse endpoint é responsável por listar as alternativas relacionadas a questão(questionId) e a prova (testId).

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `response body`
    ```json
        [
          {
            "id": 1,
            "answer": "Dia 25",
            "is_right": true,
            "created_at": "2021-09-28T13:27:11.126Z",
            "updated_at": "2021-09-28T13:27:11.126Z"
          },
          {
            "id": 2,
            "answer": "Dia 29",
            "is_right": false,
            "created_at": "2021-09-28T13:28:11.274Z",
            "updated_at": "2021-09-28T13:28:11.274Z"
          }
        ]
    ```
  <br/>

### **Atualizar Uma Alternativa**
##### `PUT` /api/answers/:testId/:id
  <br/>

    Esse endpoint é responsável por atualizar a alternativa(id) relacionada a prova (testId).

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
      ```json
        {
          "answer": "Dia 29",
          "isRight": false,
          "question": 1
        }
      ```

  - Exemplo `response body`
    ```json
        {
          "id": 2,
          "answer": "Dia 29",
          "is_right": false,
          "created_at": "2021-09-28T17:50:29.152Z",
          "updated_at": "2021-09-28T17:50:29.152Z"
        }
    ```
  <br/>

### **Deletar Uma Alternativa**
##### `DELETE` /api/answers/:testId/:id
  <br/>

    Esse endpoint é responsável por deletar a alternativa(id) relacionada a prova (testId).

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `response body`
    ```json
      No content
    ```

### **Enviar Uma Prova**
##### `POST` /api/senttests/:testId
  <br/>

  Esse endpoint é responsável por enviar um email com o link do teste.

  *Obs: Não há funcionamento prática nessa rota além de enviar um email com um link ficticio*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `request body`
    ```json
      {
        "receiverEmail": "tiagopaz.dev@gmail.com"
      }
    ```

  - Exemplo `response body`
    ```json
      {
        "sender": 1,
        "receiver": "tiagopaz.dev@gmail.com",
        "testId": 1,
        "token": "token",
        "id": 1,
        "created_at": "2021-09-28T20:21:58.724Z",
        "updated_at": "2021-09-28T20:21:58.724Z"
      }
    ```