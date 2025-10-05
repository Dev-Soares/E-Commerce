import prisma from "../config/prisma.js";

const CartListService = {

    getAllCartItems: async () => {
        return await prisma.cart.findMany({
            include: { product: true }
        });
    },

    removeFromCart: async (id) => {
        return await prisma.cart.delete({
            where: { id: id }
        });
    },
    
    addToCart : async (id) => {

         const updatedCartItem = await prisma.cart.upsert({
            
            // CONDIÇÃO DE BUSCA: Tenta encontrar um item do carrinho com este productId
            where: { productId: productId },
            
            // O QUE FAZER SE ENCONTRAR (UPDATE)
            update: {
                // Incrementa a quantidade existente no item do carrinho
                quantity: { increment: 1 }
            },
            
            // O QUE FAZER SE NÃO ENCONTRAR (CREATE - Insert)
            create: {
                productId: productId,
                quantity: quantityToAdd
            },
            
            // Opcional: Incluir o produto para retornar dados completos
            include: { product: true } 
        });
    }

    
}

export default CartListService

