// import { createStore } from "redux";
import reducer from "../reducers/contactsReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import firebase from "../firebase/config";

import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

const Store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default Store;
