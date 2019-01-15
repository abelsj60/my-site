import React from 'react';

import Story from '../Story.jsx';
import Projects from '../Projects.jsx';
import Article from '../Article.jsx';
import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

import Content from './Content.js';

export default class ComponentData {
  constructor(type, props) {
    const c = new Content(type);

    this._type = type;
    this._props = props;
    this._contentData = c.getContentData();
  }

  getText() {
    const type = this._type;

    switch (type) {
      case 'story':
        return 'The story so far';
      case 'projects':
        return 'Technology projects for me, clients, and fun';
      case 'journalism':
        return 'Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others';
      default:
        return undefined;
    }
  }

  getMainComponent() {
    const props = this._props;
    const type = this._type;

    switch (type) {
      case 'story':
        return <Story {...props} data={this._contentData} />;
      case 'projects':
        return (
          <Projects {...props} text={this.getText()} data={this._contentData} />
        );
      case 'journalism':
        return (
          <Article {...props} text={this.getText()} data={this._contentData} />
        );
      default:
        return undefined;
    }
  }

  getMenuNavigator() {
    const props = this._props;
    const type = this._type;

    switch (type) {
      case 'story':
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
      default:
        return undefined;
    }
  }
}
