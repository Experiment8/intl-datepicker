import { LAYOUTS, LIMITS } from 'config';
import { decompose } from 'dates/convert';

const availableBatches = Object.values(LAYOUTS);

export const getPrevBatch = (currentDate, batchLayout) => {
  let { year, month } = decompose(currentDate);

  switch(batchLayout) {

    case LAYOUTS.years:
      let yearsOffset = Math.round(LIMITS.years / 2);
      return new Date(year - yearsOffset, month, 1, 0);

    case LAYOUTS.months:
      return new Date(year - 1, month, 1, 0);

    default:
      return new Date(year, month - 1, 1, 0);

  }
}

export const getNextBatch = (currentDate, batchLayout) => {

}

export const getHigherBatch = currentBatch => {

  if (!currentBatch) throw new Error('[INTL-DATEPICKER] currentBatch passed to getHigherBranch is undefined.');

  let currentIdx    = availableBatches.indexOf(currentBatch);
  let higherBranch  = availableBatches[(currentIdx + 1)];

  return higherBranch ? higherBranch : currentBatch;

}

export const isupperScaleLimit = higherBranch => (
  !availableBatches[availableBatches.indexOf(higherBranch) + 1]
)
