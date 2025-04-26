import { Types } from 'mongoose';

export interface IOrder {
  userId: string;
  items: {
    itemId: Types.ObjectId;
    quantity: number;
    name: string;
    price: number;
  }[];
  totalPrice: number;
}
