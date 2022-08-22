/* eslint-disable jsx-a11y/control-has-associated-label */
import doubleTickImg from "assets/images/double-tick.png";
import notesImg from "assets/images/notes.png";

function Header() {
    return (
        <div>
            <form className="flex items-center rounded-md bg-gray-100 px-4 py-4">
                <img src={notesImg} className="h-6 w-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full border-none bg-gray-100 px-4 py-1 text-lg text-gray-500 outline-none"
                />
                <button type="submit" className="h-8 w-8 appearance-none bg-contain bg-no-repeat">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </form>

            <ul className="my-4 flex justify-between text-xs text-gray-500">
                <li className="flex cursor-pointer space-x-1">
                    <img className="h-4 w-4" src={doubleTickImg} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}

export default Header;
