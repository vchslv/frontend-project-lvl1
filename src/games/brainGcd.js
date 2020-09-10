import _ from 'lodash';
import commonLogic from '../index.js';

const maxCommonDivisor = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);
  if (minNum === 0) {
    return maxNum;
  }
  if (maxNum % minNum === 0) {
    return minNum;
  }
  const halfMinNum = Math.round(minNum / 2);
  for (let i = halfMinNum; i > 1; i -= 1) {
    if ((minNum % i === 0) && (maxNum % i === 0)) {
      return i;
    }
  }
  return 1;
};

const getBrainGcdLogic = () => {
  const number1 = _.random(1, 99);
  const number2 = _.random(99);
  const roundQuestion = `${number1} ${number2}`;
  const desiredAnswer = maxCommonDivisor(number1, number2).toString();
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const runBrainGcd = () => commonLogic(gameQuestion, getBrainGcdLogic);

export default runBrainGcd;
