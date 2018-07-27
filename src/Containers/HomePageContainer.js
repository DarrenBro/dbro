import React, { Component } from 'react';
import '../styles/HomePage.css';

class HomePageContainer extends Component {
  render() {

    return (
      <div className="center_text">
        <header className="dbro_header">
          <h1 className="dbro_title">Welcome to DBro&apos;s Space ;)</h1>
        </header>

        {this.props.children}

      </div>
    );
  }
}

export default HomePageContainer;
