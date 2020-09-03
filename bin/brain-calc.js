#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

let equal = true;
let countQuestions = 3;

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const question = 'What is the result of the expression?';
console.log(`Hello, ${name}!\n${question}`);

while (equal && (countQuestions > 0)) {
  const operators = ['+', '-', '*']
  const operand1 = _.random(99);
  const operand2 = _.random(99);
  const index = _.random(2);
  const operator = operators[index];
  let desiredAnswer;
  if (operator === '+') {
    desiredAnswer = operand1 + operand2;
  } else if (operator === '-') {
    desiredAnswer = operand1 - operand2;
  } else {
    desiredAnswer = operand1 * operand2
  }

  const answer = readlineSync.question(`Question: ${operand1} ${operator} ${operand2}\nYour answer: `);
  if (Number(answer) === desiredAnswer) {
    console.log('Correct');
    countQuestions -= 1;
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${desiredAnswer}".\nLet's try again, ${name}!`);
    equal = false;
  }
}

if (countQuestions === 0) {
  console.log(`Congratulations, ${name}!`);
}
