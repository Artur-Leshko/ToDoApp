import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyANqBjouoe8GKfSeYpqGT-VRC0iHXCbiaU",
    authDomain: "todoapp-b0c32.firebaseapp.com",
    databaseURL: "https://todoapp-b0c32.firebaseio.com",
    projectId: "todoapp-b0c32",
    storageBucket: "todoapp-b0c32.appspot.com",
    messagingSenderId: "802529969517",
    appId: "1:802529969517:web:001e52e02335205a388664",
    measurementId: "G-871WRZ0X8S"
});

export const firestore = app.firestore();
export const auth = app.auth();

export function docToObject(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}

export function collectionToObject(collection) {
    return collection.map(docToObject);
}

export function normalizeSnapshot(snapshot) {
    const normalizedSnapshot = {};

    snapshot.forEach(doc => {
        normalizedSnapshot[doc.id] = docToObject(doc);
    });

    return normalizedSnapshot;
}


