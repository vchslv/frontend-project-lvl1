import _ from 'lodash';
import commonLogic from '../index.js';

const getBrainProgressionLogic = () => {
  let desiredAnswer;
  const progression = [];
  const randomNumber1 = _.random(99);
  const stepProgression = _.random(1, 10);
  const hiddenElement = _.random(9);
  for (let i = 0; i < 10; i += 1) {
    const numberInProgression = randomNumber1 + (i * stepProgression);
    if (i !== hiddenElement) {
      progression.push(numberInProgression);
    } else {
      progression.push('..');
      desiredAnswer = numberInProgression.toString();
    }
  }
  const roundQuestion = progression.join(' ');
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'What number is missing in the progression?';

const runBrainProgression = () => commonLogic(gameQuestion, getBrainProgressionLogic);

export default runBrainProgression;
