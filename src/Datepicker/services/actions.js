export const OPEN_POPUP   = 'OPEN_POPUP';
export const CLOSE_POPUP  = 'CLOSE_POPUP';

export const UPDATE_CURRENT_DATE = 'UPDATE_CURRENT_DATE';

export const openPopup = () => ({
  type: OPEN_POPUP
});

export const closePopup = () => ({
  type: CLOSE_POPUP
});

export const updateCurrentDate = payload => ({
  type: UPDATE_CURRENT_DATE,
  payload
});
