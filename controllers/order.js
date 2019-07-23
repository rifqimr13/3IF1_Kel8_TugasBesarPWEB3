const Order = require('../models/Order');
const Session = require('../models/Session');


module.exports.postOrder = (req, res) => {
	
		var session = {
			userId: 2
		};
		
		var booksorder = [
			{
				jumlahbeli: 10,
				bookId: 2
			},
			{
				jumlahbeli: 5,
				bookId: 1
			},
			{
				jumlahbeli: 11,
				bookId: 3
			},
		]
		
	Session
		.create(session)
		.then((order) => {
			for(i=0; i<booksorder.length; i++){ // Looping isi var order 
				booksorder[i].sessionid = order.id
			}
			
			Order
				.bulkCreate(booksorder) // Create in array data
				.then((booksorder) => {
					res.json(booksorder)
				})
				.catch((error) => {
					console.log(error)
				})	
		})
		.catch((error) => {
			console.log(error)
		})				
}

module.exports.getDetail = (req, res) => {
	Session
		.findOne({
			include: [{model: Order}], //  include order yang di id 2 
			where: {id: 3} //manggil session 2 
		})
		.then((order) => {
			res.json(order)
		})
		.catch((error) => {
			console.log(error)
		})
}