import Router from "express";
import registrationUser from "../dbUsersControllers/registrationUserComponent.mjs";
import loginUser from "../dbUsersControllers/loginUserComponent.mjs";
import updateUser from "../dbUsersControllers/updateUserComponent.mjs";
import deleteUser from "../dbUsersControllers/deleteUserComponent.mjs";
import { body, check, validationResult } from "express-validator";
import readUser from "../dbUsersControllers/readUserComponent.mjs";
import verifyJWT from "../middleware/verifyJWT.js";
// import { verifyAuthority } from "../middleware/verifyAuthority.js";
// import { authorityList } from "../config/authorityList.js";
import getUser from "../dbUsersControllers/functions/getUser.mjs";
import getAllUser from "../dbUsersControllers/getAllUser.mjs";
export const authRouter = new Router();

authRouter.get("/all", getAllUser);

authRouter.post(
  "/registration",
  [
    body("user_name", "Name cannot be empty").notEmpty(),
    body("user_surname", "Name cannot be empty").notEmpty(),
    body("user_email", "Should be email").isEmail().normalizeEmail(),
    body("user_pass", "Password should be at least 6 symbols but max 20").isLength({
      min: 6, max: 20
    }),
  ],
  registrationUser
);

authRouter.post("/login", loginUser);

authRouter.get(
  "/read",
  [
    check("user_email")
      .trim()
      .isEmail()
      .withMessage("Invalid email")
      .custom(async (email) => {
        const existingUser = await getUser({ user_email: email });
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

authRouter.put("/update", verifyJWT, updateUser);

authRouter.delete("/delete", verifyJWT, deleteUser);
