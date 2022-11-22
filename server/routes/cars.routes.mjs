import Router from "express";
import createCar from "../dbControllers/createCarComponent.mjs";
import deleteCar from "../dbControllers/deleteCarComponent.mjs";
import updateCar from "../dbControllers/updateCarComponent.mjs";
import getCars from '../dbControllers/getCarsComponent.mjs';
import getOneCar from '../dbControllers/getOneCarComponent.mjs';

export const carsrouter = new Router();


carsrouter.post('/cars', createCar)
carsrouter.get('/cars', getCars)
carsrouter.get('/cars/:model', getOneCar)
carsrouter.put('/cars', updateCar)
carsrouter.delete('/cars/:model', deleteCar)




