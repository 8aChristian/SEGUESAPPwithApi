const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const userRoutes = require("./routes/user");
const app = express();
const port = process.env.PORT || 9000;

// Agrega el middleware cors antes de tus rutas
app.use(cors());

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MONGODB ATLAS"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Server Listening on port", port));
