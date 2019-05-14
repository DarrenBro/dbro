/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Thanos from 'react-thanos';
import { headerText, thanosText, timeStoneText,
  dbronaUnwell, gameUnwell, dexterUnwell, hobbiesUnwell, twigsyUnwell, appearancesUnwell,
  dbronaOne, dbronaTwo,
  gamesOne,
  dexterOne,
  tagOne,
  twigsyOne,
  gotThrones } from '../constants';
import HeaderComponent from './HeaderComponent';
import DisplayComponent from './DisplayComponent';
import '../styles/homePage.css';
import '../styles/thanosDust.css';

class HomePageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thanosSnapped: false,
      switchDBronaPicture: false,
      showDBrona: true,
      showGames: true,
      showDexter: true,
      showHobbies: true,
      twigsy: true,
      appearances: true
    };

    this.handleDbronaClick = this.handleDbronaClick.bind(this);
    this.thanosSnap = this.thanosSnap.bind(this);
    this.thanosTimeStone = this.thanosTimeStone.bind(this);
  }

  handleDbronaClick() {
    this.setState(prevState => ({ switchDBronaPicture: !prevState.switchDBronaPicture }));
  }

  thanosSnap() {
    const chosen = Math.floor(Math.random() * Math.floor(5));
    // const chosen = 0;

    if (chosen === 0) {
      this.setState({ showDBrona: false, thanosSnapped: true });
    }
    if (chosen === 1) {
      this.setState({ showGames: false, thanosSnapped: true });
    }
    if (chosen === 2) {
      this.setState({ showDexter: false, thanosSnapped: true });
    }
    if (chosen === 3) {
      this.setState({ showHobbies: false, thanosSnapped: true });
    }
    if (chosen === 4) {
      this.setState({ twigsy: false, thanosSnapped: true });
    }
    if (chosen === 5) {
      this.setState({ appearances: false, thanosSnapped: true });
    }
  }

  thanosTimeStone() {
    this.setState({ showDBrona: true,
      showGames: true,
      showDexter: true,
      showHobbies: true,
      twigsy: true,
      appearances: true,
      thanosSnapped: false });
  }

  render() {

    return (
      <div className="center_text">

        <HeaderComponent text={headerText} />

        { this.state.thanosSnapped ? <div className="timeStoneText">{timeStoneText}</div> : <div className="thanosText">{thanosText}</div> }

        <Thanos
          onSnap={() => this.thanosSnap()}
          onSnapReverse={() => this.thanosTimeStone()} />

        <div className="flex-container">
          <div className={this.state.showDBrona ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleDbronaClick}>
            <div className="unwellText">
              <div className={this.state.showDBrona ? 'unwell' : ''}>{dbronaUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchDBronaPicture ? dbronaOne : dbronaTwo}
              text="DBrona" />
          </div>

          <div className={this.state.showGames ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.showGames ? 'unwell' : ''}>{gameUnwell}</div>
            </div>
            <DisplayComponent
              picture={gamesOne}
              text="Games" />
          </div>

          <div className={this.state.showDexter ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.showDexter ? 'unwell' : ''}>{dexterUnwell}</div>
            </div>
            <DisplayComponent
              picture={dexterOne}
              text="Dexter" />
          </div>

          <div className={this.state.showHobbies ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.showHobbies ? 'unwell' : ''}>{hobbiesUnwell}</div>
            </div>
            <DisplayComponent
              picture={tagOne}
              text="Hobbies" />
          </div>

          <div className={this.state.twigsy ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.twigsy ? 'unwell' : ''}>{twigsyUnwell}</div>
            </div>
            <DisplayComponent
              picture={twigsyOne}
              text="Twigsy" />
          </div>

          <div className={this.state.appearances ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.appearances ? 'unwell' : ''}>{appearancesUnwell}</div>
            </div>
            <DisplayComponent
              picture={gotThrones}
              text="Appearances" />
          </div>

        </div>
      </div>
    );
  }
}

export default HomePageComponent;

