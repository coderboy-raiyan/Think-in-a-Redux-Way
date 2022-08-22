import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";
import TodoList from "components/TodoList";

function App() {
    return (
        <div className="grid h-screen place-items-center bg-blue-100 px-6 font-sans">
            <Navbar />

            <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
                <Header />
                <hr className="mt-4" />

                <TodoList />

                <hr className="mt-4" />

                <Footer />
            </div>
        </div>
    );
}

export default App;
