import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MONGO DB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log(`Listening to port 3000!`);
});
