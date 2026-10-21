import React from 'react';
import Guess from '../Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        const guess = guessList[i];
        if (guessList[i] !== undefined) {
          return <Guess key={i} id={guess.id} label={guess.label} />;
        } else {
          return <Guess key={i} />;
        }
      })}
    </div>
  );
}

export default GuessResults;
