require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = 'mongodb+srv://rptramirez:Web2015107155@cluster0.igro8.mongodb.net/test';

const connectDb = () => {
  return mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
      console.log("Connection to Database failed.");
    }
    else{
      console.log("Database connection successful.");
    }
  });
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;
