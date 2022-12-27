import Router from "express";
import handleRefreshToken from "../dbUsersControllers/functions/refreshToken.mjs";

export const refreshRouter = new Router();

refreshRouter.get('/', handleRefreshToken)
