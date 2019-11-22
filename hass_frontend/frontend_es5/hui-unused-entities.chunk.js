(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/components/data-table/sort_filter_worker.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["filterSortData","filterData","sortData"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "f718815663d392fd9486.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/components/data-table/ha-data-table.ts":
/*!****************************************************!*\
  !*** ./src/components/data-table/ha-data-table.ts ***!
  \****************************************************/
/*! exports provided: HaDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDataTable", function() { return HaDataTable; });
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/data-table */ "./node_modules/@material/data-table/index.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workerize-loader!./sort_filter_worker */ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _ha_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-checkbox */ "./src/components/ha-checkbox.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      /* default mdc styles, colors changed, without checkbox styles */\n\n      .mdc-data-table__content {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table {\n        background-color: var(--data-table-background-color);\n        border-radius: 4px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: rgba(var(--rgb-primary-text-color), 0.12);\n        display: inline-flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        overflow-x: auto;\n      }\n\n      .mdc-data-table__row--selected {\n        background-color: rgba(var(--rgb-primary-color), 0.04);\n      }\n\n      .mdc-data-table__row {\n        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);\n      }\n\n      .mdc-data-table__row {\n        border-top-width: 1px;\n        border-top-style: solid;\n      }\n\n      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {\n        background-color: rgba(var(--rgb-primary-text-color), 0.04);\n      }\n\n      .mdc-data-table__header-cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__header-row {\n        height: 56px;\n      }\n\n      .mdc-data-table__row {\n        height: 52px;\n      }\n\n      .mdc-data-table__cell,\n      .mdc-data-table__header-cell {\n        padding-right: 16px;\n        padding-left: 16px;\n      }\n\n      .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__cell--checkbox {\n        /* @noflip */\n        padding-left: 16px;\n        /* @noflip */\n        padding-right: 0;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__header-cell--checkbox[dir=\"rtl\"],\n      [dir=\"rtl\"] .mdc-data-table__cell--checkbox,\n      .mdc-data-table__cell--checkbox[dir=\"rtl\"] {\n        /* @noflip */\n        padding-left: 0;\n        /* @noflip */\n        padding-right: 16px;\n      }\n\n      .mdc-data-table__table {\n        width: 100%;\n        border: 0;\n        white-space: nowrap;\n        border-collapse: collapse;\n      }\n\n      .mdc-data-table__cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table__cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__cell--numeric,\n      .mdc-data-table__cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__cell--icon {\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .mdc-data-table__header-cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.375rem;\n        font-weight: 500;\n        letter-spacing: 0.0071428571em;\n        text-decoration: inherit;\n        text-transform: inherit;\n        text-align: left;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell,\n      .mdc-data-table__header-cell[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: right;\n      }\n\n      .mdc-data-table__header-cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--numeric,\n      .mdc-data-table__header-cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__header-cell--icon {\n        text-align: center;\n      }\n\n      /* custom from here */\n\n      .mdc-data-table {\n        display: block;\n      }\n      .mdc-data-table__header-cell {\n        overflow: hidden;\n      }\n      .mdc-data-table__header-cell.sortable {\n        cursor: pointer;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon)\n        span {\n        position: relative;\n        left: -24px;\n      }\n      .mdc-data-table__header-cell.not-sorted > * {\n        transition: left 0.2s ease 0s;\n      }\n      .mdc-data-table__header-cell.not-sorted ha-icon {\n        left: -36px;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon):hover\n        span {\n        left: 0px;\n      }\n      .mdc-data-table__header-cell:hover.not-sorted ha-icon {\n        left: 0px;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                      <td\n                        class=\"mdc-data-table__cell ", "\"\n                      >\n                        ", "\n                      </td>\n                    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                        <td\n                          class=\"mdc-data-table__cell mdc-data-table__cell--checkbox\"\n                        >\n                          <ha-checkbox\n                            class=\"mdc-data-table__row-checkbox\"\n                            @change=", "\n                            .checked=", "\n                          >\n                          </ha-checkbox>\n                        </td>\n                      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <tr\n                  data-row-id=\"", "\"\n                  @click=", "\n                  class=\"mdc-data-table__row\"\n                >\n                  ", "\n                  ", "\n                </tr>\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                          <ha-icon\n                            .icon=", "\n                          ></ha-icon>\n                        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                  <th\n                    class=\"mdc-data-table__header-cell ", "\"\n                    role=\"columnheader\"\n                    scope=\"col\"\n                    @click=", "\n                    data-column-id=\"", "\"\n                  >\n                    ", "\n                    <span>", "</span>\n                  </th>\n                "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                    <th\n                      class=\"mdc-data-table__header-cell mdc-data-table__header-cell--checkbox\"\n                      role=\"columnheader\"\n                      scope=\"col\"\n                    >\n                      <ha-checkbox\n                        id=\"header-checkbox\"\n                        class=\"mdc-data-table__row-checkbox\"\n                        @change=", "\n                        .indeterminate=", "\n                        .checked=", "\n                      >\n                      </ha-checkbox>\n                    </th>\n                  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            <search-input\n              @value-changed=", "\n            ></search-input>\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"mdc-data-table\">\n        <table class=\"mdc-data-table__table\">\n          <thead>\n            <tr class=\"mdc-data-table__header-row\">\n              ", "\n              ", "\n            </tr>\n          </thead>\n          <tbody class=\"mdc-data-table__content\">\n            ", "\n          </tbody>\n        </table>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






 // eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies




 // tslint:disable-next-line




var HaDataTable = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-data-table")], function (_initialize, _BaseElement) {
  var HaDataTable =
  /*#__PURE__*/
  function (_BaseElement2) {
    _inherits(HaDataTable, _BaseElement2);

    function HaDataTable() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaDataTable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaDataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaDataTable;
  }(_BaseElement);

  return {
    F: HaDataTable,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Object
      })],
      key: "columns",
      value: function value() {
        return {};
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "data",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "selectable",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "id",
      value: function value() {
        return "id";
      }
    }, {
      kind: "field",
      key: "mdcFoundation",
      value: void 0
    }, {
      kind: "field",
      key: "mdcFoundationClass",
      value: function value() {
        return _material_data_table__WEBPACK_IMPORTED_MODULE_2__["MDCDataTableFoundation"];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])(".mdc-data-table")],
      key: "mdcRoot",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["queryAll"])(".mdc-data-table__row")],
      key: "rowElements",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#header-checkbox")],
      key: "_headerCheckbox",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_filterable",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerChecked",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Boolean
      })],
      key: "_headerIndeterminate",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_checkedRows",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_filter",
      value: function value() {
        return "";
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortColumn",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: String
      })],
      key: "_sortDirection",
      value: function value() {
        return null;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])({
        type: Array
      })],
      key: "_filteredData",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "_sortColumns",
      value: function value() {
        return {};
      }
    }, {
      kind: "field",
      key: "curRequest",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      key: "_worker",
      value: void 0
    }, {
      kind: "field",
      key: "_debounceSearch",
      value: function value() {
        var _this2 = this;

        return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_12__["debounce"])(function (ev) {
          _this2._filter = ev.detail.value;
        }, 200, false);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(HaDataTable.prototype), "firstUpdated", this).call(this);

        this._worker = workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_6___default()();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(properties) {
        _get(_getPrototypeOf(HaDataTable.prototype), "updated", this).call(this, properties);

        if (properties.has("columns")) {
          this._filterable = Object.values(this.columns).some(function (column) {
            return column.filterable;
          });

          for (var columnId in this.columns) {
            if (this.columns[columnId].direction) {
              this._sortDirection = this.columns[columnId].direction;
              this._sortColumn = columnId;
              break;
            }
          }

          var clonedColumns = Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_1__["default"])(this.columns);
          Object.values(clonedColumns).forEach(function (column) {
            delete column.title;
            delete column.type;
            delete column.template;
          });
          this._sortColumns = clonedColumns;
        }

        if (properties.has("data") || properties.has("columns") || properties.has("_filter") || properties.has("_sortColumn") || properties.has("_sortDirection")) {
          this._filterData();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this3 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this._filterable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this._handleSearchChange) : "", this.selectable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), this._handleHeaderRowCheckboxChange, this._headerIndeterminate, this._headerChecked) : "", Object.entries(this.columns).map(function (columnEntry) {
          var _columnEntry = _slicedToArray(columnEntry, 2),
              key = _columnEntry[0],
              column = _columnEntry[1];

          var sorted = key === _this3._sortColumn;
          var classes = {
            "mdc-data-table__header-cell--numeric": Boolean(column.type && column.type === "numeric"),
            "mdc-data-table__header-cell--icon": Boolean(column.type && column.type === "icon"),
            sortable: Boolean(column.sortable),
            "not-sorted": Boolean(column.sortable && !sorted)
          };
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject4(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])(classes), _this3._handleHeaderClick, key, column.sortable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject5(), sorted && _this3._sortDirection === "desc" ? "hass:arrow-down" : "hass:arrow-up") : "", column.title);
        }), Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_0__["repeat"])(this._filteredData, function (row) {
          return row[_this3.id];
        }, function (row) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject6(), row[_this3.id], _this3._handleRowClick, _this3.selectable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject7(), _this3._handleRowCheckboxChange, _this3._checkedRows.includes(row[_this3.id])) : "", Object.entries(_this3.columns).map(function (columnEntry) {
            var _columnEntry2 = _slicedToArray(columnEntry, 2),
                key = _columnEntry2[0],
                column = _columnEntry2[1];

            return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject8(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
              "mdc-data-table__cell--numeric": Boolean(column.type && column.type === "numeric"),
              "mdc-data-table__cell--icon": Boolean(column.type && column.type === "icon")
            }), column.template ? column.template(row[key], row) : row[key]);
          }));
        }));
      }
    }, {
      kind: "method",
      key: "createAdapter",
      value: function createAdapter() {
        var _this4 = this;

        return {
          addClassAtRowIndex: function addClassAtRowIndex(rowIndex, cssClasses) {
            _this4.rowElements[rowIndex].classList.add(cssClasses);
          },
          getRowCount: function getRowCount() {
            return _this4.data.length;
          },
          getRowElements: function getRowElements() {
            return _this4.rowElements;
          },
          getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
            return _this4._getRowIdAtIndex(rowIndex);
          },
          getRowIndexByChildElement: function getRowIndexByChildElement(el) {
            return Array.prototype.indexOf.call(_this4.rowElements, el.closest("tr"));
          },
          getSelectedRowCount: function getSelectedRowCount() {
            return _this4._checkedRows.length;
          },
          isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
            return _this4._checkedRows.includes(_this4._getRowIdAtIndex(rowIndex));
          },
          isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
            return _this4._headerChecked;
          },
          isRowsSelectable: function isRowsSelectable() {
            return true;
          },
          notifyRowSelectionChanged: function notifyRowSelectionChanged() {
            return undefined;
          },
          notifySelectedAll: function notifySelectedAll() {
            return undefined;
          },
          notifyUnselectedAll: function notifyUnselectedAll() {
            return undefined;
          },
          registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
            return undefined;
          },
          registerRowCheckboxes: function registerRowCheckboxes() {
            return undefined;
          },
          removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, cssClasses) {
            _this4.rowElements[rowIndex].classList.remove(cssClasses);
          },
          setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
            _this4.rowElements[rowIndex].setAttribute(attr, value);
          },
          setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
            _this4._headerChecked = checked;
          },
          setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
            _this4._headerIndeterminate = indeterminate;
          },
          setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
            _this4._setRowChecked(_this4._getRowIdAtIndex(rowIndex), checked);
          }
        };
      }
    }, {
      kind: "method",
      key: "_filterData",
      value: function _filterData() {
        var startTime, curRequest, filterProm, _ref, _ref2, data, curTime, elapsed;

        return regeneratorRuntime.async(function _filterData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                startTime = new Date().getTime();
                this.curRequest++;
                curRequest = this.curRequest;
                filterProm = this._worker.filterSortData(this.data, this._sortColumns, this._filter, this._sortDirection, this._sortColumn);
                _context.next = 6;
                return regeneratorRuntime.awrap(Promise.all([filterProm, _common_util_render_status__WEBPACK_IMPORTED_MODULE_11__["nextRender"]]));

              case 6:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 1);
                data = _ref2[0];
                curTime = new Date().getTime();
                elapsed = curTime - startTime;

                if (!(elapsed < 100)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return regeneratorRuntime.awrap(new Promise(function (resolve) {
                  return setTimeout(resolve, 100 - elapsed);
                }));

              case 14:
                if (!(this.curRequest !== curRequest)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt("return");

              case 16:
                this._filteredData = data;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_getRowIdAtIndex",
      value: function _getRowIdAtIndex(rowIndex) {
        return this.rowElements[rowIndex].getAttribute("data-row-id");
      }
    }, {
      kind: "method",
      key: "_handleHeaderClick",
      value: function _handleHeaderClick(ev) {
        var columnId = ev.target.closest("th").getAttribute("data-column-id");

        if (!this.columns[columnId].sortable) {
          return;
        }

        if (!this._sortDirection || this._sortColumn !== columnId) {
          this._sortDirection = "asc";
        } else if (this._sortDirection === "asc") {
          this._sortDirection = "desc";
        } else {
          this._sortDirection = null;
        }

        this._sortColumn = this._sortDirection === null ? undefined : columnId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "sorting-changed", {
          column: columnId,
          direction: this._sortDirection
        });
      }
    }, {
      kind: "method",
      key: "_handleHeaderRowCheckboxChange",
      value: function _handleHeaderRowCheckboxChange() {
        this._headerChecked = this._headerCheckbox.checked;
        this._headerIndeterminate = this._headerCheckbox.indeterminate;
        this.mdcFoundation.handleHeaderRowCheckboxChange();
      }
    }, {
      kind: "method",
      key: "_handleRowCheckboxChange",
      value: function _handleRowCheckboxChange(ev) {
        var checkbox = ev.target;
        var rowId = checkbox.closest("tr").getAttribute("data-row-id");

        this._setRowChecked(rowId, checkbox.checked);

        this.mdcFoundation.handleRowCheckboxChange(ev);
      }
    }, {
      kind: "method",
      key: "_handleRowClick",
      value: function _handleRowClick(ev) {
        var rowId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "row-click", {
          id: rowId
        }, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_setRowChecked",
      value: function _setRowChecked(rowId, checked) {
        if (checked && !this._checkedRows.includes(rowId)) {
          this._checkedRows = [].concat(_toConsumableArray(this._checkedRows), [rowId]);
        } else if (!checked) {
          var index = this._checkedRows.indexOf(rowId);

          if (index !== -1) {
            this._checkedRows.splice(index, 1);
          }
        }

        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "selection-changed", {
          id: rowId,
          selected: checked
        });
      }
    }, {
      kind: "method",
      key: "_handleSearchChange",
      value: function _handleSearchChange(ev) {
        this._debounceSearch(ev);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject9());
      }
    }]
  };
}, _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_5__["BaseElement"]);

