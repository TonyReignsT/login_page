const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'pass') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
