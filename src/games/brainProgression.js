import _ from 'lodash';
import runEngine from '../index.js';

const getProgression = (element1, stepProgression, lengthOfProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const numberInProgression = element1 + (i * stepProgression);
    progression.push(numberInProgression);
  }
  return progression;
};

const maxElement1 = 99;
const lengthOfProgression = 10;
const maxStepOfProgression = 10;

const genRoundData = () => {
  const element1 = _.random(maxElement1);
  const stepProgression = _.random(1, maxStepOfProgression);
  const progression = getProgression(element1, stepProgression, lengthOfProgression);
  const indexOfHiddenElement = _.random(lengthOfProgression - 1);
  const desiredAnswer = progression[indexOfHiddenElement].toString();
  progression[indexOfHiddenElement] = '..';
  const roundQuestion = progression.join(' ');
  return [desiredAnswer, roundQuestion];
};

const gameQuestion = 'What number is missing in the progression?';

const runBrainProgression = () => runEngine(gameQuestion, genRoundData);

export default runBrainProgression;
