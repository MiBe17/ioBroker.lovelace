(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-lovelace"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/@material/mwc-ripple/node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div .ripple=\"", "\"\n          class=\"mdc-ripple-surface ", "\"></div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/




var RippleBase =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RippleBase, _LitElement);

  function RippleBase() {
    var _this;

    _classCallCheck(this, RippleBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).apply(this, arguments));
    _this.primary = false;
    _this.accent = false;
    _this.unbounded = false;
    _this.disabled = false;
    _this.interactionNode = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(RippleBase, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.interactionNode === this) {
        var parent = this.parentNode;

        if (parent instanceof HTMLElement) {
          this.interactionNode = parent;
        }
      }

      _get(_getPrototypeOf(RippleBase.prototype), "connectedCallback", this).call(this);
    } // TODO(sorvell) #css: sizing.

  }, {
    key: "render",
    value: function render() {
      var classes = {
        'mdc-ripple-surface--primary': this.primary,
        'mdc-ripple-surface--accent': this.accent
      };
      var disabled = this.disabled,
          unbounded = this.unbounded,
          active = this.active,
          interactionNode = this.interactionNode;
      var rippleOptions = {
        disabled: disabled,
        unbounded: unbounded,
        interactionNode: interactionNode
      };

      if (active !== undefined) {
        rippleOptions.active = active;
      }

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(rippleOptions), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(classes));
    }
  }]);

  return RippleBase;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var style = Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Ripple =
/*#__PURE__*/
function (_RippleBase) {
  _inherits(Ripple, _RippleBase);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ripple).apply(this, arguments));
  }

  return Ripple;
}(_mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"]);

Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


/***/ }),

/***/ "./node_modules/@material/mwc-ripple/node_modules/lit-html/directives/class-map.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/node_modules/lit-html/directives/class-map.js ***!
  \*****************************************************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/@material/mwc-ripple/node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */

var classMapCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `classList` if the property value is truthy; if the property value
 * is falsey, the property name is removed from the element's `classList`. For
 * example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */

var classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (classInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var element = committer.element; // handle static classes

    if (!classMapCache.has(part)) {
      element.className = committer.strings.join(' ');
    }

    var classList = element.classList; // remove old classes that no longer apply

    var oldInfo = classMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in classInfo)) {
        classList.remove(name);
      }
    } // add new classes


    for (var _name in classInfo) {
      var value = classInfo[_name];

      if (!oldInfo || value !== oldInfo[_name]) {
        // We explicitly want a loose truthy check here because
        // it seems more convenient that '' and 0 are skipped.
        var method = value ? 'add' : 'remove';
        classList[method](_name);
      }
    }

    classMapCache.set(part, classInfo);
  };
});

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/**
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function _updateLayoutStates() {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-header/app-header.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header/app-header.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
/* harmony import */ var _app_scroll_effects_app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-scroll-effects/app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        transition-timing-function: linear;\n        transition-property: -webkit-transform;\n        transition-property: transform;\n      }\n\n      :host::before {\n        position: absolute;\n        right: 0px;\n        bottom: -5px;\n        left: 0px;\n        width: 100%;\n        height: 5px;\n        content: \"\";\n        transition: opacity 0.4s;\n        pointer-events: none;\n        opacity: 0;\n        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\n        will-change: opacity;\n        @apply --app-header-shadow;\n      }\n\n      :host([shadow])::before {\n        opacity: 1;\n      }\n\n      #background {\n        @apply --layout-fit;\n        overflow: hidden;\n      }\n\n      #backgroundFrontLayer,\n      #backgroundRearLayer {\n        @apply --layout-fit;\n        height: 100%;\n        pointer-events: none;\n        background-size: cover;\n      }\n\n      #backgroundFrontLayer {\n        @apply --app-header-background-front-layer;\n      }\n\n      #backgroundRearLayer {\n        opacity: 0;\n        @apply --app-header-background-rear-layer;\n      }\n\n      #contentContainer {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      :host([disabled]),\n      :host([disabled])::after,\n      :host([disabled]) #backgroundFrontLayer,\n      :host([disabled]) #backgroundRearLayer,\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]),\n      :host([silent-scroll])::after,\n      :host([silent-scroll]) #backgroundFrontLayer,\n      :host([silent-scroll]) #backgroundRearLayer {\n        transition: none !important;\n      }\n\n      :host([disabled]) ::slotted(app-toolbar:first-of-type),\n      :host([disabled]) ::slotted([sticky]),\n      /* Silent scrolling should not run CSS transitions */\n      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),\n      :host([silent-scroll]) ::slotted([sticky]) {\n        transition: none !important;\n      }\n\n    </style>\n    <div id=\"contentContainer\">\n      <slot id=\"slot\"></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/**
app-header is container element for app-toolbars at the top of the screen that
can have scroll effects. By default, an app-header moves away from the viewport
when scrolling down and if using `reveals`, the header slides back when
scrolling back up. For example:

```html
<app-header reveals>
  <app-toolbar>
    <div main-title>App name</div>
  </app-toolbar>
</app-header>
```

app-header can also condense when scrolling down. To achieve this behavior, the
header must have a larger height than the `sticky` element in the light DOM. For
example:

```html
<app-header style="height: 96px;" condenses fixed>
  <app-toolbar style="height: 64px;">
    <div main-title>App name</div>
  </app-toolbar>
</app-header>
```

In this case the header is initially `96px` tall, and it shrinks to `64px` when
scrolling down. That is what is meant by "condensing".

### Sticky element

The element that is positioned fixed to top of the header's `scrollTarget` when
a threshold is reached, similar to `position: sticky` in CSS. This element
**must** be an immediate child of app-header. By default, the `sticky` element
is the first `app-toolbar that is an immediate child of app-header.

```html
<app-header condenses>
  <app-toolbar> Sticky element </app-toolbar>
</app-header>
```

#### Customizing the sticky element

```html
<app-header condenses>
  <app-toolbar></app-toolbar>
  <app-toolbar sticky> Sticky element </app-toolbar>
</app-header>
```

### Scroll target

The app-header's `scrollTarget` property allows to customize the scrollable
element to which the header responds when the user scrolls. By default,
app-header uses the document as the scroll target, but you can customize this
property by setting the id of the element, e.g.

```html
<div id="scrollingRegion" style="overflow-y: auto;">
  <app-header scroll-target="scrollingRegion">
  </app-header>
</div>
```

In this case, the `scrollTarget` property points to the outer div element.
Alternatively, you can set this property programmatically:

```js
appHeader.scrollTarget = document.querySelector("#scrollingRegion");
```

## Backgrounds
app-header has two background layers that can be used for styling when the
header is condensed or when the scrollable element is scrolled to the top.

## Scroll effects

Scroll effects are _optional_ visual effects applied in app-header based on
scroll position. For example, The [Material Design scrolling
techniques](https://www.google.com/design/spec/patterns/scrolling-techniques.html)
recommends effects that can be installed via the `effects` property. e.g.

```html
<app-header effects="waterfall">
  <app-toolbar>App name</app-toolbar>
</app-header>
```

#### Importing the effects

To use the scroll effects, you must explicitly import them in addition to
`app-header`:

```js
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
```

#### List of effects

* **blend-background**
Fades in/out two background elements by applying CSS opacity based on scroll
position. You can use this effect to smoothly change the background color or
image of the header. For example, using the mixin
`--app-header-background-rear-layer` lets you assign a different background when
the header is condensed:

```css
app-header {
  background-color: red;
  --app-header-background-rear-layer: {
    /* The header is blue when condensed *\/
    background-color: blue;
  };
}
```

* **fade-background**
Upon scrolling past a threshold, this effect will trigger an opacity transition
to fade in/out the backgrounds. Compared to the `blend-background` effect, this
effect doesn't interpolate the opacity based on scroll position.


* **parallax-background**
A simple parallax effect that vertically translates the backgrounds based on a
fraction of the scroll position. For example:

```css
app-header {
  --app-header-background-front-layer: {
    background-image: url(...);
  };
}
```
```html
<app-header style="height: 300px;" effects="parallax-background">
  <app-toolbar>App name</app-toolbar>
</app-header>
```

The fraction determines how far the background moves relative to the scroll
position. This value can be assigned via the `scalar` config value and it is
typically a value between 0 and 1 inclusive. If `scalar=0`, the background
doesn't move away from the header.

* **resize-title**
Progressively interpolates the size of the title from the element with the
`main-title` attribute to the element with the `condensed-title` attribute as
the header condenses. For example:

```html
<app-header condenses reveals effects="resize-title">
  <app-toolbar>
      <h4 condensed-title>App name</h4>
  </app-toolbar>
  <app-toolbar>
      <h1 main-title>App name</h1>
  </app-toolbar>
</app-header>
```

* **resize-snapped-title**
Upon scrolling past a threshold, this effect fades in/out the titles using
opacity transitions. Similarly to `resize-title`, the `main-title` and
`condensed-title` elements must be placed in the light DOM.

* **waterfall**
Toggles the shadow property in app-header to create a sense of depth (as
recommended in the MD spec) between the header and the underneath content. You
can change the shadow by customizing the `--app-header-shadow` mixin. For
example:

```css
app-header {
  --app-header-shadow: {
    box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.2);
  };
}
```

```html
<app-header condenses reveals effects="waterfall">
  <app-toolbar>
      <h1 main-title>App name</h1>
  </app-toolbar>
</app-header>
```

* **material**
Installs the waterfall, resize-title, blend-background and parallax-background
effects.

### Content attributes

Attribute | Description         | Default
----------|---------------------|----------------------------------------
`sticky` | Element that remains at the top when the header condenses. | The first app-toolbar in the light DOM.


## Styling

Mixin | Description | Default
------|-------------|----------
`--app-header-background-front-layer` | Applies to the front layer of the background. | {}
`--app-header-background-rear-layer` | Applies to the rear layer of the background. | {}
`--app-header-shadow` | Applies to the shadow. | {}

@group App Elements
@element app-header
@demo app-header/demo/blend-background-1.html Blend Background Image
@demo app-header/demo/blend-background-2.html Blend 2 Background Images
@demo app-header/demo/blend-background-3.html Blend Background Colors
@demo app-header/demo/contacts.html Contacts Demo
@demo app-header/demo/give.html Resize Snapped Title Demo
@demo app-header/demo/music.html Reveals Demo
@demo app-header/demo/no-effects.html Condenses and Reveals Demo
@demo app-header/demo/notes.html Fixed with Dynamic Shadow Demo
@demo app-header/demo/custom-sticky-element-1.html Custom Sticky Element Demo 1
@demo app-header/demo/custom-sticky-element-2.html Custom Sticky Element Demo 2

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header',
  behaviors: [_app_scroll_effects_app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_6__["AppScrollEffectsBehavior"], _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the header will automatically collapse when scrolling down.
     * That is, the `sticky` element remains visible when the header is fully
     *condensed whereas the rest of the elements will collapse below `sticky`
     *element.
     *
     * By default, the `sticky` element is the first toolbar in the light DOM:
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar>This toolbar remains on top</app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     * </app-header>
     * ```
     *
     * Additionally, you can specify which toolbar or element remains visible in
     *condensed mode by adding the `sticky` attribute to that element. For
     *example: if we want the last toolbar to remain visible, we can add the
     *`sticky` attribute to it.
     *
     *```html
     * <app-header condenses>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar></app-toolbar>
     *   <app-toolbar sticky>This toolbar remains on top</app-toolbar>
     * </app-header>
     * ```
     *
     * Note the `sticky` element must be a direct child of `app-header`.
     */
    condenses: {
      type: Boolean,
      value: false
    },

    /**
     * Mantains the header fixed at the top so it never moves away.
     */
    fixed: {
      type: Boolean,
      value: false
    },

    /**
     * Slides back the header when scrolling back up.
     */
    reveals: {
      type: Boolean,
      value: false
    },

    /**
     * Displays a shadow below the header.
     */
    shadow: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    }
  },
  observers: ['_configChanged(isAttached, condenses, fixed)'],

  /**
   * A cached offsetHeight of the current element.
   *
   * @type {number}
   */
  _height: 0,

  /**
   * The distance in pixels the header will be translated to when scrolling.
   *
   * @type {number}
   */
  _dHeight: 0,

  /**
   * The offsetTop of `_stickyEl`
   *
   * @type {number}
   */
  _stickyElTop: 0,

  /**
   * A reference to the element that remains visible when the header condenses.
   *
   * @type {HTMLElement}
   */
  _stickyElRef: null,

  /**
   * The header's top value used for the `transformY`
   *
   * @type {number}
   */
  _top: 0,

  /**
   * The current scroll progress.
   *
   * @type {number}
   */
  _progress: 0,
  _wasScrollingDown: false,
  _initScrollTop: 0,
  _initTimestamp: 0,
  _lastTimestamp: 0,
  _lastScrollTop: 0,

  /**
   * The distance the header is allowed to move away.
   *
   * @type {number}
   */
  get _maxHeaderTop() {
    return this.fixed ? this._dHeight : this._height + 5;
  },

  /**
   * Returns a reference to the sticky element.
   *
   * @return {HTMLElement}?
   */
  get _stickyEl() {
    if (this._stickyElRef) {
      return this._stickyElRef;
    }

    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.slot).getDistributedNodes(); // Get the element with the sticky attribute on it or the first element in
    // the light DOM.

    for (var i = 0, node; node =
    /** @type {!HTMLElement} */
    nodes[i]; i++) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.hasAttribute('sticky')) {
          this._stickyElRef = node;
          break;
        } else if (!this._stickyElRef) {
          this._stickyElRef = node;
        }
      }
    }

    return this._stickyElRef;
  },

  _configChanged: function _configChanged() {
    this.resetLayout();

    this._notifyLayoutChanged();
  },
  _updateLayoutStates: function _updateLayoutStates() {
    if (this.offsetWidth === 0 && this.offsetHeight === 0) {
      return;
    }

    var scrollTop = this._clampedScrollTop;
    var firstSetup = this._height === 0 || scrollTop === 0;
    var currentDisabled = this.disabled;
    this._height = this.offsetHeight;
    this._stickyElRef = null;
    this.disabled = true; // prepare for measurement

    if (!firstSetup) {
      this._updateScrollState(0, true);
    }

    if (this._mayMove()) {
      this._dHeight = this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0;
    } else {
      this._dHeight = 0;
    }

    this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0;

    this._setUpEffect();

    if (firstSetup) {
      this._updateScrollState(scrollTop, true);
    } else {
      this._updateScrollState(this._lastScrollTop, true);

      this._layoutIfDirty();
    } // restore no transition


    this.disabled = currentDisabled;
  },

  /**
   * Updates the scroll state.
   *
   * @param {number} scrollTop
   * @param {boolean=} forceUpdate (default: false)
   */
  _updateScrollState: function _updateScrollState(scrollTop, forceUpdate) {
    if (this._height === 0) {
      return;
    }

    var progress = 0;
    var top = 0;
    var lastTop = this._top;
    var lastScrollTop = this._lastScrollTop;
    var maxHeaderTop = this._maxHeaderTop;
    var dScrollTop = scrollTop - this._lastScrollTop;
    var absDScrollTop = Math.abs(dScrollTop);
    var isScrollingDown = scrollTop > this._lastScrollTop;
    var now = performance.now();

    if (this._mayMove()) {
      top = this._clamp(this.reveals ? lastTop + dScrollTop : scrollTop, 0, maxHeaderTop);
    }

    if (scrollTop >= this._dHeight) {
      top = this.condenses && !this.fixed ? Math.max(this._dHeight, top) : top;
      this.style.transitionDuration = '0ms';
    }

    if (this.reveals && !this.disabled && absDScrollTop < 100) {
      // set the initial scroll position
      if (now - this._initTimestamp > 300 || this._wasScrollingDown !== isScrollingDown) {
        this._initScrollTop = scrollTop;
        this._initTimestamp = now;
      }

      if (scrollTop >= maxHeaderTop) {
        // check if the header is allowed to snap
        if (Math.abs(this._initScrollTop - scrollTop) > 30 || absDScrollTop > 10) {
          if (isScrollingDown && scrollTop >= maxHeaderTop) {
            top = maxHeaderTop;
          } else if (!isScrollingDown && scrollTop >= this._dHeight) {
            top = this.condenses && !this.fixed ? this._dHeight : 0;
          }

          var scrollVelocity = dScrollTop / (now - this._lastTimestamp);
          this.style.transitionDuration = this._clamp((top - lastTop) / scrollVelocity, 0, 300) + 'ms';
        } else {
          top = this._top;
        }
      }
    }

    if (this._dHeight === 0) {
      progress = scrollTop > 0 ? 1 : 0;
    } else {
      progress = top / this._dHeight;
    }

    if (!forceUpdate) {
      this._lastScrollTop = scrollTop;
      this._top = top;
      this._wasScrollingDown = isScrollingDown;
      this._lastTimestamp = now;
    }

    if (forceUpdate || progress !== this._progress || lastTop !== top || scrollTop === 0) {
      this._progress = progress;

      this._runEffects(progress, top);

      this._transformHeader(top);
    }
  },

  /**
   * Returns true if the current header is allowed to move as the user scrolls.
   *
   * @return {boolean}
   */
  _mayMove: function _mayMove() {
    return this.condenses || !this.fixed;
  },

  /**
   * Returns true if the current header will condense based on the size of the
   * header and the `consenses` property.
   *
   * @return {boolean}
   */
  willCondense: function willCondense() {
    return this._dHeight > 0 && this.condenses;
  },

  /**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function isOnScreen() {
    return this._height !== 0 && this._top < this._height;
  },

  /**
   * Returns true if there's content below the current element.
   *
   * @method isContentBelow
   * @return {boolean}
   */
  isContentBelow: function isContentBelow() {
    return this._top === 0 ? this._clampedScrollTop > 0 : this._clampedScrollTop - this._maxHeaderTop >= 0;
  },

  /**
   * Transforms the header.
   *
   * @param {number} y
   */
  _transformHeader: function _transformHeader(y) {
    this.translate3d(0, -y + 'px', 0);

    if (this._stickyEl) {
      this.translate3d(0, this.condenses && y >= this._stickyElTop ? Math.min(y, this._dHeight) - this._stickyElTop + 'px' : 0, 0, this._stickyEl);
    }
  },
  _clamp: function _clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _ensureBgContainers: function _ensureBgContainers() {
    if (!this._bgContainer) {
      this._bgContainer = document.createElement('div');
      this._bgContainer.id = 'background';
      this._bgRear = document.createElement('div');
      this._bgRear.id = 'backgroundRearLayer';

      this._bgContainer.appendChild(this._bgRear);

      this._bgFront = document.createElement('div');
      this._bgFront.id = 'backgroundFrontLayer';

      this._bgContainer.appendChild(this._bgFront);

      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).insertBefore(this._bgContainer, this.$.contentContainer);
    }
  },
  _getDOMRef: function _getDOMRef(id) {
    switch (id) {
      case 'backgroundFrontLayer':
        this._ensureBgContainers();

        return this._bgFront;

      case 'backgroundRearLayer':
        this._ensureBgContainers();

        return this._bgRear;

      case 'background':
        this._ensureBgContainers();

        return this._bgContainer;

      case 'mainTitle':
        return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[main-title]');

      case 'condensedTitle':
        return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[condensed-title]');
    }

    return null;
  },

  /**
   * Returns an object containing the progress value of the scroll effects
   * and the top position of the header.
   *
   * @method getScrollState
   * @return {Object}
   */
  getScrollState: function getScrollState() {
    return {
      progress: this._progress,
      top: this._top
    };
  }
});

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js ***!
  \********************************************************************************************/
/*! exports provided: AppScrollEffectsBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppScrollEffectsBehavior", function() { return AppScrollEffectsBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/



/**
 * `Polymer.AppScrollEffectsBehavior` provides an interface that allows an
 * element to use scrolls effects.
 *
 * ### Importing the app-layout effects
 *
 * app-layout provides a set of scroll effects that can be used by explicitly
 * importing `app-scroll-effects.js`:
 *
 * ```js
 * import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
 * ```
 *
 * The scroll effects can also be used by individually importing
 * `@polymer/app-layout/app-scroll-effects/effects/[effectName].js`. For
 * example:
 *
 * ```js
 * import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
 * ```
 *
 * ### Consuming effects
 *
 * Effects can be consumed via the `effects` property. For example:
 *
 * ```html
 * <app-header effects="waterfall"></app-header>
 * ```
 *
 * ### Creating scroll effects
 *
 * You may want to create a custom scroll effect if you need to modify the CSS
 * of an element based on the scroll position.
 *
 * A scroll effect definition is an object with `setUp()`, `tearDown()` and
 * `run()` functions.
 *
 * To register the effect, you can use
 * `Polymer.AppLayout.registerEffect(effectName, effectDef)` For example, let's
 * define an effect that resizes the header's logo:
 *
 * ```js
 * Polymer.AppLayout.registerEffect('resizable-logo', {
 *   setUp: function(config) {
 *     // the effect's config is passed to the setUp.
 *     this._fxResizeLogo = { logo: Polymer.dom(this).querySelector('[logo]') };
 *   },
 *
 *   run: function(progress) {
 *      // the progress of the effect
 *      this.transform('scale3d(' + progress + ', '+ progress +', 1)',
 * this._fxResizeLogo.logo);
 *   },
 *
 *   tearDown: function() {
 *      // clean up and reset of states
 *      delete this._fxResizeLogo;
 *   }
 * });
 * ```
 * Now, you can consume the effect:
 *
 * ```html
 * <app-header id="appHeader" effects="resizable-logo">
 *   <img logo src="logo.svg">
 * </app-header>
 * ```
 *
 * ### Imperative API
 *
 * ```js
 * var logoEffect = appHeader.createEffect('resizable-logo', effectConfig);
 * // run the effect: logoEffect.run(progress);
 * // tear down the effect: logoEffect.tearDown();
 * ```
 *
 * ### Configuring effects
 *
 * For effects installed via the `effects` property, their configuration can be
 * set via the `effectsConfig` property. For example:
 *
 * ```html
 * <app-header effects="waterfall"
 *   effects-config='{"waterfall": {"startsAt": 0, "endsAt": 0.5}}'>
 * </app-header>
 * ```
 *
 * All effects have a `startsAt` and `endsAt` config property. They specify at
 * what point the effect should start and end. This value goes from 0 to 1
 * inclusive.
 *
 * @polymerBehavior
 */

var AppScrollEffectsBehavior = [_polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronScrollTargetBehavior"], {
  properties: {
    /**
     * A space-separated list of the effects names that will be triggered when
     * the user scrolls. e.g. `waterfall parallax-background` installs the
     * `waterfall` and `parallax-background`.
     */
    effects: {
      type: String
    },

    /**
     * An object that configurates the effects installed via the `effects`
     * property. e.g.
     * ```js
     *  element.effectsConfig = {
     *   "blend-background": {
     *     "startsAt": 0.5
     *   }
     * };
     * ```
     * Every effect has at least two config properties: `startsAt` and
     * `endsAt`. These properties indicate when the event should start and end
     * respectively and relative to the overall element progress. So for
     * example, if `blend-background` starts at `0.5`, the effect will only
     * start once the current element reaches 0.5 of its progress. In this
     * context, the progress is a value in the range of `[0, 1]` that
     * indicates where this element is on the screen relative to the viewport.
     */
    effectsConfig: {
      type: Object,
      value: function value() {
        return {};
      }
    },

    /**
     * Disables CSS transitions and scroll effects on the element.
     */
    disabled: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    },

    /**
     * Allows to set a `scrollTop` threshold. When greater than 0,
     * `thresholdTriggered` is true only when the scroll target's `scrollTop`
     * has reached this value.
     *
     * For example, if `threshold = 100`, `thresholdTriggered` is true when
     * the `scrollTop` is at least `100`.
     */
    threshold: {
      type: Number,
      value: 0
    },

    /**
     * True if the `scrollTop` threshold (set in `scrollTopThreshold`) has
     * been reached.
     */
    thresholdTriggered: {
      type: Boolean,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    }
  },
  observers: ['_effectsChanged(effects, effectsConfig, isAttached)'],

  /**
   * Updates the scroll state. This method should be overridden
   * by the consumer of this behavior.
   *
   * @method _updateScrollState
   * @param {number} scrollTop
   */
  _updateScrollState: function _updateScrollState(scrollTop) {},

  /**
   * Returns true if the current element is on the screen.
   * That is, visible in the current viewport. This method should be
   * overridden by the consumer of this behavior.
   *
   * @method isOnScreen
   * @return {boolean}
   */
  isOnScreen: function isOnScreen() {
    return false;
  },

  /**
   * Returns true if there's content below the current element. This method
   * should be overridden by the consumer of this behavior.
   *
   * @method isContentBelow
   * @return {boolean}
   */
  isContentBelow: function isContentBelow() {
    return false;
  },

  /**
   * List of effects handlers that will take place during scroll.
   *
   * @type {Array<Function>}
   */
  _effectsRunFn: null,

  /**
   * List of the effects definitions installed via the `effects` property.
   *
   * @type {Array<Object>}
   */
  _effects: null,

  /**
   * The clamped value of `_scrollTop`.
   * @type number
   */
  get _clampedScrollTop() {
    return Math.max(0, this._scrollTop);
  },

  attached: function attached() {
    this._scrollStateChanged();
  },
  detached: function detached() {
    this._tearDownEffects();
  },

  /**
   * Creates an effect object from an effect's name that can be used to run
   * effects programmatically.
   *
   * @method createEffect
   * @param {string} effectName The effect's name registered via `Polymer.AppLayout.registerEffect`.
   * @param {Object=} effectConfig The effect config object. (Optional)
   * @return {Object} An effect object with the following functions:
   *
   *  * `effect.setUp()`, Sets up the requirements for the effect.
   *       This function is called automatically before the `effect` function
   * returns.
   *  * `effect.run(progress, y)`, Runs the effect given a `progress`.
   *  * `effect.tearDown()`, Cleans up any DOM nodes or element references
   * used by the effect.
   *
   * Example:
   * ```js
   * var parallax = element.createEffect('parallax-background');
   * // runs the effect
   * parallax.run(0.5, 0);
   * ```
   */
  createEffect: function createEffect(effectName, effectConfig) {
    var effectDef = _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__["_scrollEffects"][effectName];

    if (!effectDef) {
      throw new ReferenceError(this._getUndefinedMsg(effectName));
    }

    var prop = this._boundEffect(effectDef, effectConfig || {});

    prop.setUp();
    return prop;
  },

  /**
   * Called when `effects` or `effectsConfig` changes.
   */
  _effectsChanged: function _effectsChanged(effects, effectsConfig, isAttached) {
    this._tearDownEffects();

    if (!effects || !isAttached) {
      return;
    }

    effects.split(' ').forEach(function (effectName) {
      var effectDef;

      if (effectName !== '') {
        if (effectDef = _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__["_scrollEffects"][effectName]) {
          this._effects.push(this._boundEffect(effectDef, effectsConfig[effectName]));
        } else {
          console.warn(this._getUndefinedMsg(effectName));
        }
      }
    }, this);

    this._setUpEffect();
  },

  /**
   * Forces layout
   */
  _layoutIfDirty: function _layoutIfDirty() {
    return this.offsetWidth;
  },

  /**
   * Returns an effect object bound to the current context.
   *
   * @param {Object} effectDef
   * @param {Object=} effectsConfig The effect config object if the effect accepts config values. (Optional)
   */
  _boundEffect: function _boundEffect(effectDef, effectsConfig) {
    effectsConfig = effectsConfig || {};
    var startsAt = parseFloat(effectsConfig.startsAt || 0);
    var endsAt = parseFloat(effectsConfig.endsAt || 1);
    var deltaS = endsAt - startsAt;

    var noop = function noop() {}; // fast path if possible


    var runFn = startsAt === 0 && endsAt === 1 ? effectDef.run : function (progress, y) {
      effectDef.run.call(this, Math.max(0, (progress - startsAt) / deltaS), y);
    };
    return {
      setUp: effectDef.setUp ? effectDef.setUp.bind(this, effectsConfig) : noop,
      run: effectDef.run ? runFn.bind(this) : noop,
      tearDown: effectDef.tearDown ? effectDef.tearDown.bind(this) : noop
    };
  },

  /**
   * Sets up the effects.
   */
  _setUpEffect: function _setUpEffect() {
    if (this.isAttached && this._effects) {
      this._effectsRunFn = [];

      this._effects.forEach(function (effectDef) {
        // install the effect only if no error was reported
        if (effectDef.setUp() !== false) {
          this._effectsRunFn.push(effectDef.run);
        }
      }, this);
    }
  },

  /**
   * Tears down the effects.
   */
  _tearDownEffects: function _tearDownEffects() {
    if (this._effects) {
      this._effects.forEach(function (effectDef) {
        effectDef.tearDown();
      });
    }

    this._effectsRunFn = [];
    this._effects = [];
  },

  /**
   * Runs the effects.
   *
   * @param {number} p The progress
   * @param {number} y The top position of the current element relative to the viewport.
   */
  _runEffects: function _runEffects(p, y) {
    if (this._effectsRunFn) {
      this._effectsRunFn.forEach(function (run) {
        run(p, y);
      });
    }
  },

  /**
   * Overrides the `_scrollHandler`.
   */
  _scrollHandler: function _scrollHandler() {
    this._scrollStateChanged();
  },
  _scrollStateChanged: function _scrollStateChanged() {
    if (!this.disabled) {
      var scrollTop = this._clampedScrollTop;

      this._updateScrollState(scrollTop);

      if (this.threshold > 0) {
        this._setThresholdTriggered(scrollTop >= this.threshold);
      }
    }
  },

  /**
   * Override this method to return a reference to a node in the local DOM.
   * The node is consumed by a scroll effect.
   *
   * @param {string} id The id for the node.
   */
  _getDOMRef: function _getDOMRef(id) {
    console.warn('_getDOMRef', '`' + id + '` is undefined');
  },
  _getUndefinedMsg: function _getUndefinedMsg(effectName) {
    return 'Scroll effect `' + effectName + '` is undefined. ' + 'Did you forget to import app-layout/app-scroll-effects/effects/' + effectName + '.html ?';
  }
}];

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * Toggles the shadow property in app-header when content is scrolled to create
 * a sense of depth between the element and the content underneath.
 */

Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["registerEffect"])('waterfall', {
  /**
   *  @this Polymer.AppLayout.ElementWithBackground
   */
  run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  }
});

/***/ }),

/***/ "./node_modules/@polymer/app-layout/helpers/helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/helpers/helpers.js ***!
  \*************************************************************/
/*! exports provided: _scrollEffects, _scrollTimer, scrollTimingFunction, registerEffect, queryAllRoot, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollEffects", function() { return _scrollEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollTimer", function() { return _scrollTimer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTimingFunction", function() { return scrollTimingFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEffect", function() { return registerEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAllRoot", function() { return queryAllRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

var _scrollEffects = {};
var _scrollTimer = null;
var scrollTimingFunction = function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
};
/**
 * Registers a scroll effect to be used in elements that implement the
 * `Polymer.AppScrollEffectsBehavior` behavior.
 *
 * @param {string} effectName The effect name.
 * @param {Object} effectDef The effect definition.
 */

var registerEffect = function registerEffect(effectName, effectDef) {
  if (_scrollEffects[effectName] != null) {
    throw new Error('effect `' + effectName + '` is already registered.');
  }

  _scrollEffects[effectName] = effectDef;
};
var queryAllRoot = function queryAllRoot(selector, root) {
  var queue = [root];
  var matches = [];

  while (queue.length > 0) {
    var node = queue.shift();
    matches.push.apply(matches, node.querySelectorAll(selector));

    for (var i = 0; node.children[i]; i++) {
      if (node.children[i].shadowRoot) {
        queue.push(node.children[i].shadowRoot);
      }
    }
  }

  return matches;
};
/**
 * Scrolls to a particular set of coordinates in a scroll target.
 * If the scroll target is not defined, then it would use the main document as
 * the target.
 *
 * To scroll in a smooth fashion, you can set the option `behavior: 'smooth'`.
 * e.g.
 *
 * ```js
 * Polymer.AppLayout.scroll({top: 0, behavior: 'smooth'});
 * ```
 *
 * To scroll in a silent mode, without notifying scroll changes to any
 * app-layout elements, you can set the option `behavior: 'silent'`. This is
 * particularly useful we you are using `app-header` and you desire to scroll to
 * the top of a scrolling region without running scroll effects. e.g.
 *
 * ```js
 * Polymer.AppLayout.scroll({top: 0, behavior: 'silent'});
 * ```
 *
 * @param {Object} options {top: Number, left: Number, behavior: String(smooth | silent)}
 */

var scroll = function scroll(options) {
  options = options || {};
  var docEl = document.documentElement;
  var target = options.target || docEl;
  var hasNativeScrollBehavior = 'scrollBehavior' in target.style && target.scroll;
  var scrollClassName = 'app-layout-silent-scroll';
  var scrollTop = options.top || 0;
  var scrollLeft = options.left || 0;
  var scrollTo = target === docEl ? window.scrollTo : function scrollTo(scrollLeft, scrollTop) {
    target.scrollLeft = scrollLeft;
    target.scrollTop = scrollTop;
  };

  if (options.behavior === 'smooth') {
    if (hasNativeScrollBehavior) {
      target.scroll(options);
    } else {
      var timingFn = scrollTimingFunction;
      var startTime = Date.now();
      var currentScrollTop = target === docEl ? window.pageYOffset : target.scrollTop;
      var currentScrollLeft = target === docEl ? window.pageXOffset : target.scrollLeft;
      var deltaScrollTop = scrollTop - currentScrollTop;
      var deltaScrollLeft = scrollLeft - currentScrollLeft;
      var duration = 300;

      var updateFrame = function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;

        if (elapsedTime < duration) {
          scrollTo(timingFn(elapsedTime, currentScrollLeft, deltaScrollLeft, duration), timingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration));
          requestAnimationFrame(updateFrame);
        } else {
          scrollTo(scrollLeft, scrollTop);
        }
      }.bind(this);

      updateFrame();
    }
  } else if (options.behavior === 'silent') {
    var headers = queryAllRoot('app-header', document.body);
    headers.forEach(function (header) {
      header.setAttribute('silent-scroll', '');
    }); // Browsers keep the scroll momentum even if the bottom of the scrolling
    // content was reached. This means that calling scroll({top: 0, behavior:
    // 'silent'}) when the momentum is still going will result in more scroll
    // events and thus scroll effects. This seems to only apply when using
    // document scrolling. Therefore, when should we remove the class from the
    // document element?

    if (_scrollTimer) {
      window.cancelAnimationFrame(_scrollTimer);
    }

    _scrollTimer = window.requestAnimationFrame(function () {
      headers.forEach(function (header) {
        header.removeAttribute('silent-scroll');
      });
      _scrollTimer = null;
    });
    scrollTo(scrollLeft, scrollTop);
  } else {
    scrollTo(scrollLeft, scrollTop);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/app-route/app-route.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/app-route/app-route.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
`app-route` is an element that enables declarative, self-describing routing
for a web app.

In its typical usage, a `app-route` element consumes an object that describes
some state about the current route, via the `route` property. It then parses
that state using the `pattern` property, and produces two artifacts: some `data`
related to the `route`, and a `tail` that contains the rest of the `route` that
did not match.

Here is a basic example, when used with `app-location`:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{data}}"
        tail="{{tail}}">
    </app-route>

In the above example, the `app-location` produces a `route` value. Then, the
`route.path` property is matched by comparing it to the `pattern` property. If
the `pattern` property matches `route.path`, the `app-route` will set or update
its `data` property with an object whose properties correspond to the parameters
in `pattern`. So, in the above example, if `route.path` was `'/about'`, the
value of `data` would be `{"page": "about"}`.

The `tail` property represents the remaining part of the route state after the
`pattern` has been applied to a matching `route`.

Here is another example, where `tail` is used:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>
    <app-route
        route="{{subroute}}"
        pattern="/:id"
        data="{{subrouteData}}">
    </app-route>

In the above example, there are two `app-route` elements. The first
`app-route` consumes a `route`. When the `route` is matched, the first
`app-route` also produces `routeData` from its `data`, and `subroute` from
its `tail`. The second `app-route` consumes the `subroute`, and when it
matches, it produces an object called `subrouteData` from its `data`.

So, when `route.path` is `'/about'`, the `routeData` object will look like
this: `{ page: 'about' }`

And `subrouteData` will be null. However, if `route.path` changes to
`'/article/123'`, the `routeData` object will look like this:
`{ page: 'article' }`

And the `subrouteData` will look like this: `{ id: '123' }`

`app-route` is responsive to bi-directional changes to the `data` objects
they produce. So, if `routeData.page` changed from `'article'` to `'about'`,
the `app-route` will update `route.path`. This in-turn will update the
`app-location`, and cause the global location bar to change its value.

