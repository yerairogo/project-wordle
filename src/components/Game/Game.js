import React from 'react';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

import { sample } from '../../utils';
import { WORDS } from '../../data';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
const [guessList, setGuessList] = React.useState([]);
const [status, setStatus] = React.useState('running');

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} setStatus={setStatus} />
      <GuessForm guessList={guessList} setGuessList={setGuessList} setStatus={setStatus} status={status} />
      {status !== 'running' && <Banner status={status} answer={answer} tries={guessList.length} /> }
    </>
  );
}

export default Game;
