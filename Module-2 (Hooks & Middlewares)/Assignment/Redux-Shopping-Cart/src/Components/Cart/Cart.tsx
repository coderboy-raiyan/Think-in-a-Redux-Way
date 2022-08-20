/* eslint-disable react/button-has-type */

function Cart() {
    return (
        <section>
            {/* cart left side */}
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8">
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="flex items-center justify-between px-4">
                            <div className="text-lg font-semibold">
                                <p>Asus Vivobook X515MA (20)</p>
                                <p className="text-base text-gray-400">Tk 35,500</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button className="inline-flex items-center rounded-full bg-purple-700 py-2 px-2 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="flex items-center justify-between px-4">
                            <div className="text-lg font-semibold">
                                <p>Dell E1916HV 18.5 Inch (35)</p>
                                <p className="text-base text-gray-400">Tk 9,300</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button className="inline-flex items-center rounded-full bg-purple-700 py-2 px-2 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="flex items-center justify-between px-4">
                            <div className="text-lg font-semibold">
                                <p>Canon Eos 4000D 18MP (72)</p>
                                <p className="text-base text-gray-400">Tk 36,500</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button className="inline-flex items-center rounded-full bg-purple-700 py-2 px-2 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                </div>
                {/* cart right side */}
                <div className="xxl:col-span-4 col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4">
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="mb-2 flex justify-between border-b-2">
                            <div className="py-2 text-lg">
                                <p>Asus Vivobook X515MA</p>
                            </div>
                            <div className="py-2 text-lg">
                                <div className="flex w-full flex-row items-center space-x-2 rounded-lg">
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                                    <p>0</p>
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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

                        <div className="mb-2 flex justify-between border-b-2">
                            <div className="py-2 text-lg">
                                <p>Dell E1916HV 18.5 Inch</p>
                            </div>
                            <div className="py-2 text-lg">
                                <div className="flex w-full flex-row items-center space-x-2 rounded-lg">
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                                    <p>0</p>
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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

                        <div className="mb-2 flex justify-between border-b-2">
                            <div className="py-2 text-lg">
                                <p>Canon Eos 4000D 18MP</p>
                            </div>
                            <div className="py-2 text-lg">
                                <div className="flex w-full flex-row items-center space-x-2 rounded-lg">
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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
                                    <p>0</p>
                                    <button className="inline-flex items-center rounded-full bg-purple-700 py-1 px-1 font-bold text-white hover:bg-purple-800 focus:outline-none">
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

                        <div className="flex items-center justify-center text-center">
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">0</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 mx-4 rounded-lg bg-white py-4 px-4 shadow-md">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
