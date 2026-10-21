import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className={value ? `cell ${result[i].status}` : 'cell'}>
          {value ? result[i].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
