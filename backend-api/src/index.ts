import express from 'express';
import userRoutes from './routes/users';

const app = express();
const port = 8080;

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});