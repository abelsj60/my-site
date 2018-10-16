import React, { Fragment, Component } from 'react';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chapter = this.props.chapter;

    return (
      <Fragment>
        <h1 className="title">{chapter.title}</h1>
        <p className="text">{chapter.text}</p>
      </Fragment>
    );
  }
}

export default Chapter;
