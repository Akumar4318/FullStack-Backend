const User = require('../Models/userSchema');  // Corrected import
require('dotenv').config();
const jwt = require('jsonwebtoken');

const isLoggedIn = async (req, res, next) => {  // Added next as a parameter
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token not found",
            });
        }

        // Verify the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET);
          

            const foundUser = await User.findOne({ _id: payload._id });

            if (!foundUser) {
                return res.status(400).json({
                    success: false,
                    message: "Please log in first",
                });
            }

             //* to pass the id to next handler 
       

             req.User=foundUser
             req.ID=payload._id
            // Proceed to next middleware if user is found
            next();

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Invalid token. Please log in again.",
            });
        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Please log in first",
        });
    }
};

module.exports = isLoggedIn;
