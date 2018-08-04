import { makeEnum } from 'utils';

export const LIMITS = {
  days  : 35, // fill up 7 columns and 5 lines
  months: 12,
  years : 12
};

export const LAYOUTS = makeEnum({
  days  : 'days',
  months: 'months',
  years : 'years'
});

export const EPOCH_FORMATS = makeEnum({
  epoch       : 'epoch',
  epochDay    : 'epochDay',
  epochMonth  : 'epochMonth',
  epochYear   : 'epochYear'
});