@element app-route
@demo demo/index.html
@demo demo/data-loading-demo.html
@demo demo/simple-demo.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'app-route',
  properties: {
    /**
     * The URL component managed by this element.
     */
    route: {
      type: Object,
      notify: true
    },

    /**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */
    pattern: {
      type: String
    },

    /**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */
    data: {
      type: Object,
      value: function value() {
        return {};
      },
      notify: true
    },

    /**
     * Auto activate route if path empty
     */
    autoActivate: {
      type: Boolean,
      value: false
    },
    _queryParamsUpdating: {
      type: Boolean,
      value: false
    },

    /**
     * @type {?Object}
     */
    queryParams: {
      type: Object,
      value: function value() {
        return {};
      },
      notify: true
    },

    /**
     * The part of `route.path` NOT consumed by `pattern`.
     */
    tail: {
      type: Object,
      value: function value() {
        return {
          path: null,
          prefix: null,
          __queryParams: null
        };
      },
      notify: true
    },

    /**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */
    active: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * @type {?string}
     */
    _matched: {
      type: String,
      value: ''
    }
  },
  observers: ['__tryToMatch(route.path, pattern)', '__updatePathOnDataChange(data.*)', '__tailPathChanged(tail.path)', '__routeQueryParamsChanged(route.__queryParams)', '__tailQueryParamsChanged(tail.__queryParams)', '__queryParamsChanged(queryParams.*)'],
  created: function created() {
    this.linkPaths('route.__queryParams', 'tail.__queryParams');
    this.linkPaths('tail.__queryParams', 'route.__queryParams');
  },

  /**
   * Deal with the query params object being assigned to wholesale.
   */
  __routeQueryParamsChanged: function __routeQueryParamsChanged(queryParams) {
    if (queryParams && this.tail) {
      if (this.tail.__queryParams !== queryParams) {
        this.set('tail.__queryParams', queryParams);
      }

      if (!this.active || this._queryParamsUpdating) {
        return;
      } // Copy queryParams and track whether there are any differences compared
      // to the existing query params.


      var copyOfQueryParams = {};
      var anythingChanged = false;

      for (var key in queryParams) {
        copyOfQueryParams[key] = queryParams[key];

        if (anythingChanged || !this.queryParams || queryParams[key] !== this.queryParams[key]) {
          anythingChanged = true;
        }
      } // Need to check whether any keys were deleted


      for (var key in this.queryParams) {
        if (anythingChanged || !(key in queryParams)) {
          anythingChanged = true;
          break;
        }
      }

      if (!anythingChanged) {
        return;
      }

      this._queryParamsUpdating = true;
      this.set('queryParams', copyOfQueryParams);
      this._queryParamsUpdating = false;
    }
  },
  __tailQueryParamsChanged: function __tailQueryParamsChanged(queryParams) {
    if (queryParams && this.route && this.route.__queryParams != queryParams) {
      this.set('route.__queryParams', queryParams);
    }
  },
  __queryParamsChanged: function __queryParamsChanged(changes) {
    if (!this.active || this._queryParamsUpdating) {
      return;
    }

    this.set('route.__' + changes.path, changes.value);
  },
  __resetProperties: function __resetProperties() {
    this._setActive(false);

    this._matched = null;
  },
  __tryToMatch: function __tryToMatch() {
    if (!this.route) {
      return;
    }

    var path = this.route.path;
    var pattern = this.pattern;

    if (this.autoActivate && path === '') {
      path = '/';
    }

    if (!pattern) {
      return;
    }

    if (!path) {
      this.__resetProperties();

      return;
    }

    var remainingPieces = path.split('/');
    var patternPieces = pattern.split('/');
    var matched = [];
    var namedMatches = {};

    for (var i = 0; i < patternPieces.length; i++) {
      var patternPiece = patternPieces[i];

      if (!patternPiece && patternPiece !== '') {
        break;
      }

      var pathPiece = remainingPieces.shift(); // We don't match this path.

      if (!pathPiece && pathPiece !== '') {
        this.__resetProperties();

        return;
      }

      matched.push(pathPiece);

      if (patternPiece.charAt(0) == ':') {
        namedMatches[patternPiece.slice(1)] = pathPiece;
      } else if (patternPiece !== pathPiece) {
        this.__resetProperties();

        return;
      }
    }

    this._matched = matched.join('/'); // Properties that must be updated atomically.

    var propertyUpdates = {}; // this.active

    if (!this.active) {
      propertyUpdates.active = true;
    } // this.tail


    var tailPrefix = this.route.prefix + this._matched;
    var tailPath = remainingPieces.join('/');

    if (remainingPieces.length > 0) {
      tailPath = '/' + tailPath;
    }

    if (!this.tail || this.tail.prefix !== tailPrefix || this.tail.path !== tailPath) {
      propertyUpdates.tail = {
        prefix: tailPrefix,
        path: tailPath,
        __queryParams: this.route.__queryParams
      };
    } // this.data


    propertyUpdates.data = namedMatches;
    this._dataInUrl = {};

    for (var key in namedMatches) {
      this._dataInUrl[key] = namedMatches[key];
    }

    if (this.setProperties) {
      // atomic update
      this.setProperties(propertyUpdates, true);
    } else {
      this.__setMulti(propertyUpdates);
    }
  },
  __tailPathChanged: function __tailPathChanged(path) {
    if (!this.active) {
      return;
    }

    var tailPath = path;
    var newPath = this._matched;

    if (tailPath) {
      if (tailPath.charAt(0) !== '/') {
        tailPath = '/' + tailPath;
      }

      newPath += tailPath;
    }

    this.set('route.path', newPath);
  },
  __updatePathOnDataChange: function __updatePathOnDataChange() {
    if (!this.route || !this.active) {
      return;
    }

    var newPath = this.__getLink({});

    var oldPath = this.__getLink(this._dataInUrl);

    if (newPath === oldPath) {
      return;
    }

    this.set('route.path', newPath);
  },
  __getLink: function __getLink(overrideValues) {
    var values = {
      tail: null
    };

    for (var key in this.data) {
      values[key] = this.data[key];
    }

    for (var key in overrideValues) {
      values[key] = overrideValues[key];
    }

    var patternPieces = this.pattern.split('/');
    var interp = patternPieces.map(function (value) {
      if (value[0] == ':') {
        value = values[value.slice(1)];
      }

      return value;
    }, this);

    if (values.tail && values.tail.path) {
      if (interp.length > 0 && values.tail.path.charAt(0) === '/') {
        interp.push(values.tail.path.slice(1));
      } else {
        interp.push(values.tail.path);
      }
    }

    return interp.join('/');
  },
  __setMulti: function __setMulti(setObj) {
    // HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
    //     internal data structures. I would not advise that you copy this
    //     example.
    //
    //     In the future this will be a feature of Polymer itself.
    //     See: https://github.com/Polymer/polymer/issues/3640
    //
    //     Hacking around with private methods like this is juggling footguns,
    //     and is likely to have unexpected and unsupported rough edges.
    //
    //     Be ye so warned.
    for (var property in setObj) {
      this._propertySetter(property, setObj[property]);
    } // notify in a specific order


    if (setObj.data !== undefined) {
      this._pathEffector('data', this.data);

      this._notifyChange('data');
    }

    if (setObj.active !== undefined) {
      this._pathEffector('active', this.active);

      this._notifyChange('active');
    }

    if (setObj.tail !== undefined) {
      this._pathEffector('tail', this.tail);

      this._notifyChange('tail');
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \***************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */

var IronMenubarBehaviorImpl = {
  hostAttributes: {
    'role': 'menubar'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left': '_onLeftKey',
    'right': '_onRightKey'
  },
  _onUpKey: function _onUpKey(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },
  _onDownKey: function _onDownKey(event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function _onLeftKey(event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onRightKey: function _onRightKey(event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onKeydown: function _onKeydown(event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    } // all other keys focus the menu item starting with that character


    this._focusWithKeyboardEvent(event);
  }
};
/** @polymerBehavior */

var IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js ***!
  \******************************************************************************************/
/*! exports provided: IronScrollTargetBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronScrollTargetBehavior", function() { return IronScrollTargetBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */

var IronScrollTargetBehavior = {
  properties: {
    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function value() {
        return this._defaultScrollTarget;
      }
    }
  },
  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,
  _scrollTargetChanged: function _scrollTargetChanged(scrollTarget, isAttached) {
    var eventTarget;

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);

      this._oldScrollTarget = null;
    }

    if (!isAttached) {
      return;
    } // Support element id references


    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;
    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;
      this.scrollTarget = domHost && domHost.$ ? domHost.$[scrollTarget] : Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this.ownerDocument).querySelector('#' + scrollTarget);
    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;

      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop;
    }

    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft;
    }

    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function scroll(leftOrOptions, top) {
    var left;

    if (_typeof(leftOrOptions) === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;

    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth;
    }

    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight;
    }

    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function _isValidScrollTarget() {
    return this.scrollTarget instanceof HTMLElement;
  },
  _toggleScrollListener: function _toggleScrollListener(yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;

    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function toggleScrollListener(yes) {
    this._shouldHaveListener = yes;

    this._toggleScrollListener(yes, this.scrollTarget);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tab.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center;\n        @apply --layout-center-justified;\n        @apply --layout-flex-auto;\n\n        position: relative;\n        padding: 0 12px;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n\n        @apply --paper-font-common-base;\n        @apply --paper-tab;\n      }\n\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([link]) {\n        padding: 0;\n      }\n\n      .tab-content {\n        height: 100%;\n        transform: translateZ(0);\n          -webkit-transform: translateZ(0);\n        transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);\n        @apply --layout-horizontal;\n        @apply --layout-center-center;\n        @apply --layout-flex-auto;\n        @apply --paper-tab-content;\n      }\n\n      :host(:not(.iron-selected)) > .tab-content {\n        opacity: 0.8;\n\n        @apply --paper-tab-content-unselected;\n      }\n\n      :host(:focus) .tab-content {\n        opacity: 1;\n        font-weight: 700;\n\n        @apply --paper-tab-content-focused;\n      }\n\n      paper-ripple {\n        color: var(--paper-tab-ink, var(--paper-yellow-a100));\n      }\n\n      .tab-content > ::slotted(a) {\n        @apply --layout-flex-auto;\n\n        height: 100%;\n      }\n    </style>\n\n    <div class=\"tab-content\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/








/*
`paper-tab` is styled to look like a tab. It should be used in conjunction with
`paper-tabs`.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tab-ink` | Ink color | `--paper-yellow-a100`
`--paper-tab` | Mixin applied to the tab | `{}`
`--paper-tab-content` | Mixin applied to the tab content | `{}`
`--paper-tab-content-focused` | Mixin applied to the tab content when the tab is focused | `{}`
`--paper-tab-content-unselected` | Mixin applied to the tab content when the tab is not selected | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject()),
  is: 'paper-tab',
  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_3__["IronControlState"], _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_4__["PaperRippleBehavior"]],
  properties: {
    /**
     * If true, the tab will forward keyboard clicks (enter/space) to
     * the first anchor element found in its descendants
     */
    link: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tab'
  },
  listeners: {
    down: '_updateNoink',
    tap: '_onTap'
  },
  attached: function attached() {
    this._updateNoink();
  },

  get _parentNoink() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this).parentNode;
    return !!parent && !!parent.noink;
  },

  _updateNoink: function _updateNoink() {
    this.noink = !!this.noink || !!this._parentNoink;
  },
  _onTap: function _onTap(event) {
    if (this.link) {
      var anchor = this.queryEffectiveChildren('a');

      if (!anchor) {
        return;
      } // Don't get stuck in a loop delegating
      // the listener from the child anchor


      if (event.target === anchor) {
        return;
      }

      anchor.click();
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs-icons.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<iron-iconset-svg name=\"paper-tabs\" size=\"24\">\n<svg><defs>\n<g id=\"chevron-left\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></g>\n<g id=\"chevron-right\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
document.head.appendChild(template.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-tabs/paper-tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-tabs/paper-tabs.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _paper_tabs_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-tabs-icons.js */ "./node_modules/@polymer/paper-tabs/paper-tabs-icons.js");
/* harmony import */ var _paper_tab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-tab.js */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon=\"paper-tabs:chevron-left\" class$=\"[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]\" on-up=\"_onScrollButtonUp\" on-down=\"_onLeftScrollButtonDown\" tabindex=\"-1\"></paper-icon-button>\n\n    <div id=\"tabsContainer\" on-track=\"_scroll\" on-down=\"_down\">\n      <div id=\"tabsContent\" class$=\"[[_computeTabsContentClass(scrollable, fitContainer)]]\">\n        <div id=\"selectionBar\" class$=\"[[_computeSelectionBarClass(noBar, alignBottom)]]\" on-transitionend=\"_onBarTransitionEnd\"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon=\"paper-tabs:chevron-right\" class$=\"[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]\" on-up=\"_onScrollButtonUp\" on-down=\"_onRightScrollButtonDown\" tabindex=\"-1\"></paper-icon-button>\n"], ["\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center;\n\n        height: 48px;\n        font-size: 14px;\n        font-weight: 500;\n        overflow: hidden;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        @apply --paper-tabs;\n      }\n\n      :host(:dir(rtl)) {\n        @apply --layout-horizontal-reverse;\n      }\n\n      #tabsContainer {\n        position: relative;\n        height: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        @apply --layout-flex-auto;\n        @apply --paper-tabs-container;\n      }\n\n      #tabsContent {\n        height: 100%;\n        -moz-flex-basis: auto;\n        -ms-flex-basis: auto;\n        flex-basis: auto;\n        @apply --paper-tabs-content;\n      }\n\n      #tabsContent.scrollable {\n        position: absolute;\n        white-space: nowrap;\n      }\n\n      #tabsContent:not(.scrollable),\n      #tabsContent.scrollable.fit-container {\n        @apply --layout-horizontal;\n      }\n\n      #tabsContent.scrollable.fit-container {\n        min-width: 100%;\n      }\n\n      #tabsContent.scrollable.fit-container > ::slotted(*) {\n        /* IE - prevent tabs from compressing when they should scroll. */\n        -ms-flex: 1 0 auto;\n        -webkit-flex: 1 0 auto;\n        flex: 1 0 auto;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .not-visible {\n        opacity: 0;\n        cursor: default;\n      }\n\n      paper-icon-button {\n        width: 48px;\n        height: 48px;\n        padding: 12px;\n        margin: 0 4px;\n      }\n\n      #selectionBar {\n        position: absolute;\n        height: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-bottom: 2px solid var(--paper-tabs-selection-bar-color, var(--paper-yellow-a100));\n          -webkit-transform: scale(0);\n        transform: scale(0);\n          -webkit-transform-origin: left center;\n        transform-origin: left center;\n          transition: -webkit-transform;\n        transition: transform;\n\n        @apply --paper-tabs-selection-bar;\n      }\n\n      #selectionBar.align-bottom {\n        top: 0;\n        bottom: auto;\n      }\n\n      #selectionBar.expand {\n        transition-duration: 0.15s;\n        transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n      }\n\n      #selectionBar.contract {\n        transition-duration: 0.18s;\n        transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);\n      }\n\n      #tabsContent > ::slotted(:not(#selectionBar)) {\n        height: 100%;\n      }\n    </style>\n\n    <paper-icon-button icon=\"paper-tabs:chevron-left\" class$=\"[[_computeScrollButtonClass(_leftHidden, scrollable, hideScrollButtons)]]\" on-up=\"_onScrollButtonUp\" on-down=\"_onLeftScrollButtonDown\" tabindex=\"-1\"></paper-icon-button>\n\n    <div id=\"tabsContainer\" on-track=\"_scroll\" on-down=\"_down\">\n      <div id=\"tabsContent\" class$=\"[[_computeTabsContentClass(scrollable, fitContainer)]]\">\n        <div id=\"selectionBar\" class$=\"[[_computeSelectionBarClass(noBar, alignBottom)]]\" on-transitionend=\"_onBarTransitionEnd\"></div>\n        <slot></slot>\n      </div>\n    </div>\n\n    <paper-icon-button icon=\"paper-tabs:chevron-right\" class$=\"[[_computeScrollButtonClass(_rightHidden, scrollable, hideScrollButtons)]]\" on-up=\"_onScrollButtonUp\" on-down=\"_onRightScrollButtonDown\" tabindex=\"-1\"></paper-icon-button>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/













/**
Material design: [Tabs](https://www.google.com/design/spec/components/tabs.html)

`paper-tabs` makes it easy to explore and switch between different views or
functional aspects of an app, or to browse categorized data sets.

Use `selected` property to get or set the selected tab.

Example:

    <paper-tabs selected="0">
      <paper-tab>TAB 1</paper-tab>
      <paper-tab>TAB 2</paper-tab>
      <paper-tab>TAB 3</paper-tab>
    </paper-tabs>

See <a href="?active=paper-tab">paper-tab</a> for more information about
`paper-tab`.

A common usage for `paper-tabs` is to use it along with `iron-pages` to switch
between different views.

    <paper-tabs selected="{{selected}}">
      <paper-tab>Tab 1</paper-tab>
      <paper-tab>Tab 2</paper-tab>
      <paper-tab>Tab 3</paper-tab>
    </paper-tabs>

    <iron-pages selected="{{selected}}">
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
    </iron-pages>

To use links in tabs, add `link` attribute to `paper-tab` and put an `<a>`
element in `paper-tab` with a `tabindex` of -1.

Example:

<pre><code>
&lt;style is="custom-style">
  .link {
    &#64;apply --layout-horizontal;
    &#64;apply --layout-center-center;
  }
&lt;/style>

&lt;paper-tabs selected="0">
  &lt;paper-tab link>
    &lt;a href="#link1" class="link" tabindex="-1">TAB ONE&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link2" class="link" tabindex="-1">TAB TWO&lt;/a>
  &lt;/paper-tab>
  &lt;paper-tab link>
    &lt;a href="#link3" class="link" tabindex="-1">TAB THREE&lt;/a>
  &lt;/paper-tab>
&lt;/paper-tabs>
</code></pre>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tabs-selection-bar-color` | Color for the selection bar | `--paper-yellow-a100`
`--paper-tabs-selection-bar` | Mixin applied to the selection bar | `{}`
`--paper-tabs` | Mixin applied to the tabs | `{}`
`--paper-tabs-content` | Mixin applied to the content container of tabs | `{}`
`--paper-tabs-container` | Mixin applied to the layout container of tabs | `{}`

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_10__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"])(_templateObject()),
  is: 'paper-tabs',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronResizableBehavior"], _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_8__["IronMenubarBehavior"]],
  properties: {
    /**
     * If true, ink ripple effect is disabled. When this property is changed,
     * all descendant `<paper-tab>` elements have their `noink` property
     * changed to the new value as well.
     */
    noink: {
      type: Boolean,
      value: false,
      observer: '_noinkChanged'
    },

    /**
     * If true, the bottom bar to indicate the selected tab will not be shown.
     */
    noBar: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the slide effect for the bottom bar is disabled.
     */
    noSlide: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs are scrollable and the tab width is based on the label
     * width.
     */
    scrollable: {
      type: Boolean,
      value: false
    },

    /**
     * If true, tabs expand to fit their container. This currently only applies
     * when scrollable is true.
     */
    fitContainer: {
      type: Boolean,
      value: false
    },

    /**
     * If true, dragging on the tabs to scroll is disabled.
     */
    disableDrag: {
      type: Boolean,
      value: false
    },

    /**
     * If true, scroll buttons (left/right arrow) will be hidden for scrollable
     * tabs.
     */
    hideScrollButtons: {
      type: Boolean,
      value: false
    },

    /**
     * If true, the tabs are aligned to bottom (the selection bar appears at the
     * top).
     */
    alignBottom: {
      type: Boolean,
      value: false
    },
    selectable: {
      type: String,
      value: 'paper-tab'
    },

    /**
     * If true, tabs are automatically selected when focused using the
     * keyboard.
     */
    autoselect: {
      type: Boolean,
      value: false
    },

    /**
     * The delay (in milliseconds) between when the user stops interacting
     * with the tabs through the keyboard and when the focused item is
     * automatically selected (if `autoselect` is true).
     */
    autoselectDelay: {
      type: Number,
      value: 0
    },
    _step: {
      type: Number,
      value: 10
    },
    _holdDelay: {
      type: Number,
      value: 1
    },
    _leftHidden: {
      type: Boolean,
      value: false
    },
    _rightHidden: {
      type: Boolean,
      value: false
    },
    _previousTab: {
      type: Object
    }
  },

  /** @private */
  hostAttributes: {
    role: 'tablist'
  },
  listeners: {
    'iron-resize': '_onTabSizingChanged',
    'iron-items-changed': '_onTabSizingChanged',
    'iron-select': '_onIronSelect',
    'iron-deselect': '_onIronDeselect'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left:keyup right:keyup': '_onArrowKeyup'
  },
  created: function created() {
    this._holdJob = null;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    this._bindDelayedActivationHandler = this._delayedActivationHandler.bind(this);
    this.addEventListener('blur', this._onBlurCapture.bind(this), true);
  },
  ready: function ready() {
    this.setScrollDirection('y', this.$.tabsContainer);
  },
  detached: function detached() {
    this._cancelPendingActivation();
  },
  _noinkChanged: function _noinkChanged(noink) {
    var childTabs = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_11__["dom"])(this).querySelectorAll('paper-tab');
    childTabs.forEach(noink ? this._setNoinkAttribute : this._removeNoinkAttribute);
  },
  _setNoinkAttribute: function _setNoinkAttribute(element) {
    element.setAttribute('noink', '');
  },
  _removeNoinkAttribute: function _removeNoinkAttribute(element) {
    element.removeAttribute('noink');
  },
  _computeScrollButtonClass: function _computeScrollButtonClass(hideThisButton, scrollable, hideScrollButtons) {
    if (!scrollable || hideScrollButtons) {
      return 'hidden';
    }

    if (hideThisButton) {
      return 'not-visible';
    }

    return '';
  },
  _computeTabsContentClass: function _computeTabsContentClass(scrollable, fitContainer) {
    return scrollable ? 'scrollable' + (fitContainer ? ' fit-container' : '') : ' fit-container';
  },
  _computeSelectionBarClass: function _computeSelectionBarClass(noBar, alignBottom) {
    if (noBar) {
      return 'hidden';
    } else if (alignBottom) {
      return 'align-bottom';
    }

    return '';
  },
  // TODO(cdata): Add `track` response back in when gesture lands.
  _onTabSizingChanged: function _onTabSizingChanged() {
    this.debounce('_onTabSizingChanged', function () {
      this._scroll();

      this._tabChanged(this.selectedItem);
    }, 10);
  },
  _onIronSelect: function _onIronSelect(event) {
    this._tabChanged(event.detail.item, this._previousTab);

    this._previousTab = event.detail.item;
    this.cancelDebouncer('tab-changed');
  },
  _onIronDeselect: function _onIronDeselect(event) {
    this.debounce('tab-changed', function () {
      this._tabChanged(null, this._previousTab);

      this._previousTab = null; // See polymer/polymer#1305
    }, 1);
  },
  _activateHandler: function _activateHandler() {
    // Cancel item activations scheduled by keyboard events when any other
    // action causes an item to be activated (e.g. clicks).
    this._cancelPendingActivation();

    _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronMenuBehaviorImpl"]._activateHandler.apply(this, arguments);
  },

  /**
   * Activates an item after a delay (in milliseconds).
   */
  _scheduleActivation: function _scheduleActivation(item, delay) {
    this._pendingActivationItem = item;
    this._pendingActivationTimeout = this.async(this._bindDelayedActivationHandler, delay);
  },

  /**
   * Activates the last item given to `_scheduleActivation`.
   */
  _delayedActivationHandler: function _delayedActivationHandler() {
    var item = this._pendingActivationItem;
    this._pendingActivationItem = undefined;
    this._pendingActivationTimeout = undefined;
    item.fire(this.activateEvent, null, {
      bubbles: true,
      cancelable: true
    });
  },

  /**
   * Cancels a previously scheduled item activation made with
   * `_scheduleActivation`.
   */
  _cancelPendingActivation: function _cancelPendingActivation() {
    if (this._pendingActivationTimeout !== undefined) {
      this.cancelAsync(this._pendingActivationTimeout);
      this._pendingActivationItem = undefined;
      this._pendingActivationTimeout = undefined;
    }
  },
  _onArrowKeyup: function _onArrowKeyup(event) {
    if (this.autoselect) {
      this._scheduleActivation(this.focusedItem, this.autoselectDelay);
    }
  },
  _onBlurCapture: function _onBlurCapture(event) {
    // Cancel a scheduled item activation (if any) when that item is
    // blurred.
    if (event.target === this._pendingActivationItem) {
      this._cancelPendingActivation();
    }
  },

  get _tabContainerScrollSize() {
    return Math.max(0, this.$.tabsContainer.scrollWidth - this.$.tabsContainer.offsetWidth);
  },

  _scroll: function _scroll(e, detail) {
    if (!this.scrollable) {
      return;
    }

    var ddx = detail && -detail.ddx || 0;

    this._affectScroll(ddx);
  },
  _down: function _down(e) {
    // go one beat async to defeat IronMenuBehavior
    // autorefocus-on-no-selection timeout
    this.async(function () {
      if (this._defaultFocusAsync) {
        this.cancelAsync(this._defaultFocusAsync);
        this._defaultFocusAsync = null;
      }
    }, 1);
  },
  _affectScroll: function _affectScroll(dx) {
    this.$.tabsContainer.scrollLeft += dx;
    var scrollLeft = this.$.tabsContainer.scrollLeft;
    this._leftHidden = scrollLeft === 0;
    this._rightHidden = scrollLeft === this._tabContainerScrollSize;
  },
  _onLeftScrollButtonDown: function _onLeftScrollButtonDown() {
    this._scrollToLeft();

    this._holdJob = setInterval(this._scrollToLeft.bind(this), this._holdDelay);
  },
  _onRightScrollButtonDown: function _onRightScrollButtonDown() {
    this._scrollToRight();

    this._holdJob = setInterval(this._scrollToRight.bind(this), this._holdDelay);
  },
  _onScrollButtonUp: function _onScrollButtonUp() {
    clearInterval(this._holdJob);
    this._holdJob = null;
  },
  _scrollToLeft: function _scrollToLeft() {
    this._affectScroll(-this._step);
  },
  _scrollToRight: function _scrollToRight() {
    this._affectScroll(this._step);
  },
  _tabChanged: function _tabChanged(tab, old) {
    if (!tab) {
      // Remove the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(0, 0);

      return;
    }

    var r = this.$.tabsContent.getBoundingClientRect();
    var w = r.width;
    var tabRect = tab.getBoundingClientRect();
    var tabOffsetLeft = tabRect.left - r.left;
    this._pos = {
      width: this._calcPercent(tabRect.width, w),
      left: this._calcPercent(tabOffsetLeft, w)
    };

    if (this.noSlide || old == null) {
      // Position the bar without animation.
      this.$.selectionBar.classList.remove('expand');
      this.$.selectionBar.classList.remove('contract');

      this._positionBar(this._pos.width, this._pos.left);

      return;
    }

    var oldRect = old.getBoundingClientRect();
    var oldIndex = this.items.indexOf(old);
    var index = this.items.indexOf(tab);
    var m = 5; // bar animation: expand

    this.$.selectionBar.classList.add('expand');
    var moveRight = oldIndex < index;
    var isRTL = this._isRTL;

    if (isRTL) {
      moveRight = !moveRight;
    }

    if (moveRight) {
      this._positionBar(this._calcPercent(tabRect.left + tabRect.width - oldRect.left, w) - m, this._left);
    } else {
      this._positionBar(this._calcPercent(oldRect.left + oldRect.width - tabRect.left, w) - m, this._calcPercent(tabOffsetLeft, w) + m);
    }

    if (this.scrollable) {
      this._scrollToSelectedIfNeeded(tabRect.width, tabOffsetLeft);
    }
  },
  _scrollToSelectedIfNeeded: function _scrollToSelectedIfNeeded(tabWidth, tabOffsetLeft) {
    var l = tabOffsetLeft - this.$.tabsContainer.scrollLeft;

    if (l < 0) {
      this.$.tabsContainer.scrollLeft += l;
    } else {
      l += tabWidth - this.$.tabsContainer.offsetWidth;

      if (l > 0) {
        this.$.tabsContainer.scrollLeft += l;
      }
    }
  },
  _calcPercent: function _calcPercent(w, w0) {
    return 100 * w / w0;
  },
  _positionBar: function _positionBar(width, left) {
    width = width || 0;
    left = left || 0;
    this._width = width;
    this._left = left;
    this.transform('translateX(' + left + '%) scaleX(' + width / 100 + ')', this.$.selectionBar);
  },
  _onBarTransitionEnd: function _onBarTransitionEnd(e) {
    var cl = this.$.selectionBar.classList; // bar animation: expand -> contract

    if (cl.contains('expand')) {
      cl.remove('expand');
      cl.add('contract');

      this._positionBar(this._pos.width, this._pos.left); // bar animation done

    } else if (cl.contains('contract')) {
      cl.remove('contract');
    }
  }
});

/***/ }),

/***/ "./node_modules/@thomasloven/round-slider/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@thomasloven/round-slider/src/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: inline-block;\n        width: 100%;\n      }\n      svg {\n        overflow: visible;\n      }\n      .slider {\n        fill: none;\n        stroke-width: var(--round-slider-path-width, 3);\n        stroke-linecap: var(--round-slider-linecap, round);\n      }\n      .path {\n        stroke: var(--round-slider-path-color, lightgray);\n      }\n      .bar {\n        stroke: var(--round-slider-bar-color, deepskyblue);\n      }\n      g.handles {\n        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));\n        stroke-linecap: round;\n      }\n      g.low.handle {\n        stroke: var(--round-slider-low-handle-color);\n      }\n      g.high.handle {\n        stroke: var(--round-slider-high-handle-color);\n      }\n      .handle:focus {\n        outline: unset;\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <path\n                class=\"bar\"\n                vector-effect=\"non-scaling-stroke\"\n                d=", "\n              />"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <svg\n        @mousedown=", "\n        @touchstart=", "\n        xmln=\"http://www.w3.org/2000/svg\"\n        viewBox=\"", " ", " ", " ", "\"\n        style=\"margin: ", "px;\"\n        focusable=\"false\"\n      >\n        <g class=\"slider\">\n          <path\n            class=\"path\"\n            d=", "\n            vector-effect=\"non-scaling-stroke\"\n          />\n          ", "\n        </g>\n\n        <g class=\"handles\">\n        ", "\n        </g>\n      </svg>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <g class=\"", " handle\">\n        <path\n          id=", "\n          class=\"overflow\"\n          d=\"\n          M ", " ", "\n          L ", " ", "\n          \"\n          vector-effect=\"non-scaling-stroke\"\n          stroke=\"rgba(0,0,0,0)\"\n          stroke-width=\"", "\"\n          />\n        <path\n          id=", "\n          class=\"handle\"\n          d=\"\n          M ", " ", "\n          L ", " ", "\n          \"\n          vector-effect=\"non-scaling-stroke\"\n          stroke-width=\"", "\"\n          tabindex=\"0\"\n          @focus=", "\n          @blur=", "\n          />\n        </g>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RoundSlider =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RoundSlider, _LitElement);

  _createClass(RoundSlider, null, [{
    key: "properties",
    get: function get() {
      return {
        value: {
          type: Number
        },
        high: {
          type: Number
        },
        low: {
          type: Number
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number
        },
        startAngle: {
          type: Number
        },
        arcLength: {
          type: Number
        },
        handleSize: {
          type: Number
        },
        handleZoom: {
          type: Number
        },
        disabled: {
          type: Boolean
        },
        dragging: {
          type: Boolean,
          reflect: true
        },
        rtl: {
          type: Boolean
        },
        _scale: {
          type: Number
        }
      };
    }
  }]);

  function RoundSlider() {
    var _this;

    _classCallCheck(this, RoundSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RoundSlider).call(this));
    _this.min = 0;
    _this.max = 100;
    _this.step = 1;
    _this.startAngle = 135;
    _this.arcLength = 270;
    _this.handleSize = 6;
    _this.handleZoom = 1.5;
    _this.disabled = false;
    _this.dragging = false;
    _this.rtl = false;
    _this._scale = 1;
    return _this;
  }

  _createClass(RoundSlider, [{
    key: "_angleInside",
    value: function _angleInside(angle) {
      // Check if an angle is on the arc
      var a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
      return a < this.arcLength / 2 && a > -this.arcLength / 2;
    }
  }, {
    key: "_angle2xy",
    value: function _angle2xy(angle) {
      if (this.rtl) return {
        x: -Math.cos(angle),
        y: Math.sin(angle)
      };
      return {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
    }
  }, {
    key: "_xy2angle",
    value: function _xy2angle(x, y) {
      if (this.rtl) x = -x;
      return (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
    }
  }, {
    key: "_value2angle",
    value: function _value2angle(value) {
      var fraction = (value - this.min) / (this.max - this.min);
      return this._start + fraction * this._len;
    }
  }, {
    key: "_angle2value",
    value: function _angle2value(angle) {
      return Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
    }
  }, {
    key: "dragStart",
    value: function dragStart(ev) {
      var handle = ev.target; // Avoid double events mouseDown->focus

      if (this._rotation && this._rotation.type !== "focus") return; // If an invisible handle was clicked, switch to the visible counterpart

      if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
      if (!handle.classList.contains("handle")) return;
      handle.setAttribute('stroke-width', 2 * this.handleSize * this.handleZoom * this._scale);
      var min = handle.id === "high" ? this.low : this.min;
      var max = handle.id === "low" ? this.high : this.max;
      this._rotation = {
        handle: handle,
        min: min,
        max: max,
        start: this[handle.id],
        type: ev.type
      };
      this.dragging = true;
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(ev) {
      if (!this._rotation) return;
      var handle = this._rotation.handle;
      handle.setAttribute('stroke-width', 2 * this.handleSize * this._scale);
      this._rotation = false;
      this.dragging = false;
      handle.blur();
      var event = new CustomEvent('value-changed', {
        detail: _defineProperty({}, handle.id, this[handle.id])
      });
      this.dispatchEvent(event); // This makes the low handle render over the high handle if they both are
      // close to the top end.  Otherwise if would be unclickable, and the high
      // handle locked by the low.  Calcualtion is done in the dragEnd handler to
      // avoid "z fighting" while dragging.

      if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      if (!this._rotation) return;
      if (this._rotation.type === "focus") return;
      ev.preventDefault();
      var mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
      var mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
      var rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
      var boundaries = this._boundaries;
      var x = mouseX - (rect.left + boundaries.left * rect.width / boundaries.width);
      var y = mouseY - (rect.top + boundaries.up * rect.height / boundaries.height);

      var angle = this._xy2angle(x, y);

      var pos = this._angle2value(angle);

      this._dragpos(pos);
    }
  }, {
    key: "_dragpos",
    value: function _dragpos(pos) {
      if (pos < this._rotation.min || pos > this._rotation.max) return;
      var handle = this._rotation.handle;
      this[handle.id] = pos;
      var event = new CustomEvent('value-changing', {
        detail: _defineProperty({}, handle.id, pos)
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_keyStep",
    value: function _keyStep(ev) {
      if (!this._rotation) return;
      var handle = this._rotation.handle;
      if (ev.key === "ArrowLeft") if (this.rtl) this._dragpos(this[handle.id] + this.step);else this._dragpos(this[handle.id] - this.step);
      if (ev.key === "ArrowRight") if (this.rtl) this._dragpos(this[handle.id] - this.step);else this._dragpos(this[handle.id] + this.step);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      document.addEventListener('mouseup', this.dragEnd.bind(this));
      document.addEventListener('touchend', this.dragEnd.bind(this), {
        passive: false
      });
      document.addEventListener('mousemove', this.drag.bind(this));
      document.addEventListener('touchmove', this.drag.bind(this), {
        passive: false
      });
      document.addEventListener('keydown', this._keyStep.bind(this));
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this2 = this;

      // Workaround for vector-effect not working in IE and pre-Chromium Edge
      // That's also why the _scale property exists
      if (this.shadowRoot.querySelector("svg") && this.shadowRoot.querySelector("svg").style.vectorEffect !== undefined) return;

      if (changedProperties.has("_scale") && this._scale != 1) {
        this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(function (e) {
          if (e.getAttribute('stroke-width')) return;
          var orig = parseFloat(getComputedStyle(e).getPropertyValue('stroke-width'));
          e.style.strokeWidth = "".concat(orig * _this2._scale, "px");
        });
      }

      var rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
      var scale = Math.max(rect.width, rect.height);
      this._scale = 2 / scale;
    }
  }, {
    key: "_renderArc",
    value: function _renderArc(start, end) {
      var diff = end - start;
      start = this._angle2xy(start);
      end = this._angle2xy(end);
      return "\n      M ".concat(start.x, " ").concat(start.y, "\n      A 1 1,\n        0,\n        ").concat(diff > Math.PI ? "1" : "0", " ").concat(this.rtl ? "0" : "1", ",\n        ").concat(end.x, " ").concat(end.y, "\n    ");
    }
  }, {
    key: "_renderHandle",
    value: function _renderHandle(id) {
      var theta = this._value2angle(this[id]);

      var pos = this._angle2xy(theta); // Two handles are drawn. One visible, and one invisible that's twice as
      // big. Makes it easier to click.


      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject(), id, id, pos.x, pos.y, pos.x + 0.001, pos.y + 0.001, 4 * this.handleSize * this._scale, id, pos.x, pos.y, pos.x + 0.001, pos.y + 0.001, 2 * this.handleSize * this._scale, this.dragStart, this.dragEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var view = this._boundaries;
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.dragStart, this.dragStart, -view.left, -view.up, view.width, view.height, this.handleSize * this.handleZoom, this._renderArc(this._start, this._end), this._enabled ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject3(), this._renderArc(this._value2angle(this.low != null ? this.low : this.min), this._value2angle(this.high != null ? this.high : this.value))) : "", this._enabled ? this.low != null ? this._reverseOrder ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this._renderHandle("high"), this._renderHandle("low")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this._renderHandle("low"), this._renderHandle("high")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), this._renderHandle("value")) : "");
    }
  }, {
    key: "_start",
    get: function get() {
      return this.startAngle * Math.PI / 180;
    }
  }, {
    key: "_len",
    get: function get() {
      // Things get weird if length is more than a complete turn
      return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
    }
  }, {
    key: "_end",
    get: function get() {
      return this._start + this._len;
    }
  }, {
    key: "_enabled",
    get: function get() {
      // If handle is disabled
      if (this.disabled) return false;
      if (this.value == null && (this.high == null || this.low == null)) return false;
      if (this.value != null && (this.value > this.max || this.value < this.min)) return false;
      if (this.high != null && (this.high > this.max || this.high < this.min)) return false;
      if (this.low != null && (this.low > this.max || this.low < this.min)) return false;
      return true;
    }
  }, {
    key: "_boundaries",
    get: function get() {
      // Get the maximum extents of the bar arc
      var start = this._angle2xy(this._start);

      var end = this._angle2xy(this._end);

      var up = 1;
      if (!this._angleInside(270)) up = Math.max(-start.y, -end.y);
      var down = 1;
      if (!this._angleInside(90)) down = Math.max(start.y, end.y);
      var left = 1;
      if (!this._angleInside(180)) left = Math.max(-start.x, -end.x);
      var right = 1;
      if (!this._angleInside(0)) right = Math.max(start.x, end.x);
      return {
        up: up,
        down: down,
        left: left,
        right: right,
        height: up + down,
        width: left + right
      };
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
    }
  }]);

  return RoundSlider;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define('round-slider', RoundSlider);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/deep-clone-simple/index.js":
/*!*************************************************!*\
  !*** ./node_modules/deep-clone-simple/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deepcopy; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function deepcopy(value) {
  if (!(!!value && _typeof(value) == 'object')) {
    return value;
  }

  if (Object.prototype.toString.call(value) == '[object Date]') {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.map(deepcopy);
  }

  var result = {};
  Object.keys(value).forEach(function (key) {
    result[key] = deepcopy(value[key]);
  });
  return result;
}

/***/ }),

