import { Schema, model } from 'mongoose';
import { IOrder } from '../interfaces/IOrder';

const orderSchema = new Schema<IOrder>(
  {
    userId: {
      type: String,
      required: true,
    },
    items: [
      {
        itemId: { type: Schema.Types.ObjectId, required: true, ref: 'MenuItem' },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
      }
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>('Order', orderSchema);
