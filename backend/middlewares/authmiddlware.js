import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import expressAsyncHandler from "express-async-handler";

// Check if the user is authenticated or not
const authenticate = expressAsyncHandler(async (req, res, next) => {
    let token;

    // Read JWT from the 'jwt' cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, "karan");
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed.");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

// Check if the user is admin or not
const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send("Not authorized as an admin");
    }
};

export { authenticate, authorizeAdmin };