/***/ "./node_modules/esprima/dist/esprima.js":
/*!**********************************************!*\
  !*** ./node_modules/esprima/dist/esprima.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  /* istanbul ignore next */
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  /* istanbul ignore next */
  else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /* istanbul ignore if */

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /*
        Copyright JS Foundation and other contributors, https://js.foundation/
      	  Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are met:
      	    * Redistributions of source code must retain the above copyright
            notice, this list of conditions and the following disclaimer.
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
      	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
        ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
        DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
        (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
        LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
        ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
        THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var comment_handler_1 = __webpack_require__(1);

      var jsx_parser_1 = __webpack_require__(3);

      var parser_1 = __webpack_require__(8);

      var tokenizer_1 = __webpack_require__(15);

      function parse(code, options, delegate) {
        var commentHandler = null;

        var proxyDelegate = function proxyDelegate(node, metadata) {
          if (delegate) {
            delegate(node, metadata);
          }

          if (commentHandler) {
            commentHandler.visit(node, metadata);
          }
        };

        var parserDelegate = typeof delegate === 'function' ? proxyDelegate : null;
        var collectComment = false;

        if (options) {
          collectComment = typeof options.comment === 'boolean' && options.comment;
          var attachComment = typeof options.attachComment === 'boolean' && options.attachComment;

          if (collectComment || attachComment) {
            commentHandler = new comment_handler_1.CommentHandler();
            commentHandler.attach = attachComment;
            options.comment = true;
            parserDelegate = proxyDelegate;
          }
        }

        var isModule = false;

        if (options && typeof options.sourceType === 'string') {
          isModule = options.sourceType === 'module';
        }

        var parser;

        if (options && typeof options.jsx === 'boolean' && options.jsx) {
          parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
        } else {
          parser = new parser_1.Parser(code, options, parserDelegate);
        }

        var program = isModule ? parser.parseModule() : parser.parseScript();
        var ast = program;

        if (collectComment && commentHandler) {
          ast.comments = commentHandler.comments;
        }

        if (parser.config.tokens) {
          ast.tokens = parser.tokens;
        }

        if (parser.config.tolerant) {
          ast.errors = parser.errorHandler.errors;
        }

        return ast;
      }

      exports.parse = parse;

      function parseModule(code, options, delegate) {
        var parsingOptions = options || {};
        parsingOptions.sourceType = 'module';
        return parse(code, parsingOptions, delegate);
      }

      exports.parseModule = parseModule;

      function parseScript(code, options, delegate) {
        var parsingOptions = options || {};
        parsingOptions.sourceType = 'script';
        return parse(code, parsingOptions, delegate);
      }

      exports.parseScript = parseScript;

      function tokenize(code, options, delegate) {
        var tokenizer = new tokenizer_1.Tokenizer(code, options);
        var tokens;
        tokens = [];

        try {
          while (true) {
            var token = tokenizer.getNextToken();

            if (!token) {
              break;
            }

            if (delegate) {
              token = delegate(token);
            }

            tokens.push(token);
          }
        } catch (e) {
          tokenizer.errorHandler.tolerate(e);
        }

        if (tokenizer.errorHandler.tolerant) {
          tokens.errors = tokenizer.errors();
        }

        return tokens;
      }

      exports.tokenize = tokenize;

      var syntax_1 = __webpack_require__(2);

      exports.Syntax = syntax_1.Syntax; // Sync with *.json manifests.

      exports.version = '4.0.1';
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var syntax_1 = __webpack_require__(2);

      var CommentHandler = function () {
        function CommentHandler() {
          this.attach = false;
          this.comments = [];
          this.stack = [];
          this.leading = [];
          this.trailing = [];
        }

        CommentHandler.prototype.insertInnerComments = function (node, metadata) {
          //  innnerComments for properties empty block
          //  `function a() {/** comments **\/}`
          if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
            var innerComments = [];

            for (var i = this.leading.length - 1; i >= 0; --i) {
              var entry = this.leading[i];

              if (metadata.end.offset >= entry.start) {
                innerComments.unshift(entry.comment);
                this.leading.splice(i, 1);
                this.trailing.splice(i, 1);
              }
            }

            if (innerComments.length) {
              node.innerComments = innerComments;
            }
          }
        };

        CommentHandler.prototype.findTrailingComments = function (metadata) {
          var trailingComments = [];

          if (this.trailing.length > 0) {
            for (var i = this.trailing.length - 1; i >= 0; --i) {
              var entry_1 = this.trailing[i];

              if (entry_1.start >= metadata.end.offset) {
                trailingComments.unshift(entry_1.comment);
              }
            }

            this.trailing.length = 0;
            return trailingComments;
          }

          var entry = this.stack[this.stack.length - 1];

          if (entry && entry.node.trailingComments) {
            var firstComment = entry.node.trailingComments[0];

            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
              trailingComments = entry.node.trailingComments;
              delete entry.node.trailingComments;
            }
          }

          return trailingComments;
        };

        CommentHandler.prototype.findLeadingComments = function (metadata) {
          var leadingComments = [];
          var target;

          while (this.stack.length > 0) {
            var entry = this.stack[this.stack.length - 1];

            if (entry && entry.start >= metadata.start.offset) {
              target = entry.node;
              this.stack.pop();
            } else {
              break;
            }
          }

          if (target) {
            var count = target.leadingComments ? target.leadingComments.length : 0;

            for (var i = count - 1; i >= 0; --i) {
              var comment = target.leadingComments[i];

              if (comment.range[1] <= metadata.start.offset) {
                leadingComments.unshift(comment);
                target.leadingComments.splice(i, 1);
              }
            }

            if (target.leadingComments && target.leadingComments.length === 0) {
              delete target.leadingComments;
            }

            return leadingComments;
          }

          for (var i = this.leading.length - 1; i >= 0; --i) {
            var entry = this.leading[i];

            if (entry.start <= metadata.start.offset) {
              leadingComments.unshift(entry.comment);
              this.leading.splice(i, 1);
            }
          }

          return leadingComments;
        };

        CommentHandler.prototype.visitNode = function (node, metadata) {
          if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
            return;
          }

          this.insertInnerComments(node, metadata);
          var trailingComments = this.findTrailingComments(metadata);
          var leadingComments = this.findLeadingComments(metadata);

          if (leadingComments.length > 0) {
            node.leadingComments = leadingComments;
          }

          if (trailingComments.length > 0) {
            node.trailingComments = trailingComments;
          }

          this.stack.push({
            node: node,
            start: metadata.start.offset
          });
        };

        CommentHandler.prototype.visitComment = function (node, metadata) {
          var type = node.type[0] === 'L' ? 'Line' : 'Block';
          var comment = {
            type: type,
            value: node.value
          };

          if (node.range) {
            comment.range = node.range;
          }

          if (node.loc) {
            comment.loc = node.loc;
          }

          this.comments.push(comment);

          if (this.attach) {
            var entry = {
              comment: {
                type: type,
                value: node.value,
                range: [metadata.start.offset, metadata.end.offset]
              },
              start: metadata.start.offset
            };

            if (node.loc) {
              entry.comment.loc = node.loc;
            }

            node.type = type;
            this.leading.push(entry);
            this.trailing.push(entry);
          }
        };

        CommentHandler.prototype.visit = function (node, metadata) {
          if (node.type === 'LineComment') {
            this.visitComment(node, metadata);
          } else if (node.type === 'BlockComment') {
            this.visitComment(node, metadata);
          } else if (this.attach) {
            this.visitNode(node, metadata);
          }
        };

        return CommentHandler;
      }();

      exports.CommentHandler = CommentHandler;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Syntax = {
        AssignmentExpression: 'AssignmentExpression',
        AssignmentPattern: 'AssignmentPattern',
        ArrayExpression: 'ArrayExpression',
        ArrayPattern: 'ArrayPattern',
        ArrowFunctionExpression: 'ArrowFunctionExpression',
        AwaitExpression: 'AwaitExpression',
        BlockStatement: 'BlockStatement',
        BinaryExpression: 'BinaryExpression',
        BreakStatement: 'BreakStatement',
        CallExpression: 'CallExpression',
        CatchClause: 'CatchClause',
        ClassBody: 'ClassBody',
        ClassDeclaration: 'ClassDeclaration',
        ClassExpression: 'ClassExpression',
        ConditionalExpression: 'ConditionalExpression',
        ContinueStatement: 'ContinueStatement',
        DoWhileStatement: 'DoWhileStatement',
        DebuggerStatement: 'DebuggerStatement',
        EmptyStatement: 'EmptyStatement',
        ExportAllDeclaration: 'ExportAllDeclaration',
        ExportDefaultDeclaration: 'ExportDefaultDeclaration',
        ExportNamedDeclaration: 'ExportNamedDeclaration',
        ExportSpecifier: 'ExportSpecifier',
        ExpressionStatement: 'ExpressionStatement',
        ForStatement: 'ForStatement',
        ForOfStatement: 'ForOfStatement',
        ForInStatement: 'ForInStatement',
        FunctionDeclaration: 'FunctionDeclaration',
        FunctionExpression: 'FunctionExpression',
        Identifier: 'Identifier',
        IfStatement: 'IfStatement',
        ImportDeclaration: 'ImportDeclaration',
        ImportDefaultSpecifier: 'ImportDefaultSpecifier',
        ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
        ImportSpecifier: 'ImportSpecifier',
        Literal: 'Literal',
        LabeledStatement: 'LabeledStatement',
        LogicalExpression: 'LogicalExpression',
        MemberExpression: 'MemberExpression',
        MetaProperty: 'MetaProperty',
        MethodDefinition: 'MethodDefinition',
        NewExpression: 'NewExpression',
        ObjectExpression: 'ObjectExpression',
        ObjectPattern: 'ObjectPattern',
        Program: 'Program',
        Property: 'Property',
        RestElement: 'RestElement',
        ReturnStatement: 'ReturnStatement',
        SequenceExpression: 'SequenceExpression',
        SpreadElement: 'SpreadElement',
        Super: 'Super',
        SwitchCase: 'SwitchCase',
        SwitchStatement: 'SwitchStatement',
        TaggedTemplateExpression: 'TaggedTemplateExpression',
        TemplateElement: 'TemplateElement',
        TemplateLiteral: 'TemplateLiteral',
        ThisExpression: 'ThisExpression',
        ThrowStatement: 'ThrowStatement',
        TryStatement: 'TryStatement',
        UnaryExpression: 'UnaryExpression',
        UpdateExpression: 'UpdateExpression',
        VariableDeclaration: 'VariableDeclaration',
        VariableDeclarator: 'VariableDeclarator',
        WhileStatement: 'WhileStatement',
        WithStatement: 'WithStatement',
        YieldExpression: 'YieldExpression'
      };
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";
      /* istanbul ignore next */

      var __extends = this && this.__extends || function () {
        var extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return function (d, b) {
          extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var character_1 = __webpack_require__(4);

      var JSXNode = __webpack_require__(5);

      var jsx_syntax_1 = __webpack_require__(6);

      var Node = __webpack_require__(7);

      var parser_1 = __webpack_require__(8);

      var token_1 = __webpack_require__(13);

      var xhtml_entities_1 = __webpack_require__(14);

      token_1.TokenName[100
      /* Identifier */
      ] = 'JSXIdentifier';
      token_1.TokenName[101
      /* Text */
      ] = 'JSXText'; // Fully qualified element name, e.g. <svg:path> returns "svg:path"

      function getQualifiedElementName(elementName) {
        var qualifiedName;

        switch (elementName.type) {
          case jsx_syntax_1.JSXSyntax.JSXIdentifier:
            var id = elementName;
            qualifiedName = id.name;
            break;

          case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
            var ns = elementName;
            qualifiedName = getQualifiedElementName(ns.namespace) + ':' + getQualifiedElementName(ns.name);
            break;

          case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
            var expr = elementName;
            qualifiedName = getQualifiedElementName(expr.object) + '.' + getQualifiedElementName(expr.property);
            break;

          /* istanbul ignore next */

          default:
            break;
        }

        return qualifiedName;
      }

      var JSXParser = function (_super) {
        __extends(JSXParser, _super);

        function JSXParser(code, options, delegate) {
          return _super.call(this, code, options, delegate) || this;
        }

        JSXParser.prototype.parsePrimaryExpression = function () {
          return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
        };

        JSXParser.prototype.startJSX = function () {
          // Unwind the scanner before the lookahead token.
          this.scanner.index = this.startMarker.index;
          this.scanner.lineNumber = this.startMarker.line;
          this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
        };

        JSXParser.prototype.finishJSX = function () {
          // Prime the next lookahead.
          this.nextToken();
        };

        JSXParser.prototype.reenterJSX = function () {
          this.startJSX();
          this.expectJSX('}'); // Pop the closing '}' added from the lookahead.

          if (this.config.tokens) {
            this.tokens.pop();
          }
        };

        JSXParser.prototype.createJSXNode = function () {
          this.collectComments();
          return {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        };

        JSXParser.prototype.createJSXChildNode = function () {
          return {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        };

        JSXParser.prototype.scanXHTMLEntity = function (quote) {
          var result = '&';
          var valid = true;
          var terminated = false;
          var numeric = false;
          var hex = false;

          while (!this.scanner.eof() && valid && !terminated) {
            var ch = this.scanner.source[this.scanner.index];

            if (ch === quote) {
              break;
            }

            terminated = ch === ';';
            result += ch;
            ++this.scanner.index;

            if (!terminated) {
              switch (result.length) {
                case 2:
                  // e.g. '&#123;'
                  numeric = ch === '#';
                  break;

                case 3:
                  if (numeric) {
                    // e.g. '&#x41;'
                    hex = ch === 'x';
                    valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                    numeric = numeric && !hex;
                  }

                  break;

                default:
                  valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
                  valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
                  break;
              }
            }
          }

          if (valid && terminated && result.length > 2) {
            // e.g. '&#x41;' becomes just '#x41'
            var str = result.substr(1, result.length - 2);

            if (numeric && str.length > 1) {
              result = String.fromCharCode(parseInt(str.substr(1), 10));
            } else if (hex && str.length > 2) {
              result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
            } else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
              result = xhtml_entities_1.XHTMLEntities[str];
            }
          }

          return result;
        }; // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.


        JSXParser.prototype.lexJSX = function () {
          var cp = this.scanner.source.charCodeAt(this.scanner.index); // < > / : = { }

          if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
            var value = this.scanner.source[this.scanner.index++];
            return {
              type: 7
              /* Punctuator */
              ,
              value: value,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: this.scanner.index - 1,
              end: this.scanner.index
            };
          } // " '


          if (cp === 34 || cp === 39) {
            var start = this.scanner.index;
            var quote = this.scanner.source[this.scanner.index++];
            var str = '';

            while (!this.scanner.eof()) {
              var ch = this.scanner.source[this.scanner.index++];

              if (ch === quote) {
                break;
              } else if (ch === '&') {
                str += this.scanXHTMLEntity(quote);
              } else {
                str += ch;
              }
            }

            return {
              type: 8
              /* StringLiteral */
              ,
              value: str,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          } // ... or .


          if (cp === 46) {
            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
            var value = n1 === 46 && n2 === 46 ? '...' : '.';
            var start = this.scanner.index;
            this.scanner.index += value.length;
            return {
              type: 7
              /* Punctuator */
              ,
              value: value,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          } // `


          if (cp === 96) {
            // Only placeholder, since it will be rescanned as a real assignment expression.
            return {
              type: 10
              /* Template */
              ,
              value: '',
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: this.scanner.index,
              end: this.scanner.index
            };
          } // Identifer can not contain backslash (char code 92).


          if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
            var start = this.scanner.index;
            ++this.scanner.index;

            while (!this.scanner.eof()) {
              var ch = this.scanner.source.charCodeAt(this.scanner.index);

              if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                ++this.scanner.index;
              } else if (ch === 45) {
                // Hyphen (char code 45) can be part of an identifier.
                ++this.scanner.index;
              } else {
                break;
              }
            }

            var id = this.scanner.source.slice(start, this.scanner.index);
            return {
              type: 100
              /* Identifier */
              ,
              value: id,
              lineNumber: this.scanner.lineNumber,
              lineStart: this.scanner.lineStart,
              start: start,
              end: this.scanner.index
            };
          }

          return this.scanner.lex();
        };

        JSXParser.prototype.nextJSXToken = function () {
          this.collectComments();
          this.startMarker.index = this.scanner.index;
          this.startMarker.line = this.scanner.lineNumber;
          this.startMarker.column = this.scanner.index - this.scanner.lineStart;
          var token = this.lexJSX();
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;

          if (this.config.tokens) {
            this.tokens.push(this.convertToken(token));
          }

          return token;
        };

        JSXParser.prototype.nextJSXText = function () {
          this.startMarker.index = this.scanner.index;
          this.startMarker.line = this.scanner.lineNumber;
          this.startMarker.column = this.scanner.index - this.scanner.lineStart;
          var start = this.scanner.index;
          var text = '';

          while (!this.scanner.eof()) {
            var ch = this.scanner.source[this.scanner.index];

            if (ch === '{' || ch === '<') {
              break;
            }

            ++this.scanner.index;
            text += ch;

            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
              ++this.scanner.lineNumber;

              if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
                ++this.scanner.index;
              }

              this.scanner.lineStart = this.scanner.index;
            }
          }

          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          var token = {
            type: 101
            /* Text */
            ,
            value: text,
            lineNumber: this.scanner.lineNumber,
            lineStart: this.scanner.lineStart,
            start: start,
            end: this.scanner.index
          };

          if (text.length > 0 && this.config.tokens) {
            this.tokens.push(this.convertToken(token));
          }

          return token;
        };

        JSXParser.prototype.peekJSXToken = function () {
          var state = this.scanner.saveState();
          this.scanner.scanComments();
          var next = this.lexJSX();
          this.scanner.restoreState(state);
          return next;
        }; // Expect the next JSX token to match the specified punctuator.
        // If not, an exception will be thrown.


        JSXParser.prototype.expectJSX = function (value) {
          var token = this.nextJSXToken();

          if (token.type !== 7
          /* Punctuator */
          || token.value !== value) {
            this.throwUnexpectedToken(token);
          }
        }; // Return true if the next JSX token matches the specified punctuator.


        JSXParser.prototype.matchJSX = function (value) {
          var next = this.peekJSXToken();
          return next.type === 7
          /* Punctuator */
          && next.value === value;
        };

        JSXParser.prototype.parseJSXIdentifier = function () {
          var node = this.createJSXNode();
          var token = this.nextJSXToken();

          if (token.type !== 100
          /* Identifier */
          ) {
              this.throwUnexpectedToken(token);
            }

          return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
        };

        JSXParser.prototype.parseJSXElementName = function () {
          var node = this.createJSXNode();
          var elementName = this.parseJSXIdentifier();

          if (this.matchJSX(':')) {
            var namespace = elementName;
            this.expectJSX(':');
            var name_1 = this.parseJSXIdentifier();
            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
          } else if (this.matchJSX('.')) {
            while (this.matchJSX('.')) {
              var object = elementName;
              this.expectJSX('.');
              var property = this.parseJSXIdentifier();
              elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
            }
          }

          return elementName;
        };

        JSXParser.prototype.parseJSXAttributeName = function () {
          var node = this.createJSXNode();
          var attributeName;
          var identifier = this.parseJSXIdentifier();

          if (this.matchJSX(':')) {
            var namespace = identifier;
            this.expectJSX(':');
            var name_2 = this.parseJSXIdentifier();
            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
          } else {
            attributeName = identifier;
          }

          return attributeName;
        };

        JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
          var node = this.createJSXNode();
          var token = this.nextJSXToken();

          if (token.type !== 8
          /* StringLiteral */
          ) {
              this.throwUnexpectedToken(token);
            }

          var raw = this.getTokenRaw(token);
          return this.finalize(node, new Node.Literal(token.value, raw));
        };

        JSXParser.prototype.parseJSXExpressionAttribute = function () {
          var node = this.createJSXNode();
          this.expectJSX('{');
          this.finishJSX();

          if (this.match('}')) {
            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
          }

          var expression = this.parseAssignmentExpression();
          this.reenterJSX();
          return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
        };

        JSXParser.prototype.parseJSXAttributeValue = function () {
          return this.matchJSX('{') ? this.parseJSXExpressionAttribute() : this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
        };

        JSXParser.prototype.parseJSXNameValueAttribute = function () {
          var node = this.createJSXNode();
          var name = this.parseJSXAttributeName();
          var value = null;

          if (this.matchJSX('=')) {
            this.expectJSX('=');
            value = this.parseJSXAttributeValue();
          }

          return this.finalize(node, new JSXNode.JSXAttribute(name, value));
        };

        JSXParser.prototype.parseJSXSpreadAttribute = function () {
          var node = this.createJSXNode();
          this.expectJSX('{');
          this.expectJSX('...');
          this.finishJSX();
          var argument = this.parseAssignmentExpression();
          this.reenterJSX();
          return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
        };

        JSXParser.prototype.parseJSXAttributes = function () {
          var attributes = [];

          while (!this.matchJSX('/') && !this.matchJSX('>')) {
            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
            attributes.push(attribute);
          }

          return attributes;
        };

        JSXParser.prototype.parseJSXOpeningElement = function () {
          var node = this.createJSXNode();
          this.expectJSX('<');
          var name = this.parseJSXElementName();
          var attributes = this.parseJSXAttributes();
          var selfClosing = this.matchJSX('/');

          if (selfClosing) {
            this.expectJSX('/');
          }

          this.expectJSX('>');
          return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
        };

        JSXParser.prototype.parseJSXBoundaryElement = function () {
          var node = this.createJSXNode();
          this.expectJSX('<');

          if (this.matchJSX('/')) {
            this.expectJSX('/');
            var name_3 = this.parseJSXElementName();
            this.expectJSX('>');
            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
          }

          var name = this.parseJSXElementName();
          var attributes = this.parseJSXAttributes();
          var selfClosing = this.matchJSX('/');

          if (selfClosing) {
            this.expectJSX('/');
          }

          this.expectJSX('>');
          return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
        };

        JSXParser.prototype.parseJSXEmptyExpression = function () {
          var node = this.createJSXChildNode();
          this.collectComments();
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          return this.finalize(node, new JSXNode.JSXEmptyExpression());
        };

        JSXParser.prototype.parseJSXExpressionContainer = function () {
          var node = this.createJSXNode();
          this.expectJSX('{');
          var expression;

          if (this.matchJSX('}')) {
            expression = this.parseJSXEmptyExpression();
            this.expectJSX('}');
          } else {
            this.finishJSX();
            expression = this.parseAssignmentExpression();
            this.reenterJSX();
          }

          return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
        };

        JSXParser.prototype.parseJSXChildren = function () {
          var children = [];

          while (!this.scanner.eof()) {
            var node = this.createJSXChildNode();
            var token = this.nextJSXText();

            if (token.start < token.end) {
              var raw = this.getTokenRaw(token);
              var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
              children.push(child);
            }

            if (this.scanner.source[this.scanner.index] === '{') {
              var container = this.parseJSXExpressionContainer();
              children.push(container);
            } else {
              break;
            }
          }

          return children;
        };

        JSXParser.prototype.parseComplexJSXElement = function (el) {
          var stack = [];

          while (!this.scanner.eof()) {
            el.children = el.children.concat(this.parseJSXChildren());
            var node = this.createJSXChildNode();
            var element = this.parseJSXBoundaryElement();

            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
              var opening = element;

              if (opening.selfClosing) {
                var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
                el.children.push(child);
              } else {
                stack.push(el);
                el = {
                  node: node,
                  opening: opening,
                  closing: null,
                  children: []
                };
              }
            }

            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
              el.closing = element;
              var open_1 = getQualifiedElementName(el.opening.name);
              var close_1 = getQualifiedElementName(el.closing.name);

              if (open_1 !== close_1) {
                this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
              }

              if (stack.length > 0) {
                var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
                el = stack[stack.length - 1];
                el.children.push(child);
                stack.pop();
              } else {
                break;
              }
            }
          }

          return el;
        };

        JSXParser.prototype.parseJSXElement = function () {
          var node = this.createJSXNode();
          var opening = this.parseJSXOpeningElement();
          var children = [];
          var closing = null;

          if (!opening.selfClosing) {
            var el = this.parseComplexJSXElement({
              node: node,
              opening: opening,
              closing: closing,
              children: children
            });
            children = el.children;
            closing = el.closing;
          }

          return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
        };

        JSXParser.prototype.parseJSXRoot = function () {
          // Pop the opening '<' added from the lookahead.
          if (this.config.tokens) {
            this.tokens.pop();
          }

          this.startJSX();
          var element = this.parseJSXElement();
          this.finishJSX();
          return element;
        };

        JSXParser.prototype.isStartOfExpression = function () {
          return _super.prototype.isStartOfExpression.call(this) || this.match('<');
        };

        return JSXParser;
      }(parser_1.Parser);

      exports.JSXParser = JSXParser;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // See also tools/generate-unicode-regex.js.

      var Regex = {
        // Unicode v8.0.0 NonAsciiIdentifierStart:
        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
        // Unicode v8.0.0 NonAsciiIdentifierPart:
        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
      };
      exports.Character = {
        /* tslint:disable:no-bitwise */
        fromCodePoint: function fromCodePoint(cp) {
          return cp < 0x10000 ? String.fromCharCode(cp) : String.fromCharCode(0xD800 + (cp - 0x10000 >> 10)) + String.fromCharCode(0xDC00 + (cp - 0x10000 & 1023));
        },
        // https://tc39.github.io/ecma262/#sec-white-space
        isWhiteSpace: function isWhiteSpace(cp) {
          return cp === 0x20 || cp === 0x09 || cp === 0x0B || cp === 0x0C || cp === 0xA0 || cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0;
        },
        // https://tc39.github.io/ecma262/#sec-line-terminators
        isLineTerminator: function isLineTerminator(cp) {
          return cp === 0x0A || cp === 0x0D || cp === 0x2028 || cp === 0x2029;
        },
        // https://tc39.github.io/ecma262/#sec-names-and-keywords
        isIdentifierStart: function isIdentifierStart(cp) {
          return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp));
        },
        isIdentifierPart: function isIdentifierPart(cp) {
          return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp >= 0x30 && cp <= 0x39 || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp));
        },
        // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
        isDecimalDigit: function isDecimalDigit(cp) {
          return cp >= 0x30 && cp <= 0x39; // 0..9
        },
        isHexDigit: function isHexDigit(cp) {
          return cp >= 0x30 && cp <= 0x39 || cp >= 0x41 && cp <= 0x46 || cp >= 0x61 && cp <= 0x66; // a..f
        },
        isOctalDigit: function isOctalDigit(cp) {
          return cp >= 0x30 && cp <= 0x37; // 0..7
        }
      };
      /***/
    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var jsx_syntax_1 = __webpack_require__(6);
      /* tslint:disable:max-classes-per-file */


      var JSXClosingElement = function () {
        function JSXClosingElement(name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
          this.name = name;
        }

        return JSXClosingElement;
      }();

      exports.JSXClosingElement = JSXClosingElement;

      var JSXElement = function () {
        function JSXElement(openingElement, children, closingElement) {
          this.type = jsx_syntax_1.JSXSyntax.JSXElement;
          this.openingElement = openingElement;
          this.children = children;
          this.closingElement = closingElement;
        }

        return JSXElement;
      }();

      exports.JSXElement = JSXElement;

      var JSXEmptyExpression = function () {
        function JSXEmptyExpression() {
          this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
        }

        return JSXEmptyExpression;
      }();

      exports.JSXEmptyExpression = JSXEmptyExpression;

      var JSXExpressionContainer = function () {
        function JSXExpressionContainer(expression) {
          this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
          this.expression = expression;
        }

        return JSXExpressionContainer;
      }();

      exports.JSXExpressionContainer = JSXExpressionContainer;

      var JSXIdentifier = function () {
        function JSXIdentifier(name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
          this.name = name;
        }

        return JSXIdentifier;
      }();

      exports.JSXIdentifier = JSXIdentifier;

      var JSXMemberExpression = function () {
        function JSXMemberExpression(object, property) {
          this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
          this.object = object;
          this.property = property;
        }

        return JSXMemberExpression;
      }();

      exports.JSXMemberExpression = JSXMemberExpression;

      var JSXAttribute = function () {
        function JSXAttribute(name, value) {
          this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
          this.name = name;
          this.value = value;
        }

        return JSXAttribute;
      }();

      exports.JSXAttribute = JSXAttribute;

      var JSXNamespacedName = function () {
        function JSXNamespacedName(namespace, name) {
          this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
          this.namespace = namespace;
          this.name = name;
        }

        return JSXNamespacedName;
      }();

      exports.JSXNamespacedName = JSXNamespacedName;

      var JSXOpeningElement = function () {
        function JSXOpeningElement(name, selfClosing, attributes) {
          this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
          this.name = name;
          this.selfClosing = selfClosing;
          this.attributes = attributes;
        }

        return JSXOpeningElement;
      }();

      exports.JSXOpeningElement = JSXOpeningElement;

      var JSXSpreadAttribute = function () {
        function JSXSpreadAttribute(argument) {
          this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
          this.argument = argument;
        }

        return JSXSpreadAttribute;
      }();

      exports.JSXSpreadAttribute = JSXSpreadAttribute;

      var JSXText = function () {
        function JSXText(value, raw) {
          this.type = jsx_syntax_1.JSXSyntax.JSXText;
          this.value = value;
          this.raw = raw;
        }

        return JSXText;
      }();

      exports.JSXText = JSXText;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.JSXSyntax = {
        JSXAttribute: 'JSXAttribute',
        JSXClosingElement: 'JSXClosingElement',
        JSXElement: 'JSXElement',
        JSXEmptyExpression: 'JSXEmptyExpression',
        JSXExpressionContainer: 'JSXExpressionContainer',
        JSXIdentifier: 'JSXIdentifier',
        JSXMemberExpression: 'JSXMemberExpression',
        JSXNamespacedName: 'JSXNamespacedName',
        JSXOpeningElement: 'JSXOpeningElement',
        JSXSpreadAttribute: 'JSXSpreadAttribute',
        JSXText: 'JSXText'
      };
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var syntax_1 = __webpack_require__(2);
      /* tslint:disable:max-classes-per-file */


      var ArrayExpression = function () {
        function ArrayExpression(elements) {
          this.type = syntax_1.Syntax.ArrayExpression;
          this.elements = elements;
        }

        return ArrayExpression;
      }();

      exports.ArrayExpression = ArrayExpression;

      var ArrayPattern = function () {
        function ArrayPattern(elements) {
          this.type = syntax_1.Syntax.ArrayPattern;
          this.elements = elements;
        }

        return ArrayPattern;
      }();

      exports.ArrayPattern = ArrayPattern;

      var ArrowFunctionExpression = function () {
        function ArrowFunctionExpression(params, body, expression) {
          this.type = syntax_1.Syntax.ArrowFunctionExpression;
          this.id = null;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = expression;
          this.async = false;
        }

        return ArrowFunctionExpression;
      }();

      exports.ArrowFunctionExpression = ArrowFunctionExpression;

      var AssignmentExpression = function () {
        function AssignmentExpression(operator, left, right) {
          this.type = syntax_1.Syntax.AssignmentExpression;
          this.operator = operator;
          this.left = left;
          this.right = right;
        }

        return AssignmentExpression;
      }();

      exports.AssignmentExpression = AssignmentExpression;

      var AssignmentPattern = function () {
        function AssignmentPattern(left, right) {
          this.type = syntax_1.Syntax.AssignmentPattern;
          this.left = left;
          this.right = right;
        }

        return AssignmentPattern;
      }();

      exports.AssignmentPattern = AssignmentPattern;

      var AsyncArrowFunctionExpression = function () {
        function AsyncArrowFunctionExpression(params, body, expression) {
          this.type = syntax_1.Syntax.ArrowFunctionExpression;
          this.id = null;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = expression;
          this.async = true;
        }

        return AsyncArrowFunctionExpression;
      }();

      exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;

      var AsyncFunctionDeclaration = function () {
        function AsyncFunctionDeclaration(id, params, body) {
          this.type = syntax_1.Syntax.FunctionDeclaration;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = false;
          this.async = true;
        }

        return AsyncFunctionDeclaration;
      }();

      exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;

      var AsyncFunctionExpression = function () {
        function AsyncFunctionExpression(id, params, body) {
          this.type = syntax_1.Syntax.FunctionExpression;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = false;
          this.expression = false;
          this.async = true;
        }

        return AsyncFunctionExpression;
      }();

      exports.AsyncFunctionExpression = AsyncFunctionExpression;

      var AwaitExpression = function () {
        function AwaitExpression(argument) {
          this.type = syntax_1.Syntax.AwaitExpression;
          this.argument = argument;
        }

        return AwaitExpression;
      }();

      exports.AwaitExpression = AwaitExpression;

      var BinaryExpression = function () {
        function BinaryExpression(operator, left, right) {
          var logical = operator === '||' || operator === '&&';
          this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
          this.operator = operator;
          this.left = left;
          this.right = right;
        }

        return BinaryExpression;
      }();

      exports.BinaryExpression = BinaryExpression;

      var BlockStatement = function () {
        function BlockStatement(body) {
          this.type = syntax_1.Syntax.BlockStatement;
          this.body = body;
        }

        return BlockStatement;
      }();

      exports.BlockStatement = BlockStatement;

      var BreakStatement = function () {
        function BreakStatement(label) {
          this.type = syntax_1.Syntax.BreakStatement;
          this.label = label;
        }

        return BreakStatement;
      }();

      exports.BreakStatement = BreakStatement;

      var CallExpression = function () {
        function CallExpression(callee, args) {
          this.type = syntax_1.Syntax.CallExpression;
          this.callee = callee;
          this.arguments = args;
        }

        return CallExpression;
      }();

      exports.CallExpression = CallExpression;

      var CatchClause = function () {
        function CatchClause(param, body) {
          this.type = syntax_1.Syntax.CatchClause;
          this.param = param;
          this.body = body;
        }

        return CatchClause;
      }();

      exports.CatchClause = CatchClause;

      var ClassBody = function () {
        function ClassBody(body) {
          this.type = syntax_1.Syntax.ClassBody;
          this.body = body;
        }

        return ClassBody;
      }();

      exports.ClassBody = ClassBody;

      var ClassDeclaration = function () {
        function ClassDeclaration(id, superClass, body) {
          this.type = syntax_1.Syntax.ClassDeclaration;
          this.id = id;
          this.superClass = superClass;
          this.body = body;
        }

        return ClassDeclaration;
      }();

      exports.ClassDeclaration = ClassDeclaration;

      var ClassExpression = function () {
        function ClassExpression(id, superClass, body) {
          this.type = syntax_1.Syntax.ClassExpression;
          this.id = id;
          this.superClass = superClass;
          this.body = body;
        }

        return ClassExpression;
      }();

      exports.ClassExpression = ClassExpression;

      var ComputedMemberExpression = function () {
        function ComputedMemberExpression(object, property) {
          this.type = syntax_1.Syntax.MemberExpression;
          this.computed = true;
          this.object = object;
          this.property = property;
        }

        return ComputedMemberExpression;
      }();

      exports.ComputedMemberExpression = ComputedMemberExpression;

      var ConditionalExpression = function () {
        function ConditionalExpression(test, consequent, alternate) {
          this.type = syntax_1.Syntax.ConditionalExpression;
          this.test = test;
          this.consequent = consequent;
          this.alternate = alternate;
        }

        return ConditionalExpression;
      }();

      exports.ConditionalExpression = ConditionalExpression;

      var ContinueStatement = function () {
        function ContinueStatement(label) {
          this.type = syntax_1.Syntax.ContinueStatement;
          this.label = label;
        }

        return ContinueStatement;
      }();

      exports.ContinueStatement = ContinueStatement;

      var DebuggerStatement = function () {
        function DebuggerStatement() {
          this.type = syntax_1.Syntax.DebuggerStatement;
        }

        return DebuggerStatement;
      }();

      exports.DebuggerStatement = DebuggerStatement;

      var Directive = function () {
        function Directive(expression, directive) {
          this.type = syntax_1.Syntax.ExpressionStatement;
          this.expression = expression;
          this.directive = directive;
        }

        return Directive;
      }();

      exports.Directive = Directive;

      var DoWhileStatement = function () {
        function DoWhileStatement(body, test) {
          this.type = syntax_1.Syntax.DoWhileStatement;
          this.body = body;
          this.test = test;
        }

        return DoWhileStatement;
      }();

      exports.DoWhileStatement = DoWhileStatement;

      var EmptyStatement = function () {
        function EmptyStatement() {
          this.type = syntax_1.Syntax.EmptyStatement;
        }

        return EmptyStatement;
      }();

      exports.EmptyStatement = EmptyStatement;

      var ExportAllDeclaration = function () {
        function ExportAllDeclaration(source) {
          this.type = syntax_1.Syntax.ExportAllDeclaration;
          this.source = source;
        }

        return ExportAllDeclaration;
      }();

      exports.ExportAllDeclaration = ExportAllDeclaration;

      var ExportDefaultDeclaration = function () {
        function ExportDefaultDeclaration(declaration) {
          this.type = syntax_1.Syntax.ExportDefaultDeclaration;
          this.declaration = declaration;
        }

        return ExportDefaultDeclaration;
      }();

      exports.ExportDefaultDeclaration = ExportDefaultDeclaration;

      var ExportNamedDeclaration = function () {
        function ExportNamedDeclaration(declaration, specifiers, source) {
          this.type = syntax_1.Syntax.ExportNamedDeclaration;
          this.declaration = declaration;
          this.specifiers = specifiers;
          this.source = source;
        }

        return ExportNamedDeclaration;
      }();

      exports.ExportNamedDeclaration = ExportNamedDeclaration;

      var ExportSpecifier = function () {
        function ExportSpecifier(local, exported) {
          this.type = syntax_1.Syntax.ExportSpecifier;
          this.exported = exported;
          this.local = local;
        }

        return ExportSpecifier;
      }();

      exports.ExportSpecifier = ExportSpecifier;

      var ExpressionStatement = function () {
        function ExpressionStatement(expression) {
          this.type = syntax_1.Syntax.ExpressionStatement;
          this.expression = expression;
        }

        return ExpressionStatement;
      }();

      exports.ExpressionStatement = ExpressionStatement;

      var ForInStatement = function () {
        function ForInStatement(left, right, body) {
          this.type = syntax_1.Syntax.ForInStatement;
          this.left = left;
          this.right = right;
          this.body = body;
          this.each = false;
        }

        return ForInStatement;
      }();

      exports.ForInStatement = ForInStatement;

      var ForOfStatement = function () {
        function ForOfStatement(left, right, body) {
          this.type = syntax_1.Syntax.ForOfStatement;
          this.left = left;
          this.right = right;
          this.body = body;
        }

        return ForOfStatement;
      }();

      exports.ForOfStatement = ForOfStatement;

      var ForStatement = function () {
        function ForStatement(init, test, update, body) {
          this.type = syntax_1.Syntax.ForStatement;
          this.init = init;
          this.test = test;
          this.update = update;
          this.body = body;
        }

        return ForStatement;
      }();

      exports.ForStatement = ForStatement;

      var FunctionDeclaration = function () {
        function FunctionDeclaration(id, params, body, generator) {
          this.type = syntax_1.Syntax.FunctionDeclaration;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = generator;
          this.expression = false;
          this.async = false;
        }

        return FunctionDeclaration;
      }();

      exports.FunctionDeclaration = FunctionDeclaration;

      var FunctionExpression = function () {
        function FunctionExpression(id, params, body, generator) {
          this.type = syntax_1.Syntax.FunctionExpression;
          this.id = id;
          this.params = params;
          this.body = body;
          this.generator = generator;
          this.expression = false;
          this.async = false;
        }

        return FunctionExpression;
      }();

      exports.FunctionExpression = FunctionExpression;

      var Identifier = function () {
        function Identifier(name) {
          this.type = syntax_1.Syntax.Identifier;
          this.name = name;
        }

        return Identifier;
      }();

      exports.Identifier = Identifier;

      var IfStatement = function () {
        function IfStatement(test, consequent, alternate) {
          this.type = syntax_1.Syntax.IfStatement;
          this.test = test;
          this.consequent = consequent;
          this.alternate = alternate;
        }

        return IfStatement;
      }();

      exports.IfStatement = IfStatement;

      var ImportDeclaration = function () {
        function ImportDeclaration(specifiers, source) {
          this.type = syntax_1.Syntax.ImportDeclaration;
          this.specifiers = specifiers;
          this.source = source;
        }

        return ImportDeclaration;
      }();

      exports.ImportDeclaration = ImportDeclaration;

      var ImportDefaultSpecifier = function () {
        function ImportDefaultSpecifier(local) {
          this.type = syntax_1.Syntax.ImportDefaultSpecifier;
          this.local = local;
        }

        return ImportDefaultSpecifier;
      }();

      exports.ImportDefaultSpecifier = ImportDefaultSpecifier;

      var ImportNamespaceSpecifier = function () {
        function ImportNamespaceSpecifier(local) {
          this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
          this.local = local;
        }

        return ImportNamespaceSpecifier;
      }();

      exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;

      var ImportSpecifier = function () {
        function ImportSpecifier(local, imported) {
          this.type = syntax_1.Syntax.ImportSpecifier;
          this.local = local;
          this.imported = imported;
        }

        return ImportSpecifier;
      }();

      exports.ImportSpecifier = ImportSpecifier;

      var LabeledStatement = function () {
        function LabeledStatement(label, body) {
          this.type = syntax_1.Syntax.LabeledStatement;
          this.label = label;
          this.body = body;
        }

        return LabeledStatement;
      }();

      exports.LabeledStatement = LabeledStatement;

      var Literal = function () {
        function Literal(value, raw) {
          this.type = syntax_1.Syntax.Literal;
          this.value = value;
          this.raw = raw;
        }

        return Literal;
      }();

      exports.Literal = Literal;

      var MetaProperty = function () {
        function MetaProperty(meta, property) {
          this.type = syntax_1.Syntax.MetaProperty;
          this.meta = meta;
          this.property = property;
        }

        return MetaProperty;
      }();

      exports.MetaProperty = MetaProperty;

      var MethodDefinition = function () {
        function MethodDefinition(key, computed, value, kind, isStatic) {
          this.type = syntax_1.Syntax.MethodDefinition;
          this.key = key;
          this.computed = computed;
          this.value = value;
          this.kind = kind;
          this["static"] = isStatic;
        }

        return MethodDefinition;
      }();

      exports.MethodDefinition = MethodDefinition;

      var Module = function () {
        function Module(body) {
          this.type = syntax_1.Syntax.Program;
          this.body = body;
          this.sourceType = 'module';
        }

        return Module;
      }();

      exports.Module = Module;

      var NewExpression = function () {
        function NewExpression(callee, args) {
          this.type = syntax_1.Syntax.NewExpression;
          this.callee = callee;
          this.arguments = args;
        }

        return NewExpression;
      }();

      exports.NewExpression = NewExpression;

      var ObjectExpression = function () {
        function ObjectExpression(properties) {
          this.type = syntax_1.Syntax.ObjectExpression;
          this.properties = properties;
        }

        return ObjectExpression;
      }();

      exports.ObjectExpression = ObjectExpression;

      var ObjectPattern = function () {
        function ObjectPattern(properties) {
          this.type = syntax_1.Syntax.ObjectPattern;
          this.properties = properties;
        }

        return ObjectPattern;
      }();

      exports.ObjectPattern = ObjectPattern;

      var Property = function () {
        function Property(kind, key, computed, value, method, shorthand) {
          this.type = syntax_1.Syntax.Property;
          this.key = key;
          this.computed = computed;
          this.value = value;
          this.kind = kind;
          this.method = method;
          this.shorthand = shorthand;
        }

        return Property;
      }();

      exports.Property = Property;

      var RegexLiteral = function () {
        function RegexLiteral(value, raw, pattern, flags) {
          this.type = syntax_1.Syntax.Literal;
          this.value = value;
          this.raw = raw;
          this.regex = {
            pattern: pattern,
            flags: flags
          };
        }

        return RegexLiteral;
      }();

      exports.RegexLiteral = RegexLiteral;

      var RestElement = function () {
        function RestElement(argument) {
          this.type = syntax_1.Syntax.RestElement;
          this.argument = argument;
        }

        return RestElement;
      }();

      exports.RestElement = RestElement;

      var ReturnStatement = function () {
        function ReturnStatement(argument) {
          this.type = syntax_1.Syntax.ReturnStatement;
          this.argument = argument;
        }

        return ReturnStatement;
      }();

      exports.ReturnStatement = ReturnStatement;

      var Script = function () {
        function Script(body) {
          this.type = syntax_1.Syntax.Program;
          this.body = body;
          this.sourceType = 'script';
        }

        return Script;
      }();

      exports.Script = Script;

      var SequenceExpression = function () {
        function SequenceExpression(expressions) {
          this.type = syntax_1.Syntax.SequenceExpression;
          this.expressions = expressions;
        }

        return SequenceExpression;
      }();

      exports.SequenceExpression = SequenceExpression;

      var SpreadElement = function () {
        function SpreadElement(argument) {
          this.type = syntax_1.Syntax.SpreadElement;
          this.argument = argument;
        }

        return SpreadElement;
      }();

      exports.SpreadElement = SpreadElement;

      var StaticMemberExpression = function () {
        function StaticMemberExpression(object, property) {
          this.type = syntax_1.Syntax.MemberExpression;
          this.computed = false;
          this.object = object;
          this.property = property;
        }

        return StaticMemberExpression;
      }();

      exports.StaticMemberExpression = StaticMemberExpression;

      var Super = function () {
        function Super() {
          this.type = syntax_1.Syntax.Super;
        }

        return Super;
      }();

      exports.Super = Super;

      var SwitchCase = function () {
        function SwitchCase(test, consequent) {
          this.type = syntax_1.Syntax.SwitchCase;
          this.test = test;
          this.consequent = consequent;
        }

        return SwitchCase;
      }();

      exports.SwitchCase = SwitchCase;

      var SwitchStatement = function () {
        function SwitchStatement(discriminant, cases) {
          this.type = syntax_1.Syntax.SwitchStatement;
          this.discriminant = discriminant;
          this.cases = cases;
        }

        return SwitchStatement;
      }();

      exports.SwitchStatement = SwitchStatement;

      var TaggedTemplateExpression = function () {
        function TaggedTemplateExpression(tag, quasi) {
          this.type = syntax_1.Syntax.TaggedTemplateExpression;
          this.tag = tag;
          this.quasi = quasi;
        }

        return TaggedTemplateExpression;
      }();

      exports.TaggedTemplateExpression = TaggedTemplateExpression;

      var TemplateElement = function () {
        function TemplateElement(value, tail) {
          this.type = syntax_1.Syntax.TemplateElement;
          this.value = value;
          this.tail = tail;
        }

        return TemplateElement;
      }();

      exports.TemplateElement = TemplateElement;

      var TemplateLiteral = function () {
        function TemplateLiteral(quasis, expressions) {
          this.type = syntax_1.Syntax.TemplateLiteral;
          this.quasis = quasis;
          this.expressions = expressions;
        }

        return TemplateLiteral;
      }();

      exports.TemplateLiteral = TemplateLiteral;

      var ThisExpression = function () {
        function ThisExpression() {
          this.type = syntax_1.Syntax.ThisExpression;
        }

        return ThisExpression;
      }();

      exports.ThisExpression = ThisExpression;

      var ThrowStatement = function () {
        function ThrowStatement(argument) {
          this.type = syntax_1.Syntax.ThrowStatement;
          this.argument = argument;
        }

        return ThrowStatement;
      }();

      exports.ThrowStatement = ThrowStatement;

      var TryStatement = function () {
        function TryStatement(block, handler, finalizer) {
          this.type = syntax_1.Syntax.TryStatement;
          this.block = block;
          this.handler = handler;
          this.finalizer = finalizer;
        }

        return TryStatement;
      }();

      exports.TryStatement = TryStatement;

      var UnaryExpression = function () {
        function UnaryExpression(operator, argument) {
          this.type = syntax_1.Syntax.UnaryExpression;
          this.operator = operator;
          this.argument = argument;
          this.prefix = true;
        }

        return UnaryExpression;
      }();

      exports.UnaryExpression = UnaryExpression;

      var UpdateExpression = function () {
        function UpdateExpression(operator, argument, prefix) {
          this.type = syntax_1.Syntax.UpdateExpression;
          this.operator = operator;
          this.argument = argument;
          this.prefix = prefix;
        }

        return UpdateExpression;
      }();

      exports.UpdateExpression = UpdateExpression;

      var VariableDeclaration = function () {
        function VariableDeclaration(declarations, kind) {
          this.type = syntax_1.Syntax.VariableDeclaration;
          this.declarations = declarations;
          this.kind = kind;
        }

        return VariableDeclaration;
      }();

      exports.VariableDeclaration = VariableDeclaration;

      var VariableDeclarator = function () {
        function VariableDeclarator(id, init) {
          this.type = syntax_1.Syntax.VariableDeclarator;
          this.id = id;
          this.init = init;
        }

        return VariableDeclarator;
      }();

      exports.VariableDeclarator = VariableDeclarator;

      var WhileStatement = function () {
        function WhileStatement(test, body) {
          this.type = syntax_1.Syntax.WhileStatement;
          this.test = test;
          this.body = body;
        }

        return WhileStatement;
      }();

      exports.WhileStatement = WhileStatement;

      var WithStatement = function () {
        function WithStatement(object, body) {
          this.type = syntax_1.Syntax.WithStatement;
          this.object = object;
          this.body = body;
        }

        return WithStatement;
      }();

      exports.WithStatement = WithStatement;

      var YieldExpression = function () {
        function YieldExpression(argument, delegate) {
          this.type = syntax_1.Syntax.YieldExpression;
          this.argument = argument;
          this.delegate = delegate;
        }

        return YieldExpression;
      }();

      exports.YieldExpression = YieldExpression;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var assert_1 = __webpack_require__(9);

      var error_handler_1 = __webpack_require__(10);

      var messages_1 = __webpack_require__(11);

      var Node = __webpack_require__(7);

      var scanner_1 = __webpack_require__(12);

      var syntax_1 = __webpack_require__(2);

      var token_1 = __webpack_require__(13);

      var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';

      var Parser = function () {
        function Parser(code, options, delegate) {
          if (options === void 0) {
            options = {};
          }

          this.config = {
            range: typeof options.range === 'boolean' && options.range,
            loc: typeof options.loc === 'boolean' && options.loc,
            source: null,
            tokens: typeof options.tokens === 'boolean' && options.tokens,
            comment: typeof options.comment === 'boolean' && options.comment,
            tolerant: typeof options.tolerant === 'boolean' && options.tolerant
          };

          if (this.config.loc && options.source && options.source !== null) {
            this.config.source = String(options.source);
          }

          this.delegate = delegate;
          this.errorHandler = new error_handler_1.ErrorHandler();
          this.errorHandler.tolerant = this.config.tolerant;
          this.scanner = new scanner_1.Scanner(code, this.errorHandler);
          this.scanner.trackComment = this.config.comment;
          this.operatorPrecedence = {
            ')': 0,
            ';': 0,
            ',': 0,
            '=': 0,
            ']': 0,
            '||': 1,
            '&&': 2,
            '|': 3,
            '^': 4,
            '&': 5,
            '==': 6,
            '!=': 6,
            '===': 6,
            '!==': 6,
            '<': 7,
            '>': 7,
            '<=': 7,
            '>=': 7,
            '<<': 8,
            '>>': 8,
            '>>>': 8,
            '+': 9,
            '-': 9,
            '*': 11,
            '/': 11,
            '%': 11
          };
          this.lookahead = {
            type: 2
            /* EOF */
            ,
            value: '',
            lineNumber: this.scanner.lineNumber,
            lineStart: 0,
            start: 0,
            end: 0
          };
          this.hasLineTerminator = false;
          this.context = {
            isModule: false,
            "await": false,
            allowIn: true,
            allowStrictDirective: true,
            allowYield: true,
            firstCoverInitializedNameError: null,
            isAssignmentTarget: false,
            isBindingElement: false,
            inFunctionBody: false,
            inIteration: false,
            inSwitch: false,
            labelSet: {},
            strict: false
          };
          this.tokens = [];
          this.startMarker = {
            index: 0,
            line: this.scanner.lineNumber,
            column: 0
          };
          this.lastMarker = {
            index: 0,
            line: this.scanner.lineNumber,
            column: 0
          };
          this.nextToken();
          this.lastMarker = {
            index: this.scanner.index,
            line: this.scanner.lineNumber,
            column: this.scanner.index - this.scanner.lineStart
          };
        }

        Parser.prototype.throwError = function (messageFormat) {
          var values = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
          }

          var args = Array.prototype.slice.call(arguments, 1);
          var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
            assert_1.assert(idx < args.length, 'Message reference must be in range');
            return args[idx];
          });
          var index = this.lastMarker.index;
          var line = this.lastMarker.line;
          var column = this.lastMarker.column + 1;
          throw this.errorHandler.createError(index, line, column, msg);
        };

        Parser.prototype.tolerateError = function (messageFormat) {
          var values = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
          }

          var args = Array.prototype.slice.call(arguments, 1);
          var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
            assert_1.assert(idx < args.length, 'Message reference must be in range');
            return args[idx];
          });
          var index = this.lastMarker.index;
          var line = this.scanner.lineNumber;
          var column = this.lastMarker.column + 1;
          this.errorHandler.tolerateError(index, line, column, msg);
        }; // Throw an exception because of the token.


        Parser.prototype.unexpectedTokenError = function (token, message) {
          var msg = message || messages_1.Messages.UnexpectedToken;
          var value;

          if (token) {
            if (!message) {
              msg = token.type === 2
              /* EOF */
              ? messages_1.Messages.UnexpectedEOS : token.type === 3
              /* Identifier */
              ? messages_1.Messages.UnexpectedIdentifier : token.type === 6
              /* NumericLiteral */
              ? messages_1.Messages.UnexpectedNumber : token.type === 8
              /* StringLiteral */
              ? messages_1.Messages.UnexpectedString : token.type === 10
              /* Template */
              ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;

              if (token.type === 4
              /* Keyword */
              ) {
                  if (this.scanner.isFutureReservedWord(token.value)) {
                    msg = messages_1.Messages.UnexpectedReserved;
                  } else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
                    msg = messages_1.Messages.StrictReservedWord;
                  }
                }
            }

            value = token.value;
          } else {
            value = 'ILLEGAL';
          }

          msg = msg.replace('%0', value);

          if (token && typeof token.lineNumber === 'number') {
            var index = token.start;
            var line = token.lineNumber;
            var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
            var column = token.start - lastMarkerLineStart + 1;
            return this.errorHandler.createError(index, line, column, msg);
          } else {
            var index = this.lastMarker.index;
            var line = this.lastMarker.line;
            var column = this.lastMarker.column + 1;
            return this.errorHandler.createError(index, line, column, msg);
          }
        };

        Parser.prototype.throwUnexpectedToken = function (token, message) {
          throw this.unexpectedTokenError(token, message);
        };

        Parser.prototype.tolerateUnexpectedToken = function (token, message) {
          this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
        };

        Parser.prototype.collectComments = function () {
          if (!this.config.comment) {
            this.scanner.scanComments();
          } else {
            var comments = this.scanner.scanComments();

            if (comments.length > 0 && this.delegate) {
              for (var i = 0; i < comments.length; ++i) {
                var e = comments[i];
                var node = void 0;
                node = {
                  type: e.multiLine ? 'BlockComment' : 'LineComment',
                  value: this.scanner.source.slice(e.slice[0], e.slice[1])
                };

                if (this.config.range) {
                  node.range = e.range;
                }

                if (this.config.loc) {
                  node.loc = e.loc;
                }

                var metadata = {
                  start: {
                    line: e.loc.start.line,
                    column: e.loc.start.column,
                    offset: e.range[0]
                  },
                  end: {
                    line: e.loc.end.line,
                    column: e.loc.end.column,
                    offset: e.range[1]
                  }
                };
                this.delegate(node, metadata);
              }
            }
          }
        }; // From internal representation to an external structure


        Parser.prototype.getTokenRaw = function (token) {
          return this.scanner.source.slice(token.start, token.end);
        };

        Parser.prototype.convertToken = function (token) {
          var t = {
            type: token_1.TokenName[token.type],
            value: this.getTokenRaw(token)
          };

          if (this.config.range) {
            t.range = [token.start, token.end];
          }

          if (this.config.loc) {
            t.loc = {
              start: {
                line: this.startMarker.line,
                column: this.startMarker.column
              },
              end: {
                line: this.scanner.lineNumber,
                column: this.scanner.index - this.scanner.lineStart
              }
            };
          }

          if (token.type === 9
          /* RegularExpression */
          ) {
              var pattern = token.pattern;
              var flags = token.flags;
              t.regex = {
                pattern: pattern,
                flags: flags
              };
            }

          return t;
        };

        Parser.prototype.nextToken = function () {
          var token = this.lookahead;
          this.lastMarker.index = this.scanner.index;
          this.lastMarker.line = this.scanner.lineNumber;
          this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
          this.collectComments();

          if (this.scanner.index !== this.startMarker.index) {
            this.startMarker.index = this.scanner.index;
            this.startMarker.line = this.scanner.lineNumber;
            this.startMarker.column = this.scanner.index - this.scanner.lineStart;
          }

          var next = this.scanner.lex();
          this.hasLineTerminator = token.lineNumber !== next.lineNumber;

          if (next && this.context.strict && next.type === 3
          /* Identifier */
          ) {
              if (this.scanner.isStrictModeReservedWord(next.value)) {
                next.type = 4
                /* Keyword */
                ;
              }
            }

          this.lookahead = next;

          if (this.config.tokens && next.type !== 2
          /* EOF */
          ) {
              this.tokens.push(this.convertToken(next));
            }

          return token;
        };

        Parser.prototype.nextRegexToken = function () {
          this.collectComments();
          var token = this.scanner.scanRegExp();

          if (this.config.tokens) {
            // Pop the previous token, '/' or '/='
            // This is added from the lookahead token.
            this.tokens.pop();
            this.tokens.push(this.convertToken(token));
          } // Prime the next lookahead.


          this.lookahead = token;
          this.nextToken();
          return token;
        };

        Parser.prototype.createNode = function () {
          return {
            index: this.startMarker.index,
            line: this.startMarker.line,
            column: this.startMarker.column
          };
        };

        Parser.prototype.startNode = function (token, lastLineStart) {
          if (lastLineStart === void 0) {
            lastLineStart = 0;
          }

          var column = token.start - token.lineStart;
          var line = token.lineNumber;

          if (column < 0) {
            column += lastLineStart;
            line--;
          }

          return {
            index: token.start,
            line: line,
            column: column
          };
        };

        Parser.prototype.finalize = function (marker, node) {
          if (this.config.range) {
            node.range = [marker.index, this.lastMarker.index];
          }

          if (this.config.loc) {
            node.loc = {
              start: {
                line: marker.line,
                column: marker.column
              },
              end: {
                line: this.lastMarker.line,
                column: this.lastMarker.column
              }
            };

            if (this.config.source) {
              node.loc.source = this.config.source;
            }
          }

          if (this.delegate) {
            var metadata = {
              start: {
                line: marker.line,
                column: marker.column,
                offset: marker.index
              },
              end: {
                line: this.lastMarker.line,
                column: this.lastMarker.column,
                offset: this.lastMarker.index
              }
            };
            this.delegate(node, metadata);
          }

          return node;
        }; // Expect the next token to match the specified punctuator.
        // If not, an exception will be thrown.


        Parser.prototype.expect = function (value) {
          var token = this.nextToken();

          if (token.type !== 7
          /* Punctuator */
          || token.value !== value) {
            this.throwUnexpectedToken(token);
          }
        }; // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().


        Parser.prototype.expectCommaSeparator = function () {
          if (this.config.tolerant) {
            var token = this.lookahead;

            if (token.type === 7
            /* Punctuator */
            && token.value === ',') {
              this.nextToken();
            } else if (token.type === 7
            /* Punctuator */
            && token.value === ';') {
              this.nextToken();
              this.tolerateUnexpectedToken(token);
            } else {
              this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
            }
          } else {
            this.expect(',');
          }
        }; // Expect the next token to match the specified keyword.
        // If not, an exception will be thrown.


        Parser.prototype.expectKeyword = function (keyword) {
          var token = this.nextToken();

          if (token.type !== 4
          /* Keyword */
          || token.value !== keyword) {
            this.throwUnexpectedToken(token);
          }
        }; // Return true if the next token matches the specified punctuator.


        Parser.prototype.match = function (value) {
          return this.lookahead.type === 7
          /* Punctuator */
          && this.lookahead.value === value;
        }; // Return true if the next token matches the specified keyword


        Parser.prototype.matchKeyword = function (keyword) {
          return this.lookahead.type === 4
          /* Keyword */
          && this.lookahead.value === keyword;
        }; // Return true if the next token matches the specified contextual keyword
        // (where an identifier is sometimes a keyword depending on the context)


        Parser.prototype.matchContextualKeyword = function (keyword) {
          return this.lookahead.type === 3
          /* Identifier */
          && this.lookahead.value === keyword;
        }; // Return true if the next token is an assignment operator


        Parser.prototype.matchAssign = function () {
          if (this.lookahead.type !== 7
          /* Punctuator */
          ) {
              return false;
            }

          var op = this.lookahead.value;
          return op === '=' || op === '*=' || op === '**=' || op === '/=' || op === '%=' || op === '+=' || op === '-=' || op === '<<=' || op === '>>=' || op === '>>>=' || op === '&=' || op === '^=' || op === '|=';
        }; // Cover grammar support.
        //
        // When an assignment expression position starts with an left parenthesis, the determination of the type
        // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
        // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
        //
        // There are three productions that can be parsed in a parentheses pair that needs to be determined
        // after the outermost pair is closed. They are:
        //
        //   1. AssignmentExpression
        //   2. BindingElements
        //   3. AssignmentTargets
        //
        // In order to avoid exponential backtracking, we use two flags to denote if the production can be
        // binding element or assignment target.
        //
        // The three productions have the relationship:
        //
        //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
        //
        // with a single exception that CoverInitializedName when used directly in an Expression, generates
        // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
        // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
        //
        // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
        // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
        // the CoverInitializedName check is conducted.
        //
        // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
        // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
        // pattern. The CoverInitializedName check is deferred.


        Parser.prototype.isolateCoverGrammar = function (parseFunction) {
          var previousIsBindingElement = this.context.isBindingElement;
          var previousIsAssignmentTarget = this.context.isAssignmentTarget;
          var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
          this.context.isBindingElement = true;
          this.context.isAssignmentTarget = true;
          this.context.firstCoverInitializedNameError = null;
          var result = parseFunction.call(this);

          if (this.context.firstCoverInitializedNameError !== null) {
            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
          }

          this.context.isBindingElement = previousIsBindingElement;
          this.context.isAssignmentTarget = previousIsAssignmentTarget;
          this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
          return result;
        };

        Parser.prototype.inheritCoverGrammar = function (parseFunction) {
          var previousIsBindingElement = this.context.isBindingElement;
          var previousIsAssignmentTarget = this.context.isAssignmentTarget;
          var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
          this.context.isBindingElement = true;
          this.context.isAssignmentTarget = true;
          this.context.firstCoverInitializedNameError = null;
          var result = parseFunction.call(this);
          this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
          this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
          this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
          return result;
        };

        Parser.prototype.consumeSemicolon = function () {
          if (this.match(';')) {
            this.nextToken();
          } else if (!this.hasLineTerminator) {
            if (this.lookahead.type !== 2
            /* EOF */
            && !this.match('}')) {
              this.throwUnexpectedToken(this.lookahead);
            }

            this.lastMarker.index = this.startMarker.index;
            this.lastMarker.line = this.startMarker.line;
            this.lastMarker.column = this.startMarker.column;
          }
        }; // https://tc39.github.io/ecma262/#sec-primary-expression


        Parser.prototype.parsePrimaryExpression = function () {
          var node = this.createNode();
          var expr;
          var token, raw;

          switch (this.lookahead.type) {
            case 3
            /* Identifier */
            :
              if ((this.context.isModule || this.context["await"]) && this.lookahead.value === 'await') {
                this.tolerateUnexpectedToken(this.lookahead);
              }

              expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
              break;

            case 6
            /* NumericLiteral */
            :
            case 8
            /* StringLiteral */
            :
              if (this.context.strict && this.lookahead.octal) {
                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
              }

              this.context.isAssignmentTarget = false;
              this.context.isBindingElement = false;
              token = this.nextToken();
              raw = this.getTokenRaw(token);
              expr = this.finalize(node, new Node.Literal(token.value, raw));
              break;

            case 1
            /* BooleanLiteral */
            :
              this.context.isAssignmentTarget = false;
              this.context.isBindingElement = false;
              token = this.nextToken();
              raw = this.getTokenRaw(token);
              expr = this.finalize(node, new Node.Literal(token.value === 'true', raw));
              break;

            case 5
            /* NullLiteral */
            :
              this.context.isAssignmentTarget = false;
              this.context.isBindingElement = false;
              token = this.nextToken();
              raw = this.getTokenRaw(token);
              expr = this.finalize(node, new Node.Literal(null, raw));
              break;

            case 10
            /* Template */
            :
              expr = this.parseTemplateLiteral();
              break;

            case 7
            /* Punctuator */
            :
              switch (this.lookahead.value) {
                case '(':
                  this.context.isBindingElement = false;
                  expr = this.inheritCoverGrammar(this.parseGroupExpression);
                  break;

                case '[':
                  expr = this.inheritCoverGrammar(this.parseArrayInitializer);
                  break;

                case '{':
                  expr = this.inheritCoverGrammar(this.parseObjectInitializer);
                  break;

                case '/':
                case '/=':
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  this.scanner.index = this.startMarker.index;
                  token = this.nextRegexToken();
                  raw = this.getTokenRaw(token);
                  expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
                  break;

                default:
                  expr = this.throwUnexpectedToken(this.nextToken());
              }

              break;

            case 4
            /* Keyword */
            :
              if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
                expr = this.parseIdentifierName();
              } else if (!this.context.strict && this.matchKeyword('let')) {
                expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
              } else {
                this.context.isAssignmentTarget = false;
                this.context.isBindingElement = false;

                if (this.matchKeyword('function')) {
                  expr = this.parseFunctionExpression();
                } else if (this.matchKeyword('this')) {
                  this.nextToken();
                  expr = this.finalize(node, new Node.ThisExpression());
                } else if (this.matchKeyword('class')) {
                  expr = this.parseClassExpression();
                } else {
                  expr = this.throwUnexpectedToken(this.nextToken());
                }
              }

              break;

            default:
              expr = this.throwUnexpectedToken(this.nextToken());
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-array-initializer


        Parser.prototype.parseSpreadElement = function () {
          var node = this.createNode();
          this.expect('...');
          var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
          return this.finalize(node, new Node.SpreadElement(arg));
        };

        Parser.prototype.parseArrayInitializer = function () {
          var node = this.createNode();
          var elements = [];
          this.expect('[');

          while (!this.match(']')) {
            if (this.match(',')) {
              this.nextToken();
              elements.push(null);
            } else if (this.match('...')) {
              var element = this.parseSpreadElement();

              if (!this.match(']')) {
                this.context.isAssignmentTarget = false;
                this.context.isBindingElement = false;
                this.expect(',');
              }

              elements.push(element);
            } else {
              elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));

              if (!this.match(']')) {
                this.expect(',');
              }
            }
          }

          this.expect(']');
          return this.finalize(node, new Node.ArrayExpression(elements));
        }; // https://tc39.github.io/ecma262/#sec-object-initializer


        Parser.prototype.parsePropertyMethod = function (params) {
          this.context.isAssignmentTarget = false;
          this.context.isBindingElement = false;
          var previousStrict = this.context.strict;
          var previousAllowStrictDirective = this.context.allowStrictDirective;
          this.context.allowStrictDirective = params.simple;
          var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);

          if (this.context.strict && params.firstRestricted) {
            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
          }

          if (this.context.strict && params.stricted) {
            this.tolerateUnexpectedToken(params.stricted, params.message);
          }

          this.context.strict = previousStrict;
          this.context.allowStrictDirective = previousAllowStrictDirective;
          return body;
        };

        Parser.prototype.parsePropertyMethodFunction = function () {
          var isGenerator = false;
          var node = this.createNode();
          var previousAllowYield = this.context.allowYield;
          this.context.allowYield = true;
          var params = this.parseFormalParameters();
          var method = this.parsePropertyMethod(params);
          this.context.allowYield = previousAllowYield;
          return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
        };

        Parser.prototype.parsePropertyMethodAsyncFunction = function () {
          var node = this.createNode();
          var previousAllowYield = this.context.allowYield;
          var previousAwait = this.context["await"];
          this.context.allowYield = false;
          this.context["await"] = true;
          var params = this.parseFormalParameters();
          var method = this.parsePropertyMethod(params);
          this.context.allowYield = previousAllowYield;
          this.context["await"] = previousAwait;
          return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
        };

        Parser.prototype.parseObjectPropertyKey = function () {
          var node = this.createNode();
          var token = this.nextToken();
          var key;

          switch (token.type) {
            case 8
            /* StringLiteral */
            :
            case 6
            /* NumericLiteral */
            :
              if (this.context.strict && token.octal) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
              }

              var raw = this.getTokenRaw(token);
              key = this.finalize(node, new Node.Literal(token.value, raw));
              break;

            case 3
            /* Identifier */
            :
            case 1
            /* BooleanLiteral */
            :
            case 5
            /* NullLiteral */
            :
            case 4
            /* Keyword */
            :
              key = this.finalize(node, new Node.Identifier(token.value));
              break;

            case 7
            /* Punctuator */
            :
              if (token.value === '[') {
                key = this.isolateCoverGrammar(this.parseAssignmentExpression);
                this.expect(']');
              } else {
                key = this.throwUnexpectedToken(token);
              }

              break;

            default:
              key = this.throwUnexpectedToken(token);
          }

          return key;
        };

        Parser.prototype.isPropertyKey = function (key, value) {
          return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
        };

        Parser.prototype.parseObjectProperty = function (hasProto) {
          var node = this.createNode();
          var token = this.lookahead;
          var kind;
          var key = null;
          var value = null;
          var computed = false;
          var method = false;
          var shorthand = false;
          var isAsync = false;

          if (token.type === 3
          /* Identifier */
          ) {
              var id = token.value;
              this.nextToken();
              computed = this.match('[');
              isAsync = !this.hasLineTerminator && id === 'async' && !this.match(':') && !this.match('(') && !this.match('*') && !this.match(',');
              key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
            } else if (this.match('*')) {
            this.nextToken();
          } else {
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
          }

          var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);

          if (token.type === 3
          /* Identifier */
          && !isAsync && token.value === 'get' && lookaheadPropertyKey) {
            kind = 'get';
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            this.context.allowYield = false;
            value = this.parseGetterMethod();
          } else if (token.type === 3
          /* Identifier */
          && !isAsync && token.value === 'set' && lookaheadPropertyKey) {
            kind = 'set';
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            value = this.parseSetterMethod();
          } else if (token.type === 7
          /* Punctuator */
          && token.value === '*' && lookaheadPropertyKey) {
            kind = 'init';
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            value = this.parseGeneratorMethod();
            method = true;
          } else {
            if (!key) {
              this.throwUnexpectedToken(this.lookahead);
            }

            kind = 'init';

            if (this.match(':') && !isAsync) {
              if (!computed && this.isPropertyKey(key, '__proto__')) {
                if (hasProto.value) {
                  this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
                }

                hasProto.value = true;
              }

              this.nextToken();
              value = this.inheritCoverGrammar(this.parseAssignmentExpression);
            } else if (this.match('(')) {
              value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
              method = true;
            } else if (token.type === 3
            /* Identifier */
            ) {
                var id = this.finalize(node, new Node.Identifier(token.value));

                if (this.match('=')) {
                  this.context.firstCoverInitializedNameError = this.lookahead;
                  this.nextToken();
                  shorthand = true;
                  var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  value = this.finalize(node, new Node.AssignmentPattern(id, init));
                } else {
                  shorthand = true;
                  value = id;
                }
              } else {
              this.throwUnexpectedToken(this.nextToken());
            }
          }

          return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
        };

        Parser.prototype.parseObjectInitializer = function () {
          var node = this.createNode();
          this.expect('{');
          var properties = [];
          var hasProto = {
            value: false
          };

          while (!this.match('}')) {
            properties.push(this.parseObjectProperty(hasProto));

            if (!this.match('}')) {
              this.expectCommaSeparator();
            }
          }

          this.expect('}');
          return this.finalize(node, new Node.ObjectExpression(properties));
        }; // https://tc39.github.io/ecma262/#sec-template-literals


        Parser.prototype.parseTemplateHead = function () {
          assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
          var node = this.createNode();
          var token = this.nextToken();
          var raw = token.value;
          var cooked = token.cooked;
          return this.finalize(node, new Node.TemplateElement({
            raw: raw,
            cooked: cooked
          }, token.tail));
        };

        Parser.prototype.parseTemplateElement = function () {
          if (this.lookahead.type !== 10
          /* Template */
          ) {
              this.throwUnexpectedToken();
            }

          var node = this.createNode();
          var token = this.nextToken();
          var raw = token.value;
          var cooked = token.cooked;
          return this.finalize(node, new Node.TemplateElement({
            raw: raw,
            cooked: cooked
          }, token.tail));
        };

        Parser.prototype.parseTemplateLiteral = function () {
          var node = this.createNode();
          var expressions = [];
          var quasis = [];
          var quasi = this.parseTemplateHead();
          quasis.push(quasi);

          while (!quasi.tail) {
            expressions.push(this.parseExpression());
            quasi = this.parseTemplateElement();
            quasis.push(quasi);
          }

          return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
        }; // https://tc39.github.io/ecma262/#sec-grouping-operator


        Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
          switch (expr.type) {
            case syntax_1.Syntax.Identifier:
            case syntax_1.Syntax.MemberExpression:
            case syntax_1.Syntax.RestElement:
            case syntax_1.Syntax.AssignmentPattern:
              break;

            case syntax_1.Syntax.SpreadElement:
              expr.type = syntax_1.Syntax.RestElement;
              this.reinterpretExpressionAsPattern(expr.argument);
              break;

            case syntax_1.Syntax.ArrayExpression:
              expr.type = syntax_1.Syntax.ArrayPattern;

              for (var i = 0; i < expr.elements.length; i++) {
                if (expr.elements[i] !== null) {
                  this.reinterpretExpressionAsPattern(expr.elements[i]);
                }
              }

              break;

            case syntax_1.Syntax.ObjectExpression:
              expr.type = syntax_1.Syntax.ObjectPattern;

              for (var i = 0; i < expr.properties.length; i++) {
                this.reinterpretExpressionAsPattern(expr.properties[i].value);
              }

              break;

            case syntax_1.Syntax.AssignmentExpression:
              expr.type = syntax_1.Syntax.AssignmentPattern;
              delete expr.operator;
              this.reinterpretExpressionAsPattern(expr.left);
              break;

            default:
              // Allow other node type for tolerant parsing.
              break;
          }
        };

        Parser.prototype.parseGroupExpression = function () {
          var expr;
          this.expect('(');

          if (this.match(')')) {
            this.nextToken();

            if (!this.match('=>')) {
              this.expect('=>');
            }

            expr = {
              type: ArrowParameterPlaceHolder,
              params: [],
              async: false
            };
          } else {
            var startToken = this.lookahead;
            var params = [];

            if (this.match('...')) {
              expr = this.parseRestElement(params);
              this.expect(')');

              if (!this.match('=>')) {
                this.expect('=>');
              }

              expr = {
                type: ArrowParameterPlaceHolder,
                params: [expr],
                async: false
              };
            } else {
              var arrow = false;
              this.context.isBindingElement = true;
              expr = this.inheritCoverGrammar(this.parseAssignmentExpression);

              if (this.match(',')) {
                var expressions = [];
                this.context.isAssignmentTarget = false;
                expressions.push(expr);

                while (this.lookahead.type !== 2
                /* EOF */
                ) {
                  if (!this.match(',')) {
                    break;
                  }

                  this.nextToken();

                  if (this.match(')')) {
                    this.nextToken();

                    for (var i = 0; i < expressions.length; i++) {
                      this.reinterpretExpressionAsPattern(expressions[i]);
                    }

                    arrow = true;
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: expressions,
                      async: false
                    };
                  } else if (this.match('...')) {
                    if (!this.context.isBindingElement) {
                      this.throwUnexpectedToken(this.lookahead);
                    }

                    expressions.push(this.parseRestElement(params));
                    this.expect(')');

                    if (!this.match('=>')) {
                      this.expect('=>');
                    }

                    this.context.isBindingElement = false;

                    for (var i = 0; i < expressions.length; i++) {
                      this.reinterpretExpressionAsPattern(expressions[i]);
                    }

                    arrow = true;
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: expressions,
                      async: false
                    };
                  } else {
                    expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                  }

                  if (arrow) {
                    break;
                  }
                }

                if (!arrow) {
                  expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                }
              }

              if (!arrow) {
                this.expect(')');

                if (this.match('=>')) {
                  if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
                    arrow = true;
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: [expr],
                      async: false
                    };
                  }

                  if (!arrow) {
                    if (!this.context.isBindingElement) {
                      this.throwUnexpectedToken(this.lookahead);
                    }

                    if (expr.type === syntax_1.Syntax.SequenceExpression) {
                      for (var i = 0; i < expr.expressions.length; i++) {
                        this.reinterpretExpressionAsPattern(expr.expressions[i]);
                      }
                    } else {
                      this.reinterpretExpressionAsPattern(expr);
                    }

                    var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr];
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: parameters,
                      async: false
                    };
                  }
                }

                this.context.isBindingElement = false;
              }
            }
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-left-hand-side-expressions


        Parser.prototype.parseArguments = function () {
          this.expect('(');
          var args = [];

          if (!this.match(')')) {
            while (true) {
              var expr = this.match('...') ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
              args.push(expr);

              if (this.match(')')) {
                break;
              }

              this.expectCommaSeparator();

              if (this.match(')')) {
                break;
              }
            }
          }

          this.expect(')');
          return args;
        };

        Parser.prototype.isIdentifierName = function (token) {
          return token.type === 3
          /* Identifier */
          || token.type === 4
          /* Keyword */
          || token.type === 1
          /* BooleanLiteral */
          || token.type === 5
          /* NullLiteral */
          ;
        };

        Parser.prototype.parseIdentifierName = function () {
          var node = this.createNode();
          var token = this.nextToken();

          if (!this.isIdentifierName(token)) {
            this.throwUnexpectedToken(token);
          }

          return this.finalize(node, new Node.Identifier(token.value));
        };

        Parser.prototype.parseNewExpression = function () {
          var node = this.createNode();
          var id = this.parseIdentifierName();
          assert_1.assert(id.name === 'new', 'New expression must start with `new`');
          var expr;

          if (this.match('.')) {
            this.nextToken();

            if (this.lookahead.type === 3
            /* Identifier */
            && this.context.inFunctionBody && this.lookahead.value === 'target') {
              var property = this.parseIdentifierName();
              expr = new Node.MetaProperty(id, property);
            } else {
              this.throwUnexpectedToken(this.lookahead);
            }
          } else {
            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
            var args = this.match('(') ? this.parseArguments() : [];
            expr = new Node.NewExpression(callee, args);
            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
          }

          return this.finalize(node, expr);
        };

        Parser.prototype.parseAsyncArgument = function () {
          var arg = this.parseAssignmentExpression();
          this.context.firstCoverInitializedNameError = null;
          return arg;
        };

        Parser.prototype.parseAsyncArguments = function () {
          this.expect('(');
          var args = [];

          if (!this.match(')')) {
            while (true) {
              var expr = this.match('...') ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
              args.push(expr);

              if (this.match(')')) {
                break;
              }

              this.expectCommaSeparator();

              if (this.match(')')) {
                break;
              }
            }
          }

          this.expect(')');
          return args;
        };

        Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
          var startToken = this.lookahead;
          var maybeAsync = this.matchContextualKeyword('async');
          var previousAllowIn = this.context.allowIn;
          this.context.allowIn = true;
          var expr;

          if (this.matchKeyword('super') && this.context.inFunctionBody) {
            expr = this.createNode();
            this.nextToken();
            expr = this.finalize(expr, new Node.Super());

            if (!this.match('(') && !this.match('.') && !this.match('[')) {
              this.throwUnexpectedToken(this.lookahead);
            }
          } else {
            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
          }

          while (true) {
            if (this.match('.')) {
              this.context.isBindingElement = false;
              this.context.isAssignmentTarget = true;
              this.expect('.');
              var property = this.parseIdentifierName();
              expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
            } else if (this.match('(')) {
              var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
              this.context.isBindingElement = false;
              this.context.isAssignmentTarget = false;
              var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
              expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));

              if (asyncArrow && this.match('=>')) {
                for (var i = 0; i < args.length; ++i) {
                  this.reinterpretExpressionAsPattern(args[i]);
                }

                expr = {
                  type: ArrowParameterPlaceHolder,
                  params: args,
                  async: true
                };
              }
            } else if (this.match('[')) {
              this.context.isBindingElement = false;
              this.context.isAssignmentTarget = true;
              this.expect('[');
              var property = this.isolateCoverGrammar(this.parseExpression);
              this.expect(']');
              expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
            } else if (this.lookahead.type === 10
            /* Template */
            && this.lookahead.head) {
              var quasi = this.parseTemplateLiteral();
              expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
            } else {
              break;
            }
          }

          this.context.allowIn = previousAllowIn;
          return expr;
        };

        Parser.prototype.parseSuper = function () {
          var node = this.createNode();
          this.expectKeyword('super');

          if (!this.match('[') && !this.match('.')) {
            this.throwUnexpectedToken(this.lookahead);
          }

          return this.finalize(node, new Node.Super());
        };

        Parser.prototype.parseLeftHandSideExpression = function () {
          assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
          var node = this.startNode(this.lookahead);
          var expr = this.matchKeyword('super') && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);

          while (true) {
            if (this.match('[')) {
              this.context.isBindingElement = false;
              this.context.isAssignmentTarget = true;
              this.expect('[');
              var property = this.isolateCoverGrammar(this.parseExpression);
              this.expect(']');
              expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
            } else if (this.match('.')) {
              this.context.isBindingElement = false;
              this.context.isAssignmentTarget = true;
              this.expect('.');
              var property = this.parseIdentifierName();
              expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
            } else if (this.lookahead.type === 10
            /* Template */
            && this.lookahead.head) {
              var quasi = this.parseTemplateLiteral();
              expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
            } else {
              break;
            }
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-update-expressions


        Parser.prototype.parseUpdateExpression = function () {
          var expr;
          var startToken = this.lookahead;

          if (this.match('++') || this.match('--')) {
            var node = this.startNode(startToken);
            var token = this.nextToken();
            expr = this.inheritCoverGrammar(this.parseUnaryExpression);

            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
              this.tolerateError(messages_1.Messages.StrictLHSPrefix);
            }

            if (!this.context.isAssignmentTarget) {
              this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
            }

            var prefix = true;
            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
          } else {
            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);

            if (!this.hasLineTerminator && this.lookahead.type === 7
            /* Punctuator */
            ) {
                if (this.match('++') || this.match('--')) {
                  if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                    this.tolerateError(messages_1.Messages.StrictLHSPostfix);
                  }

                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                  }

                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var operator = this.nextToken().value;
                  var prefix = false;
                  expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
                }
              }
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-unary-operators


        Parser.prototype.parseAwaitExpression = function () {
          var node = this.createNode();
          this.nextToken();
          var argument = this.parseUnaryExpression();
          return this.finalize(node, new Node.AwaitExpression(argument));
        };

        Parser.prototype.parseUnaryExpression = function () {
          var expr;

          if (this.match('+') || this.match('-') || this.match('~') || this.match('!') || this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
            var node = this.startNode(this.lookahead);
            var token = this.nextToken();
            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));

            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
              this.tolerateError(messages_1.Messages.StrictDelete);
            }

            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
          } else if (this.context["await"] && this.matchContextualKeyword('await')) {
            expr = this.parseAwaitExpression();
          } else {
            expr = this.parseUpdateExpression();
          }

          return expr;
        };

        Parser.prototype.parseExponentiationExpression = function () {
          var startToken = this.lookahead;
          var expr = this.inheritCoverGrammar(this.parseUnaryExpression);

          if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
            this.nextToken();
            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
            var left = expr;
            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-exp-operator
        // https://tc39.github.io/ecma262/#sec-multiplicative-operators
        // https://tc39.github.io/ecma262/#sec-additive-operators
        // https://tc39.github.io/ecma262/#sec-bitwise-shift-operators
        // https://tc39.github.io/ecma262/#sec-relational-operators
        // https://tc39.github.io/ecma262/#sec-equality-operators
        // https://tc39.github.io/ecma262/#sec-binary-bitwise-operators
        // https://tc39.github.io/ecma262/#sec-binary-logical-operators


        Parser.prototype.binaryPrecedence = function (token) {
          var op = token.value;
          var precedence;

          if (token.type === 7
          /* Punctuator */
          ) {
              precedence = this.operatorPrecedence[op] || 0;
            } else if (token.type === 4
          /* Keyword */
          ) {
              precedence = op === 'instanceof' || this.context.allowIn && op === 'in' ? 7 : 0;
            } else {
            precedence = 0;
          }

          return precedence;
        };

        Parser.prototype.parseBinaryExpression = function () {
          var startToken = this.lookahead;
          var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
          var token = this.lookahead;
          var prec = this.binaryPrecedence(token);

          if (prec > 0) {
            this.nextToken();
            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
            var markers = [startToken, this.lookahead];
            var left = expr;
            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
            var stack = [left, token.value, right];
            var precedences = [prec];

            while (true) {
              prec = this.binaryPrecedence(this.lookahead);

              if (prec <= 0) {
                break;
              } // Reduce: make a binary expression from the three topmost entries.


              while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
                right = stack.pop();
                var operator = stack.pop();
                precedences.pop();
                left = stack.pop();
                markers.pop();
                var node = this.startNode(markers[markers.length - 1]);
                stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
              } // Shift.


              stack.push(this.nextToken().value);
              precedences.push(prec);
              markers.push(this.lookahead);
              stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
            } // Final reduce to clean-up the stack.


            var i = stack.length - 1;
            expr = stack[i];
            var lastMarker = markers.pop();

            while (i > 1) {
              var marker = markers.pop();
              var lastLineStart = lastMarker && lastMarker.lineStart;
              var node = this.startNode(marker, lastLineStart);
              var operator = stack[i - 1];
              expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
              i -= 2;
              lastMarker = marker;
            }
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-conditional-operator


        Parser.prototype.parseConditionalExpression = function () {
          var startToken = this.lookahead;
          var expr = this.inheritCoverGrammar(this.parseBinaryExpression);

          if (this.match('?')) {
            this.nextToken();
            var previousAllowIn = this.context.allowIn;
            this.context.allowIn = true;
            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
            this.context.allowIn = previousAllowIn;
            this.expect(':');
            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
            this.context.isAssignmentTarget = false;
            this.context.isBindingElement = false;
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-assignment-operators


        Parser.prototype.checkPatternParam = function (options, param) {
          switch (param.type) {
            case syntax_1.Syntax.Identifier:
              this.validateParam(options, param, param.name);
              break;

            case syntax_1.Syntax.RestElement:
              this.checkPatternParam(options, param.argument);
              break;

            case syntax_1.Syntax.AssignmentPattern:
              this.checkPatternParam(options, param.left);
              break;

            case syntax_1.Syntax.ArrayPattern:
              for (var i = 0; i < param.elements.length; i++) {
                if (param.elements[i] !== null) {
                  this.checkPatternParam(options, param.elements[i]);
                }
              }

              break;

            case syntax_1.Syntax.ObjectPattern:
              for (var i = 0; i < param.properties.length; i++) {
                this.checkPatternParam(options, param.properties[i].value);
              }

              break;

            default:
              break;
          }

          options.simple = options.simple && param instanceof Node.Identifier;
        };

        Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
          var params = [expr];
          var options;
          var asyncArrow = false;

          switch (expr.type) {
            case syntax_1.Syntax.Identifier:
              break;

            case ArrowParameterPlaceHolder:
              params = expr.params;
              asyncArrow = expr.async;
              break;

            default:
              return null;
          }

          options = {
            simple: true,
            paramSet: {}
          };

          for (var i = 0; i < params.length; ++i) {
            var param = params[i];

            if (param.type === syntax_1.Syntax.AssignmentPattern) {
              if (param.right.type === syntax_1.Syntax.YieldExpression) {
                if (param.right.argument) {
                  this.throwUnexpectedToken(this.lookahead);
                }

                param.right.type = syntax_1.Syntax.Identifier;
                param.right.name = 'yield';
                delete param.right.argument;
                delete param.right.delegate;
              }
            } else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === 'await') {
              this.throwUnexpectedToken(this.lookahead);
            }

            this.checkPatternParam(options, param);
            params[i] = param;
          }

          if (this.context.strict || !this.context.allowYield) {
            for (var i = 0; i < params.length; ++i) {
              var param = params[i];

              if (param.type === syntax_1.Syntax.YieldExpression) {
                this.throwUnexpectedToken(this.lookahead);
              }
            }
          }

          if (options.message === messages_1.Messages.StrictParamDupe) {
            var token = this.context.strict ? options.stricted : options.firstRestricted;
            this.throwUnexpectedToken(token, options.message);
          }

          return {
            simple: options.simple,
            params: params,
            stricted: options.stricted,
            firstRestricted: options.firstRestricted,
            message: options.message
          };
        };

        Parser.prototype.parseAssignmentExpression = function () {
          var expr;

          if (!this.context.allowYield && this.matchKeyword('yield')) {
            expr = this.parseYieldExpression();
          } else {
            var startToken = this.lookahead;
            var token = startToken;
            expr = this.parseConditionalExpression();

            if (token.type === 3
            /* Identifier */
            && token.lineNumber === this.lookahead.lineNumber && token.value === 'async') {
              if (this.lookahead.type === 3
              /* Identifier */
              || this.matchKeyword('yield')) {
                var arg = this.parsePrimaryExpression();
                this.reinterpretExpressionAsPattern(arg);
                expr = {
                  type: ArrowParameterPlaceHolder,
                  params: [arg],
                  async: true
                };
              }
            }

            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
              // https://tc39.github.io/ecma262/#sec-arrow-function-definitions
              this.context.isAssignmentTarget = false;
              this.context.isBindingElement = false;
              var isAsync = expr.async;
              var list = this.reinterpretAsCoverFormalsList(expr);

              if (list) {
                if (this.hasLineTerminator) {
                  this.tolerateUnexpectedToken(this.lookahead);
                }

                this.context.firstCoverInitializedNameError = null;
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = list.simple;
                var previousAllowYield = this.context.allowYield;
                var previousAwait = this.context["await"];
                this.context.allowYield = true;
                this.context["await"] = isAsync;
                var node = this.startNode(startToken);
                this.expect('=>');
                var body = void 0;

                if (this.match('{')) {
                  var previousAllowIn = this.context.allowIn;
                  this.context.allowIn = true;
                  body = this.parseFunctionSourceElements();
                  this.context.allowIn = previousAllowIn;
                } else {
                  body = this.isolateCoverGrammar(this.parseAssignmentExpression);
                }

                var expression = body.type !== syntax_1.Syntax.BlockStatement;

                if (this.context.strict && list.firstRestricted) {
                  this.throwUnexpectedToken(list.firstRestricted, list.message);
                }

                if (this.context.strict && list.stricted) {
                  this.tolerateUnexpectedToken(list.stricted, list.message);
                }

                expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                this.context.allowYield = previousAllowYield;
                this.context["await"] = previousAwait;
              }
            } else {
              if (this.matchAssign()) {
                if (!this.context.isAssignmentTarget) {
                  this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                }

                if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
                  var id = expr;

                  if (this.scanner.isRestrictedWord(id.name)) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
                  }

                  if (this.scanner.isStrictModeReservedWord(id.name)) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                  }
                }

                if (!this.match('=')) {
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else {
                  this.reinterpretExpressionAsPattern(expr);
                }

                token = this.nextToken();
                var operator = token.value;
                var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
                this.context.firstCoverInitializedNameError = null;
              }
            }
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-comma-operator


        Parser.prototype.parseExpression = function () {
          var startToken = this.lookahead;
          var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);

          if (this.match(',')) {
            var expressions = [];
            expressions.push(expr);

            while (this.lookahead.type !== 2
            /* EOF */
            ) {
              if (!this.match(',')) {
                break;
              }

              this.nextToken();
              expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
            }

            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
          }

          return expr;
        }; // https://tc39.github.io/ecma262/#sec-block


        Parser.prototype.parseStatementListItem = function () {
          var statement;
          this.context.isAssignmentTarget = true;
          this.context.isBindingElement = true;

          if (this.lookahead.type === 4
          /* Keyword */
          ) {
              switch (this.lookahead.value) {
                case 'export':
                  if (!this.context.isModule) {
                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
                  }

                  statement = this.parseExportDeclaration();
                  break;

                case 'import':
                  if (!this.context.isModule) {
                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
                  }

                  statement = this.parseImportDeclaration();
                  break;

                case 'const':
                  statement = this.parseLexicalDeclaration({
                    inFor: false
                  });
                  break;

                case 'function':
                  statement = this.parseFunctionDeclaration();
                  break;

                case 'class':
                  statement = this.parseClassDeclaration();
                  break;

                case 'let':
                  statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({
                    inFor: false
                  }) : this.parseStatement();
                  break;

                default:
                  statement = this.parseStatement();
                  break;
              }
            } else {
            statement = this.parseStatement();
          }

          return statement;
        };

        Parser.prototype.parseBlock = function () {
          var node = this.createNode();
          this.expect('{');
          var block = [];

          while (true) {
            if (this.match('}')) {
              break;
            }

            block.push(this.parseStatementListItem());
          }

          this.expect('}');
          return this.finalize(node, new Node.BlockStatement(block));
        }; // https://tc39.github.io/ecma262/#sec-let-and-const-declarations


        Parser.prototype.parseLexicalBinding = function (kind, options) {
          var node = this.createNode();
          var params = [];
          var id = this.parsePattern(params, kind);

          if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
            if (this.scanner.isRestrictedWord(id.name)) {
              this.tolerateError(messages_1.Messages.StrictVarName);
            }
          }

          var init = null;

          if (kind === 'const') {
            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
              if (this.match('=')) {
                this.nextToken();
                init = this.isolateCoverGrammar(this.parseAssignmentExpression);
              } else {
                this.throwError(messages_1.Messages.DeclarationMissingInitializer, 'const');
              }
            }
          } else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match('=')) {
            this.expect('=');
            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
          }

          return this.finalize(node, new Node.VariableDeclarator(id, init));
        };

        Parser.prototype.parseBindingList = function (kind, options) {
          var list = [this.parseLexicalBinding(kind, options)];

          while (this.match(',')) {
            this.nextToken();
            list.push(this.parseLexicalBinding(kind, options));
          }

          return list;
        };

        Parser.prototype.isLexicalDeclaration = function () {
          var state = this.scanner.saveState();
          this.scanner.scanComments();
          var next = this.scanner.lex();
          this.scanner.restoreState(state);
          return next.type === 3
          /* Identifier */
          || next.type === 7
          /* Punctuator */
          && next.value === '[' || next.type === 7
          /* Punctuator */
          && next.value === '{' || next.type === 4
          /* Keyword */
          && next.value === 'let' || next.type === 4
          /* Keyword */
          && next.value === 'yield';
        };

        Parser.prototype.parseLexicalDeclaration = function (options) {
          var node = this.createNode();
          var kind = this.nextToken().value;
          assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
          var declarations = this.parseBindingList(kind, options);
          this.consumeSemicolon();
          return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
        }; // https://tc39.github.io/ecma262/#sec-destructuring-binding-patterns


        Parser.prototype.parseBindingRestElement = function (params, kind) {
          var node = this.createNode();
          this.expect('...');
          var arg = this.parsePattern(params, kind);
          return this.finalize(node, new Node.RestElement(arg));
        };

        Parser.prototype.parseArrayPattern = function (params, kind) {
          var node = this.createNode();
          this.expect('[');
          var elements = [];

          while (!this.match(']')) {
            if (this.match(',')) {
              this.nextToken();
              elements.push(null);
            } else {
              if (this.match('...')) {
                elements.push(this.parseBindingRestElement(params, kind));
                break;
              } else {
                elements.push(this.parsePatternWithDefault(params, kind));
              }

              if (!this.match(']')) {
                this.expect(',');
              }
            }
          }

          this.expect(']');
          return this.finalize(node, new Node.ArrayPattern(elements));
        };

        Parser.prototype.parsePropertyPattern = function (params, kind) {
          var node = this.createNode();
          var computed = false;
          var shorthand = false;
          var method = false;
          var key;
          var value;

          if (this.lookahead.type === 3
          /* Identifier */
          ) {
              var keyToken = this.lookahead;
              key = this.parseVariableIdentifier();
              var init = this.finalize(node, new Node.Identifier(keyToken.value));

              if (this.match('=')) {
                params.push(keyToken);
                shorthand = true;
                this.nextToken();
                var expr = this.parseAssignmentExpression();
                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
              } else if (!this.match(':')) {
                params.push(keyToken);
                shorthand = true;
                value = init;
              } else {
                this.expect(':');
                value = this.parsePatternWithDefault(params, kind);
              }
            } else {
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            this.expect(':');
            value = this.parsePatternWithDefault(params, kind);
          }

          return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
        };

        Parser.prototype.parseObjectPattern = function (params, kind) {
          var node = this.createNode();
          var properties = [];
          this.expect('{');

          while (!this.match('}')) {
            properties.push(this.parsePropertyPattern(params, kind));

            if (!this.match('}')) {
              this.expect(',');
            }
          }

          this.expect('}');
          return this.finalize(node, new Node.ObjectPattern(properties));
        };

        Parser.prototype.parsePattern = function (params, kind) {
          var pattern;

          if (this.match('[')) {
            pattern = this.parseArrayPattern(params, kind);
          } else if (this.match('{')) {
            pattern = this.parseObjectPattern(params, kind);
          } else {
            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
              this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
            }

            params.push(this.lookahead);
            pattern = this.parseVariableIdentifier(kind);
          }

          return pattern;
        };

        Parser.prototype.parsePatternWithDefault = function (params, kind) {
          var startToken = this.lookahead;
          var pattern = this.parsePattern(params, kind);

          if (this.match('=')) {
            this.nextToken();
            var previousAllowYield = this.context.allowYield;
            this.context.allowYield = true;
            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
            this.context.allowYield = previousAllowYield;
            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
          }

          return pattern;
        }; // https://tc39.github.io/ecma262/#sec-variable-statement


        Parser.prototype.parseVariableIdentifier = function (kind) {
          var node = this.createNode();
          var token = this.nextToken();

          if (token.type === 4
          /* Keyword */
          && token.value === 'yield') {
            if (this.context.strict) {
              this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
            } else if (!this.context.allowYield) {
              this.throwUnexpectedToken(token);
            }
          } else if (token.type !== 3
          /* Identifier */
          ) {
              if (this.context.strict && token.type === 4
              /* Keyword */
              && this.scanner.isStrictModeReservedWord(token.value)) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
              } else {
                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
                  this.throwUnexpectedToken(token);
                }
              }
            } else if ((this.context.isModule || this.context["await"]) && token.type === 3
          /* Identifier */
          && token.value === 'await') {
            this.tolerateUnexpectedToken(token);
          }

          return this.finalize(node, new Node.Identifier(token.value));
        };

        Parser.prototype.parseVariableDeclaration = function (options) {
          var node = this.createNode();
          var params = [];
          var id = this.parsePattern(params, 'var');

          if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
            if (this.scanner.isRestrictedWord(id.name)) {
              this.tolerateError(messages_1.Messages.StrictVarName);
            }
          }

          var init = null;

          if (this.match('=')) {
            this.nextToken();
            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
          } else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
            this.expect('=');
          }

          return this.finalize(node, new Node.VariableDeclarator(id, init));
        };

        Parser.prototype.parseVariableDeclarationList = function (options) {
          var opt = {
            inFor: options.inFor
          };
          var list = [];
          list.push(this.parseVariableDeclaration(opt));

          while (this.match(',')) {
            this.nextToken();
            list.push(this.parseVariableDeclaration(opt));
          }

          return list;
        };

        Parser.prototype.parseVariableStatement = function () {
          var node = this.createNode();
          this.expectKeyword('var');
          var declarations = this.parseVariableDeclarationList({
            inFor: false
          });
          this.consumeSemicolon();
          return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
        }; // https://tc39.github.io/ecma262/#sec-empty-statement


        Parser.prototype.parseEmptyStatement = function () {
          var node = this.createNode();
          this.expect(';');
          return this.finalize(node, new Node.EmptyStatement());
        }; // https://tc39.github.io/ecma262/#sec-expression-statement


        Parser.prototype.parseExpressionStatement = function () {
          var node = this.createNode();
          var expr = this.parseExpression();
          this.consumeSemicolon();
          return this.finalize(node, new Node.ExpressionStatement(expr));
        }; // https://tc39.github.io/ecma262/#sec-if-statement


        Parser.prototype.parseIfClause = function () {
          if (this.context.strict && this.matchKeyword('function')) {
            this.tolerateError(messages_1.Messages.StrictFunction);
          }

          return this.parseStatement();
        };

        Parser.prototype.parseIfStatement = function () {
          var node = this.createNode();
          var consequent;
          var alternate = null;
          this.expectKeyword('if');
          this.expect('(');
          var test = this.parseExpression();

          if (!this.match(')') && this.config.tolerant) {
            this.tolerateUnexpectedToken(this.nextToken());
            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
          } else {
            this.expect(')');
            consequent = this.parseIfClause();

            if (this.matchKeyword('else')) {
              this.nextToken();
              alternate = this.parseIfClause();
            }
          }

          return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
        }; // https://tc39.github.io/ecma262/#sec-do-while-statement


        Parser.prototype.parseDoWhileStatement = function () {
          var node = this.createNode();
          this.expectKeyword('do');
          var previousInIteration = this.context.inIteration;
          this.context.inIteration = true;
          var body = this.parseStatement();
          this.context.inIteration = previousInIteration;
          this.expectKeyword('while');
          this.expect('(');
          var test = this.parseExpression();

          if (!this.match(')') && this.config.tolerant) {
            this.tolerateUnexpectedToken(this.nextToken());
          } else {
            this.expect(')');

            if (this.match(';')) {
              this.nextToken();
            }
          }

          return this.finalize(node, new Node.DoWhileStatement(body, test));
        }; // https://tc39.github.io/ecma262/#sec-while-statement


        Parser.prototype.parseWhileStatement = function () {
          var node = this.createNode();
          var body;
          this.expectKeyword('while');
          this.expect('(');
          var test = this.parseExpression();

          if (!this.match(')') && this.config.tolerant) {
            this.tolerateUnexpectedToken(this.nextToken());
            body = this.finalize(this.createNode(), new Node.EmptyStatement());
          } else {
            this.expect(')');
            var previousInIteration = this.context.inIteration;
            this.context.inIteration = true;
            body = this.parseStatement();
            this.context.inIteration = previousInIteration;
          }

          return this.finalize(node, new Node.WhileStatement(test, body));
        }; // https://tc39.github.io/ecma262/#sec-for-statement
        // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements


        Parser.prototype.parseForStatement = function () {
          var init = null;
          var test = null;
          var update = null;
          var forIn = true;
          var left, right;
          var node = this.createNode();
          this.expectKeyword('for');
          this.expect('(');

          if (this.match(';')) {
            this.nextToken();
          } else {
            if (this.matchKeyword('var')) {
              init = this.createNode();
              this.nextToken();
              var previousAllowIn = this.context.allowIn;
              this.context.allowIn = false;
              var declarations = this.parseVariableDeclarationList({
                inFor: true
              });
              this.context.allowIn = previousAllowIn;

              if (declarations.length === 1 && this.matchKeyword('in')) {
                var decl = declarations[0];

                if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
                  this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
                }

                init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
                this.nextToken();
                left = init;
                right = this.parseExpression();
                init = null;
              } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
                init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
                this.nextToken();
                left = init;
                right = this.parseAssignmentExpression();
                init = null;
                forIn = false;
              } else {
                init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
                this.expect(';');
              }
            } else if (this.matchKeyword('const') || this.matchKeyword('let')) {
              init = this.createNode();
              var kind = this.nextToken().value;

              if (!this.context.strict && this.lookahead.value === 'in') {
                init = this.finalize(init, new Node.Identifier(kind));
                this.nextToken();
                left = init;
                right = this.parseExpression();
                init = null;
              } else {
                var previousAllowIn = this.context.allowIn;
                this.context.allowIn = false;
                var declarations = this.parseBindingList(kind, {
                  inFor: true
                });
                this.context.allowIn = previousAllowIn;

                if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
                  init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                  this.nextToken();
                  left = init;
                  right = this.parseExpression();
                  init = null;
                } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
                  init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                  this.nextToken();
                  left = init;
                  right = this.parseAssignmentExpression();
                  init = null;
                  forIn = false;
                } else {
                  this.consumeSemicolon();
                  init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                }
              }
            } else {
              var initStartToken = this.lookahead;
              var previousAllowIn = this.context.allowIn;
              this.context.allowIn = false;
              init = this.inheritCoverGrammar(this.parseAssignmentExpression);
              this.context.allowIn = previousAllowIn;

              if (this.matchKeyword('in')) {
                if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                  this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
                }

                this.nextToken();
                this.reinterpretExpressionAsPattern(init);
                left = init;
                right = this.parseExpression();
                init = null;
              } else if (this.matchContextualKeyword('of')) {
                if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                  this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
                }

                this.nextToken();
                this.reinterpretExpressionAsPattern(init);
                left = init;
                right = this.parseAssignmentExpression();
                init = null;
                forIn = false;
              } else {
                if (this.match(',')) {
                  var initSeq = [init];

                  while (this.match(',')) {
                    this.nextToken();
                    initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                  }

                  init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
                }

                this.expect(';');
              }
            }
          }

          if (typeof left === 'undefined') {
            if (!this.match(';')) {
              test = this.parseExpression();
            }

            this.expect(';');

            if (!this.match(')')) {
              update = this.parseExpression();
            }
          }

          var body;

          if (!this.match(')') && this.config.tolerant) {
            this.tolerateUnexpectedToken(this.nextToken());
            body = this.finalize(this.createNode(), new Node.EmptyStatement());
          } else {
            this.expect(')');
            var previousInIteration = this.context.inIteration;
            this.context.inIteration = true;
            body = this.isolateCoverGrammar(this.parseStatement);
            this.context.inIteration = previousInIteration;
          }

          return typeof left === 'undefined' ? this.finalize(node, new Node.ForStatement(init, test, update, body)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) : this.finalize(node, new Node.ForOfStatement(left, right, body));
        }; // https://tc39.github.io/ecma262/#sec-continue-statement


        Parser.prototype.parseContinueStatement = function () {
          var node = this.createNode();
          this.expectKeyword('continue');
          var label = null;

          if (this.lookahead.type === 3
          /* Identifier */
          && !this.hasLineTerminator) {
            var id = this.parseVariableIdentifier();
            label = id;
            var key = '$' + id.name;

            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
              this.throwError(messages_1.Messages.UnknownLabel, id.name);
            }
          }

          this.consumeSemicolon();

          if (label === null && !this.context.inIteration) {
            this.throwError(messages_1.Messages.IllegalContinue);
          }

          return this.finalize(node, new Node.ContinueStatement(label));
        }; // https://tc39.github.io/ecma262/#sec-break-statement


        Parser.prototype.parseBreakStatement = function () {
          var node = this.createNode();
          this.expectKeyword('break');
          var label = null;

          if (this.lookahead.type === 3
          /* Identifier */
          && !this.hasLineTerminator) {
            var id = this.parseVariableIdentifier();
            var key = '$' + id.name;

            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
              this.throwError(messages_1.Messages.UnknownLabel, id.name);
            }

            label = id;
          }

          this.consumeSemicolon();

          if (label === null && !this.context.inIteration && !this.context.inSwitch) {
            this.throwError(messages_1.Messages.IllegalBreak);
          }

          return this.finalize(node, new Node.BreakStatement(label));
        }; // https://tc39.github.io/ecma262/#sec-return-statement


        Parser.prototype.parseReturnStatement = function () {
          if (!this.context.inFunctionBody) {
            this.tolerateError(messages_1.Messages.IllegalReturn);
          }

          var node = this.createNode();
          this.expectKeyword('return');
          var hasArgument = !this.match(';') && !this.match('}') && !this.hasLineTerminator && this.lookahead.type !== 2
          /* EOF */
          || this.lookahead.type === 8
          /* StringLiteral */
          || this.lookahead.type === 10
          /* Template */
          ;
          var argument = hasArgument ? this.parseExpression() : null;
          this.consumeSemicolon();
          return this.finalize(node, new Node.ReturnStatement(argument));
        }; // https://tc39.github.io/ecma262/#sec-with-statement


        Parser.prototype.parseWithStatement = function () {
          if (this.context.strict) {
            this.tolerateError(messages_1.Messages.StrictModeWith);
          }

          var node = this.createNode();
          var body;
          this.expectKeyword('with');
          this.expect('(');
          var object = this.parseExpression();

          if (!this.match(')') && this.config.tolerant) {
            this.tolerateUnexpectedToken(this.nextToken());
            body = this.finalize(this.createNode(), new Node.EmptyStatement());
          } else {
            this.expect(')');
            body = this.parseStatement();
          }

          return this.finalize(node, new Node.WithStatement(object, body));
        }; // https://tc39.github.io/ecma262/#sec-switch-statement


        Parser.prototype.parseSwitchCase = function () {
          var node = this.createNode();
          var test;

          if (this.matchKeyword('default')) {
            this.nextToken();
            test = null;
          } else {
            this.expectKeyword('case');
            test = this.parseExpression();
          }

          this.expect(':');
          var consequent = [];

          while (true) {
            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
              break;
            }

            consequent.push(this.parseStatementListItem());
          }

          return this.finalize(node, new Node.SwitchCase(test, consequent));
        };

        Parser.prototype.parseSwitchStatement = function () {
          var node = this.createNode();
          this.expectKeyword('switch');
          this.expect('(');
          var discriminant = this.parseExpression();
          this.expect(')');
          var previousInSwitch = this.context.inSwitch;
          this.context.inSwitch = true;
          var cases = [];
          var defaultFound = false;
          this.expect('{');

          while (true) {
            if (this.match('}')) {
              break;
            }

            var clause = this.parseSwitchCase();

            if (clause.test === null) {
              if (defaultFound) {
                this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
              }

              defaultFound = true;
            }

            cases.push(clause);
          }

          this.expect('}');
          this.context.inSwitch = previousInSwitch;
          return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
        }; // https://tc39.github.io/ecma262/#sec-labelled-statements


        Parser.prototype.parseLabelledStatement = function () {
          var node = this.createNode();
          var expr = this.parseExpression();
          var statement;

          if (expr.type === syntax_1.Syntax.Identifier && this.match(':')) {
            this.nextToken();
            var id = expr;
            var key = '$' + id.name;

            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
              this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
            }

            this.context.labelSet[key] = true;
            var body = void 0;

            if (this.matchKeyword('class')) {
              this.tolerateUnexpectedToken(this.lookahead);
              body = this.parseClassDeclaration();
            } else if (this.matchKeyword('function')) {
              var token = this.lookahead;
              var declaration = this.parseFunctionDeclaration();

              if (this.context.strict) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
              } else if (declaration.generator) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
              }

              body = declaration;
            } else {
              body = this.parseStatement();
            }

            delete this.context.labelSet[key];
            statement = new Node.LabeledStatement(id, body);
          } else {
            this.consumeSemicolon();
            statement = new Node.ExpressionStatement(expr);
          }

          return this.finalize(node, statement);
        }; // https://tc39.github.io/ecma262/#sec-throw-statement


        Parser.prototype.parseThrowStatement = function () {
          var node = this.createNode();
          this.expectKeyword('throw');

          if (this.hasLineTerminator) {
            this.throwError(messages_1.Messages.NewlineAfterThrow);
          }

          var argument = this.parseExpression();
          this.consumeSemicolon();
          return this.finalize(node, new Node.ThrowStatement(argument));
        }; // https://tc39.github.io/ecma262/#sec-try-statement


        Parser.prototype.parseCatchClause = function () {
          var node = this.createNode();
          this.expectKeyword('catch');
          this.expect('(');

          if (this.match(')')) {
            this.throwUnexpectedToken(this.lookahead);
          }

          var params = [];
          var param = this.parsePattern(params);
          var paramMap = {};

          for (var i = 0; i < params.length; i++) {
            var key = '$' + params[i].value;

            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
              this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
            }

            paramMap[key] = true;
          }

          if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
            if (this.scanner.isRestrictedWord(param.name)) {
              this.tolerateError(messages_1.Messages.StrictCatchVariable);
            }
          }

          this.expect(')');
          var body = this.parseBlock();
          return this.finalize(node, new Node.CatchClause(param, body));
        };

        Parser.prototype.parseFinallyClause = function () {
          this.expectKeyword('finally');
          return this.parseBlock();
        };

        Parser.prototype.parseTryStatement = function () {
          var node = this.createNode();
          this.expectKeyword('try');
          var block = this.parseBlock();
          var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
          var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;

          if (!handler && !finalizer) {
            this.throwError(messages_1.Messages.NoCatchOrFinally);
          }

          return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
        }; // https://tc39.github.io/ecma262/#sec-debugger-statement


        Parser.prototype.parseDebuggerStatement = function () {
          var node = this.createNode();
          this.expectKeyword('debugger');
          this.consumeSemicolon();
          return this.finalize(node, new Node.DebuggerStatement());
        }; // https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations


        Parser.prototype.parseStatement = function () {
          var statement;

          switch (this.lookahead.type) {
            case 1
            /* BooleanLiteral */
            :
            case 5
            /* NullLiteral */
            :
            case 6
            /* NumericLiteral */
            :
            case 8
            /* StringLiteral */
            :
            case 10
            /* Template */
            :
            case 9
            /* RegularExpression */
            :
              statement = this.parseExpressionStatement();
              break;

            case 7
            /* Punctuator */
            :
              var value = this.lookahead.value;

              if (value === '{') {
                statement = this.parseBlock();
              } else if (value === '(') {
                statement = this.parseExpressionStatement();
              } else if (value === ';') {
                statement = this.parseEmptyStatement();
              } else {
                statement = this.parseExpressionStatement();
              }

              break;

            case 3
            /* Identifier */
            :
              statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
              break;

            case 4
            /* Keyword */
            :
              switch (this.lookahead.value) {
                case 'break':
                  statement = this.parseBreakStatement();
                  break;

                case 'continue':
                  statement = this.parseContinueStatement();
                  break;

                case 'debugger':
                  statement = this.parseDebuggerStatement();
                  break;

                case 'do':
                  statement = this.parseDoWhileStatement();
                  break;

                case 'for':
                  statement = this.parseForStatement();
                  break;

                case 'function':
                  statement = this.parseFunctionDeclaration();
                  break;

                case 'if':
                  statement = this.parseIfStatement();
                  break;

                case 'return':
                  statement = this.parseReturnStatement();
                  break;

                case 'switch':
                  statement = this.parseSwitchStatement();
                  break;

                case 'throw':
                  statement = this.parseThrowStatement();
                  break;

                case 'try':
                  statement = this.parseTryStatement();
                  break;

                case 'var':
                  statement = this.parseVariableStatement();
                  break;

                case 'while':
                  statement = this.parseWhileStatement();
                  break;

                case 'with':
                  statement = this.parseWithStatement();
                  break;

                default:
                  statement = this.parseExpressionStatement();
                  break;
              }

              break;

            default:
              statement = this.throwUnexpectedToken(this.lookahead);
          }

          return statement;
        }; // https://tc39.github.io/ecma262/#sec-function-definitions


        Parser.prototype.parseFunctionSourceElements = function () {
          var node = this.createNode();
          this.expect('{');
          var body = this.parseDirectivePrologues();
          var previousLabelSet = this.context.labelSet;
          var previousInIteration = this.context.inIteration;
          var previousInSwitch = this.context.inSwitch;
          var previousInFunctionBody = this.context.inFunctionBody;
          this.context.labelSet = {};
          this.context.inIteration = false;
          this.context.inSwitch = false;
          this.context.inFunctionBody = true;

          while (this.lookahead.type !== 2
          /* EOF */
          ) {
            if (this.match('}')) {
              break;
            }

            body.push(this.parseStatementListItem());
          }

          this.expect('}');
          this.context.labelSet = previousLabelSet;
          this.context.inIteration = previousInIteration;
          this.context.inSwitch = previousInSwitch;
          this.context.inFunctionBody = previousInFunctionBody;
          return this.finalize(node, new Node.BlockStatement(body));
        };

        Parser.prototype.validateParam = function (options, param, name) {
          var key = '$' + name;

          if (this.context.strict) {
            if (this.scanner.isRestrictedWord(name)) {
              options.stricted = param;
              options.message = messages_1.Messages.StrictParamName;
            }

            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
              options.stricted = param;
              options.message = messages_1.Messages.StrictParamDupe;
            }
          } else if (!options.firstRestricted) {
            if (this.scanner.isRestrictedWord(name)) {
              options.firstRestricted = param;
              options.message = messages_1.Messages.StrictParamName;
            } else if (this.scanner.isStrictModeReservedWord(name)) {
              options.firstRestricted = param;
              options.message = messages_1.Messages.StrictReservedWord;
            } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
              options.stricted = param;
              options.message = messages_1.Messages.StrictParamDupe;
            }
          }
          /* istanbul ignore next */


          if (typeof Object.defineProperty === 'function') {
            Object.defineProperty(options.paramSet, key, {
              value: true,
              enumerable: true,
              writable: true,
              configurable: true
            });
          } else {
            options.paramSet[key] = true;
          }
        };

        Parser.prototype.parseRestElement = function (params) {
          var node = this.createNode();
          this.expect('...');
          var arg = this.parsePattern(params);

          if (this.match('=')) {
            this.throwError(messages_1.Messages.DefaultRestParameter);
          }

          if (!this.match(')')) {
            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
          }

          return this.finalize(node, new Node.RestElement(arg));
        };

        Parser.prototype.parseFormalParameter = function (options) {
          var params = [];
          var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);

          for (var i = 0; i < params.length; i++) {
            this.validateParam(options, params[i], params[i].value);
          }

          options.simple = options.simple && param instanceof Node.Identifier;
          options.params.push(param);
        };

        Parser.prototype.parseFormalParameters = function (firstRestricted) {
          var options;
          options = {
            simple: true,
            params: [],
            firstRestricted: firstRestricted
          };
          this.expect('(');

          if (!this.match(')')) {
            options.paramSet = {};

            while (this.lookahead.type !== 2
            /* EOF */
            ) {
              this.parseFormalParameter(options);

              if (this.match(')')) {
                break;
              }

              this.expect(',');

              if (this.match(')')) {
                break;
              }
            }
          }

          this.expect(')');
          return {
            simple: options.simple,
            params: options.params,
            stricted: options.stricted,
            firstRestricted: options.firstRestricted,
            message: options.message
          };
        };

        Parser.prototype.matchAsyncFunction = function () {
          var match = this.matchContextualKeyword('async');

          if (match) {
            var state = this.scanner.saveState();
            this.scanner.scanComments();
            var next = this.scanner.lex();
            this.scanner.restoreState(state);
            match = state.lineNumber === next.lineNumber && next.type === 4
            /* Keyword */
            && next.value === 'function';
          }

          return match;
        };

        Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
          var node = this.createNode();
          var isAsync = this.matchContextualKeyword('async');

          if (isAsync) {
            this.nextToken();
          }

          this.expectKeyword('function');
          var isGenerator = isAsync ? false : this.match('*');

          if (isGenerator) {
            this.nextToken();
          }

          var message;
          var id = null;
          var firstRestricted = null;

          if (!identifierIsOptional || !this.match('(')) {
            var token = this.lookahead;
            id = this.parseVariableIdentifier();

            if (this.context.strict) {
              if (this.scanner.isRestrictedWord(token.value)) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
              }
            } else {
              if (this.scanner.isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = messages_1.Messages.StrictFunctionName;
              } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = messages_1.Messages.StrictReservedWord;
              }
            }
          }

          var previousAllowAwait = this.context["await"];
          var previousAllowYield = this.context.allowYield;
          this.context["await"] = isAsync;
          this.context.allowYield = !isGenerator;
          var formalParameters = this.parseFormalParameters(firstRestricted);
          var params = formalParameters.params;
          var stricted = formalParameters.stricted;
          firstRestricted = formalParameters.firstRestricted;

          if (formalParameters.message) {
            message = formalParameters.message;
          }

          var previousStrict = this.context.strict;
          var previousAllowStrictDirective = this.context.allowStrictDirective;
          this.context.allowStrictDirective = formalParameters.simple;
          var body = this.parseFunctionSourceElements();

          if (this.context.strict && firstRestricted) {
            this.throwUnexpectedToken(firstRestricted, message);
          }

          if (this.context.strict && stricted) {
            this.tolerateUnexpectedToken(stricted, message);
          }

          this.context.strict = previousStrict;
          this.context.allowStrictDirective = previousAllowStrictDirective;
          this.context["await"] = previousAllowAwait;
          this.context.allowYield = previousAllowYield;
          return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
        };

        Parser.prototype.parseFunctionExpression = function () {
          var node = this.createNode();
          var isAsync = this.matchContextualKeyword('async');

          if (isAsync) {
            this.nextToken();
          }

          this.expectKeyword('function');
          var isGenerator = isAsync ? false : this.match('*');

          if (isGenerator) {
            this.nextToken();
          }

          var message;
          var id = null;
          var firstRestricted;
          var previousAllowAwait = this.context["await"];
          var previousAllowYield = this.context.allowYield;
          this.context["await"] = isAsync;
          this.context.allowYield = !isGenerator;

          if (!this.match('(')) {
            var token = this.lookahead;
            id = !this.context.strict && !isGenerator && this.matchKeyword('yield') ? this.parseIdentifierName() : this.parseVariableIdentifier();

            if (this.context.strict) {
              if (this.scanner.isRestrictedWord(token.value)) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
              }
            } else {
              if (this.scanner.isRestrictedWord(token.value)) {
                firstRestricted = token;
                message = messages_1.Messages.StrictFunctionName;
              } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                firstRestricted = token;
                message = messages_1.Messages.StrictReservedWord;
              }
            }
          }

          var formalParameters = this.parseFormalParameters(firstRestricted);
          var params = formalParameters.params;
          var stricted = formalParameters.stricted;
          firstRestricted = formalParameters.firstRestricted;

          if (formalParameters.message) {
            message = formalParameters.message;
          }

          var previousStrict = this.context.strict;
          var previousAllowStrictDirective = this.context.allowStrictDirective;
          this.context.allowStrictDirective = formalParameters.simple;
          var body = this.parseFunctionSourceElements();

          if (this.context.strict && firstRestricted) {
            this.throwUnexpectedToken(firstRestricted, message);
          }

          if (this.context.strict && stricted) {
            this.tolerateUnexpectedToken(stricted, message);
          }

          this.context.strict = previousStrict;
          this.context.allowStrictDirective = previousAllowStrictDirective;
          this.context["await"] = previousAllowAwait;
          this.context.allowYield = previousAllowYield;
          return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
        }; // https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive


        Parser.prototype.parseDirective = function () {
          var token = this.lookahead;
          var node = this.createNode();
          var expr = this.parseExpression();
          var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
          this.consumeSemicolon();
          return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
        };

        Parser.prototype.parseDirectivePrologues = function () {
          var firstRestricted = null;
          var body = [];

          while (true) {
            var token = this.lookahead;

            if (token.type !== 8
            /* StringLiteral */
            ) {
                break;
              }

            var statement = this.parseDirective();
            body.push(statement);
            var directive = statement.directive;

            if (typeof directive !== 'string') {
              break;
            }

            if (directive === 'use strict') {
              this.context.strict = true;

              if (firstRestricted) {
                this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
              }

              if (!this.context.allowStrictDirective) {
                this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
              }
            } else {
              if (!firstRestricted && token.octal) {
                firstRestricted = token;
              }
            }
          }

          return body;
        }; // https://tc39.github.io/ecma262/#sec-method-definitions


        Parser.prototype.qualifiedPropertyName = function (token) {
          switch (token.type) {
            case 3
            /* Identifier */
            :
            case 8
            /* StringLiteral */
            :
            case 1
            /* BooleanLiteral */
            :
            case 5
            /* NullLiteral */
            :
            case 6
            /* NumericLiteral */
            :
            case 4
            /* Keyword */
            :
              return true;

            case 7
            /* Punctuator */
            :
              return token.value === '[';

            default:
              break;
          }

          return false;
        };

        Parser.prototype.parseGetterMethod = function () {
          var node = this.createNode();
          var isGenerator = false;
          var previousAllowYield = this.context.allowYield;
          this.context.allowYield = !isGenerator;
          var formalParameters = this.parseFormalParameters();

          if (formalParameters.params.length > 0) {
            this.tolerateError(messages_1.Messages.BadGetterArity);
          }

          var method = this.parsePropertyMethod(formalParameters);
          this.context.allowYield = previousAllowYield;
          return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
        };

        Parser.prototype.parseSetterMethod = function () {
          var node = this.createNode();
          var isGenerator = false;
          var previousAllowYield = this.context.allowYield;
          this.context.allowYield = !isGenerator;
          var formalParameters = this.parseFormalParameters();

          if (formalParameters.params.length !== 1) {
            this.tolerateError(messages_1.Messages.BadSetterArity);
          } else if (formalParameters.params[0] instanceof Node.RestElement) {
            this.tolerateError(messages_1.Messages.BadSetterRestParameter);
          }

          var method = this.parsePropertyMethod(formalParameters);
          this.context.allowYield = previousAllowYield;
          return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
        };

        Parser.prototype.parseGeneratorMethod = function () {
          var node = this.createNode();
          var isGenerator = true;
          var previousAllowYield = this.context.allowYield;
          this.context.allowYield = true;
          var params = this.parseFormalParameters();
          this.context.allowYield = false;
          var method = this.parsePropertyMethod(params);
          this.context.allowYield = previousAllowYield;
          return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
        }; // https://tc39.github.io/ecma262/#sec-generator-function-definitions


        Parser.prototype.isStartOfExpression = function () {
          var start = true;
          var value = this.lookahead.value;

          switch (this.lookahead.type) {
            case 7
            /* Punctuator */
            :
              start = value === '[' || value === '(' || value === '{' || value === '+' || value === '-' || value === '!' || value === '~' || value === '++' || value === '--' || value === '/' || value === '/='; // regular expression literal

              break;

            case 4
            /* Keyword */
            :
              start = value === 'class' || value === 'delete' || value === 'function' || value === 'let' || value === 'new' || value === 'super' || value === 'this' || value === 'typeof' || value === 'void' || value === 'yield';
              break;

            default:
              break;
          }

          return start;
        };

        Parser.prototype.parseYieldExpression = function () {
          var node = this.createNode();
          this.expectKeyword('yield');
          var argument = null;
          var delegate = false;

          if (!this.hasLineTerminator) {
            var previousAllowYield = this.context.allowYield;
            this.context.allowYield = false;
            delegate = this.match('*');

            if (delegate) {
              this.nextToken();
              argument = this.parseAssignmentExpression();
            } else if (this.isStartOfExpression()) {
              argument = this.parseAssignmentExpression();
            }

            this.context.allowYield = previousAllowYield;
          }

          return this.finalize(node, new Node.YieldExpression(argument, delegate));
        }; // https://tc39.github.io/ecma262/#sec-class-definitions


        Parser.prototype.parseClassElement = function (hasConstructor) {
          var token = this.lookahead;
          var node = this.createNode();
          var kind = '';
          var key = null;
          var value = null;
          var computed = false;
          var method = false;
          var isStatic = false;
          var isAsync = false;

          if (this.match('*')) {
            this.nextToken();
          } else {
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            var id = key;

            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
              token = this.lookahead;
              isStatic = true;
              computed = this.match('[');

              if (this.match('*')) {
                this.nextToken();
              } else {
                key = this.parseObjectPropertyKey();
              }
            }

            if (token.type === 3
            /* Identifier */
            && !this.hasLineTerminator && token.value === 'async') {
              var punctuator = this.lookahead.value;

              if (punctuator !== ':' && punctuator !== '(' && punctuator !== '*') {
                isAsync = true;
                token = this.lookahead;
                key = this.parseObjectPropertyKey();

                if (token.type === 3
                /* Identifier */
                && token.value === 'constructor') {
                  this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
                }
              }
            }
          }

          var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);

          if (token.type === 3
          /* Identifier */
          ) {
              if (token.value === 'get' && lookaheadPropertyKey) {
                kind = 'get';
                computed = this.match('[');
                key = this.parseObjectPropertyKey();
                this.context.allowYield = false;
                value = this.parseGetterMethod();
              } else if (token.value === 'set' && lookaheadPropertyKey) {
                kind = 'set';
                computed = this.match('[');
                key = this.parseObjectPropertyKey();
                value = this.parseSetterMethod();
              }
            } else if (token.type === 7
          /* Punctuator */
          && token.value === '*' && lookaheadPropertyKey) {
            kind = 'init';
            computed = this.match('[');
            key = this.parseObjectPropertyKey();
            value = this.parseGeneratorMethod();
            method = true;
          }

          if (!kind && key && this.match('(')) {
            kind = 'init';
            value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
            method = true;
          }

          if (!kind) {
            this.throwUnexpectedToken(this.lookahead);
          }

          if (kind === 'init') {
            kind = 'method';
          }

          if (!computed) {
            if (isStatic && this.isPropertyKey(key, 'prototype')) {
              this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
            }

            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
              if (kind !== 'method' || !method || value && value.generator) {
                this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
              }

              if (hasConstructor.value) {
                this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
              } else {
                hasConstructor.value = true;
              }

              kind = 'constructor';
            }
          }

          return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
        };

        Parser.prototype.parseClassElementList = function () {
          var body = [];
          var hasConstructor = {
            value: false
          };
          this.expect('{');

          while (!this.match('}')) {
            if (this.match(';')) {
              this.nextToken();
            } else {
              body.push(this.parseClassElement(hasConstructor));
            }
          }

          this.expect('}');
          return body;
        };

        Parser.prototype.parseClassBody = function () {
          var node = this.createNode();
          var elementList = this.parseClassElementList();
          return this.finalize(node, new Node.ClassBody(elementList));
        };

        Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
          var node = this.createNode();
          var previousStrict = this.context.strict;
          this.context.strict = true;
          this.expectKeyword('class');
          var id = identifierIsOptional && this.lookahead.type !== 3
          /* Identifier */
          ? null : this.parseVariableIdentifier();
          var superClass = null;

          if (this.matchKeyword('extends')) {
            this.nextToken();
            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
          }

          var classBody = this.parseClassBody();
          this.context.strict = previousStrict;
          return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
        };

        Parser.prototype.parseClassExpression = function () {
          var node = this.createNode();
          var previousStrict = this.context.strict;
          this.context.strict = true;
          this.expectKeyword('class');
          var id = this.lookahead.type === 3
          /* Identifier */
          ? this.parseVariableIdentifier() : null;
          var superClass = null;

          if (this.matchKeyword('extends')) {
            this.nextToken();
            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
          }

          var classBody = this.parseClassBody();
          this.context.strict = previousStrict;
          return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
        }; // https://tc39.github.io/ecma262/#sec-scripts
        // https://tc39.github.io/ecma262/#sec-modules


        Parser.prototype.parseModule = function () {
          this.context.strict = true;
          this.context.isModule = true;
          this.scanner.isModule = true;
          var node = this.createNode();
          var body = this.parseDirectivePrologues();

          while (this.lookahead.type !== 2
          /* EOF */
          ) {
            body.push(this.parseStatementListItem());
          }

          return this.finalize(node, new Node.Module(body));
        };

        Parser.prototype.parseScript = function () {
          var node = this.createNode();
          var body = this.parseDirectivePrologues();

          while (this.lookahead.type !== 2
          /* EOF */
          ) {
            body.push(this.parseStatementListItem());
          }

          return this.finalize(node, new Node.Script(body));
        }; // https://tc39.github.io/ecma262/#sec-imports


        Parser.prototype.parseModuleSpecifier = function () {
          var node = this.createNode();

          if (this.lookahead.type !== 8
          /* StringLiteral */
          ) {
              this.throwError(messages_1.Messages.InvalidModuleSpecifier);
            }

          var token = this.nextToken();
          var raw = this.getTokenRaw(token);
          return this.finalize(node, new Node.Literal(token.value, raw));
        }; // import {<foo as bar>} ...;


        Parser.prototype.parseImportSpecifier = function () {
          var node = this.createNode();
          var imported;
          var local;

          if (this.lookahead.type === 3
          /* Identifier */
          ) {
              imported = this.parseVariableIdentifier();
              local = imported;

              if (this.matchContextualKeyword('as')) {
                this.nextToken();
                local = this.parseVariableIdentifier();
              }
            } else {
            imported = this.parseIdentifierName();
            local = imported;

            if (this.matchContextualKeyword('as')) {
              this.nextToken();
              local = this.parseVariableIdentifier();
            } else {
              this.throwUnexpectedToken(this.nextToken());
            }
          }

          return this.finalize(node, new Node.ImportSpecifier(local, imported));
        }; // {foo, bar as bas}


        Parser.prototype.parseNamedImports = function () {
          this.expect('{');
          var specifiers = [];

          while (!this.match('}')) {
            specifiers.push(this.parseImportSpecifier());

            if (!this.match('}')) {
              this.expect(',');
            }
          }

          this.expect('}');
          return specifiers;
        }; // import <foo> ...;


        Parser.prototype.parseImportDefaultSpecifier = function () {
          var node = this.createNode();
          var local = this.parseIdentifierName();
          return this.finalize(node, new Node.ImportDefaultSpecifier(local));
        }; // import <* as foo> ...;


        Parser.prototype.parseImportNamespaceSpecifier = function () {
          var node = this.createNode();
          this.expect('*');

          if (!this.matchContextualKeyword('as')) {
            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
          }

          this.nextToken();
          var local = this.parseIdentifierName();
          return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
        };

        Parser.prototype.parseImportDeclaration = function () {
          if (this.context.inFunctionBody) {
            this.throwError(messages_1.Messages.IllegalImportDeclaration);
          }

          var node = this.createNode();
          this.expectKeyword('import');
          var src;
          var specifiers = [];

          if (this.lookahead.type === 8
          /* StringLiteral */
          ) {
              // import 'foo';
              src = this.parseModuleSpecifier();
            } else {
            if (this.match('{')) {
              // import {bar}
              specifiers = specifiers.concat(this.parseNamedImports());
            } else if (this.match('*')) {
              // import * as foo
              specifiers.push(this.parseImportNamespaceSpecifier());
            } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
              // import foo
              specifiers.push(this.parseImportDefaultSpecifier());

              if (this.match(',')) {
                this.nextToken();

                if (this.match('*')) {
                  // import foo, * as foo
                  specifiers.push(this.parseImportNamespaceSpecifier());
                } else if (this.match('{')) {
                  // import foo, {bar}
                  specifiers = specifiers.concat(this.parseNamedImports());
                } else {
                  this.throwUnexpectedToken(this.lookahead);
                }
              }
            } else {
              this.throwUnexpectedToken(this.nextToken());
            }

            if (!this.matchContextualKeyword('from')) {
              var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
              this.throwError(message, this.lookahead.value);
            }

            this.nextToken();
            src = this.parseModuleSpecifier();
          }

          this.consumeSemicolon();
          return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
        }; // https://tc39.github.io/ecma262/#sec-exports


        Parser.prototype.parseExportSpecifier = function () {
          var node = this.createNode();
          var local = this.parseIdentifierName();
          var exported = local;

          if (this.matchContextualKeyword('as')) {
            this.nextToken();
            exported = this.parseIdentifierName();
          }

          return this.finalize(node, new Node.ExportSpecifier(local, exported));
        };

        Parser.prototype.parseExportDeclaration = function () {
          if (this.context.inFunctionBody) {
            this.throwError(messages_1.Messages.IllegalExportDeclaration);
          }

          var node = this.createNode();
          this.expectKeyword('export');
          var exportDeclaration;

          if (this.matchKeyword('default')) {
            // export default ...
            this.nextToken();

            if (this.matchKeyword('function')) {
              // export default function foo () {}
              // export default function () {}
              var declaration = this.parseFunctionDeclaration(true);
              exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
            } else if (this.matchKeyword('class')) {
              // export default class foo {}
              var declaration = this.parseClassDeclaration(true);
              exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
            } else if (this.matchContextualKeyword('async')) {
              // export default async function f () {}
              // export default async function () {}
              // export default async x => x
              var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
              exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
            } else {
              if (this.matchContextualKeyword('from')) {
                this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
              } // export default {};
              // export default [];
              // export default (1 + 2);


              var declaration = this.match('{') ? this.parseObjectInitializer() : this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
              this.consumeSemicolon();
              exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
            }
          } else if (this.match('*')) {
            // export * from 'foo';
            this.nextToken();

            if (!this.matchContextualKeyword('from')) {
              var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
              this.throwError(message, this.lookahead.value);
            }

            this.nextToken();
            var src = this.parseModuleSpecifier();
            this.consumeSemicolon();
            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
          } else if (this.lookahead.type === 4
          /* Keyword */
          ) {
              // export var f = 1;
              var declaration = void 0;

              switch (this.lookahead.value) {
                case 'let':
                case 'const':
                  declaration = this.parseLexicalDeclaration({
                    inFor: false
                  });
                  break;

                case 'var':
                case 'class':
                case 'function':
                  declaration = this.parseStatementListItem();
                  break;

                default:
                  this.throwUnexpectedToken(this.lookahead);
              }

              exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
            } else if (this.matchAsyncFunction()) {
            var declaration = this.parseFunctionDeclaration();
            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
          } else {
            var specifiers = [];
            var source = null;
            var isExportFromIdentifier = false;
            this.expect('{');

            while (!this.match('}')) {
              isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
              specifiers.push(this.parseExportSpecifier());

              if (!this.match('}')) {
                this.expect(',');
              }
            }

            this.expect('}');

            if (this.matchContextualKeyword('from')) {
              // export {default} from 'foo';
              // export {foo} from 'foo';
              this.nextToken();
              source = this.parseModuleSpecifier();
              this.consumeSemicolon();
            } else if (isExportFromIdentifier) {
              // export {default}; // missing fromClause
              var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
              this.throwError(message, this.lookahead.value);
            } else {
              // export {foo};
              this.consumeSemicolon();
            }

            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
          }

          return exportDeclaration;
        };

        return Parser;
      }();

      exports.Parser = Parser;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports) {
      "use strict"; // Ensure the condition is true, otherwise throw an error.
      // This is only to have a better contract semantic, i.e. another safety net
      // to catch a logic error. The condition shall be fulfilled in normal case.
      // Do NOT use this to enforce a certain condition on any user input.

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function assert(condition, message) {
        /* istanbul ignore if */
        if (!condition) {
          throw new Error('ASSERT: ' + message);
        }
      }

      exports.assert = assert;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports) {
      "use strict";
      /* tslint:disable:max-classes-per-file */

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ErrorHandler = function () {
        function ErrorHandler() {
          this.errors = [];
          this.tolerant = false;
        }

        ErrorHandler.prototype.recordError = function (error) {
          this.errors.push(error);
        };

        ErrorHandler.prototype.tolerate = function (error) {
          if (this.tolerant) {
            this.recordError(error);
          } else {
            throw error;
          }
        };

        ErrorHandler.prototype.constructError = function (msg, column) {
          var error = new Error(msg);

          try {
            throw error;
          } catch (base) {
            /* istanbul ignore else */
            if (Object.create && Object.defineProperty) {
              error = Object.create(base);
              Object.defineProperty(error, 'column', {
                value: column
              });
            }
          }
          /* istanbul ignore next */


          return error;
        };

        ErrorHandler.prototype.createError = function (index, line, col, description) {
          var msg = 'Line ' + line + ': ' + description;
          var error = this.constructError(msg, col);
          error.index = index;
          error.lineNumber = line;
          error.description = description;
          return error;
        };

        ErrorHandler.prototype.throwError = function (index, line, col, description) {
          throw this.createError(index, line, col, description);
        };

        ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
          var error = this.createError(index, line, col, description);

          if (this.tolerant) {
            this.recordError(error);
          } else {
            throw error;
          }
        };

        return ErrorHandler;
      }();

      exports.ErrorHandler = ErrorHandler;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      }); // Error messages should be identical to V8.

      exports.Messages = {
        BadGetterArity: 'Getter must not have any formal parameters',
        BadSetterArity: 'Setter must have exactly one formal parameter',
        BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
        ConstructorIsAsync: 'Class constructor may not be an async method',
        ConstructorSpecialMethod: 'Class constructor may not be an accessor',
        DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
        DefaultRestParameter: 'Unexpected token =',
        DuplicateBinding: 'Duplicate binding %0',
        DuplicateConstructor: 'A class may only have one constructor',
        DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
        ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
        GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
        IllegalBreak: 'Illegal break statement',
        IllegalContinue: 'Illegal continue statement',
        IllegalExportDeclaration: 'Unexpected token',
        IllegalImportDeclaration: 'Unexpected token',
        IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
        IllegalReturn: 'Illegal return statement',
        InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
        InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
        InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
        InvalidLHSInForIn: 'Invalid left-hand side in for-in',
        InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
        InvalidModuleSpecifier: 'Unexpected token',
        InvalidRegExp: 'Invalid regular expression',
        LetInLexicalBinding: 'let is disallowed as a lexically bound name',
        MissingFromClause: 'Unexpected token',
        MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
        NewlineAfterThrow: 'Illegal newline after throw',
        NoAsAfterImportNamespace: 'Unexpected token',
        NoCatchOrFinally: 'Missing catch or finally after try',
        ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
        Redeclaration: '%0 \'%1\' has already been declared',
        StaticPrototype: 'Classes may not have static property named prototype',
        StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
        StrictDelete: 'Delete of an unqualified identifier in strict mode.',
        StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
        StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
        StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
        StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
        StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
        StrictModeWith: 'Strict mode code may not include a with statement',
        StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
        StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
        StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
        StrictReservedWord: 'Use of future reserved word in strict mode',
        StrictVarName: 'Variable name may not be eval or arguments in strict mode',
        TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
        UnexpectedEOS: 'Unexpected end of input',
        UnexpectedIdentifier: 'Unexpected identifier',
        UnexpectedNumber: 'Unexpected number',
        UnexpectedReserved: 'Unexpected reserved word',
        UnexpectedString: 'Unexpected string',
        UnexpectedTemplate: 'Unexpected quasi %0',
        UnexpectedToken: 'Unexpected token %0',
        UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
        UnknownLabel: 'Undefined label \'%0\'',
        UnterminatedRegExp: 'Invalid regular expression: missing /'
      };
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var assert_1 = __webpack_require__(9);

      var character_1 = __webpack_require__(4);

      var messages_1 = __webpack_require__(11);

      function hexValue(ch) {
        return '0123456789abcdef'.indexOf(ch.toLowerCase());
      }

      function octalValue(ch) {
        return '01234567'.indexOf(ch);
      }

      var Scanner = function () {
        function Scanner(code, handler) {
          this.source = code;
          this.errorHandler = handler;
          this.trackComment = false;
          this.isModule = false;
          this.length = code.length;
          this.index = 0;
          this.lineNumber = code.length > 0 ? 1 : 0;
          this.lineStart = 0;
          this.curlyStack = [];
        }

        Scanner.prototype.saveState = function () {
          return {
            index: this.index,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart
          };
        };

        Scanner.prototype.restoreState = function (state) {
          this.index = state.index;
          this.lineNumber = state.lineNumber;
          this.lineStart = state.lineStart;
        };

        Scanner.prototype.eof = function () {
          return this.index >= this.length;
        };

        Scanner.prototype.throwUnexpectedToken = function (message) {
          if (message === void 0) {
            message = messages_1.Messages.UnexpectedTokenIllegal;
          }

          return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
        };

        Scanner.prototype.tolerateUnexpectedToken = function (message) {
          if (message === void 0) {
            message = messages_1.Messages.UnexpectedTokenIllegal;
          }

          this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
        }; // https://tc39.github.io/ecma262/#sec-comments


        Scanner.prototype.skipSingleLineComment = function (offset) {
          var comments = [];
          var start, loc;

          if (this.trackComment) {
            comments = [];
            start = this.index - offset;
            loc = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - offset
              },
              end: {}
            };
          }

          while (!this.eof()) {
            var ch = this.source.charCodeAt(this.index);
            ++this.index;

            if (character_1.Character.isLineTerminator(ch)) {
              if (this.trackComment) {
                loc.end = {
                  line: this.lineNumber,
                  column: this.index - this.lineStart - 1
                };
                var entry = {
                  multiLine: false,
                  slice: [start + offset, this.index - 1],
                  range: [start, this.index - 1],
                  loc: loc
                };
                comments.push(entry);
              }

              if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                ++this.index;
              }

              ++this.lineNumber;
              this.lineStart = this.index;
              return comments;
            }
          }

          if (this.trackComment) {
            loc.end = {
              line: this.lineNumber,
              column: this.index - this.lineStart
            };
            var entry = {
              multiLine: false,
              slice: [start + offset, this.index],
              range: [start, this.index],
              loc: loc
            };
            comments.push(entry);
          }

          return comments;
        };

        Scanner.prototype.skipMultiLineComment = function () {
          var comments = [];
          var start, loc;

          if (this.trackComment) {
            comments = [];
            start = this.index - 2;
            loc = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - 2
              },
              end: {}
            };
          }

          while (!this.eof()) {
            var ch = this.source.charCodeAt(this.index);

            if (character_1.Character.isLineTerminator(ch)) {
              if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
                ++this.index;
              }

              ++this.lineNumber;
              ++this.index;
              this.lineStart = this.index;
            } else if (ch === 0x2A) {
              // Block comment ends with '*/'.
              if (this.source.charCodeAt(this.index + 1) === 0x2F) {
                this.index += 2;

                if (this.trackComment) {
                  loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var entry = {
                    multiLine: true,
                    slice: [start + 2, this.index - 2],
                    range: [start, this.index],
                    loc: loc
                  };
                  comments.push(entry);
                }

                return comments;
              }

              ++this.index;
            } else {
              ++this.index;
            }
          } // Ran off the end of the file - the whole thing is a comment


          if (this.trackComment) {
            loc.end = {
              line: this.lineNumber,
              column: this.index - this.lineStart
            };
            var entry = {
              multiLine: true,
              slice: [start + 2, this.index],
              range: [start, this.index],
              loc: loc
            };
            comments.push(entry);
          }

          this.tolerateUnexpectedToken();
          return comments;
        };

        Scanner.prototype.scanComments = function () {
          var comments;

          if (this.trackComment) {
            comments = [];
          }

          var start = this.index === 0;

          while (!this.eof()) {
            var ch = this.source.charCodeAt(this.index);

            if (character_1.Character.isWhiteSpace(ch)) {
              ++this.index;
            } else if (character_1.Character.isLineTerminator(ch)) {
              ++this.index;

              if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
                ++this.index;
              }

              ++this.lineNumber;
              this.lineStart = this.index;
              start = true;
            } else if (ch === 0x2F) {
              ch = this.source.charCodeAt(this.index + 1);

              if (ch === 0x2F) {
                this.index += 2;
                var comment = this.skipSingleLineComment(2);

                if (this.trackComment) {
                  comments = comments.concat(comment);
                }

                start = true;
              } else if (ch === 0x2A) {
                this.index += 2;
                var comment = this.skipMultiLineComment();

                if (this.trackComment) {
                  comments = comments.concat(comment);
                }
              } else {
                break;
              }
            } else if (start && ch === 0x2D) {
              // U+003E is '>'
              if (this.source.charCodeAt(this.index + 1) === 0x2D && this.source.charCodeAt(this.index + 2) === 0x3E) {
                // '-->' is a single-line comment
                this.index += 3;
                var comment = this.skipSingleLineComment(3);

                if (this.trackComment) {
                  comments = comments.concat(comment);
                }
              } else {
                break;
              }
            } else if (ch === 0x3C && !this.isModule) {
              if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
                this.index += 4; // `<!--`

                var comment = this.skipSingleLineComment(4);

                if (this.trackComment) {
                  comments = comments.concat(comment);
                }
              } else {
                break;
              }
            } else {
              break;
            }
          }

          return comments;
        }; // https://tc39.github.io/ecma262/#sec-future-reserved-words


        Scanner.prototype.isFutureReservedWord = function (id) {
          switch (id) {
            case 'enum':
            case 'export':
            case 'import':
            case 'super':
              return true;

            default:
              return false;
          }
        };

        Scanner.prototype.isStrictModeReservedWord = function (id) {
          switch (id) {
            case 'implements':
            case 'interface':
            case 'package':
            case 'private':
            case 'protected':
            case 'public':
            case 'static':
            case 'yield':
            case 'let':
              return true;

            default:
              return false;
          }
        };

        Scanner.prototype.isRestrictedWord = function (id) {
          return id === 'eval' || id === 'arguments';
        }; // https://tc39.github.io/ecma262/#sec-keywords


        Scanner.prototype.isKeyword = function (id) {
          switch (id.length) {
            case 2:
              return id === 'if' || id === 'in' || id === 'do';

            case 3:
              return id === 'var' || id === 'for' || id === 'new' || id === 'try' || id === 'let';

            case 4:
              return id === 'this' || id === 'else' || id === 'case' || id === 'void' || id === 'with' || id === 'enum';

            case 5:
              return id === 'while' || id === 'break' || id === 'catch' || id === 'throw' || id === 'const' || id === 'yield' || id === 'class' || id === 'super';

            case 6:
              return id === 'return' || id === 'typeof' || id === 'delete' || id === 'switch' || id === 'export' || id === 'import';

            case 7:
              return id === 'default' || id === 'finally' || id === 'extends';

            case 8:
              return id === 'function' || id === 'continue' || id === 'debugger';

            case 10:
              return id === 'instanceof';

            default:
              return false;
          }
        };

        Scanner.prototype.codePointAt = function (i) {
          var cp = this.source.charCodeAt(i);

          if (cp >= 0xD800 && cp <= 0xDBFF) {
            var second = this.source.charCodeAt(i + 1);

            if (second >= 0xDC00 && second <= 0xDFFF) {
              var first = cp;
              cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
            }
          }

          return cp;
        };

        Scanner.prototype.scanHexEscape = function (prefix) {
          var len = prefix === 'u' ? 4 : 2;
          var code = 0;

          for (var i = 0; i < len; ++i) {
            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
              code = code * 16 + hexValue(this.source[this.index++]);
            } else {
              return null;
            }
          }

          return String.fromCharCode(code);
        };

        Scanner.prototype.scanUnicodeCodePointEscape = function () {
          var ch = this.source[this.index];
          var code = 0; // At least, one hex digit is required.

          if (ch === '}') {
            this.throwUnexpectedToken();
          }

          while (!this.eof()) {
            ch = this.source[this.index++];

            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
              break;
            }

            code = code * 16 + hexValue(ch);
          }

          if (code > 0x10FFFF || ch !== '}') {
            this.throwUnexpectedToken();
          }

          return character_1.Character.fromCodePoint(code);
        };

        Scanner.prototype.getIdentifier = function () {
          var start = this.index++;

          while (!this.eof()) {
            var ch = this.source.charCodeAt(this.index);

            if (ch === 0x5C) {
              // Blackslash (U+005C) marks Unicode escape sequence.
              this.index = start;
              return this.getComplexIdentifier();
            } else if (ch >= 0xD800 && ch < 0xDFFF) {
              // Need to handle surrogate pairs.
              this.index = start;
              return this.getComplexIdentifier();
            }

            if (character_1.Character.isIdentifierPart(ch)) {
              ++this.index;
            } else {
              break;
            }
          }

          return this.source.slice(start, this.index);
        };

        Scanner.prototype.getComplexIdentifier = function () {
          var cp = this.codePointAt(this.index);
          var id = character_1.Character.fromCodePoint(cp);
          this.index += id.length; // '\u' (U+005C, U+0075) denotes an escaped character.

          var ch;

          if (cp === 0x5C) {
            if (this.source.charCodeAt(this.index) !== 0x75) {
              this.throwUnexpectedToken();
            }

            ++this.index;

            if (this.source[this.index] === '{') {
              ++this.index;
              ch = this.scanUnicodeCodePointEscape();
            } else {
              ch = this.scanHexEscape('u');

              if (ch === null || ch === '\\' || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
                this.throwUnexpectedToken();
              }
            }

            id = ch;
          }

          while (!this.eof()) {
            cp = this.codePointAt(this.index);

            if (!character_1.Character.isIdentifierPart(cp)) {
              break;
            }

            ch = character_1.Character.fromCodePoint(cp);
            id += ch;
            this.index += ch.length; // '\u' (U+005C, U+0075) denotes an escaped character.

            if (cp === 0x5C) {
              id = id.substr(0, id.length - 1);

              if (this.source.charCodeAt(this.index) !== 0x75) {
                this.throwUnexpectedToken();
              }

              ++this.index;

              if (this.source[this.index] === '{') {
                ++this.index;
                ch = this.scanUnicodeCodePointEscape();
              } else {
                ch = this.scanHexEscape('u');

                if (ch === null || ch === '\\' || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                  this.throwUnexpectedToken();
                }
              }

              id += ch;
            }
          }

          return id;
        };

        Scanner.prototype.octalToDecimal = function (ch) {
          // \0 is not octal escape sequence
          var octal = ch !== '0';
          var code = octalValue(ch);

          if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
            octal = true;
            code = code * 8 + octalValue(this.source[this.index++]); // 3 digits are only allowed when string starts
            // with 0, 1, 2, 3

            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
              code = code * 8 + octalValue(this.source[this.index++]);
            }
          }

          return {
            code: code,
            octal: octal
          };
        }; // https://tc39.github.io/ecma262/#sec-names-and-keywords


        Scanner.prototype.scanIdentifier = function () {
          var type;
          var start = this.index; // Backslash (U+005C) starts an escaped character.

          var id = this.source.charCodeAt(start) === 0x5C ? this.getComplexIdentifier() : this.getIdentifier(); // There is no keyword or literal with only one character.
          // Thus, it must be an identifier.

          if (id.length === 1) {
            type = 3
            /* Identifier */
            ;
          } else if (this.isKeyword(id)) {
            type = 4
            /* Keyword */
            ;
          } else if (id === 'null') {
            type = 5
            /* NullLiteral */
            ;
          } else if (id === 'true' || id === 'false') {
            type = 1
            /* BooleanLiteral */
            ;
          } else {
            type = 3
            /* Identifier */
            ;
          }

          if (type !== 3
          /* Identifier */
          && start + id.length !== this.index) {
            var restore = this.index;
            this.index = start;
            this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
            this.index = restore;
          }

          return {
            type: type,
            value: id,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        }; // https://tc39.github.io/ecma262/#sec-punctuators


        Scanner.prototype.scanPunctuator = function () {
          var start = this.index; // Check for most common single-character punctuators.

          var str = this.source[this.index];

          switch (str) {
            case '(':
            case '{':
              if (str === '{') {
                this.curlyStack.push('{');
              }

              ++this.index;
              break;

            case '.':
              ++this.index;

              if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
                // Spread operator: ...
                this.index += 2;
                str = '...';
              }

              break;

            case '}':
              ++this.index;
              this.curlyStack.pop();
              break;

            case ')':
            case ';':
            case ',':
            case '[':
            case ']':
            case ':':
            case '?':
            case '~':
              ++this.index;
              break;

            default:
              // 4-character punctuator.
              str = this.source.substr(this.index, 4);

              if (str === '>>>=') {
                this.index += 4;
              } else {
                // 3-character punctuators.
                str = str.substr(0, 3);

                if (str === '===' || str === '!==' || str === '>>>' || str === '<<=' || str === '>>=' || str === '**=') {
                  this.index += 3;
                } else {
                  // 2-character punctuators.
                  str = str.substr(0, 2);

                  if (str === '&&' || str === '||' || str === '==' || str === '!=' || str === '+=' || str === '-=' || str === '*=' || str === '/=' || str === '++' || str === '--' || str === '<<' || str === '>>' || str === '&=' || str === '|=' || str === '^=' || str === '%=' || str === '<=' || str === '>=' || str === '=>' || str === '**') {
                    this.index += 2;
                  } else {
                    // 1-character punctuators.
                    str = this.source[this.index];

                    if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
                      ++this.index;
                    }
                  }
                }
              }

          }

          if (this.index === start) {
            this.throwUnexpectedToken();
          }

          return {
            type: 7
            /* Punctuator */
            ,
            value: str,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        }; // https://tc39.github.io/ecma262/#sec-literals-numeric-literals


        Scanner.prototype.scanHexLiteral = function (start) {
          var num = '';

          while (!this.eof()) {
            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
              break;
            }

            num += this.source[this.index++];
          }

          if (num.length === 0) {
            this.throwUnexpectedToken();
          }

          if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
            this.throwUnexpectedToken();
          }

          return {
            type: 6
            /* NumericLiteral */
            ,
            value: parseInt('0x' + num, 16),
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        };

        Scanner.prototype.scanBinaryLiteral = function (start) {
          var num = '';
          var ch;

          while (!this.eof()) {
            ch = this.source[this.index];

            if (ch !== '0' && ch !== '1') {
              break;
            }

            num += this.source[this.index++];
          }

          if (num.length === 0) {
            // only 0b or 0B
            this.throwUnexpectedToken();
          }

          if (!this.eof()) {
            ch = this.source.charCodeAt(this.index);
            /* istanbul ignore else */

            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
              this.throwUnexpectedToken();
            }
          }

          return {
            type: 6
            /* NumericLiteral */
            ,
            value: parseInt(num, 2),
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        };

        Scanner.prototype.scanOctalLiteral = function (prefix, start) {
          var num = '';
          var octal = false;

          if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
            octal = true;
            num = '0' + this.source[this.index++];
          } else {
            ++this.index;
          }

          while (!this.eof()) {
            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
              break;
            }

            num += this.source[this.index++];
          }

          if (!octal && num.length === 0) {
            // only 0o or 0O
            this.throwUnexpectedToken();
          }

          if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
            this.throwUnexpectedToken();
          }

          return {
            type: 6
            /* NumericLiteral */
            ,
            value: parseInt(num, 8),
            octal: octal,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        };

        Scanner.prototype.isImplicitOctalLiteral = function () {
          // Implicit octal, unless there is a non-octal digit.
          // (Annex B.1.1 on Numeric Literals)
          for (var i = this.index + 1; i < this.length; ++i) {
            var ch = this.source[i];

            if (ch === '8' || ch === '9') {
              return false;
            }

            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
              return true;
            }
          }

          return true;
        };

        Scanner.prototype.scanNumericLiteral = function () {
          var start = this.index;
          var ch = this.source[start];
          assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === '.', 'Numeric literal must start with a decimal digit or a decimal point');
          var num = '';

          if (ch !== '.') {
            num = this.source[this.index++];
            ch = this.source[this.index]; // Hex number starts with '0x'.
            // Octal number starts with '0'.
            // Octal number in ES6 starts with '0o'.
            // Binary number in ES6 starts with '0b'.

            if (num === '0') {
              if (ch === 'x' || ch === 'X') {
                ++this.index;
                return this.scanHexLiteral(start);
              }

              if (ch === 'b' || ch === 'B') {
                ++this.index;
                return this.scanBinaryLiteral(start);
              }

              if (ch === 'o' || ch === 'O') {
                return this.scanOctalLiteral(ch, start);
              }

              if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                if (this.isImplicitOctalLiteral()) {
                  return this.scanOctalLiteral(ch, start);
                }
              }
            }

            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
              num += this.source[this.index++];
            }

            ch = this.source[this.index];
          }

          if (ch === '.') {
            num += this.source[this.index++];

            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
              num += this.source[this.index++];
            }

            ch = this.source[this.index];
          }

          if (ch === 'e' || ch === 'E') {
            num += this.source[this.index++];
            ch = this.source[this.index];

            if (ch === '+' || ch === '-') {
              num += this.source[this.index++];
            }

            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
              while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                num += this.source[this.index++];
              }
            } else {
              this.throwUnexpectedToken();
            }
          }

          if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
            this.throwUnexpectedToken();
          }

          return {
            type: 6
            /* NumericLiteral */
            ,
            value: parseFloat(num),
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        }; // https://tc39.github.io/ecma262/#sec-literals-string-literals


        Scanner.prototype.scanStringLiteral = function () {
          var start = this.index;
          var quote = this.source[start];
          assert_1.assert(quote === '\'' || quote === '"', 'String literal must starts with a quote');
          ++this.index;
          var octal = false;
          var str = '';

          while (!this.eof()) {
            var ch = this.source[this.index++];

            if (ch === quote) {
              quote = '';
              break;
            } else if (ch === '\\') {
              ch = this.source[this.index++];

              if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                switch (ch) {
                  case 'u':
                    if (this.source[this.index] === '{') {
                      ++this.index;
                      str += this.scanUnicodeCodePointEscape();
                    } else {
                      var unescaped_1 = this.scanHexEscape(ch);

                      if (unescaped_1 === null) {
                        this.throwUnexpectedToken();
                      }

                      str += unescaped_1;
                    }

                    break;

                  case 'x':
                    var unescaped = this.scanHexEscape(ch);

                    if (unescaped === null) {
                      this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                    }

                    str += unescaped;
                    break;

                  case 'n':
                    str += '\n';
                    break;

                  case 'r':
                    str += '\r';
                    break;

                  case 't':
                    str += '\t';
                    break;

                  case 'b':
                    str += '\b';
                    break;

                  case 'f':
                    str += '\f';
                    break;

                  case 'v':
                    str += '\x0B';
                    break;

                  case '8':
                  case '9':
                    str += ch;
                    this.tolerateUnexpectedToken();
                    break;

                  default:
                    if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                      var octToDec = this.octalToDecimal(ch);
                      octal = octToDec.octal || octal;
                      str += String.fromCharCode(octToDec.code);
                    } else {
                      str += ch;
                    }

                    break;
                }
              } else {
                ++this.lineNumber;

                if (ch === '\r' && this.source[this.index] === '\n') {
                  ++this.index;
                }

                this.lineStart = this.index;
              }
            } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
              break;
            } else {
              str += ch;
            }
          }

          if (quote !== '') {
            this.index = start;
            this.throwUnexpectedToken();
          }

          return {
            type: 8
            /* StringLiteral */
            ,
            value: str,
            octal: octal,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        }; // https://tc39.github.io/ecma262/#sec-template-literal-lexical-components


        Scanner.prototype.scanTemplate = function () {
          var cooked = '';
          var terminated = false;
          var start = this.index;
          var head = this.source[start] === '`';
          var tail = false;
          var rawOffset = 2;
          ++this.index;

          while (!this.eof()) {
            var ch = this.source[this.index++];

            if (ch === '`') {
              rawOffset = 1;
              tail = true;
              terminated = true;
              break;
            } else if (ch === '$') {
              if (this.source[this.index] === '{') {
                this.curlyStack.push('${');
                ++this.index;
                terminated = true;
                break;
              }

              cooked += ch;
            } else if (ch === '\\') {
              ch = this.source[this.index++];

              if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                switch (ch) {
                  case 'n':
                    cooked += '\n';
                    break;

                  case 'r':
                    cooked += '\r';
                    break;

                  case 't':
                    cooked += '\t';
                    break;

                  case 'u':
                    if (this.source[this.index] === '{') {
                      ++this.index;
                      cooked += this.scanUnicodeCodePointEscape();
                    } else {
                      var restore = this.index;
                      var unescaped_2 = this.scanHexEscape(ch);

                      if (unescaped_2 !== null) {
                        cooked += unescaped_2;
                      } else {
                        this.index = restore;
                        cooked += ch;
                      }
                    }

                    break;

                  case 'x':
                    var unescaped = this.scanHexEscape(ch);

                    if (unescaped === null) {
                      this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                    }

                    cooked += unescaped;
                    break;

                  case 'b':
                    cooked += '\b';
                    break;

                  case 'f':
                    cooked += '\f';
                    break;

                  case 'v':
                    cooked += '\v';
                    break;

                  default:
                    if (ch === '0') {
                      if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                        // Illegal: \01 \02 and so on
                        this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                      }

                      cooked += '\0';
                    } else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                      // Illegal: \1 \2
                      this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                    } else {
                      cooked += ch;
                    }

                    break;
                }
              } else {
                ++this.lineNumber;

                if (ch === '\r' && this.source[this.index] === '\n') {
                  ++this.index;
                }

                this.lineStart = this.index;
              }
            } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
              ++this.lineNumber;

              if (ch === '\r' && this.source[this.index] === '\n') {
                ++this.index;
              }

              this.lineStart = this.index;
              cooked += '\n';
            } else {
              cooked += ch;
            }
          }

          if (!terminated) {
            this.throwUnexpectedToken();
          }

          if (!head) {
            this.curlyStack.pop();
          }

          return {
            type: 10
            /* Template */
            ,
            value: this.source.slice(start + 1, this.index - rawOffset),
            cooked: cooked,
            head: head,
            tail: tail,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        }; // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals


        Scanner.prototype.testRegExp = function (pattern, flags) {
          // The BMP character to use as a replacement for astral symbols when
          // translating an ES6 "u"-flagged pattern to an ES5-compatible
          // approximation.
          // Note: replacing with '\uFFFF' enables false positives in unlikely
          // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
          // pattern that would not be detected by this substitution.
          var astralSubstitute = "\uFFFF";
          var tmp = pattern;
          var self = this;

          if (flags.indexOf('u') >= 0) {
            tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
              var codePoint = parseInt($1 || $2, 16);

              if (codePoint > 0x10FFFF) {
                self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
              }

              if (codePoint <= 0xFFFF) {
                return String.fromCharCode(codePoint);
              }

              return astralSubstitute;
            }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
          } // First, detect invalid regular expressions.


          try {
            RegExp(tmp);
          } catch (e) {
            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
          } // Return a regular expression object for this pattern-flag pair, or
          // `null` in case the current environment doesn't support the flags it
          // uses.


          try {
            return new RegExp(pattern, flags);
          } catch (exception) {
            /* istanbul ignore next */
            return null;
          }
        };

        Scanner.prototype.scanRegExpBody = function () {
          var ch = this.source[this.index];
          assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
          var str = this.source[this.index++];
          var classMarker = false;
          var terminated = false;

          while (!this.eof()) {
            ch = this.source[this.index++];
            str += ch;

            if (ch === '\\') {
              ch = this.source[this.index++]; // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals

              if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
              }

              str += ch;
            } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
              this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
            } else if (classMarker) {
              if (ch === ']') {
                classMarker = false;
              }
            } else {
              if (ch === '/') {
                terminated = true;
                break;
              } else if (ch === '[') {
                classMarker = true;
              }
            }
          }

          if (!terminated) {
            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
          } // Exclude leading and trailing slash.


          return str.substr(1, str.length - 2);
        };

        Scanner.prototype.scanRegExpFlags = function () {
          var str = '';
          var flags = '';

          while (!this.eof()) {
            var ch = this.source[this.index];

            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
              break;
            }

            ++this.index;

            if (ch === '\\' && !this.eof()) {
              ch = this.source[this.index];

              if (ch === 'u') {
                ++this.index;
                var restore = this.index;

                var _char = this.scanHexEscape('u');

                if (_char !== null) {
                  flags += _char;

                  for (str += "\\u"; restore < this.index; ++restore) {
                    str += this.source[restore];
                  }
                } else {
                  this.index = restore;
                  flags += 'u';
                  str += "\\u";
                }

                this.tolerateUnexpectedToken();
              } else {
                str += '\\';
                this.tolerateUnexpectedToken();
              }
            } else {
              flags += ch;
              str += ch;
            }
          }

          return flags;
        };

        Scanner.prototype.scanRegExp = function () {
          var start = this.index;
          var pattern = this.scanRegExpBody();
          var flags = this.scanRegExpFlags();
          var value = this.testRegExp(pattern, flags);
          return {
            type: 9
            /* RegularExpression */
            ,
            value: '',
            pattern: pattern,
            flags: flags,
            regex: value,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: start,
            end: this.index
          };
        };

        Scanner.prototype.lex = function () {
          if (this.eof()) {
            return {
              type: 2
              /* EOF */
              ,
              value: '',
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: this.index,
              end: this.index
            };
          }

          var cp = this.source.charCodeAt(this.index);

          if (character_1.Character.isIdentifierStart(cp)) {
            return this.scanIdentifier();
          } // Very common: ( and ) and ;


          if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
            return this.scanPunctuator();
          } // String literal starts with single quote (U+0027) or double quote (U+0022).


          if (cp === 0x27 || cp === 0x22) {
            return this.scanStringLiteral();
          } // Dot (.) U+002E can also start a floating-point number, hence the need
          // to check the next character.


          if (cp === 0x2E) {
            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
              return this.scanNumericLiteral();
            }

            return this.scanPunctuator();
          }

          if (character_1.Character.isDecimalDigit(cp)) {
            return this.scanNumericLiteral();
          } // Template literals start with ` (U+0060) for template head
          // or } (U+007D) for template middle or template tail.


          if (cp === 0x60 || cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${') {
            return this.scanTemplate();
          } // Possible identifier start in a surrogate pair.


          if (cp >= 0xD800 && cp < 0xDFFF) {
            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
              return this.scanIdentifier();
            }
          }

          return this.scanPunctuator();
        };

        return Scanner;
      }();

      exports.Scanner = Scanner;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.TokenName = {};
      exports.TokenName[1
      /* BooleanLiteral */
      ] = 'Boolean';
      exports.TokenName[2
      /* EOF */
      ] = '<end>';
      exports.TokenName[3
      /* Identifier */
      ] = 'Identifier';
      exports.TokenName[4
      /* Keyword */
      ] = 'Keyword';
      exports.TokenName[5
      /* NullLiteral */
      ] = 'Null';
      exports.TokenName[6
      /* NumericLiteral */
      ] = 'Numeric';
      exports.TokenName[7
      /* Punctuator */
      ] = 'Punctuator';
      exports.TokenName[8
      /* StringLiteral */
      ] = 'String';
      exports.TokenName[9
      /* RegularExpression */
      ] = 'RegularExpression';
      exports.TokenName[10
      /* Template */
      ] = 'Template';
      /***/
    },
    /* 14 */

    /***/
    function (module, exports) {
      "use strict"; // Generated by generate-xhtml-entities.js. DO NOT MODIFY!

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.XHTMLEntities = {
        quot: "\"",
        amp: "&",
        apos: "'",
        gt: ">",
        nbsp: "\xA0",
        iexcl: "\xA1",
        cent: "\xA2",
        pound: "\xA3",
        curren: "\xA4",
        yen: "\xA5",
        brvbar: "\xA6",
        sect: "\xA7",
        uml: "\xA8",
        copy: "\xA9",
        ordf: "\xAA",
        laquo: "\xAB",
        not: "\xAC",
        shy: "\xAD",
        reg: "\xAE",
        macr: "\xAF",
        deg: "\xB0",
        plusmn: "\xB1",
        sup2: "\xB2",
        sup3: "\xB3",
        acute: "\xB4",
        micro: "\xB5",
        para: "\xB6",
        middot: "\xB7",
        cedil: "\xB8",
        sup1: "\xB9",
        ordm: "\xBA",
        raquo: "\xBB",
        frac14: "\xBC",
        frac12: "\xBD",
        frac34: "\xBE",
        iquest: "\xBF",
        Agrave: "\xC0",
        Aacute: "\xC1",
        Acirc: "\xC2",
        Atilde: "\xC3",
        Auml: "\xC4",
        Aring: "\xC5",
        AElig: "\xC6",
        Ccedil: "\xC7",
        Egrave: "\xC8",
        Eacute: "\xC9",
        Ecirc: "\xCA",
        Euml: "\xCB",
        Igrave: "\xCC",
        Iacute: "\xCD",
        Icirc: "\xCE",
        Iuml: "\xCF",
        ETH: "\xD0",
        Ntilde: "\xD1",
        Ograve: "\xD2",
        Oacute: "\xD3",
        Ocirc: "\xD4",
        Otilde: "\xD5",
        Ouml: "\xD6",
        times: "\xD7",
        Oslash: "\xD8",
        Ugrave: "\xD9",
        Uacute: "\xDA",
        Ucirc: "\xDB",
        Uuml: "\xDC",
        Yacute: "\xDD",
        THORN: "\xDE",
        szlig: "\xDF",
        agrave: "\xE0",
        aacute: "\xE1",
        acirc: "\xE2",
        atilde: "\xE3",
        auml: "\xE4",
        aring: "\xE5",
        aelig: "\xE6",
        ccedil: "\xE7",
        egrave: "\xE8",
        eacute: "\xE9",
        ecirc: "\xEA",
        euml: "\xEB",
        igrave: "\xEC",
        iacute: "\xED",
        icirc: "\xEE",
        iuml: "\xEF",
        eth: "\xF0",
        ntilde: "\xF1",
        ograve: "\xF2",
        oacute: "\xF3",
        ocirc: "\xF4",
        otilde: "\xF5",
        ouml: "\xF6",
        divide: "\xF7",
        oslash: "\xF8",
        ugrave: "\xF9",
        uacute: "\xFA",
        ucirc: "\xFB",
        uuml: "\xFC",
        yacute: "\xFD",
        thorn: "\xFE",
        yuml: "\xFF",
        OElig: "\u0152",
        oelig: "\u0153",
        Scaron: "\u0160",
        scaron: "\u0161",
        Yuml: "\u0178",
        fnof: "\u0192",
        circ: "\u02C6",
        tilde: "\u02DC",
        Alpha: "\u0391",
        Beta: "\u0392",
        Gamma: "\u0393",
        Delta: "\u0394",
        Epsilon: "\u0395",
        Zeta: "\u0396",
        Eta: "\u0397",
        Theta: "\u0398",
        Iota: "\u0399",
        Kappa: "\u039A",
        Lambda: "\u039B",
        Mu: "\u039C",
        Nu: "\u039D",
        Xi: "\u039E",
        Omicron: "\u039F",
        Pi: "\u03A0",
        Rho: "\u03A1",
        Sigma: "\u03A3",
        Tau: "\u03A4",
        Upsilon: "\u03A5",
        Phi: "\u03A6",
        Chi: "\u03A7",
        Psi: "\u03A8",
        Omega: "\u03A9",
        alpha: "\u03B1",
        beta: "\u03B2",
        gamma: "\u03B3",
        delta: "\u03B4",
        epsilon: "\u03B5",
        zeta: "\u03B6",
        eta: "\u03B7",
        theta: "\u03B8",
        iota: "\u03B9",
        kappa: "\u03BA",
        lambda: "\u03BB",
        mu: "\u03BC",
        nu: "\u03BD",
        xi: "\u03BE",
        omicron: "\u03BF",
        pi: "\u03C0",
        rho: "\u03C1",
        sigmaf: "\u03C2",
        sigma: "\u03C3",
        tau: "\u03C4",
        upsilon: "\u03C5",
        phi: "\u03C6",
        chi: "\u03C7",
        psi: "\u03C8",
        omega: "\u03C9",
        thetasym: "\u03D1",
        upsih: "\u03D2",
        piv: "\u03D6",
        ensp: "\u2002",
        emsp: "\u2003",
        thinsp: "\u2009",
        zwnj: "\u200C",
        zwj: "\u200D",
        lrm: "\u200E",
        rlm: "\u200F",
        ndash: "\u2013",
        mdash: "\u2014",
        lsquo: "\u2018",
        rsquo: "\u2019",
        sbquo: "\u201A",
        ldquo: "\u201C",
        rdquo: "\u201D",
        bdquo: "\u201E",
        dagger: "\u2020",
        Dagger: "\u2021",
        bull: "\u2022",
        hellip: "\u2026",
        permil: "\u2030",
        prime: "\u2032",
        Prime: "\u2033",
        lsaquo: "\u2039",
        rsaquo: "\u203A",
        oline: "\u203E",
        frasl: "\u2044",
        euro: "\u20AC",
        image: "\u2111",
        weierp: "\u2118",
        real: "\u211C",
        trade: "\u2122",
        alefsym: "\u2135",
        larr: "\u2190",
        uarr: "\u2191",
        rarr: "\u2192",
        darr: "\u2193",
        harr: "\u2194",
        crarr: "\u21B5",
        lArr: "\u21D0",
        uArr: "\u21D1",
        rArr: "\u21D2",
        dArr: "\u21D3",
        hArr: "\u21D4",
        forall: "\u2200",
        part: "\u2202",
        exist: "\u2203",
        empty: "\u2205",
        nabla: "\u2207",
        isin: "\u2208",
        notin: "\u2209",
        ni: "\u220B",
        prod: "\u220F",
        sum: "\u2211",
        minus: "\u2212",
        lowast: "\u2217",
        radic: "\u221A",
        prop: "\u221D",
        infin: "\u221E",
        ang: "\u2220",
        and: "\u2227",
        or: "\u2228",
        cap: "\u2229",
        cup: "\u222A",
        "int": "\u222B",
        there4: "\u2234",
        sim: "\u223C",
        cong: "\u2245",
        asymp: "\u2248",
        ne: "\u2260",
        equiv: "\u2261",
        le: "\u2264",
        ge: "\u2265",
        sub: "\u2282",
        sup: "\u2283",
        nsub: "\u2284",
        sube: "\u2286",
        supe: "\u2287",
        oplus: "\u2295",
        otimes: "\u2297",
        perp: "\u22A5",
        sdot: "\u22C5",
        lceil: "\u2308",
        rceil: "\u2309",
        lfloor: "\u230A",
        rfloor: "\u230B",
        loz: "\u25CA",
        spades: "\u2660",
        clubs: "\u2663",
        hearts: "\u2665",
        diams: "\u2666",
        lang: "\u27E8",
        rang: "\u27E9"
      };
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var error_handler_1 = __webpack_require__(10);

      var scanner_1 = __webpack_require__(12);

      var token_1 = __webpack_require__(13);

      var Reader = function () {
        function Reader() {
          this.values = [];
          this.curly = this.paren = -1;
        } // A function following one of those tokens is an expression.


        Reader.prototype.beforeFunctionExpression = function (t) {
          return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new', 'return', 'case', 'delete', 'throw', 'void', // assignment operators
          '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', ',', // binary/unary operators
          '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=', '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
        }; // Determine if forward slash (/) is an operator or part of a regular expression
        // https://github.com/mozilla/sweet.js/wiki/design


        Reader.prototype.isRegexStart = function () {
          var previous = this.values[this.values.length - 1];
          var regex = previous !== null;

          switch (previous) {
            case 'this':
            case ']':
              regex = false;
              break;

            case ')':
              var keyword = this.values[this.paren - 1];
              regex = keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with';
              break;

            case '}':
              // Dividing a function by anything makes little sense,
              // but we have to check for that.
              regex = false;

              if (this.values[this.curly - 3] === 'function') {
                // Anonymous function, e.g. function(){} /42
                var check = this.values[this.curly - 4];
                regex = check ? !this.beforeFunctionExpression(check) : false;
              } else if (this.values[this.curly - 4] === 'function') {
                // Named function, e.g. function f(){} /42/
                var check = this.values[this.curly - 5];
                regex = check ? !this.beforeFunctionExpression(check) : true;
              }

              break;

            default:
              break;
          }

          return regex;
        };

        Reader.prototype.push = function (token) {
          if (token.type === 7
          /* Punctuator */
          || token.type === 4
          /* Keyword */
          ) {
              if (token.value === '{') {
                this.curly = this.values.length;
              } else if (token.value === '(') {
                this.paren = this.values.length;
              }

              this.values.push(token.value);
            } else {
            this.values.push(null);
          }
        };

        return Reader;
      }();

      var Tokenizer = function () {
        function Tokenizer(code, config) {
          this.errorHandler = new error_handler_1.ErrorHandler();
          this.errorHandler.tolerant = config ? typeof config.tolerant === 'boolean' && config.tolerant : false;
          this.scanner = new scanner_1.Scanner(code, this.errorHandler);
          this.scanner.trackComment = config ? typeof config.comment === 'boolean' && config.comment : false;
          this.trackRange = config ? typeof config.range === 'boolean' && config.range : false;
          this.trackLoc = config ? typeof config.loc === 'boolean' && config.loc : false;
          this.buffer = [];
          this.reader = new Reader();
        }

        Tokenizer.prototype.errors = function () {
          return this.errorHandler.errors;
        };

        Tokenizer.prototype.getNextToken = function () {
          if (this.buffer.length === 0) {
            var comments = this.scanner.scanComments();

            if (this.scanner.trackComment) {
              for (var i = 0; i < comments.length; ++i) {
                var e = comments[i];
                var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                var comment = {
                  type: e.multiLine ? 'BlockComment' : 'LineComment',
                  value: value
                };

                if (this.trackRange) {
                  comment.range = e.range;
                }

                if (this.trackLoc) {
                  comment.loc = e.loc;
                }

                this.buffer.push(comment);
              }
            }

            if (!this.scanner.eof()) {
              var loc = void 0;

              if (this.trackLoc) {
                loc = {
                  start: {
                    line: this.scanner.lineNumber,
                    column: this.scanner.index - this.scanner.lineStart
                  },
                  end: {}
                };
              }

              var startRegex = this.scanner.source[this.scanner.index] === '/' && this.reader.isRegexStart();
              var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
              this.reader.push(token);
              var entry = {
                type: token_1.TokenName[token.type],
                value: this.scanner.source.slice(token.start, token.end)
              };

              if (this.trackRange) {
                entry.range = [token.start, token.end];
              }

              if (this.trackLoc) {
                loc.end = {
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
                entry.loc = loc;
              }

              if (token.type === 9
              /* RegularExpression */
              ) {
                  var pattern = token.pattern;
                  var flags = token.flags;
                  entry.regex = {
                    pattern: pattern,
                    flags: flags
                  };
                }

              this.buffer.push(entry);
            }
          }

          return this.buffer.shift();
        };

        return Tokenizer;
      }();

      exports.Tokenizer = Tokenizer;
      /***/
    }
    /******/
    ])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "./node_modules/js-yaml/index.js":
