import React, { Fragment, Component } from 'react';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <h1>{this.props.chapter.title}</h1>
        <p>{this.props.chapter.text}</p>
      </Fragment>
    );
  }
}

export default Chapter;
