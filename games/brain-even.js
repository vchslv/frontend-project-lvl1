#!/usr/bin/env node
import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenLogic = () => {
  const randomNumber = _.random(99);
  const text = `${ randomNumber }`;
  const desiredAnswer = ((randomNumber % 2) === 0) ? 'yes' : 'no';
  return [desiredAnswer, text];
};

commonLogic(question, brainEvenLogic);
