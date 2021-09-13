const express = require("express");
const conDb = require("./config/db");

// server
const app = express();

// db
conDb();

app.use(express.json());

// routes
app.use("/api/products", require("./routes/product"));

app.listen(4000, () => {
	console.log("server is running... (>> index.js)");
});
