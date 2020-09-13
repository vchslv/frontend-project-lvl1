import _ from 'lodash';
import runEngine from '../index.js';

const calcOperation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operators = ['+', '-', '*'];
const maxOperand1 = 99;
const maxOperand2 = 99;

const genRoundData = () => {
  const operand1 = _.random(maxOperand1);
  const operand2 = _.random(maxOperand2);
  const numberOfOperations = operators.length - 1;
  const indexOfOperator = _.random(numberOfOperations);
  const operator = operators[indexOfOperator];
  const roundQuestion = `${operand1} ${operator} ${operand2}`;
  const desiredAnswer = calcOperation(operand1, operand2, operator).toString();
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'What is the result of the expression?';

const runBrainCalc = () => runEngine(gameQuestion, genRoundData);

export default runBrainCalc;
