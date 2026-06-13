const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose
    .connect("mongodb://127.0.0.1:27017/contactbook")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get("/contacts", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

app.post("/contacts", async (req, res) => {
    const contact = await Contact.create(req.body);
    res.json(contact);
});

app.put("/contacts/:id", async (req, res) => {
    const updated = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(updated);
});

app.delete("/contacts/:id", async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);

    res.json({
        message: "Deleted Successfully"
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});