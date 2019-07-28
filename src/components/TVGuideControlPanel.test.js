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
    expect(wrapper.find('PredictiveWordCont').length).toEqual(0)
  });

  it('renders component with predictive words', () => {
    const wrapper = shallow(
      <TextInputPanel 
        updateInputText={null}
        words={['aa', 'bb', 'cc']}
    />)
  
    expect(wrapper.find('TextInput').length).toEqual(1)
    expect(wrapper.find('PredictiveWordCont').length).toEqual(1)
  });

  xit('renders in fetching data state', () => {
    const wrapper = shallow(<TVGuideControlPanel 
      fetching={true}
      onUpdateTVGuide={null}
      error={null}
    />)
  
    expect(wrapper.find('.update-button').length).toEqual(1)
    expect(wrapper.find('.update-button').text()).toContain('Fetching...')
  });

  xit('renders in error state', () => {
    const wrapper = shallow(<TVGuideControlPanel 
      fetching={false}
      onUpdateTVGuide={null}
      error={true}
    />)
  
    expect(wrapper.find('.error-message').length).toEqual(1)
  });

  xit('calls the onUpdateTVGuide dispatch method when the button is clicked', () => {
    const mockFn = jest.fn();
    
    const wrapper = shallow(<TVGuideControlPanel 
      fetching={false}
      onUpdateTVGuide={mockFn}
      error={false}
    />)
  
    const updateButton = wrapper.find('.update-button')
    expect(updateButton.length).toEqual(1)

    updateButton.simulate('click')
    expect(mockFn.mock.calls.length).toEqual(1)
  });
});
