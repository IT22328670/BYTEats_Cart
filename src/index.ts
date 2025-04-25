import express from "express";
import connectDB from "./config/dbConnect";
import cors from "cors";
import dotenv from "dotenv";
import cartRoutes from "./routes/cart.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));


app.use(express.json());

app.use('/api/cart', cartRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the cart backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});