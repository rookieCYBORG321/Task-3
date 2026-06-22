const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Enable CORS explicitly for all incoming requests before processing routes
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:Sick123@cluster0.gq2xw8e.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Database connection error:", err));

const Task = mongoose.model(
    "Task",
    new mongoose.Schema({
        text: String
    })
);

// 1. READ
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 2. CREATE
app.post("/add", async (req, res) => {
    try {
        const { text } = req.body;
        const newTask = new Task({ text });
        await newTask.save();
        res.send(newTask);
    } catch (error) {
        res.status(500).send({ message: "Error adding task", error });
    }
});

// 3. UPDATE
app.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { text }, { new: true });
        res.send(updatedTask);
    } catch (error) {
        res.status(500).send({ message: "Error updating task", error });
    }
});

// 4. DELETE
app.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.send({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error deleting task", error });
    }
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});