const User = require('../Models/userSchema');
const bcrypt = require('bcrypt');
const Validator=require('validator')
exports.signUpUser = async (req, res) => {
    try {
        const { emailId, password, username } = req.body;

        // Validate required fields
        if (!emailId || !password || !username) {
            return res.status(400).json({
                success: false,
                message: "All fields (emailId, password, username) are required.",
            });
        }

        const flag=Validator.isStrongPassword(password)
        if(!flag){
            throw  new Error ("Please Enter a Strong Password")
        }

        // Check if user already exists
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists. Please log in.",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await User.create({ emailId, password: hashedPassword, username });

        return res.status(201).json({
            success: true,
            message: "User signed up successfully.",
            data: newUser,
        });

    } catch (error) {
        console.error("Signup Error:", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred during signup. Please try again.",
            data:error.message
        });
    }
};
