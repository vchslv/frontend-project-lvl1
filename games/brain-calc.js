#!/usr/bin/env node
import commonLogic from '../src/index.js';
import brainCalcLogic from '../src/brainCalcLogic.js';

const question = 'What is the result of the expression?';

commonLogic(question, brainCalcLogic);
