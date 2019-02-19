import React from 'react';

import Story from '../story/Story.jsx';
import Projects from '../projects/Projects.jsx';
import ChapterNav from '../story/ChapterNav.jsx';
import ArticleOrReverie from '../ArticleOrReverie/ArticleOrReverie.jsx';
import DesktopProjectNav from '../projects/DesktopProjectNav.jsx';
import ArticleOrReverieNav from '../article-or-reverie/ArticleOrReverieNav.jsx';

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
          <ArticleOrReverie
            {...props}
            overflowRef={ref}
            data={contentData}
            params={params}
          />
        );
      case 'reverie':
        return (
          <ArticleOrReverie
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
        return <ArticleOrReverieNav {...props} data={contentData} params={params} />;
      case 'reverie':
        return <ArticleOrReverieNav {...props} data={contentData} params={params} />;
      default:
        return undefined;
    }
  }
}
