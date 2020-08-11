const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');

const PORT = 3300;

app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch(err => console.log(err));

app.listen(3300, () => console.log(`Server is running on port ${PORT}`));