import Router from "express";
// import { verifyAuthority } from "../middleware/verifyAuthority.js";
import verifyJWT from "../middleware/verifyJWT.js";
// import { authorityList } from "../config/authorityList.js";
import createOrder from "../dbOrdersControllers/createOrderComponent.mjs";
import getOrders from "../dbOrdersControllers/getOrdersComponent.mjs";
// import getOneOrders from "../dbOrdersControllers/getOneOrderComponent.mjs";
import deleteOrder from "../dbOrdersControllers/deleteOrderComponent.mjs";
import updateOrder from "../dbOrdersControllers/updateOrderComponent.mjs";

export const orderRouter = new Router();

orderRouter.post("/new", verifyJWT, createOrder);
// verifyAuthority(authorityList.Admin),
orderRouter.get("/", verifyJWT, getOrders);
// orderRouter.get(
//   "/:id",
//   verifyJWT,
//   verifyAuthority(
//     authorityList.Admin,
//     authorityList.User,
//     authorityList.Holder
//   ),
//   getOneOrders
// );
orderRouter.put(
  "/update",
  verifyJWT,
  // verifyAuthority(
  //   authorityList.Admin,
  //   authorityList.Holder,
  //   authorityList.User
  // ),
  updateOrder
);
orderRouter.delete(
  "/delete",
  verifyJWT,
  // verifyAuthority(authorityList.Admin),
  deleteOrder
);
