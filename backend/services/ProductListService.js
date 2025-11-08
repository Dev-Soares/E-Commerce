import prisma from "../config/prisma.js"

const ProductListService = {

    getAllProducts: async () => {
        
        return await prisma.product.findMany();
    },

    deleteProduct: async (id) => {

        return await prisma.product.delete({
            where: { id: id }
        });
    },

    createProduct: async (productData) => {
        try {
            console.log("Creating product with data:", productData);
            const product = await prisma.product.create({
                data: productData
            });
            console.log("Product created successfully:", product);
            return product;
        } catch (error) {
            console.error("Prisma error details:", error);
            throw error;
        }
    },

    getProductById: async (productId) => {
        
        return await prisma.product.findUnique({
            where:{
                id: productId
            }
        })

    },

    getProductsByCategory: async (category) => {
        return await prisma.product.findMany({
            where: { category: category }
        });
    }
}

export default ProductListService;