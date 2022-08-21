import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/Cart/cartAction";

/* eslint-disable react/button-has-type */
function CartItem({ product }: any) {
    const dispatch = useDispatch();
    return (
        <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
            <div className="flex items-center justify-between px-4">
                <div className="text-lg font-semibold">
                    <p>
                        {product.name} ({product.availableItems})
                    </p>
                    <p className="text-base text-gray-400">
                        <Currency quantity={product.price} currency="BDT" />
                    </p>
                </div>
                <div className="text-lg font-semibold">
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="inline-flex items-center rounded-full bg-purple-700 py-2 px-2 font-bold text-white hover:bg-purple-800 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
