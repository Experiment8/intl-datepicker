import { getLayoutContent } from './utils';

export const CHANGE_LAYOUT        = 'CHANGE_LAYOUT';
export const CHANGE_CURRENT_DATE  = 'CHANGE_CURRENT_DATE';

export const changeLayout = payload => ({
  type    : CHANGE_LAYOUT,
  payload : getLayoutContent(payload)
});

export const changeCurrentDate = (payload, batch) => ({
  type    : CHANGE_CURRENT_DATE,
  payload : getLayoutContent(batch, payload)
});
