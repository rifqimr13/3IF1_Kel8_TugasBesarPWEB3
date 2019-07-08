const Product = require('../models/product');
const Sales = require('../models/sales');
const SalesProduct = require('../models/sales_product');

module.exports.getProduct = (req, res) => {
	
	// Sequelize use "Javascript Promise"
	// It is Asynchronous
//	Product
//	.findAll()
//	.then((products) => {
//		res.json(products);
//	})
//	.catch((error) => {
//		console.log(error);
//	})	

	Sales
	.findOne({
		where: {
			id:1
		},
		include: [{
			model: SalesProduct,
			include: [{
				model: Product
		}]
		}]
	})
	.then((sales) => {
		res.json(sales)
	})
	.catch((error) => {
		console.log(error);
	})
	
}

module.exports.postProduct = (req, res) => {
	Product.create({
		name: req.body.name,
		price: req.body.price
	}).then((product)=>{
		res.json(product);
	}).catch((error) => {
		throw error;
	})
}

module.exports.putProduct = (req, res) => {
   Product.update({
      name: req.body.name,
      price: req.body.price
    },{
      where: {
        id: req.params.id
      }
    }).then((product) => {
		res.json(product); 
	}).catch((error) => {
		throw error;
	})
}