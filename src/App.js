import React, { Component } from "react";
import styled from 'styled-components'
import TextInputPanel from "./components/TextInputPanel";

import { connect } from "react-redux";

const Heading = styled.h1`
  font-size: 18px;
`
Heading.displayName = 'Heading'

class App extends Component {
  render() {
    const { words, updateInputText } = this.props;
    
    return (
      <div className="App">
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
      </div>
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
    updateInputText: (inputText) => dispatch({ type: "UPDATE_INPUT_TEXT", inputText: inputText })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);