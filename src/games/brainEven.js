import _ from 'lodash';
import runEngine from '../index.js';

const checkForParity = (number) => ((number % 2) === 0);

const maxNumber = 99;

const genRoundData = () => {
  const number = _.random(maxNumber);
  const roundQuestion = number.toString();
  const desiredAnswer = (checkForParity(number)) ? 'yes' : 'no';
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => runEngine(gameQuestion, genRoundData);

export default runBrainEven;
