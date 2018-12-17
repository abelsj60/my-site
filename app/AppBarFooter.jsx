import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ButtonGroup from './custom/ButtonGroup.js';

export default function FooterAppBar(props) {
  const buttonGroup = new ButtonGroup(props);
  const { buttons, formatButtonName } = buttonGroup;

  return (
    <section id="app-bar-menu">
      {buttons.map((button, index) => {
        const {
          name,
          hash,
          link,
          state,
          className,
          needsBorder,
          handleClick
        } = button;

        return (
          <Fragment key={index}>
            <Link
              to={{
                pathname: link,
                state: state,
                hash: hash
              }}
              className={className}
              onClick={handleClick}
            >
              <p>{formatButtonName.call(buttonGroup, name)}</p>
            </Link>
            {needsBorder ? <div id="button-border" /> : null}
          </Fragment>
        );
      })}
    </section>
  );
}
