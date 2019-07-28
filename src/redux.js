import { getWords } from './util/predictiveWords'

// action types
 import { ACTION_TYPE_UPDATE_INPUT_TEXT } from './constants';

// reducer with initial state
const initialState = {
  inputText: "",
  words: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE_UPDATE_INPUT_TEXT:
      return { 
        ...state, 
        inputText: action.inputText, 
        words: getWords(action.inputText) 
      };
    default:
      return state;
  }
}