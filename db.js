const mongoose = require("mongoose");
require('dotenv').config();
dbConnect();
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true ,useUnifiedTopology: true }
    );
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("MongoDb connection failed",error);
  }
}

module.exports = mongoose;
