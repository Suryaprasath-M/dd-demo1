import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
// import router from './src/router/index.router';
import userRouter from './src/router/user.router'; // ✅ Import userRouter directly
import cors from 'cors';

const app = express(); // ✅ Move this to the top before using `app`

app.use(cors()); // ✅ Now cors middleware is applied correctly
app.use(express.json());
app.use('/api', userRouter);  

console.log('Express server is running');

try {
  mongoose.connect('mongodb+srv://typescript:type123@cluster0.essdnqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log('Connected to MongoDB');
} catch {
  console.log('Not connected');
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
