import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router';
import PageContainer from './PageContainer.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import MagicScroller from './MagicScroller.jsx';
import { splitPath } from './helpers/utils.js';

class StateManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      magicOpacity: { opacity: 0 },
      magicClicks: splitPath(this.props)[1] === '' ? 'block' : '',
      explore: 'active'
    };

    this.toggleText = this.toggleText.bind(this);
    this.setMagicOpacity = this.setMagicOpacity.bind(this);
    this.toggleMagicPointer = this.toggleMagicPointer.bind(this);
    this.turnOffActiveButtons = this.turnOffActiveButtons.bind(this);
  }

  get scrollTop() {
    return window.pageYOffset;
  }

  toggleText() {
    // Expl: https://stackoverflow.com/a/29101393/9215718

    this.setState({
      explore: this.state.explore === 'active' ? 'inactive' : 'active'
    });
  }

  turnOffActiveButtons() {
    if (this.state.explore === 'inactive') {
      this.toggleText();
    }
  }

  setMagicOpacity() {
    let finalOpacity;
    const opacityValue = (this.scrollTop - 580) / (3221 - 580);
    const opacityToString = opacityValue + '';
    const opacityFailSafe =
      this.scrollTop < 15 && this.state.magicOpacity.opacity !== 0;

    if (opacityValue > 0 && opacityValue <= 1) {
      finalOpacity = opacityToString.slice(1, 4);
    } else if (opacityValue >= 1) {
      finalOpacity = 1;
    } else if (opacityFailSafe) {
      finalOpacity = 0;
    }

    if (typeof finalOpacity !== 'string') {
      finalOpacity = finalOpacity + '';
    }

    if (finalOpacity || opacityFailSafe) {
      this.setState({
        magicOpacity: {
          opacity: finalOpacity
        }
      });
    }
  }

  toggleMagicPointer() {
    if (
      splitPath(this.props)[1] === '' &&
      this.state.magicClicks === 'block' &&
      this.scrollTop > 3220
    ) {
      this.setState({ magicClicks: '' });
    }

    if (
      splitPath(this.props)[1] === '' &&
      this.state.magicClicks === '' &&
      this.scrollTop < 3220
    ) {
      this.setState({ magicClicks: 'block' });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setMagicOpacity);
    window.addEventListener('scroll', this.toggleMagicPointer);
  }

  componentDidUpdate() {
    const location = splitPath(this.props);

    const updateMagicClicksWhenGoingHome =
      location[1] === '' &&
      this.scrollTop < 3220 &&
      this.state.magicClicks === '';
    const updateMagicClicksWhenLeavingHome =
      location[1] !== '' && this.state.magicClicks === 'block';

    if (updateMagicClicksWhenGoingHome || updateMagicClicksWhenLeavingHome) {
      this.setState({
        magicClicks: updateMagicClicksWhenGoingHome
          ? 'block'
          : updateMagicClicksWhenLeavingHome
            ? ''
            : this.state.magicClicks
      });
    }
  }

  render() {
    return (
      <Fragment>
        <PageContainer location={this.props.location}>
          <Header
            state={this.props.state}
            turnOffActiveButtons={this.turnOffActiveButtons}
          />
          <Body state={this.state} />
          <Footer state={this.state} toggleText={this.toggleText} />
        </PageContainer>
        <MagicScroller />
      </Fragment>
    );
  }
}

export default withRouter(StateManagement);
