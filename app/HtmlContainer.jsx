import React from 'react';

export default function HtmlContainer(props) {
  const { id, style, onClick, className, children } = props;
  const ContainerType = props.element;

  return (
    <ContainerType
      id={id}
      style={style}
      onClick={onClick}
      className={className}
    >
      {children}
    </ContainerType>
  );
}
