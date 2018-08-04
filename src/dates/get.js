import { LIMITS, EPOCH_FORMATS } from 'config';
import { Day } from 'dates/instances';

const getMonthLength = parsedDate => (
  new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth() + 1,
    0
  ).getDate()
);

export const days = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.days,
  format      = 'numeric'
) => {
  const daysContent = [];

  const currentYear   = currentDate.getFullYear();
  const currentMonth  = currentDate.getMonth();

  let currentMonthDays    = getMonthLength(currentDate);
  let previousMonthDays   = Math.floor((limit - currentMonthDays) / 2);
  let nextMonthDays       = Math.ceil((limit - currentMonthDays) / 2);

  let startingDay = -(previousMonthDays - 1);
  let endingDay   = currentMonthDays + nextMonthDays;

  for (let i = startingDay; i <= endingDay; i++) {
    let dayDate = new Date(currentYear, currentMonth, i, 0);
    let day     = new Day(dayDate);
    daysContent.push(day);
  }

  return daysContent;
};

export const months = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.months,
  format      = 'long'
) => {
};

export const years = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.years,
  format      = 'numeric'
) => {
};
