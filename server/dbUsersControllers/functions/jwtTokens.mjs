import "dotenv/config";
import jwt from "jsonwebtoken";

export function accessToken(name, user_id, authority) {
  const payload = {
    name,
    user_id,
    authority,
  };
  return jwt.sign(payload, process.env.ACCESSKEY, { expiresIn: "30m" });
}

export function refreshToken(name, user_id, authority) {
  const payload = {
    name,
    user_id,
    authority,
  };
  return jwt.sign(payload, process.env.REFRESHKEY, { expiresIn: "24h" });
}
