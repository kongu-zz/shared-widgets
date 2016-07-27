/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dash = __webpack_require__(1);

	Object.defineProperty(exports, "Dash", {
	  enumerable: true,
	  get: function get() {
	    return _Dash.Dash;
	  }
	});

	var _DateOnly = __webpack_require__(3);

	Object.defineProperty(exports, "DateOnly", {
	  enumerable: true,
	  get: function get() {
	    return _DateOnly.DateOnly;
	  }
	});

	var _DateLayout = __webpack_require__(4);

	Object.defineProperty(exports, "DateLayout", {
	  enumerable: true,
	  get: function get() {
	    return _DateLayout.DateLayout;
	  }
	});

	var _theWrapper = __webpack_require__(10);

	Object.defineProperty(exports, "theWrapper", {
	  enumerable: true,
	  get: function get() {
	    return _theWrapper.theWrapper;
	  }
	});

	var _DateParseException = __webpack_require__(8);

	Object.defineProperty(exports, "DateParseException", {
	  enumerable: true,
	  get: function get() {
	    return _DateParseException.DateParseException;
	  }
	});

	var _changeDateToCurrentTimeZone = __webpack_require__(5);

	Object.defineProperty(exports, "changeDateToCurrentTimeZone", {
	  enumerable: true,
	  get: function get() {
	    return _changeDateToCurrentTimeZone.changeDateToCurrentTimeZone;
	  }
	});

	var _checkCorrectDate = __webpack_require__(7);

	Object.defineProperty(exports, "checkCorrectDate", {
	  enumerable: true,
	  get: function get() {
	    return _checkCorrectDate.checkCorrectDate;
	  }
	});

	var _dateTimeFormats = __webpack_require__(9);

	Object.defineProperty(exports, "dateToString", {
	  enumerable: true,
	  get: function get() {
	    return _dateTimeFormats.dateToString;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dash = undefined;

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var Dash = exports.Dash = function Dash() {
	  return React.createElement("span", { className: "null" }, "—");
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DateOnly = undefined;

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var DateOnly = exports.DateOnly = function DateOnly(params) {
	    return React.createElement("span", { className: "date" }, params.date);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DateLayout = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _changeDateToCurrentTimeZone = __webpack_require__(5);

	var _checkCorrectDate = __webpack_require__(7);

	var _dateTimeFormats = __webpack_require__(9);

	var _DateParseException = __webpack_require__(8);

	var _Dash = __webpack_require__(1);

	var _DateOnly = __webpack_require__(3);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DateLayout = exports.DateLayout = function (_React$Component) {
	    _inherits(DateLayout, _React$Component);

	    function DateLayout(props) {
	        _classCallCheck(this, DateLayout);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateLayout).call(this, props));

	        _this.fnCheckCorrectDate = _checkCorrectDate.checkCorrectDate;
	        _this.fnChangeDateToCurrentTimeZone = _changeDateToCurrentTimeZone.changeDateToCurrentTimeZone;
	        return _this;
	    }

	    _createClass(DateLayout, [{
	        key: "render",
	        value: function render() {
	            try {
	                var stringDate = this.props.data;
	                (0, _dateTimeFormats.dateToString)(this.fnChangeDateToCurrentTimeZone(this.fnCheckCorrectDate(this.props.data)), "MMM D, YYYY");
	                return React.createElement(_DateOnly.DateOnly, { date: stringDate });
	            } catch (ex) {
	                if (ex instanceof _DateParseException.DateParseException) {
	                    return React.createElement(_Dash.Dash, null);
	                } else {
	                    throw ex;
	                }
	            }
	        }
	    }, {
	        key: "fnCheckCorrectDate",
	        get: function get() {
	            return this._fnCheckCorrectDate;
	        },
	        set: function set(value) {
	            this._fnCheckCorrectDate = value;
	        }
	    }, {
	        key: "fnChangeDateToCurrentTimeZone",
	        get: function get() {
	            return this._fnChangeDateToCurrentTimeZone;
	        },
	        set: function set(value) {
	            this._fnChangeDateToCurrentTimeZone = value;
	        }
	    }]);

	    return DateLayout;
	}(React.Component);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.changeDateToCurrentTimeZone = undefined;

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var changeDateToCurrentTimeZone = exports.changeDateToCurrentTimeZone = function changeDateToCurrentTimeZone(date) {
	    var currentTimeZoneOffsetInHours = new Date().getTimezoneOffset() / 60;
	    var dateInCurrentTimeZone = (0, _moment2.default)(date).add(-currentTimeZoneOffsetInHours, "hours");
	    return dateInCurrentTimeZone.toDate();
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.checkCorrectDate = undefined;

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	var _DateParseException = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkCorrectDate = exports.checkCorrectDate = function checkCorrectDate(date) {
	    if (date === null) {
	        throw new _DateParseException.DateParseException("Error parsing Date");
	    }
	    // пробуем один формат
	    var correctDate = Date.parse(date);
	    // пробуем другой формат
	    if (isNaN(correctDate) === true) {
	        var re = /-?\d+/;
	        var m = re.exec(date);
	        correctDate = parseInt(m[0]);
	    }
	    if (isNaN(correctDate) === false) {
	        return (0, _moment2.default)(date).toDate();
	    } else {
	        throw new _DateParseException.DateParseException("Error parsing Date");
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DateParseException = exports.DateParseException = function (_Error) {
	    _inherits(DateParseException, _Error);

	    function DateParseException(message) {
	        _classCallCheck(this, DateParseException);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateParseException).call(this, message));

	        _this.message = message;
	        _this.name = "HubDisconnectedException";
	        _this.stack = new Error().stack;
	        return _this;
	    }

	    return DateParseException;
	}(Error);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.dateToString = undefined;

	var _moment = __webpack_require__(6);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dateToString = exports.dateToString = function dateToString(date, format) {
	    return (0, _moment2.default)(date).format(format);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.theWrapper = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};

	var objectAssign = __webpack_require__(11);
	var theWrapper = exports.theWrapper = function theWrapper() {
	    return function HOCFactory(WrappedComponent) {
	        return function (_React$Component) {
	            _inherits(Pony, _React$Component);

	            function Pony(props) {
	                _classCallCheck(this, Pony);

	                return _possibleConstructorReturn(this, Object.getPrototypeOf(Pony).call(this, props));
	            }

	            _createClass(Pony, [{
	                key: "render",
	                value: function render() {
	                    // objectAssign
	                    var newProps = objectAssign({}, this.props);
	                    // let newProps = (...this.props);
	                    return React.createElement(WrappedComponent, __assign({}, newProps));
	                }
	            }]);

	            return Pony;
	        }(React.Component);
	    };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }
/******/ ]);