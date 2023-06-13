import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { carsRouter } from "./routes/cars.routes.mjs";
import { authRouter } from "./routes/auth.routes.mjs";
import { refreshRouter } from "./routes/refresh.routes.mjs";
import { logoutRouter } from "./routes/logout.routes.mjs";
import { orderRouter } from "./routes/order.routes.mjs";
import corsConfig from "./CORS/corsConfig.js";
import credentials from './middleware/credentials.js';


const host = process.env.HOST || "localhost";
const port = process.env.SERVER_PORT || 5000;
const app = express();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsConfig));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use('/apicars', carsRouter);
app.use('/auth', authRouter);
app.use('/refresh', refreshRouter);
app.use('/logout', logoutRouter );
app.use('/order', orderRouter );

app.listen(port, () => {
  console.log(`Server is working on ${host}:${port}`);
});
