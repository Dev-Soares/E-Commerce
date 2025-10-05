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
    
    addToCart : async (id) => {

         const updatedCartItem = await prisma.cart.upsert({
            
            // CONDIÇÃO DE BUSCA: Tenta encontrar um item do carrinho com este productId
            where: { productId: id },
            
            // O QUE FAZER SE ENCONTRAR (UPDATE)
            
            // O QUE FAZER SE NÃO ENCONTRAR (CREATE - Insert)
            create: {
                productId: productId,
            },
            
            // Opcional: Incluir o produto para retornar dados completos
            include: { product: true } 
        });
    }

    
}

export default CartListService

