const express = require("express");

// server
const app = express();

// route
app.get("/", (req, res) => {
	res.send("from server :4000");
});

app.listen(4000, () => {
	console.log("server is running... (>> index.js)");
});
