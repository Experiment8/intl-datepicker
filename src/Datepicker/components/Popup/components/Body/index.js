import { compose, mapProps, withReducer } from 'recompose';

import DatepickerBody from './component';
import reducer from './services/reducer';
import * as actions from './services/actions';

const mapStateToProps = props => {
  const {

    dispatch,
    reducer,

    batch

  } = props;

  return {

    ...props,
    ...reducer,

    handleLayoutChange: payload => dispatch(
      actions.changeLayout(payload)
    ),
    handleCurrentDateChange: payload => dispatch(
      actions.changeCurrentDate(payload, batch)
    )
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerBody)
