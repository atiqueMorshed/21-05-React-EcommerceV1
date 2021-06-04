import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCollectionsForCollectionPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForCollectionPreview
});

export default connect(mapStateToProps)(CollectionsOverview);