/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable-next-line class-methods-use-this */
import React, { Component } from 'react';
import Thanos from 'react-thanos';
import _ from 'underscore';
import { headerText, thanosText, timeStoneText,
  dbronaUnwell, gameUnwell, dexterUnwell, tagUnwell, twigsyUnwell, appearancesUnwell, litUnwell,
  dbronaOne, dbronaTwo, dbronaThree,
  gamesOne, gamesTwo,
  dexterOne, dexterTwo,
  tagOne, tagTwo,
  twigsyOne,
  gotThronesOne, gotThronesTwo,
  contenders,
  litOne } from '../constants';
import HeaderComponent from './HeaderComponent';
import DisplayComponent from './DisplayComponent';
import '../styles/homePage.css';
import '../styles/thanosDust.css';

class HomePageComponent extends Component {

  static destinyAlwaysArrives() {
    return _.shuffle(contenders).slice(0, contenders.length / 2);
  }

  constructor(props) {
    super(props);
    this.state = {
      thanosSnapped: false,
      switchDBronaPicture: false,
      switchGamePicture: false,
      switchDexterPicture: false,
      switchTagPicture: false,
      switchAppearancePicture: false,
      switchLitPicture: false,
      showDBrona: true,
      showGames: true,
      showDexter: true,
      showTag: true,
      showTwigsy: true,
      showAppearances: true,
      showLit: true
    };

    this.handleDbronaClick = this.handleDbronaClick.bind(this);
    this.handleGamesClick = this.handleGamesClick.bind(this);
    this.handleDexterClick = this.handleDexterClick.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.handleAppearancesClick = this.handleAppearancesClick.bind(this);

    this.thanosSnap = this.thanosSnap.bind(this);
    this.timeStone = this.timeStone.bind(this);
  }

  handleDbronaClick() {
    this.setState(prevState => ({ switchDBronaPicture: !prevState.switchDBronaPicture }));
  }

  handleGamesClick() {
    this.setState(prevState => ({ switchGamePicture: !prevState.switchGamePicture }));
  }

  handleDexterClick() {
    this.setState(prevState => ({ switchDexterPicture: !prevState.switchDexterPicture }));
  }

  handleTagClick() {
    this.setState(prevState => ({ switchTagPicture: !prevState.switchTagPicture }));
  }

  handleAppearancesClick() {
    this.setState(prevState => ({ switchAppearancePicture: !prevState.switchAppearancePicture }));
  }

  handleLitClick() {
    this.setState(prevState => ({ switchLitPicture: !prevState.switchLitPicture }));
  }

  thanosSnap() {
    const chosen = HomePageComponent.destinyAlwaysArrives();

    for (let i = 0; i < chosen.length; i++) {
      const state = chosen[i];
      const stateUpdate = {};
      stateUpdate[state] = false;
      this.setState(stateUpdate);
    }
    this.setState({ thanosSnapped: true });
  }

  timeStone() {
    this.setState({ showDBrona: true,
      showGames: true,
      showDexter: true,
      showTag: true,
      showTwigsy: true,
      showAppearances: true,
      showLit: true,
      thanosSnapped: false });
  }

  render() {
    return (
      <div className="center_text">
        <HeaderComponent text={headerText} />

        { this.state.thanosSnapped ? <div className="timeStoneText">{timeStoneText}</div> : <div className="thanosText">{thanosText}</div> }

        <Thanos
          onSnap={() => this.thanosSnap()}
          onSnapReverse={() => this.timeStone()} />

        <div className="flex-container">

          <div className={this.state.showDBrona ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleDbronaClick}>
            <div className="unwellText">
              <div className={this.state.showDBrona ? 'unwell' : ''}>{dbronaUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchDBronaPicture ? dbronaOne : dbronaThree}
              text="DBrona" />
          </div>

          <div className={this.state.showGames ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleGamesClick}>
            <div className="unwellText">
              <div className={this.state.showGames ? 'unwell' : ''}>{gameUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchGamePicture ? gamesOne : gamesTwo}
              text="Games" />
          </div>

          <div className={this.state.showDexter ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleDexterClick}>
            <div className="unwellText">
              <div className={this.state.showDexter ? 'unwell' : ''}>{dexterUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchDexterPicture ? dexterOne : dexterTwo}
              text="Dexter" />
          </div>

          <div className={this.state.showTag ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleTagClick}>
            <div className="unwellText">
              <div className={this.state.showTag ? 'unwell' : ''}>{tagUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchTagPicture ? tagOne : tagTwo}
              text="Tag" />
          </div>

          <div className={this.state.showTwigsy ? 'timeStoneReturn' : 'thanosSnap'}>
            <div className="unwellText">
              <div className={this.state.showTwigsy ? 'unwell' : ''}>{twigsyUnwell}</div>
            </div>
            <DisplayComponent
              picture={twigsyOne}
              text="Twigsy" />
          </div>

          <div className={this.state.showAppearances ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleAppearancesClick}>
            <div className="unwellText">
              <div className={this.state.showAppearances ? 'unwell' : ''}>{appearancesUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchAppearancePicture ? gotThronesOne : gotThronesTwo}
              text="Appearances" />
          </div>

          <div className={this.state.showLit ? 'timeStoneReturn' : 'thanosSnap'} onClick={this.handleLitClick}>
            <div className="unwellText">
              <div className={this.state.showLit ? 'unwell' : ''}>{litUnwell}</div>
            </div>
            <DisplayComponent
              picture={this.state.switchLitPicture ? litOne : litOne}
              text="LIT" />
          </div>

        </div>
      </div>
    );
  }
}

export default HomePageComponent;
