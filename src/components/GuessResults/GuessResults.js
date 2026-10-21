import React from 'react';

function GuessResults({ guessList }) {
  return (
    <>
      <div className="guess-results">
        {guessList.map(({ id, label }) => (
          <p key={id} className="guess">
            {label}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
