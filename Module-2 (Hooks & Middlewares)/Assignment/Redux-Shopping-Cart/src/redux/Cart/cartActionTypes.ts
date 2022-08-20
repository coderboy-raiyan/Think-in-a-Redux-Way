/* eslint-disable no-unused-vars */
export enum cartAllActionTypes {
    addToCart = "cart/addToCart",
    removeFromCart = "cart/removeFromCart",
}

export interface IAddToCart {
    type: cartAllActionTypes.addToCart;
    payload: any;
}
export interface IARemoveFromCart {
    type: cartAllActionTypes.removeFromCart;
    payload: any;
}
