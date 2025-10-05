import express from "express";
import ProductListController from "../controllers/ProductListController";

const router = express.Router();

router.get("/products", ProductListController.getAllProducts)

router.post("/products", ProductListController.createProduct)

router.delete("/products/:id", ProductListController.deleteProduct);


export default router;
