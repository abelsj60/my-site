import React from 'react';

export default function HtmlContainer(props) {
  const ContainerType = props.element;

  return (
    <ContainerType
      id={props.id}
      style={props.style}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </ContainerType>
  );
}
