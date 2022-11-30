const express = require('express');

const app = express();
const PORT = 5100;

const options = {
  setHeaders: (res) => {
    res.set('Access-Control-Allow-Origin', ['*']);
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  },
};

app.use(express.static('dist', options));

app.use((req, res, next) => res.status(404).redirect('/'));

app.listen(PORT, () =>
  console.log(
    `***----------------------***\n\n\nServer running on port: ${PORT}\n\n\n***----------------------***`
  )
);
