/* eslint-disable react/button-has-type */

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "redux/Cart/cartAction";

function CartItem({ product }: any) {
    const dispatch = useDispatch();

    return (
        <div className="mb-2 flex justify-between border-b-2">
            <div className="py-2 text-lg">
                <p>{product.name}</p>
            </div>
            <div className="py-2 text-lg">
                <div className="flex w-full flex-row items-center space-x-2 rounded-lg">
                    <button
                        onClick={() => dispatch(removeFromCart(product))}
                        className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18 12H6"
                            />
                        </svg>
                    </button>
                    <p>{product.quantity}</p>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
