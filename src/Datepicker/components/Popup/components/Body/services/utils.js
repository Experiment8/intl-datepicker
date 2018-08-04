import { LAYOUTS } from 'config';

import { days, months, years } from 'dates/get';

export const getLayoutContent = (layout, date) => {

  switch(layout) {

    case LAYOUTS.days:
      return days();

    case LAYOUTS.months:
      return months();

    case LAYOUTS.years:
      return years();

  }

}
