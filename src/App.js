import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";


// Firebaseの設定
var config = {
    apiKey: "AIzaSyC-5QuzovDqD6iS8-Yqyl3bu2gShVzy0cg",
    authDomain: "boobypenguin-angular-app.firebaseapp.com",
    databaseURL: "https://boobypenguin-angular-app.firebaseio.com",
    projectId: "boobypenguin-angular-app",
    storageBucket: "boobypenguin-angular-app.appspot.com",
    messagingSenderId: "175259266858",
    appId: "1:175259266858:web:0207ac956c619d95"
};


// Firebaseの初期化
firebase.initializeApp(config);


// Appコンポーネント
class App extends Component {


    render() {
        return (
            <div>
                <h1>Fire</h1>
                <h2>Sample data.</h2>
                <Sampledata />
            </div>
        );
    }
}


export default App;
