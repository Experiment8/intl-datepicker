const availableBatches = ['days', 'months', 'years'];

export const getHigherBatch = currentBatch => {

  if (!currentBatch) throw new Error('[INTL-DATEPICKER] currentBatch passed to getHigherBranch is undefined.');

  let currentIdx    = availableBatches.indexOf(currentBatch);
  let higherBranch  = availableBatches[(currentIdx + 1)];

  return higherBranch ? higherBranch : currentBatch;

}

export const isUpperLimit = higherBranch => (
  !availableBatches[availableBatches.indexOf(higherBranch) + 1]
)
