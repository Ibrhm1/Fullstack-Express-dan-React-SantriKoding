const express = require('express'); //* import module express
const app = express(); //* create app
const port = 3000; //* port
const cors = require('cors'); //* import cors
const bodyParser = require('body-parser'); //* import body-parser
const { router } = require('./routes/route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

//* route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//* start server
app.listen(port, () => {
  console.log(`Server started on port ${port}, http://localhost:${port}`);
});
