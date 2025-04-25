export interface AddToCartRequest {
    userId: string;
    itemId: string;
    quantity: number;
}

export interface UpdateItemRequest {
    userId: string;
    itemId: string;
    quantity: number;
}