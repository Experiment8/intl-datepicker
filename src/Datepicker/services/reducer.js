import * as actions from './actions';

const initialState = {

  popupOpen: false

}

export default function (state = initialState, { type }) {

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

    default:
      return state;
  }

}
