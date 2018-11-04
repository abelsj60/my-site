import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Reverie extends Component {
  constructor(props) {
    super(props);
  }

  get date() {
    return new Date(Date.now('en-us')).toLocaleString();
  }

  render() {
    return (
      <main id="reverie">
        <section id="reverie-unused" className="left" />
        <section id="reverie-content" className="right">
          <h1>Reverie</h1>
          <h2>Pedestal sinks</h2>
          <p>{this.date}</p>
          <br />
          <p>
            Unfortunately, I have a pedestal sink. I used to think this sort of
            thing looked great. Then I got one. It's got three problems.
          </p>
          <br />
          <p>
            1. If one leans over the sink to spit when done brushing teeth, it
            will bounce back at you because these sinks tend to have flat
            bottoms.
          </p>
          <br />
          <p>
            2. The sink tends to constantly be dirty because the flat bottom
            doesn't encourage draining. Instead, cut hair from shaving and
            flotsam accumulate in the corners, on the side, really, anywher the
            designers decided to buck tradition to product good press shots.
          </p>
          <br />
          <p>
            3. There's nowhere to put stuff. The pedestal has a small little
            bezzle that holds virtually nothing. Looks great on Instagram, I
            guess, but I also suppose Kevin Systrom can afford a shelf next to
            his sink.
          </p>
        </section>
      </main>
    );
  }
}

export default withRouter(Reverie);
