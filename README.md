# to-do-list-backend

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

- Comando para inserir as categorias no banco de dados
  ```sh
    npx sequelize db:migrate   
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

### **Lista um usuario**
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

### **Cria uma tarefa**
##### `POST` /tasks
  <br/>

  Esse endpoint cria uma tarefa e retorna um objeto com a tarefa criada.

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

### **Lista todas as tarefas criadas**
##### `GET` /tasks
  <br/>
  
  Esse endpoint retorna todas as tarefas relacionadas a um usuario.

  *Obs: Apenas o usuario que criou as tarefas pode pegar as tarefas.*

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
              "id": 71,
              "title": "title exemple",
              "description": "description exemple",
              "priority": "Alta",
              "dateLimit": "2022-10-02",
              "userId": 26,
              "created": "2022-02-18T00:44:02.803Z",
              "categoryId": 1,
              "categories": {
                  "id": 1,
                  "name": "Não iniciado"
              }
          }
      ]
    ```
  <br/>

### **Lista uma tarefa especifica**
##### `POST` /tasks/:id
  <br/>

  Esse endpoint retorna uma terefa relacionada ao ID passado na rota.

  *Obs: Apenas o usuário que criou a tarefa pode pegá-la .*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
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
            "categoryId": 1,
            "categories": {
                "id": 1,
                "name": "Não iniciado"
            }
        }
    ```
  <br/>

### **Listar todas as tarefas de acordo com a categoria**
##### `GET` tasks/category/:id
  <br/>

  Esse endpoint retorna todas as tarefas criadas pelo usuário relacionadas ao ID da categoria passado na rota.

  *Obs: Apenas o usuário que criou as tarefas pode visualizar.*

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
              "id": 71,
              "title": "title exemple",
              "description": "description exemple",
              "priority": "Alta",
              "dateLimit": "2022-10-02",
              "userId": 26,
              "created": "2022-02-18T00:44:02.803Z",
              "categoryId": 1,
              "categories": {
                  "id": 1,
                  "name": "Não iniciado"
              }
          }
      ]
    ```
  <br/>


### **Atualizar uma tarefa**
##### `PUT` /tasks/:id
  <br/>

  Esse endpoint é responsável por atualizar uma tarefa com o ID fornecido na rota e retorna um objeto com as informacoes atualizadas.

  *Obs: Apenas o usuário que criou as tarefas pode atualizar.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
    ```json
      {
          "title": "title exemple",
          "description": "description exemple",
          "priority": "Baixa",
          "dateLimit": "2022-10-02"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "title": "title exemple",
          "description": "description exemple",
          "priority": "baixa",
          "dateLimit": "2022-10-02"
      }
    ``` 
  <br/>


### **Atualizar a categoria de uma tarefa**
##### `PUT` /category/:id
  <br/>

  Esse endpoint é responsável por atualizar a categoria de uma tarefa com o ID fornecido na rota e retorna um objeto com a mensagem `Task updated`.

  *Obs: Apenas o usuário que criou as tarefas pode atualizar.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```
  - Exemplo `request body`
    ```json
      {
          "categoryId": 1,
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "message": "Task updated"
      }
    ``` 
  <br/>

### **Deletar uma tarefa**
##### `DELETE` /tasks/:id
  <br/>

  Esse endpoint é responsável por deletar uma tarefa com o ID fornecido na rota e retorna um objeto com a mensagem `Task deleted`.

  *Obs: Apenas o usuário que criou a tarefa pode deletar.*

  - Exemplo `request headers`
    ```json
      {
        "Authorization": "(Bearer Token)"
      }
    ```

  - Exemplo `response body`
    ```json
      {
          "message": "Task deleted"
      }
    ```
  <br/>
