import React, { Component } from "react";
import PredictiveWordsPanel from './PredictiveWordsPanel';
import styled from 'styled-components'

const TextInput = styled.input`
  width: 300px;
  background: yellow;
`
TextInput.displayName = 'TextInput'

export default class TextInputPanel extends Component {
  
  render() {
    const { updateInputText, words } = this.props;
    console.log('words: ', words)

    return (
      <div className="TextInputPanel">
          <div>
            <TextInput autoFocus onChange={(event) => updateInputText(event.target.value)}/>
          </div>
        
          {words && <PredictiveWordsPanel words={words} />}
      </div>

    );
  }
}