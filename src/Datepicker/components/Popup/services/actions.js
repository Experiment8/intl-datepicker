import {
  getHigherBatch,
  isUpperLimit
} from './utils';

export const NEXT_BATCH   = 'NEXT_BATCH';
export const PREV_BATCH   = 'PREV_BATCH';
export const UPPER_BATCH  = 'UPPER_BATCH';
export const UPPER_LIMIT  = 'UPPER_LIMIT';

export const prevBatch = () => ({
    type: PREV_BATCH
});

export const nextBatch = () => ({
  type: NEXT_BATCH
});

export const upperBatch = payload => ({
  type    : UPPER_BATCH,
  payload : getHigherBatch(payload)
});

export const upperLimit = payload => ({
  type    : UPPER_LIMIT,
  payload : isUpperLimit(getHigherBatch(payload))
});
