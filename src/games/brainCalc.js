import _ from 'lodash';
import commonLogic from '../index.js';

const calcOperation = (num1, num2, mathSign) => {
  let result;
  switch (mathSign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
  }
  return result;
};

const operators = ['+', '-', '*'];

const getBrainCalcLogic = () => {
  const operand1 = _.random(99);
  const operand2 = _.random(99);
  const randomIndex = _.random(2);
  const randomOperator = operators[randomIndex];
  const roundQuestion = `${operand1} ${randomOperator} ${operand2}`;
  const desiredAnswer = calcOperation(operand1, operand2, randomOperator).toString();
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'What is the result of the expression?';

const runBrainCalc = () => commonLogic(gameQuestion, getBrainCalcLogic);

export default runBrainCalc;
