import { handleActions } from 'redux-actions';

import {
  WONEY_UPDATE_DATA,
  WONEY_REQUEST_REQUEST,
  WONEY_REQUEST_SUCCESS,
  WONEY_REQUEST_FAILURE,
} from './actions';

const reducer = handleActions(
  {
    [WONEY_UPDATE_DATA]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [WONEY_REQUEST_REQUEST]: (state, action) => ({
      ...state,
      success: false,
      error: null,
    }),
    [WONEY_REQUEST_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [WONEY_REQUEST_FAILURE]: (state, action) => ({
      ...state,
      success: false,
      error: action.payload,
    }),
  },
  { data: null, success: false, error: null },
);

export default reducer;
