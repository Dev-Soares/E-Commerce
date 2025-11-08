import prisma from "../config/prisma.js";

const CartListService = {

    getAllCartItems: async () => {
        return await prisma.cart.findMany({
            include: { product: true }
        });
    },

    deleteCartItem: async (id) => {
        console.log(" request to delete cart item with id:", id);
        return await prisma.cart.delete({
            where: { productId: id }
        });
    },
    
    addToCart : async (id, quantityToAdd = 1) => {

         const updatedCartItem = await prisma.cart.upsert({
            
            where: { productId: id },
            
            
            update: {
                quantity: {
                    increment: quantityToAdd
                }
            },

            
            create: {
                productId: id,
                quantity: quantityToAdd
            },
            
            include: { product: true } 
        });

        return updatedCartItem;
    },

    updateQuantity: async (id, quantity) => {
        return await prisma.cart.update({
            where: { productId: id },
            data: { quantity: quantity },
            include: { product: true }
        });
    },

    getCartTotalItems: async () => {       
        return await prisma.cart.count();
    }

    
}

export default CartListService

