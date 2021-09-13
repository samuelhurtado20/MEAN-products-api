const Product = require("../models/Product");

exports.CreateProduct = async (req, res) => {
	console.log("create product");
	console.log(req.body);
	try {
		let product;
		product = new Product(req.body);
		await product.save();
		res.status(201).send(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Unexpected error");
	}
};

exports.AllProducts = async (req, res) => {
	console.log("AllProducts");
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		console.log(error);
		res.status(500).send("Unexpected error");
	}
};

exports.UpdateProduct = async (req, res) => {
	console.log("UpdateProduct");
	try {
		const { Name, Category, Location, Price } = req.body;
		let product = await Product.findById(req.params.id);
		if (!product) {
			res.status(404).json({ msg: "Product not found." });
		}
		product.Name = Name;
		product.Category = Category;
		product.Location = Location;
		product.Price = Price;
		product = await Product.findOneAndUpdate({ _id: req.params.id }, product, { new: true });
		res.status(200).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Unexpected error");
	}
};

exports.SingleProduct = async (req, res) => {
	console.log("SingleProduct");
	try {
		let product = await Product.findById(req.params.id);
		if (!product) {
			res.status(404).json({ msg: "Product not found." });
		}
		res.status(200).json(product);
	} catch (error) {
		console.log(error);
		res.status(500).send("Unexpected error");
	}
};

exports.DeleteProduct = async (req, res) => {
	console.log("DeleteProduct");
	try {
		let product = await Product.findById(req.params.id);
		if (!product) {
			res.status(404).json({ msg: "Product not found." });
		}
		await Product.findOneAndDelete({ _id: req.params.id });
		res.status(200).json({ msg: "Product found and deleted." });
	} catch (error) {
		console.log(error);
		res.status(500).send("Unexpected error");
	}
};
