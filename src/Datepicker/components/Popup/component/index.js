import React, { Component } from 'react';

import DatepickerHead from '../components/Header';

export default class extends Component {

  render() {

    return (
      <DatepickerHead { ...this.props } />
    )
  }
}
