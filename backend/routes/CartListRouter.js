import express from "express";
import CartListController from "../controllers/CartListController.js";

const router = express.Router();

router.get("/cart", CartListController.getAllCartItems);

router.post("/cart/:id", CartListController.addCartItem)

router.delete("/cart/:id", CartListController.deleteCartItem);

export default router;