import { getWords } from './util/predictiveWords'

// action types
const GET_WORDS = "GET_WORDS";



// reducer with initial state
const initialState = {
  words: {}
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      console.log('state:', state)
      return { ...state, words: getWords() };
    default:
      return state;
  }
}