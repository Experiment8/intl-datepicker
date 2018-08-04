import React, { Component, Fragment } from 'react';

export default class PopupBody extends Component {

  componentDidMount() {
    const {
      batchLayout
    } = this.props;

    this.props.handleLayoutChange(batchLayout);
  }

  render() {

    return (
      <Fragment></Fragment>
    )
  }
}
