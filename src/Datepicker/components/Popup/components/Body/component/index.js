import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import { GRID_LAYOUTS } from 'config';

const getBatchRows = (batchLayout, batch) => {
  let { rows, columns, width } = GRID_LAYOUTS[batchLayout];
  let gridRows = [];

  for (let r = 0; r < rows; r++) {
    const row = { key: r, cells: [] };

    for (let c = 0; c < columns; c++) {
      const idx     = (r * columns) + c;
      const column  = batch[idx];
      row.cells.push(column);
    }

    gridRows.push(row);
  }

  return (
    <Grid columns={columns} style={{ maxWidth: width }}>
      { gridRows.map((row) => (
        <Grid.Row key={row.key}>
          { row.cells.map((cell) => (
            <Grid.Column align="center" key={cell.key}>
              { cell.value }
            </Grid.Column>
          )) }
        </Grid.Row>
      )) }
    </Grid>
  );
}

export default class PopupBody extends Component {

  componentDidMount() {
    const { batchLayout } = this.props;

    this.props.handleLayoutChange(batchLayout);
  }

  render() {
    const {

      batchLayout,
      batch

    } = this.props;

    return batch.length ? getBatchRows(batchLayout, batch) : null
  }
}
