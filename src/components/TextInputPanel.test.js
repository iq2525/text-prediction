import React from 'react';
import {shallow} from 'enzyme'

import TextInputPanel from './TextInputPanel';

describe('<TextInputPanel />', () => {
  it('renders component in start state', () => {
    const wrapper = shallow(
      <TextInputPanel 
        updateInputText={null}
        words={null}
    />)
  
    expect(wrapper.find('TextInput').length).toEqual(1)
    expect(wrapper.find('PredictiveWordsPanel').length).toEqual(0)
  });

  it('renders predictive PredictiveWordsPanel when there are predictive words', () => {
    const wrapper = shallow(
      <TextInputPanel 
        updateInputText={null}
        words={['aa', 'bb', 'cc']}
    />)
  
    expect(wrapper.find('TextInput').length).toEqual(1)
    expect(wrapper.find('PredictiveWordsPanel').length).toEqual(1)
  });

  it('fires updateInputText action when input text is changed', () => {
    const mockFn = jest.fn();

    const wrapper = shallow(
      <TextInputPanel 
        updateInputText={mockFn}
        words={null}
    />)
  
    expect(wrapper.find('TextInput').length).toEqual(1)
    expect(wrapper.find('PredictiveWordsPanel').length).toEqual(0)

    const event = {
      target: {
        value: 'Test Text'
      }
    }

    wrapper.find('TextInput').simulate('change', event);
    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn.mock.calls[0][0]).toEqual(event.target.value);
  });
});
