import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Icon } from 'semantic-ui-react';

export default class DatepickerHeader extends Component {

  static propTypes = {
    onPrevClick   : PropTypes.func.isRequired,
    onNextClick   : PropTypes.func.isRequired,
    onTitleClick  : PropTypes.func
  }

  render() {

    return (
      <Grid centered columns={3} verticalAlign="middle">
        <Grid.Column width={3} textAlign="center">
          <Icon name="chevron left" />
        </Grid.Column>
        <Grid.Column width={10} textAlign="center">
          Agosto 2018
        </Grid.Column>
        <Grid.Column width={3} textAlign="center">
          <Icon name="chevron right" />
        </Grid.Column>
      </Grid>
    )
  }
}
