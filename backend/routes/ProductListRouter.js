import express from "express";
import ProductListController from "../controllers/ProductListController.js";

const router = express.Router();

router.get("/products/", ProductListController.getProducts);

router.get("/products/pages", ProductListController.getNumberOfPages);

router.post("/products/create-product", ProductListController.createProduct);

router.delete("/products/:id", ProductListController.deleteProduct);

router.get("/products/:id", ProductListController.getProductById);

router.get("/products/category/:category", ProductListController.getProductsByCategory);


export default router;
