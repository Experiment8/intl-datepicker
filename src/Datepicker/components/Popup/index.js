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

    onPrevClick: () => dispatch(
      actions.prevBatch()
    ),
    onNextClick: () => dispatch(
      actions.nextBatch()
    ),
    onTitleClick: () => dispatch(
      actions.upperBatch()
    )

  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerPopup)
