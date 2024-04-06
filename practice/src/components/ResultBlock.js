import ButtonBlock from './ButtonBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ResultBlock = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 5) {
      navigate("/finish");
    }
  }, [count]);

  function increase() {
    setCount((count) => count + 1);
  }
  function decrease() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2>Result from result block = {count}</h2>
      <ButtonBlock increase={increase} decrease={decrease} />
    </div>
  );
};

export default ResultBlock;
