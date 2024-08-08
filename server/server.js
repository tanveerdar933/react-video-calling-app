const express = require("express");
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

// Endpoint to print the body of the received API request
app.post('/print_jaas_webhook', (req, res) => {
  console.log('Received /print_jaas_webhook request');
  console.log('Request body:', req.body);
  res.send('Webhook received');
});

////run async function in express
app.use("/", require("./src/routes"));


// app.use(errorHandler);
app.listen(port, () => console.log(`working on ${port}`));