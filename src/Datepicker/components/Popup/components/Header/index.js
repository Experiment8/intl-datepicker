import { compose, withReducer, mapProps } from 'recompose';

import PopupHeader from './component';

import reducer from './services/reducer';
import * as actions from './services/actions';

const mapStateToProps = props => {
  const {

    reducer,
    currentDate

  } = props;

  return {
      ...props,
      ...reducer,

      onInit: () => actions.changeCurrentLabel(currentDate, props),

      onCurrentDateChange: payload => actions.changeCurrentLabel(payload, props)

  }
}

export default compose(
  withReducer('reducer', 'dispatch', reducer),
  mapProps(mapStateToProps)
)(PopupHeader)
