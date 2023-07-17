import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "./store/counter";
function App() {
  const counterReducer = useSelector((store) => store.counterReducer);
  const dispatch = useDispatch();

  const increase = () => {
    const increaseAction = dispatch(increaseCounter(5));
  };

  const decrease = () => {
    const decreaseAction = dispatch(decreaseCounter(5));
  };

  return (
    <div>
      <h1>count:{counterReducer}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>increase</button>
    </div>
  );
}

export default App;
