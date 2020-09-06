#!/usr/bin/env node
import commonLogic from '../src/index.js';
import brainGcdLogic from '../src/brainGcdLogic.js';

const question = 'Find the greatest common divisor of given numbers.';

commonLogic(question, brainGcdLogic);
