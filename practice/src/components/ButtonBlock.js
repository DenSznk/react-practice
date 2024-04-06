import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice'


const ButtonBlock = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
    </div>
  );
};

export default ButtonBlock;
