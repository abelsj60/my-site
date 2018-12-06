import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { normalize } from './helpers/utils.js';

class ChapterNav extends Component {
  constructor(props) {
    super(props);
  }

  renderThisHtml() {
    return this.props.data.map((chapter, index) => (
      <Link
        key={index}
        className={this.props.chapterIndex === index ? 'active' : 'inactive'}
        to={`/chapter/${normalize(this.props.data[index].attributes.title)}`}
      >
        {this.props.isMenu && <h1 id="story-chapter">Chapter {index + 1}</h1>}
        <p>{!this.props.isMenu ? index + 1 : chapter.attributes.title}</p>
      </Link>
    ));
  }

  render() {
    if (this.props.isMenu) {
      return (
        <section id="contents-list" className={`${this.props.section}-menu`}>
          {this.renderThisHtml()}
        </section>
      );
    } else {
      return <section id="story-nav">{this.renderThisHtml()}</section>;
    }
  }
}

export default ChapterNav;
