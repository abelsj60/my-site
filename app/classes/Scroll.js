export default class Scroll {
  constructor(location) {
    this._location = location;
    this._type = location.type;
  }

  _swappingProjects(prevProps) {
    if (this._type !== 'projects') {
      return false;
    }

    const prevIndexForProjectData = prevProps.bodyState.indexForProjectData;
    const currentIndexForProjectData = this._location.params.projectNameToIndex();

    return currentIndexForProjectData !== prevIndexForProjectData;
  }

  resetTopIfNeeded(overflowRef, prevProps) {
    if (overflowRef.current.scrollTop !== 0) {
      const updateScrollTop = this._type === 'projects'
        ? this._swappingProjects(prevProps)
        : true;

      if (updateScrollTop) {
        overflowRef.current.scrollTop = 0;
      }
    }
  }
}
