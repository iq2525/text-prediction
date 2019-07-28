import React, { Component } from "react";
import styled from 'styled-components'

const PredictiveWordCont = styled.ul`
display: flex;
justify-content: flex-start;
padding: 0;
`
PredictiveWordCont.displayName = 'PredictiveWordCont'

const PredictiveWord = styled.li`
  background: lightgrey;
  list-style: none;
  font-size: 16px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`
PredictiveWord.displayName = 'PredictiveWord'

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