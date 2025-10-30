import authRoutes from './routes/authRoute.js';
import incomeRoutes from './routes/incomeRoute.js';
import expenseRoutes from './routes/expenseRoute.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
const app = express();
dotenv.config();

// Middleware
app.use(cors({origin:process.env.FE_URL||"http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes
app.use('/auth', authRoutes);
app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);


// MongoDB connection
mongoose.connect(process.env.URL)
  .then(() => console.log("🟢 MongoDB Connected"))
  .catch((err) => console.error("🔴 MongoDB Error:", err));

app.listen(process.env.PORT || 8080, () => {
  console.log(`🟡 Server running on port ${process.env.PORT || 8080}`);
});


