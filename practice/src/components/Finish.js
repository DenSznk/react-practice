import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetCount } from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";

const Finish = () => {
  const navigate = useNavigate();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const backHome = () => {
    dispatch(resetCount());
    return navigate("/");
  };

  return (
    <div>
      <h1>Finish</h1>

      <div>The result is {count}</div>

      <button onClick={backHome}>Start again</button>
    </div>
  );
};

export default Finish;
