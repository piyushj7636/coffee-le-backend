import User from "../models/user.js";
import admin from "firebase-admin";

export const user = async (req, res) => {
	try {
		let idToken = null
		const authHeader = req.headers.authorization;
		if (authHeader && authHeader.startsWith("Bearer ")) {
      idToken = authHeader.split(" ")[1];
    }
    if (!idToken && req.body.idToken) {
      idToken = req.body.idToken;
    }
    if (!idToken) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
		const decoded = await admin.auth().verifyIdToken(idToken);
    const phone = decoded.phone_number;
    if (!phone) return res.status(401).json({ error: "Unauthorized: No phone in token" });

    // Find user by phone number
    const user = await User.findOne({ phone }).select("name email phone avatar emailVerified");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);

	} catch (error) {
		console.error("Error fetching user: ", error)
		res.status(500).json({error: "Internal server error"})
	}
}

export const signup = async (req, res) => {
	let {phone} = req.body
	console.log("Phone: ", phone)
		if(!phone){
			return res.status(400).json({
				error: "Phone number is required"
			})
		}
		const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`
		let user;
	try {
		const existingUser = await User.findOne({phone: formattedPhone})
		if(existingUser && existingUser.phoneVerified){
			return res.status(400).json({
				error: "User already exists, try login"
			})
		}
		else {
			user = new User({phone: formattedPhone, phoneVerified: false})
			await user.save()
			res.json({ message: "Signup successful", user });
		}
	} catch (error) {
		console.error("Error in signup: ", error)
		res.status(500).json({error: "Internal server error"})
	}
}

export const verifySignup = async (req, res) => {
	const {idToken} = req.body
	if(!idToken){
		return res.status(400).json({
			error: "Firebase token is not provided"
		})
	}
	try {
		const decoded = await admin.auth().verifyIdToken(idToken);
    if(!decoded) return "no decoded token";
    const phone = decoded.phone_number;
    
    if (!phone) {
      return res.status(400).json({ error: "No phone number in token" });
    }

		const user = await User.findOne({phone})
		user.name = req.body.name
		user.phoneVerified = true
		await user.save()
		return res.status(200).json({ message: "Signup verified", user });
		
	} catch (error) {
		console.error("Error in verify Signup: ", error)
		res.status(500).json({error: "Internal server error"})
	}
}

export const login = async (req, res) => {
	let { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }
  const formattedPhone = phone.startsWith("+") ? phone : `+91${phone}`

	try {
		const user = await User.findOne({phone})
		if(!user){
			return res.status(400).json({error: "User not found, try signup"})
		}
		res.json({ message: "User exists", user });
	} catch (error) {
    res.status(500).json({ error: "Internal server error" });
	}
}

export const verifyLogin = async (req, res) => {
	const { idToken } = req.body

  if (!idToken) {
    return res.status(401).json({ error: "Missing Firebase ID token" });
  }
	try {
		const decoded = await admin.auth().verifyIdToken(idToken)
    if(!decoded) return "no decoded token"
    const phone = decoded.phone_number
		const user = await User.findOne({ phone })

    if (!user) {
      return res.status(404).json({ error: "User not found. Please sign up." });
    }
    return res.status(200).json({ message: "User verified", user })
	} catch (error) {
		res.status(500).json({ error: "Internal server error" })
	}
}

export const verifyFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }
  const idToken = authHeader.split(" ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Contains uid, phone_number, email, etc.
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export const logout = async (req, res) => {
	try {
		res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  })

	res.json({ message: "Logged out successfully" })
	} catch (error) {
		res.status(500).json({error: "Internal server error"})
	}
}