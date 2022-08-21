/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */

import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Product from "../Product/Product";
import CartItem from "./CartItems";

const products = [
    {
        id: 1,
        name: "Asus Vivobook X515MA",
        price: 35500,
        availableItems: 20,
    },
    {
        id: 2,
        name: "Dell E1916HV 18.5 Inch",
        price: 9300,
        availableItems: 36,
    },
    {
        id: 3,
        name: "Canon Eos 4000D 18MP",
        price: 36500,
        availableItems: 72,
    },
];

function Cart() {
    const { cart: cartItems } = useSelector((state: RootState) => state.cart);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalItems(cartItems.reduce((acc, curr) => (acc += curr.quantity), 0));
        setTotalPrice(
            cartItems.reduce((acc, curr) => {
                acc += Number(curr.price) * curr.quantity;

                return acc;
            }, 0)
        );
    }, [cartItems]);

    return (
        <section>
            {/* cart left side */}
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8">
                    {products.map((product: any) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
                {/* cart right side */}
                <div className="xxl:col-span-4 col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4">
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        {cartItems.length ? (
                            cartItems.map((item) => <CartItem key={item.id} product={item} />)
                        ) : (
                            <h1 className="text-center text-lg font-semibold text-gray-500">
                                Cart is Empty 😭
                            </h1>
                        )}
                    </div>
                    <div className="flex items-center justify-center border-b pb-2 text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-5xl">{totalItems}</p>
                        </div>
                    </div>

                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">
                                    <Currency quantity={totalPrice} currency="BDT" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
