import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as api from '../../api/woney';

import {
  WONEY_REQUEST,
  WONEY_REQUEST_REQUEST,
  WONEY_REQUEST_SUCCESS,
  WONEY_REQUEST_FAILURE,
} from './actions';

function* woneyRequest_saga(action) {
  const { payload } = action;

  try {
    yield put({ type: WONEY_REQUEST_REQUEST });
    const { data } = yield call(api.request, payload);

    if (data.code !== 0) {
      throw new Error(data.message);
    }

    yield put({ type: WONEY_REQUEST_SUCCESS });
  } catch (error) {
    yield put({ type: WONEY_REQUEST_FAILURE, payload: error });
  }
}

export default function* woneySaga() {
  yield all([takeLatest(WONEY_REQUEST, woneyRequest_saga)]);
}
