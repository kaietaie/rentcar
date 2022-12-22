import Router from "express";
import createCar from "../dbCarControllers/createCarComponent.mjs";
import deleteCar from "../dbCarControllers/deleteCarComponent.mjs";
import updateCar from "../dbCarControllers/updateCarComponent.mjs";
import getCars from '../dbCarControllers/getCarsComponent.mjs';
import getOneCar from '../dbCarControllers/getOneCarComponent.mjs';

export const carsRouter = new Router();


carsRouter.post('/cars', createCar)
carsRouter.get('/cars', getCars)
carsRouter.get('/cars/:model', getOneCar)
carsRouter.put('/cars/', updateCar)
carsRouter.delete('/cars/:model', deleteCar)




