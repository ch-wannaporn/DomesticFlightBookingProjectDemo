import express from 'express';
import HomeController from './controllers/home.controller'

const app = express();
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', HomeController);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});