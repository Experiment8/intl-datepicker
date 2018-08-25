import * as actions from './actions';

const initialState = {

  currentLabel : ''

}

export default function (state = initialState, { type, payload }) {

  switch(type) {

    case actions.CHANGE_CURRENT_LABEL:
      return {
        ...state,
        currentLabel: payload
      }

    default:
      return state;

  }

}
