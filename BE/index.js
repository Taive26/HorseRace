require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const router = require('./src/router');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hakkama said!');
});

app.use('/api', router);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
