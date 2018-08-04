import * as actions from './actions';

const initialState = {
  batch: []
}

export default function (state = initialState, { type, payload }) {

  switch(type) {

    case actions.CHANGE_LAYOUT:
      return {
        ...state,
        batch: payload
      }

    default:
      return state;

  }
}
