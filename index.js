const express = require("express");
const conDb = require("./config/db");
const cors = require("cors");

// server
const app = express();

// db
conDb();

app.use(cors());

app.use(express.json());

// routes
app.use("/api/products", require("./routes/product"));

app.listen(4000, () => {
	console.log("server is running... (>> index.js)");
});
