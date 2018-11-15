/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { dbronaOne, dbronaTwo } from '../constants';
import '../styles/HomePage.css';
import HomePageContainer from '../Containers/HomePageContainer';
import DBronaComponent from './DBronaComponent';

class HomePageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDBronaComponent: false
    };

    this.handleDbronaClick = this.handleDbronaClick.bind(this);
  }

  handleDbronaClick() {
    this.setState(prevState => ({ showDBronaComponent: !prevState.showDBronaComponent }));
  }

  render() {

    // if (this.state.showDBronaComponent) {
    //   return (
    //     <DBronaComponent />
    //   );
    // }

    return (
      <HomePageContainer>
        <div className="flex-container">
          <div onClick={this.handleDbronaClick}>
            <img
              src={this.state.showDBronaComponent ? dbronaOne : dbronaTwo}
              alt="DBrona"
            />
            <span className="small-text">DBrona</span>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/Z4vQf77YDhYgr5uUH3OGZPxYjNrPkntay2jSx3Hi0PbISmaWlFrHzY7mQSHq4gITBnq4O5xiCadMsnDpMqCFpQbFuQ0_XnInF7zSPj98-PtY-rFLuFZbXKq1YwSCpcZvnCrdxMGiu5Q"
              alt="Mario" />
            <span className="small-text">Games</span>
          </div>
          <div>
            <img
              src="https://lh3.googleusercontent.com/5Ek5-j41SeChhwSrIrv11ULC3Ge10za41zyKQG-eu3vaUjrQJ7lZilIt2fKeYObkxv3Vg5quzALDwMlniSgyFGBAexIwYTn_qfeab4cRusE5GvQLuCfdQkI_b1379mYYKeLzvjpP3Pw"
              alt="Dexter" />
            <span className="small-text">Dexter</span>
          </div>
        </div>
      </HomePageContainer>
    );
  }
}

export default HomePageComponent;

