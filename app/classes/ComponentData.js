import ArticleOrReverie from '../article-n-reverie/ArticleOrReverie.jsx';
import ArticleOrReverieNav from '../article-n-reverie/ArticleOrReverieNav.jsx';
import Content from './Content.js';
import DesktopProjectNav from '../projects/DesktopProjectNav.jsx';
import Projects from '../projects/Projects.jsx';
import React from 'react';
import Story from '../story/Story.jsx';

export default class ComponentData {
  constructor(type) {
    const c = new Content(type);

    this._type = type;
    this._contentData = c.getContentData();
  }

  getSection(props, ref, params) {
    const type = this._type;
    const contentData = this._contentData;

    let Section;

    switch (type) {
      case 'chapter':
        Section = Story;
        break;
      case 'projects':
        Section = Projects;
        break;
      case 'journalism':
        Section = ArticleOrReverie;
        break;
      case 'reverie':
        Section = ArticleOrReverie;
        break;
      default:
        return undefined;
    }

    return <Section
      {...props}
      overflowRef={ref}
      data={contentData}
      params={params}
    />;
  }

  getMenuComponent(props, params) {
    const type = this._type;
    const contentData = this._contentData;

    let MenuContent;

    switch (type) {
      case 'projects':
        MenuContent = DesktopProjectNav;
        break;
      case 'journalism':
        MenuContent = ArticleOrReverieNav;
        break;
      case 'reverie':
        MenuContent = ArticleOrReverieNav;
        break;
      default:
        return undefined;
    }

    return <MenuContent {...props} data={contentData} params={params} />;
  }
}
