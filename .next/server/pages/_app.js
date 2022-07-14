/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppProvider\": () => (/* binding */ AppProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AppProvider = ({ children  })=>{\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   register user function\n    const registerUser = async (user)=>{\n        alert(`${user === null || user === void 0 ? void 0 : user.name} is registered`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: {\n            loading,\n            registerUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_website/context/AppContext.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n// useAppContext\nconst useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJEO0FBQ3hCO0FBRW5DLE1BQU1JLFVBQVUsaUJBQUdGLG9EQUFhLEVBQUU7QUFFM0IsTUFBTUcsV0FBVyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDM0MsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0MsMkJBQTJCO0lBQzNCLE1BQU1TLFlBQVksR0FBRyxPQUFPQyxJQUFJLEdBQUs7UUFDbkNDLEtBQUssQ0FBQyxDQUFDLEVBQUVELElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUVELHFCQUNFLDhEQUFDUixVQUFVLENBQUNTLFFBQVE7UUFDbEJDLEtBQUssRUFBRTtZQUNMUCxPQUFPO1lBQ1BFLFlBQVk7U0FDYjtrQkFFQUgsUUFBUTs7Ozs7aUJBQ1csQ0FDdEI7Q0FDSCxDQUFDO0FBRUYsZ0JBQWdCO0FBQ1QsTUFBTVMsYUFBYSxHQUFHLElBQU1aLGlEQUFVLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0FBRTFELGlFQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW54ZXNfd2Vic2l0ZS8uL2NvbnRleHQvQXBwQ29udGV4dC5qcz8zNDJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEFwcFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gICByZWdpc3RlciB1c2VyIGZ1bmN0aW9uXG4gIGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgYWxlcnQoYCR7dXNlcj8ubmFtZX0gaXMgcmVnaXN0ZXJlZGApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIHJlZ2lzdGVyVXNlcixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8vIHVzZUFwcENvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZ2lzdGVyVXNlciIsInVzZXIiLCJhbGVydCIsIm5hbWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AppContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../context/AppContext */ \"./context/AppContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_website/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/philipenaohwo/Lenxes_socialcommerce/Site/lenxes_website/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRXVCO0FBRXRELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCw0REFBVztrQkFDViw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNoQixDQUNkO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVueGVzX3dlYnNpdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcIi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcHBQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FwcFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcHBQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();