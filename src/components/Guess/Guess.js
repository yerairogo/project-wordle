import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={value ? `cell ${value[i].status}` : 'cell'}>
          {value ? value[i].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
