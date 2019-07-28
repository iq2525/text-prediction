import React, { Component } from "react";
import styled from 'styled-components'

const PredictiveWordCont = styled.ul`
  background: red;
`
PredictiveWordCont.displayName = 'PredictiveWordCont'

const PredictiveWord = styled.li`
  background: yellow;
`
PredictiveWord.displayName = 'PredictiveWord'

export default class PredictiveWordsPanel extends Component {
  render() {
    const { words } = this.props;
    console.log('PredictiveWordsPanel: ', words)
    return ( 
      <PredictiveWordCont>
        {words.map((word, i) => <PredictiveWord key={i}>{word.word}</PredictiveWord>)}
      </PredictiveWordCont>
    );
  }
}