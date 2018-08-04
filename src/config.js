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

export const GRID_LAYOUTS = {
  [LAYOUTS.days]  : { columns: 7, rows: 5, width: 300 },
  [LAYOUTS.months]: { columns: 3, rows: 4, width: 300 },
  [LAYOUTS.years] : { columns: 3, rows: 4, width: 300 },
};
