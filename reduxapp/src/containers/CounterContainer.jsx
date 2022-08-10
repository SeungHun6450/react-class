import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
// 기존 패턴
// import { incCount, decCount } from "../redux/actions/counter";
// ducks패턴
import { incCount, decCount } from "../modules/counter";

function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  const onIncrease = () => {
    dispatch(incCount(1));
  };
  const onDecrease = () => {
    dispatch(decCount(1));
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
