#!/usr/bin/env node
import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenLogic = () => {
  const number = _.random(99);
  const text = `${number}`;
  const desiredAnswer = ((number % 2) === 0) ? 'yes' : 'no';
  return [desiredAnswer, text];
};

commonLogic(question, brainEvenLogic);
