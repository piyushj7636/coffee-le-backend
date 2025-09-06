// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Product from "./models/product.js";
// dotenv.config();

// (async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     const result = await Product.deleteMany({});
//     console.log(`Deleted ${result.deletedCount} products.`);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     mongoose.disconnect();
//   }
// })();