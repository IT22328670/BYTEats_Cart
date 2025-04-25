import { Types } from 'mongoose';

export interface ICartItem {
    itemId: String | Types.ObjectId;
    quantity: number;
    name?: string;
    price?: number;
}

export interface ICart {
    userId: String;
    items: ICartItem[];
}