import Location from './Location';
import StoryParams from './StoryParams';
import ProjectsParams from './ProjectsParams';
// import JournalismParams from './JournalismParams';

export default class ParentLocation extends Location {
  constructor(pathToMatch, props, prevProps) {
    super(pathToMatch, props, prevProps);

    const path = props.location.pathname;

    const splitPath = path.split('/');
    const type = splitPath[1];

    this.params = (params => {
      const paramsExist = typeof params === 'object';
      let paramsForCaller = params;

      switch (type) {
        case 'chapter':
          if (!paramsExist) {
            paramsForCaller = {
              title: splitPath[2]
            };
          }

          return new StoryParams(type, paramsForCaller);
        case 'projects':
          if (!paramsExist) {
            paramsForCaller = {
              projectName: splitPath[2],
              projectThumbnail: splitPath[3]
            };
          }

          return new ProjectsParams(type, paramsForCaller);
      }
    })(this.isExact ? this._matchPath.params : undefined);
  }
}
