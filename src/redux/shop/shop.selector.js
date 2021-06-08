import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

// export const selectCollectionsForCollectionPreview = createSelector(
//     [selectCollections],
//     (collections) => Object.keys(collections).map(key => collections[key])
// );

export const selectCollectionsForCollectionPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.values(collections) : []
);

export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectCollections],
        (collections) => collections ? collections[collectionUrlParam] : null
    )
);