const express = require('express');
const { userRoutes } = require('./routes');
const { ENV } = require('./config');

const app = express();
const port = ENV.app.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