/***/ }),

/***/ "./src/components/ha-checkbox.ts":
/*!***************************************!*\
  !*** ./src/components/ha-checkbox.ts ***!
  \***************************************/
/*! exports provided: HaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCheckbox", function() { return HaCheckbox; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-checkbox */ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js");
/* harmony import */ var _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-checkbox/mwc-checkbox-css */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)\n          ~ .mdc-checkbox__background {\n          border-color: rgba(var(--rgb-primary-text-color), 0.54);\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // tslint:disable-next-line


// tslint:disable-next-line
var MwcCheckbox = customElements.get("mwc-checkbox");
var HaCheckbox = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-checkbox")], function (_initialize, _MwcCheckbox) {
  var HaCheckbox =
  /*#__PURE__*/
  function (_MwcCheckbox2) {
    _inherits(HaCheckbox, _MwcCheckbox2);

    function HaCheckbox() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaCheckbox);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaCheckbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaCheckbox;
  }(_MwcCheckbox);

  return {
    F: HaCheckbox,
    d: [{
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        _get(_getPrototypeOf(HaCheckbox.prototype), "firstUpdated", this).call(this);

        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_2__["style"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject())];
      }
    }]
  };
}, MwcCheckbox);

/***/ }),

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/*! exports provided: computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
var EXCLUDED_DOMAINS = ["zone", "persistent_notification"];

var addFromAction = function addFromAction(entities, actionConfig) {
  if (actionConfig.action !== "call-service" || !actionConfig.service_data || !actionConfig.service_data.entity_id) {
    return;
  }

  var entityIds = actionConfig.service_data.entity_id;

  if (!Array.isArray(entityIds)) {
    entityIds = [entityIds];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entityIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entityId = _step.value;
      entities.add(entityId);
    }
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
};

var addEntityId = function addEntityId(entities, entity) {
  if (typeof entity === "string") {
    entities.add(entity);
    return;
  }

  if (entity.entity) {
    entities.add(entity.entity);
  }

  if (entity.camera_image) {
    entities.add(entity.camera_image);
  }

  if (entity.tap_action) {
    addFromAction(entities, entity.tap_action);
  }

  if (entity.hold_action) {
    addFromAction(entities, entity.hold_action);
  }
};

var addEntities = function addEntities(entities, obj) {
  if (obj.entity) {
    addEntityId(entities, obj.entity);
  }

  if (obj.entities) {
    obj.entities.forEach(function (entity) {
      return addEntityId(entities, entity);
    });
  }

  if (obj.card) {
    addEntities(entities, obj.card);
  }

  if (obj.cards) {
    obj.cards.forEach(function (card) {
      return addEntities(entities, card);
    });
  }

  if (obj.elements) {
    obj.elements.forEach(function (card) {
      return addEntities(entities, card);
    });
  }

  if (obj.badges) {
    obj.badges.forEach(function (badge) {
      return addEntityId(entities, badge);
    });
  }
};

var computeUsedEntities = function computeUsedEntities(config) {
  var entities = new Set();
  config.views.forEach(function (view) {
    return addEntities(entities, view);
  });
  return entities;
};

var computeUnusedEntities = function computeUnusedEntities(hass, config) {
  var usedEntities = computeUsedEntities(config);
  return Object.keys(hass.states).filter(function (entity) {
    return !usedEntities.has(entity) && !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0]);
  }).sort();
};

/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var showSelectViewDialog = function showSelectViewDialog(element, selectViewDialogParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "hui-dialog-select-view",
    dialogImport: function dialogImport() {
      return Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~confirmation~dialog-config-flow~dialog-zha-device-info~hui-dialog-edit-card~hui-dialog-edit-~ae2d1c3e"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts"));
    },
    dialogParams: selectViewDialogParams
  });
};

/***/ }),

