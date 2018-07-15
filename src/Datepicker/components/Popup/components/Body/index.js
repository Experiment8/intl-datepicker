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
    ...reducer
  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(DatepickerBody)
