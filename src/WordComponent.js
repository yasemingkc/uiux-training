import React from 'react';

class WordComponent extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}

export default WordComponent;