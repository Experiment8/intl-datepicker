import React, { Component } from 'react';

import { Popup } from 'semantic-ui-react';
import DatepickerInput from '../components/Input';
import DatepickerPopup from '../components/Popup';

import 'semantic-ui-css/semantic.min.css';

export default class Datepicker extends Component {

  static defaultProps = {
    popup: {}
  }

  render() {

    const {

      icon,
      popup,
      input,

      popupOpen,

      ...rest

    } = this.props;

    return (
      <Popup
        { ...popup }
        flowing
        open={popupOpen}
        content={<DatepickerPopup {...this.props} />}
        trigger={<DatepickerInput icon={icon} input={input} {...rest} />}
      />
    )
  }
}
