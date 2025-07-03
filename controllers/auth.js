const router = require("express").Router();
const bcrypt = require("bcrypt");
const SALT = Number(process.env.SALT);
const jwt = require ("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const User = require ("../models/user");


router.post("/register", async (req, res) => {
	try {
		const { fullName, email, password } = req.body;
		console.log(fullName, email, password);

		const newUser = new User({
			fullName,
			email,
			password: bcrypt.hashSync(password, SALT)
		
		});

		await newUser.save();

		const token = jwt.sign(
			{ _id: newUser._id },
			JWT_KEY,
			{ expiresIn: "24h" }
		);
		
		console.log("User:", newUser)
		console.log("Token:", token)

		res.status(201).json({
			message: `User created`,
			newUser,
			token
		});
	} catch (err) {
		console.log(err);
		logError(err);
		res.status(500).json({
			error: `${err}`,
		});
	}
});



router.post("/login", async (req, res) => {
   try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (!foundUser) throw Error(`${email} not found`);

    const verifiedPwd = await bcrypt.compare(password, foundUser.password);
    if (!verifiedPwd) throw Error(`Invalid password`);
    
	const token = jwt.sign(
      { _id: foundUser._id },
      JWT_KEY,
      { expiresIn: "24h" }
    );
    console.log("Login token:", token);

    res.status(200).json({
      message: `${email} logged in`,
      token
    });

  } catch (err) {
    console.error("Login error:", err.message);

    res.status(500).json({
      message: err.message
    });
  }
});


module.exports = router;