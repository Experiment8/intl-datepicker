import { makeEnum } from 'utils';

export const DEFAULTS = {
  startOfWeek: 0
}

export const LIMITS = {
  days  : 42,
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
  [LAYOUTS.days]  : { columns: 7, rows: 6, width: 350 },
  [LAYOUTS.months]: { columns: 3, rows: 4, width: 350 },
  [LAYOUTS.years] : { columns: 3, rows: 4, width: 350 },
};
