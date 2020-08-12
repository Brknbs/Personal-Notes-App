const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGODB } = require('./config');
const userRoutes = require('./routes/user');
const noteRoutes = require('./routes/note');
const auth = require('./middlewares/auth');
const cors = require('cors');

const PORT = 3300;

app.use(express.json());
app.use(cors());

app.use('/api/protected', auth, (req, res) => {
  res.end(`Hi ${req.user.firstName}, you are authenticated!`);
});

app.use('/api/users', userRoutes);
app.use('/api/notes', auth, noteRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: err.message
    }
  });
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch(err => console.log(err));

app.listen(3300, () => console.log(`Server is running on port ${PORT}`));