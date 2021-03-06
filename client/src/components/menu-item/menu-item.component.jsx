import React from 'react';
import {withRouter} from 'react-router-dom';

import {MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle} from './menu-item.styles';
// import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <MenuItemContainer size={size} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer imageUrl={imageUrl} />
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);