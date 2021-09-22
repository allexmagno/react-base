import { put, call, all, takeLatest } from 'redux-saga/effects';
import {toast} from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () => new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
}));

function* exampleRequest(){
    try {
        yield call(requisicao);
        yield put(actions.success());
    }catch (e){
        toast.error('falhou');
        yield put(actions.failure());
    }
}

export default all([
    takeLatest(types.REQUEST, exampleRequest)
]);