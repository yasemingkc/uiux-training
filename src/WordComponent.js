import React from 'react';

class WordComponent extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.onClickText()}
      >{this.props.word}</div>
    )
  }
}

export default WordComponent;