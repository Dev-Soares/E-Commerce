import ProductListService from "../services/ProductListService";

const ProductListController = {
    
    getAllProducts: async  (req, res) => {
        try {
            const products = await ProductListService.getAllProducts();
            return res.status(200).json(products)
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
        const createdProduct = req.body;
        try {
            const newProduct = await ProductListService.createProduct(createdProduct);
            return res.status(201).json(newProduct)
        } catch (error) {
            return res.status(500).json({ error: "Failed to create product" });
        }
    }

    
}

export default ProductListController;