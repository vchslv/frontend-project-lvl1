import _ from 'lodash';
import commonLogic from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const halfNum = Math.round(num / 2);
  for (let i = halfNum; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getBrainPrimeLogic = () => {
  const randomNumber = _.random(-99, 99);
  const desiredAnswer = (!isPrime(randomNumber)) ? 'no' : 'yes';
  return [desiredAnswer, randomNumber];
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runBrainPrime = () => commonLogic(gameQuestion, getBrainPrimeLogic);

export default runBrainPrime;
