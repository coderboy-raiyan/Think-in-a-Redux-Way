import Cart from "Components/Cart/Cart";
import { Provider } from "react-redux";
import store from "redux/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <div className="grid place-items-center">
                    <h1 className="mb-4 p-10 text-3xl font-bold text-gray-900 underline decoration-purple-500 decoration-4 underline-offset-8">
                        Shopping Cart
                    </h1>
                </div>
                <Cart />
            </div>
        </Provider>
    );
}

export default App;
