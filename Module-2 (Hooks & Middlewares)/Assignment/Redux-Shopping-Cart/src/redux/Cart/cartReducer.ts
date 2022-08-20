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
    }[];
}

const initialState: ICartInitialState = {
    cart: [
        {
            id: 1,
            name: "Asus Vivobook X515MA",
            price: "35,500",
        },
        {
            id: 2,
            name: "Dell E1916HV 18.5 Inch",
            price: "9,300",
        },
        {
            id: 3,
            name: "Canon Eos 4000D 18MP",
            price: "36,500",
        },
    ],
};

// eslint-disable-next-line default-param-last
const cartReducer = (state: ICartInitialState = initialState, { type, payload }: cartActions) => {
    switch (type) {
        case cartAllActionTypes.addToCart:
            let defaultQuantity = 1;
            if (defaultQuantity < 1) {
                defaultQuantity = 1;
            }
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            quantity: defaultQuantity++,
                        };
                    }
                    return item;
                }),
            };

        case cartAllActionTypes.removeFromCart:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            quantity: defaultQuantity--,
                        };
                    }
                    return item;
                }),
            };

        default:
            return state;
    }
};

export default cartReducer;
