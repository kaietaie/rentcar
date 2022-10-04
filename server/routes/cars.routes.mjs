import Router from "express";
import {dbController} from '../dbController/dbController.mjs';

export const carsrouter = new Router();


carsrouter.post('/cars', dbController.createCar)
carsrouter.get('/cars', dbController.getCars)
carsrouter.get('/cars/:model', dbController.getOneCar)
carsrouter.put('/cars', dbController.updateCar)
carsrouter.delete('/cars/:model', dbController.deleteCar)




