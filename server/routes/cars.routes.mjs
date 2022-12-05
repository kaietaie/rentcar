import Router from "express";
import createCar from "../dbCarControllers/createCarComponent.mjs";
import deleteCar from "../dbCarControllers/deleteCarComponent.mjs";
import updateCar from "../dbCarControllers/updateCarComponent.mjs";
import getCars from '../dbCarControllers/getCarsComponent.mjs';
import getOneCar from '../dbCarControllers/getOneCarComponent.mjs';

export const carsrouter = new Router();


carsrouter.post('/cars', createCar)
carsrouter.get('/cars', getCars)
carsrouter.get('/cars/:model', getOneCar)
carsrouter.put('/cars/', updateCar)
carsrouter.delete('/cars/:model', deleteCar)




