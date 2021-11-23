const mongoose = require("mongoose");

const connectToDB = async () =>
    mongoose.connect("mongodb://localhost:27017/myfirstDB", {
        useNewUrlParser: true,
    });

module.exports = connectToDB;