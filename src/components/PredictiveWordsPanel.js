import React, { Component } from "react";
import styled from 'styled-components'

const PredictiveWordCont = styled.ul`
  background: red;
`
PredictiveWordCont.displayName = 'PredictiveWordCont'

const PredictiveWord = styled.li`
  background: yellow;
`
PredictiveWordCont.displayName = 'PredictiveWord'

export default class PredictiveWordsPanel extends Component {
  render() {
    const { words } = this.props;

    return ( 
      <PredictiveWordCont>
        {words.map((word, i) => <PredictiveWord key={i}>{word.word}</PredictiveWord>)}
      </PredictiveWordCont>
    );
  }
}