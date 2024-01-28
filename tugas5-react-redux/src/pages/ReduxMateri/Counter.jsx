import { useDispatch, useSelector } from "react-redux";
import {
  decrementWitchCheckingAction,
  increment,
} from "../../app/counter/Action";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <button onClick={() => dispatch(decrementWitchCheckingAction(1))}>
        -
      </button>
      <span className="mx-3">{count}</span>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
