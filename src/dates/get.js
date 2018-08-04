import { LIMITS, EPOCH_FORMATS, DEFAULTS } from 'config';
import { Day } from 'dates/instances';

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
  const formatter = new Intl.DateTimeFormat('en-GB', { weekday: 'short' });

  for (let d = offset; d < (offset + 7); d++) {
    const date  = new Date(1991, 11, 15 + d, 0);
    const day   = new Day(date);

    day.text = formatter.format(date);

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
  const daysContent = [];

  const currentYear   = currentDate.getFullYear();
  const currentMonth  = currentDate.getMonth();

  let currentMonthDays    = getMonthLength(currentDate);
  let previousMonthDays   = Math.floor((limit - currentMonthDays) / 2);
  let nextMonthDays       = Math.ceil((limit - currentMonthDays) / 2);

  let startingDay = -(previousMonthDays - 1);
  let endingDay   = currentMonthDays + nextMonthDays;

  let weekDayOffset = new Date(currentYear, currentMonth, startingDay, 0).getDay() - startOfWeek;

  for (let i = (startingDay - weekDayOffset); i <= endingDay; i++) {
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
