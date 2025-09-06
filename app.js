import express from "express"
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.js"
import userRoutes from "./routes/user.js"
import cartRoutes from "./routes/cart.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import { createRequire } from "module";
import admin from 'firebase-admin';
import { verifyFirebaseToken } from "./controllers/userController.js";
import User from "./models/user.js"

dotenv.config();

const app = express()
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('/', cors());

app.use(cookieParser());
connectDB()

const require = createRequire(import.meta.url);
// const serviceAccount = require('./config/serviceAccountKey.json');
const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)
app.use('/api/auth', userRoutes)
app.use("/api/cart", cartRoutes);
app.get("/api/protected", verifyFirebaseToken, (req, res) => {
  res.json({ message: "This is protected", user: req.user });
});

app.get("/api/profile", verifyFirebaseToken, async (req, res) => {
  const firebaseUid = req.user.uid;
  // Find or create user in your MongoDB
  let user = await User.findOne({ firebaseUid });
  if (!user) {
    user = await User.create({
      firebaseUid,
      phone: req.user.phone_number,
      email: req.user.email,
    });
  }
  res.json({ user });
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})