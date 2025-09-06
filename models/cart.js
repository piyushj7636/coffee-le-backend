import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
			selectedSize: { type: String, required: true },
			selectedQuantity: { type: Number, default: 1 }
		}
	],
},
{ timestamps: true}
)

export default mongoose.model("Cart", cartSchema)