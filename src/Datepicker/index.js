import { compose, mapProps, withReducer } from 'recompose';

import Datepicker from './component';
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

    handlers: {
      handlePopupOpen: () => dispatch(
        actions.openPopup()
      ),
      handlePopupClose: () => dispatch(
        actions.closePopup()
      )
    }
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(Datepicker)
