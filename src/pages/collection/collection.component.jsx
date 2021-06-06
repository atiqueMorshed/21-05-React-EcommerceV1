import React from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {CollectionPageContainer, CollectionPageTitles, CollectionPageItemsContainer} from './collection.styles';
// import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    if(collection) {
        const {title, items} = collection;
        return(
            <CollectionPageContainer>
                <CollectionPageTitles>{title}</CollectionPageTitles>
                <CollectionPageItemsContainer>
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </CollectionPageItemsContainer>
            </CollectionPageContainer>
        )
    } else {
        return <Redirect to='/'/>
    }
    
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);