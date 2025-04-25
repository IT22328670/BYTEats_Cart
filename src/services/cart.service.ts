import { Cart } from "../models/cart.model";

export const getCart = async (userId: string) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) return { items: [] };

  const transformedItems = cart.items.map((item) => ({
    itemId: {
      _id: item.itemId,
      name: item.name,
      price: item.price,
    },
    quantity: item.quantity,
  }));

  return { items: transformedItems };
};


export const addToCart = async (userId: string, itemId: string, quantity: number, name: string, price: number) => {
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = new Cart({ userId, items: [{ itemId, quantity, name, price }] });
  } else {
    const item = cart.items.find(item => item.itemId.toString() === itemId);
    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({ itemId, quantity, name, price });
    }
  }

  return cart.save();
};

export const updateItem = async (userId: string, itemId: string, quantity: number) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error("Cart not found");

  const item = cart.items.find(i => i.itemId.toString() === itemId);
  if (!item) throw new Error("Item not found in cart");

  item.quantity = quantity;
  return cart.save();
};

export const removeItem = async (userId: string, itemId: string) => {
  return Cart.findOneAndUpdate(
    { userId },
    { $pull: { items: { itemId } } },
    { new: true }
  );
};

export const clearCart = async (userId: string) => {
  return Cart.findOneAndUpdate({ userId }, { items: [] }, { new: true });
};
