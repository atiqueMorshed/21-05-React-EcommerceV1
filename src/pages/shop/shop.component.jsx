import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    state = { //Short form of calling constructior, super then this.state
        loading: true
    }

    unsubscribeFromSnapShot = null;
    
    componentDidMount() {
        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');
        
        collectionRef.onSnapshot(async snapshot => {
            // console.log(snapshot);
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }
    
    render() {
        const {match} = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>} />
                <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);