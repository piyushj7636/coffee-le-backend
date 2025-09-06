import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
		id: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		price: {
			type: Number,
			required: true,
		},
		rating: {
			type: Number
		},
		imageId: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			trim: true
		},
		category: {
			type: String
		},
		available: {
			type: Boolean,
			default: true
		},
		time: {
			type: String
		}
	},
{ 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

export default mongoose.model("Product", productSchema);