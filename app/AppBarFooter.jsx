import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from './custom/ButtonGroup.js';

export default function FooterAppBar(props) {
  const buttonGroup = new ButtonGroup(props);
  const buttons = buttonGroup.buttons;

  return (
    <section id="app-bar-menu">
      {buttons.map((button, index) => {
        return (
          <Fragment key={index}>
            <Link
              to={{
                pathname: button.link,
                state: button.state,
                hash: button.hash
              }}
              className={button.className}
              onClick={button.handleClick}
            >
              <p>{buttonGroup.formatButtonName(button.name)}</p>
            </Link>
            {button.needsBorder ? <div id="button-border" /> : null}
          </Fragment>
        );
      })}
    </section>
  );
}
