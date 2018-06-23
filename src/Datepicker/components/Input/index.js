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
      ...rest
    } = this.props;

    return(
      <Input icon { ...rest }>
         <input />
         <Icon name={icon} />
      </Input>
    )
  }
}
