import React, { Component } from "react";
import './TVGuideControlPanel.scss'
export default class TVGuideControlPanel extends Component {
  render() {
    const { updateInputText, words } = this.props;
    console.log('words: ', words)
    console.log('words.length: ', words.length)
    return (
      <div className="tvGuide-control-panel">
          <div><input type="text" onChange={(event) => updateInputText(event.target.value)}/></div>
          
          <div>
            {words.length && 
              <ul>
                {words.map((word, i) => <li key={i}>{word.word}</li>)}
              </ul>
            }
          </div>
          
      </div>

    );
  }
}