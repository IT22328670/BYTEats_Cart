import { Request, Response } from 'express';
import * as cartService from '../services/cart.service';

export const getCart = async (req: Request, res: Response) => {
  try {
    const userId = 'user';
    const cart = await cartService.getCart(userId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart', message: (err as Error).message });
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, itemId, quantity, name, price } = req.body;
    const cart = await cartService.addToCart(userId, itemId, quantity, name, price);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item', message: (err as Error).message });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const { userId, itemId, quantity } = req.body;
    const cart = await cartService.updateItem(userId, itemId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update item', message: (err as Error).message });
  }
};

export const removeItem = async (req: Request, res: Response) => {
  try {
    const { userId, itemId } = req.body;
    const cart = await cartService.removeItem(userId, itemId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove item', message: (err as Error).message });
  }
};

export const clearCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const cart = await cartService.clearCart(userId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Failed to clear cart', message: (err as Error).message });
  }
};

export const checkoutCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = await cartService.checkoutCart(userId);
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ error: 'Failed to checkout cart', message: (err as Error).message });
  }
};

