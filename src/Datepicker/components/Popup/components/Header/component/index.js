import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Icon } from 'semantic-ui-react';

export default class DatepickerHeader extends Component {

  static propTypes = {
    handlePrevClick   : PropTypes.func.isRequired,
    handleNextClick   : PropTypes.func.isRequired,
    handleTitleClick  : PropTypes.func
  }

  componentDidMount() {
    this.props.onCurrentDateChange(this.props.currentDate)
  }

  componentWillReceiveProps({ currentDate }) {
    if (currentDate !== this.props.currentDate) {
      this.props.onCurrentDateChange(currentDate)
    }
  }

  render() {

    const {

      currentLabel,

      upperScaleLimit,
      batchLayout,

      handlePrevClick,
      handleNextClick,
      handleTitleClick

    } = this.props;

    return (
      <Grid centered columns={3} verticalAlign="middle">
        <Grid.Column
          width={3}
          textAlign="center"
          onClick={(e) => handlePrevClick(e, batchLayout)}>
          <Icon name="chevron left" />
        </Grid.Column>
        <Grid.Column
          width={10}
          textAlign="center"
          onClick={(e) => { if (!upperScaleLimit) handleTitleClick(e, batchLayout)}}>
          { currentLabel }
        </Grid.Column>
        <Grid.Column
          width={3}
          textAlign="center"
          onClick={(e) => handleNextClick(e, batchLayout)}>
          <Icon name="chevron right" />
        </Grid.Column>
      </Grid>
    )
  }
}
