import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var config = {
    apiKey: "AIzaSyDTXN1I5-dm6H8DZccprhDLGxZRnQWQi8M",
    authDomain: "boobypenguin-reactjs-app.firebaseapp.com",
    databaseURL: "https://boobypenguin-reactjs-app.firebaseio.com",
    projectId: "boobypenguin-reactjs-app",
    storageBucket: "",
    messagingSenderId: "169011112556",
    appId: "1:169011112556:web:36856648aec5b6a4"
};

var fireapp;
try {
    firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = intitial, action) {
    switch (action.type) {
        // ダミー
        case 'TESTACTION':
            return state;
        // デフォルト
        default:
            return state;
    }
}

// initStore関数
export function initStore(state = initial) {
    return createStore(fireReducer, state,
        applyMiddleware(thunkMiddleware))
}