/***/ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts ***!
  \***************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        background: var(--lovelace-background);\n        padding: 16px;\n      }\n      ha-fab {\n        position: sticky;\n        float: right;\n        bottom: 16px;\n        z-index: 1;\n      }\n      ha-fab.rtl {\n        float: left;\n      }\n      ha-card {\n        margin-bottom: 16px;\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            <ha-fab\n              class=\"", "\"\n              icon=\"hass:plus\"\n              label=\"", "\"\n              @click=\"", "\"\n            ></ha-fab>\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <br />", "\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      <ha-card\n        header=\"", "\"\n      >\n        <div class=\"card-content\">\n          ", "\n          ", "\n        </div>\n      </ha-card>\n      <ha-data-table\n        .columns=", "\n        .data=", "\n        .id=", "\n        .selectable=", "\n        @selection-changed=", "\n      ></ha-data-table>\n      ", "\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <ha-relative-time\n          .hass=", "\n          .datetime=", "\n        ></ha-relative-time>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          <div @click=", " style=\"cursor: pointer;\">\n            <state-badge\n              .hass=", "\n              .stateObj=", "\n            ></state-badge>\n            ", "\n          </div>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








 // tslint:disable-next-line








var HuiUnusedEntities = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-unused-entities")], function (_initialize, _LitElement) {
  var HuiUnusedEntities =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HuiUnusedEntities, _LitElement2);

    function HuiUnusedEntities() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HuiUnusedEntities);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HuiUnusedEntities)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HuiUnusedEntities;
  }(_LitElement);

  return {
    F: HuiUnusedEntities,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "narrow",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_unusedEntities",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "_selectedEntities",
      value: function value() {
        return [];
      }
    }, {
      kind: "get",
      key: "_config",
      value: function _config() {
        return this.lovelace.config;
      }
    }, {
      kind: "field",
      key: "_columns",
      value: function value() {
        var _this2 = this;

        return Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(function (narrow) {
          var columns = {
            entity: {
              title: _this2.hass.localize("ui.panel.lovelace.unused_entities.entity"),
              sortable: true,
              filterable: true,
              filterKey: "friendly_name",
              direction: "asc",
              template: function template(stateObj) {
                return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), _this2._handleEntityClicked, _this2.hass, stateObj, stateObj.friendly_name);
              }
            }
          };

          if (narrow) {
            return columns;
          }

          columns.entity_id = {
            title: _this2.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),
            sortable: true,
            filterable: true
          };
          columns.domain = {
            title: _this2.hass.localize("ui.panel.lovelace.unused_entities.domain"),
            sortable: true,
            filterable: true
          };
          columns.last_changed = {
            title: _this2.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),
            type: "numeric",
            sortable: true,
            template: function template(lastChanged) {
              return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), _this2.hass, lastChanged);
            }
          };
          return columns;
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(HuiUnusedEntities.prototype), "updated", this).call(this, changedProperties);

        if (changedProperties.has("lovelace")) {
          this._getUnusedEntities();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this3 = this;

        if (!this.hass || !this.lovelace) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3());
        }

        if (this.lovelace.mode === "storage" && this.lovelace.editMode === false) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this.hass.localize("ui.panel.lovelace.unused_entities.title"), this.hass.localize("ui.panel.lovelace.unused_entities.available_entities"), this.lovelace.mode === "storage" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), this.hass.localize("ui.panel.lovelace.unused_entities.select_to_add")) : "", this._columns(this.narrow), this._unusedEntities.map(function (entity) {
          var stateObj = _this3.hass.states[entity];
          return {
            entity_id: entity,
            entity: Object.assign({}, stateObj, {
              friendly_name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj)
            }),
            domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entity),
            last_changed: stateObj.last_changed
          };
        }), "entity_id", this.lovelace.mode === "storage", this._handleSelectionChanged, this.lovelace.mode === "storage" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
          rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTL"])(this.hass)
        }), this.hass.localize("ui.panel.lovelace.editor.edit_card.add"), this._selectView) : "");
      }
    }, {
      kind: "method",
      key: "_getUnusedEntities",
      value: function _getUnusedEntities() {
        if (!this.hass || !this.lovelace) {
          return;
        }

        this._selectedEntities = [];
        this._unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_11__["computeUnusedEntities"])(this.hass, this._config);
      }
    }, {
      kind: "method",
      key: "_handleSelectionChanged",
      value: function _handleSelectionChanged(ev) {
        var changedSelection = ev.detail;
        var entity = changedSelection.id;

        if (changedSelection.selected) {
          this._selectedEntities.push(entity);
        } else {
          var index = this._selectedEntities.indexOf(entity);

          if (index !== -1) {
            this._selectedEntities.splice(index, 1);
          }
        }
      }
    }, {
      kind: "method",
      key: "_handleEntityClicked",
      value: function _handleEntityClicked(ev) {
        var entityId = ev.target.closest("tr").getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "hass-more-info", {
          entityId: entityId
        });
      }
    }, {
      kind: "method",
      key: "_selectView",
      value: function _selectView() {
        var _this4 = this;

        Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_12__["showSelectViewDialog"])(this, {
          lovelace: this.lovelace,
          viewSelectedCallback: function viewSelectedCallback(view) {
            return _this4._addCard(view);
          }
        });
      }
    }, {
      kind: "method",
      key: "_addCard",
      value: function _addCard(view) {
        Object(_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_13__["showEditCardDialog"])(this, {
          lovelace: this.lovelace,
          path: [view],
          entities: this._selectedEntities
        });
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvc29ydF9maWx0ZXJfd29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zZWxlY3Qtdmlldy9zaG93LXNlbGVjdC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci91bnVzZWQtZW50aXRpZXMvaHVpLXVudXNlZC1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcImZpbHRlclNvcnREYXRhXCIsXCJmaWx0ZXJEYXRhXCIsXCJzb3J0RGF0YVwiXVxuXHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciB3ID0gbmV3IFdvcmtlcihfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjcxODgxNTY2M2QzOTJmZDk0ODYud29ya2VyLmpzXCIsIHsgbmFtZTogXCJbaGFzaF0ud29ya2VyLmpzXCIgfSlcblx0XHRcdFx0XHRhZGRNZXRob2RzKHcsIG1ldGhvZHMpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIHdcblx0XHRcdFx0fVxuXHRcdFx0IiwiaW1wb3J0IHsgcmVwZWF0IH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvcmVwZWF0XCI7XG5pbXBvcnQgZGVlcENsb25lIGZyb20gXCJkZWVwLWNsb25lLXNpbXBsZVwiO1xuXG5pbXBvcnQge1xuICBNRENEYXRhVGFibGVBZGFwdGVyLFxuICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLFxufSBmcm9tIFwiQG1hdGVyaWFsL2RhdGEtdGFibGVcIjtcblxuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW1wb3J0IHtcbiAgaHRtbCxcbiAgcXVlcnksXG4gIHF1ZXJ5QWxsLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEJhc2VFbGVtZW50IH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnRcIjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby13ZWJwYWNrLWxvYWRlci1zeW50YXhcbi8vIEB0cy1pZ25vcmVcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wbGljaXQtZGVwZW5kZW5jaWVzXG5pbXBvcnQgc29ydEZpbHRlcldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuL3NvcnRfZmlsdGVyX3dvcmtlclwiO1xuXG5pbXBvcnQgXCIuLi9oYS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vaGEtY2hlY2tib3hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFDaGVja2JveCB9IGZyb20gXCIuLi9oYS1jaGVja2JveFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbmV4dFJlbmRlciB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInNlbGVjdGlvbi1jaGFuZ2VkXCI6IFNlbGVjdGlvbkNoYW5nZWRFdmVudDtcbiAgICBcInJvdy1jbGlja1wiOiBSb3dDbGlja2VkRXZlbnQ7XG4gICAgXCJzb3J0aW5nLWNoYW5nZWRcIjogU29ydGluZ0NoYW5nZWRFdmVudDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvd0NsaWNrZWRFdmVudCB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50IHtcbiAgaWQ6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGluZ0NoYW5nZWRFdmVudCB7XG4gIGNvbHVtbjogc3RyaW5nO1xuICBkaXJlY3Rpb246IFNvcnRpbmdEaXJlY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIFNvcnRpbmdEaXJlY3Rpb24gPSBcImRlc2NcIiB8IFwiYXNjXCIgfCBudWxsO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciB7XG4gIFtrZXk6IHN0cmluZ106IERhdGFUYWJsZUNvbHVtbkRhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlU29ydENvbHVtbkRhdGEge1xuICBzb3J0YWJsZT86IGJvb2xlYW47XG4gIGZpbHRlcmFibGU/OiBib29sZWFuO1xuICBmaWx0ZXJLZXk/OiBzdHJpbmc7XG4gIGRpcmVjdGlvbj86IFNvcnRpbmdEaXJlY3Rpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlQ29sdW1uRGF0YSBleHRlbmRzIERhdGFUYWJsZVNvcnRDb2x1bW5EYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdHlwZT86IFwibnVtZXJpY1wiIHwgXCJpY29uXCI7XG4gIHRlbXBsYXRlPzogPFQ+KGRhdGE6IGFueSwgcm93OiBUKSA9PiBUZW1wbGF0ZVJlc3VsdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVSb3dEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWRhdGEtdGFibGVcIilcbmV4cG9ydCBjbGFzcyBIYURhdGFUYWJsZSBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogT2JqZWN0IH0pIHB1YmxpYyBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7fTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHVibGljIGRhdGE6IERhdGFUYWJsZVJvd0RhdGFbXSA9IFtdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzZWxlY3RhYmxlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwdWJsaWMgaWQgPSBcImlkXCI7XG4gIHByb3RlY3RlZCBtZGNGb3VuZGF0aW9uITogTURDRGF0YVRhYmxlRm91bmRhdGlvbjtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IG1kY0ZvdW5kYXRpb25DbGFzcyA9IE1EQ0RhdGFUYWJsZUZvdW5kYXRpb247XG4gIEBxdWVyeShcIi5tZGMtZGF0YS10YWJsZVwiKSBwcm90ZWN0ZWQgbWRjUm9vdCE6IEhUTUxFbGVtZW50O1xuICBAcXVlcnlBbGwoXCIubWRjLWRhdGEtdGFibGVfX3Jvd1wiKSBwcm90ZWN0ZWQgcm93RWxlbWVudHMhOiBIVE1MRWxlbWVudFtdO1xuICBAcXVlcnkoXCIjaGVhZGVyLWNoZWNrYm94XCIpIHByaXZhdGUgX2hlYWRlckNoZWNrYm94ITogSGFDaGVja2JveDtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9maWx0ZXJhYmxlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfaGVhZGVyQ2hlY2tlZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX2hlYWRlckluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHJpdmF0ZSBfY2hlY2tlZFJvd3M6IHN0cmluZ1tdID0gW107XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9maWx0ZXIgPSBcIlwiO1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHJpdmF0ZSBfc29ydENvbHVtbj86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHByaXZhdGUgX3NvcnREaXJlY3Rpb246IFNvcnRpbmdEaXJlY3Rpb24gPSBudWxsO1xuICBAcHJvcGVydHkoeyB0eXBlOiBBcnJheSB9KSBwcml2YXRlIF9maWx0ZXJlZERhdGE6IERhdGFUYWJsZVJvd0RhdGFbXSA9IFtdO1xuICBwcml2YXRlIF9zb3J0Q29sdW1uczoge1xuICAgIFtrZXk6IHN0cmluZ106IERhdGFUYWJsZVNvcnRDb2x1bW5EYXRhO1xuICB9ID0ge307XG4gIHByaXZhdGUgY3VyUmVxdWVzdCA9IDA7XG4gIHByaXZhdGUgX3dvcmtlcjogYW55IHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX2RlYm91bmNlU2VhcmNoID0gZGVib3VuY2UoXG4gICAgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9maWx0ZXIgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgfSxcbiAgICAyMDAsXG4gICAgZmFsc2VcbiAgKTtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuX3dvcmtlciA9IHNvcnRGaWx0ZXJXb3JrZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKHByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChwcm9wZXJ0aWVzLmhhcyhcImNvbHVtbnNcIikpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmFibGUgPSBPYmplY3QudmFsdWVzKHRoaXMuY29sdW1ucykuc29tZShcbiAgICAgICAgKGNvbHVtbikgPT4gY29sdW1uLmZpbHRlcmFibGVcbiAgICAgICk7XG5cbiAgICAgIGZvciAoY29uc3QgY29sdW1uSWQgaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbnNbY29sdW1uSWRdLmRpcmVjdGlvbikge1xuICAgICAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbnNbY29sdW1uSWRdLmRpcmVjdGlvbiE7XG4gICAgICAgICAgdGhpcy5fc29ydENvbHVtbiA9IGNvbHVtbklkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsb25lZENvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9IGRlZXBDbG9uZSh0aGlzLmNvbHVtbnMpO1xuICAgICAgT2JqZWN0LnZhbHVlcyhjbG9uZWRDb2x1bW5zKS5mb3JFYWNoKChjb2x1bW46IERhdGFUYWJsZUNvbHVtbkRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50aXRsZTtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50eXBlO1xuICAgICAgICBkZWxldGUgY29sdW1uLnRlbXBsYXRlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5zID0gY2xvbmVkQ29sdW1ucztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcImRhdGFcIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiY29sdW1uc1wiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJfZmlsdGVyXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0Q29sdW1uXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcIl9zb3J0RGlyZWN0aW9uXCIpXG4gICAgKSB7XG4gICAgICB0aGlzLl9maWx0ZXJEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5fZmlsdGVyYWJsZVxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8c2VhcmNoLWlucHV0XG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgPjwvc2VhcmNoLWlucHV0PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX190YWJsZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5zZWxlY3RhYmxlXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCBtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aGEtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaGVhZGVyLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXRlcm1pbmF0ZT0ke3RoaXMuX2hlYWRlckluZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2hlYWRlckNoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBrZXkgPT09IHRoaXMuX3NvcnRDb2x1bW47XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljXCI6IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSBcIm51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uXCI6IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSBcImljb25cIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBCb29sZWFuKGNvbHVtbi5zb3J0YWJsZSksXG4gICAgICAgICAgICAgICAgICBcIm5vdC1zb3J0ZWRcIjogQm9vbGVhbihjb2x1bW4uc29ydGFibGUgJiYgIXNvcnRlZCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgICAgICAgICAgICAgIHJvbGU9XCJjb2x1bW5oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZUhlYWRlckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbHVtbi1pZD1cIiR7a2V5fVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7Y29sdW1uLnNvcnRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uPSR7c29ydGVkICYmIHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IFwiZGVzY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaGFzczphcnJvdy1kb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJoYXNzOmFycm93LXVwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke2NvbHVtbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keSBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19jb250ZW50XCI+XG4gICAgICAgICAgICAke3JlcGVhdChcbiAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWREYXRhISxcbiAgICAgICAgICAgICAgKHJvdzogRGF0YVRhYmxlUm93RGF0YSkgPT4gcm93W3RoaXMuaWRdLFxuICAgICAgICAgICAgICAocm93OiBEYXRhVGFibGVSb3dEYXRhKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgZGF0YS1yb3ctaWQ9XCIke3Jvd1t0aGlzLmlkXX1cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlUm93Q2xpY2t9XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3dcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5zZWxlY3RhYmxlXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19jZWxsIG1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZVJvd0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fY2hlY2tlZFJvd3MuaW5jbHVkZXMocm93W3RoaXMuaWRdKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hhLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICR7T2JqZWN0LmVudHJpZXModGhpcy5jb2x1bW5zKS5tYXAoKGNvbHVtbkVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19jZWxsICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljXCI6IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09IFwibnVtZXJpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWRjLWRhdGEtdGFibGVfX2NlbGwtLWljb25cIjogQm9vbGVhbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2x1bW4udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4udGVtcGxhdGUocm93W2tleV0sIHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiByb3dba2V5XX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVBZGFwdGVyKCk6IE1EQ0RhdGFUYWJsZUFkYXB0ZXIge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRDbGFzc0F0Um93SW5kZXg6IChyb3dJbmRleDogbnVtYmVyLCBjc3NDbGFzc2VzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yb3dFbGVtZW50c1tyb3dJbmRleF0uY2xhc3NMaXN0LmFkZChjc3NDbGFzc2VzKTtcbiAgICAgIH0sXG4gICAgICBnZXRSb3dDb3VudDogKCkgPT4gdGhpcy5kYXRhLmxlbmd0aCxcbiAgICAgIGdldFJvd0VsZW1lbnRzOiAoKSA9PiB0aGlzLnJvd0VsZW1lbnRzLFxuICAgICAgZ2V0Um93SWRBdEluZGV4OiAocm93SW5kZXg6IG51bWJlcikgPT4gdGhpcy5fZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KSxcbiAgICAgIGdldFJvd0luZGV4QnlDaGlsZEVsZW1lbnQ6IChlbDogRWxlbWVudCkgPT5cbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbCh0aGlzLnJvd0VsZW1lbnRzLCBlbC5jbG9zZXN0KFwidHJcIikpLFxuICAgICAgZ2V0U2VsZWN0ZWRSb3dDb3VudDogKCkgPT4gdGhpcy5fY2hlY2tlZFJvd3MubGVuZ3RoLFxuICAgICAgaXNDaGVja2JveEF0Um93SW5kZXhDaGVja2VkOiAocm93SW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgdGhpcy5fY2hlY2tlZFJvd3MuaW5jbHVkZXModGhpcy5fZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KSksXG4gICAgICBpc0hlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogKCkgPT4gdGhpcy5faGVhZGVyQ2hlY2tlZCxcbiAgICAgIGlzUm93c1NlbGVjdGFibGU6ICgpID0+IHRydWUsXG4gICAgICBub3RpZnlSb3dTZWxlY3Rpb25DaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICBub3RpZnlTZWxlY3RlZEFsbDogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgbm90aWZ5VW5zZWxlY3RlZEFsbDogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgcmVnaXN0ZXJIZWFkZXJSb3dDaGVja2JveDogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgcmVnaXN0ZXJSb3dDaGVja2JveGVzOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICByZW1vdmVDbGFzc0F0Um93SW5kZXg6IChyb3dJbmRleDogbnVtYmVyLCBjc3NDbGFzc2VzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5yb3dFbGVtZW50c1tyb3dJbmRleF0uY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzc2VzKTtcbiAgICAgIH0sXG4gICAgICBzZXRBdHRyaWJ1dGVBdFJvd0luZGV4OiAoXG4gICAgICAgIHJvd0luZGV4OiBudW1iZXIsXG4gICAgICAgIGF0dHI6IHN0cmluZyxcbiAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2V0SGVhZGVyUm93Q2hlY2tib3hDaGVja2VkOiAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLl9oZWFkZXJDaGVja2VkID0gY2hlY2tlZDtcbiAgICAgIH0sXG4gICAgICBzZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGU6IChpbmRldGVybWluYXRlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuX2hlYWRlckluZGV0ZXJtaW5hdGUgPSBpbmRldGVybWluYXRlO1xuICAgICAgfSxcbiAgICAgIHNldFJvd0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IChyb3dJbmRleDogbnVtYmVyLCBjaGVja2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFJvd0NoZWNrZWQodGhpcy5fZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KSwgY2hlY2tlZCk7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJEYXRhKCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMuY3VyUmVxdWVzdCsrO1xuICAgIGNvbnN0IGN1clJlcXVlc3QgPSB0aGlzLmN1clJlcXVlc3Q7XG5cbiAgICBjb25zdCBmaWx0ZXJQcm9tID0gdGhpcy5fd29ya2VyLmZpbHRlclNvcnREYXRhKFxuICAgICAgdGhpcy5kYXRhLFxuICAgICAgdGhpcy5fc29ydENvbHVtbnMsXG4gICAgICB0aGlzLl9maWx0ZXIsXG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uLFxuICAgICAgdGhpcy5fc29ydENvbHVtblxuICAgICk7XG5cbiAgICBjb25zdCBbZGF0YV0gPSBhd2FpdCBQcm9taXNlLmFsbChbZmlsdGVyUHJvbSwgbmV4dFJlbmRlcl0pO1xuXG4gICAgY29uc3QgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJUaW1lIC0gc3RhcnRUaW1lO1xuXG4gICAgaWYgKGVsYXBzZWQgPCAxMDApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCAtIGVsYXBzZWQpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VyUmVxdWVzdCAhPT0gY3VyUmVxdWVzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVIZWFkZXJDbGljayhldjogRXZlbnQpIHtcbiAgICBjb25zdCBjb2x1bW5JZCA9IChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAuY2xvc2VzdChcInRoXCIpIVxuICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uLWlkXCIpITtcbiAgICBpZiAoIXRoaXMuY29sdW1uc1tjb2x1bW5JZF0uc29ydGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9zb3J0RGlyZWN0aW9uIHx8IHRoaXMuX3NvcnRDb2x1bW4gIT09IGNvbHVtbklkKSB7XG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gXCJhc2NcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IFwiYXNjXCIpIHtcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSBcImRlc2NcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fc29ydENvbHVtbiA9IHRoaXMuX3NvcnREaXJlY3Rpb24gPT09IG51bGwgPyB1bmRlZmluZWQgOiBjb2x1bW5JZDtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcInNvcnRpbmctY2hhbmdlZFwiLCB7XG4gICAgICBjb2x1bW46IGNvbHVtbklkLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9zb3J0RGlyZWN0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDaGFuZ2UoKSB7XG4gICAgdGhpcy5faGVhZGVyQ2hlY2tlZCA9IHRoaXMuX2hlYWRlckNoZWNrYm94LmNoZWNrZWQ7XG4gICAgdGhpcy5faGVhZGVySW5kZXRlcm1pbmF0ZSA9IHRoaXMuX2hlYWRlckNoZWNrYm94LmluZGV0ZXJtaW5hdGU7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVSb3dDaGVja2JveENoYW5nZShldjogRXZlbnQpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2LnRhcmdldCBhcyBIYUNoZWNrYm94O1xuICAgIGNvbnN0IHJvd0lkID0gY2hlY2tib3guY2xvc2VzdChcInRyXCIpIS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKTtcblxuICAgIHRoaXMuX3NldFJvd0NoZWNrZWQocm93SWQhLCBjaGVja2JveC5jaGVja2VkKTtcbiAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2UoZXYpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2xpY2soZXY6IEV2ZW50KSB7XG4gICAgY29uc3Qgcm93SWQgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0clwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwicm93LWNsaWNrXCIsIHsgaWQ6IHJvd0lkIH0sIHsgYnViYmxlczogZmFsc2UgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRSb3dDaGVja2VkKHJvd0lkOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoY2hlY2tlZCAmJiAhdGhpcy5fY2hlY2tlZFJvd3MuaW5jbHVkZXMocm93SWQpKSB7XG4gICAgICB0aGlzLl9jaGVja2VkUm93cyA9IFsuLi50aGlzLl9jaGVja2VkUm93cywgcm93SWRdO1xuICAgIH0gZWxzZSBpZiAoIWNoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY2hlY2tlZFJvd3MuaW5kZXhPZihyb3dJZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrZWRSb3dzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcInNlbGVjdGlvbi1jaGFuZ2VkXCIsIHtcbiAgICAgIGlkOiByb3dJZCxcbiAgICAgIHNlbGVjdGVkOiBjaGVja2VkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VhcmNoQ2hhbmdlKGV2OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2RlYm91bmNlU2VhcmNoKGV2KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC8qIGRlZmF1bHQgbWRjIHN0eWxlcywgY29sb3JzIGNoYW5nZWQsIHdpdGhvdXQgY2hlY2tib3ggc3R5bGVzICovXG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE3ODU3MTQyOWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXRhLXRhYmxlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTIpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3ctLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS1jb2xvciksIDAuMDQpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3JvdyB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMTIpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3JvdyB7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93Om5vdCgubWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQpOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC4wNCk7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3cge1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveCB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tY2hlY2tib3hbZGlyPVwicnRsXCJdLFxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94LFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3RhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTc4NTcxNDI5ZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpYyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWMsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWNbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDcxNDI4NTcxZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsW2Rpcj1cInJ0bFwiXSB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWMge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWNbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1pY29uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAvKiBjdXN0b20gZnJvbSBoZXJlICovXG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLnNvcnRhYmxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljKTpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbilcbiAgICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogLTI0cHg7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQgPiAqIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzIGVhc2UgMHM7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLm5vdC1zb3J0ZWQgaGEtaWNvbiB7XG4gICAgICAgIGxlZnQ6IC0zNnB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkOm5vdCgubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljKTpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbik6aG92ZXJcbiAgICAgICAgc3BhbiB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGw6aG92ZXIubm90LXNvcnRlZCBoYS1pY29uIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRhdGEtdGFibGVcIjogSGFEYXRhVGFibGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWNoZWNrYm94XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3gvbXdjLWNoZWNrYm94LWNzc1wiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjQ2hlY2tib3ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2MtY2hlY2tib3hcIikgYXMgQ29uc3RydWN0b3I8Q2hlY2tib3g+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNoZWNrYm94XCIpXG5leHBvcnQgY2xhc3MgSGFDaGVja2JveCBleHRlbmRzIE13Y0NoZWNrYm94IHtcbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZDpub3QoOmNoZWNrZWQpOm5vdCg6aW5kZXRlcm1pbmF0ZSlcbiAgICAgICAgICB+IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1yZ2ItcHJpbWFyeS10ZXh0LWNvbG9yKSwgMC41NCk7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY2hlY2tib3hcIjogSGFDaGVja2JveDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG92ZWxhY2VDb25maWcsIEFjdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IEVYQ0xVREVEX0RPTUFJTlMgPSBbXCJ6b25lXCIsIFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIl07XG5cbmNvbnN0IGFkZEZyb21BY3Rpb24gPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBhY3Rpb25Db25maWc6IEFjdGlvbkNvbmZpZykgPT4ge1xuICBpZiAoXG4gICAgYWN0aW9uQ29uZmlnLmFjdGlvbiAhPT0gXCJjYWxsLXNlcnZpY2VcIiB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZW50aXR5SWRzID0gYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWQ7XG4gIGlmICghQXJyYXkuaXNBcnJheShlbnRpdHlJZHMpKSB7XG4gICAgZW50aXR5SWRzID0gW2VudGl0eUlkc107XG4gIH1cbiAgZm9yIChjb25zdCBlbnRpdHlJZCBvZiBlbnRpdHlJZHMpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5SWQpO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdHlJZCA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGVudGl0eSkgPT4ge1xuICBpZiAodHlwZW9mIGVudGl0eSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbnRpdHkuZW50aXR5KSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5lbnRpdHkpO1xuICB9XG4gIGlmIChlbnRpdHkuY2FtZXJhX2ltYWdlKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eS5jYW1lcmFfaW1hZ2UpO1xuICB9XG4gIGlmIChlbnRpdHkudGFwX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS50YXBfYWN0aW9uKTtcbiAgfVxuICBpZiAoZW50aXR5LmhvbGRfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LmhvbGRfYWN0aW9uKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXRpZXMgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBvYmopID0+IHtcbiAgaWYgKG9iai5lbnRpdHkpIHtcbiAgICBhZGRFbnRpdHlJZChlbnRpdGllcywgb2JqLmVudGl0eSk7XG4gIH1cbiAgaWYgKG9iai5lbnRpdGllcykge1xuICAgIG9iai5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBlbnRpdHkpKTtcbiAgfVxuICBpZiAob2JqLmNhcmQpIHtcbiAgICBhZGRFbnRpdGllcyhlbnRpdGllcywgb2JqLmNhcmQpO1xuICB9XG4gIGlmIChvYmouY2FyZHMpIHtcbiAgICBvYmouY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIGNhcmQpKTtcbiAgfVxuICBpZiAob2JqLmVsZW1lbnRzKSB7XG4gICAgb2JqLmVsZW1lbnRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5iYWRnZXMpIHtcbiAgICBvYmouYmFkZ2VzLmZvckVhY2goKGJhZGdlKSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgYmFkZ2UpKTtcbiAgfVxufTtcblxuY29uc3QgY29tcHV0ZVVzZWRFbnRpdGllcyA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZW50aXRpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uZmlnLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCB2aWV3KSk7XG4gIHJldHVybiBlbnRpdGllcztcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVW51c2VkRW50aXRpZXMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZzogTG92ZWxhY2VDb25maWdcbik6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgdXNlZEVudGl0aWVzID0gY29tcHV0ZVVzZWRFbnRpdGllcyhjb25maWcpO1xuICByZXR1cm4gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpXG4gICAgLmZpbHRlcihcbiAgICAgIChlbnRpdHkpID0+XG4gICAgICAgICF1c2VkRW50aXRpZXMuaGFzKGVudGl0eSkgJiZcbiAgICAgICAgIUVYQ0xVREVEX0RPTUFJTlMuaW5jbHVkZXMoZW50aXR5LnNwbGl0KFwiLlwiLCAxKVswXSlcbiAgICApXG4gICAgLnNvcnQoKTtcbn07XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFZpZXdEaWFsb2dQYXJhbXMge1xuICBsb3ZlbGFjZTogTG92ZWxhY2U7XG4gIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldzogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd1NlbGVjdFZpZXdEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzZWxlY3RWaWV3RGlhbG9nUGFyYW1zOiBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIsXG4gICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiICovIFwiLi9odWktZGlhbG9nLXNlbGVjdC12aWV3XCIpLFxuICAgIGRpYWxvZ1BhcmFtczogc2VsZWN0Vmlld0RpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuXG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWVcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQge1xuICBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQsXG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBjb21wdXRlVW51c2VkRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXB1dGUtdW51c2VkLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBzaG93U2VsZWN0Vmlld0RpYWxvZyB9IGZyb20gXCIuLi9zZWxlY3Qtdmlldy9zaG93LXNlbGVjdC12aWV3LWRpYWxvZ1wiO1xuaW1wb3J0IHsgc2hvd0VkaXRDYXJkRGlhbG9nIH0gZnJvbSBcIi4uL2NhcmQtZWRpdG9yL3Nob3ctZWRpdC1jYXJkLWRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS11bnVzZWQtZW50aXRpZXNcIilcbmV4cG9ydCBjbGFzcyBIdWlVbnVzZWRFbnRpdGllcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdz86IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW51c2VkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIGdldCBfY29uZmlnKCk6IExvdmVsYWNlQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5sb3ZlbGFjZSEuY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29sdW1ucyA9IG1lbW9pemVPbmUoKG5hcnJvdzogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnM6IERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lciA9IHtcbiAgICAgIGVudGl0eToge1xuICAgICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy5lbnRpdHlcIiksXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJLZXk6IFwiZnJpZW5kbHlfbmFtZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgIHRlbXBsYXRlOiAoc3RhdGVPYmopID0+IGh0bWxgXG4gICAgICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFbnRpdHlDbGlja2VkfSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1iYWRnZVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAke3N0YXRlT2JqLmZyaWVuZGx5X25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAobmFycm93KSB7XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb2x1bW5zLmVudGl0eV9pZCA9IHtcbiAgICAgIHRpdGxlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UudW51c2VkX2VudGl0aWVzLmVudGl0eV9pZFwiKSxcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbHVtbnMuZG9tYWluID0ge1xuICAgICAgdGl0bGU6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuZG9tYWluXCIpLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgY29sdW1ucy5sYXN0X2NoYW5nZWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMubGFzdF9jaGFuZ2VkXCJcbiAgICAgICksXG4gICAgICB0eXBlOiBcIm51bWVyaWNcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IChsYXN0Q2hhbmdlZDogc3RyaW5nKSA9PiBodG1sYFxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzIX1cbiAgICAgICAgICAuZGF0ZXRpbWU9JHtsYXN0Q2hhbmdlZH1cbiAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgIGAsXG4gICAgfTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJsb3ZlbGFjZVwiKSkge1xuICAgICAgdGhpcy5fZ2V0VW51c2VkRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMubG92ZWxhY2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG92ZWxhY2UubW9kZSA9PT0gXCJzdG9yYWdlXCIgJiYgdGhpcy5sb3ZlbGFjZS5lZGl0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLnVudXNlZF9lbnRpdGllcy50aXRsZVwiXG4gICAgICAgICl9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuYXZhaWxhYmxlX2VudGl0aWVzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgICR7dGhpcy5sb3ZlbGFjZS5tb2RlID09PSBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxiciAvPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS51bnVzZWRfZW50aXRpZXMuc2VsZWN0X3RvX2FkZFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyEpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3VudXNlZEVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3MhLnN0YXRlc1tlbnRpdHldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAuLi5zdGF0ZU9iaixcbiAgICAgICAgICAgICAgZnJpZW5kbHlfbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tYWluOiBjb21wdXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqIS5sYXN0X2NoYW5nZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSl9XG4gICAgICAgIC5pZD0ke1wiZW50aXR5X2lkXCJ9XG4gICAgICAgIC5zZWxlY3RhYmxlPSR7dGhpcy5sb3ZlbGFjZSEubW9kZSA9PT0gXCJzdG9yYWdlXCJ9XG4gICAgICAgIEBzZWxlY3Rpb24tY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWR9XG4gICAgICA+PC9oYS1kYXRhLXRhYmxlPlxuICAgICAgJHt0aGlzLmxvdmVsYWNlLm1vZGUgPT09IFwic3RvcmFnZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1mYWJcbiAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5oYXNzKSxcbiAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmFkZFwiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zZWxlY3RWaWV3fVwiXG4gICAgICAgICAgICA+PC9oYS1mYWI+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFVudXNlZEVudGl0aWVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmxvdmVsYWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMgPSBbXTtcbiAgICB0aGlzLl91bnVzZWRFbnRpdGllcyA9IGNvbXB1dGVVbnVzZWRFbnRpdGllcyh0aGlzLmhhc3MsIHRoaXMuX2NvbmZpZyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VsZWN0aW9uQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VkU2VsZWN0aW9uID0gZXYuZGV0YWlsIGFzIFNlbGVjdGlvbkNoYW5nZWRFdmVudDtcbiAgICBjb25zdCBlbnRpdHkgPSBjaGFuZ2VkU2VsZWN0aW9uLmlkO1xuICAgIGlmIChjaGFuZ2VkU2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmluZGV4T2YoZW50aXR5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUVudGl0eUNsaWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0clwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RWaWV3KCk6IHZvaWQge1xuICAgIHNob3dTZWxlY3RWaWV3RGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICAgIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldykgPT4gdGhpcy5fYWRkQ2FyZCh2aWV3KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENhcmQodmlldzogbnVtYmVyKTogdm9pZCB7XG4gICAgc2hvd0VkaXRDYXJkRGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICAgIHBhdGg6IFt2aWV3XSxcbiAgICAgIGVudGl0aWVzOiB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sb3ZlbGFjZS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgaGEtZmFiLnJ0bCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXVudXNlZC1lbnRpdGllc1wiOiBIdWlVbnVzZWRFbnRpdGllcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBWUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQUE7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQUE7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JBO0FBQUE7QUFoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFBQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUEwQkE7QUFDQTtBQTNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUNBO0FBQ0E7QUFBQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQUFBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBeEVBO0FBQUE7QUFBQTtBQUFBO0FBMEVBO0FBQ0E7QUFBQTtBQThCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQVJBO0FBVUE7QUFvQkE7QUFNQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFKQTtBQWNBO0FBdENBO0FBOENBO0FBL0xBO0FBQUE7QUFBQTtBQUFBO0FBaU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQXVDQTtBQXpPQTtBQUFBO0FBQUE7QUFBQTtBQTJPQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBbUJBO0FBQUE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUF3QkE7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNPQTtBQUFBO0FBQUE7QUFBQTtBQXVRQTtBQUNBO0FBeFFBO0FBQUE7QUFBQTtBQUFBO0FBMlFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUEvUkE7QUFBQTtBQUFBO0FBQUE7QUFrU0E7QUFDQTtBQUNBO0FBQ0E7QUFyU0E7QUFBQTtBQUFBO0FBQUE7QUF3U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE3U0E7QUFBQTtBQUFBO0FBQUE7QUFnVEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFwVEE7QUFBQTtBQUFBO0FBQUE7QUF1VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBblVBO0FBQUE7QUFBQTtBQUFBO0FBc1VBO0FBQ0E7QUF2VUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBVQTtBQWlMQTtBQTNmQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQVNBO0FBaEJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBQUE7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUFBLGlkQUNBO0FBREE7QUFFQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFXQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBREE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQWNBO0FBQ0E7QUFoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4RUE7QUFBQTtBQUFBO0FBQUE7QUEwRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBUEE7QUFTQTtBQVNBO0FBREE7QUFZQTtBQXZJQTtBQUFBO0FBQUE7QUFBQTtBQTBJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQS9JQTtBQUFBO0FBQUE7QUFBQTtBQWtKQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVKQTtBQUFBO0FBQUE7QUFBQTtBQStKQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBcktBO0FBQUE7QUFBQTtBQUFBO0FBdUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQTVLQTtBQUFBO0FBQUE7QUFBQTtBQStLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFwTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVMQTtBQWtCQTtBQXpNQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==