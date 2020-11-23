require('./db/config');

const express = require('express'),
  birthdaysRouter = require('./routes/birthday');

const app = express();

app.use(express.json());

app.use('/api/birthdays', birthdaysRouter);

// We'll also add an error handler as well.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

module.exports = app;
