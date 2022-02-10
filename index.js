const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const UserRouter = require('./routers/UserRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, resp) => {
  console.log('FUNCIONANDO!!!');
  return resp.status(200).json({ message: 'FUNCIONANDO' })
})

app.use('/user', UserRouter);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
}); 