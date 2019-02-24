/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';\n/**\n * @param {int} number\n * @param {string} text\n * @param {int} points\n */\n\nfunction setAnswer(number, text, points) {\n  const textContainer = document.querySelector(`[data-answer-num=\"${number}\"] .text`);\n  const pointsContainer = document.querySelector(`[data-answer-num=\"${number}\"] .points`);\n  textContainer.innerHTML = fillAnswerField(text);\n  pointsContainer.innerHTML = points;\n}\n/**\n * @param {string} text\n * @returns {string}\n */\n\n\nfunction fillAnswerField(text) {\n  const fillLength = answerFieldFill.length;\n\n  if (fillLength < text.length) {\n    return text.substring(0, text.length - 3) + '...';\n  } else {\n    return text + answerFieldFill.substring(text.length);\n  }\n}\n/**\n * @param {TEAMS} team\n * @param {int} points\n */\n\n\nfunction setPoints(team, points) {\n  document.querySelector(`.${team}-team .team-points`).innerHTML = points.toString();\n}\n/**\n * @param {TEAMS} team\n * @param {int} errorCnt\n */\n\n\nfunction setErrors(team, errorCnt) {\n  const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);\n\n  for (let i = 0; i < errorIndicators.length; i++) {\n    if (i < errorCnt) {\n      errorIndicators[i].className = 'fail active';\n    } else {\n      errorIndicators[i].className = 'fail';\n    }\n  }\n}\n/**\n * @param {string} text\n */\n\n\nfunction setQuestion(text) {\n  document.querySelector('.question').innerHTML = text;\n}\n\nmodule.exports = {\n  setAnswer,\n  fillAnswerField,\n  setPoints,\n  setErrors,\n  setQuestion\n};\n\n//# sourceURL=webpack:///./src/scripts/board.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams */ \"./src/scripts/teams.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n\n\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(1, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(2, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(3, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(4, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(5, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(6, '', 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\n_board__WEBPACK_IMPORTED_MODULE_1___default.a.setQuestion('Coding Dojo Silesia');\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/teams.js":
/*!******************************!*\
  !*** ./src/scripts/teams.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @enum {TEAMS}\n */\nconst TEAMS = {\n  BLUE: 'blue',\n  RED: 'red'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TEAMS);\n\n//# sourceURL=webpack:///./src/scripts/teams.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });