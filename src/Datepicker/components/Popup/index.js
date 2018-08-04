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

    handlePrevClick: () => dispatch(
      actions.prevBatch()
    ),
    handleNextClick: () => dispatch(
      actions.nextBatch()
    ),
    handleTitleClick: (event, payload) => {
      dispatch(actions.upperBatch(payload))
      dispatch(actions.upperLimit(payload))
    }
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerPopup)
