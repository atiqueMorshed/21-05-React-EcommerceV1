import React from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    if(collection) {
        const {title, items} = collection;
        return(
            <div className='collection-page'>
                <h2 className='title'>{title}</h2>
                <div className='items'>
                    {
                        items.map(item => <CollectionItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        )
    } else {
        return <Redirect to='/'/>
    }
    
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(CollectionPage);