import React from 'react';

export default function BusinessCard(props) {
  return (
    <section id="business-card" className={props.state.contact}>
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
