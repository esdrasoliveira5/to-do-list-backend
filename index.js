const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const UserRouter = require('./routers/UserRouter');
const TasksRouter = require('./routers/TasksRouter');
const Users = require('./controllers/Users');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (_req, resp) => resp.status(200).json({ message: 'Api to-do list online!!' }));
app.post('/login', Users.loginUser);
app.use('/user', UserRouter);
app.use('/tasks', TasksRouter);

app.listen(PORT, () => console.log(`Aplicação ouvindo na porta ${PORT}`));
