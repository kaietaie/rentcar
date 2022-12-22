import Router from "express";
import registrationUser from "../dbUsersControllers/registrationUserComponent.mjs";
import loginUser from "../dbUsersControllers/loginUserComponent.mjs";
import updateUser from "../dbUsersControllers/updateUserComponent.mjs";
import deleteUser from "../dbUsersControllers/deleteUserComponent.mjs";
import {body} from "express-validator";
import readUser from "../dbUsersControllers/readUserComponent.mjs";

export const authRouter = new Router();

authRouter.post('/registration', [
    body('userName', 'Name cannot be empty').notEmpty(),
    body('userEmail', 'Should be email').isEmail().normalizeEmail(),
    body('userPass', 'Password should be atle 6 symbols').isLength({min:6})
], registrationUser)
authRouter.post('/login', [
    body('userEmail', 'Should be email').isEmail().normalizeEmail(),
    body('userPass', 'Password should be atle 6 symbols').isLength({min:6})
], loginUser)
authRouter.get('/read', readUser)
authRouter.put('/update', updateUser)
authRouter.delete('/delete/', deleteUser)
