import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HomePage.css';

const HeaderComponent = ({ text }) => (
  <div>
    <header className="dbro_header">
      <h1 className="dbro_title">{text}</h1>
    </header>
  </div>
);

HeaderComponent.propTypes = {
  text: PropTypes.string
};

export default HeaderComponent;
