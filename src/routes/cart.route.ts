import express from 'express';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();

router.get('/:userId', cartController.getCart);
router.post('/add', cartController.addToCart);
router.put('/update', cartController.updateItem);
router.delete('/remove', cartController.removeItem);
router.delete('/clear', cartController.clearCart);

export default router;
