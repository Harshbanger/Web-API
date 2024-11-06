// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
