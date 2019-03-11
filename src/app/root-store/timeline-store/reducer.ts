import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_TIMELINE: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_TIMELINE_SUCCESS: {
      return featureAdapter.upsertOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_TIMELINE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
