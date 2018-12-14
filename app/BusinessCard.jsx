import React from 'react';

export default function BusinessCard(props) {
  const cssForStatus = props.state.showBusinessCard ? 'active' : 'inactive';

  return (
    <section id="business-card" className={cssForStatus}>
      <section id="card">
        <p id="name">James Abels</p>
        <div className="line" />
        <p>917-854-7848</p>
        <p>abelsj60_AT_gmail.com</p>
      </section>
      <div id="temp-content-box-shadow" />
    </section>
  );
}
