import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";


// Firebase設定
var config = {
    apiKey: "AIzaSyC-5QuzovDqD6iS8-Yqyl3bu2gShVzy0cg",
    authDomain: "boobypenguin-angular-app.firebaseapp.com",
    databaseURL: "https://boobypenguin-angular-app.firebaseio.com",
    projectId: "boobypenguin-angular-app",
    storageBucket: "boobypenguin-angular-app.appspot.com",
    messagingSenderId: "175259266858",
    appId: "1:175259266858:web:853814482f10f1d1"
};


// Firebase初期化
var fireapp;
try {
    fireapp = firebase.initializeApp(config);
} catch (error) {
    console.log(error.message);
}
export default fireapp;


// ステート初期値
const initial = {
    login: false,
    username: '(click here!)',
    email: '',
    data: [],
    items: []
}


// レデューサー
function fireReducer(state = intitial, action) {
    switch (action.type) {
        // ダミー
        case 'UPDATE_USER':
            return action.value;
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
