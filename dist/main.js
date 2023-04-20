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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  font-style: normal;\\r\\n  font-size: 20px;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #070607;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #a09999;\\r\\n}\\r\\n\\r\\n.nav__branding {\\r\\n  color: #070607;\\r\\n  margin-left: 40px;\\r\\n  position: fixed;\\r\\n  height: 80px;\\r\\n  width: 80px;\\r\\n  display: table-cell;\\r\\n  text-align: center;\\r\\n  vertical-align: middle;\\r\\n  border-radius: 50%;\\r\\n  border: 1px solid #070607;\\r\\n  margin-top: -50px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  padding: 1rem 2rem;\\r\\n  position: fixed;\\r\\n  width: 90vw;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  position: fixed;\\r\\n  margin-top: 2px;\\r\\n  margin-left: -223px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  margin-top: 25px;\\r\\n  font-weight: 900;\\r\\n  font-style: italic;\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 30px 200px;\\r\\n  position: fixed;\\r\\n  background-color: #a09999;\\r\\n  height: 113px;\\r\\n  width: 100%;\\r\\n  margin-top: -137px;\\r\\n}\\r\\n\\r\\n.nav__items {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n  position: fixed;\\r\\n  top: 1rem;\\r\\n  right: 1.2rem;\\r\\n}\\r\\n\\r\\n.hamburger:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.hamburger span {\\r\\n  display: block;\\r\\n  background-color: #070607;\\r\\n  margin: 0.4rem 0;\\r\\n  height: 0.2rem;\\r\\n  width: 1.6rem;\\r\\n  border-radius: 0.1rem;\\r\\n  transition: 0.3s all ease-in-out;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.change.first-bar {\\r\\n  top: 0.8rem;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.change.second-bar {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.change.third-bar {\\r\\n  bottom: 0.755rem;\\r\\n  transform: rotate(-45deg);\\r\\n}\\r\\n\\r\\n.footer-text {\\r\\n  font-size: 12px;\\r\\n  border: 2px solid #a09999;\\r\\n  height: 49px;\\r\\n  padding-top: 13px;\\r\\n  padding-left: 10px;\\r\\n  font-weight: 600;\\r\\n  width: 105%;\\r\\n  margin: 13px 3px;\\r\\n  margin-top: 438px;\\r\\n}\\r\\n\\r\\n.container-main {\\r\\n  padding-left: 3%;\\r\\n  padding-right: 3%;\\r\\n}\\r\\n\\r\\n.container-cards {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto;\\r\\n  justify-items: center;\\r\\n  margin-top: 137px;\\r\\n  margin-left: -97px;\\r\\n}\\r\\n\\r\\n.card-name {\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n  color: black;\\r\\n  margin-left: 43px;\\r\\n}\\r\\n\\r\\n.card-about {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-between;\\r\\n  align-content: center;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: 30%;\\r\\n  padding: 15px 30px;\\r\\n}\\r\\n\\r\\n.card > img {\\r\\n  width: 26vh;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  margin: 34px 22px;\\r\\n  margin-left: 8px;\\r\\n}\\r\\n\\r\\n.like > i {\\r\\n  padding-left: 17px;\\r\\n}\\r\\n\\r\\n.like-count {\\r\\n  margin-left: inherit;\\r\\n  width: 107px;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  margin-top: 4px;\\r\\n}\\r\\n\\r\\n.card-more {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-top: -27px;\\r\\n}\\r\\n\\r\\n.card-btn {\\r\\n  margin: 11px 20px;\\r\\n  cursor: pointer;\\r\\n  padding: 6px 7px;\\r\\n  box-shadow: 2px 3px black;\\r\\n  width: 105px;\\r\\n  font-size: 12px;\\r\\n  font-weight: 600;\\r\\n  background-color: #b4aeae;\\r\\n  border: #b4aeae;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  body {\\r\\n    background-color: #a09999;\\r\\n  }\\r\\n\\r\\n  .nav__branding {\\r\\n    color: #070607;\\r\\n    margin-left: 40px;\\r\\n    height: 95px;\\r\\n    width: 95px;\\r\\n    display: table-cell;\\r\\n    text-align: center;\\r\\n    vertical-align: middle;\\r\\n    border-radius: 50%;\\r\\n    border: 1px solid #070607;\\r\\n    margin-top: -39px;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: -19px;\\r\\n    margin-left: 0;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    margin-top: 30px;\\r\\n    font-weight: 600;\\r\\n    font-style: italic;\\r\\n    font-size: 14px;\\r\\n  }\\r\\n\\r\\n  .header {\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 30px 200px;\\r\\n    background-color: #a09999;\\r\\n    height: 113px;\\r\\n    width: 100%;\\r\\n    margin-top: -137px;\\r\\n  }\\r\\n\\r\\n  .nav__items {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    justify-items: center;\\r\\n    width: 50vw;\\r\\n    margin-top: 55px;\\r\\n  }\\r\\n\\r\\n  nav {\\r\\n    display: flex;\\r\\n    padding: 1rem 2rem;\\r\\n    position: fixed;\\r\\n    width: 90vw;\\r\\n    justify-content: center;\\r\\n    margin-top: -44px;\\r\\n  }\\r\\n\\r\\n  .hamburger {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .footer-text {\\r\\n    font-size: 12px;\\r\\n    border: 2px solid #a09999;\\r\\n    width: 99%;\\r\\n    height: 49px;\\r\\n    margin: 1rem auto;\\r\\n    padding-top: 13px;\\r\\n    padding-left: 10px;\\r\\n    margin-top: 368px;\\r\\n    font-weight: 600;\\r\\n  }\\r\\n\\r\\n  .container-main {\\r\\n    padding-left: 3%;\\r\\n    padding-right: 3%;\\r\\n  }\\r\\n\\r\\n  .container-cards {\\r\\n    display: grid;\\r\\n    grid-template-columns: auto auto auto;\\r\\n    justify-items: center;\\r\\n    margin-top: 137px;\\r\\n  }\\r\\n\\r\\n  .card-name {\\r\\n    font-size: 16px;\\r\\n    font-weight: 600;\\r\\n    color: black;\\r\\n    margin-left: 43px;\\r\\n  }\\r\\n\\r\\n  .card-about {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: space-between;\\r\\n    align-content: center;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    width: 30%;\\r\\n    padding: 15px 30px;\\r\\n  }\\r\\n\\r\\n  .card > img {\\r\\n    width: 26vh;\\r\\n  }\\r\\n\\r\\n  .like {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    margin: 34px 22px;\\r\\n    margin-left: 8px;\\r\\n  }\\r\\n\\r\\n  .like > i {\\r\\n    padding-left: 17px;\\r\\n  }\\r\\n\\r\\n  .like-count {\\r\\n    margin-left: inherit;\\r\\n    width: 107px;\\r\\n  }\\r\\n\\r\\n  .fa-heart {\\r\\n    margin-top: 4px;\\r\\n  }\\r\\n\\r\\n  .card-more {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin-top: -27px;\\r\\n  }\\r\\n\\r\\n  .card-btn {\\r\\n    margin: 11px 20px;\\r\\n    cursor: pointer;\\r\\n    padding: 6px 7px;\\r\\n    box-shadow: 2px 3px black;\\r\\n    width: 105px;\\r\\n    font-size: 12px;\\r\\n    font-weight: 600;\\r\\n    background-color: #b4aeae;\\r\\n    border: #b4aeae;\\r\\n  }\\r\\n  .close {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .pop__up {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_displayDish_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayDish.js */ \"./src/modules/displayDish.js\");\n\n\n\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nwindow.addEventListener('DOMContentLoaded', _modules_displayDish_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\nconst displayList = async () => {\n  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';\n\n  const category = await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n\n  const cardContainer = document.querySelector('.container-cards');\n  cardContainer.innerHTML = '';\n  const cards = category.categories.map((data) => `\n    <div class=\"card\">\n        <img src=${data.strCategoryThumb} alt=\"Dishes category\">\n        <div class=\"card-about\">\n            <p class=\"card-name\">\n               ${data.strCategory}\n            </p>\n            <div class=\"like\">\n                <i class=\"fa-regular fa-heart\"></i>\n                <span class=\"like-count\">5 Likes</span>\n            </div>\n        </div>\n        <div class=\"card-more\">\n            <button type=\"button\" class=\"card-btn\">Comments</button>\n            <button type=\"button\" class=\"card-btn\">Reservations</button>\n        </div>\n    </div>`).join('');\n  cardContainer.innerHTML = cards;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/displayDish.js":
/*!************************************!*\
  !*** ./src/modules/displayDish.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch.js */ \"./src/modules/fetch.js\");\n\n\n\nconst baseUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';\n\nconst displayDish = async () => {\n  await (0,_fetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(baseUrl)\n    .then((data) => (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.results))\n    .catch((err) => new Error(err));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayDish);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/displayDish.js?");

/***/ }),

/***/ "./src/modules/fetch.js":
/*!******************************!*\
  !*** ./src/modules/fetch.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLt = async (url) => {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (error) {\n    return error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLt);\n\n//# sourceURL=webpack://javascript-capstone-project/./src/modules/fetch.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;