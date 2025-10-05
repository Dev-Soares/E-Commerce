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
        return await prisma.product.create({
            data: productData
        })
    }
}

export default ProductListService;