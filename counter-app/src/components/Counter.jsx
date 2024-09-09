import React, { useState } from 'react';
import { BoxContainer, LabelDisplay, CountDisplay, BoxList, ButtonDisplay, ErrorMessage } from './CounterCss';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleIncrement = () => {
    if (isClicked) {
      setError('Wait 3 seconds before clicking again.');
      return;
    }
    setCount(count + 1);
    setError('');
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  const handleDecrement = () => {
    if (isClicked) {
      setError('Wait 3 seconds before clicking again.');
      return;
    }
    setCount(count - 1);
    setError('');
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <BoxContainer>
      {error && <ErrorMessage message={error} />}
      <LabelDisplay child="COUNTER" />
      <CountDisplay count={count} />
      <BoxList>
        <ButtonDisplay label="Increment" onClick={handleIncrement} />
        <ButtonDisplay label="Decrement" onClick={handleDecrement} color="secondary" />
      </BoxList>
    </BoxContainer>
  );
};

export default Counter;

