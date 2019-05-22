import ArticleOrReverie from '../article-n-reverie/ArticleOrReverie.jsx';
import ArticleOrReverieNav from '../article-n-reverie/ArticleOrReverieNav.jsx';
import Content from './Content.js';
import MultiProjectNav from '../projects/MultiProjectNav.jsx';
import Projects from '../projects/Projects.jsx';
import React from 'react';
import Story from '../story/Story.jsx';

export default class ComponentData {
  constructor(caller) {
    const content = new Content(caller);

    this._caller = caller;
    this._contentData = content.getContentData();
  }

  getSection(props, ref, params) {
    const caller = this._caller;
    const contentData = this._contentData;

    let Section;

    switch (caller) {
      case 'chapter':
        Section = Story;
        break;
      case 'journalism':
        Section = ArticleOrReverie;
        break;
      case 'projects':
        Section = Projects;
        break;
      case 'reverie':
        Section = ArticleOrReverie;
        break;
      default:
        return undefined;
    }

    return (
      <Section
        {...props}
        data={contentData}
        // Only used by '/chapter'.
        overflowRef={ref}
        params={params}
      />
    );
  }

  getMenuContent(props, params) {
    const caller = this._caller;
    const contentData = this._contentData;

    let MenuContent;

    switch (caller) {
      case 'journalism':
        MenuContent = ArticleOrReverieNav;
        break;
      case 'projects':
        MenuContent = MultiProjectNav;
        break;
      case 'reverie':
        MenuContent = ArticleOrReverieNav;
        break;
      default:
        return undefined;
    }

    return (
      <MenuContent
        {...props}
        data={contentData}
        params={params}
      />
    );
  }
}
