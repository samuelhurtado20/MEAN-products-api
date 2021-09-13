const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conDb = async () => {
	try {
		await mongoose.connect(process.env.DB_SERVER, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			//useFindAndModify: false,
		});
		console.log("ConDb ready.");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = conDb;
