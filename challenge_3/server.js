const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()

app.use(express.static(path.join(__dirname, './public/')))

app.get('/', (req, res) => {
  res.send('Hi')
})

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`app is listening on ${PORT}`));
