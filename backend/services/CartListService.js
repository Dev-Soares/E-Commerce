import prisma from "../config/prisma.js";

const CartListService = {

    getAllCartItems: async () => {
        return await prisma.cart.findMany({
            include: { product: true }
        });
    },

    deleteFromCart: async (id) => {
        return await prisma.cart.delete({
            where: { id: Number(id) }
        });
    },
    
    addToCart : async (id, quantityToAdd = 1) => {

         const updatedCartItem = await prisma.cart.upsert({
            
            // CONDIÇÃO DE BUSCA: Tenta encontrar um item do carrinho com este productId
            where: { productId: id },
            
            // O QUE FAZER SE ENCONTRAR (UPDATE)
            update: {
                quantity: {
                    increment: quantityToAdd
                }
            },

            // O QUE FAZER SE NÃO ENCONTRAR (CREATE - Insert)
            create: {
                productId: id,
                quantity: quantityToAdd
            },
            
            // Opcional: Incluir o produto para retornar dados completos
            include: { product: true } 
        });

        return updatedCartItem;
    }

    
}

export default CartListService

