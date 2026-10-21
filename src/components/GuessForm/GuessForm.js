import React from 'react';

function GuessForm() {
  const [guessTerm, setGuessTerm] = React.useState('');

  const processForm = (event) => {
    event.preventDefault();
    console.log({ guess: guessTerm });
    setGuessTerm('');
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
