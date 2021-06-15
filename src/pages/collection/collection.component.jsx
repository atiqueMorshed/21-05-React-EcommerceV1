import React, {useContext} from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

//Way 1: using useContext
const CollectionPage = ({match}) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionID];
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
} 
//Way 2: Using .Consumer
// const CollectionPage = ({match}) => {
//     return (
//         <CollectionsContext.Consumer>
//             {
//                 collections => {
//                     const collection = collections[match.params.collectionID];
//                     console.log(collection);
//                     const {title, items} = collection;
//                     return(
//                         <div className='collection-page'>
//                             <h2 className='title'>{title}</h2>
//                             <div className='items'>
//                                 {
//                                     items.map(item => <CollectionItem key={item.id} item={item} />)
//                                 }
//                             </div>
//                         </div>
//                     );
//                 }
//             }
//         </CollectionsContext.Consumer> 
//     );
// };

export default CollectionPage;