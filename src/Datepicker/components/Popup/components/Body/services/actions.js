import { getLayoutContent } from './utils';

export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';

export const changeLayout = payload => ({
  type    : CHANGE_LAYOUT,
  payload : getLayoutContent(payload)
});
