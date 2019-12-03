import React from 'react';
import styled from 'styled-components';

// Try to run animations on a separate thread, strategy warrants more investigation:
// https://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css
// Revisit: https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108

export default styled.img`
  position: absolute;
  display: block;
  object-fit: cover; // Use if using <img>
  font-family: 'object-fit: cover;';
  // Scale image to fully fit element
  // https://stackoverflow.com/a/28439444
  width: 100%;
  height: 100%;
  pointer-events: none;
  // With luck, will-change will transform image to bitmap for smoother transforms.
  // Takes a beat, so may not be done in practice before first transition...
  // Added anyway.
  ${p => p.spellLevel > 0 && 'will-change: transform'};
  opacity: ${p => p.inCity ? '1' : '0'};
  transform: ${p => p.inCity ? 'scale(1)' : 'scale(1.48)'}  translateZ(0px);
  transform-origin: 50% ${p => p.inCity ? '-3%' : '-6%'};
  // Transition used for background swap. Opacity bezier curve should match that used by ForrestBackground.
  // Added a slight delay to both transitions to give the browser a second to breathe.
  // Also, mental note --> The cubic-bezier curve is the best. I tested extensively.
  transition: transform 1.75s .05s, opacity 1.35s .05s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${p => !p.inCity && p.spellLevel < 5 ? '-2' : '0'};
`;
