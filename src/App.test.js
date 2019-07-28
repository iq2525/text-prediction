import React from 'react';
import App from './App';
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'

describe('<App />', () => {
  it('renders without crashing', () => {
    const mockStore = configureStore()
    const store = mockStore()
    
    const words = [{count: 1, word: 'aa'}, {count: 1, word: 'aa'}, {count: 1, word: 'aa'}]

    const wrapper = shallow(<App 
      store={store}
      // updateInputTest={null} 
      // words={words}
    /> )  
    expect(wrapper.html()).toContain('Text Prediction');
    expect(wrapper.html()).toContain('TextInputPanel');
  });
});