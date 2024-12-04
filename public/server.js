const express = require('express');
const db = require('./database');
const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  db.all("SELECT * FROM user", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

app.post('/users', (req, res) => {
  const { id, name } = req.body;
  db.run('INSERT INTO user (id, name) VALUES (?, ?)', [id, name], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'User creado!' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
