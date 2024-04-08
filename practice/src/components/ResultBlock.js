import ButtonBlock from "./ButtonBlock";
// import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ResultBlock = () => {
  const count = useSelector((state) => state.counter.value);

  // const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 5) {
      navigate("/finish");
    }
  }, [count]);

  // function increase() {
  //   setCount((count) => count + 1);
  // }
  // function decrease() {
  //   setCount((count) => count - 1);
  // }
  return (
    <div>
      <h2>Result from result block = {count}</h2>
      <ButtonBlock />
    </div>
  );
};

export default ResultBlock;
