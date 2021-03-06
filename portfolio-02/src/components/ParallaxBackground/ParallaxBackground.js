import React from 'react';
import PropTypes from 'prop-types';
import {Background} from './app.style';



import './style';

const ParallaxBackground = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="parallax" style={{ color: colorPrimary }}>
     <Background/>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

ParallaxBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParallaxBackground;