/*!***************************************!*\
  !*** ./node_modules/js-yaml/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yaml = __webpack_require__(/*! ./lib/js-yaml.js */ "./node_modules/js-yaml/lib/js-yaml.js");

module.exports = yaml;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var loader = __webpack_require__(/*! ./js-yaml/loader */ "./node_modules/js-yaml/lib/js-yaml/loader.js");

var dumper = __webpack_require__(/*! ./js-yaml/dumper */ "./node_modules/js-yaml/lib/js-yaml/dumper.js");

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

module.exports.Type = __webpack_require__(/*! ./js-yaml/type */ "./node_modules/js-yaml/lib/js-yaml/type.js");
module.exports.Schema = __webpack_require__(/*! ./js-yaml/schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");
module.exports.FAILSAFE_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js");
module.exports.JSON_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/json */ "./node_modules/js-yaml/lib/js-yaml/schema/json.js");
module.exports.CORE_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/core */ "./node_modules/js-yaml/lib/js-yaml/schema/core.js");
module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");
module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = __webpack_require__(/*! ./js-yaml/exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js"); // Deprecated schema names from JS-YAML 2.0.x

module.exports.MINIMAL_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js");
module.exports.SAFE_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");
module.exports.DEFAULT_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js"); // Deprecated functions from JS-YAML 1.x.x

module.exports.scan = deprecated('scan');
module.exports.parse = deprecated('parse');
module.exports.compose = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/common.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNothing(subject) {
  return typeof subject === 'undefined' || subject === null;
}

function isObject(subject) {
  return _typeof(subject) === 'object' && subject !== null;
}

function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;else if (isNothing(sequence)) return [];
  return [sequence];
}

function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}

function repeat(string, count) {
  var result = '',
      cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}

function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}

module.exports.isNothing = isNothing;
module.exports.isObject = isObject;
module.exports.toArray = toArray;
module.exports.repeat = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend = extend;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/dumper.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/dumper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint-disable no-use-before-define*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var common = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

var DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");

var DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");

var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 0x09;
/* Tab */

var CHAR_LINE_FEED = 0x0A;
/* LF */

var CHAR_SPACE = 0x20;
/* Space */

var CHAR_EXCLAMATION = 0x21;
/* ! */

var CHAR_DOUBLE_QUOTE = 0x22;
/* " */

var CHAR_SHARP = 0x23;
/* # */

var CHAR_PERCENT = 0x25;
/* % */

var CHAR_AMPERSAND = 0x26;
/* & */

var CHAR_SINGLE_QUOTE = 0x27;
/* ' */

var CHAR_ASTERISK = 0x2A;
/* * */

var CHAR_COMMA = 0x2C;
/* , */

var CHAR_MINUS = 0x2D;
/* - */

var CHAR_COLON = 0x3A;
/* : */

var CHAR_GREATER_THAN = 0x3E;
/* > */

var CHAR_QUESTION = 0x3F;
/* ? */

var CHAR_COMMERCIAL_AT = 0x40;
/* @ */

var CHAR_LEFT_SQUARE_BRACKET = 0x5B;
/* [ */

var CHAR_RIGHT_SQUARE_BRACKET = 0x5D;
/* ] */

var CHAR_GRAVE_ACCENT = 0x60;
/* ` */

var CHAR_LEFT_CURLY_BRACKET = 0x7B;
/* { */

var CHAR_VERTICAL_LINE = 0x7C;
/* | */

var CHAR_RIGHT_CURLY_BRACKET = 0x7D;
/* } */

var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';
var DEPRECATED_BOOLEANS_SYNTAX = ['y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON', 'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;
  if (map === null) return {};
  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }

    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent = Math.max(1, options['indent'] || 2);
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid = options['skipInvalid'] || false;
  this.flowLevel = common.isNothing(options['flowLevel']) ? -1 : options['flowLevel'];
  this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys = options['sortKeys'] || false;
  this.lineWidth = options['lineWidth'] || 80;
  this.noRefs = options['noRefs'] || false;
  this.noCompatMode = options['noCompatMode'] || false;
  this.condenseFlow = options['condenseFlow'] || false;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = '';
  this.duplicates = [];
  this.usedDuplicates = null;
} // Indents every line in a string. Empty lines (\n only) are not indented.


