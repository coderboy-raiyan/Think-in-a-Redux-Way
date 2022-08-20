/* eslint-disable import/prefer-default-export */

import { cartAllActionTypes, IAddToCart, IARemoveFromCart } from "./cartActionTypes";

export const addToCart = (payload: any) => ({
    type: cartAllActionTypes.addToCart,
    payload,
});
export const removeFromCart = (payload: any) => ({
    type: cartAllActionTypes.removeFromCart,
    payload,
});

export type cartActions = IAddToCart | IARemoveFromCart;
