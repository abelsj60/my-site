import React, { Component } from 'react';

class ChapterNav extends Component {
  constructor(props) {
    super(props);
  }

  renderThisHtml() {
    const props = this.props;
    const state = this.props.state;

    return this.props.data.map((chapter, index) => (
      <section
        key={index}
        className={index === state.indexForChapterData ? 'active' : 'inactive'}
        onClick={() => props.handleClick(index, chapter.attributes.title)}
      >
        {state.isStoryMenu && <h1 id="story-chapter">Chapter {index + 1}</h1>}
        <p>{!state.isStoryMenu ? index + 1 : chapter.attributes.title}</p>
      </section>
    ));
  }

  render() {
    if (this.props.state.isStoryMenu) {
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
