import React from 'react';

import Story from '../story/Story.jsx';
import Reverie from '../reverie/Reverie.jsx';
import Projects from '../projects/Projects.jsx';
import Article from '../journalism/Article.jsx';
import ArticleNav from '../journalism/ArticleNav.jsx';
import ChapterNav from '../story/ChapterNav.jsx';
import ReverieNav from '../reverie/ReverieNav.jsx';
import DesktopProjectNav from '../projects/DesktopProjectNav.jsx';

import Content from './Content.js';

export default class ComponentData {
  constructor(type) {
    const c = new Content(type);

    this._type = type;
    this._contentData = c.getContentData();
  }

  getSection(props, ref, params) {
    const type = this._type;
    const contentData = this._contentData;

    switch (type) {
      case 'chapter':
        return (
          <Story
            {...props}
            overflowRef={ref}
            data={contentData}
            params={params}
          />
        );
      case 'projects':
        return (
          <Projects
            {...props}
            overflowRef={ref}
            data={contentData}
            params={params}
          />
        );
      case 'journalism':
        return (
          <Article
            {...props}
            overflowRef={ref}
            data={contentData}
            params={params}
          />
        );
      case 'reverie':
        return (
          <Reverie
            {...props}
            overflowRef={ref}
            data={contentData}
            params={params}
          />
        );
      default:
        return undefined;
    }
  }

  getMenuComponent(props, params) {
    const type = this._type;
    const contentData = this._contentData;

    switch (type) {
      case 'chapter':
        return <ChapterNav {...props} data={contentData} params={params} />;
      case 'projects':
        return (
          <DesktopProjectNav {...props} data={contentData} params={params} />
        );
      case 'journalism':
        return <ArticleNav {...props} data={contentData} params={params} />;
      case 'reverie':
        return <ReverieNav {...props} data={contentData} params={params} />;
      default:
        return undefined;
    }
  }
}
