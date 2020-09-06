import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = Math.round(num / 2);
  for (let i = halfNum; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrimeLogic = () => {
  let desiredAnswer;
  const randomNumber = _.random(-99, 99);
  if ((randomNumber < 1) || !isPrime(randomNumber)) {
    desiredAnswer = 'no';
  } else {
    desiredAnswer = 'yes';
  }
  return [desiredAnswer, randomNumber];
};

commonLogic(question, brainPrimeLogic);
