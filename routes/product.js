import express from "express"
import {addProduct, getProduct, getProducts} from "../controllers/productController.js"

const router = express.Router()

router.post("/add", addProduct);
router.get("/", getProducts)
router.get("/:id", getProduct)

export default router