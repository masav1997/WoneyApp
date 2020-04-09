import FormData from 'form-data'
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
    
    const form = new FormData();
    form.append('surname', payload.surname);
    form.append('email', payload.email);
    form.append('eth_wallet', payload.eth_wallet);
    form.append('ticket', {
      name: 'photo.png',
      type: 'image/jpeg',
      uri: Platform.OS === "android" ? payload.ticket : payload.ticket.replace("file://", "")});

    const { data } = yield call(api.request, form);

    if (data.code !== 0) {
      yield put({ type: WONEY_REQUEST_FAILURE, payload: data });
    } else {
      yield put({ type: WONEY_REQUEST_SUCCESS });
    }
  } catch (error) {
    yield put({ type: WONEY_REQUEST_FAILURE, payload: { message: 'Something went wrong'} });
  }
}

export default function* woneySaga() {
  yield all([takeLatest(WONEY_REQUEST, woneyRequest_saga)]);
}