function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);

    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;
    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
} // [33] s-white ::= s-space | s-tab


function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
} // Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.


function isPrintable(c) {
  return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== 0xFEFF
  /* BOM */
  || 0x10000 <= c && c <= 0x10FFFF;
} // Simplified test for values allowed after the first character in plain style.


function isPlainSafe(c) {
  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
  return isPrintable(c) && c !== 0xFEFF // - c-flow-indicator
  && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET // - ":" - "#"
  && c !== CHAR_COLON && c !== CHAR_SHARP;
} // Simplified test for values allowed as the first character in plain style.


function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  return isPrintable(c) && c !== 0xFEFF && !isWhitespace(c) // - s-white
  // - (c-indicator ::=
  // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
  && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
  && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE // | “%” | “@” | “`”)
  && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
} // Determines whether block indentation indicator is required.


function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN = 1,
    STYLE_SINGLE = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED = 4,
    STYLE_DOUBLE = 5; // Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).

function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;

  var _char;

  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth

  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly

  var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; i++) {
      _char = string.charCodeAt(i);

      if (!isPrintable(_char)) {
        return STYLE_DOUBLE;
      }

      plain = plain && isPlainSafe(_char);
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; i++) {
      _char = string.charCodeAt(i);

      if (_char === CHAR_LINE_FEED) {
        hasLineBreak = true; // Check if any line can be folded.

        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
          previousLineBreak = i;
        }
      } else if (!isPrintable(_char)) {
        return STYLE_DOUBLE;
      }

      plain = plain && isPlainSafe(_char);
    } // in case the end is missing a \n


    hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
  } // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.


  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
  } // Edge case: block indentation indicator can only have one digit.


  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  } // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.


  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
} // Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.


