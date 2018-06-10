import React, { Component } from 'react';
import ItemNav from './ItemNav.jsx';
import chText from './helpers/siteText.js';

var chapters = [1,2,3,4];
var route = '/chapter/';

var pickContent = function(num) {
  if(num === '1') {
    return chText['1'];
  } else if(num === '2') {
    return chText['2'];
  } else if(num === '3') {
    return chText['3'];
  } else {
    return chText['4'];
  }
}

class Chapter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var urlNum = this.props.urlNum;
    var chapter = pickContent(urlNum);

    return (
      <main className='chapter internal-page'>
        <section className='left chapter'>
          <nav>
          {
            chapters.map((chNum, index) =>
              (
                <ItemNav key={chNum} item={chNum} param={urlNum} route={route} />
              ))
          }
          </nav>
          <h1>{chapter.title}</h1>
          <p className='chapter-text'>{chapter.text}</p>
        </section>
        <section className='right illustration'>
        </section>
      </main>
    )
  }

}

export default Chapter;
