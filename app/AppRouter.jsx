import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import SiteHeader from './SiteHeader.jsx';
import Home from './Home.jsx';
import Chapter from './Chapter.jsx';
import Footer from './Footer.jsx';
import NotFound from './NotFound.jsx';
import Projects from './Projects.jsx';
import JandL from './JandL.jsx';
import Topics from './Topics.jsx';
import ParTest from './ParTest.jsx';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
};

const sectionStyles = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column'
};

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='APageDiv' style={pageStyle}>
        <div id='ASectionDiv' style={sectionStyles}>
          <SiteHeader />
          <Switch>
            <Route path='/topics' component={Topics} />
            <Route exact path='/chapter' component={Chapter} />
            <Route exact path='/chapter/:num' component={Chapter} />
            <Route path='/projects' component={Projects} />
            <Route path='/jnl' component={JandL} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;

// this.refs
