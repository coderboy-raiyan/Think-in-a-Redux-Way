/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
// eslint-disable-next-line import/no-unresolved

import { cartActions } from "./cartAction";
import { cartAllActionTypes } from "./cartActionTypes";

interface ICartInitialState {
    cart: {
        id: number;
        name: string;
        price: string;
        quantity?: number;
    }[];
}

const initialState: ICartInitialState = {
    cart: [],
};

// eslint-disable-next-line default-param-last
const cartReducer = (state: ICartInitialState = initialState, { type, payload }: cartActions) => {
    const isAlreadyIntoTheCart = state.cart.find((item) => item.id === payload.id);
    switch (type) {
        case cartAllActionTypes.addToCart:
            if (isAlreadyIntoTheCart) {
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item.id === payload.id) {
                            return {
                                ...item,
                                quantity: item.quantity! + 1,
                            };
                        }
                        return item;
                    }),
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...payload, quantity: 1 }],
            };

        case cartAllActionTypes.removeFromCart:
            if (isAlreadyIntoTheCart?.quantity! < 1) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== payload.id),
                };
            }
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity! - 1,
                        };
                    }
                    return item;
                }),
            };

        default:
            return state;
    }
};

export type CartReducer = ReturnType<typeof cartReducer>;

export default cartReducer;
