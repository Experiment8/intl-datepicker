import * as actions from './actions';

const initialState = {
  content: []
}

export default function (state, initialState, { type, payload }) {

  switch(type) {

    case actions.CHANGE_LAYOUT:
      content: payload

    default:
      return state;

  }
}
