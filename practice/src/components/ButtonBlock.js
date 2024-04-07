import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice'


const ButtonBlock = () => {
  const dispatch = useDispatch()
  return (
    <div className='button-block'>
      <button className='main-button' onClick={() => dispatch(increment())}>INC</button>
      <button className='main-button' onClick={() => dispatch(decrement())}>DEC</button>
    </div>
  );
};

export default ButtonBlock;
