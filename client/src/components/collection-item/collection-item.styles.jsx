import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
    background-image: ${ ({imageUrl}) => `url(${imageUrl})` };
    background-size: cover;
    background-position: center;
`;

export const CollectionItemsContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 30px;

    &:hover {
      ${BackgroundImage} {
        opacity: .8;
      }

      button {
        opacity: .85;
        display: flex;
      }
    }

    @media screen and (max-width: 1200px) {
      width: 20vw;
    }

    @media screen and (max-width: 800px) {
      width: 40vw;

      &:hover {
      ${BackgroundImage} {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }

    }

    @media screen and (max-width: 500px) {
      width: 80vw;

      &:hover {
      ${BackgroundImage} {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }

    }
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CollectionItemName = styled.span`
    width: 90%;
`;

export const CollectionItemPrice = styled.span`
    width: 10%;
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    
    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
`;