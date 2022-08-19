import { connect } from "react-redux";
import { decrease, increase } from "../redux/counter/actions";
import {
  decrement as dynamicDecrement,
  increment as dynamicIncrement,
} from "../redux/dynamicCounter/actions";

function VariableCounter({ count, increment, decrement }: any) {
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

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    increment: ownProps.dynamic
      ? (value: any) => dispatch(dynamicIncrement(5))
      : () => dispatch(increase()),
    decrement: ownProps.dynamic
      ? (value: any) => dispatch(dynamicDecrement(2))
      : () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
