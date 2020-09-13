import _ from 'lodash';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const halfNumber = Math.round(number / 2);
  for (let i = halfNumber; i > 1; i -= 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const minRandomNumber = -99;
const maxRandomNumber = 99;

const genRoundData = () => {
  const number = _.random(minRandomNumber, maxRandomNumber);
  const roundQuestion = number.toString();
  const desiredAnswer = (!isPrime(number)) ? 'no' : 'yes';
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runBrainPrime = () => runEngine(gameQuestion, genRoundData);

export default runBrainPrime;
