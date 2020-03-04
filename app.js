const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
      // res.send("Hello world");
      // res.sendFile('index.html');
      res.sendFile('test.pdf');
});

app.listen(port, () => {
      console.log(`server running port ${port}`);
})