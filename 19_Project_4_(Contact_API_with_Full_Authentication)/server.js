import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import contactRouter from "./Routes/contact.js";
import { config } from "dotenv";

const app = express();

app.use(bodyParser.json());

// .env setup
config({ path: ".env" });

//! user Routes:-
app.use("/api/user", userRouter);

//! contact Routes:-
app.use("/api/contact", contactRouter);

//! home Route:-
app.get("/", (req, res) => {
  res.json({
    message: "This is Home Route by Thunder Client",
  });
});

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
