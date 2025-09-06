import express from "express"
import {login, logout, signup, user, verifyLogin, verifySignup} from '../controllers/userController.js'

const router = express.Router()

router.get("/user", user);
router.post("/signup", signup)
router.post("/verify-signup", verifySignup)
router.post("/login", login)
router.post("/verify-login", verifyLogin)
router.post("/logout", logout)

export default router