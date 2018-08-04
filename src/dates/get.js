import { LIMITS, EPOCH_FORMATS, DEFAULTS } from 'config';
import { Day, Month, Year } from 'dates/instances';

const getMonthLength = parsedDate => (
  new Date(
    parsedDate.getFullYear(),
    parsedDate.getMonth() + 1,
    0
  ).getDate()
);

// Week starts from Sunday
export const weekDays = (offset = DEFAULTS.startOfWeek) => {
  const weekDays  = [];

  for (let d = offset; d < (offset + 7); d++) {
    const date  = new Date(1991, 11, 15 + d, 0);
    const day   = new Day(date);
    weekDays.push(day);
  }

  return weekDays;
}

export const days = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.days,
  format      = 'numeric',
  startOfWeek = DEFAULTS.startOfWeek
) => {
  let daysBatch       = [];
  let currentYear     = currentDate.getFullYear();
  let currentMonth    = currentDate.getMonth();
  let currentWeekDay  = new Date(currentYear, currentMonth, 1, 0).getDay();

  let currentMonthDays   = getMonthLength(currentDate);
  let previousMonthDays  = currentWeekDay - startOfWeek;

  if (previousMonthDays < 0) previousMonthDays = (previousMonthDays + 7);

  let nextMonthDays = limit - currentMonthDays - previousMonthDays;

  let startingDay = -(previousMonthDays - 1);
  let endingDay   = currentMonthDays + nextMonthDays;

  for (let d = startingDay; d <= endingDay; d++) {
    let dayDate = new Date(currentYear, currentMonth, d, 0);
    let day     = new Day(dayDate);
    daysBatch.push(day);
  }

  return daysBatch;
};

export const months = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.months,
  format      = 'long'
) => {
  let monthsBatch = [];
  let currentYear = currentDate.getFullYear();

  for (let m = 0; m < LIMITS.months; m++) {
    let monthDate = new Date(currentYear, m, 1, 0);
    let month     = new Month(monthDate);
    monthsBatch.push(month);
  }

  return monthsBatch;
};

export const years = (
  currentDate = new Date(),
  dateFormat  = EPOCH_FORMATS.epoch,
  limit       = LIMITS.years,
  format      = 'numeric'
) => {
  let yearsBatch    = [];
  let currentYear   = currentDate.getFullYear();
  let startingYear  = currentYear - Math.floor(LIMITS.years / 2);
  let endingYear    = currentYear + Math.ceil(LIMITS.years / 2);

  for (let y = startingYear; y < endingYear; y++) {
    let yearDate  = new Date(y, 0, 1, 0);
    let year      = new Year(yearDate);
    yearsBatch.push(year);
  }

  return yearsBatch;
};
