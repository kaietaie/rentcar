import Router from "express";
import createCar from "../dbCarControllers/createCarComponent.mjs";
import deleteCar from "../dbCarControllers/deleteCarComponent.mjs";
import updateCar from "../dbCarControllers/updateCarComponent.mjs";
import getCars from '../dbCarControllers/getCarsComponent.mjs';
import getOneCar from '../dbCarControllers/getOneCarComponent.mjs';
import verifyJWT from "../middleware/verifyJWT.js";
import { verifyAuthority } from "../middleware/verifyAuthority.js";
import { authorityList } from "../config/authorityList.js";

export const carsRouter = new Router();


carsRouter.post('/cars',verifyJWT, verifyAuthority(authorityList.Admin, authorityList.Holder), createCar)
carsRouter.get('/cars', getCars)
carsRouter.get('/cars/:model', getOneCar)
carsRouter.put('/cars/',verifyJWT, verifyAuthority(authorityList.Admin, authorityList.Holder), updateCar)
carsRouter.delete('/cars/:id',verifyJWT, verifyAuthority(authorityList.Admin), deleteCar)




