import _ from 'lodash';
import commonLogic from '../index.js';

const checkForParity = (number) => (((number % 2) === 0) ? 'yes' : 'no');

const getBrainEvenLogic = () => {
  const randomNumber = _.random(99);
  const roundQuestion = randomNumber.toString();
  const desiredAnswer = checkForParity(randomNumber);
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => commonLogic(gameQuestion, getBrainEvenLogic);

export default runBrainEven;
