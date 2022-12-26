import "dotenv/config";
import jwt from "jsonwebtoken";

export default function verifyJWT (req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader;
    jwt.verify(
        token,
        process.env.ACCESSKEY,
        (error, decoded) => {
            if (error) return res.status(403).json({error: error.message});
            next()
        }
    )
}