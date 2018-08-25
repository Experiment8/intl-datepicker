import {
  getPrevBatch,
  getNextBatch,
  getHigherBatch,
  isupperScaleLimit
} from './utils';

export const NEXT_BATCH   = 'NEXT_BATCH';
export const PREV_BATCH   = 'PREV_BATCH';
export const UPPER_BATCH  = 'UPPER_BATCH';
export const UPPER_LIMIT  = 'UPPER_LIMIT';

export const prevBatch = (payload, props) => {
  const {
    currentDate, handleCurrentDate, dispatch
  } = props;

  const newDate = getPrevBatch(currentDate, payload);

  dispatch({
    type    : PREV_BATCH,
    payload : newDate
  });

  handleCurrentDate(newDate);
};

export const nextBatch = (payload, props) => {
  const {
    currentDate, handleCurrentDate, dispatch
  } = props;

  dispatch({
    type    : NEXT_BATCH,
    payload : getNextBatch(currentDate, payload)
  })
};

export const upperBatch = payload => ({
  type    : UPPER_BATCH,
  payload : getHigherBatch(payload)
});

export const upperScaleLimit = payload => ({
  type    : UPPER_LIMIT,
  payload : isupperScaleLimit(getHigherBatch(payload))
});
