import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chapter from './Chapter.jsx';

class ChapterControl extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var urlChNum = this.props.match.params.num;

    var urlCheck = function(param) {
      var goHere = param;
      console.log('before:', goHere);

      if(goHere > 4) {
        goHere = 1;
      }

      console.log('after:', goHere);
      return goHere;
    }

    return (
      <Route path={'/chapter/:' + urlCheck(urlChNum)}component={Chapter} />
    )
  }

}

export default ChapterControl;
