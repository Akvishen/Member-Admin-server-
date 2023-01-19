const mongoose = require("mongoose");
//fill your database name here
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb+srv://rohanraj:rohanraj94@cluster0.vkdsrxj.mongodb.net/MemberData?retryWrites=true&w=majority",
  // mongodb+srv://singh99vikas:Mongoose@cluster0.snh5a.mongodb.net/review_managment_system_db?retryWrites=true&w=majority
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind("console", "error"));

db.once("open", function () {
  console.log("welcome connect to database");
});

module.exports = db;
