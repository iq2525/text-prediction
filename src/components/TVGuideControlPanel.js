import React, { Component } from "react";
import './TVGuideControlPanel.scss'
export default class TVGuideControlPanel extends Component {
  render() {
    const { getWords, words } = this.props;
    console.log('words: ', words)
    return (
      <div className="tvGuide-control-panel">
          <div><button className="update-button" onClick={getWords}>Update TVGuide</button></div>
          {/* <div>Words: {words}</div> */}
      </div>

    );
  }
}