function writeScalar(state, string, level, iskey) {
  state.dump = function () {
    if (string.length === 0) {
      return "''";
    }

    if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.

    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent); // Without knowing if keys are implicit/explicit, assume implicit for safety.

    var singleLineOnly = iskey // No block styles in flow mode.
    || state.flowLevel > -1 && level >= state.flowLevel;

    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;

      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";

      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));

      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));

      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';

      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }();
} // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.


function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : ''; // note the special case: the string '\n' counts as a "trailing" empty line.

  var clip = string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : clip ? '' : '-';
  return indentIndicator + chomp + '\n';
} // (See the note for writeScalar.)


function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
} // Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.


function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g; // first line (possibly an empty line)

  var result = function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }(); // If we haven't reached the first content line yet, don't add an extra \n.


  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented; // rest of the lines

  var match;

  while (match = lineRe.exec(string)) {
    var prefix = match[1],
        line = match[2];
    moreIndented = line[0] === ' ';
    result += prefix + (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
} // Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.


function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line; // Since a more-indented line adds a \n, breaks can't be followed by a space.

  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.

  var match; // start is an inclusive index. end, curr, and next are exclusive.

  var start = 0,
      end,
      curr = 0,
      next = 0;
  var result = ''; // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.

  while (match = breakRe.exec(line)) {
    next = match.index; // maintain invariant: curr - start <= width

    if (next - start > width) {
      end = curr > start ? curr : next; // derive end <= length-2

      result += '\n' + line.slice(start, end); // skip the space that was output as \n

      start = end + 1; // derive start <= length-1
    }

    curr = next;
  } // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.


  result += '\n'; // Insert a break if the remainder is too long and there is a break available.

  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
} // Escapes a double-quoted string.


