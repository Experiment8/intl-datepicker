const availableBatches = ['days', 'months', 'years'];

export const getHigherBatch = currentBatch => {

  if (!currentBatch) throw new Error('[INTL-DATEPICKER] currentBatch passed to getHigherBranch is undefined.');

  let currentIdx    = availableBatches.indexOf(currentBatch);
  let higherBranch  = availableBatches[(currentIdx + 1)];

  if (higherBranch) return higherBranch;

  if (!higherBranch) throw new Error('[INTL-DATEPICKER] higherBranch has not been found, reached last branch available.');

}
