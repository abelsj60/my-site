import React from 'react';

import Story from '../Story.jsx';
import Projects from '../Projects.jsx';
import Article from '../Article.jsx';
import ArticleNav from '../ArticleNav.jsx';
import ChapterNav from '../ChapterNav.jsx';
import MultiProjectNav from '../MultiProjectNav.jsx';

import Content from './Content.js';

export default class Data {
  constructor(section, props) {
    this._props = props;

    this.section = section;
    this.text = this._loadText();
    this.component = this._loadComponent();
    this.contentData = this._loadContentData();
    this.menuNavigator = this._loadMenuNavigator();
  }

  _loadContentData() {
    const c = new Content(this.section);
    return c.contentData;
  }

  _loadText() {
    const section = this.section;

    switch (section) {
      case 'story':
        return;
      case 'projects':
        return 'Technology projects for me, clients, and fun';
      case 'journalism':
        return 'Staff and freelance reporting for Forbes.com, Mergermarket, Slate and others';
      default:
        return undefined;
    }
  }

  _loadComponent() {
    const props = this._props;
    const section = this.section;

    switch (section) {
      case 'story':
        return <Story {...props} data={this._loadContentData()} />;
      case 'projects':
        return <Projects {...props} data={this._loadContentData()} />;
      case 'journalism':
        return (
          <Article
            {...props}
            text={this._loadText()}
            data={this._loadContentData()}
          />
        );
      default:
        return undefined;
    }
  }

  _loadMenuNavigator() {
    const props = this._props;
    const section = this.section;

    switch (section) {
      case 'story':
        return (
          <ChapterNav
            {...props}
            isMenu={true}
            section={section}
            data={this._loadContentData()}
          />
        );
      case 'projects':
        return (
          <MultiProjectNav
            {...props}
            section={section}
            isProjectMenu={true}
            data={this._loadContentData()}
          />
        );
      case 'journalism':
        return (
          <ArticleNav
            {...props}
            section={section}
            data={this._loadContentData()}
          />
        );
      default:
        return undefined;
    }
  }
}
