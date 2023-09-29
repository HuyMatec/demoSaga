import {all, takeEvery} from 'redux-saga/effects';
import appSaga from './appSaga';
import commentSaga from './commentSaga';

export default sagas = function* () {
  yield all([
    takeEvery('CHANGE_APP_MODE', appSaga),
    takeEvery('GET_COMMENTS', commentSaga),
  ]);
};
