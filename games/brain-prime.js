#!/usr/bin/env node
import commonLogic from '../src/index.js';
import brainPrimeLogic from '../src/brainPrimeLogic.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

commonLogic(question, brainPrimeLogic);
