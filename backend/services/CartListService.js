import prisma from "../config/prisma.js";

const CartListService = {

    getCartItems: async (page, limit) => {

        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        if (!isNaN(pageNumber) && !isNaN(limitNumber) && pageNumber > 0 && limitNumber > 0) {

            return await prisma.cart.findMany({
                include: { product: true },
                skip: (pageNumber - 1) * limitNumber,
                take: limitNumber
            });
        } else {
            console.error("Invalid page or limit parameters. Returning all cart items.");
        }
        
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
    },

    getCartPages: async () => {
        
        const limitNumber = 3;
        const totalCartItems = await prisma.cart.count();
        return Math.ceil(totalCartItems / limitNumber);
    },

    getCartTotalPrice: async () => {
        const cartItems = await prisma.cart.findMany({
            include: { product: true }
        });

        const totalPrice = cartItems.reduce((acc, item) => {
            return acc + item.quantity * item.product.price;
        }, 0);

        return totalPrice;
    }

}

export default CartListService;

