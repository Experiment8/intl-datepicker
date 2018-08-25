import { compose, mapProps, withReducer } from 'recompose';

import DatepickerPopup from './component';
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

    handlePrevClick : (event, payload) => actions.prevBatch(payload, props),
    handleNextClick : (event, payload) => actions.nextBatch(payload, props),
    handleTitleClick: (event, payload) => {
      dispatch(actions.upperBatch(payload))
      dispatch(actions.upperScaleLimit(payload))
    }
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerPopup)
