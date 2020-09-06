import _ from 'lodash';

const brainProgressionLogic = () => {
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
      desiredAnswer = numberInProgression;
    }
  }
  const text = progression.join(' ');
  return [desiredAnswer, text];
};

export default brainProgressionLogic;
