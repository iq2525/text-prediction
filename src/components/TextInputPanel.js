import React, { Component } from "react";
import styled from 'styled-components'

const TextInput = styled.input`
  width: 300px;
  background: yellow;
`
TextInput.displayName = 'TextInput'


const PredictiveWordCont = styled.div`
  background: red;
`
PredictiveWordCont.displayName = 'PredictiveWordCont'

export default class TextInputPanel extends Component {
  render() {
    const { updateInputText, words } = this.props;
    console.log('words: ', words)

    return (
      <div className="TextInputPanel">
          <div>
            <TextInput onChange={(event) => updateInputText(event.target.value)}/>
          </div>
        
          {words && 
            <PredictiveWordCont>
              <ul>
                {words.map((word, i) => <li key={i}>{word.word}</li>)}
              </ul>
            </PredictiveWordCont>
          }
          
      </div>

    );
  }
}