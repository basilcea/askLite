/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"login": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/UI/js/login.js","common","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/js/login.js":
/*!****************************!*\
  !*** ./src/UI/js/login.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card.css */ \"./src/UI/components/card.css\");\n/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_card_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/button.css */ \"./src/UI/components/button.css\");\n/* harmony import */ var _components_button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_button_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_background_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/background.css */ \"./src/UI/components/background.css\");\n/* harmony import */ var _components_background_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_background_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text.css */ \"./src/UI/components/text.css\");\n/* harmony import */ var _components_text_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_text_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts.css */ \"./src/UI/components/layouts.css\");\n/* harmony import */ var _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_layouts_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_form_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form.css */ \"./src/UI/components/form.css\");\n/* harmony import */ var _components_form_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_form_css__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst loginCard = document.getElementById('loginFrame')\r\nconst login = document.getElementById('login')\r\nconst signup = document.getElementById('signup')\r\nconst reset =  document.getElementById('reset')\r\n\r\nconst buttons = loginCard.querySelectorAll('button')\r\nconst loginButton = buttons[0]\r\nconst signupButton = buttons[1]\r\nconst resetButton = buttons[2]\r\n\r\nloginCard.className =`${_components_card_css__WEBPACK_IMPORTED_MODULE_0___default.a.loginCard}`\r\n\r\nloginButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.active}`\r\nsignupButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\nresetButton.className = `${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\nsignup.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\nreset.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n\r\nloginButton.onclick =()=>{\r\n    loginButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.active}`\r\n    signupButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    resetButton.className = `${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    login.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.block\r\n    signup.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n    reset.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n\r\n}\r\nsignupButton.onclick =()=>{\r\n    signupButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.active}`\r\n    loginButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    resetButton.className = `${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    signup.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.block\r\n    login.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n    reset.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n\r\n}\r\n\r\nresetButton.onclick =()=>{\r\n    resetButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.active}`\r\n    loginButton.className =`${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    signupButton.className = `${_components_button_css__WEBPACK_IMPORTED_MODULE_1___default.a.login}`\r\n    reset.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.block\r\n    login.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n    signup.className = _components_layouts_css__WEBPACK_IMPORTED_MODULE_4___default.a.none\r\n\r\n}\r\nlet par = loginCard.querySelectorAll('p')\r\nfor (let i=0; i<par.length; i++){\r\n    par[i].className =`${_components_text_css__WEBPACK_IMPORTED_MODULE_3___default.a.centered}`\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/UI/js/login.js?");

/***/ })

/******/ });