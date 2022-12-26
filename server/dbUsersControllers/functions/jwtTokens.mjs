import "dotenv/config";
import jwt from 'jsonwebtoken';

export function accessToken(name, authority) {
    const payload = {
        name,
        authority
    }
   return jwt.sign(payload, process.env.ACCESSKEY,  { expiresIn: '30m' })
}

export function refreshToken(name, authority) {
    const payload = {
        name,
        authority
    }
   return jwt.sign(payload, process.env.REFRESHKEY,  { expiresIn: '24h' })
}

