import ProductListService from "../services/ProductListService.js";

const ProductListController = {
    
    getProducts: async  (req, res) => {

        const { page, limit } = req.query

        try {
            const products = await ProductListService.getProducts(page, limit);
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch products" });
        }
    },

    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedProduct = await ProductListService.deleteProduct(id);
            return res.status(200).json(deletedProduct);
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete product" });
        }
    },

    createProduct : async (req,res) => {
        console.log("Received request to create product:", req.body);
        const createdProduct = req.body;
        try {
            const newProduct = await ProductListService.createProduct(createdProduct);
            return res.status(201).json(newProduct)
        } catch (error) {
            return res.status(500).json({ error: "Failed to create product" });
        }
    },

    getProductById: async (req,res) => {
        const id = req.params.id

        try {
            const searchedProduct = await ProductListService.getProductById(id);
            return res.status(201).json(searchedProduct);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch product"})
        }

    },

    getProductsByCategory: async (req, res) => {

        const category = req.params.category;

        const { page, limit } = req.query;

        try {
            const products = await ProductListService.getProductsByCategory(category, page, limit);
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch products by category" });
        }
    },

    getNumberOfPages: async (req, res) => {
        try {
            const numberOfPages = await ProductListService.getNumberOfPages();
            return res.status(200).json(numberOfPages);
        } catch (error){
            return res.status(500).json({error: "Failed to fetch number of pages" });
        }
    },

    getNumberOfPagesByCategory: async (req, res) => {
        const category = req.params.category;
        try {
            const numberOfPages = await ProductListService.getNumberOfPagesByCategory(category);
            return res.status(200).json(numberOfPages);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch number of pages by category" });
        }
    }
};

export default ProductListController;