const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 8000;
const app = express();


app.use(
    cors({
        origin: "*",
        methods: "*",
    })
);
app.use("/public", express.static("./uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


////run async function in express
app.use("/", require("./src/routes/index"));
// app.use(errorHandler);
app.listen(port, () => console.log(`working on ${port}`));