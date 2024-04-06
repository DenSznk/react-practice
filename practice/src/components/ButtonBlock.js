import React from 'react';

const ButtonBlock = ({ increase, decrease }) => {
  return (
    <div>
      <button onClick={increase}>INC</button>
      <button onClick={decrease}>DEC</button>
    </div>
  );
};

export default ButtonBlock;
