import shopActionTypes from './shop.types';

// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collections => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

export const fetchCollectionsFailure = error => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
});

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             dispatch(fetchCollectionsSuccess(collectionsMap));
//         }).catch(error => dispatch(fetchCollectionsFailure(error)));
//     }
// }