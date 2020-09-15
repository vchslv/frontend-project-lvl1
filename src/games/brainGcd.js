import _ from 'lodash';
import runEngine from '../index.js';

const getMaxCommonDivisor = (number1, number2) => {
  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);
  if (minNumber === 0) {
    return maxNumber;
  }
  if (maxNumber % minNumber === 0) {
    return minNumber;
  }
  const halfminNumber = Math.round(minNumber / 2);
  for (let i = halfminNumber; i > 1; i -= 1) {
    if ((minNumber % i === 0) && (maxNumber % i === 0)) {
      return i;
    }
  }
  return 1;
};

const maxNumber1 = 99;
const maxNumber2 = 99;

const genRoundData = () => {
  // 1 in random is set to exclude 0/0
  const number1 = _.random(1, maxNumber1);
  const number2 = _.random(maxNumber2);
  const roundQuestion = `${number1} ${number2}`;
  const desiredAnswer = getMaxCommonDivisor(number1, number2).toString();
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const runBrainGcd = () => runEngine(gameQuestion, genRoundData);

export default runBrainGcd;
