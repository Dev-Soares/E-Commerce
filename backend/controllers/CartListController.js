import CartListService from "../services/CartListService.js";

const CartListController = {

    getAllCartItems: async (requestAnimationFrame, res) => {
        try {
            const items = await CartListService.getAllCartItems();
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json({ error: "Failed to fetch cart items" });
        }
    },

    deleteCartItem: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedItem = await CartListService.deleteCartItem(id);
            return res.status(200).json(deletedItem);
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete cart item" });
        }
    },

    addCartItem : async (req,res) => {
        try {
            const newItem = req.body;
            const createdItem = await CartListService.addToCart(newItem);
            return res.status(201).json(createdItem);
        } catch (error) {
            return res.status(500).json({ error: "Failed to add item to cart" });
        }
    }
}

export default CartListController;