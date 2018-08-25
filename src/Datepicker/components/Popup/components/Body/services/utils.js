import { LAYOUTS } from 'config';

import { days, months, years } from 'dates/get';

export const getLayoutContent = (layout, date) => {

  switch(layout) {

    case LAYOUTS.years:
      return years(date);

    case LAYOUTS.months:
      return months(date);

    default:
      return days(date);

  }

}
