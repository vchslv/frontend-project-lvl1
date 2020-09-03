#!/usr/bin/env node
import _ from 'lodash';
import commonLogic from '../src/index.js';

const question = 'What is the result of the expression?';

const brainCalcLogic = () => {
  const operators = ['+', '-', '*'];
  const operand1 = _.random(99);
  const operand2 = _.random(99);
  const index = _.random(2);
  const operator = operators[index];
  const text = `${operand1} ${operator} ${operand2}`;
  let desiredAnswer;
  if (operator === '+') {
    desiredAnswer = operand1 + operand2;
  } else if (operator === '-') {
    desiredAnswer = operand1 - operand2;
  } else {
    desiredAnswer = operand1 * operand2;
  }
  return [desiredAnswer, text];
};

commonLogic(question, brainCalcLogic);
