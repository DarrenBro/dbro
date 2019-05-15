import React from 'react';
import PropTypes from 'prop-types';
import '../styles/homePage.css';

const DisplayComponent = ({ picture, text }) => (
  <div>
    <img className="imageResize" src={picture} alt={text} />
    <div className="imageText">{text}</div>
  </div>
);

DisplayComponent.propTypes = {
  picture: PropTypes.string,
  text: PropTypes.string
};

export default DisplayComponent;