function escapeString(string) {
  var result = '';

  var _char2, nextChar;

  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    _char2 = string.charCodeAt(i); // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").

    if (_char2 >= 0xD800 && _char2 <= 0xDBFF
    /* high surrogate */
    ) {
        nextChar = string.charCodeAt(i + 1);

        if (nextChar >= 0xDC00 && nextChar <= 0xDFFF
        /* low surrogate */
        ) {
            // Combine the surrogate pair and store it escaped.
            result += encodeHex((_char2 - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000); // Advance index one extra since we already used that char here.

            i++;
            continue;
          }
      }

    escapeSeq = ESCAPE_SEQUENCES[_char2];
    result += !escapeSeq && isPrintable(_char2) ? string[i] : escapeSeq || encodeHex(_char2);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = state.condenseFlow ? '"' : '';
    if (index !== 0) pairBuffer += ', ';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';
    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump; // Both key and value are valid.

    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer; // Allow sorting keys so that the output file is deterministic

  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = state.tag !== null && state.tag !== '?' || state.dump && state.dump.length > 1024;

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump; // Both key and value are valid.

    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf || type.predicate) && (!type.instanceOf || _typeof(object) === 'object' && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
} // Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//


function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);

  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if (state.tag !== null && state.tag !== '?' || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }

    if (type === '[object Object]') {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);

        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);

        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;

      if (block && state.dump.length !== 0) {
        writeBlockSequence(state, arrayLevel, state.dump, compact);

        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, arrayLevel, state.dump);

        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;
  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }

  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;

  if (object !== null && _typeof(object) === 'object') {
    index = objects.indexOf(object);

    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs) getDuplicateReferences(input, state);
  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';
  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({
    schema: DEFAULT_SAFE_SCHEMA
  }, options));
}

