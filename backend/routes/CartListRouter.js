import express from "express";
import CartListController from "../controllers/CartListController.js";

const router = express.Router();

router.get("/cart", CartListController.getCartItems);

router.get("/cart/pages", CartListController.getCartPages);

router.post("/cart/:id", CartListController.addCartItem);

router.delete("/cart/:id", CartListController.deleteCartItem);

router.put("/cart/quantity/:id", CartListController.updateQuantity);

router.get("/cart/total", CartListController.getCartTotalItems);

export default router;