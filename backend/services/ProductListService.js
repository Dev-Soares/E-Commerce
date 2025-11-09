import prisma from "../config/prisma.js"

const ProductListService = {

    getProducts: async (page, limit) => {

        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);

        if (!isNaN(pageNumber) && !isNaN(limitNumber) && pageNumber > 0 && limitNumber > 0) {

            return await prisma.product.findMany({
                skip: (pageNumber - 1) * limitNumber,
                take: limitNumber
            });
            
        } else {
            console.error("Invalid page or limit parameters.");
            return await prisma.product.findMany();
        }
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

    getProductsByCategory: async (category, page, limit) => {

        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        return await prisma.product.findMany({
            where: { category: category },
            skip: (pageNumber - 1) * limitNumber,
            take: limitNumber
        });
    }, 

    getNumberOfPages: async () => {
        const totalProducts = await prisma.product.count();
        const productsShownPerPage = 4;
        return Math.ceil(totalProducts / productsShownPerPage);
    },

    getNumberOfPagesByCategory: async (category) => {
        const totalProducts = await prisma.product.count({
            where: { category: category }
        });
        const productsShownPerPage = 4;
        return Math.ceil(totalProducts / productsShownPerPage);
    }
}

export default ProductListService;