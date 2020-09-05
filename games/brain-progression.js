#!/usr/bin/env node
import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'What number is missing in the progression?';

const brainProgressionLogic = () => {
  const progression = [];
  let desiredAnswer;
  const number1 = _.random(99);
  const stepProgression = _.random(1, 10);
  const hiddenElement = _.random(9);
  for (let i = 0; i < 10; i += 1) {
    const numberInProgression = number1 + (i * stepProgression);
    if (i !== hiddenElement) {
      progression.push(numberInProgression);
    } else {
      progression.push('..');
      desiredAnswer = numberInProgression;
    }
  }
  const text = progression.join(' ');
  return [desiredAnswer, text];
};

commonLogic(question, brainProgressionLogic);
