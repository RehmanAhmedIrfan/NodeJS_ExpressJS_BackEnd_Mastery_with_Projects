import express from 'express'
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
  "mongodb+srv://ahmedwebappdev_db_user:rSU3FWm1XdHf9Avv@cluster-backend.tq2a6a1.mongodb.net/",{
    dbName:"NodeJs Mastery Course"
  }
).then(()=>console.log("MongoDb Connected..!")).catch((err)=>console.log(err))

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))