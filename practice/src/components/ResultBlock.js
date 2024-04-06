import ButtonBlock from './ButtonBlock';
import { useState } from 'react';
import { useEffect } from 'react';

const ResultBlock = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 5) {
      console.log('Count reached 5');
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
