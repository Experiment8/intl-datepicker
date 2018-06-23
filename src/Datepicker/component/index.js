import React, { Component } from 'react';

import { Popup } from 'semantic-ui-react';
import DatepickerInput from '../components/Input';

import 'semantic-ui-css/semantic.min.css';

export default class Datepicker extends Component {

  static defaultProps = {
    popup: {}
  }

  render() {

    const {

      popup,
      input,

      popupOpen

    } = this.props;

    return (
      <Popup
        { ...popup }
        open={popupOpen}
        content="Add users to your feed"
        trigger={<DatepickerInput { ...input } />}
      />
    )
  }
}
