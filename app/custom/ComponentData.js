import React from 'react';

import Story from '../Story.jsx';
import Reverie from '../Reverie.jsx';
import Projects from '../Projects.jsx';
import Article from '../Article.jsx';
import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import ReverieNav from '../ReverieNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

import Content from './Content.js';

export default class ComponentData {
  constructor(type) {
    const c = new Content(type);

    this._type = type;
    this._contentData = c.getContentData();
  }

  getSection(props, ref) {
    const type = this._type;

    switch (type) {
      case 'chapter':
        return <Story {...props} overflowRef={ref} data={this._contentData} />;
      case 'projects':
        return (
          <Projects {...props} overflowRef={ref} data={this._contentData} />
        );
      case 'journalism':
        return (
          <Article {...props} overflowRef={ref} data={this._contentData} />
        );
      case 'reverie':
        return (
          <Reverie {...props} overflowRef={ref} data={this._contentData} />
        );
      default:
        return undefined;
    }
  }

  getMenuComponent(props) {
    const type = this._type;

    switch (type) {
      case 'chapter':
        return (
          <ChapterNav
            {...props}
            isMenu={true}
            section={type}
            data={this._contentData}
          />
        );
      case 'projects':
        return (
          <MultiProjectNav
            {...props}
            isMenu={true}
            section={type}
            isProjectMenu={true}
            data={this._contentData}
          />
        );
      case 'journalism':
        return (
          <ArticleNav
            {...props}
            isMenu={true}
            section={type}
            data={this._contentData}
          />
        );
      case 'reverie':
        return (
          <ReverieNav
            {...props}
            isMenu={true}
            section={type}
            data={this._contentData}
          />
        );
      default:
        return undefined;
    }
  }
}
