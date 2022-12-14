/*
    Here is a way of Old school how we can use State 
    and dispatch action MapStateToProps and MapStateToDispatch
*/

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrease, increase } from "../redux/counter/actions";
import { InitialCounterState } from "../redux/counter/counterReducer";

function HooksCounter({ count, increment, decrement }: any) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
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

const mapStateToProps = (state: InitialCounterState) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(increase()),
    decrement: () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HooksCounter);
