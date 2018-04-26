import React, { Component } from 'react';

class Chapter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // var chapter = match.params.num;

    return (
      <div id='ChapterContainer'>
        <div id='Story'>
          <h1 id='h1ForChapter'>Chapter Test</h1>
          <p id='pForChapter'>This is my story</p>
        </div>
        <div id='Picture'>
        </div>
      </div>
    )
  }

}

export default Chapter;
