import readlineSync from 'readline-sync';

const commonLogic = (gameQuestion, f) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!\n${gameQuestion}`);
  
  for (let i = 0; i < 3; i += 1) {
    const [desiredAnswer, roundQuestion] = f();
    const answer = readlineSync.question(`Question: ${roundQuestion}\nYour answer: `);
    if (answer === desiredAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${desiredAnswer}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default commonLogic;
