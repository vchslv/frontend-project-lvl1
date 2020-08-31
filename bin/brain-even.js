#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';

let equal = true;
let countQuestions = 3;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (equal && (countQuestions > 0)) {
  const number = _.random(100);
  const desiredAnswer = ((number % 2) === 0) ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  let answer = readlineSync.question('Your answer: ');
  if (answer === desiredAnswer) {
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
