import Router from "express";
import logoutHandle from "../dbUsersControllers/logoutUserComponent.mjs";

export const logoutRouter = new Router();

logoutRouter.get('/', logoutHandle)
