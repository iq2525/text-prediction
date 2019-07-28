import { getWords } from './util/predictiveWords'

// action types
const UPDATE_INPUT_TEXT = "UPDATE_INPUT_TEXT";

// reducer with initial state
const initialState = {
  inputText: "",
  words: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_TEXT:
      return { ...state, inputText: action.inputText, words: getWords(action.inputText) };
    default:
      return state;
  }
}