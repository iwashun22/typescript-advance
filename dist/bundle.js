/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_readonly_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/readonly-array */ \"./module/readonly-array.ts\");\n/* harmony import */ var _module_generics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/generics */ \"./module/generics.ts\");\n/* harmony import */ var _module_clean_compile_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/clean-compile-enum */ \"./module/clean-compile-enum.ts\");\n/* harmony import */ var _module_clean_compile_enum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_module_clean_compile_enum__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _module_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/interface */ \"./module/interface.ts\");\n/* harmony import */ var _module_interface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_module_interface__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _module_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/class */ \"./module/class.ts\");\n/* harmony import */ var _module_class__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_module_class__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_module_readonly_array__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"one\", \"two\"]);\nconsole.log((0,_module_generics__WEBPACK_IMPORTED_MODULE_1__.squareNumber)(3));\nvar threeYears = 3 * (1000 * 60 * 60 * 24 * 365);\nvar newCard = {\n    id: \"abcd1234\",\n    name: \"drivers license\",\n    expiryDate: new Date(Date.now() + threeYears)\n};\n(0,_module_generics__WEBPACK_IMPORTED_MODULE_1__.addItemToBox)(_module_generics__WEBPACK_IMPORTED_MODULE_1__.cardBox, newCard);\n\n\n//# sourceURL=webpack://typesript-advance/./index.ts?");

/***/ }),

/***/ "./module/class.ts":
/*!*************************!*\
  !*** ./module/class.ts ***!
  \*************************/
/***/ (() => {

eval("\nvar state;\n(function (state) {\n    state[state[\"LOGOUT\"] = 0] = \"LOGOUT\";\n    state[state[\"LOGIN\"] = 1] = \"LOGIN\";\n})(state || (state = {}));\nvar User = (function () {\n    function User(username, password) {\n        this.email = null;\n        this.username = username;\n        this.password = password;\n        this.state = state.LOGOUT;\n    }\n    User.prototype.authenticate = function (password) {\n        if (this.password === password) {\n            console.log(\"Welcome \" + this.username + \"!\");\n            this.state = state.LOGIN;\n        }\n        else {\n            console.log(\"Wrong password, please try again.\");\n        }\n    };\n    User.prototype.logout = function () {\n        this.state = state.LOGOUT;\n    };\n    User.prototype.getStatus = function () {\n        if (this.state === state.LOGIN) {\n            return \"logged in\";\n        }\n        return \"logged out\";\n    };\n    User.prototype.addEmail = function (email) {\n        var regex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;\n        if (email.match(regex)) {\n            console.log(\"Success adding email address!\");\n        }\n        else {\n            console.log(\"Please provide valid email address.\");\n        }\n    };\n    return User;\n}());\nvar user = new User(\"test_user\", \"test1234\");\nconsole.log(user.getStatus());\nuser.authenticate(\"1234\");\nuser.authenticate(\"test1234\");\nconsole.log(user.getStatus());\nuser.addEmail(\"thisisnotemail@l22na\");\nuser.addEmail(\"test@gmail.com\");\n\n\n//# sourceURL=webpack://typesript-advance/./module/class.ts?");

/***/ }),

/***/ "./module/clean-compile-enum.ts":
/*!**************************************!*\
  !*** ./module/clean-compile-enum.ts ***!
  \**************************************/
/***/ (() => {

eval("\nvar ShirtSize;\n(function (ShirtSize) {\n    ShirtSize[\"SMALL\"] = \"s\";\n    ShirtSize[\"MIDDLE\"] = \"m\";\n    ShirtSize[\"LARGE\"] = \"l\";\n})(ShirtSize || (ShirtSize = {}));\nvar myShirtSize = ShirtSize.MIDDLE;\n\"\\n\\n####### saperate code ########\\n\\n\";\nvar myStatus = 2;\n\n\n//# sourceURL=webpack://typesript-advance/./module/clean-compile-enum.ts?");

/***/ }),

/***/ "./module/generics.ts":
/*!****************************!*\
  !*** ./module/generics.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItemToBox: () => (/* binding */ addItemToBox),\n/* harmony export */   cardBox: () => (/* binding */ cardBox),\n/* harmony export */   squareNumber: () => (/* binding */ squareNumber)\n/* harmony export */ });\nvar example = \"a\";\nvar squareNumber = function (arg) {\n    return Math.pow(arg, 2);\n};\nsquareNumber(2);\nvar cardBox = [];\nfunction addItemToBox(box, item) {\n    box.push(item);\n    console.log(\"item added!\");\n    console.log(box);\n}\n\n\n\n//# sourceURL=webpack://typesript-advance/./module/generics.ts?");

/***/ }),

/***/ "./module/interface.ts":
/*!*****************************!*\
  !*** ./module/interface.ts ***!
  \*****************************/
/***/ (() => {

eval("\nvar kirby = {\n    id: \"a_12\",\n    name: \"kirby\",\n    hitpoint: 200,\n    attack: 17,\n    special: function () {\n        return this.attack * 4;\n    },\n    emote: function (message) {\n        console.log(message);\n    }\n};\nconsole.log(kirby.hitpoint);\nconsole.log(kirby.special());\nkirby.emote ? kirby.emote(\"Hello\") : null;\n\n\n//# sourceURL=webpack://typesript-advance/./module/interface.ts?");

/***/ }),

/***/ "./module/readonly-array.ts":
/*!**********************************!*\
  !*** ./module/readonly-array.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ doStuff)\n/* harmony export */ });\nvar arr1 = [\"apple\", \"orange\", \"banana\"];\narr1.push(\"watermelon\");\nfunction doStuff(arr) {\n    var copy = arr.slice();\n    console.log(copy);\n    console.log(arr);\n}\ndoStuff(arr1);\n\n\n//# sourceURL=webpack://typesript-advance/./module/readonly-array.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;