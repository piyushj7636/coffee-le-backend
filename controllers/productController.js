import Product from "../models/product.js";

export const addProduct = async (req, res) => {

	try {
		const {name, price, rating, imageUrl, description, category, available, size, time} = req.body

		if (!name || !price || !rating || !imageUrl || !description || !category || !size || !time) {
			return res.status(400),json({
				message: "Missing required details",
				details: [
					{name: !name},
					{price: !price},
					{rating: !rating},
					{imageUrl: !imageUrl},
					{description: !description},
					{category: !category},
					{size: !size},
					{time: !time}
				]
			})
		}

		const newProduct = new Product({
			name,
			price,
			rating,
			imageUrl,
			description,
			category,
			available,
			size,
			time
		})

		const savedProduct = await newProduct.save()
		res.status(200).json(savedProduct)
	} catch (error) {
		console.error('Error in addProduct: ', error)
	}
	
}

export const getProducts = async (req, res) => {
	try {
		const products = await Product.find().lean()
		return res.json(products)
	} catch (error) {
		console.error('Error in getProducts: ', error)
	}
}

export const getProduct = async (req, res) => {
	try {
		const {id} = req.params
		const product = await Product.findOne({id: Number(id)})
		console.log(product)
		return res.json(product)
	} catch (error) {
		console.error('Error in getProduct: ', error)
	}
}