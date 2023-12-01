import { useSelector, useDispatch } from "react-redux";
import { decNum, incNum } from "./actions";
import "./style.css";
function App() {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div id="container">
      <h2>Increment Decrement Counter</h2>
      <div className="box">
        <button className="btn btn1" onClick={() => dispatch(decNum(2))}>
          -
        </button>
        <p className="text">{myState}</p>
        <button className="btn btn2" onClick={() => dispatch(incNum(5))}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
