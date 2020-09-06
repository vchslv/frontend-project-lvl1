import _ from 'lodash';

const brainEvenLogic = () => {
  const randomNumber = _.random(99);
  const text = `${randomNumber}`;
  const desiredAnswer = ((randomNumber % 2) === 0) ? 'yes' : 'no';
  return [desiredAnswer, text];
};

export default brainEvenLogic;
