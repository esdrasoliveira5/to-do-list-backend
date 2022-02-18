# to-do-list-backend

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

### **Verifica o estado da Api**
##### `GET` /
<br/>

  Esse endpoint verifica se a Api esta online e retorna um objeto com a mensagem `Api to-do list online!!`

  - Exemplo `response body`
    ```json
      {
          "message": "Api to-do list online!!"
      }
    ```
  <br/>

### **Registrar Usuário**
##### `POST` /user
<br/>

  Esse endpoint registra um usuário e retorna um objeto com a menssagem.

  - Exemplo `request body` 
    ``` json
      {
          "name": "name",
          "lastName": "lastname",
          "email": "exemple@email.com",
          "password": "12345678"
      }
    ```

  - Exemplo `response body`
    ```json
      {
        "message": "User created"
      }
    ```
<br/>

### **Login** 
##### `POST` /login
  <br/>

  Esse endpoint valida o login do usuário e retorna um objeto com o id do usuario e o token de acesso dele.

  - Exemplo `request body` 
    ``` json
      {
          "email": "exemple@email.com",
          "password": "12345678"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "userId": 26,
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZXhlbXBsZUBlbWFpbC5jb20iLCJpYXQiOjE2NDUxNDI0NzksImV4cCI6MTY0NTc0NzI3OX0.sRZtnLnkGYHjhFBXJISTcX41QbvpGxll-wUnU-kGxyE"
      }
    ```
  <br/>

### **Pega um usuario**
##### `GET` /user/:id
  <br/>

  Esse endpoint busca um usuario cadastrado pelo id.

  - Exemplo `request headers`
      ```json
      {
        "Authorization": "(Bearer Token)"
      }
      ```

  - Exemplo `response body`
    ```json
      {
          "id": 26,
          "name": "name",
          "lastName": "lastname",
          "email": "exemple@email.com",
          "password": "12345678",
          "created": "2022-02-17T23:53:25.727Z",
          "tasks": []
      }
    ```
  <br/>

### **Editar um usuario**
##### `PUT` /user/:id
  <br/>

  Esse endpoint atualiza um usuario com o ID fornecido na rota e retorna um objeto com os dados atualizados.

  *Obs: Apenas o usuário que criou o usuario pode atualizar.*

  - Exemplo `request headers`
    ```json
        {
          "Authorization": "(Bearer Token)"
        }
    ```

  - Exemplo `request body` 
    ```json
      {
          "name": "name",
          "lastName": "lastname",
          "password": "12345678"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "name": "name",
          "lastName": "lastname",
          "password": "12345678"
      }
    ```
  <br/>

### **Deleta um usuario**
##### `DELETE` /user/:id
  <br/>

  Esse endpoint deleta um usuario com o ID fornecido na rota e retorna um objeto com a mensagem `User deleted`.

  *Obs: Apenas o usuário que criou o usuario pode deletar.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "message": "User deleted"
      }
    ```
  <br/>


## POST /tasks - Retorna uma tarefa criada no banco de dados qunado enviado um token no header e um title, description, priority, dateLimit pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks

### **Cria uma tarefa**
##### `POST` /tasks
  <br/>

  Esse endpoint cria uma tarefa.

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body` 
    ``` json
      {
          "title": "title exemple",
          "description": "description exemple",
          "priority": "Alta",
          "dateLimit": "2022-10-02"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "id": 71,
          "title": "title exemple",
          "description": "description exemple",
          "priority": "Alta",
          "dateLimit": "2022-10-02",
          "userId": 26,
          "created": "2022-02-18T00:44:02.803Z",
          "categoryId": 1
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