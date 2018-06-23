import React, { Component } from 'react';

import { Input, Icon } from 'semantic-ui-react';

export default class DatepickerInput extends Component {

  static defaultProps = {
    icon        : 'calendar alternate outline',
    placeholder : ''
  }

  render() {

    const {

      icon,
      input,

      handlers: {
        handlePopupOpen,
        handlePopupClose
      }

    } = this.props;

    return(
      <Input
        { ...input }
        icon
        onClick={handlePopupOpen}
      >
         <input
           onFocus={handlePopupOpen}
         />
         <Icon name={icon} />
      </Input>
    )
  }
}
