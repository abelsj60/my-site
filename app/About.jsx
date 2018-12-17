import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import bio from './data/about.md';

export default function About() {
  return (
    <main id="about">
      <section id="about-illustration" className="left" />
      <section id="about-content" className="right">
        <h1>About</h1>
        <section id="about-text-container">
          {ReactHtmlParser(marked(bio.body, { smartypants: true }))}
        </section>
      </section>
    </main>
  );
}
