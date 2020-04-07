import { all } from 'redux-saga/effects';

import woneySaga from '../state/woney/saga';

export default function* storyStart() {
  yield all([woneySaga()]);
}
