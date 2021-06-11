import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
// import './shop.styles.scss';


class ShopPage extends React.Component{
    
    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();

        /* Previous Alternatives

        // // The default Observer pattern (SUBSCRIPTION)
        // collectionRef.onSnapshot(async snapshot => {
        //     // console.log(snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });

        // // Alternative Promise based approch. This is not like observable, so it'll only update when mounted
        // collectionRef.get().then(snapshot => {
        //     // console.log(snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });

        // // Fetch 
        // fetch('https://firestore.googleapis.com/v1/projects/react-ecommerce-v1-db/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections));
        */
    }
    
    render() {
        const {match} = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionID`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);