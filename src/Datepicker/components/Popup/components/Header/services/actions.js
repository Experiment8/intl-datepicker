import { formatAs } from 'dates/format';
import { TITLES_FORMAT } from 'config';

export const CHANGE_CURRENT_LABEL = 'CHANGE_CURRENT_LABEL';

export const changeCurrentLabel = (currentDate, props) => {
  const {
    dispatch,
    batchLayout
  } = props;

  dispatch({
    type    : CHANGE_CURRENT_LABEL,
    payload : formatAs(currentDate, TITLES_FORMAT[batchLayout])
  });
}

export const changeCurrentLabelLayout = (batchLayout, props) => {
  const {
    dispatch,
    currentDate
  } = props;

  dispatch({
    type    : CHANGE_CURRENT_LABEL,
    payload : formatAs(currentDate, TITLES_FORMAT[batchLayout])
  });
}
