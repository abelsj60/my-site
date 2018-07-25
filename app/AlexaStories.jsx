import React, { Component } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// Debug, page sizing changes when switching views on site

class AlexaStories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var myAction = 'https://linkedin.us18.list-manage.com/subscribe/post?u=050beb84bf76786f6650367ab&amp;id=944e0ea5ee';

    return (
      <div id='AlexaContainer'>
        <div id='AlexaPic'>
          <img id='AlexaImg' src='/test/echo-dot-shelf.jpg' />
        </div>
        <div id='Description'>
          <h1>The Alexa adventures</h1>
          <p>Join Alexa as she illustrates an adventure about the boy, his friend, and a mysterious world where magic and digital arts mix. Coming soon<em>-ish</em> to a screen near you.</p>
          <p>Sign up here to learn when it launches.</p>
          <p></p>
          <MailchimpSubscribe url={myAction} />
        </div>
      </div>
    )
  }

}

export default AlexaStories;
