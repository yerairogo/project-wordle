import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessForm({ guessList, setGuessList, answer }) {
  const [guessTerm, setGuessTerm] = React.useState('');

  const processForm = (event) => {
    event.preventDefault();
    setGuessTerm('');
    console.log({ guess: guessTerm });

    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert('Too many tries >:(');
      return;
    }

    const newGuessList = [...guessList, checkGuess(guessTerm, answer)];
    setGuessList(newGuessList);
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        processForm(event);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="^[A-Z]{5}$"
        required={true}
        value={guessTerm}
        onChange={(event) => setGuessTerm(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
