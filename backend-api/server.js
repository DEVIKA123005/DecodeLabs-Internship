const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to DecodeLabs Backend API!");
});

app.post("/user", (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    res.json({
        message: "User added successfully",
        data: { name, age }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});