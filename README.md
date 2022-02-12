# to-do-list-backend

## GET / verifica se a API esta Online
https://to-do-list-back-end-3456.herokuapp.com/

## POST /user - Retorna um token e cria um usuario quando e enviado um name, lastName email e password pelo body da requisicao. 
https://to-do-list-back-end-3456.herokuapp.com/user

## POST /login - Retorna um token quando enviando um email e uma password pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/login

##  GET /user - Retorna um usuario cadastrado quando enviado um token valido peloo header da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/user

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

## PUT /tasks/:id - Retorna um tarefa com os dados atualizados qunado enviado enviado um id pelo parametro, um token de autenticacao pelo header e title, description, priority, dateLimit pelo body da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks/2

## DELETE /tasks/:id - Retorna a mensagem 'Task deleted' e deleta uma tarefa quando enviado um id pelo parametro e um token valido pelo header da requisicao.
https://to-do-list-back-end-3456.herokuapp.com/tasks/2
