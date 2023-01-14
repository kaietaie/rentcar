import Router from "express";
import registrationUser from "../dbUsersControllers/registrationUserComponent.mjs";
import loginUser from "../dbUsersControllers/loginUserComponent.mjs";
import updateUser from "../dbUsersControllers/updateUserComponent.mjs";
import deleteUser from "../dbUsersControllers/deleteUserComponent.mjs";
import { body, check, validationResult } from "express-validator";
import readUser from "../dbUsersControllers/readUserComponent.mjs";
import verifyJWT from "../middleware/verifyJWT.js";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";
import getUser from "../dbUsersControllers/functions/getUser.mjs";
export const authRouter = new Router();

authRouter.post(
  "/registration",
  [
    body("userName", "Name cannot be empty").notEmpty(),
    body("userEmail", "Should be email").isEmail().normalizeEmail(),
    body("userPass", "Password should be atle 6 symbols").isLength({ min: 6 }),
  ],
  registrationUser
);
authRouter.post(
  "/login",
  [
    body("userEmail", "Should be email").isEmail().normalizeEmail(),
    body("userPass", "Password should be atle 6 symbols").isLength({ min: 6 }),
  ],
  loginUser
);
authRouter.get(
  "/read",
  [
    check("userEmail")
      .trim()
      .isEmail()
      .withMessage("Invalid email")
      .custom(async (email) => {
        const existingUser = await getUser({ useremail: email });
        if (!existingUser) throw new Error("No such user");
      }),
  ],
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array()[0] });
    } else next();
  },
  readUser
);
authRouter.put(
  "/update",
  [
    check("userEmail")
      .trim()
      .isEmail()
      .withMessage("Invalid email")
      .custom(async (email) => {
        const existingUser = await getUser({ useremail: email });
        if (!existingUser) throw new Error("No such user");
      }),
  ],
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array()[0] });
    } else next();
  },
  verifyJWT,
  verifyAuthority(authorityList.Admin),
  updateUser
);
authRouter.delete(
  "/delete",
  verifyJWT,
  verifyAuthority(authorityList.Admin),
  deleteUser
);
