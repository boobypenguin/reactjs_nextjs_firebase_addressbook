webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: default, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);


 // Firebaseの初期化

var config = {
  apiKey: "AIzaSyC-5QuzovDqD6iS8-Yqyl3bu2gShVzy0cg",
  authDomain: "boobypenguin-angular-app.firebaseapp.com",
  databaseURL: "https://boobypenguin-angular-app.firebaseio.com",
  projectId: "boobypenguin-angular-app",
  storageBucket: "boobypenguin-angular-app.appspot.com",
  messagingSenderId: "175259266858",
  appId: "1:175259266858:web:853814482f10f1d1"
};
var fireapp;

try {
  firebase__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(config);
} catch (error) {
  console.log(error.message);
}

/* harmony default export */ __webpack_exports__["default"] = (fireapp); // ステート初期値

var initial = {}; // レデューサー（ダミー）

function fireReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intitial;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // ダミー
    case 'TESTACTION':
      return state;
    // デフォルト

    default:
      return state;
  }
} // initStore関数


function initStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(fireReducer, state, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
}

/***/ })

})
//# sourceMappingURL=_app.js.7eaea0a71b88796b40e9.hot-update.js.map