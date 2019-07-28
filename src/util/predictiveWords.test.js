import React from 'react';
import {shallow} from 'enzyme'
jest.mock('./words.json')

import { getWords } from './predictiveWords';
import { exportAllDeclaration } from '@babel/types';

describe('getWords', () => {
  it.only('returns 3 predictive words sorted by the most frequent', () => {
    const predictiveWords = getWords('a')
    
    expect(predictiveWords.length).toEqual(3);
    expect(predictiveWords[0].word).toEqual('ac');
    expect(predictiveWords[0].count).toEqual(3);
    expect(predictiveWords[1].word).toEqual('ab');
    expect(predictiveWords[1].count).toEqual(2);
    expect(predictiveWords[2].word).toEqual('aa');
    expect(predictiveWords[2].count).toEqual(1);
  });

  it.only('returns 0 words when no matching words found', () => {
    const predictiveWords = getWords('c')
    
    expect(predictiveWords.length).toEqual(0);
  });

  it.only('returns 0 words when nothing entered', () => {
    const predictiveWords = getWords('')
    
    expect(predictiveWords.length).toEqual(0);
  });
});
