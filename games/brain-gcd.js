#!/usr/bin/env node
import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'Find the greatest common divisor of given numbers.';

const maxCommonDivisor = (num1, num2) => {
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);
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

const brainGcdLogic = () => {
  const randomNumber1 = _.random(99);
  const randomNumber2 = _.random(99);
  const text = `${ randomNumber1 } ${ randomNumber2 }`;
  const desiredAnswer = maxCommonDivisor(randomNumber1, randomNumber2);
  return [desiredAnswer, text];
};

commonLogic(question, brainGcdLogic);
