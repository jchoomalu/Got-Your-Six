import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//connects to the database using uri string from config file for security
//displays connection confirmation in console
import addEventSeeds from "../seeds/events.js"
import addResources from "../seeds/resources.js";
import addNewsSeeds from "../seeds/news.js";
import addStorySeeds from "../seeds/stories.js";
import addUserSeeds from "../seeds/users.js";
//connects to the database using uri from config file
//displays connection confirmation in console
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connected to gy6");
    addEventSeeds();
    addResources();
    addNewsSeeds();
    addStorySeeds();
    addUserSeeds();
  })
  .catch((error) => {
    console.error("Connection error", error.message);
  });
const db = mongoose.connection;

export default db;
