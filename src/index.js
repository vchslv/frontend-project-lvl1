import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runEngine = (gameQuestion, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [desiredAnswer, roundQuestion] = genRoundData();
    console.log(`Question: ${roundQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== desiredAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${desiredAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
