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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// import Gumshoe from 'gumshoejs';\n// import menu from './components/menu';\n// import ResponsiveTabs from './components/responsive-tabs';\n// import countryPhoneSelect from './components/country-phone-select';\n// import testimonialsCarousel from './components/testimonials-carousel'\n// import opportunitiesCarousel from './components/opportunities-carousel'\n// import tabs from './components/tabs'\n// import scrollPriceToCenter from './components/scroll-price-to-center'\n// import dropdown from './components/dropdown'\n// import footerSpoiler from './components/footer-spoiler'\n// import anchorScroll from './components/anchor-scroll'\n//\n// menu();\n// tabs('.price-section__tab', '.price-section__content');\n// tabs('.opportunities-tabs__button', '.opportunities-tabs__content', true);\n// scrollPriceToCenter();\n// testimonialsCarousel();\n// opportunitiesCarousel();\n// dropdown();\n// footerSpoiler();\n//\n// const ownersTabs = new ResponsiveTabs('#owners-tabs');\n// const staffTabs = new ResponsiveTabs('#staff-tabs');\n// const playersTabs = new ResponsiveTabs('#players-tabs');\n//\n// countryPhoneSelect('#tel', '#tel-input-field');\n//\n// const header = document.querySelector('.header');\n// const headerOffset = 16\n\n// if(document.getElementById('spy')) {\n//   const spy = new Gumshoe('#spy a', {\n//     offset: () => {\n//       return header.getBoundingClientRect().height + headerOffset;\n//     }\n//   });\n// }\n\n// anchorScroll('.sidebar-menu__link', header.getBoundingClientRect().height + headerOffset);\n// anchorScroll('#scroll-to-top', header.getBoundingClientRect().height, true);\n\nconsole.log('asas');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHdW1zaG9lIGZyb20gJ2d1bXNob2Vqcyc7XG4vLyBpbXBvcnQgbWVudSBmcm9tICcuL2NvbXBvbmVudHMvbWVudSc7XG4vLyBpbXBvcnQgUmVzcG9uc2l2ZVRhYnMgZnJvbSAnLi9jb21wb25lbnRzL3Jlc3BvbnNpdmUtdGFicyc7XG4vLyBpbXBvcnQgY291bnRyeVBob25lU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9jb3VudHJ5LXBob25lLXNlbGVjdCc7XG4vLyBpbXBvcnQgdGVzdGltb25pYWxzQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFscy1jYXJvdXNlbCdcbi8vIGltcG9ydCBvcHBvcnR1bml0aWVzQ2Fyb3VzZWwgZnJvbSAnLi9jb21wb25lbnRzL29wcG9ydHVuaXRpZXMtY2Fyb3VzZWwnXG4vLyBpbXBvcnQgdGFicyBmcm9tICcuL2NvbXBvbmVudHMvdGFicydcbi8vIGltcG9ydCBzY3JvbGxQcmljZVRvQ2VudGVyIGZyb20gJy4vY29tcG9uZW50cy9zY3JvbGwtcHJpY2UtdG8tY2VudGVyJ1xuLy8gaW1wb3J0IGRyb3Bkb3duIGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bidcbi8vIGltcG9ydCBmb290ZXJTcG9pbGVyIGZyb20gJy4vY29tcG9uZW50cy9mb290ZXItc3BvaWxlcidcbi8vIGltcG9ydCBhbmNob3JTY3JvbGwgZnJvbSAnLi9jb21wb25lbnRzL2FuY2hvci1zY3JvbGwnXG4vL1xuLy8gbWVudSgpO1xuLy8gdGFicygnLnByaWNlLXNlY3Rpb25fX3RhYicsICcucHJpY2Utc2VjdGlvbl9fY29udGVudCcpO1xuLy8gdGFicygnLm9wcG9ydHVuaXRpZXMtdGFic19fYnV0dG9uJywgJy5vcHBvcnR1bml0aWVzLXRhYnNfX2NvbnRlbnQnLCB0cnVlKTtcbi8vIHNjcm9sbFByaWNlVG9DZW50ZXIoKTtcbi8vIHRlc3RpbW9uaWFsc0Nhcm91c2VsKCk7XG4vLyBvcHBvcnR1bml0aWVzQ2Fyb3VzZWwoKTtcbi8vIGRyb3Bkb3duKCk7XG4vLyBmb290ZXJTcG9pbGVyKCk7XG4vL1xuLy8gY29uc3Qgb3duZXJzVGFicyA9IG5ldyBSZXNwb25zaXZlVGFicygnI293bmVycy10YWJzJyk7XG4vLyBjb25zdCBzdGFmZlRhYnMgPSBuZXcgUmVzcG9uc2l2ZVRhYnMoJyNzdGFmZi10YWJzJyk7XG4vLyBjb25zdCBwbGF5ZXJzVGFicyA9IG5ldyBSZXNwb25zaXZlVGFicygnI3BsYXllcnMtdGFicycpO1xuLy9cbi8vIGNvdW50cnlQaG9uZVNlbGVjdCgnI3RlbCcsICcjdGVsLWlucHV0LWZpZWxkJyk7XG4vL1xuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuLy8gY29uc3QgaGVhZGVyT2Zmc2V0ID0gMTZcblxuLy8gaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NweScpKSB7XG4vLyAgIGNvbnN0IHNweSA9IG5ldyBHdW1zaG9lKCcjc3B5IGEnLCB7XG4vLyAgICAgb2Zmc2V0OiAoKSA9PiB7XG4vLyAgICAgICByZXR1cm4gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIGhlYWRlck9mZnNldDtcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBhbmNob3JTY3JvbGwoJy5zaWRlYmFyLW1lbnVfX2xpbmsnLCBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgaGVhZGVyT2Zmc2V0KTtcbi8vIGFuY2hvclNjcm9sbCgnI3Njcm9sbC10by10b3AnLCBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LCB0cnVlKTtcblxuY29uc29sZS5sb2coJ2FzYXMnKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });