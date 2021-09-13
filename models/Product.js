const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
	Name: { type: String, required: true },
	Category: { type: String, required: true },
	Location: { type: String, required: true },
	Price: { type: Number, required: true },
	CreationDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Product", ProductSchema);
