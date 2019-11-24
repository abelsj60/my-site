import styled from 'styled-components';

// On scrollbars: https://stackoverflow.com/a/25561646

export default styled.div`
  overflow: auto;

  // Places scrollbar on right edge (unused experiment, may revisit)
  // On mobile, /projects might not show scrollbar — something to do with the <figure />
  padding-right: 25px; 

  // Custmize scrollbar — sort out some other time...
  // &::-webkit-scrollbar {
  //   -webkit-appearance: none;
  // }

  // &::-webkit-scrollbar:vertical {
  //   width: 1px;
  // }

  // &::-webkit-scrollbar:horizontal {
  //   height: 5px;
  // }

  // &::-webkit-scrollbar-thumb {
  //   // should match background, can't be transparent
  //   border: 0px solid black; 
  //   background-color: rgba(0, 0, 0, .1);
  }
`;
