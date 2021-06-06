import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

import {CollectionItemsContainer, BackgroundImage, CollectionFooterContainer, CollectionItemName, CollectionItemPrice, AddButton} from './collection-item.styles';
// import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
    
    const {name, price, imageUrl} = item;

    return(
        <CollectionItemsContainer>
            <BackgroundImage imageUrl={imageUrl} />

            <CollectionFooterContainer>
                <CollectionItemName>{name}</CollectionItemName>
                <CollectionItemPrice>{price}</CollectionItemPrice>
            </CollectionFooterContainer>

            <AddButton inverted onClick={() => addItem(item)}>ADD TO CART</AddButton>
        </CollectionItemsContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);