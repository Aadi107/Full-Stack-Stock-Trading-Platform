
const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Access denied. Please login first.",
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await UserModel.findById(decoded.sub).select("-password");

        if (!user) {
            return res.status(401).json({
                message: "User no longer exists. Please login again.",
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token. Please login again.",
        });
    }
};

module.exports = authMiddleware;
