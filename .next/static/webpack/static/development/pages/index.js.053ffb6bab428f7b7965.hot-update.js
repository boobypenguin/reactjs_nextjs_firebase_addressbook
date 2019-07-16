webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "D:\\programming\\Reactjs_Nextjs_sample\\reactjs_nextjs_firebase_addressbook\\components\\Counter.js";


var Counter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Counter, _Component);

  function Counter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Counter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Counter).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "msgStyle", {
      fontSize: "16pt",
      backgroundColor: "#eef",
      padding: "5px"
    });

    _this.state = {
      counter: 0,
      msg: 'counter: 0'
    };
    _this.doAction = _this.doAction.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Counter, [{
    key: "doAction",
    value: function doAction() {
      this.setState(function (state) {
        var num = state.counter + 1;
        return {
          counter: num,
          msg: "counter: " + num
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        onClick: this.doAction,
        style: this.msgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.state.msg);
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
false,

/***/ "./node_modules/core-js/library/fn/map.js":
false,

/***/ "./node_modules/core-js/library/fn/object/assign.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/keys.js":
false,

/***/ "./node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_bind.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/_collection.js":
false,

/***/ "./node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.map.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next-server/dist/lib/mitt.js":
false,

/***/ "./node_modules/next-server/dist/lib/request-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/router-context.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/router.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next-server/dist/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next-server/dist/lib/utils.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-assign/index.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/punycode/punycode.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/url/url.js":
false,

/***/ "./node_modules/url/util.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.js");
/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/Style */ "./static/Style.js");
var _jsxFileName = "D:\\programming\\Reactjs_Nextjs_sample\\reactjs_nextjs_firebase_addressbook\\pages\\index.js";



var h1 = {
  fontSize: '72pt',
  fontWeight: 'bold',
  textAlign: 'right',
  letterSpacing: '-8px',
  color: '#f0f0f0',
  margin: '-40px 0px'
};
var p = {
  margin: '0px',
  color: '#666',
  fontSize: '16pt'
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _static_Style__WEBPACK_IMPORTED_MODULE_2__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Next.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Welcome to next.js!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.053ffb6bab428f7b7965.hot-update.js.map