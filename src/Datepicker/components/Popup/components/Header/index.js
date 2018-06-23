import React, { Component } from 'react';

import { Grid, Icon } from 'semantic-ui-react';

export default class DatepickerHeader extends Component {

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
