import React from 'react';

export default function ProjectImageContainer(props) {
  const { full } = props.project.attributes;
  const { indexForProjectPictures } = props.localState;
  const { captions } = props.project.attributes.details;

  return (
    <section id="main-image">
      <p>{captions[indexForProjectPictures]}</p>
      <img src={full[indexForProjectPictures]} alt="mainPic" />
    </section>
  );
}
