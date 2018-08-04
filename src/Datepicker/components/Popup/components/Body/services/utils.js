import { LAYOUTS } from 'config';

import { days, months, years } from 'dates/get';

export const getLayoutContent = (layout, date) => {

  switch(layout) {

    case LAYOUTS.years:
      return years();

    case LAYOUTS.months:
      return months();

    default:
      return days();

  }

}
