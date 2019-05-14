import React from 'react';
import PropTypes from 'prop-types';
import '../styles/homePage.css';

const DisplayComponent = ({ picture, text }) => (
  <div>
    <img src={picture} alt={text} />
    <div className="small-text">{text}</div>
  </div>
);

DisplayComponent.propTypes = {
  picture: PropTypes.string,
  text: PropTypes.string
};

export default DisplayComponent;
