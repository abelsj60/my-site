import React from 'react';

export default function ProjectImageContainer(props) {
  const { full } = props.project.attributes;
  const { indexForProjectPics } = props.localState;
  const { captions } = props.project.attributes.details;

  return (
    <section id="main-image">
      <p>{captions[indexForProjectPics]}</p>
      <img src={full[indexForProjectPics]} alt="mainPic" />
    </section>
  );
}
