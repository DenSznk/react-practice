import ButtonBlock from "./ButtonBlock";
// import { useState } from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./Products";


const ResultBlock = () => {
  const count = useSelector((state) => state.counter.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 5) {
      navigate("/finish");
    }
  }, [count]);

  return (
    <div className="results-and-products">
      <div className="result-block">
        <h2>Result from result block = {count}</h2>
        <ButtonBlock />
      </div>
      <Products
        title={"Phone"}
        description={"description"}
        price={123}
        category={'Phones'}
        thumbnail='img/thumbnail.jpg'
      />
    </div>
  );
};

export default ResultBlock;
