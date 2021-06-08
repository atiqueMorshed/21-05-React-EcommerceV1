import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDoAUWrRqFT8HmD7r2PxHpGwqvILjywVos",
    authDomain: "react-ecommerce-v1-db.firebaseapp.com",
    projectId: "react-ecommerce-v1-db",
    storageBucket: "react-ecommerce-v1-db.appspot.com",
    messagingSenderId: "74492559836",
    appId: "1:74492559836:web:ec6bce6d2ab4f7b96ecf19",
    measurementId: "G-P8TL2QHCQD"
}

if (!firebase.apps.length) { // Not initialized. so, initialize.
    firebase.initializeApp(config);
}else {
    firebase.app(); // if already initialized
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    try {
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        
    } catch(error) {
        console.log("Error: ", error);
    }

    return userRef;
}
/* //[FOR FIREBASE/FIRESTORE DB PUSHING]
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); //collectionRef.doc() creates an empty doc with just ID (generated)
        batch.set(newDocRef, obj);
    });
    await batch.commit(); //Batch executes the queued codes. This is a promise, so, on a resolve, it returns empty string. rejects otherwise 
}
*/

export const convertCollectionsSnapshotToMap = (collectionsSnapShot) => {
    const transformedCollections = collectionsSnapShot.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    });
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;