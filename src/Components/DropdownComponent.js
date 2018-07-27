import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import FontAwesome from 'react-fontawesome';
import { mainPageOptions } from '../constants';

class DropdownComponent extends Component {

  render() {
    return (
      <div>
        <Dropdown options={mainPageOptions} value="Options" />
        <FontAwesome
          className="super-crazy-colors"
          name="caret-down"
          size="lg"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
      </div>
    );
  }
}

export default DropdownComponent;

