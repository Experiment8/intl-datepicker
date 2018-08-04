import * as actions from './actions';

const initialState = {
  batchLayout: 'days',
  upperLimit : false
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

    case actions.UPPER_LIMIT:
      return {
        ...state,
        upperLimit: payload
      }

    default:
      return state;

  }
}
