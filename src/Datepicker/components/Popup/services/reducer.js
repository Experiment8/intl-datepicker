import * as actions from './actions';

const initialState = {
  batchLayout: 'days'
};

export default function (state = initialState, { type, payload }) {

  switch(type) {

    case actions.PREV_BATCH:
      return state;

    case actions.NEXT_BATCH:
      return state;

    case actions.UPPER_BATCH:
      return {
        ...state,
        batchLayout: payload
      }

    default:
      return state;

  }
}
