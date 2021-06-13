import {call, takeLatest, put, all} from 'redux-saga/effects';

import shopActionTypes from './shop.types';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = yield firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap)); // put works like dispatch
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}