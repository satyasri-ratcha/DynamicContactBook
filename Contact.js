const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    category: String
});

module.exports = mongoose.model("Contact", ContactSchema);