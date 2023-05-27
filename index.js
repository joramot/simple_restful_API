const express = require('express');

const app = express();
app.use(express.json());

const database = [
  {
    name: 'John Doe',
    id: 123,
  },
];// storage for the name and ID

// Storage PATH to store the name and ID
app.post('/names', (req, res) => {
  const { id, name } = req.body;
  const entry = { id, name };
  database.push(entry);
  res.status(201).json(entry);
});

// Get PATH to retrieve the name and ID
app.get('/names', (req, res) => {
  res.json(database);
});

// start the server
app.listen(3000, () => {
  console.log('app is running on port 3000');
});