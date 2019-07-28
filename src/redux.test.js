import { reducer } from './redux';
import { UPDATE_INPUT_TEXT } from './constants'
import { jsxEmptyExpression } from '@babel/types';
jest.mock('./util/predictiveWords')

describe('redux', () => {
  it('handles UPDATE_INPUT_TEXT', () => {
    const newState = reducer(null, {type: UPDATE_INPUT_TEXT, inputText: 'a'})
    expect(newState).toEqual(
    {
      inputText: 'a', 
      words: [{count: 3, word: 'aa'},{count: 2, word: 'ab'},{count: 1, word: 'ac'}]
    });
  })
});
