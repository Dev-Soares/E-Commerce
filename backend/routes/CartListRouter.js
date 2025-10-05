import express from "express";
import CartListController from "../controllers/CartListController";

const router = express.Router();

router.get("/cart", CartListController.getAllCartItems);

router.post("/cart", CartListController.addCartItem)

router.delete("/cart/:id", CartListController.deleteCartItem);

export default router;