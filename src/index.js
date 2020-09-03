import readlineSync from 'readline-sync';

const commonLogic = (question, f) => {
  let equal = true;
  let countQuestions = 3;

  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!\n${question}`);

  while (equal && (countQuestions > 0)) {
    const [desiredAnswer, text] = f();
    const answer = readlineSync.question(`Question: ${text}\nYour answer: `);
    if (answer === desiredAnswer.toString()) {
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
};

export default commonLogic;
