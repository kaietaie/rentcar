import jwt from 'jsonwebtoken';

export default function generateAccessToken(email, roles) {
    const payload = {
        email,
        roles
    }
   return jwt.sign(payload, process.env.ACCESSKEY)
}