import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MONGO DB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log(`Listening to port 3000!`);
});
