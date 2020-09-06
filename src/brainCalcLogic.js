import _ from 'lodash';

const brainCalcLogic = () => {
  let desiredAnswer;
  const operators = ['+', '-', '*'];
  const operand1 = _.random(99);
  const operand2 = _.random(99);
  const randomIndex = _.random(2);
  const randomOperator = operators[randomIndex];
  const text = `${ operand1 } ${ randomOperator } ${ operand2 }`;
  if (randomOperator === '+') {
    desiredAnswer = operand1 + operand2;
  } else if (randomOperator === '-') {
    desiredAnswer = operand1 - operand2;
  } else {
    desiredAnswer = operand1 * operand2;
  }
  return [desiredAnswer, text];
};

export default brainCalcLogic;
