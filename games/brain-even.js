#!/usr/bin/env node
import commonLogic from '../src/index.js';
import brainEvenLogic from '../src/brainCalcLogic.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

commonLogic(question, brainEvenLogic);
