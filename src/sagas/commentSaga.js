import {put, call} from 'redux-saga/effects';
import getComment from '../actions/getComment';

export default function* (action) {
  console.log('Comment saga -Action', action);
  const comments = yield call(getComment); //call api
  console.log('Comments: ', comments);
  yield put({type: 'GET_COMMENTS_SUCCESS', payload: comments});
}
