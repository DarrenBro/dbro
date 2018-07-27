import React, { Component } from 'react';
import { Select } from 'react-form';
import { mainPageOptions } from '../constants';
import '../styles/InfoContainer.css';

class InfoContainer extends Component {

  render() {

    return (
      <div id="setupSteps" className="collapse, code_padding">
        <div className="btn-group">
          <Select className="select_style" options={mainPageOptions} />

          <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#setupSteps">
                        Project setup steps
          </button>
        </div>

        <h2>This site was hosted free with <a href="https://surge.sh/">Surge</a></h2>
        <h3>In your project dir, run;</h3>

        <h5>npm run build</h5>
        <h5>surge</h5>
        <h5>project path - path/to/my-project/build</h5>
        <h5>domain name - anything you want! (Must end with .surge.sh)</h5>
        <h5>example script - dbro: react-scripts build && echo dbro.surge.sh > CNAME && mv CNAME build/ && surge</h5>
      </div>
    );
  }
}

export default InfoContainer;
