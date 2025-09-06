import User from "../models/user.js";
import Cart from "../models/cart.js";
import admin from "firebase-admin";
import Product from "../models/product.js";
import mongoose from "mongoose";

// export const addToCart = async (req, res) => {
// 	const authHeader = req.headers.authorization || "";
//   const idToken = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null

// 	if (!idToken) return res.status(401).json({ error: "No token provided" })
// 		try {
// 			const decoded = await admin.auth().verifyIdToken(idToken);
// 			const phone = decoded.phone_number;
//     	if (!phone) return res.status(401).json({ error: "Unauthorized: No phone in token" })

// 			const user = await User.findOne({ phone });
// 			if (!user) return res.status(404).json({ error: "User not found" });

// 			const { id, selectedSize, selectedQuantity } = req.body;

// 			const product = await Product.findOne({ id: Number(id) })
// 			if (!product) return res.status(404).json({ error: "Product not found" });

// 			let cart = await Cart.findOne({ userId: user._id });

// 			if (!cart) {
// 				cart = new Cart({ userId: user._id, products: [] });
// 			}

// 			const existingProductIndex = cart.products.findIndex(
// 				(p) =>
// 					p.productId.toString() === productId &&
// 					p.size === selectedSize
// 			)

// 			if (existingProductIndex !== -1) {
// 				cart.products[existingProductIndex].quantity += selectedQuantity;
// 			} else {
// 				cart.products.push({
// 					productId,
// 					selectedSize: selectedSize,
// 					selectedQuantity: selectedQuantity,
// 				});
// 			}

// 			await cart.save();
// 			res.status(200).json({ message: "Product added to cart", cart });

// 		} catch (error) {
// 			res.status(500).json({ message: "Error adding to cart", error: error.message })
// 		}
// }

export const addToCart = async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!idToken) return res.status(401).json({ error: "No token provided" });

  try {
    // verify user
    const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone)
      return res.status(401).json({ error: "Unauthorized: No phone in token" });

    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    // extract request body
    const { id, selectedSize, selectedQuantity } = req.body;

    // find product by custom id
    const product = await Product.findOne({ id: Number(id) });
    if (!product) return res.status(404).json({ error: "Product not found" });

    // find or create cart
    let cart = await Cart.findOne({ userId: user._id });
    if (!cart) {
      cart = new Cart({ userId: user._id, products: [] });
    }

    // check if product already exists in cart with same size
    const existingProductIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === product._id.toString() && // ✅ use Mongo _id as stable reference
        p.selectedSize === selectedSize
    );

    if (existingProductIndex !== -1) {
      // increment quantity
      cart.products[existingProductIndex].selectedQuantity += selectedQuantity;
    } else {
      // push new product
      cart.products.push({
        productId: product._id,
        selectedSize: selectedSize,
        selectedQuantity: selectedQuantity,
      });
    }

    await cart.save();
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding to cart", error: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!idToken) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone)
      return res.status(401).json({ error: "Unauthorized: No phone in token" });

    // Find user by phone number
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    const { id: productId } = req.body;

    const cart = await Cart.findOne({ userId: user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      { userId: user._id },
      {
        $pull: {
          products: {
            productId,
          },
        },
      },
      { new: true }
    ).populate("products.productId");

    res.json({ products: updatedCart.products });
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    res
      .status(500)
      .json({ message: "Error removing from cart", error: error.message });
  }
};

export const getCart = async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!idToken) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone)
      return res.status(401).json({ error: "Unauthorized: No phone in token" });

    // Find user by phone number
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find the cart for the user directly via UID
    const cart = await Cart.findOne({ userId: user._id })
      .populate("products.productId")
      .lean();

    if (!cart) {
      return res.status(200).json({ products: [] });
    }

    res.json({ products: cart.products });
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res
      .status(500)
      .json({ message: "Error fetching cart", error: error.message });
  }
};

export const incrementCartItem = async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!idToken) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const { itemId } = req.body;
  if (!itemId) {
    return res.status(400).json({ error: "Missing itemId in request body" });
  }
  console.log(itemId.id);

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone)
      return res.status(401).json({ error: "Unauthorized: No phone in token" });

    // Find user by phone number
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find the cart for the user directly via UID
    const cart = await Cart.findOne({ userId: user._id }).populate(
      "products.productId"
    );
    if (!cart) {
      return res.status(200).json({ products: [] });
    }

    const item = cart.products.find(
      (p) => p._id.toString() === itemId.id.toString()
    );

    if (!item) return res.status(404).json({ error: "Item not found in cart" });

    item.selectedQuantity += 1;

    await cart.save();
    await cart.populate("products.productId");

    res.json({ products: cart.products });
  } catch (error) {
    console.error("Error increasing quantity:", error.message);
    res
      .status(500)
      .json({ message: "Error increasing quantity", error: error.message });
  }
};

export const decrementCartItem = async (req, res) => {
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!idToken) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const { itemId } = req.body;
  if (!itemId) {
    return res.status(400).json({ error: "Missing itemId in request body" });
  }
  console.log(itemId.id);

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone)
      return res.status(401).json({ error: "Unauthorized: No phone in token" });

    // Find user by phone number
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Find the cart for the user directly via UID
    const cart = await Cart.findOne({ userId: user._id }).populate(
      "products.productId"
    );
    if (!cart) {
      return res.status(200).json({ products: [] });
    }

    const item = cart.products.find(
      (p) => p._id.toString() === itemId.id.toString()
    );

    if (!item) return res.status(404).json({ error: "Item not found in cart" });

    item.selectedQuantity -= 1;

    await cart.save();
    await cart.populate("products.productId");

    res.json({ products: cart.products });
  } catch (error) {
    console.error("Error decreasing quantity:", error.message);
    res
      .status(500)
      .json({ message: "Error decreasing quantity", error: error.message });
  }
};