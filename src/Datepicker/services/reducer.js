import * as actions from './actions';

const initialState = {

  popupOpen   : false,

  currentDate : new Date()

}

export default function (state = initialState, { type, payload }) {

  switch(type) {

    case actions.OPEN_POPUP:
      return {
        ...state,
        popupOpen: true
      }

    case actions.CLOSE_POPUP:
      return {
        ...state,
        popupOpen: false
      }

    case actions.UPDATE_CURRENT_DATE:
      return {
        ...state,
        currentDate: payload
      }

    default:
      return state;
  }

}
