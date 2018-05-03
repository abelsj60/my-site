import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import chText from './helpers/siteText.js';

var chapters = [1,2,3,4];
var route = '/chapter/';

class Chapter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var urlNum = this.props.urlNum;

    var pickContent = function(number, chText) {
      if(number === '1') {
        return chText['1'];
      } else if(number === '2') {
        return chText['2'];
      } else if(number === '3') {
        return chText['3'];
      } else {
        return chText['4'];
      }
    }

    return (
      <div id='ChapterContainer'>
        <div id='Story'>
          <div id='ChapterNavItems'>
          {
            chapters.map((chNum, index) =>
              (
                <ItemNav key={chNum} item={chNum} param={urlNum} route={route} />
              )
            )
          }
          </div>
          <h1 id='h1ForChapter'>{pickContent(urlNum, chText).title}</h1>
          <p id='pForChapter'>{pickContent(urlNum, chText).text}</p>
        </div>
        <div id='Picture'>
        </div>
      </div>
    )
  }

}

export default Chapter;
