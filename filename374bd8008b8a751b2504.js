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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container {\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 7fr 1fr;\n  justify-items: center;\n  gap: 50px;\n  \n}\n\nheader {\n  text-align: center;\n  font-size: 64px;\n  grid-area: 1 / 1 / 2 / -1;\n}\n\n.content {\n  width: 100%;\n  border: 1px solid black;\n  display: flex;\n  gap: 50px;\n  justify-content: center;\n}\n\n.board {\n  width: 450px;\n  height: 450px;\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.footer {\n  grid-area: 3 / 1 / -1 / -1;\n}\n\n.cell {\n  background-color: lightgray;\n  border: 1px solid black;\n}\n\n.cell.cell-ship {\n  background-color: gray;\n}\n\n.cell.cell-missed {\n  background-color: red;\n}\n\n.cell.cell-hit {\n  background-color: green;\n}\n\n.cell.cell-sunk {\n  background-color: yellow;\n}\n\n.setup-ships-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: var(--board-size);\n  height: calc(var(--board-size) + 25px);\n  text-align: right;\n}\n\n.setup-ship-shiplist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.setup-ship {\nheight: 40px;\nposition: relative;\ndisplay: flex;\nflex-direction: row-reverse;\njustify-content: space-between;\nalign-items: center;\nbackground-color: lightgray;\nborder: 1px solid black;\n}\n\n.setup-ship p {\nmargin: 0;\ndisplay: inline-block;\n}\n\n.setup-ship-box {\ncursor: grab;\ndisplay: inline-flex;\ngap: 2px;\nposition: relative;\nz-index: 20;\n}\n\n.setup-ship-vertical {\nflex-direction: column;\n}\n\n.setup-ship-hide div {\nbackground-color: rgba(0, 0, 0, 0);\nopacity: 0.5;\n}\n\n.setup-ship-dropped {\nposition: absolute;\nleft: -1px;\ntop: -1px;\n}\n\n.ghost-ship {\nposition: absolute;\nz-index: 200;\nopacity: 0.8;\n}\n\n.ghost-ship>.setup-ship-cell {\nbackground-color: var(--cell-hover-color);\n}\n\n.setup-ship-cell {\nwidth: var(--cell-size);\nheight: var(--cell-size);\nbackground-color: var(--cell-hover-color);\nborder: 1px solid var(--cell-border-color);\n}\n\n.setup-ships-options {\ndisplay: flex;\njustify-content: space-between;\n}\n\n.setup-button-start,\n.setup-button-random {\nwidth: 120px;\nheight: 36px;\n}\n\n.setup-button-start {\nfont-weight: 600;\nfont-size: 1rem;\nbackground-color: var(--hit-color);\ntransition: transform 0.1s ease;\n}\n\n.setup-button-start-disabled {\nopacity: 0.5;\npointer-events: none;\n}\n\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst AI = () => {\n  const availableAttacks = createAttackArray();\n  let lastShip;\n  const lastHitArray = [];\n  const possibleDirections = ['up', 'down', 'left', 'right'];\n  function attack(enemy) {\n    if (this.lastHitArray.length > 0) {\n      this.checkIfShipIsSunk(enemy, this.lastHitArray[lastHitArray.length - 1]);\n    };\n    if (this.availableAttacks.length === 0) {\n      return 'No squares to attack';\n    }\n    if (this.lastHitArray.length === 0) {\n      let attackCoords = this.getRandomCell(enemy);\n      return attackCoords;\n    }\n    const lastHit = this.lastHitArray[lastHitArray.length - 1];\n    const adjacentCells = this.getAllAdjacentCells(enemy, lastHit);\n    const adjacentHits = adjacentCells.filter(cell => {\n      return (cell.cellResult === 'hit' && this.checkIfShipIsSunk(enemy, cell.adjacentCell) === false);\n    });\n    if (adjacentHits.length > 0) {\n      const randomAdjacentHit = adjacentHits[Math.floor(Math.random() * adjacentHits.length)];\n      let nextCell = this.getNextAttackableCell(enemy, lastHit, this.flipDirection(randomAdjacentHit.direction));\n      if (nextCell === false) {\n        nextCell = this.getNextAttackableCell(enemy, lastHit, randomAdjacentHit.direction);\n      };\n      while (nextCell === false) {\n        nextCell = this.getNextAttackableCell(enemy, lastHit, this.possibleDirections[Math.floor(Math.random() * this.possibleDirections.length)]);\n      };\n      return nextCell;\n    }\n    for (let i = this.lastHitArray.length - 2; i >= 0; i--) {\n      const cell = this.lastHitArray[i];\n      const result = this.getAdjacency(lastHit, cell);\n        if (result) {\n          let nextCell = this.getNextAttackableCell(enemy, lastHit, result.direction);\n          if (nextCell) {\n            return nextCell;\n          }\n        }\n      }\n    const adjacentCellsToAttack = adjacentCells.filter(cell => {\n      return typeof cell.cellResult !== 'string' && cell.cellResult !== undefined;\n    });\n    const cell = adjacentCellsToAttack[Math.floor(Math.random() * adjacentCellsToAttack.length)];\n    console.log(cell.adjacentCell)\n    return cell.adjacentCell;\n  }\n\n  function getRandomCell(enemy) {\n    if (this.availableAttacks.length === 0) return 'No squares to attack';\n    let arrayRow = Math.floor(Math.random() * this.availableAttacks.length);\n    let arrayCol = Math.floor(Math.random() * this.availableAttacks[arrayRow].length);\n    let cell = this.availableAttacks[arrayRow][arrayCol];\n    const adjacentCells = this.getAllAdjacentCells(enemy, cell);\n    if (adjacentCells.every(cell => typeof cell.cellResult !== 'object')) {\n      return this.getRandomCell(enemy);\n    }\n    return cell;\n  }\n\n  function removeCellFromAvailableAttacks(cell) {\n    for (let row = 0; row < this.availableAttacks.length; row++) {\n      for (let col = 0; col < this.availableAttacks[row].length; col++) {\n        const square = this.availableAttacks[row][col];\n        if (cell[0] === square[0] && cell[1] === square[1]) {\n          this.availableAttacks[row].splice(col, 1);\n          if (this.availableAttacks[row].length === 0) {\n            this.availableAttacks.splice(row, 1);\n          }\n          return;\n        }\n      }\n    }\n  }\n\n  function getAdjacentCell(cell, direction) {\n    let [row, col] = cell;\n    switch (direction) {\n      case 'up':\n        row--;\n        break;\n      case 'down':\n        row++;\n        break;\n      case 'left':\n        col--;\n        break;\n      case 'right':\n        col++;\n        break;\n      default:\n        break;\n    };\n    return [row, col];\n  }\n\n  function getAllAdjacentCells(enemy, cell) {\n    return possibleDirections.map(direction => {\n      const adjacentCell = this.getAdjacentCell(cell, direction);\n      let cellResult = enemy.gameboard.checkSquare(adjacentCell[0], adjacentCell[1]);\n      if (cellResult === 'hit') {\n        if (this.checkIfShipIsSunk(enemy, adjacentCell)) cellResult = 'sunk';\n      }\n      return {\n        cellResult,\n        adjacentCell,\n        direction\n      }\n    })\n  }\n\n  function getAdjacency(cell, neighbourCell) {\n    let direction;\n    let oppositeDirection;\n    let distance;\n    if (cell[0] === neighbourCell[0]) {\n      const diff = cell[1] - neighbourCell[1];\n      direction = diff > 1 ? 'left' : 'right';\n      oppositeDirection = diff > 1 ? 'right' : 'left';\n      distance = Math.abs(diff);\n    }\n    else if (cell[1] === neighbourCell[1]) {\n      const diff = cell[0] - neighbourCell[0];\n      direction = diff > 1 ? 'down' : 'up';\n      oppositeDirection = diff > 1 ? 'up' : 'down';\n      distance = Math.abs(diff);\n    }\n    else {\n      return false;\n    }\n\n    return {\n        direction,\n        oppositeDirection,\n        distance\n    }\n  }\n\n  function getNextAttackableCell(enemy, cell, direction) {\n    let nextCell = getAdjacentCell(cell, direction);\n    for (let i = 0; i < 4; i++) {\n      let nextCellStatus = enemy.gameboard.checkSquare(nextCell[0], nextCell[1]);\n      if (typeof nextCellStatus === 'object' || nextCellStatus === null) return nextCell;\n      if (nextCellStatus === undefined) return false;\n      if (nextCellStatus === 'miss') return false;\n      if (nextCellStatus === 'hit') {\n        if (this.checkIfShipIsSunk(enemy, nextCell)) {\n          return false;\n        }\n      }\n      nextCell = getAdjacentCell(nextCell, direction);\n    }\n    return false;\n  }\n\n  function flipDirection(direction) {\n    switch (direction) {\n      case 'up':\n        return 'down';\n      case 'down':\n        return 'up';\n      case 'left':\n        return 'right';\n      case 'right':\n        return 'left';\n      default:\n        return false;\n    }\n  }\n\n  function checkIfShipIsSunk(enemy, cell) {\n    const enemyShips = enemy.gameboard.placedShips;\n    let hitShip;\n    enemyShips.forEach(ship => {\n      if (ship.squares.some(square => {\n        return (square[0] === cell[0] && square[1] === cell[1])\n      })) hitShip = ship;\n    })\n    if (hitShip.isSunk()) {\n      hitShip.squares.forEach(square => {\n        const index = this.lastHitArray.findIndex(location => {\n          return (location[0] === square[0] && location[1] === square[1])\n        });\n        if (index > -1) this.lastHitArray.splice(index, 1);\n      });\n      return true;\n    } \n    else {\n      return false;\n    }\n  }\n\n  return {\n    availableAttacks,\n    lastShip,\n    lastHitArray,\n    possibleDirections,\n    attack,\n    getRandomCell,\n    removeCellFromAvailableAttacks,\n    getAdjacentCell,\n    getAllAdjacentCells,\n    getNextAttackableCell,\n    getAdjacency,\n    flipDirection,\n    checkIfShipIsSunk\n  }\n}\n\nfunction createAttackArray() {\n  const attackArray = [];\n  for (let row = 0; row < 10; row++) {\n    let rowArray = [];\n    for (let col = 0; col < 10; col++) {\n        rowArray.push([row, col]);\n    }\n    attackArray.push(rowArray);\n  }\n  return attackArray;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _shipChoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipChoice */ \"./src/shipChoice.js\");\n\n\n\nconst container = document.querySelector('.content');\nconst newGameBtn = document.querySelector('.newGameBtn');\nconst victoryDialog = document.querySelector('.victoryDialog');\nnewGameBtn.addEventListener('click', newGame);\n\nconst game = (0,_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nnewGame();\n\nfunction startGame(player1, player2) {\n  game.createNewGame(player1, player2);\n  drawGame();\n}\n\nfunction newGame() {\n  clearField(container);  \n  const newPlayer = game.createPlayer('Newbie', 1);\n  const newBot = game.createPlayer(false, 2);\n  // newPlayer.gameboard.placeAllShipsRandomly();\n  drawSetup(newPlayer);\n  newBot.gameboard.placeAllShipsRandomly();\n  const startGameBtn = document.querySelector('.startGameBtn');\n  startGameBtn.addEventListener('click', (e) => {\n    if (newPlayer.gameboard.placedShips.length === 5) {\n      startGame(newPlayer, newBot);\n    }\n  })\n}\n\nfunction clearField(field) {\n  while(field.firstChild) {\n    field.removeChild(field.firstChild);\n  }\n}\n\nfunction drawGame() {\n  clearField(container);\n  const oneContainer = drawBoardContainer(game.player1);\n  const twoContainer = drawBoardContainer(game.player2);\n  populateBoard(game.player1, oneContainer.querySelector('.board'));\n  container.append(oneContainer, twoContainer);\n}\n\nfunction drawSetup(player) {\n  clearContainer(container);\n  const setupBoard = _shipChoice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawSetupBoard(player, drawBoardContainer(player));\n  const setupShips = _shipChoice__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawSetupShips();\n  const ships = setupShips.querySelectorAll('.setup-ship-box');\n  container.append(setupBoard, setupShips);\n}\n\nfunction clearContainer(container) {\n  while (container.firstChild) container.removeChild(container.firstChild);\n}\n\nfunction drawBoardContainer(player) {\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('boardCont');\n  const playerBoard = drawBoard(player);\n  boardContainer.append(playerBoard);\n  return boardContainer;\n}\n\nfunction drawBoard(player) {\n  const board = document.createElement('div');\n  board.classList.add('board');\n  board.classList.add('dropzone');\n  for (let row = 0; row < 10; row++) {\n    for (let col = 0; col < 10; col++) {\n      const cell = document.createElement('div');\n      cell.classList.add('cell');\n      cell.dataset.player = player ? player.number : 0;\n      cell.dataset.row = row;\n      cell.dataset.col = col;\n      board.appendChild(cell);\n\n      if (player && player.isAI) {\n        cell.addEventListener('click', getAttack);\n      }\n    }\n  }\n  return board;\n}\n\nfunction getAttack(event) {\n  const cell = event.target;\n  const defendingPlayerNumber = cell.dataset.player;\n  const attackingPlayerNumber = defendingPlayerNumber === '1' ? '2' : '1';\n  const attackingPlayer = game[`player${attackingPlayerNumber}`];\n  const defendingPlayer = game[`player${defendingPlayerNumber }`];\n  if (game.currentPlayer !== attackingPlayer) {\n    return;\n  }\n  const row = cell.dataset.row;\n  const col = cell.dataset.col;\n\n  const [result, coords, ship] = attackingPlayer.attack(defendingPlayer, row, col);\n  markAttackedCell(cell, defendingPlayerNumber, result, ship);\n  cell.removeEventListener('click', getAttack);\n  nextTurn();\n}\n\nfunction attackAI(ai) {\n  if (ai !== game.currentPlayer) {\n    return;\n  }\n  const defendingPlayerNumber = game.defendingPlayer === game.player1 ? '1' : '2';\n  const [result, coords, ship] = ai.attack(game.defendingPlayer);\n  const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${coords[0]}'][data-col='${coords[1]}']`);\n  markAttackedCell(cell, defendingPlayerNumber, result, ship);\n  nextTurn();\n}\n\nfunction markAttackedCell(cell, defendingPlayerNumber, result, ship) {\n  if (result === 'hit') {\n    cell.classList.add('cell-hit');\n    if (ship.isSunk()) {\n      ship.squares.forEach(square => {\n        const cell = document.querySelector(`[data-player='${defendingPlayerNumber}'][data-row='${square[0]}'][data-col='${square[1]}']`)\n        cell.classList.add('cell-sunk')\n      })\n    }\n  }\n  if (result === 'missed') {\n    cell.classList.add('cell-missed');\n  }\n}\n\nfunction nextTurn() {\n  const winner = game.checkIfGameIsOver();\n  if (winner) {\n    return endGame(winner);\n  }\n\n  game.switchTurn();\n  if (game.currentPlayer.isAI) {\n    attackAI(game.currentPlayer);\n  }\n}\n\nfunction populateBoard(player, board) {\n  for (let row = 0; row < 10; row++) {\n    for (let col = 0; col < 10; col++) {\n      const square = player.gameboard.board[row][col];\n      const cell = board.querySelector(`[data-row='${row}'][data-col='${col}']`);\n      if (square !== null && typeof square === 'object') {\n        cell.classList.add('cell-ship');\n      }\n      else {\n        cell.classList.remove('cell-ship');\n      }\n    }\n  }\n}\n\nfunction endGame(winner) {\n  const cells = document.querySelectorAll('.cell');\n  cells.forEach(cell => {\n    cell.removeEventListener('click', getAttack);\n  })\n  showVictoryDialog(winner);\n}\n\nfunction showVictoryDialog(winner) {\n  const name = document.createElement('h2');\n  const closeBtn = document.createElement('button');\n  name.classList.add('winner');\n  closeBtn.classList.add('dialogCloseBtn');\n  name.textContent = `The winner is ${winner.name}`;\n  closeBtn.textContent = 'CLose';\n  closeBtn.addEventListener('click', () => {\n    victoryDialog.close();\n  });\n\n  victoryDialog.appendChild(name);\n  victoryDialog.appendChild(closeBtn);\n  victoryDialog.showModal();\n}\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst Game = () => {\n  let player1,\n      player2,\n      currentPlayer,\n      defendingPlayer;\n\n  function createPlayer(name, number) {\n    return (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name, number);\n  }\n\n  function createNewGame(player1, player2) {\n    this.player1 = player1;\n    this.player2 = player2;\n    this.currentPlayer = this.player1;\n    this.defendingPlayer = this.player2;\n  }\n\n  function switchTurn() {\n    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;\n    this.defendingPlayer = this.defendingPlayer === this.player2 ? this.player1 : this.player2;\n  }\n\n  function checkIfGameIsOver() {\n    if (this.player1.gameboard.checkAllShipsSunk()) {\n      return this.player2;\n    }\n    if (this.player2.gameboard.checkAllShipsSunk()) {\n      return this.player1;\n    }\n    else {\n      return false;\n    }\n  }\n\n  return {\n    createPlayer,\n    createNewGame,\n    player1,\n    player2,\n    currentPlayer,\n    defendingPlayer,\n    switchTurn,\n    checkIfGameIsOver,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipTypes */ \"./src/shipTypes.js\");\n\n\n\nfunction Gameboard() {\n  let board = createNewBoard();\n  let placedShips = [];\n\n  function createNewBoard() {\n    let fullBoard = [];\n    for (let row = 0; row < 10; row++) {\n      let innerArray = [];\n      for (let col = 0; col < 10; col++) {\n        innerArray[col] = null;\n      }\n      fullBoard[row] = innerArray;\n    }\n    return fullBoard;\n  }\n\n  function clearBoard(board) {\n    for (let row = 0; row < 10; row++) {\n      for (let col = 0; col < 10; col++) {\n        board[row][col] = null;\n      }\n    }\n  }\n\n  function clearFleet(fleet) {\n    while (fleet.length > 0) {\n      fleet.pop();\n    }\n  }\n\n  function checkSquare(row, col) {\n    if (row < 0 || col < 0 || row > 9 || col > 9) {\n      return undefined;\n    }\n    return this.board[row][col];\n  }\n\n  function checkValidPlacement(shipLength, coordinates, axis) {\n    let [row, col] = coordinates;\n    let colStatic = col;\n    let rowStatic = row;\n    let squaresAround = [];\n    let squares = [];\n    for (let i = 0; i < shipLength; i++) {\n      squares.push([row, col]);\n      axis === 'horizontal' ? col++ : row++;\n    }\n    if (axis === 'horizontal') {\n      for (let i = rowStatic - 1; i <= rowStatic + 1; i++) {\n        for (let j = colStatic - 1; j <= colStatic + shipLength + 1; j++) {\n          squaresAround.push([i, j]);\n        }\n      }\n    }\n    else if (axis === 'vertical'){\n      for (let i = rowStatic - 1; i <= rowStatic + shipLength + 1; i++) {\n        for (let j = colStatic - 1; j <= colStatic + 1; j++) {\n          squaresAround.push([i, j]);\n        }\n      }\n    }\n\n    const squaresAroundValid = squaresAround.every(square => {\n      let [row, col] = square;\n      if (this.checkSquare(row, col) === undefined || this.checkSquare(row, col) === null) {\n        return true;\n      }\n      return false;\n    });\n    const squaresValid = squares.every(square => {\n      let [row, col] = square;\n      if (this.checkSquare(row, col) === undefined) {\n        return false;\n      }\n      return this.board[row][col] === null;\n    })\n\n    return {\n      isValid: squaresValid && squaresAroundValid,\n      squares,\n    }\n  }\n\n  function placeShip(shipType, coordinates, axis) {\n    const length = _shipTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][shipType].size;\n    const result = this.checkValidPlacement(length, coordinates, axis);\n    if (result.isValid) {\n      const ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipType);\n      ship.axis = axis;\n      ship.squares = result.squares;\n      result.squares.forEach(square => {\n        let [row, col] = square;\n        this.board[row][col] = ship;\n      })\n      placedShips.push(ship);\n      return ship;\n    }\n    else {\n      return 'Cannot place the ship';\n    }\n  }\n\n  function removeShip(row, col) {\n    const ship = this.checkSquare(row, col);\n    ship.squares.forEach(square => {\n      const [row, col] = square;\n      this.board[row][col] = null;\n    })\n    const index = this.placedShips.indexOf(ship);\n    this.placedShips.splice(index, 1);\n  }\n\n  function placeShipRandomly(shipType) {\n    let shipLength = _shipTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][shipType].size;\n    let axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';\n    function getRandomCoord(axis) {\n      let row, col;\n      if (axis === 'horizontal') {\n        row = Math.floor(Math.random() * 9);\n        col = Math.floor(Math.random() * (9 - _shipTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][shipType].size));\n      }\n      else {\n        col = Math.floor(Math.random() * 9);\n        row = Math.floor(Math.random() * (9 - _shipTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][shipType].size));\n      }  \n      return [row, col]\n    }\n    let coords = getRandomCoord(axis);\n    let shipSquare = this.checkValidPlacement(shipLength, coords, axis);\n    while (!shipSquare.isValid) {\n      axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';\n      coords = getRandomCoord(axis);\n      shipSquare = this.checkValidPlacement(shipLength, coords, axis);\n    }\n    return this.placeShip(shipType, coords, axis);\n  }\n\n  function placeAllShipsRandomly() {\n    clearBoard(this.board);\n    clearFleet(this.placedShips);\n   for (let ship in _shipTypes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n    let result = this.placeShipRandomly(ship);\n    while (typeof result !== 'object' || result === null) {\n      result = this.placeAllShipsRandomly(ship);\n    }\n   }\n  }\n\n  function receiveAttack(row, col) {\n    if (this.checkSquare(row, col) === undefined) {\n      return 'Invalid coordinates';\n    }\n    const ship = this.board[row][col];\n    if (ship === null) {\n      this.board[row][col] = 'missed';\n    }\n    else if (typeof ship === 'object') {\n      ship.hit();\n      this.board[row][col] = 'hit';\n    }\n    return [this.board[row][col], [row, col], ship];\n  }\n\n  function checkAllShipsSunk() {\n    return placedShips.every(ship => ship.isSunk());\n  }\n\n  return {\n    board,\n    placedShips,\n    createNewBoard,\n    checkSquare,\n    checkValidPlacement,\n    placeShip,\n    removeShip,\n    receiveAttack,\n    checkAllShipsSunk,\n    placeShipRandomly,\n    placeAllShipsRandomly\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n\n\n\nfunction Player(playerName, playerNumber) {\n  let name = typeof playerName === 'string' ? playerName : 'bot';\n  const number = playerNumber;\n  const isAI = typeof playerName !== 'string' ? true : false;\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const battleBot = (0,_ai__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  function attack(enemy, row, col) {\n    if (this.isAI) {\n      if (this.battleBot.availableAttacks.length === 0) {\n        return 'No squares to attack';\n      }\n      [row, col] = this.battleBot.attack(enemy);\n    }\n    // const result = enemy.gameboard.receiveAttack(row, col);\n    // return result;\n    const result = enemy.gameboard.receiveAttack(row, col);\n    if (this.isAI){\n      if (result[0] === 'hit') {\n        this.battleBot.lastHitArray.push(result[1]);\n      }\n      if (result[2] !== null) this.battleBot.lastShip = result[2];\n      this.battleBot.removeCellFromAvailableAttacks(result[1]);\n    }\n    return result;\n  }\n  \n  return {\n    name,\n    number,\n    isAI,\n    gameboard,\n    battleBot,\n    attack\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipTypes */ \"./src/shipTypes.js\");\n\n\nfunction Ship(shipType) {\n  let length = _shipTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][shipType].size;\n  let hitCount = 0;\n  let squares, axis;\n  let sunkStatus = false;\n\n  function hit() {\n    this.hitCount++;\n\n    this.isSunk();\n  }\n\n  function isSunk() {\n    if (this.hitCount >= this.length) {\n      this.sunkStatus = true;\n      return true;\n    }\n    return false;\n  }\n\n  return {\n    length,\n    hitCount,\n    squares,\n    axis,\n    sunkStatus,\n    isSunk,\n    hit,\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/shipChoice.js":
/*!***************************!*\
  !*** ./src/shipChoice.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipTypes */ \"./src/shipTypes.js\");\n\n\nlet player, board;\n\nfunction drawSetupBoard(setupPlayer, setupBoard) {\n  player = setupPlayer;\n  board = setupBoard;\n  return setupBoard;\n}\n\nfunction drawSetupShips() {\n  const setupShipsContainer = document.createElement('div');\n  setupShipsContainer.classList.add('setup-ships-container');\n  const setupShipsHeader = document.createElement('div');\n  setupShipsHeader.classList.add('setup-ships-header');\n  const setupShipsTitle = document.createElement('h3');\n  setupShipsTitle.textContent = 'place your ships:';\n  const setupShipsInfo = document.createElement('p');\n  setupShipsInfo.textContent = 'double click to rotate (once placed)';\n  const setupShipsOptions = document.createElement('div');\n  setupShipsOptions.classList.add('setup-ships-options');\n  const startGame = document.createElement('button');\n  startGame.classList.add('setup-button-start');\n  startGame.textContent = 'TO BATTLE!';\n  const randomShips = document.createElement('button');\n  randomShips.classList.add('setup-button-random');\n  randomShips.textContent = 'randomize';\n  setupShipsOptions.append(startGame, randomShips);\n  const shipList = document.createElement('div');\n  for (let ship in _shipTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      shipList.appendChild(drawShip(_shipTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][ship]));\n  }\n  setupShipsHeader.append(setupShipsTitle, setupShipsInfo)\n  setupShipsContainer.append(setupShipsHeader, shipList, setupShipsOptions);\n  return setupShipsContainer;\n}\n\nfunction drawShip(ship) {\n  const shipContainer = document.createElement('div');\n  shipContainer.classList.add('setup-ship');\n  shipContainer.id = `${ship.name}-home`;\n  const shipBox = document.createElement('div');\n  shipBox.id = ship.name;\n  shipBox.dataset.length = ship.length;\n  shipBox.classList.add('setup-ship-box');\n  for (let i = 0; i < ship.length; i++) {\n      const shipCell = document.createElement('div');\n      shipCell.classList.add('setup-ship-cell');\n      shipBox.appendChild(shipCell);\n  }\n\n  const shipName = document.createElement('p');\n  if (ship.name === 'patrol') shipName.textContent = 'patrol boat';\n  else shipName.textContent = ship.name;\n  shipContainer.append(shipName, shipBox);\n  return shipContainer;\n}\n\nconst setup = {\n  drawSetupBoard,\n  drawSetupShips\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setup);\n\n//# sourceURL=webpack://battleship/./src/shipChoice.js?");

/***/ }),

/***/ "./src/shipTypes.js":
/*!**************************!*\
  !*** ./src/shipTypes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipTypes = {\n  carrier: {\n    id: 1,\n    class: 'carrier',\n    size: 5\n  },\n  battleship: {\n    id: 2,\n    class: 'battleship',\n    size: 4\n  },\n  destroyer: {\n    id: 3,\n    class: 'destroyer',\n    size: 3\n  },\n  submarine: {\n    id: 4,\n    class: 'submarine',\n    size: 3\n  },\n  patrolBoat: {\n    id: 5,\n    class: 'patrol boat',\n    size: 2\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipTypes);\n\n//# sourceURL=webpack://battleship/./src/shipTypes.js?");

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