module.exports.dump = dump;
module.exports.safeDump = safeDump;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/exception.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/exception.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// YAML error class. http://stackoverflow.com/questions/8458984
//


function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);
  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : ''); // Include stack trace in error object

  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = new Error().stack || '';
  }
} // Inherit from Error


YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;

YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';
  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};

module.exports = YAMLException;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/loader.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint-disable max-len,no-use-before-define*/

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var common = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

var Mark = __webpack_require__(/*! ./mark */ "./node_modules/js-yaml/lib/js-yaml/mark.js");

var DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");

var DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

function _class(obj) {
  return Object.prototype.toString.call(obj);
}

function is_EOL(c) {
  return c === 0x0A
  /* LF */
  || c === 0x0D
  /* CR */
  ;
}

function is_WHITE_SPACE(c) {
  return c === 0x09
  /* Tab */
  || c === 0x20
  /* Space */
  ;
}

function is_WS_OR_EOL(c) {
  return c === 0x09
  /* Tab */
  || c === 0x20
  /* Space */
  || c === 0x0A
  /* LF */
  || c === 0x0D
  /* CR */
  ;
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C
  /* , */
  || c === 0x5B
  /* [ */
  || c === 0x5D
  /* ] */
  || c === 0x7B
  /* { */
  || c === 0x7D
  /* } */
  ;
}

function fromHexCode(c) {
  var lc;

  if (0x30
  /* 0 */
  <= c && c <= 0x39
  /* 9 */
  ) {
    return c - 0x30;
  }
  /*eslint-disable no-bitwise*/


  lc = c | 0x20;

  if (0x61
  /* a */
  <= lc && lc <= 0x66
  /* f */
  ) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78
  /* x */
  ) {
      return 2;
    }

  if (c === 0x75
  /* u */
  ) {
      return 4;
    }

  if (c === 0x55
  /* U */
  ) {
      return 8;
    }

  return 0;
}

function fromDecimalCode(c) {
  if (0x30
  /* 0 */
  <= c && c <= 0x39
  /* 9 */
  ) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return c === 0x30
  /* 0 */
  ? '\x00' : c === 0x61
  /* a */
  ? '\x07' : c === 0x62
  /* b */
  ? '\x08' : c === 0x74
  /* t */
  ? '\x09' : c === 0x09
  /* Tab */
  ? '\x09' : c === 0x6E
  /* n */
  ? '\x0A' : c === 0x76
  /* v */
  ? '\x0B' : c === 0x66
  /* f */
  ? '\x0C' : c === 0x72
  /* r */
  ? '\x0D' : c === 0x65
  /* e */
  ? '\x1B' : c === 0x20
  /* Space */
  ? ' ' : c === 0x22
  /* " */
  ? '\x22' : c === 0x2F
  /* / */
  ? '/' : c === 0x5C
  /* \ */
  ? '\x5C' : c === 0x4E
  /* N */
  ? '\x85' : c === 0x5F
  /* _ */
  ? '\xA0' : c === 0x4C
  /* L */
  ? "\u2028" : c === 0x50
  /* P */
  ? "\u2029" : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  } // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF


  return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}

var simpleEscapeCheck = new Array(256); // integer, for fast access

var simpleEscapeMap = new Array(256);

for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}

function State(input, options) {
  this.input = input;
  this.filename = options['filename'] || null;
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy = options['legacy'] || false;
  this.json = options['json'] || false;
  this.listener = options['listener'] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.documents = [];
  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/
}

function generateError(state, message) {
  return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}

var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = minor < 2;

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};

function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);

        if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity; // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).

  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (_typeof(keyNode) === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  } // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)


  if (_typeof(keyNode) === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }

  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A
  /* LF */
  ) {
      state.position++;
    } else if (ch === 0x0D
  /* CR */
  ) {
      state.position++;

      if (state.input.charCodeAt(state.position) === 0x0A
      /* LF */
      ) {
          state.position++;
        }
    } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23
    /* # */
    ) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0x0A
        /* LF */
        && ch !== 0x0D
        /* CR */
        && ch !== 0);
      }

    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20
      /* Space */
      ) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;
  ch = state.input.charCodeAt(_position); // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.

  if ((ch === 0x2D
  /* - */
  || ch === 0x2E
  /* . */
  ) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}

function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23
  /* # */
  || ch === 0x26
  /* & */
  || ch === 0x2A
  /* * */
  || ch === 0x21
  /* ! */
  || ch === 0x7C
  /* | */
  || ch === 0x3E
  /* > */
  || ch === 0x27
  /* ' */
  || ch === 0x22
  /* " */
  || ch === 0x25
  /* % */
  || ch === 0x40
  /* @ */
  || ch === 0x60
  /* ` */
  ) {
      return false;
    }

  if (ch === 0x3F
  /* ? */
  || ch === 0x2D
  /* - */
  ) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A
    /* : */
    ) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }
      } else if (ch === 0x23
    /* # */
    ) {
        preceding = state.input.charCodeAt(state.position - 1);

        if (is_WS_OR_EOL(preceding)) {
          break;
        }
      } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27
  /* ' */
  ) {
      return false;
    }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27
    /* ' */
    ) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x27
        /* ' */
        ) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
          return true;
        }
      } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22
  /* " */
  ) {
      return false;
    }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22
    /* " */
    ) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;
      } else if (ch === 0x5C
    /* \ */
    ) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent); // TODO: rework to inline fn with no type cast?
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;
        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;

          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);

            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;
            } else {
              throwError(state, 'expected hexadecimal character');
            }
          }

          state.result += charFromCodepoint(hexResult);
          state.position++;
        } else {
          throwError(state, 'unknown escape sequence');
        }

        captureStart = captureEnd = state.position;
      } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag = state.tag,
      _result,
      _anchor = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B
  /* [ */
  ) {
      terminator = 0x5D;
      /* ] */

      isMapping = false;
      _result = [];
    } else if (ch === 0x7B
  /* { */
  ) {
      terminator = 0x7D;
      /* } */

      isMapping = true;
      _result = {};
    } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F
    /* ? */
    ) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A
    /* : */
    ) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C
    /* , */
    ) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent = nodeIndent,
      emptyLines = 0,
      atMoreIndented = false,
      tmp,
      ch;
  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C
  /* | */
  ) {
      folding = false;
    } else if (ch === 0x3E
  /* > */
  ) {
      folding = true;
    } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B
    /* + */
    || ch === 0x2D
    /* - */
    ) {
        if (CHOMPING_CLIP === chomping) {
          chomping = ch === 0x2B
          /* + */
          ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, 'repeat of a chomping mode identifier');
        }
      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }
    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));

    if (ch === 0x23
    /* # */
    ) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (!is_EOL(ch) && ch !== 0);
      }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20
    /* Space */
    ) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    } // End of the scalar.


    if (state.lineIndent < textIndent) {
      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      } // Break this `while` cycle and go to the funciton's epilogue.


      break;
    } // Folded style: use fancy rules to handle line breaks.


    if (folding) {
      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true; // except for the first content line (cf. Example 8.1)

        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines); // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1); // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) {
          // i.e. only if we have already read some scalar content.
          state.result += ' ';
        } // Several line breaks - perceive as different lines.

      } else {
        state.result += common.repeat('\n', emptyLines);
      } // Literal style: just add exact number of line breaks between content lines.

    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = [],
      following,
      detected = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (ch !== 0x2D
    /* - */
    ) {
        break;
      }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);

        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);

    _result.push(state.result);

    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }

  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _pos,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = {},
      overridableKeys = {},
      keyTag = null,
      keyNode = null,
      valueNode = null,
      atExplicitKey = false,
      detected = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    _pos = state.position; //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //

    if ((ch === 0x3F
    /* ? */
    || ch === 0x3A
    /* : */
    ) && is_WS_OR_EOL(following)) {
      if (ch === 0x3F
      /* ? */
      ) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = true;
          allowCompact = true;
        } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following; //
      // Implicit notation case. Flow-style node as the key first, then ":", and the value.
      //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A
        /* : */
        ) {
            ch = state.input.charCodeAt(++state.position);

            if (!is_WS_OR_EOL(ch)) {
              throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
            }

            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }

            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;
          } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }
      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    } else {
        break; // Reading is done. Go to the epilogue.
      } //
    // Common reading code for both explicit and implicit notations.
    //


    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && ch !== 0) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  } //
  // Epilogue.
  //
  // Special case: last mapping's node contains only the key in explicit notation.


  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  } // Expose the resulting mapping.


  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x21
  /* ! */
  ) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C
  /* < */
  ) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21
  /* ! */
  ) {
      isNamed = true;
      tagHandle = '!!';
      ch = state.input.charCodeAt(++state.position);
    } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 0x3E
    /* > */
    );

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 0x21
      /* ! */
      ) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);

            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, 'named tag handle cannot contain such characters');
            }

            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, 'tag suffix cannot contain exclamation marks');
          }
        }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;
  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position, ch;

  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x26
  /* & */
  ) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias, ch;

  ch = state.input.charCodeAt(state.position);
  if (ch !== 0x2A
  /* * */
  ) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1,
      // 1: this>parent, 0: this=parent, -1: this<parent
  atNewLine = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex]; // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only assigned to plain scalars. So, it isn't
        // needed to check for 'kind' conformity.

        if (type.resolve(state.result)) {
          // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;

          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }

          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) {
        // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }

  return state.tag !== null || state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25
    /* % */
    ) {
        break;
      }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23
      /* # */
      ) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && !is_EOL(ch));

          break;
        }

      if (is_EOL(ch)) break;
      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D
  /* - */
  && state.input.charCodeAt(state.position + 1) === 0x2D
  /* - */
  && state.input.charCodeAt(state.position + 2) === 0x2D
  /* - */
  ) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 0x2E
    /* . */
    ) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }

    return;
  }

  if (state.position < state.length - 1) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}

function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {
    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A
    /* LF */
    && input.charCodeAt(input.length - 1) !== 0x0D
    /* CR */
    ) {
        input += '\n';
      } // Strip BOM


    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options); // Use 0 as string terminator. That significantly simplifies bounds check.

  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20
  /* Space */
  ) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < state.length - 1) {
    readDocument(state);
  }

  return state.documents;
}

function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options),
      index,
      length;

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}

function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }

  throw new YAMLException('expected a single document in the stream, but found more');
}

function safeLoadAll(input, output, options) {
  if (typeof output === 'function') {
    loadAll(input, output, common.extend({
      schema: DEFAULT_SAFE_SCHEMA
    }, options));
  } else {
    return loadAll(input, common.extend({
      schema: DEFAULT_SAFE_SCHEMA
    }, options));
  }
}

function safeLoad(input, options) {
  return load(input, common.extend({
    schema: DEFAULT_SAFE_SCHEMA
  }, options));
}

module.exports.loadAll = loadAll;
module.exports.load = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad = safeLoad;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/mark.js":
/*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/mark.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

function Mark(name, buffer, position, line, column) {
  this.name = name;
  this.buffer = buffer;
  this.position = position;
  this.line = line;
  this.column = column;
}

Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;
  if (!this.buffer) return null;
  indent = indent || 4;
  maxLength = maxLength || 75;
  head = '';
  start = this.position;

  while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;

    if (this.position - start > maxLength / 2 - 1) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;

    if (end - this.position > maxLength / 2 - 1) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);
  return common.repeat(' ', indent) + head + snippet + tail + '\n' + common.repeat(' ', indent + this.position - start + head.length) + '^';
};

Mark.prototype.toString = function toString(compact) {
  var snippet,
      where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};

module.exports = Mark;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint-disable max-len*/

var common = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

var Type = __webpack_require__(/*! ./type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function compileList(schema, name, result) {
  var exclude = [];
  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });
  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });
    result.push(currentType);
  });
  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}

function compileMap()
/* lists... */
{
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
  },
      index,
      length;

  function collectType(type) {
    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }

  return result;
}

function Schema(definition) {
  this.include = definition.include || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];
  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });
  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}

Schema.DEFAULT = null;

Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) {
    return schema instanceof Schema;
  })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) {
    return type instanceof Type;
  })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};

module.exports = Schema;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.


var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");

module.exports = new Schema({
  include: [__webpack_require__(/*! ./json */ "./node_modules/js-yaml/lib/js-yaml/schema/json.js")]
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_full.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.


var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");

module.exports = Schema.DEFAULT = new Schema({
  include: [__webpack_require__(/*! ./default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js")],
  explicit: [__webpack_require__(/*! ../type/js/undefined */ "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"), __webpack_require__(/*! ../type/js/regexp */ "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"), __webpack_require__(/*! ../type/js/function */ "./node_modules/js-yaml/lib/js-yaml/type/js/function.js")]
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)


var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");

module.exports = new Schema({
  include: [__webpack_require__(/*! ./core */ "./node_modules/js-yaml/lib/js-yaml/schema/core.js")],
  implicit: [__webpack_require__(/*! ../type/timestamp */ "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js"), __webpack_require__(/*! ../type/merge */ "./node_modules/js-yaml/lib/js-yaml/type/merge.js")],
  explicit: [__webpack_require__(/*! ../type/binary */ "./node_modules/js-yaml/lib/js-yaml/type/binary.js"), __webpack_require__(/*! ../type/omap */ "./node_modules/js-yaml/lib/js-yaml/type/omap.js"), __webpack_require__(/*! ../type/pairs */ "./node_modules/js-yaml/lib/js-yaml/type/pairs.js"), __webpack_require__(/*! ../type/set */ "./node_modules/js-yaml/lib/js-yaml/type/set.js")]
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js":
/*!*************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346


var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");

module.exports = new Schema({
  explicit: [__webpack_require__(/*! ../type/str */ "./node_modules/js-yaml/lib/js-yaml/type/str.js"), __webpack_require__(/*! ../type/seq */ "./node_modules/js-yaml/lib/js-yaml/type/seq.js"), __webpack_require__(/*! ../type/map */ "./node_modules/js-yaml/lib/js-yaml/type/map.js")]
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.


var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");

module.exports = new Schema({
  include: [__webpack_require__(/*! ./failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js")],
  implicit: [__webpack_require__(/*! ../type/null */ "./node_modules/js-yaml/lib/js-yaml/type/null.js"), __webpack_require__(/*! ../type/bool */ "./node_modules/js-yaml/lib/js-yaml/type/bool.js"), __webpack_require__(/*! ../type/int */ "./node_modules/js-yaml/lib/js-yaml/type/int.js"), __webpack_require__(/*! ../type/float */ "./node_modules/js-yaml/lib/js-yaml/type/float.js")]
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type.js":
/*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

var TYPE_CONSTRUCTOR_OPTIONS = ['kind', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'defaultStyle', 'styleAliases'];
var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping'];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  }); // TODO: Add tag format check.

  this.tag = tag;
  this.kind = options['kind'] || null;

  this.resolve = options['resolve'] || function () {
    return true;
  };

  this.construct = options['construct'] || function (data) {
    return data;
  };

  this.instanceOf = options['instanceOf'] || null;
  this.predicate = options['predicate'] || null;
  this.represent = options['represent'] || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/binary.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;
/*eslint-disable no-bitwise*/

var NodeBuffer;

try {
  // A trick for browserified version, to not include `Buffer` shim
  var _require = require;
  NodeBuffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;
} catch (__) {}

var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js"); // [ 64, 65, 66 ] -> [ padding, CR, LF ]


var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';

function resolveYamlBinary(data) {
  if (data === null) return false;
  var code,
      idx,
      bitlen = 0,
      max = data.length,
      map = BASE64_MAP; // Convert one by one.

  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx)); // Skip CR/LF

    if (code > 64) continue; // Fail on illegal characters

    if (code < 0) return false;
    bitlen += 6;
  } // If there are any bits left, source was corrupted


  return bitlen % 8 === 0;
}

function constructYamlBinary(data) {
  var idx,
      tailbits,
      input = data.replace(/[\r\n=]/g, ''),
      // remove CR/LF & padding to simplify scan
  max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = []; // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 0xFF);
      result.push(bits >> 8 & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = bits << 6 | map.indexOf(input.charAt(idx));
  } // Dump tail


  tailbits = max % 4 * 6;

  if (tailbits === 0) {
    result.push(bits >> 16 & 0xFF);
    result.push(bits >> 8 & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 0xFF);
    result.push(bits >> 2 & 0xFF);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 0xFF);
  } // Wrap into Buffer for NodeJS and leave Array for browser


  if (NodeBuffer) {
    // Support node 6.+ Buffer API when available
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }

  return result;
}

function representYamlBinary(object
/*, style*/
) {
  var result = '',
      bits = 0,
      idx,
      tail,
      max = object.length,
      map = BASE64_MAP; // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map[bits >> 18 & 0x3F];
      result += map[bits >> 12 & 0x3F];
      result += map[bits >> 6 & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  } // Dump tail


  tail = max % 3;

  if (tail === 0) {
    result += map[bits >> 18 & 0x3F];
    result += map[bits >> 12 & 0x3F];
    result += map[bits >> 6 & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[bits >> 10 & 0x3F];
    result += map[bits >> 4 & 0x3F];
    result += map[bits << 2 & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[bits >> 2 & 0x3F];
    result += map[bits << 4 & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/bool.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/bool.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlBoolean(data) {
  if (data === null) return false;
  var max = data.length;
  return max === 4 && (data === 'true' || data === 'True' || data === 'TRUE') || max === 5 && (data === 'false' || data === 'False' || data === 'FALSE');
}

function constructYamlBoolean(data) {
  return data === 'true' || data === 'True' || data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function lowercase(object) {
      return object ? 'true' : 'false';
    },
    uppercase: function uppercase(object) {
      return object ? 'TRUE' : 'FALSE';
    },
    camelcase: function camelcase(object) {
      return object ? 'True' : 'False';
    }
  },
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/float.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ../common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var YAML_FLOAT_PATTERN = new RegExp( // 2.5e4, 2.5 and integers
'^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' + // .2e4, .2
// special case, seems not from spec
'|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' + // 20:59
'|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' + // .inf
'|[-+]?\\.(?:inf|Inf|INF)' + // .nan
'|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;
  value = data.replace(/_/g, '').toLowerCase();
  sign = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === '.nan') {
    return NaN;
  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });
    value = 0.0;
    base = 1;
    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  }

  return sign * parseFloat(value, 10);
}

var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase':
        return '.nan';

      case 'uppercase':
        return '.NAN';

      case 'camelcase':
        return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '.inf';

      case 'uppercase':
        return '.INF';

      case 'camelcase':
        return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '-.inf';

      case 'uppercase':
        return '-.INF';

      case 'camelcase':
        return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10); // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/int.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ../common */ "./node_modules/js-yaml/lib/js-yaml/common.js");

var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function isHexCode(c) {
  return 0x30
  /* 0 */
  <= c && c <= 0x39
  /* 9 */
  || 0x41
  /* A */
  <= c && c <= 0x46
  /* F */
  || 0x61
  /* a */
  <= c && c <= 0x66
  /* f */
  ;
}

function isOctCode(c) {
  return 0x30
  /* 0 */
  <= c && c <= 0x37
  /* 7 */
  ;
}

function isDecCode(c) {
  return 0x30
  /* 0 */
  <= c && c <= 0x39
  /* 9 */
  ;
}

function resolveYamlInteger(data) {
  if (data === null) return false;
  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;
  if (!max) return false;
  ch = data[index]; // sign

  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index]; // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }

      return hasDigits && ch !== '_';
    }

    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }

      return hasDigits && ch !== '_';
    } // base 8


    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }

    return hasDigits && ch !== '_';
  } // base 10 (except 0) or base 60
  // value should not start with `_`;


  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;

    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }

    hasDigits = true;
  } // Should have digits and should not end with `_`


  if (!hasDigits || ch === '_') return false; // if !base60 - done;

  if (ch !== ':') return true; // base60 almost not used, no needs to optimize

  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data,
      sign = 1,
      ch,
      base,
      digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });
    value = 0;
    base = 1;
    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && object % 1 === 0 && !common.isNegativeZero(object);
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function binary(obj) {
      return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1);
    },
    octal: function octal(obj) {
      return obj >= 0 ? '0' + obj.toString(8) : '-0' + obj.toString(8).slice(1);
    },
    decimal: function decimal(obj) {
      return obj.toString(10);
    },

    /* eslint-disable max-len */
    hexadecimal: function hexadecimal(obj) {
      return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary: [2, 'bin'],
    octal: [8, 'oct'],
    decimal: [10, 'dec'],
    hexadecimal: [16, 'hex']
  }
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/function.js":
/*!**************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

var esprima; // Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//

try {
  // workaround to exclude package from browserify list.
  var _require = require;
  esprima = __webpack_require__(/*! esprima */ "./node_modules/esprima/dist/esprima.js");
} catch (_) {
  /*global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast = esprima.parse(source, {
      range: true
    });

    if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'ArrowFunctionExpression' && ast.body[0].expression.type !== 'FunctionExpression') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/
  var source = '(' + data + ')',
      ast = esprima.parse(source, {
    range: true
  }),
      params = [],
      body;

  if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'ArrowFunctionExpression' && ast.body[0].expression.type !== 'FunctionExpression') {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });
  body = ast.body[0].expression.body.range; // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.

  if (ast.body[0].expression.body.type === 'BlockStatement') {
    /*eslint-disable no-new-func*/
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
  } // ES6 arrow functions can omit the BlockStatement. In that case, just return
  // the body.

  /*eslint-disable no-new-func*/


  return new Function(params, 'return ' + source.slice(body[0], body[1]));
}

function representJavascriptFunction(object
/*, style*/
) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js":
/*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;
  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = ''; // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars

  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    if (modifiers.length > 3) return false; // if expression starts with /, is should be properly terminated

    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = ''; // `/foo/gim` - tail can be maximum 4 chars

  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object
/*, style*/
) {
  var result = '/' + object.source + '/';
  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';
  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js":
/*!***************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/map.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function construct(data) {
    return data !== null ? data : {};
  }
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/null.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/null.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlNull(data) {
  if (data === null) return true;
  var max = data.length;
  return max === 1 && data === '~' || max === 4 && (data === 'null' || data === 'Null' || data === 'NULL');
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function canonical() {
      return '~';
    },
    lowercase: function lowercase() {
      return 'null';
    },
    uppercase: function uppercase() {
      return 'NULL';
    },
    camelcase: function camelcase() {
      return 'Null';
    }
  },
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/omap.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/omap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;
  var objectKeys = [],
      index,
      length,
      pair,
      pairKey,
      pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;else return false;
      }
    }

    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;
  var index,
      length,
      pair,
      keys,
      result,
      object = data;
  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString.call(pair) !== '[object Object]') return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index] = [keys[0], pair[keys[0]]];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];
  var index,
      length,
      pair,
      keys,
      result,
      object = data;
  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/seq.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/seq.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function construct(data) {
    return data !== null ? data : [];
  }
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/set.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;
  var key,
      object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/str.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/str.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function construct(data) {
    return data !== null ? data : '';
  }
});

/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js":
/*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/timestamp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var YAML_DATE_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + // [1] year
'-([0-9][0-9])' + // [2] month
'-([0-9][0-9])$'); // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + // [1] year
'-([0-9][0-9]?)' + // [2] month
'-([0-9][0-9]?)' + // [3] day
'(?:[Tt]|[ \\t]+)' + // ...
'([0-9][0-9]?)' + // [4] hour
':([0-9][0-9])' + // [5] minute
':([0-9][0-9])' + // [6] second
'(?:\\.([0-9]*))?' + // [7] fraction
'(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
'(?::([0-9][0-9]))?))?$'); // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fraction = 0,
      delta = null,
      tz_hour,
      tz_minute,
      date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null) throw new Error('Date resolve error'); // match: [1] year [2] month [3] day

  year = +match[1];
  month = +match[2] - 1; // JS month starts with 0

  day = +match[3];

  if (!match[4]) {
    // no hour
    return new Date(Date.UTC(year, month, day));
  } // match: [4] hour [5] minute [6] second [7] fraction


  hour = +match[4];
  minute = +match[5];
  second = +match[6];

  if (match[7]) {
    fraction = match[7].slice(0, 3);

    while (fraction.length < 3) {
      // milli-seconds
      fraction += '0';
    }

    fraction = +fraction;
  } // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute


  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds

    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}

function representYamlTimestamp(object
/*, style*/
) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

/***/ }),

/***/ "./node_modules/lit-html/directives/repeat.js":
/*!****************************************************!*\
  !*** ./node_modules/lit-html/directives/repeat.js ***!
  \****************************************************/
/*! exports provided: repeat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
 // Helper functions for manipulating parts
// TODO(kschaaf): Refactor into Part API?

var createAndInsertPart = function createAndInsertPart(containerPart, beforePart) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
  var startNode = container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  container.insertBefore(Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["createMarker"])(), beforeNode);
  var newPart = new _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](containerPart.options);
  newPart.insertAfterNode(startNode);
  return newPart;
};

var updatePart = function updatePart(part, value) {
  part.setValue(value);
  part.commit();
  return part;
};

var insertPartBefore = function insertPartBefore(containerPart, part, ref) {
  var container = containerPart.startNode.parentNode;
  var beforeNode = ref ? ref.startNode : containerPart.endNode;
  var endNode = part.endNode.nextSibling;

  if (endNode !== beforeNode) {
    Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(container, part.startNode, endNode, beforeNode);
  }
};

var removePart = function removePart(part) {
  Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
}; // Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)


var generateMap = function generateMap(list, start, end) {
  var map = new Map();

  for (var i = start; i <= end; i++) {
    map.set(list[i], i);
  }

  return map;
}; // Stores previous ordered list of parts and map of key to index


var partListCache = new WeakMap();
var keyListCache = new WeakMap();
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * amd removals.
 *
 * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */

var repeat = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (items, keyFnOrTemplate, template) {
  var keyFn;

  if (template === undefined) {
    template = keyFnOrTemplate;
  } else if (keyFnOrTemplate !== undefined) {
    keyFn = keyFnOrTemplate;
  }

  return function (containerPart) {
    if (!(containerPart instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"])) {
      throw new Error('repeat can only be used in text bindings');
    } // Old part & key lists are retrieved from the last update
    // (associated with the part for this instance of the directive)


    var oldParts = partListCache.get(containerPart) || [];
    var oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.

    var newParts = []; // New value list is eagerly generated from items along with a
    // parallel array indicating its key.

    var newValues = [];
    var newKeys = [];
    var index = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        newKeys[index] = keyFn ? keyFn(item, index) : index;
        newValues[index] = template(item, index);
        index++;
      } // Maps from key to index for current and previous update; these
      // are generated lazily only when needed as a performance
      // optimization, since they are only required for multiple
      // non-contiguous changes in the list, which are less common.

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var newKeyToIndexMap;
    var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

    var oldHead = 0;
    var oldTail = oldParts.length - 1;
    var newHead = 0;
    var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is is just a simple guess at which cases
    //   will be most common.
    //
    // * TODO(kschaaf) Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.

    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
        insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
        insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }

        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            var newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
            updatePart(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = updatePart(oldPart, newValues[newHead]);
            insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above

            oldParts[oldIndex] = null;
          }

          newHead++;
        }
      }
    } // Add parts for any remaining new values


    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      var _newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);

      updatePart(_newPart, newValues[newHead]);
      newParts[newHead++] = _newPart;
    } // Remove any remaining unused old parts


    while (oldHead <= oldTail) {
      var _oldPart = oldParts[oldHead++];

      if (_oldPart !== null) {
        removePart(_oldPart);
      }
    } // Save order of new parts for next round


    partListCache.set(containerPart, newParts);
    keyListCache.set(containerPart, newKeys);
  };
});

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

var styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

var styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (styleInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var style = committer.element.style; // Handle static styles the first time we see a Part

    if (!styleMapCache.has(part)) {
      style.cssText = committer.strings.join(' ');
    } // Remove old properties that no longer exist in styleInfo


    var oldInfo = styleMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in styleInfo)) {
        if (name.indexOf('-') === -1) {
          // tslint:disable-next-line:no-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    } // Add or update properties


    for (var _name in styleInfo) {
      if (_name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[_name] = styleInfo[_name];
      } else {
        style.setProperty(_name, styleInfo[_name]);
      }
    }

    styleMapCache.set(part, styleInfo);
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

}]);