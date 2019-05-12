/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Thanos from 'react-thanos';
import { headerText, dbronaOne, dbronaTwo, gamesOne, dexterOne } from '../constants';
import HeaderComponent from './HeaderComponent';
import DisplayComponent from './DisplayComponent';

class HomePageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchDBronaPicture: false,
      showDBrona: true,
      showGames: true,
      showDexter: true
    };

    this.handleDbronaClick = this.handleDbronaClick.bind(this);
    this.thanosSnap = this.thanosSnap.bind(this);
    this.thanosTimeStone = this.thanosTimeStone.bind(this);
  }

  handleDbronaClick() {
    this.setState(prevState => ({ switchDBronaPicture: !prevState.switchDBronaPicture }));
  }

  thanosSnap() {
    const chosen = Math.floor(Math.random() * Math.floor(3));

    if (chosen === 1) {
      this.setState({ showDBrona: false });
    }
    if (chosen === 2) {
      this.setState({ showGames: false });
    }
    if (chosen === 3) {
      this.setState({ showDexter: false });
    }
  }

  thanosTimeStone() {
    this.setState({ showDBrona: true, showGames: true, showDexter: true });
  }

  render() {
    return (
      <div className="center_text">

        <Thanos
          onSnap={() => this.thanosSnap()}
          onSnapReverse={() => this.thanosTimeStone()} />

        <HeaderComponent text={headerText} />

        <div className="flex-container">
          { this.state.showDBrona ?
            <div onClick={this.handleDbronaClick}>
              <DisplayComponent
                picture={this.state.switchDBronaPicture ? dbronaOne : dbronaTwo}
                text="DBrona"
              />
            </div> : null
          }

          { this.state.showGames ?
            <DisplayComponent
              picture={gamesOne}
              text="Games"
            /> : null
          }

          { this.state.showDexter ?
            <DisplayComponent
              picture={dexterOne}
              text="Dexter"
            /> : null
          }
        </div>
      </div>
    );
  }
}

export default HomePageComponent;

