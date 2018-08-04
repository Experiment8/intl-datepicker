import { compose, mapProps, withReducer } from 'recompose';

import DatepickerBody from './component';
import reducer from './services/reducer';
import * as actions from './services/actions';

const mapStateToProps = props => {
  const {

    dispatch,
    reducer

  } = props;

  return {

    ...props,
    ...reducer,

    handleLayoutChange: payload => dispatch(
      actions.changeLayout(payload)
    )
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerBody)
