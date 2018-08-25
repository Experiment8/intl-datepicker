import * as actions from './actions';
import { LAYOUTS } from 'config';

const initialState = {

  batchLayout     : LAYOUTS.days,
  upperScaleLimit : false

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
        upperScaleLimit: payload
      }

    default:
      return state;

  }
}
