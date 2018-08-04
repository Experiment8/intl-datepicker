import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { weekDays } from 'dates/get';
import { LAYOUTS, GRID_LAYOUTS } from 'config';

const getWeekDaysGrid = batchLayout => {
  const week = weekDays();

  return week.map((day) => (
    <Grid.Column align="center" key={day.key}>
      { day.text }
    </Grid.Column>
  ));
}

export default class Subhead extends Component {

  render() {
    const {
      batchLayout
    } = this.props;

    const { width } = GRID_LAYOUTS[batchLayout];

    return(
      <Grid columns={7} style={{ maxWidth: width }}>
        <Grid.Row>
          { batchLayout === LAYOUTS.days ? getWeekDaysGrid(batchLayout) : null }
        </Grid.Row>
      </Grid>
    )
  }
}
