#!/usr/bin/env node
import commonLogic from '../src/index.js';
import brainProgressionLogic from '../src/brainProgressionLogic.js';

const question = 'What number is missing in the progression?';

commonLogic(question, brainProgressionLogic);
