import {takeEvery} from 'redux-saga/effects';
import { SET_USER_DATA, USER_LIST} from './constants';

function* userList(){
    const url="https://dummyjson.com/users";
    let data = yield fetch(url);
    data =yield data.json();
    console.warn("data in saga", data);
    yield put({type:SET_USER_DATA})
}

function* SagaData(){
    yield takeEvery(USER_LIST, userList);
}
export default SagaData;