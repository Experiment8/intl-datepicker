import React, { Component, Fragment } from 'react';

import DatepickerHead from '../components/Header';
import DatepickerBody from '../components/Body';

export default class extends Component {

  render() {

    return (
      <Fragment>
        <DatepickerHead { ...this.props } />
        <DatepickerBody { ...this.props } />
      </Fragment>
    )
  }
}
