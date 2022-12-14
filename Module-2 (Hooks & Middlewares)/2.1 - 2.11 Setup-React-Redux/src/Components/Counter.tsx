import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/counter/actions";
import { RootState } from "../redux/store/store";

function Counter() {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increase());
  };
  const decrement = () => {
    dispatch(decrease());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

//
export default Counter;
