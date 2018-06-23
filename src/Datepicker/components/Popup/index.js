import { compose, mapProps } from 'recompose';

import DatepickerPopup from './component';

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
  mapProps(mapStateToProps)
)(DatepickerPopup)
