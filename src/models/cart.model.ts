import { Schema, Types, model } from 'mongoose';
import { ICart } from '../interfaces/ICart';

const cartItemSchema = new Schema({
    itemId: {type: Types.ObjectId, ref: 'MenuItem', required: true},
    quantity: {type: Number, required: true, default: 1},
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

const cartSchema = new Schema<ICart>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    items: [cartItemSchema]
  },
  { timestamps: true }
);

export const Cart = model<ICart>('Cart', cartSchema);