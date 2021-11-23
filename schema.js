const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
    fName: String,
    sName: String,
    favNo: Number
});

const peopleModel = mongoose.model("People Database", peopleSchema);

module.exports = peopleModel;