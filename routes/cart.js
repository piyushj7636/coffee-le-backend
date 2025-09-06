import express from 'express';
import { addToCart, decrementCartItem, getCart, incrementCartItem, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.get("/", getCart);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);
router.post("/increment", incrementCartItem)
router.post("/decrement", decrementCartItem)

export default router;