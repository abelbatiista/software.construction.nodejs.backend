const express = require('express');
const cors = require('cors');
const {
  userRoutes,
  authRoutes,
  creditCardRoutes,
  categoryRoutes,
  causeRoutes,
} = require('./routes');
const { ENV, DB } = require('./config');

const app = express();
const port = ENV.app.port;

DB.initializeDB().then();

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/credit-card', creditCardRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/cause', causeRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
