import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';

const CounterPage = () => {
  const counter = useSelector((state) => state.counter );

  return (
    <Counter counter={counter} />
  );
};

export default CounterPage;
