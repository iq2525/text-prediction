import React from 'react';
import {shallow} from 'enzyme'

import PredictiveWordsPanel from './PredictiveWordsPanel';

describe('<PredictiveWordsPanel />', () => {
  it('renders component when there are 3 Predictive Words', () => {
    const predictiveWordList = [
      {count: 3, word: 'aa'}, 
      {count: 2, word: 'ab'}, 
      {count: 1, word: 'ac'}
    ] 
    
    const wrapper = shallow(
      <PredictiveWordsPanel 
        words={predictiveWordList}
      />)
  
    expect(wrapper.find('PredictiveWordCont').length).toEqual(1)
    expect(wrapper.find('PredictiveWord').length).toEqual(3)
    expect(wrapper.find('PredictiveWord').at(0).text()).toEqual(predictiveWordList[0].word)
    expect(wrapper.find('PredictiveWord').at(1).text()).toEqual(predictiveWordList[1].word)
    expect(wrapper.find('PredictiveWord').at(2).text()).toEqual(predictiveWordList[2].word)
  });

  it('renders component when there are 2 Predictive Words', () => {
    const predictiveWordList = [
      {count: 3, word: 'aa'}, 
      {count: 2, word: 'ab'}, 
    ] 
    
    const wrapper = shallow(
      <PredictiveWordsPanel 
        words={predictiveWordList}
      />)
  
    expect(wrapper.find('PredictiveWordCont').length).toEqual(1)
    expect(wrapper.find('PredictiveWord').length).toEqual(2)
    expect(wrapper.find('PredictiveWord').at(0).text()).toEqual(predictiveWordList[0].word)
    expect(wrapper.find('PredictiveWord').at(1).text()).toEqual(predictiveWordList[1].word)
  });

  it('renders component when there are 1 Predictive Word', () => {
    const predictiveWordList = [
      {count: 3, word: 'aa'}, 
    ] 
    
    const wrapper = shallow(
      <PredictiveWordsPanel 
        words={predictiveWordList}
      />)
  
    expect(wrapper.find('PredictiveWordCont').length).toEqual(1)
    expect(wrapper.find('PredictiveWord').length).toEqual(1)
    expect(wrapper.find('PredictiveWord').at(0).text()).toEqual(predictiveWordList[0].word)
  });
});
