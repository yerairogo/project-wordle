import React from 'react';
import { range } from '../../utils';

function Guess({ id, label }) {
  return (
    <p key={id} className="guess">
      {range(0, 5).map((i) => {
        if (label) {
          return <span key={i} className="cell">{label.split('')[i]}</span>;
        } else {
          return <span key={i} className="cell" />
        }
      })}
    </p>
  );
}

export default Guess;
