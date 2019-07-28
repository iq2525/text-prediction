import React, { Component } from "react";
import styled from 'styled-components'
import TextInputPanel from "./components/TextInputPanel";
import { ACTION_TYPE_UPDATE_INPUT_TEXT } from './constants'

import { connect } from "react-redux";

const AppCont = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

const Heading = styled.h1`
  font-size: 18px;
`
Heading.displayName = 'Heading'

class App extends Component {
  render() {
    const { words, updateInputText } = this.props;
    
    return (
      <AppCont>
        <header>
          <Heading>
            Text Prediction
          </Heading>
        </header>

        <p>Enter text to start typing</p>

        <TextInputPanel
          updateInputText={updateInputText}
          words={words}
        />

        <p>Will return the 3 most frequent words beginning with the letters typed</p>
        <p>Go to <a href="https://github.com/iq2525/text-prediction">Github</a> for full details on this project.</p>
        
        <h2>Algorithm to find words</h2>
        
        <p>The app will search as follows:</p>
        <ol>
          <li>If Search term is empty then return nothing. </li>
          <li>If Search term is only numbers then return nothing.</li>
          <li>If multiple words entered, then use the last word.</li>
          <li>Convert Search term to lower case.</li>
          <li>Remove any numbers from the search term.</li>
          <li>Searche the trained dataset for all words beginning with the search term.</li>
          <li>Sorts the results with the most frequent words descending.</li>
          <li>Returns the top 3 words.</li>
        </ol>
      </AppCont>
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateInputText: (inputText) => dispatch({ type: ACTION_TYPE_UPDATE_INPUT_TEXT, inputText: inputText })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);