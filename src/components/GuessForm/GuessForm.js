import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessForm({ guessList, setGuessList, setStatus, status }) {
  const [guessTerm, setGuessTerm] = React.useState('');

  const processForm = (event) => {
    event.preventDefault();
    setGuessTerm('');
    console.log({ guess: guessTerm });


    const newGuessList = [...guessList, guessTerm];

    if (newGuessList.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost')
    }

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
        disabled={status !== 'running'}
        value={guessTerm}
        onChange={(event) => setGuessTerm(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessForm;
