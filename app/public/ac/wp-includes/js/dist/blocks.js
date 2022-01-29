this["wp"] = this["wp"] || {}; this["wp"]["blocks"] =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "0ATp");
/******/ })
/************************************************************************/
/******/ ({

/***/ "//Lo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GRId");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tqx9");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["a"] = (blockDefault);


/***/ }),

/***/ "0ATp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store; });
__webpack_require__.d(__webpack_exports__, "createBlock", function() { return /* reexport */ createBlock; });
__webpack_require__.d(__webpack_exports__, "createBlocksFromInnerBlocksTemplate", function() { return /* reexport */ createBlocksFromInnerBlocksTemplate; });
__webpack_require__.d(__webpack_exports__, "cloneBlock", function() { return /* reexport */ cloneBlock; });
__webpack_require__.d(__webpack_exports__, "__experimentalCloneSanitizedBlock", function() { return /* reexport */ __experimentalCloneSanitizedBlock; });
__webpack_require__.d(__webpack_exports__, "getPossibleBlockTransformations", function() { return /* reexport */ getPossibleBlockTransformations; });
__webpack_require__.d(__webpack_exports__, "switchToBlockType", function() { return /* reexport */ switchToBlockType; });
__webpack_require__.d(__webpack_exports__, "getBlockTransforms", function() { return /* reexport */ getBlockTransforms; });
__webpack_require__.d(__webpack_exports__, "findTransform", function() { return /* reexport */ findTransform; });
__webpack_require__.d(__webpack_exports__, "getBlockFromExample", function() { return /* reexport */ getBlockFromExample; });
__webpack_require__.d(__webpack_exports__, "parse", function() { return /* reexport */ parser; });
__webpack_require__.d(__webpack_exports__, "getBlockAttributes", function() { return /* reexport */ getBlockAttributes; });
__webpack_require__.d(__webpack_exports__, "parseWithAttributeSchema", function() { return /* reexport */ parseWithAttributeSchema; });
__webpack_require__.d(__webpack_exports__, "pasteHandler", function() { return /* reexport */ pasteHandler; });
__webpack_require__.d(__webpack_exports__, "rawHandler", function() { return /* reexport */ rawHandler; });
__webpack_require__.d(__webpack_exports__, "getPhrasingContentSchema", function() { return /* reexport */ deprecatedGetPhrasingContentSchema; });
__webpack_require__.d(__webpack_exports__, "serialize", function() { return /* reexport */ serialize; });
__webpack_require__.d(__webpack_exports__, "getBlockContent", function() { return /* reexport */ getBlockInnerHTML; });
__webpack_require__.d(__webpack_exports__, "getBlockDefaultClassName", function() { return /* reexport */ getBlockDefaultClassName; });
__webpack_require__.d(__webpack_exports__, "getBlockMenuDefaultClassName", function() { return /* reexport */ getBlockMenuDefaultClassName; });
__webpack_require__.d(__webpack_exports__, "getSaveElement", function() { return /* reexport */ getSaveElement; });
__webpack_require__.d(__webpack_exports__, "getSaveContent", function() { return /* reexport */ getSaveContent; });
__webpack_require__.d(__webpack_exports__, "__unstableGetBlockProps", function() { return /* reexport */ getBlockProps; });
__webpack_require__.d(__webpack_exports__, "__unstableSerializeAndClean", function() { return /* reexport */ __unstableSerializeAndClean; });
__webpack_require__.d(__webpack_exports__, "isValidBlockContent", function() { return /* reexport */ isValidBlockContent; });
__webpack_require__.d(__webpack_exports__, "getCategories", function() { return /* reexport */ categories_getCategories; });
__webpack_require__.d(__webpack_exports__, "setCategories", function() { return /* reexport */ categories_setCategories; });
__webpack_require__.d(__webpack_exports__, "updateCategory", function() { return /* reexport */ categories_updateCategory; });
__webpack_require__.d(__webpack_exports__, "registerBlockType", function() { return /* reexport */ registerBlockType; });
__webpack_require__.d(__webpack_exports__, "registerBlockTypeFromMetadata", function() { return /* reexport */ registerBlockTypeFromMetadata; });
__webpack_require__.d(__webpack_exports__, "registerBlockCollection", function() { return /* reexport */ registerBlockCollection; });
__webpack_require__.d(__webpack_exports__, "unregisterBlockType", function() { return /* reexport */ unregisterBlockType; });
__webpack_require__.d(__webpack_exports__, "setFreeformContentHandlerName", function() { return /* reexport */ setFreeformContentHandlerName; });
__webpack_require__.d(__webpack_exports__, "getFreeformContentHandlerName", function() { return /* reexport */ getFreeformContentHandlerName; });
__webpack_require__.d(__webpack_exports__, "setUnregisteredTypeHandlerName", function() { return /* reexport */ setUnregisteredTypeHandlerName; });
__webpack_require__.d(__webpack_exports__, "getUnregisteredTypeHandlerName", function() { return /* reexport */ getUnregisteredTypeHandlerName; });
__webpack_require__.d(__webpack_exports__, "setDefaultBlockName", function() { return /* reexport */ registration_setDefaultBlockName; });
__webpack_require__.d(__webpack_exports__, "getDefaultBlockName", function() { return /* reexport */ registration_getDefaultBlockName; });
__webpack_require__.d(__webpack_exports__, "setGroupingBlockName", function() { return /* reexport */ registration_setGroupingBlockName; });
__webpack_require__.d(__webpack_exports__, "getGroupingBlockName", function() { return /* reexport */ registration_getGroupingBlockName; });
__webpack_require__.d(__webpack_exports__, "getBlockType", function() { return /* reexport */ registration_getBlockType; });
__webpack_require__.d(__webpack_exports__, "getBlockTypes", function() { return /* reexport */ registration_getBlockTypes; });
__webpack_require__.d(__webpack_exports__, "getBlockSupport", function() { return /* reexport */ registration_getBlockSupport; });
__webpack_require__.d(__webpack_exports__, "hasBlockSupport", function() { return /* reexport */ registration_hasBlockSupport; });
__webpack_require__.d(__webpack_exports__, "getBlockVariations", function() { return /* reexport */ registration_getBlockVariations; });
__webpack_require__.d(__webpack_exports__, "isReusableBlock", function() { return /* reexport */ isReusableBlock; });
__webpack_require__.d(__webpack_exports__, "isTemplatePart", function() { return /* reexport */ isTemplatePart; });
__webpack_require__.d(__webpack_exports__, "getChildBlockNames", function() { return /* reexport */ registration_getChildBlockNames; });
__webpack_require__.d(__webpack_exports__, "hasChildBlocks", function() { return /* reexport */ registration_hasChildBlocks; });
__webpack_require__.d(__webpack_exports__, "hasChildBlocksWithInserterSupport", function() { return /* reexport */ registration_hasChildBlocksWithInserterSupport; });
__webpack_require__.d(__webpack_exports__, "unstable__bootstrapServerSideBlockDefinitions", function() { return /* reexport */ unstable__bootstrapServerSideBlockDefinitions; });
__webpack_require__.d(__webpack_exports__, "registerBlockStyle", function() { return /* reexport */ registerBlockStyle; });
__webpack_require__.d(__webpack_exports__, "unregisterBlockStyle", function() { return /* reexport */ unregisterBlockStyle; });
__webpack_require__.d(__webpack_exports__, "registerBlockVariation", function() { return /* reexport */ registerBlockVariation; });
__webpack_require__.d(__webpack_exports__, "unregisterBlockVariation", function() { return /* reexport */ unregisterBlockVariation; });
__webpack_require__.d(__webpack_exports__, "isUnmodifiedDefaultBlock", function() { return /* reexport */ isUnmodifiedDefaultBlock; });
__webpack_require__.d(__webpack_exports__, "normalizeIconObject", function() { return /* reexport */ normalizeIconObject; });
__webpack_require__.d(__webpack_exports__, "isValidIcon", function() { return /* reexport */ isValidIcon; });
__webpack_require__.d(__webpack_exports__, "__experimentalGetBlockLabel", function() { return /* reexport */ getBlockLabel; });
__webpack_require__.d(__webpack_exports__, "__experimentalGetAccessibleBlockLabel", function() { return /* reexport */ getAccessibleBlockLabel; });
__webpack_require__.d(__webpack_exports__, "__experimentalSanitizeBlockAttributes", function() { return /* reexport */ __experimentalSanitizeBlockAttributes; });
__webpack_require__.d(__webpack_exports__, "__experimentalGetBlockAttributesNamesByRole", function() { return /* reexport */ __experimentalGetBlockAttributesNamesByRole; });
__webpack_require__.d(__webpack_exports__, "doBlocksMatchTemplate", function() { return /* reexport */ doBlocksMatchTemplate; });
__webpack_require__.d(__webpack_exports__, "synchronizeBlocksWithTemplate", function() { return /* reexport */ synchronizeBlocksWithTemplate; });
__webpack_require__.d(__webpack_exports__, "children", function() { return /* reexport */ api_children; });
__webpack_require__.d(__webpack_exports__, "node", function() { return /* reexport */ api_node; });
__webpack_require__.d(__webpack_exports__, "__EXPERIMENTAL_STYLE_PROPERTY", function() { return /* reexport */ __EXPERIMENTAL_STYLE_PROPERTY; });
__webpack_require__.d(__webpack_exports__, "__EXPERIMENTAL_ELEMENTS", function() { return /* reexport */ __EXPERIMENTAL_ELEMENTS; });
__webpack_require__.d(__webpack_exports__, "withBlockContentContext", function() { return /* reexport */ withBlockContentContext; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/blocks/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getBlockTypes", function() { return getBlockTypes; });
__webpack_require__.d(selectors_namespaceObject, "getBlockType", function() { return getBlockType; });
__webpack_require__.d(selectors_namespaceObject, "getBlockStyles", function() { return getBlockStyles; });
__webpack_require__.d(selectors_namespaceObject, "getBlockVariations", function() { return getBlockVariations; });
__webpack_require__.d(selectors_namespaceObject, "getActiveBlockVariation", function() { return getActiveBlockVariation; });
__webpack_require__.d(selectors_namespaceObject, "getDefaultBlockVariation", function() { return getDefaultBlockVariation; });
__webpack_require__.d(selectors_namespaceObject, "getCategories", function() { return getCategories; });
__webpack_require__.d(selectors_namespaceObject, "getCollections", function() { return getCollections; });
__webpack_require__.d(selectors_namespaceObject, "getDefaultBlockName", function() { return getDefaultBlockName; });
__webpack_require__.d(selectors_namespaceObject, "getFreeformFallbackBlockName", function() { return getFreeformFallbackBlockName; });
__webpack_require__.d(selectors_namespaceObject, "getUnregisteredFallbackBlockName", function() { return getUnregisteredFallbackBlockName; });
__webpack_require__.d(selectors_namespaceObject, "getGroupingBlockName", function() { return getGroupingBlockName; });
__webpack_require__.d(selectors_namespaceObject, "getChildBlockNames", function() { return getChildBlockNames; });
__webpack_require__.d(selectors_namespaceObject, "getBlockSupport", function() { return getBlockSupport; });
__webpack_require__.d(selectors_namespaceObject, "hasBlockSupport", function() { return hasBlockSupport; });
__webpack_require__.d(selectors_namespaceObject, "isMatchingSearchTerm", function() { return isMatchingSearchTerm; });
__webpack_require__.d(selectors_namespaceObject, "hasChildBlocks", function() { return hasChildBlocks; });
__webpack_require__.d(selectors_namespaceObject, "hasChildBlocksWithInserterSupport", function() { return hasChildBlocksWithInserterSupport; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/blocks/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "addBlockTypes", function() { return addBlockTypes; });
__webpack_require__.d(actions_namespaceObject, "removeBlockTypes", function() { return removeBlockTypes; });
__webpack_require__.d(actions_namespaceObject, "addBlockStyles", function() { return addBlockStyles; });
__webpack_require__.d(actions_namespaceObject, "removeBlockStyles", function() { return removeBlockStyles; });
__webpack_require__.d(actions_namespaceObject, "addBlockVariations", function() { return addBlockVariations; });
__webpack_require__.d(actions_namespaceObject, "removeBlockVariations", function() { return removeBlockVariations; });
__webpack_require__.d(actions_namespaceObject, "setDefaultBlockName", function() { return setDefaultBlockName; });
__webpack_require__.d(actions_namespaceObject, "setFreeformFallbackBlockName", function() { return setFreeformFallbackBlockName; });
__webpack_require__.d(actions_namespaceObject, "setUnregisteredFallbackBlockName", function() { return setUnregisteredFallbackBlockName; });
__webpack_require__.d(actions_namespaceObject, "setGroupingBlockName", function() { return setGroupingBlockName; });
__webpack_require__.d(actions_namespaceObject, "setCategories", function() { return setCategories; });
__webpack_require__.d(actions_namespaceObject, "updateCategory", function() { return updateCategory; });
__webpack_require__.d(actions_namespaceObject, "addBlockCollection", function() { return addBlockCollection; });
__webpack_require__.d(actions_namespaceObject, "removeBlockCollection", function() { return removeBlockCollection; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/store/reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * @typedef {Object} WPBlockCategory
 *
 * @property {string} slug  Unique category slug.
 * @property {string} title Category label, for display in user interface.
 */

/**
 * Default set of categories.
 *
 * @type {WPBlockCategory[]}
 */

const DEFAULT_CATEGORIES = [{
  slug: 'text',
  title: Object(external_wp_i18n_["__"])('Text')
}, {
  slug: 'media',
  title: Object(external_wp_i18n_["__"])('Media')
}, {
  slug: 'design',
  title: Object(external_wp_i18n_["__"])('Design')
}, {
  slug: 'widgets',
  title: Object(external_wp_i18n_["__"])('Widgets')
}, {
  slug: 'theme',
  title: Object(external_wp_i18n_["__"])('Theme')
}, {
  slug: 'embed',
  title: Object(external_wp_i18n_["__"])('Embeds')
}, {
  slug: 'reusable',
  title: Object(external_wp_i18n_["__"])('Reusable blocks')
}];
/**
 * Reducer managing the block types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function reducer_blockTypes(state = {}, action) {
  switch (action.type) {
    case 'ADD_BLOCK_TYPES':
      return { ...state,
        ...Object(external_lodash_["keyBy"])(Object(external_lodash_["map"])(action.blockTypes, blockType => Object(external_lodash_["omit"])(blockType, 'styles ')), 'name')
      };

    case 'REMOVE_BLOCK_TYPES':
      return Object(external_lodash_["omit"])(state, action.names);
  }

  return state;
}
/**
 * Reducer managing the block style variations.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function blockStyles(state = {}, action) {
  switch (action.type) {
    case 'ADD_BLOCK_TYPES':
      return { ...state,
        ...Object(external_lodash_["mapValues"])(Object(external_lodash_["keyBy"])(action.blockTypes, 'name'), blockType => {
          return Object(external_lodash_["uniqBy"])([...Object(external_lodash_["get"])(blockType, ['styles'], []), ...Object(external_lodash_["get"])(state, [blockType.name], [])], style => style.name);
        })
      };

    case 'ADD_BLOCK_STYLES':
      return { ...state,
        [action.blockName]: Object(external_lodash_["uniqBy"])([...Object(external_lodash_["get"])(state, [action.blockName], []), ...action.styles], style => style.name)
      };

    case 'REMOVE_BLOCK_STYLES':
      return { ...state,
        [action.blockName]: Object(external_lodash_["filter"])(Object(external_lodash_["get"])(state, [action.blockName], []), style => action.styleNames.indexOf(style.name) === -1)
      };
  }

  return state;
}
/**
 * Reducer managing the block variations.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function blockVariations(state = {}, action) {
  switch (action.type) {
    case 'ADD_BLOCK_TYPES':
      return { ...state,
        ...Object(external_lodash_["mapValues"])(Object(external_lodash_["keyBy"])(action.blockTypes, 'name'), blockType => {
          return Object(external_lodash_["uniqBy"])([...Object(external_lodash_["get"])(blockType, ['variations'], []), ...Object(external_lodash_["get"])(state, [blockType.name], [])], variation => variation.name);
        })
      };

    case 'ADD_BLOCK_VARIATIONS':
      return { ...state,
        [action.blockName]: Object(external_lodash_["uniqBy"])([...Object(external_lodash_["get"])(state, [action.blockName], []), ...action.variations], variation => variation.name)
      };

    case 'REMOVE_BLOCK_VARIATIONS':
      return { ...state,
        [action.blockName]: Object(external_lodash_["filter"])(Object(external_lodash_["get"])(state, [action.blockName], []), variation => action.variationNames.indexOf(variation.name) === -1)
      };
  }

  return state;
}
/**
 * Higher-order Reducer creating a reducer keeping track of given block name.
 *
 * @param {string} setActionType  Action type.
 *
 * @return {Function} Reducer.
 */

function createBlockNameSetterReducer(setActionType) {
  return (state = null, action) => {
    switch (action.type) {
      case 'REMOVE_BLOCK_TYPES':
        if (action.names.indexOf(state) !== -1) {
          return null;
        }

        return state;

      case setActionType:
        return action.name || null;
    }

    return state;
  };
}
const reducer_defaultBlockName = createBlockNameSetterReducer('SET_DEFAULT_BLOCK_NAME');
const freeformFallbackBlockName = createBlockNameSetterReducer('SET_FREEFORM_FALLBACK_BLOCK_NAME');
const unregisteredFallbackBlockName = createBlockNameSetterReducer('SET_UNREGISTERED_FALLBACK_BLOCK_NAME');
const groupingBlockName = createBlockNameSetterReducer('SET_GROUPING_BLOCK_NAME');
/**
 * Reducer managing the categories
 *
 * @param {WPBlockCategory[]} state  Current state.
 * @param {Object}            action Dispatched action.
 *
 * @return {WPBlockCategory[]} Updated state.
 */

function reducer_categories(state = DEFAULT_CATEGORIES, action) {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return action.categories || [];

    case 'UPDATE_CATEGORY':
      {
        if (!action.category || Object(external_lodash_["isEmpty"])(action.category)) {
          return state;
        }

        const categoryToChange = Object(external_lodash_["find"])(state, ['slug', action.slug]);

        if (categoryToChange) {
          return Object(external_lodash_["map"])(state, category => {
            if (category.slug === action.slug) {
              return { ...category,
                ...action.category
              };
            }

            return category;
          });
        }
      }
  }

  return state;
}
function collections(state = {}, action) {
  switch (action.type) {
    case 'ADD_BLOCK_COLLECTION':
      return { ...state,
        [action.namespace]: {
          title: action.title,
          icon: action.icon
        }
      };

    case 'REMOVE_BLOCK_COLLECTION':
      return Object(external_lodash_["omit"])(state, action.namespace);
  }

  return state;
}
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  blockTypes: reducer_blockTypes,
  blockStyles,
  blockVariations,
  defaultBlockName: reducer_defaultBlockName,
  freeformFallbackBlockName,
  unregisteredFallbackBlockName,
  groupingBlockName,
  categories: reducer_categories,
  collections
}));

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__("pPDe");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/store/selectors.js
/**
 * External dependencies
 */


/** @typedef {import('../api/registration').WPBlockVariation} WPBlockVariation */

/** @typedef {import('../api/registration').WPBlockVariationScope} WPBlockVariationScope */

/** @typedef {import('./reducer').WPBlockCategory} WPBlockCategory */

/**
 * Given a block name or block type object, returns the corresponding
 * normalized block type object.
 *
 * @param {Object}          state      Blocks state.
 * @param {(string|Object)} nameOrType Block name or type object
 *
 * @return {Object} Block type object.
 */

const getNormalizedBlockType = (state, nameOrType) => 'string' === typeof nameOrType ? getBlockType(state, nameOrType) : nameOrType;
/**
 * Returns all the available block types.
 *
 * @param {Object} state Data state.
 *
 * @return {Array} Block Types.
 */


const getBlockTypes = Object(rememo["a" /* default */])(state => {
  return Object.values(state.blockTypes).map(blockType => {
    return { ...blockType,
      variations: getBlockVariations(state, blockType.name)
    };
  });
}, state => [state.blockTypes, state.blockVariations]);
/**
 * Returns a block type by name.
 *
 * @param {Object} state Data state.
 * @param {string} name Block type name.
 *
 * @return {Object?} Block Type.
 */

function getBlockType(state, name) {
  return state.blockTypes[name];
}
/**
 * Returns block styles by block name.
 *
 * @param {Object} state Data state.
 * @param {string} name  Block type name.
 *
 * @return {Array?} Block Styles.
 */

function getBlockStyles(state, name) {
  return state.blockStyles[name];
}
/**
 * Returns block variations by block name.
 *
 * @param {Object}                state     Data state.
 * @param {string}                blockName Block type name.
 * @param {WPBlockVariationScope} [scope]   Block variation scope name.
 *
 * @return {(WPBlockVariation[]|void)} Block variations.
 */

const getBlockVariations = Object(rememo["a" /* default */])((state, blockName, scope) => {
  const variations = state.blockVariations[blockName];

  if (!variations || !scope) {
    return variations;
  }

  return variations.filter(variation => {
    // For backward compatibility reasons, variation's scope defaults to
    // `block` and `inserter` when not set.
    return (variation.scope || ['block', 'inserter']).includes(scope);
  });
}, (state, blockName) => [state.blockVariations[blockName]]);
/**
 * Returns the active block variation for a given block based on its attributes.
 * Variations are determined by their `isActive` property.
 * Which is either an array of block attribute keys or a function.
 *
 * In case of an array of block attribute keys, the `attributes` are compared
 * to the variation's attributes using strict equality check.
 *
 * In case of function type, the function should accept a block's attributes
 * and the variation's attributes and determines if a variation is active.
 * A function that accepts a block's attributes and the variation's attributes and determines if a variation is active.
 *
 * @param {Object}                state      Data state.
 * @param {string}                blockName  Name of block (example: “core/columns”).
 * @param {Object}                attributes Block attributes used to determine active variation.
 * @param {WPBlockVariationScope} [scope]    Block variation scope name.
 *
 * @return {(WPBlockVariation|undefined)} Active block variation.
 */

function getActiveBlockVariation(state, blockName, attributes, scope) {
  const variations = getBlockVariations(state, blockName, scope);
  const match = variations === null || variations === void 0 ? void 0 : variations.find(variation => {
    var _variation$isActive;

    if (Array.isArray(variation.isActive)) {
      const blockType = getBlockType(state, blockName);
      const attributeKeys = Object.keys(blockType.attributes || {});
      const definedAttributes = variation.isActive.filter(attribute => attributeKeys.includes(attribute));

      if (definedAttributes.length === 0) {
        return false;
      }

      return definedAttributes.every(attribute => attributes[attribute] === variation.attributes[attribute]);
    }

    return (_variation$isActive = variation.isActive) === null || _variation$isActive === void 0 ? void 0 : _variation$isActive.call(variation, attributes, variation.attributes);
  });
  return match;
}
/**
 * Returns the default block variation for the given block type.
 * When there are multiple variations annotated as the default one,
 * the last added item is picked. This simplifies registering overrides.
 * When there is no default variation set, it returns the first item.
 *
 * @param {Object}                state     Data state.
 * @param {string}                blockName Block type name.
 * @param {WPBlockVariationScope} [scope]   Block variation scope name.
 *
 * @return {?WPBlockVariation} The default block variation.
 */

function getDefaultBlockVariation(state, blockName, scope) {
  const variations = getBlockVariations(state, blockName, scope);
  return Object(external_lodash_["findLast"])(variations, 'isDefault') || Object(external_lodash_["first"])(variations);
}
/**
 * Returns all the available categories.
 *
 * @param {Object} state Data state.
 *
 * @return {WPBlockCategory[]} Categories list.
 */

function getCategories(state) {
  return state.categories;
}
/**
 * Returns all the available collections.
 *
 * @param {Object} state Data state.
 *
 * @return {Object} Collections list.
 */

function getCollections(state) {
  return state.collections;
}
/**
 * Returns the name of the default block name.
 *
 * @param {Object} state Data state.
 *
 * @return {string?} Default block name.
 */

function getDefaultBlockName(state) {
  return state.defaultBlockName;
}
/**
 * Returns the name of the block for handling non-block content.
 *
 * @param {Object} state Data state.
 *
 * @return {string?} Name of the block for handling non-block content.
 */

function getFreeformFallbackBlockName(state) {
  return state.freeformFallbackBlockName;
}
/**
 * Returns the name of the block for handling unregistered blocks.
 *
 * @param {Object} state Data state.
 *
 * @return {string?} Name of the block for handling unregistered blocks.
 */

function getUnregisteredFallbackBlockName(state) {
  return state.unregisteredFallbackBlockName;
}
/**
 * Returns the name of the block for handling unregistered blocks.
 *
 * @param {Object} state Data state.
 *
 * @return {string?} Name of the block for handling unregistered blocks.
 */

function getGroupingBlockName(state) {
  return state.groupingBlockName;
}
/**
 * Returns an array with the child blocks of a given block.
 *
 * @param {Object} state     Data state.
 * @param {string} blockName Block type name.
 *
 * @return {Array} Array of child block names.
 */

const getChildBlockNames = Object(rememo["a" /* default */])((state, blockName) => {
  return Object(external_lodash_["map"])(Object(external_lodash_["filter"])(state.blockTypes, blockType => {
    return Object(external_lodash_["includes"])(blockType.parent, blockName);
  }), ({
    name
  }) => name);
}, state => [state.blockTypes]);
/**
 * Returns the block support value for a feature, if defined.
 *
 * @param  {Object}          state           Data state.
 * @param  {(string|Object)} nameOrType      Block name or type object
 * @param  {string}          feature         Feature to retrieve
 * @param  {*}               defaultSupports Default value to return if not
 *                                           explicitly defined
 *
 * @return {?*} Block support value
 */

const getBlockSupport = (state, nameOrType, feature, defaultSupports) => {
  const blockType = getNormalizedBlockType(state, nameOrType);
  return Object(external_lodash_["get"])(blockType, ['supports', ...feature.split('.')], defaultSupports);
};
/**
 * Returns true if the block defines support for a feature, or false otherwise.
 *
 * @param  {Object}         state           Data state.
 * @param {(string|Object)} nameOrType      Block name or type object.
 * @param {string}          feature         Feature to test.
 * @param {boolean}         defaultSupports Whether feature is supported by
 *                                          default if not explicitly defined.
 *
 * @return {boolean} Whether block supports feature.
 */

function hasBlockSupport(state, nameOrType, feature, defaultSupports) {
  return !!getBlockSupport(state, nameOrType, feature, defaultSupports);
}
/**
 * Returns true if the block type by the given name or object value matches a
 * search term, or false otherwise.
 *
 * @param {Object}          state      Blocks state.
 * @param {(string|Object)} nameOrType Block name or type object.
 * @param {string}          searchTerm Search term by which to filter.
 *
 * @return {Object[]} Whether block type matches search term.
 */

function isMatchingSearchTerm(state, nameOrType, searchTerm) {
  const blockType = getNormalizedBlockType(state, nameOrType);
  const getNormalizedSearchTerm = Object(external_lodash_["flow"])([// Disregard diacritics.
  //  Input: "média"
  external_lodash_["deburr"], // Lowercase.
  //  Input: "MEDIA"
  term => term.toLowerCase(), // Strip leading and trailing whitespace.
  //  Input: " media "
  term => term.trim()]);
  const normalizedSearchTerm = getNormalizedSearchTerm(searchTerm);
  const isSearchMatch = Object(external_lodash_["flow"])([getNormalizedSearchTerm, normalizedCandidate => Object(external_lodash_["includes"])(normalizedCandidate, normalizedSearchTerm)]);
  return isSearchMatch(blockType.title) || Object(external_lodash_["some"])(blockType.keywords, isSearchMatch) || isSearchMatch(blockType.category);
}
/**
 * Returns a boolean indicating if a block has child blocks or not.
 *
 * @param {Object} state     Data state.
 * @param {string} blockName Block type name.
 *
 * @return {boolean} True if a block contains child blocks and false otherwise.
 */

const hasChildBlocks = (state, blockName) => {
  return getChildBlockNames(state, blockName).length > 0;
};
/**
 * Returns a boolean indicating if a block has at least one child block with inserter support.
 *
 * @param {Object} state     Data state.
 * @param {string} blockName Block type name.
 *
 * @return {boolean} True if a block contains at least one child blocks with inserter support
 *                   and false otherwise.
 */

const hasChildBlocksWithInserterSupport = (state, blockName) => {
  return Object(external_lodash_["some"])(getChildBlockNames(state, blockName), childBlockName => {
    return hasBlockSupport(state, childBlockName, 'inserter', true);
  });
};

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/store/actions.js
/**
 * External dependencies
 */

/** @typedef {import('../api/registration').WPBlockVariation} WPBlockVariation */

/**
 * Returns an action object used in signalling that block types have been added.
 *
 * @param {Array|Object} blockTypes Block types received.
 *
 * @return {Object} Action object.
 */

function addBlockTypes(blockTypes) {
  return {
    type: 'ADD_BLOCK_TYPES',
    blockTypes: Object(external_lodash_["castArray"])(blockTypes)
  };
}
/**
 * Returns an action object used to remove a registered block type.
 *
 * @param {string|Array} names Block name.
 *
 * @return {Object} Action object.
 */

function removeBlockTypes(names) {
  return {
    type: 'REMOVE_BLOCK_TYPES',
    names: Object(external_lodash_["castArray"])(names)
  };
}
/**
 * Returns an action object used in signalling that new block styles have been added.
 *
 * @param {string}       blockName  Block name.
 * @param {Array|Object} styles     Block styles.
 *
 * @return {Object} Action object.
 */

function addBlockStyles(blockName, styles) {
  return {
    type: 'ADD_BLOCK_STYLES',
    styles: Object(external_lodash_["castArray"])(styles),
    blockName
  };
}
/**
 * Returns an action object used in signalling that block styles have been removed.
 *
 * @param {string}       blockName  Block name.
 * @param {Array|string} styleNames Block style names.
 *
 * @return {Object} Action object.
 */

function removeBlockStyles(blockName, styleNames) {
  return {
    type: 'REMOVE_BLOCK_STYLES',
    styleNames: Object(external_lodash_["castArray"])(styleNames),
    blockName
  };
}
/**
 * Returns an action object used in signalling that new block variations have been added.
 *
 * @param {string}                              blockName  Block name.
 * @param {WPBlockVariation|WPBlockVariation[]} variations Block variations.
 *
 * @return {Object} Action object.
 */

function addBlockVariations(blockName, variations) {
  return {
    type: 'ADD_BLOCK_VARIATIONS',
    variations: Object(external_lodash_["castArray"])(variations),
    blockName
  };
}
/**
 * Returns an action object used in signalling that block variations have been removed.
 *
 * @param {string}          blockName      Block name.
 * @param {string|string[]} variationNames Block variation names.
 *
 * @return {Object} Action object.
 */

function removeBlockVariations(blockName, variationNames) {
  return {
    type: 'REMOVE_BLOCK_VARIATIONS',
    variationNames: Object(external_lodash_["castArray"])(variationNames),
    blockName
  };
}
/**
 * Returns an action object used to set the default block name.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */

function setDefaultBlockName(name) {
  return {
    type: 'SET_DEFAULT_BLOCK_NAME',
    name
  };
}
/**
 * Returns an action object used to set the name of the block used as a fallback
 * for non-block content.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */

function setFreeformFallbackBlockName(name) {
  return {
    type: 'SET_FREEFORM_FALLBACK_BLOCK_NAME',
    name
  };
}
/**
 * Returns an action object used to set the name of the block used as a fallback
 * for unregistered blocks.
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */

function setUnregisteredFallbackBlockName(name) {
  return {
    type: 'SET_UNREGISTERED_FALLBACK_BLOCK_NAME',
    name
  };
}
/**
 * Returns an action object used to set the name of the block used
 * when grouping other blocks
 * eg: in "Group/Ungroup" interactions
 *
 * @param {string} name Block name.
 *
 * @return {Object} Action object.
 */

function setGroupingBlockName(name) {
  return {
    type: 'SET_GROUPING_BLOCK_NAME',
    name
  };
}
/**
 * Returns an action object used to set block categories.
 *
 * @param {Object[]} categories Block categories.
 *
 * @return {Object} Action object.
 */

function setCategories(categories) {
  return {
    type: 'SET_CATEGORIES',
    categories
  };
}
/**
 * Returns an action object used to update a category.
 *
 * @param {string} slug     Block category slug.
 * @param {Object} category Object containing the category properties that should be updated.
 *
 * @return {Object} Action object.
 */

function updateCategory(slug, category) {
  return {
    type: 'UPDATE_CATEGORY',
    slug,
    category
  };
}
/**
 * Returns an action object used to add block collections
 *
 * @param {string} namespace       The namespace of the blocks to put in the collection
 * @param {string} title           The title to display in the block inserter
 * @param {Object} icon (optional) The icon to display in the block inserter
 *
 * @return {Object} Action object.
 */

function addBlockCollection(namespace, title, icon) {
  return {
    type: 'ADD_BLOCK_COLLECTION',
    namespace,
    title,
    icon
  };
}
/**
 * Returns an action object used to remove block collections
 *
 * @param {string} namespace       The namespace of the blocks to put in the collection
 *
 * @return {Object} Action object.
 */

function removeBlockCollection(namespace) {
  return {
    type: 'REMOVE_BLOCK_COLLECTION',
    namespace
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/store/constants.js
const STORE_NAME = 'core/blocks';

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the blocks namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  reducer: reducer,
  selectors: selectors_namespaceObject,
  actions: actions_namespaceObject
});
Object(external_wp_data_["register"])(store);

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__("7Cbv");

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__("g56x");

// EXTERNAL MODULE: external ["wp","deprecated"]
var external_wp_deprecated_ = __webpack_require__("NMb1");
var external_wp_deprecated_default = /*#__PURE__*/__webpack_require__.n(external_wp_deprecated_);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/block-default.js
var block_default = __webpack_require__("//Lo");

// EXTERNAL MODULE: ./node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("Zss7");
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__("GRId");

// EXTERNAL MODULE: external ["wp","dom"]
var external_wp_dom_ = __webpack_require__("1CF3");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/utils.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Array of icon colors containing a color to be used if the icon color
 * was not explicitly set but the icon background color was.
 *
 * @type {Object}
 */

const ICON_COLORS = ['#191e23', '#f8f9f9'];
/**
 * Determines whether the block is a default block
 * and its attributes are equal to the default attributes
 * which means the block is unmodified.
 *
 * @param  {WPBlock} block Block Object
 *
 * @return {boolean}       Whether the block is an unmodified default block
 */

function isUnmodifiedDefaultBlock(block) {
  const defaultBlockName = registration_getDefaultBlockName();

  if (block.name !== defaultBlockName) {
    return false;
  } // Cache a created default block if no cache exists or the default block
  // name changed.


  if (!isUnmodifiedDefaultBlock.block || isUnmodifiedDefaultBlock.block.name !== defaultBlockName) {
    isUnmodifiedDefaultBlock.block = createBlock(defaultBlockName);
  }

  const newDefaultBlock = isUnmodifiedDefaultBlock.block;
  const blockType = registration_getBlockType(defaultBlockName);
  return Object(external_lodash_["every"])(blockType.attributes, (value, key) => newDefaultBlock.attributes[key] === block.attributes[key]);
}
/**
 * Function that checks if the parameter is a valid icon.
 *
 * @param {*} icon  Parameter to be checked.
 *
 * @return {boolean} True if the parameter is a valid icon and false otherwise.
 */

function isValidIcon(icon) {
  return !!icon && (Object(external_lodash_["isString"])(icon) || Object(external_wp_element_["isValidElement"])(icon) || Object(external_lodash_["isFunction"])(icon) || icon instanceof external_wp_element_["Component"]);
}
/**
 * Function that receives an icon as set by the blocks during the registration
 * and returns a new icon object that is normalized so we can rely on just on possible icon structure
 * in the codebase.
 *
 * @param {WPBlockTypeIconRender} icon Render behavior of a block type icon;
 *                                     one of a Dashicon slug, an element, or a
 *                                     component.
 *
 * @return {WPBlockTypeIconDescriptor} Object describing the icon.
 */

function normalizeIconObject(icon) {
  if (isValidIcon(icon)) {
    return {
      src: icon
    };
  }

  if (Object(external_lodash_["has"])(icon, ['background'])) {
    const tinyBgColor = tinycolor_default()(icon.background);
    return { ...icon,
      foreground: icon.foreground ? icon.foreground : Object(tinycolor["mostReadable"])(tinyBgColor, ICON_COLORS, {
        includeFallbackColors: true,
        level: 'AA',
        size: 'large'
      }).toHexString(),
      shadowColor: tinyBgColor.setAlpha(0.3).toRgbString()
    };
  }

  return icon;
}
/**
 * Normalizes block type passed as param. When string is passed then
 * it converts it to the matching block type object.
 * It passes the original object otherwise.
 *
 * @param {string|Object} blockTypeOrName  Block type or name.
 *
 * @return {?Object} Block type.
 */

function normalizeBlockType(blockTypeOrName) {
  if (Object(external_lodash_["isString"])(blockTypeOrName)) {
    return registration_getBlockType(blockTypeOrName);
  }

  return blockTypeOrName;
}
/**
 * Get the label for the block, usually this is either the block title,
 * or the value of the block's `label` function when that's specified.
 *
 * @param {Object} blockType  The block type.
 * @param {Object} attributes The values of the block's attributes.
 * @param {Object} context    The intended use for the label.
 *
 * @return {string} The block label.
 */

function getBlockLabel(blockType, attributes, context = 'visual') {
  const {
    __experimentalLabel: getLabel,
    title
  } = blockType;
  const label = getLabel && getLabel(attributes, {
    context
  });

  if (!label) {
    return title;
  } // Strip any HTML (i.e. RichText formatting) before returning.


  return Object(external_wp_dom_["__unstableStripHTML"])(label);
}
/**
 * Get a label for the block for use by screenreaders, this is more descriptive
 * than the visual label and includes the block title and the value of the
 * `getLabel` function if it's specified.
 *
 * @param {Object}  blockType              The block type.
 * @param {Object}  attributes             The values of the block's attributes.
 * @param {?number} position               The position of the block in the block list.
 * @param {string}  [direction='vertical'] The direction of the block layout.
 *
 * @return {string} The block label.
 */

function getAccessibleBlockLabel(blockType, attributes, position, direction = 'vertical') {
  // `title` is already localized, `label` is a user-supplied value.
  const {
    title
  } = blockType;
  const label = getBlockLabel(blockType, attributes, 'accessibility');
  const hasPosition = position !== undefined; // getBlockLabel returns the block title as a fallback when there's no label,
  // if it did return the title, this function needs to avoid adding the
  // title twice within the accessible label. Use this `hasLabel` boolean to
  // handle that.

  const hasLabel = label && label !== title;

  if (hasPosition && direction === 'vertical') {
    if (hasLabel) {
      return Object(external_wp_i18n_["sprintf"])(
      /* translators: accessibility text. 1: The block title. 2: The block row number. 3: The block label.. */
      Object(external_wp_i18n_["__"])('%1$s Block. Row %2$d. %3$s'), title, position, label);
    }

    return Object(external_wp_i18n_["sprintf"])(
    /* translators: accessibility text. 1: The block title. 2: The block row number. */
    Object(external_wp_i18n_["__"])('%1$s Block. Row %2$d'), title, position);
  } else if (hasPosition && direction === 'horizontal') {
    if (hasLabel) {
      return Object(external_wp_i18n_["sprintf"])(
      /* translators: accessibility text. 1: The block title. 2: The block column number. 3: The block label.. */
      Object(external_wp_i18n_["__"])('%1$s Block. Column %2$d. %3$s'), title, position, label);
    }

    return Object(external_wp_i18n_["sprintf"])(
    /* translators: accessibility text. 1: The block title. 2: The block column number. */
    Object(external_wp_i18n_["__"])('%1$s Block. Column %2$d'), title, position);
  }

  if (hasLabel) {
    return Object(external_wp_i18n_["sprintf"])(
    /* translators: accessibility text. %1: The block title. %2: The block label. */
    Object(external_wp_i18n_["__"])('%1$s Block. %2$s'), title, label);
  }

  return Object(external_wp_i18n_["sprintf"])(
  /* translators: accessibility text. %s: The block title. */
  Object(external_wp_i18n_["__"])('%s Block'), title);
}
/**
 * Ensure attributes contains only values defined by block type, and merge
 * default values for missing attributes.
 *
 * @param {string} name       The block's name.
 * @param {Object} attributes The block's attributes.
 * @return {Object} The sanitized attributes.
 */

function __experimentalSanitizeBlockAttributes(name, attributes) {
  // Get the type definition associated with a registered block.
  const blockType = registration_getBlockType(name);

  if (undefined === blockType) {
    throw new Error(`Block type '${name}' is not registered.`);
  }

  return Object(external_lodash_["reduce"])(blockType.attributes, (accumulator, schema, key) => {
    const value = attributes[key];

    if (undefined !== value) {
      accumulator[key] = value;
    } else if (schema.hasOwnProperty('default')) {
      accumulator[key] = schema.default;
    }

    if (['node', 'children'].indexOf(schema.source) !== -1) {
      // Ensure value passed is always an array, which we're expecting in
      // the RichText component to handle the deprecated value.
      if (typeof accumulator[key] === 'string') {
        accumulator[key] = [accumulator[key]];
      } else if (!Array.isArray(accumulator[key])) {
        accumulator[key] = [];
      }
    }

    return accumulator;
  }, {});
}
/**
 * Filter block attributes by `role` and return their names.
 *
 * @param {string} name Block attribute's name.
 * @param {string} role The role of a block attribute.
 *
 * @return {string[]} The attribute names that have the provided role.
 */

function __experimentalGetBlockAttributesNamesByRole(name, role) {
  var _getBlockType;

  const attributes = (_getBlockType = registration_getBlockType(name)) === null || _getBlockType === void 0 ? void 0 : _getBlockType.attributes;
  if (!attributes) return [];
  const attributesNames = Object.keys(attributes);
  if (!role) return attributesNames;
  return attributesNames.filter(attributeName => {
    var _attributes$attribute;

    return ((_attributes$attribute = attributes[attributeName]) === null || _attributes$attribute === void 0 ? void 0 : _attributes$attribute.__experimentalRole) === role;
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/constants.js
/**
 * Array of valid keys in a block type settings deprecation object.
 *
 * @type {string[]}
 */
const DEPRECATED_ENTRY_KEYS = ['attributes', 'supports', 'save', 'migrate', 'isEligible', 'apiVersion'];
const __EXPERIMENTAL_STYLE_PROPERTY = {
  //kept for back-compatibility purposes.
  '--wp--style--color--link': {
    value: ['color', 'link'],
    support: ['color', 'link']
  },
  background: {
    value: ['color', 'gradient'],
    support: ['color', 'gradients']
  },
  backgroundColor: {
    value: ['color', 'background'],
    support: ['color']
  },
  borderColor: {
    value: ['border', 'color'],
    support: ['__experimentalBorder', 'color']
  },
  borderRadius: {
    value: ['border', 'radius'],
    support: ['__experimentalBorder', 'radius']
  },
  borderStyle: {
    value: ['border', 'style'],
    support: ['__experimentalBorder', 'style']
  },
  borderWidth: {
    value: ['border', 'width'],
    support: ['__experimentalBorder', 'width']
  },
  color: {
    value: ['color', 'text'],
    support: ['color']
  },
  linkColor: {
    value: ['elements', 'link', 'color', 'text'],
    support: ['color', 'link']
  },
  fontFamily: {
    value: ['typography', 'fontFamily'],
    support: ['typography', '__experimentalFontFamily']
  },
  fontSize: {
    value: ['typography', 'fontSize'],
    support: ['typography', 'fontSize']
  },
  fontStyle: {
    value: ['typography', 'fontStyle'],
    support: ['typography', '__experimentalFontStyle']
  },
  fontWeight: {
    value: ['typography', 'fontWeight'],
    support: ['typography', '__experimentalFontWeight']
  },
  lineHeight: {
    value: ['typography', 'lineHeight'],
    support: ['typography', 'lineHeight']
  },
  margin: {
    value: ['spacing', 'margin'],
    support: ['spacing', 'margin'],
    properties: ['top', 'right', 'bottom', 'left']
  },
  padding: {
    value: ['spacing', 'padding'],
    support: ['spacing', 'padding'],
    properties: ['top', 'right', 'bottom', 'left']
  },
  textDecoration: {
    value: ['typography', 'textDecoration'],
    support: ['typography', '__experimentalTextDecoration']
  },
  textTransform: {
    value: ['typography', 'textTransform'],
    support: ['typography', '__experimentalTextTransform']
  }
};
const __EXPERIMENTAL_ELEMENTS = {
  link: 'a',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/registration.js
/* eslint no-console: [ 'error', { allow: [ 'error', 'warn' ] } ] */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */

const i18nBlockSchema = {
  title: "block title",
  description: "block description",
  keywords: ["block keyword"],
  styles: [{
    label: "block style label"
  }],
  variations: [{
    title: "block variation title",
    description: "block variation description",
    keywords: ["block variation keyword"]
  }]
};



/**
 * An icon type definition. One of a Dashicon slug, an element,
 * or a component.
 *
 * @typedef {(string|WPElement|WPComponent)} WPIcon
 *
 * @see https://developer.wordpress.org/resource/dashicons/
 */

/**
 * Render behavior of a block type icon; one of a Dashicon slug, an element,
 * or a component.
 *
 * @typedef {WPIcon} WPBlockTypeIconRender
 */

/**
 * An object describing a normalized block type icon.
 *
 * @typedef {Object} WPBlockTypeIconDescriptor
 *
 * @property {WPBlockTypeIconRender} src         Render behavior of the icon,
 *                                               one of a Dashicon slug, an
 *                                               element, or a component.
 * @property {string}                background  Optimal background hex string
 *                                               color when displaying icon.
 * @property {string}                foreground  Optimal foreground hex string
 *                                               color when displaying icon.
 * @property {string}                shadowColor Optimal shadow hex string
 *                                               color when displaying icon.
 */

/**
 * Value to use to render the icon for a block type in an editor interface,
 * either a Dashicon slug, an element, a component, or an object describing
 * the icon.
 *
 * @typedef {(WPBlockTypeIconDescriptor|WPBlockTypeIconRender)} WPBlockTypeIcon
 */

/**
 * Named block variation scopes.
 *
 * @typedef {'block'|'inserter'|'transform'} WPBlockVariationScope
 */

/**
 * An object describing a variation defined for the block type.
 *
 * @typedef {Object} WPBlockVariation
 *
 * @property {string}   name                   The unique and machine-readable name.
 * @property {string}   title                  A human-readable variation title.
 * @property {string}   [description]          A detailed variation description.
 * @property {string}   [category]             Block type category classification,
 *                                             used in search interfaces to arrange
 *                                             block types by category.
 * @property {WPIcon}   [icon]                 An icon helping to visualize the variation.
 * @property {boolean}  [isDefault]            Indicates whether the current variation is
 *                                             the default one. Defaults to `false`.
 * @property {Object}   [attributes]           Values which override block attributes.
 * @property {Array[]}  [innerBlocks]          Initial configuration of nested blocks.
 * @property {Object}   [example]              Example provides structured data for
 *                                             the block preview. You can set to
 *                                             `undefined` to disable the preview shown
 *                                             for the block type.
 * @property {WPBlockVariationScope[]} [scope] The list of scopes where the variation
 *                                             is applicable. When not provided, it
 *                                             assumes all available scopes.
 * @property {string[]} [keywords]             An array of terms (which can be translated)
 *                                             that help users discover the variation
 *                                             while searching.
 * @property {Function|string[]} [isActive]    This can be a function or an array of block attributes.
 *                                             Function that accepts a block's attributes and the
 *                                             variation's attributes and determines if a variation is active.
 *                                             This function doesn't try to find a match dynamically based
 *                                             on all block's attributes, as in many cases some attributes are irrelevant.
 *                                             An example would be for `embed` block where we only care
 *                                             about `providerNameSlug` attribute's value.
 *                                             We can also use a `string[]` to tell which attributes
 *                                             should be compared as a shorthand. Each attributes will
 *                                             be matched and the variation will be active if all of them are matching.
 */

/**
 * Defined behavior of a block type.
 *
 * @typedef {Object} WPBlock
 *
 * @property {string}             name          Block type's namespaced name.
 * @property {string}             title         Human-readable block type label.
 * @property {string}             [description] A detailed block type description.
 * @property {string}             [category]    Block type category classification,
 *                                              used in search interfaces to arrange
 *                                              block types by category.
 * @property {WPBlockTypeIcon}    [icon]        Block type icon.
 * @property {string[]}           [keywords]    Additional keywords to produce block
 *                                              type as result in search interfaces.
 * @property {Object}             [attributes]  Block type attributes.
 * @property {WPComponent}        [save]        Optional component describing
 *                                              serialized markup structure of a
 *                                              block type.
 * @property {WPComponent}        edit          Component rendering an element to
 *                                              manipulate the attributes of a block
 *                                              in the context of an editor.
 * @property {WPBlockVariation[]} [variations]  The list of block variations.
 * @property {Object}             [example]     Example provides structured data for
 *                                              the block preview. When not defined
 *                                              then no preview is shown.
 */

/**
 * Mapping of legacy category slugs to their latest normal values, used to
 * accommodate updates of the default set of block categories.
 *
 * @type {Record<string,string>}
 */

const LEGACY_CATEGORY_MAPPING = {
  common: 'text',
  formatting: 'text',
  layout: 'design'
};
const serverSideBlockDefinitions = {};
/**
 * Sets the server side block definition of blocks.
 *
 * @param {Object} definitions Server-side block definitions
 */
// eslint-disable-next-line camelcase

function unstable__bootstrapServerSideBlockDefinitions(definitions) {
  for (const blockName of Object.keys(definitions)) {
    // Don't overwrite if already set. It covers the case when metadata
    // was initialized from the server.
    if (serverSideBlockDefinitions[blockName]) {
      // We still need to polyfill `apiVersion` for WordPress version
      // lower than 5.7. If it isn't present in the definition shared
      // from the server, we try to fallback to the definition passed.
      // @see https://github.com/WordPress/gutenberg/pull/29279
      if (serverSideBlockDefinitions[blockName].apiVersion === undefined && definitions[blockName].apiVersion) {
        serverSideBlockDefinitions[blockName].apiVersion = definitions[blockName].apiVersion;
      }

      continue;
    }

    serverSideBlockDefinitions[blockName] = Object(external_lodash_["mapKeys"])(Object(external_lodash_["pickBy"])(definitions[blockName], value => !Object(external_lodash_["isNil"])(value)), (value, key) => Object(external_lodash_["camelCase"])(key));
  }
}
/**
 * Gets block settings from metadata loaded from `block.json` file.
 *
 * @param {Object} metadata            Block metadata loaded from `block.json`.
 * @param {string} metadata.textdomain Textdomain to use with translations.
 *
 * @return {Object} Block settings.
 */

function getBlockSettingsFromMetadata({
  textdomain,
  ...metadata
}) {
  const allowedFields = ['apiVersion', 'title', 'category', 'parent', 'icon', 'description', 'keywords', 'attributes', 'providesContext', 'usesContext', 'supports', 'styles', 'example', 'variations'];
  const settings = Object(external_lodash_["pick"])(metadata, allowedFields);

  if (textdomain) {
    Object.keys(i18nBlockSchema).forEach(key => {
      if (!settings[key]) {
        return;
      }

      settings[key] = translateBlockSettingUsingI18nSchema(i18nBlockSchema[key], settings[key], textdomain);
    });
  }

  return settings;
}
/**
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param {string|Object} blockNameOrMetadata Block type name or its metadata.
 * @param {Object}        settings            Block settings.
 *
 * @return {?WPBlock} The block, if it has been successfully registered;
 *                    otherwise `undefined`.
 */


function registerBlockType(blockNameOrMetadata, settings) {
  const name = Object(external_lodash_["isObject"])(blockNameOrMetadata) ? blockNameOrMetadata.name : blockNameOrMetadata;

  if (typeof name !== 'string') {
    console.error('Block names must be strings.');
    return;
  }

  if (Object(external_lodash_["isObject"])(blockNameOrMetadata)) {
    unstable__bootstrapServerSideBlockDefinitions({
      [name]: getBlockSettingsFromMetadata(blockNameOrMetadata)
    });
  }

  settings = {
    name,
    icon: block_default["a" /* default */],
    keywords: [],
    attributes: {},
    providesContext: {},
    usesContext: [],
    supports: {},
    styles: [],
    save: () => null,
    ...(serverSideBlockDefinitions === null || serverSideBlockDefinitions === void 0 ? void 0 : serverSideBlockDefinitions[name]),
    ...settings
  };

  if (!/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(name)) {
    console.error('Block names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-block');
    return;
  }

  if (Object(external_wp_data_["select"])(store).getBlockType(name)) {
    console.error('Block "' + name + '" is already registered.');
    return;
  }

  const preFilterSettings = { ...settings
  };
  settings = Object(external_wp_hooks_["applyFilters"])('blocks.registerBlockType', settings, name);

  if (settings.deprecated) {
    settings.deprecated = settings.deprecated.map(deprecation => Object(external_lodash_["pick"])( // Only keep valid deprecation keys.
    Object(external_wp_hooks_["applyFilters"])('blocks.registerBlockType', // Merge deprecation keys with pre-filter settings
    // so that filters that depend on specific keys being
    // present don't fail.
    { // Omit deprecation keys here so that deprecations
      // can opt out of specific keys like "supports".
      ...Object(external_lodash_["omit"])(preFilterSettings, DEPRECATED_ENTRY_KEYS),
      ...deprecation
    }, name), DEPRECATED_ENTRY_KEYS));
  }

  if (!Object(external_lodash_["isPlainObject"])(settings)) {
    console.error('Block settings must be a valid object.');
    return;
  }

  if (!Object(external_lodash_["isFunction"])(settings.save)) {
    console.error('The "save" property must be a valid function.');
    return;
  }

  if ('edit' in settings && !Object(external_lodash_["isFunction"])(settings.edit)) {
    console.error('The "edit" property must be a valid function.');
    return;
  } // Canonicalize legacy categories to equivalent fallback.


  if (LEGACY_CATEGORY_MAPPING.hasOwnProperty(settings.category)) {
    settings.category = LEGACY_CATEGORY_MAPPING[settings.category];
  }

  if ('category' in settings && !Object(external_lodash_["some"])(Object(external_wp_data_["select"])(store).getCategories(), {
    slug: settings.category
  })) {
    console.warn('The block "' + name + '" is registered with an invalid category "' + settings.category + '".');
    delete settings.category;
  }

  if (!('title' in settings) || settings.title === '') {
    console.error('The block "' + name + '" must have a title.');
    return;
  }

  if (typeof settings.title !== 'string') {
    console.error('Block titles must be strings.');
    return;
  }

  settings.icon = normalizeIconObject(settings.icon);

  if (!isValidIcon(settings.icon.src)) {
    console.error('The icon passed is invalid. ' + 'The icon should be a string, an element, a function, or an object following the specifications documented in https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#icon-optional');
    return;
  }

  Object(external_wp_data_["dispatch"])(store).addBlockTypes(settings);
  return settings;
}
/**
 * Translates block settings provided with metadata using the i18n schema.
 *
 * @param {string|string[]|Object[]} i18nSchema    I18n schema for the block setting.
 * @param {string|string[]|Object[]} settingValue  Value for the block setting.
 * @param {string}                   textdomain    Textdomain to use with translations.
 *
 * @return {string|string[]|Object[]} Translated setting.
 */

function translateBlockSettingUsingI18nSchema(i18nSchema, settingValue, textdomain) {
  if (Object(external_lodash_["isString"])(i18nSchema) && Object(external_lodash_["isString"])(settingValue)) {
    // eslint-disable-next-line @wordpress/i18n-no-variables, @wordpress/i18n-text-domain
    return Object(external_wp_i18n_["_x"])(settingValue, i18nSchema, textdomain);
  }

  if (Object(external_lodash_["isArray"])(i18nSchema) && !Object(external_lodash_["isEmpty"])(i18nSchema) && Object(external_lodash_["isArray"])(settingValue)) {
    return settingValue.map(value => translateBlockSettingUsingI18nSchema(i18nSchema[0], value, textdomain));
  }

  if (Object(external_lodash_["isObject"])(i18nSchema) && !Object(external_lodash_["isEmpty"])(i18nSchema) && Object(external_lodash_["isObject"])(settingValue)) {
    return Object.keys(settingValue).reduce((accumulator, key) => {
      if (!i18nSchema[key]) {
        accumulator[key] = settingValue[key];
        return accumulator;
      }

      accumulator[key] = translateBlockSettingUsingI18nSchema(i18nSchema[key], settingValue[key], textdomain);
      return accumulator;
    }, {});
  }

  return settingValue;
}
/**
 * Registers a new block provided from metadata stored in `block.json` file.
 *
 * @deprecated Use `registerBlockType` instead.
 *
 * @param {Object} metadata            Block metadata loaded from `block.json`.
 * @param {Object} additionalSettings  Additional block settings.
 *
 * @return {?WPBlock} The block, if it has been successfully registered;
 *                    otherwise `undefined`.
 */


function registerBlockTypeFromMetadata(metadata, additionalSettings) {
  external_wp_deprecated_default()('wp.blocks.registerBlockTypeFromMetadata', {
    since: '10.7',
    plugin: 'Gutenberg',
    alternative: 'wp.blocks.registerBlockType',
    version: '11.0'
  });
  return registerBlockType(metadata, additionalSettings);
}
/**
 * Registers a new block collection to group blocks in the same namespace in the inserter.
 *
 * @param {string} namespace       The namespace to group blocks by in the inserter; corresponds to the block namespace.
 * @param {Object} settings        The block collection settings.
 * @param {string} settings.title  The title to display in the block inserter.
 * @param {Object} [settings.icon] The icon to display in the block inserter.
 */

function registerBlockCollection(namespace, {
  title,
  icon
}) {
  Object(external_wp_data_["dispatch"])(store).addBlockCollection(namespace, title, icon);
}
/**
 * Unregisters a block collection
 *
 * @param {string} namespace The namespace to group blocks by in the inserter; corresponds to the block namespace
 *
 */

function unregisterBlockCollection(namespace) {
  Object(external_wp_data_["dispatch"])(store).removeBlockCollection(namespace);
}
/**
 * Unregisters a block.
 *
 * @param {string} name Block name.
 *
 * @return {?WPBlock} The previous block value, if it has been successfully
 *                    unregistered; otherwise `undefined`.
 */

function unregisterBlockType(name) {
  const oldBlock = Object(external_wp_data_["select"])(store).getBlockType(name);

  if (!oldBlock) {
    console.error('Block "' + name + '" is not registered.');
    return;
  }

  Object(external_wp_data_["dispatch"])(store).removeBlockTypes(name);
  return oldBlock;
}
/**
 * Assigns name of block for handling non-block content.
 *
 * @param {string} blockName Block name.
 */

function setFreeformContentHandlerName(blockName) {
  Object(external_wp_data_["dispatch"])(store).setFreeformFallbackBlockName(blockName);
}
/**
 * Retrieves name of block handling non-block content, or undefined if no
 * handler has been defined.
 *
 * @return {?string} Block name.
 */

function getFreeformContentHandlerName() {
  return Object(external_wp_data_["select"])(store).getFreeformFallbackBlockName();
}
/**
 * Retrieves name of block used for handling grouping interactions.
 *
 * @return {?string} Block name.
 */

function registration_getGroupingBlockName() {
  return Object(external_wp_data_["select"])(store).getGroupingBlockName();
}
/**
 * Assigns name of block handling unregistered block types.
 *
 * @param {string} blockName Block name.
 */

function setUnregisteredTypeHandlerName(blockName) {
  Object(external_wp_data_["dispatch"])(store).setUnregisteredFallbackBlockName(blockName);
}
/**
 * Retrieves name of block handling unregistered block types, or undefined if no
 * handler has been defined.
 *
 * @return {?string} Block name.
 */

function getUnregisteredTypeHandlerName() {
  return Object(external_wp_data_["select"])(store).getUnregisteredFallbackBlockName();
}
/**
 * Assigns the default block name.
 *
 * @param {string} name Block name.
 */

function registration_setDefaultBlockName(name) {
  Object(external_wp_data_["dispatch"])(store).setDefaultBlockName(name);
}
/**
 * Assigns name of block for handling block grouping interactions.
 *
 * @param {string} name Block name.
 */

function registration_setGroupingBlockName(name) {
  Object(external_wp_data_["dispatch"])(store).setGroupingBlockName(name);
}
/**
 * Retrieves the default block name.
 *
 * @return {?string} Block name.
 */

function registration_getDefaultBlockName() {
  return Object(external_wp_data_["select"])(store).getDefaultBlockName();
}
/**
 * Returns a registered block type.
 *
 * @param {string} name Block name.
 *
 * @return {?Object} Block type.
 */

function registration_getBlockType(name) {
  return Object(external_wp_data_["select"])(store).getBlockType(name);
}
/**
 * Returns all registered blocks.
 *
 * @return {Array} Block settings.
 */

function registration_getBlockTypes() {
  return Object(external_wp_data_["select"])(store).getBlockTypes();
}
/**
 * Returns the block support value for a feature, if defined.
 *
 * @param  {(string|Object)} nameOrType      Block name or type object
 * @param  {string}          feature         Feature to retrieve
 * @param  {*}               defaultSupports Default value to return if not
 *                                           explicitly defined
 *
 * @return {?*} Block support value
 */

function registration_getBlockSupport(nameOrType, feature, defaultSupports) {
  return Object(external_wp_data_["select"])(store).getBlockSupport(nameOrType, feature, defaultSupports);
}
/**
 * Returns true if the block defines support for a feature, or false otherwise.
 *
 * @param {(string|Object)} nameOrType      Block name or type object.
 * @param {string}          feature         Feature to test.
 * @param {boolean}         defaultSupports Whether feature is supported by
 *                                          default if not explicitly defined.
 *
 * @return {boolean} Whether block supports feature.
 */

function registration_hasBlockSupport(nameOrType, feature, defaultSupports) {
  return Object(external_wp_data_["select"])(store).hasBlockSupport(nameOrType, feature, defaultSupports);
}
/**
 * Determines whether or not the given block is a reusable block. This is a
 * special block type that is used to point to a global block stored via the
 * API.
 *
 * @param {Object} blockOrType Block or Block Type to test.
 *
 * @return {boolean} Whether the given block is a reusable block.
 */

function isReusableBlock(blockOrType) {
  return blockOrType.name === 'core/block';
}
/**
 * Determines whether or not the given block is a template part. This is a
 * special block type that allows composing a page template out of reusable
 * design elements.
 *
 * @param {Object} blockOrType Block or Block Type to test.
 *
 * @return {boolean} Whether the given block is a template part.
 */

function isTemplatePart(blockOrType) {
  return blockOrType.name === 'core/template-part';
}
/**
 * Returns an array with the child blocks of a given block.
 *
 * @param {string} blockName Name of block (example: “latest-posts”).
 *
 * @return {Array} Array of child block names.
 */

const registration_getChildBlockNames = blockName => {
  return Object(external_wp_data_["select"])(store).getChildBlockNames(blockName);
};
/**
 * Returns a boolean indicating if a block has child blocks or not.
 *
 * @param {string} blockName Name of block (example: “latest-posts”).
 *
 * @return {boolean} True if a block contains child blocks and false otherwise.
 */

const registration_hasChildBlocks = blockName => {
  return Object(external_wp_data_["select"])(store).hasChildBlocks(blockName);
};
/**
 * Returns a boolean indicating if a block has at least one child block with inserter support.
 *
 * @param {string} blockName Block type name.
 *
 * @return {boolean} True if a block contains at least one child blocks with inserter support
 *                   and false otherwise.
 */

const registration_hasChildBlocksWithInserterSupport = blockName => {
  return Object(external_wp_data_["select"])(store).hasChildBlocksWithInserterSupport(blockName);
};
/**
 * Registers a new block style variation for the given block.
 *
 * @param {string} blockName      Name of block (example: “core/latest-posts”).
 * @param {Object} styleVariation Object containing `name` which is the class name applied to the block and `label` which identifies the variation to the user.
 */

const registerBlockStyle = (blockName, styleVariation) => {
  Object(external_wp_data_["dispatch"])(store).addBlockStyles(blockName, styleVariation);
};
/**
 * Unregisters a block style variation for the given block.
 *
 * @param {string} blockName          Name of block (example: “core/latest-posts”).
 * @param {string} styleVariationName Name of class applied to the block.
 */

const unregisterBlockStyle = (blockName, styleVariationName) => {
  Object(external_wp_data_["dispatch"])(store).removeBlockStyles(blockName, styleVariationName);
};
/**
 * Returns an array with the variations of a given block type.
 *
 * @param {string}                blockName Name of block (example: “core/columns”).
 * @param {WPBlockVariationScope} [scope]   Block variation scope name.
 *
 * @return {(WPBlockVariation[]|void)} Block variations.
 */

const registration_getBlockVariations = (blockName, scope) => {
  return Object(external_wp_data_["select"])(store).getBlockVariations(blockName, scope);
};
/**
 * Registers a new block variation for the given block type.
 *
 * @param {string}           blockName Name of the block (example: “core/columns”).
 * @param {WPBlockVariation} variation Object describing a block variation.
 */

const registerBlockVariation = (blockName, variation) => {
  Object(external_wp_data_["dispatch"])(store).addBlockVariations(blockName, variation);
};
/**
 * Unregisters a block variation defined for the given block type.
 *
 * @param {string} blockName     Name of the block (example: “core/columns”).
 * @param {string} variationName Name of the variation defined for the block.
 */

const unregisterBlockVariation = (blockName, variationName) => {
  Object(external_wp_data_["dispatch"])(store).removeBlockVariations(blockName, variationName);
};

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/factory.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Returns a block object given its type and attributes.
 *
 * @param {string} name        Block name.
 * @param {Object} attributes  Block attributes.
 * @param {?Array} innerBlocks Nested blocks.
 *
 * @return {Object} Block object.
 */

function createBlock(name, attributes = {}, innerBlocks = []) {
  const sanitizedAttributes = __experimentalSanitizeBlockAttributes(name, attributes);

  const clientId = Object(v4["a" /* default */])(); // Blocks are stored with a unique ID, the assigned type name, the block
  // attributes, and their inner blocks.

  return {
    clientId,
    name,
    isValid: true,
    attributes: sanitizedAttributes,
    innerBlocks
  };
}
/**
 * Given an array of InnerBlocks templates or Block Objects,
 * returns an array of created Blocks from them.
 * It handles the case of having InnerBlocks as Blocks by
 * converting them to the proper format to continue recursively.
 *
 * @param {Array} innerBlocksOrTemplate Nested blocks or InnerBlocks templates.
 *
 * @return {Object[]} Array of Block objects.
 */

function createBlocksFromInnerBlocksTemplate(innerBlocksOrTemplate = []) {
  return innerBlocksOrTemplate.map(innerBlock => {
    const innerBlockTemplate = Array.isArray(innerBlock) ? innerBlock : [innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks];
    const [name, attributes, innerBlocks = []] = innerBlockTemplate;
    return createBlock(name, attributes, createBlocksFromInnerBlocksTemplate(innerBlocks));
  });
}
/**
 * Given a block object, returns a copy of the block object while sanitizing its attributes,
 * optionally merging new attributes and/or replacing its inner blocks.
 *
 * @param {Object} block              Block instance.
 * @param {Object} mergeAttributes    Block attributes.
 * @param {?Array} newInnerBlocks     Nested blocks.
 *
 * @return {Object} A cloned block.
 */

function __experimentalCloneSanitizedBlock(block, mergeAttributes = {}, newInnerBlocks) {
  const clientId = Object(v4["a" /* default */])();

  const sanitizedAttributes = __experimentalSanitizeBlockAttributes(block.name, { ...block.attributes,
    ...mergeAttributes
  });

  return { ...block,
    clientId,
    attributes: sanitizedAttributes,
    innerBlocks: newInnerBlocks || block.innerBlocks.map(innerBlock => __experimentalCloneSanitizedBlock(innerBlock))
  };
}
/**
 * Given a block object, returns a copy of the block object,
 * optionally merging new attributes and/or replacing its inner blocks.
 *
 * @param {Object} block              Block instance.
 * @param {Object} mergeAttributes    Block attributes.
 * @param {?Array} newInnerBlocks     Nested blocks.
 *
 * @return {Object} A cloned block.
 */

function cloneBlock(block, mergeAttributes = {}, newInnerBlocks) {
  const clientId = Object(v4["a" /* default */])();
  return { ...block,
    clientId,
    attributes: { ...block.attributes,
      ...mergeAttributes
    },
    innerBlocks: newInnerBlocks || block.innerBlocks.map(innerBlock => cloneBlock(innerBlock))
  };
}
/**
 * Returns a boolean indicating whether a transform is possible based on
 * various bits of context.
 *
 * @param {Object} transform The transform object to validate.
 * @param {string} direction Is this a 'from' or 'to' transform.
 * @param {Array} blocks The blocks to transform from.
 *
 * @return {boolean} Is the transform possible?
 */

const isPossibleTransformForSource = (transform, direction, blocks) => {
  if (Object(external_lodash_["isEmpty"])(blocks)) {
    return false;
  } // If multiple blocks are selected, only multi block transforms
  // or wildcard transforms are allowed.


  const isMultiBlock = blocks.length > 1;
  const firstBlockName = Object(external_lodash_["first"])(blocks).name;
  const isValidForMultiBlocks = isWildcardBlockTransform(transform) || !isMultiBlock || transform.isMultiBlock;

  if (!isValidForMultiBlocks) {
    return false;
  } // Check non-wildcard transforms to ensure that transform is valid
  // for a block selection of multiple blocks of different types


  if (!isWildcardBlockTransform(transform) && !Object(external_lodash_["every"])(blocks, {
    name: firstBlockName
  })) {
    return false;
  } // Only consider 'block' type transforms as valid.


  const isBlockType = transform.type === 'block';

  if (!isBlockType) {
    return false;
  } // Check if the transform's block name matches the source block (or is a wildcard)
  // only if this is a transform 'from'.


  const sourceBlock = Object(external_lodash_["first"])(blocks);
  const hasMatchingName = direction !== 'from' || transform.blocks.indexOf(sourceBlock.name) !== -1 || isWildcardBlockTransform(transform);

  if (!hasMatchingName) {
    return false;
  } // Don't allow single Grouping blocks to be transformed into
  // a Grouping block.


  if (!isMultiBlock && isContainerGroupBlock(sourceBlock.name) && isContainerGroupBlock(transform.blockName)) {
    return false;
  } // If the transform has a `isMatch` function specified, check that it returns true.


  if (Object(external_lodash_["isFunction"])(transform.isMatch)) {
    const attributes = transform.isMultiBlock ? blocks.map(block => block.attributes) : sourceBlock.attributes;

    if (!transform.isMatch(attributes)) {
      return false;
    }
  }

  if (transform.usingMobileTransformations && isWildcardBlockTransform(transform) && !isContainerGroupBlock(sourceBlock.name)) {
    return false;
  }

  return true;
};
/**
 * Returns block types that the 'blocks' can be transformed into, based on
 * 'from' transforms on other blocks.
 *
 * @param {Array}  blocks  The blocks to transform from.
 *
 * @return {Array} Block types that the blocks can be transformed into.
 */


const getBlockTypesForPossibleFromTransforms = blocks => {
  if (Object(external_lodash_["isEmpty"])(blocks)) {
    return [];
  }

  const allBlockTypes = registration_getBlockTypes(); // filter all blocks to find those with a 'from' transform.

  const blockTypesWithPossibleFromTransforms = Object(external_lodash_["filter"])(allBlockTypes, blockType => {
    const fromTransforms = getBlockTransforms('from', blockType.name);
    return !!findTransform(fromTransforms, transform => {
      return isPossibleTransformForSource(transform, 'from', blocks);
    });
  });
  return blockTypesWithPossibleFromTransforms;
};
/**
 * Returns block types that the 'blocks' can be transformed into, based on
 * the source block's own 'to' transforms.
 *
 * @param {Array} blocks The blocks to transform from.
 *
 * @return {Array} Block types that the source can be transformed into.
 */


const getBlockTypesForPossibleToTransforms = blocks => {
  if (Object(external_lodash_["isEmpty"])(blocks)) {
    return [];
  }

  const sourceBlock = Object(external_lodash_["first"])(blocks);
  const blockType = registration_getBlockType(sourceBlock.name);
  const transformsTo = getBlockTransforms('to', blockType.name); // filter all 'to' transforms to find those that are possible.

  const possibleTransforms = Object(external_lodash_["filter"])(transformsTo, transform => {
    return transform && isPossibleTransformForSource(transform, 'to', blocks);
  }); // Build a list of block names using the possible 'to' transforms.

  const blockNames = Object(external_lodash_["flatMap"])(possibleTransforms, transformation => transformation.blocks); // Map block names to block types.

  return blockNames.map(name => registration_getBlockType(name));
};
/**
 * Determines whether transform is a "block" type
 * and if so whether it is a "wildcard" transform
 * ie: targets "any" block type
 *
 * @param {Object} t the Block transform object
 *
 * @return {boolean} whether transform is a wildcard transform
 */


const isWildcardBlockTransform = t => t && t.type === 'block' && Array.isArray(t.blocks) && t.blocks.includes('*');
/**
 * Determines whether the given Block is the core Block which
 * acts as a container Block for other Blocks as part of the
 * Grouping mechanics
 *
 * @param  {string} name the name of the Block to test against
 *
 * @return {boolean} whether or not the Block is the container Block type
 */

const isContainerGroupBlock = name => name === registration_getGroupingBlockName();
/**
 * Returns an array of block types that the set of blocks received as argument
 * can be transformed into.
 *
 * @param {Array} blocks Blocks array.
 *
 * @return {Array} Block types that the blocks argument can be transformed to.
 */

function getPossibleBlockTransformations(blocks) {
  if (Object(external_lodash_["isEmpty"])(blocks)) {
    return [];
  }

  const blockTypesForFromTransforms = getBlockTypesForPossibleFromTransforms(blocks);
  const blockTypesForToTransforms = getBlockTypesForPossibleToTransforms(blocks);
  return Object(external_lodash_["uniq"])([...blockTypesForFromTransforms, ...blockTypesForToTransforms]);
}
/**
 * Given an array of transforms, returns the highest-priority transform where
 * the predicate function returns a truthy value. A higher-priority transform
 * is one with a lower priority value (i.e. first in priority order). Returns
 * null if the transforms set is empty or the predicate function returns a
 * falsey value for all entries.
 *
 * @param {Object[]} transforms Transforms to search.
 * @param {Function} predicate  Function returning true on matching transform.
 *
 * @return {?Object} Highest-priority transform candidate.
 */

function findTransform(transforms, predicate) {
  // The hooks library already has built-in mechanisms for managing priority
  // queue, so leverage via locally-defined instance.
  const hooks = Object(external_wp_hooks_["createHooks"])();

  for (let i = 0; i < transforms.length; i++) {
    const candidate = transforms[i];

    if (predicate(candidate)) {
      hooks.addFilter('transform', 'transform/' + i.toString(), result => result ? result : candidate, candidate.priority);
    }
  } // Filter name is arbitrarily chosen but consistent with above aggregation.


  return hooks.applyFilters('transform', null);
}
/**
 * Returns normal block transforms for a given transform direction, optionally
 * for a specific block by name, or an empty array if there are no transforms.
 * If no block name is provided, returns transforms for all blocks. A normal
 * transform object includes `blockName` as a property.
 *
 * @param {string}  direction Transform direction ("to", "from").
 * @param {string|Object} blockTypeOrName  Block type or name.
 *
 * @return {Array} Block transforms for direction.
 */

function getBlockTransforms(direction, blockTypeOrName) {
  // When retrieving transforms for all block types, recurse into self.
  if (blockTypeOrName === undefined) {
    return Object(external_lodash_["flatMap"])(registration_getBlockTypes(), ({
      name
    }) => getBlockTransforms(direction, name));
  } // Validate that block type exists and has array of direction.


  const blockType = normalizeBlockType(blockTypeOrName);
  const {
    name: blockName,
    transforms
  } = blockType || {};

  if (!transforms || !Array.isArray(transforms[direction])) {
    return [];
  }

  const usingMobileTransformations = transforms.supportedMobileTransforms && Array.isArray(transforms.supportedMobileTransforms);
  const filteredTransforms = usingMobileTransformations ? Object(external_lodash_["filter"])(transforms[direction], t => {
    if (t.type === 'raw') {
      return true;
    }

    if (!t.blocks || !t.blocks.length) {
      return false;
    }

    if (isWildcardBlockTransform(t)) {
      return true;
    }

    return Object(external_lodash_["every"])(t.blocks, transformBlockName => transforms.supportedMobileTransforms.includes(transformBlockName));
  }) : transforms[direction]; // Map transforms to normal form.

  return filteredTransforms.map(transform => ({ ...transform,
    blockName,
    usingMobileTransformations
  }));
}
/**
 * Switch one or more blocks into one or more blocks of the new block type.
 *
 * @param {Array|Object} blocks Blocks array or block object.
 * @param {string}       name   Block name.
 *
 * @return {?Array} Array of blocks or null.
 */

function switchToBlockType(blocks, name) {
  const blocksArray = Object(external_lodash_["castArray"])(blocks);
  const isMultiBlock = blocksArray.length > 1;
  const firstBlock = blocksArray[0];
  const sourceName = firstBlock.name; // Find the right transformation by giving priority to the "to"
  // transformation.

  const transformationsFrom = getBlockTransforms('from', name);
  const transformationsTo = getBlockTransforms('to', sourceName);
  const transformation = findTransform(transformationsTo, t => t.type === 'block' && (isWildcardBlockTransform(t) || t.blocks.indexOf(name) !== -1) && (!isMultiBlock || t.isMultiBlock)) || findTransform(transformationsFrom, t => t.type === 'block' && (isWildcardBlockTransform(t) || t.blocks.indexOf(sourceName) !== -1) && (!isMultiBlock || t.isMultiBlock)); // Stop if there is no valid transformation.

  if (!transformation) {
    return null;
  }

  let transformationResults;

  if (transformation.isMultiBlock) {
    if (Object(external_lodash_["has"])(transformation, '__experimentalConvert')) {
      transformationResults = transformation.__experimentalConvert(blocksArray);
    } else {
      transformationResults = transformation.transform(blocksArray.map(currentBlock => currentBlock.attributes), blocksArray.map(currentBlock => currentBlock.innerBlocks));
    }
  } else if (Object(external_lodash_["has"])(transformation, '__experimentalConvert')) {
    transformationResults = transformation.__experimentalConvert(firstBlock);
  } else {
    transformationResults = transformation.transform(firstBlock.attributes, firstBlock.innerBlocks);
  } // Ensure that the transformation function returned an object or an array
  // of objects.


  if (!Object(external_lodash_["isObjectLike"])(transformationResults)) {
    return null;
  } // If the transformation function returned a single object, we want to work
  // with an array instead.


  transformationResults = Object(external_lodash_["castArray"])(transformationResults); // Ensure that every block object returned by the transformation has a
  // valid block type.

  if (transformationResults.some(result => !registration_getBlockType(result.name))) {
    return null;
  }

  const hasSwitchedBlock = Object(external_lodash_["some"])(transformationResults, result => result.name === name); // Ensure that at least one block object returned by the transformation has
  // the expected "destination" block type.

  if (!hasSwitchedBlock) {
    return null;
  }

  const ret = transformationResults.map(result => {
    /**
     * Filters an individual transform result from block transformation.
     * All of the original blocks are passed, since transformations are
     * many-to-many, not one-to-one.
     *
     * @param {Object}   transformedBlock The transformed block.
     * @param {Object[]} blocks           Original blocks transformed.
     */
    return Object(external_wp_hooks_["applyFilters"])('blocks.switchToBlockType.transformedBlock', result, blocks);
  });
  return ret;
}
/**
 * Create a block object from the example API.
 *
 * @param {string} name
 * @param {Object} example
 *
 * @return {Object} block.
 */

const getBlockFromExample = (name, example) => {
  return createBlock(name, example.attributes, Object(external_lodash_["map"])(example.innerBlocks, innerBlock => getBlockFromExample(innerBlock.name, innerBlock)));
};

// CONCATENATED MODULE: ./node_modules/hpq/es/get-path.js
/**
 * Given object and string of dot-delimited path segments, returns value at
 * path or undefined if path cannot be resolved.
 *
 * @param  {Object} object Lookup object
 * @param  {string} path   Path to resolve
 * @return {?*}            Resolved value
 */
function getPath(object, path) {
  var segments = path.split('.');
  var segment;

  while (segment = segments.shift()) {
    if (!(segment in object)) {
      return;
    }

    object = object[segment];
  }

  return object;
}
// CONCATENATED MODULE: ./node_modules/hpq/es/index.js
/**
 * Internal dependencies
 */

/**
 * Function returning a DOM document created by `createHTMLDocument`. The same
 * document is returned between invocations.
 *
 * @return {Document} DOM document.
 */

var getDocument = function () {
  var doc;
  return function () {
    if (!doc) {
      doc = document.implementation.createHTMLDocument('');
    }

    return doc;
  };
}();
/**
 * Given a markup string or DOM element, creates an object aligning with the
 * shape of the matchers object, or the value returned by the matcher.
 *
 * @param  {(string|Element)}  source   Source content
 * @param  {(Object|Function)} matchers Matcher function or object of matchers
 * @return {(Object|*)}                 Matched value(s), shaped by object
 */


function parse(source, matchers) {
  if (!matchers) {
    return;
  } // Coerce to element


  if ('string' === typeof source) {
    var doc = getDocument();
    doc.body.innerHTML = source;
    source = doc.body;
  } // Return singular value


  if ('function' === typeof matchers) {
    return matchers(source);
  } // Bail if we can't handle matchers


  if (Object !== matchers.constructor) {
    return;
  } // Shape result by matcher object


  return Object.keys(matchers).reduce(function (memo, key) {
    memo[key] = parse(source, matchers[key]);
    return memo;
  }, {});
}
/**
 * Generates a function which matches node of type selector, returning an
 * attribute by property if the attribute exists. If no selector is passed,
 * returns property of the query element.
 *
 * @param  {?string} selector Optional selector
 * @param  {string}  name     Property name
 * @return {*}                Property value
 */

function prop(selector, name) {
  if (1 === arguments.length) {
    name = selector;
    selector = undefined;
  }

  return function (node) {
    var match = node;

    if (selector) {
      match = node.querySelector(selector);
    }

    if (match) {
      return getPath(match, name);
    }
  };
}
/**
 * Generates a function which matches node of type selector, returning an
 * attribute by name if the attribute exists. If no selector is passed,
 * returns attribute of the query element.
 *
 * @param  {?string} selector Optional selector
 * @param  {string}  name     Attribute name
 * @return {?string}          Attribute value
 */

function attr(selector, name) {
  if (1 === arguments.length) {
    name = selector;
    selector = undefined;
  }

  return function (node) {
    var attributes = prop(selector, 'attributes')(node);

    if (attributes && attributes.hasOwnProperty(name)) {
      return attributes[name].value;
    }
  };
}
/**
 * Convenience for `prop( selector, 'innerHTML' )`.
 *
 * @see prop()
 *
 * @param  {?string} selector Optional selector
 * @return {string}           Inner HTML
 */

function es_html(selector) {
  return prop(selector, 'innerHTML');
}
/**
 * Convenience for `prop( selector, 'textContent' )`.
 *
 * @see prop()
 *
 * @param  {?string} selector Optional selector
 * @return {string}           Text content
 */

function es_text(selector) {
  return prop(selector, 'textContent');
}
/**
 * Creates a new matching context by first finding elements matching selector
 * using querySelectorAll before then running another `parse` on `matchers`
 * scoped to the matched elements.
 *
 * @see parse()
 *
 * @param  {string}            selector Selector to match
 * @param  {(Object|Function)} matchers Matcher function or object of matchers
 * @return {Array.<*,Object>}           Array of matched value(s)
 */

function query(selector, matchers) {
  return function (node) {
    var matches = node.querySelectorAll(selector);
    return [].map.call(matches, function (match) {
      return parse(match, matchers);
    });
  };
}
// EXTERNAL MODULE: external ["wp","autop"]
var external_wp_autop_ = __webpack_require__("UuzZ");

// EXTERNAL MODULE: external ["wp","blockSerializationDefaultParser"]
var external_wp_blockSerializationDefaultParser_ = __webpack_require__("ouCq");

// CONCATENATED MODULE: ./node_modules/simple-html-tokenizer/dist/es6/index.js
/**
 * generated from https://raw.githubusercontent.com/w3c/html/26b5126f96f736f796b9e29718138919dd513744/entities.json
 * do not edit
 */
var namedCharRefs = {
    Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "\u2061", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "\u2061", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "\u2063", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "\u2062", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "\u200e", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\u000a", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "\u2060", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: "\"", QUOT: "\"", rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "\u200f", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "\u00ad", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "\u0009", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "\u200d", zwnj: "\u200c"
};

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE = /^#([0-9]+)$/;
var NAMED = /^([A-Za-z0-9]+)$/;
var EntityParser = /** @class */ (function () {
    function EntityParser(named) {
        this.named = named;
    }
    EntityParser.prototype.parse = function (entity) {
        if (!entity) {
            return;
        }
        var matches = entity.match(HEXCHARCODE);
        if (matches) {
            return String.fromCharCode(parseInt(matches[1], 16));
        }
        matches = entity.match(CHARCODE);
        if (matches) {
            return String.fromCharCode(parseInt(matches[1], 10));
        }
        matches = entity.match(NAMED);
        if (matches) {
            return this.named[matches[1]];
        }
    };
    return EntityParser;
}());

var WSP = /[\t\n\f ]/;
var ALPHA = /[A-Za-z]/;
var CRLF = /\r\n?/g;
function isSpace(char) {
    return WSP.test(char);
}
function isAlpha(char) {
    return ALPHA.test(char);
}
function preprocessInput(input) {
    return input.replace(CRLF, '\n');
}

var EventedTokenizer = /** @class */ (function () {
    function EventedTokenizer(delegate, entityParser, mode) {
        if (mode === void 0) { mode = 'precompile'; }
        this.delegate = delegate;
        this.entityParser = entityParser;
        this.mode = mode;
        this.state = "beforeData" /* beforeData */;
        this.line = -1;
        this.column = -1;
        this.input = '';
        this.index = -1;
        this.tagNameBuffer = '';
        this.states = {
            beforeData: function () {
                var char = this.peek();
                if (char === '<' && !this.isIgnoredEndTag()) {
                    this.transitionTo("tagOpen" /* tagOpen */);
                    this.markTagStart();
                    this.consume();
                }
                else {
                    if (this.mode === 'precompile' && char === '\n') {
                        var tag = this.tagNameBuffer.toLowerCase();
                        if (tag === 'pre' || tag === 'textarea') {
                            this.consume();
                        }
                    }
                    this.transitionTo("data" /* data */);
                    this.delegate.beginData();
                }
            },
            data: function () {
                var char = this.peek();
                var tag = this.tagNameBuffer;
                if (char === '<' && !this.isIgnoredEndTag()) {
                    this.delegate.finishData();
                    this.transitionTo("tagOpen" /* tagOpen */);
                    this.markTagStart();
                    this.consume();
                }
                else if (char === '&' && tag !== 'script' && tag !== 'style') {
                    this.consume();
                    this.delegate.appendToData(this.consumeCharRef() || '&');
                }
                else {
                    this.consume();
                    this.delegate.appendToData(char);
                }
            },
            tagOpen: function () {
                var char = this.consume();
                if (char === '!') {
                    this.transitionTo("markupDeclarationOpen" /* markupDeclarationOpen */);
                }
                else if (char === '/') {
                    this.transitionTo("endTagOpen" /* endTagOpen */);
                }
                else if (char === '@' || char === ':' || isAlpha(char)) {
                    this.transitionTo("tagName" /* tagName */);
                    this.tagNameBuffer = '';
                    this.delegate.beginStartTag();
                    this.appendToTagName(char);
                }
            },
            markupDeclarationOpen: function () {
                var char = this.consume();
                if (char === '-' && this.peek() === '-') {
                    this.consume();
                    this.transitionTo("commentStart" /* commentStart */);
                    this.delegate.beginComment();
                }
                else {
                    var maybeDoctype = char.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase();
                    if (maybeDoctype === 'DOCTYPE') {
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                        this.transitionTo("doctype" /* doctype */);
                        if (this.delegate.beginDoctype)
                            this.delegate.beginDoctype();
                    }
                }
            },
            doctype: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    this.transitionTo("beforeDoctypeName" /* beforeDoctypeName */);
                }
            },
            beforeDoctypeName: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    return;
                }
                else {
                    this.transitionTo("doctypeName" /* doctypeName */);
                    if (this.delegate.appendToDoctypeName)
                        this.delegate.appendToDoctypeName(char.toLowerCase());
                }
            },
            doctypeName: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    this.transitionTo("afterDoctypeName" /* afterDoctypeName */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    if (this.delegate.appendToDoctypeName)
                        this.delegate.appendToDoctypeName(char.toLowerCase());
                }
            },
            afterDoctypeName: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    return;
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    var nextSixChars = char.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase();
                    var isPublic = nextSixChars.toUpperCase() === 'PUBLIC';
                    var isSystem = nextSixChars.toUpperCase() === 'SYSTEM';
                    if (isPublic || isSystem) {
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                        this.consume();
                    }
                    if (isPublic) {
                        this.transitionTo("afterDoctypePublicKeyword" /* afterDoctypePublicKeyword */);
                    }
                    else if (isSystem) {
                        this.transitionTo("afterDoctypeSystemKeyword" /* afterDoctypeSystemKeyword */);
                    }
                }
            },
            afterDoctypePublicKeyword: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.transitionTo("beforeDoctypePublicIdentifier" /* beforeDoctypePublicIdentifier */);
                    this.consume();
                }
                else if (char === '"') {
                    this.transitionTo("doctypePublicIdentifierDoubleQuoted" /* doctypePublicIdentifierDoubleQuoted */);
                    this.consume();
                }
                else if (char === "'") {
                    this.transitionTo("doctypePublicIdentifierSingleQuoted" /* doctypePublicIdentifierSingleQuoted */);
                    this.consume();
                }
                else if (char === '>') {
                    this.consume();
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
            },
            doctypePublicIdentifierDoubleQuoted: function () {
                var char = this.consume();
                if (char === '"') {
                    this.transitionTo("afterDoctypePublicIdentifier" /* afterDoctypePublicIdentifier */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    if (this.delegate.appendToDoctypePublicIdentifier)
                        this.delegate.appendToDoctypePublicIdentifier(char);
                }
            },
            doctypePublicIdentifierSingleQuoted: function () {
                var char = this.consume();
                if (char === "'") {
                    this.transitionTo("afterDoctypePublicIdentifier" /* afterDoctypePublicIdentifier */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    if (this.delegate.appendToDoctypePublicIdentifier)
                        this.delegate.appendToDoctypePublicIdentifier(char);
                }
            },
            afterDoctypePublicIdentifier: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    this.transitionTo("betweenDoctypePublicAndSystemIdentifiers" /* betweenDoctypePublicAndSystemIdentifiers */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else if (char === '"') {
                    this.transitionTo("doctypeSystemIdentifierDoubleQuoted" /* doctypeSystemIdentifierDoubleQuoted */);
                }
                else if (char === "'") {
                    this.transitionTo("doctypeSystemIdentifierSingleQuoted" /* doctypeSystemIdentifierSingleQuoted */);
                }
            },
            betweenDoctypePublicAndSystemIdentifiers: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    return;
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else if (char === '"') {
                    this.transitionTo("doctypeSystemIdentifierDoubleQuoted" /* doctypeSystemIdentifierDoubleQuoted */);
                }
                else if (char === "'") {
                    this.transitionTo("doctypeSystemIdentifierSingleQuoted" /* doctypeSystemIdentifierSingleQuoted */);
                }
            },
            doctypeSystemIdentifierDoubleQuoted: function () {
                var char = this.consume();
                if (char === '"') {
                    this.transitionTo("afterDoctypeSystemIdentifier" /* afterDoctypeSystemIdentifier */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    if (this.delegate.appendToDoctypeSystemIdentifier)
                        this.delegate.appendToDoctypeSystemIdentifier(char);
                }
            },
            doctypeSystemIdentifierSingleQuoted: function () {
                var char = this.consume();
                if (char === "'") {
                    this.transitionTo("afterDoctypeSystemIdentifier" /* afterDoctypeSystemIdentifier */);
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    if (this.delegate.appendToDoctypeSystemIdentifier)
                        this.delegate.appendToDoctypeSystemIdentifier(char);
                }
            },
            afterDoctypeSystemIdentifier: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    return;
                }
                else if (char === '>') {
                    if (this.delegate.endDoctype)
                        this.delegate.endDoctype();
                    this.transitionTo("beforeData" /* beforeData */);
                }
            },
            commentStart: function () {
                var char = this.consume();
                if (char === '-') {
                    this.transitionTo("commentStartDash" /* commentStartDash */);
                }
                else if (char === '>') {
                    this.delegate.finishComment();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.delegate.appendToCommentData(char);
                    this.transitionTo("comment" /* comment */);
                }
            },
            commentStartDash: function () {
                var char = this.consume();
                if (char === '-') {
                    this.transitionTo("commentEnd" /* commentEnd */);
                }
                else if (char === '>') {
                    this.delegate.finishComment();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.delegate.appendToCommentData('-');
                    this.transitionTo("comment" /* comment */);
                }
            },
            comment: function () {
                var char = this.consume();
                if (char === '-') {
                    this.transitionTo("commentEndDash" /* commentEndDash */);
                }
                else {
                    this.delegate.appendToCommentData(char);
                }
            },
            commentEndDash: function () {
                var char = this.consume();
                if (char === '-') {
                    this.transitionTo("commentEnd" /* commentEnd */);
                }
                else {
                    this.delegate.appendToCommentData('-' + char);
                    this.transitionTo("comment" /* comment */);
                }
            },
            commentEnd: function () {
                var char = this.consume();
                if (char === '>') {
                    this.delegate.finishComment();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.delegate.appendToCommentData('--' + char);
                    this.transitionTo("comment" /* comment */);
                }
            },
            tagName: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                }
                else if (char === '/') {
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                }
                else if (char === '>') {
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.appendToTagName(char);
                }
            },
            endTagName: function () {
                var char = this.consume();
                if (isSpace(char)) {
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                    this.tagNameBuffer = '';
                }
                else if (char === '/') {
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                    this.tagNameBuffer = '';
                }
                else if (char === '>') {
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                    this.tagNameBuffer = '';
                }
                else {
                    this.appendToTagName(char);
                }
            },
            beforeAttributeName: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.consume();
                    return;
                }
                else if (char === '/') {
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                    this.consume();
                }
                else if (char === '>') {
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else if (char === '=') {
                    this.delegate.reportSyntaxError('attribute name cannot start with equals sign');
                    this.transitionTo("attributeName" /* attributeName */);
                    this.delegate.beginAttribute();
                    this.consume();
                    this.delegate.appendToAttributeName(char);
                }
                else {
                    this.transitionTo("attributeName" /* attributeName */);
                    this.delegate.beginAttribute();
                }
            },
            attributeName: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.transitionTo("afterAttributeName" /* afterAttributeName */);
                    this.consume();
                }
                else if (char === '/') {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                }
                else if (char === '=') {
                    this.transitionTo("beforeAttributeValue" /* beforeAttributeValue */);
                    this.consume();
                }
                else if (char === '>') {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else if (char === '"' || char === "'" || char === '<') {
                    this.delegate.reportSyntaxError(char + ' is not a valid character within attribute names');
                    this.consume();
                    this.delegate.appendToAttributeName(char);
                }
                else {
                    this.consume();
                    this.delegate.appendToAttributeName(char);
                }
            },
            afterAttributeName: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.consume();
                    return;
                }
                else if (char === '/') {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                }
                else if (char === '=') {
                    this.consume();
                    this.transitionTo("beforeAttributeValue" /* beforeAttributeValue */);
                }
                else if (char === '>') {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.transitionTo("attributeName" /* attributeName */);
                    this.delegate.beginAttribute();
                    this.consume();
                    this.delegate.appendToAttributeName(char);
                }
            },
            beforeAttributeValue: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.consume();
                }
                else if (char === '"') {
                    this.transitionTo("attributeValueDoubleQuoted" /* attributeValueDoubleQuoted */);
                    this.delegate.beginAttributeValue(true);
                    this.consume();
                }
                else if (char === "'") {
                    this.transitionTo("attributeValueSingleQuoted" /* attributeValueSingleQuoted */);
                    this.delegate.beginAttributeValue(true);
                    this.consume();
                }
                else if (char === '>') {
                    this.delegate.beginAttributeValue(false);
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.transitionTo("attributeValueUnquoted" /* attributeValueUnquoted */);
                    this.delegate.beginAttributeValue(false);
                    this.consume();
                    this.delegate.appendToAttributeValue(char);
                }
            },
            attributeValueDoubleQuoted: function () {
                var char = this.consume();
                if (char === '"') {
                    this.delegate.finishAttributeValue();
                    this.transitionTo("afterAttributeValueQuoted" /* afterAttributeValueQuoted */);
                }
                else if (char === '&') {
                    this.delegate.appendToAttributeValue(this.consumeCharRef() || '&');
                }
                else {
                    this.delegate.appendToAttributeValue(char);
                }
            },
            attributeValueSingleQuoted: function () {
                var char = this.consume();
                if (char === "'") {
                    this.delegate.finishAttributeValue();
                    this.transitionTo("afterAttributeValueQuoted" /* afterAttributeValueQuoted */);
                }
                else if (char === '&') {
                    this.delegate.appendToAttributeValue(this.consumeCharRef() || '&');
                }
                else {
                    this.delegate.appendToAttributeValue(char);
                }
            },
            attributeValueUnquoted: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                }
                else if (char === '/') {
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                }
                else if (char === '&') {
                    this.consume();
                    this.delegate.appendToAttributeValue(this.consumeCharRef() || '&');
                }
                else if (char === '>') {
                    this.delegate.finishAttributeValue();
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.consume();
                    this.delegate.appendToAttributeValue(char);
                }
            },
            afterAttributeValueQuoted: function () {
                var char = this.peek();
                if (isSpace(char)) {
                    this.consume();
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                }
                else if (char === '/') {
                    this.consume();
                    this.transitionTo("selfClosingStartTag" /* selfClosingStartTag */);
                }
                else if (char === '>') {
                    this.consume();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                }
            },
            selfClosingStartTag: function () {
                var char = this.peek();
                if (char === '>') {
                    this.consume();
                    this.delegate.markTagAsSelfClosing();
                    this.delegate.finishTag();
                    this.transitionTo("beforeData" /* beforeData */);
                }
                else {
                    this.transitionTo("beforeAttributeName" /* beforeAttributeName */);
                }
            },
            endTagOpen: function () {
                var char = this.consume();
                if (char === '@' || char === ':' || isAlpha(char)) {
                    this.transitionTo("endTagName" /* endTagName */);
                    this.tagNameBuffer = '';
                    this.delegate.beginEndTag();
                    this.appendToTagName(char);
                }
            }
        };
        this.reset();
    }
    EventedTokenizer.prototype.reset = function () {
        this.transitionTo("beforeData" /* beforeData */);
        this.input = '';
        this.tagNameBuffer = '';
        this.index = 0;
        this.line = 1;
        this.column = 0;
        this.delegate.reset();
    };
    EventedTokenizer.prototype.transitionTo = function (state) {
        this.state = state;
    };
    EventedTokenizer.prototype.tokenize = function (input) {
        this.reset();
        this.tokenizePart(input);
        this.tokenizeEOF();
    };
    EventedTokenizer.prototype.tokenizePart = function (input) {
        this.input += preprocessInput(input);
        while (this.index < this.input.length) {
            var handler = this.states[this.state];
            if (handler !== undefined) {
                handler.call(this);
            }
            else {
                throw new Error("unhandled state " + this.state);
            }
        }
    };
    EventedTokenizer.prototype.tokenizeEOF = function () {
        this.flushData();
    };
    EventedTokenizer.prototype.flushData = function () {
        if (this.state === 'data') {
            this.delegate.finishData();
            this.transitionTo("beforeData" /* beforeData */);
        }
    };
    EventedTokenizer.prototype.peek = function () {
        return this.input.charAt(this.index);
    };
    EventedTokenizer.prototype.consume = function () {
        var char = this.peek();
        this.index++;
        if (char === '\n') {
            this.line++;
            this.column = 0;
        }
        else {
            this.column++;
        }
        return char;
    };
    EventedTokenizer.prototype.consumeCharRef = function () {
        var endIndex = this.input.indexOf(';', this.index);
        if (endIndex === -1) {
            return;
        }
        var entity = this.input.slice(this.index, endIndex);
        var chars = this.entityParser.parse(entity);
        if (chars) {
            var count = entity.length;
            // consume the entity chars
            while (count) {
                this.consume();
                count--;
            }
            // consume the `;`
            this.consume();
            return chars;
        }
    };
    EventedTokenizer.prototype.markTagStart = function () {
        this.delegate.tagOpen();
    };
    EventedTokenizer.prototype.appendToTagName = function (char) {
        this.tagNameBuffer += char;
        this.delegate.appendToTagName(char);
    };
    EventedTokenizer.prototype.isIgnoredEndTag = function () {
        var tag = this.tagNameBuffer;
        return (tag === 'title' && this.input.substring(this.index, this.index + 8) !== '</title>') ||
            (tag === 'style' && this.input.substring(this.index, this.index + 8) !== '</style>') ||
            (tag === 'script' && this.input.substring(this.index, this.index + 9) !== '</script>');
    };
    return EventedTokenizer;
}());

var Tokenizer = /** @class */ (function () {
    function Tokenizer(entityParser, options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.token = null;
        this.startLine = 1;
        this.startColumn = 0;
        this.tokens = [];
        this.tokenizer = new EventedTokenizer(this, entityParser, options.mode);
        this._currentAttribute = undefined;
    }
    Tokenizer.prototype.tokenize = function (input) {
        this.tokens = [];
        this.tokenizer.tokenize(input);
        return this.tokens;
    };
    Tokenizer.prototype.tokenizePart = function (input) {
        this.tokens = [];
        this.tokenizer.tokenizePart(input);
        return this.tokens;
    };
    Tokenizer.prototype.tokenizeEOF = function () {
        this.tokens = [];
        this.tokenizer.tokenizeEOF();
        return this.tokens[0];
    };
    Tokenizer.prototype.reset = function () {
        this.token = null;
        this.startLine = 1;
        this.startColumn = 0;
    };
    Tokenizer.prototype.current = function () {
        var token = this.token;
        if (token === null) {
            throw new Error('token was unexpectedly null');
        }
        if (arguments.length === 0) {
            return token;
        }
        for (var i = 0; i < arguments.length; i++) {
            if (token.type === arguments[i]) {
                return token;
            }
        }
        throw new Error("token type was unexpectedly " + token.type);
    };
    Tokenizer.prototype.push = function (token) {
        this.token = token;
        this.tokens.push(token);
    };
    Tokenizer.prototype.currentAttribute = function () {
        return this._currentAttribute;
    };
    Tokenizer.prototype.addLocInfo = function () {
        if (this.options.loc) {
            this.current().loc = {
                start: {
                    line: this.startLine,
                    column: this.startColumn
                },
                end: {
                    line: this.tokenizer.line,
                    column: this.tokenizer.column
                }
            };
        }
        this.startLine = this.tokenizer.line;
        this.startColumn = this.tokenizer.column;
    };
    // Data
    Tokenizer.prototype.beginDoctype = function () {
        this.push({
            type: "Doctype" /* Doctype */,
            name: '',
        });
    };
    Tokenizer.prototype.appendToDoctypeName = function (char) {
        this.current("Doctype" /* Doctype */).name += char;
    };
    Tokenizer.prototype.appendToDoctypePublicIdentifier = function (char) {
        var doctype = this.current("Doctype" /* Doctype */);
        if (doctype.publicIdentifier === undefined) {
            doctype.publicIdentifier = char;
        }
        else {
            doctype.publicIdentifier += char;
        }
    };
    Tokenizer.prototype.appendToDoctypeSystemIdentifier = function (char) {
        var doctype = this.current("Doctype" /* Doctype */);
        if (doctype.systemIdentifier === undefined) {
            doctype.systemIdentifier = char;
        }
        else {
            doctype.systemIdentifier += char;
        }
    };
    Tokenizer.prototype.endDoctype = function () {
        this.addLocInfo();
    };
    Tokenizer.prototype.beginData = function () {
        this.push({
            type: "Chars" /* Chars */,
            chars: ''
        });
    };
    Tokenizer.prototype.appendToData = function (char) {
        this.current("Chars" /* Chars */).chars += char;
    };
    Tokenizer.prototype.finishData = function () {
        this.addLocInfo();
    };
    // Comment
    Tokenizer.prototype.beginComment = function () {
        this.push({
            type: "Comment" /* Comment */,
            chars: ''
        });
    };
    Tokenizer.prototype.appendToCommentData = function (char) {
        this.current("Comment" /* Comment */).chars += char;
    };
    Tokenizer.prototype.finishComment = function () {
        this.addLocInfo();
    };
    // Tags - basic
    Tokenizer.prototype.tagOpen = function () { };
    Tokenizer.prototype.beginStartTag = function () {
        this.push({
            type: "StartTag" /* StartTag */,
            tagName: '',
            attributes: [],
            selfClosing: false
        });
    };
    Tokenizer.prototype.beginEndTag = function () {
        this.push({
            type: "EndTag" /* EndTag */,
            tagName: ''
        });
    };
    Tokenizer.prototype.finishTag = function () {
        this.addLocInfo();
    };
    Tokenizer.prototype.markTagAsSelfClosing = function () {
        this.current("StartTag" /* StartTag */).selfClosing = true;
    };
    // Tags - name
    Tokenizer.prototype.appendToTagName = function (char) {
        this.current("StartTag" /* StartTag */, "EndTag" /* EndTag */).tagName += char;
    };
    // Tags - attributes
    Tokenizer.prototype.beginAttribute = function () {
        this._currentAttribute = ['', '', false];
    };
    Tokenizer.prototype.appendToAttributeName = function (char) {
        this.currentAttribute()[0] += char;
    };
    Tokenizer.prototype.beginAttributeValue = function (isQuoted) {
        this.currentAttribute()[2] = isQuoted;
    };
    Tokenizer.prototype.appendToAttributeValue = function (char) {
        this.currentAttribute()[1] += char;
    };
    Tokenizer.prototype.finishAttributeValue = function () {
        this.current("StartTag" /* StartTag */).attributes.push(this._currentAttribute);
    };
    Tokenizer.prototype.reportSyntaxError = function (message) {
        this.current().syntaxError = message;
    };
    return Tokenizer;
}());

function tokenize(input, options) {
    var tokenizer = new Tokenizer(new EntityParser(namedCharRefs), options);
    return tokenizer.tokenize(input);
}



// EXTERNAL MODULE: external ["wp","htmlEntities"]
var external_wp_htmlEntities_ = __webpack_require__("rmEH");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/validation/logger.js
function createLogger() {
  /**
   * Creates a log handler with block validation prefix.
   *
   * @param {Function} logger Original logger function.
   *
   * @return {Function} Augmented logger function.
   */
  function createLogHandler(logger) {
    let log = (message, ...args) => logger('Block validation: ' + message, ...args); // In test environments, pre-process string substitutions to improve
    // readability of error messages. We'd prefer to avoid pulling in this
    // dependency in runtime environments, and it can be dropped by a combo
    // of Webpack env substitution + UglifyJS dead code elimination.


    if (false) {}

    return log;
  }

  return {
    // eslint-disable-next-line no-console
    error: createLogHandler(console.error),
    // eslint-disable-next-line no-console
    warning: createLogHandler(console.warn),

    getItems() {
      return [];
    }

  };
}
function createQueuedLogger() {
  /**
   * The list of enqueued log actions to print.
   *
   * @type {Array}
   */
  const queue = [];
  const logger = createLogger();
  return {
    error(...args) {
      queue.push({
        log: logger.error,
        args
      });
    },

    warning(...args) {
      queue.push({
        log: logger.warning,
        args
      });
    },

    getItems() {
      return queue;
    }

  };
}

// EXTERNAL MODULE: external ["wp","isShallowEqual"]
var external_wp_isShallowEqual_ = __webpack_require__("rl8x");
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__("K9lf");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/block-content-provider/index.js



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const {
  Consumer,
  Provider
} = Object(external_wp_element_["createContext"])(() => {});
/**
 * An internal block component used in block content serialization to inject
 * nested block content within the `save` implementation of the ancestor
 * component in which it is nested. The component provides a pre-bound
 * `BlockContent` component via context, which is used by the developer-facing
 * `InnerBlocks.Content` component to render block content.
 *
 * @example
 *
 * ```jsx
 * <BlockContentProvider innerBlocks={ innerBlocks }>
 * 	{ blockSaveElement }
 * </BlockContentProvider>
 * ```
 *
 * @param {Object}    props             Component props.
 * @param {WPElement} props.children    Block save result.
 * @param {Array}     props.innerBlocks Block(s) to serialize.
 *
 * @return {WPComponent} Element with BlockContent injected via context.
 */

const BlockContentProvider = ({
  children,
  innerBlocks
}) => {
  const BlockContent = () => {
    // Value is an array of blocks, so defer to block serializer
    const html = serialize(innerBlocks, {
      isInnerBlocks: true
    }); // Use special-cased raw HTML tag to avoid default escaping

    return Object(external_wp_element_["createElement"])(external_wp_element_["RawHTML"], null, html);
  };

  return Object(external_wp_element_["createElement"])(Provider, {
    value: BlockContent
  }, children);
};
/**
 * A Higher Order Component used to inject BlockContent using context to the
 * wrapped component.
 *
 * @return {WPComponent} Enhanced component with injected BlockContent as prop.
 */


const withBlockContentContext = Object(external_wp_compose_["createHigherOrderComponent"])(OriginalComponent => {
  return props => Object(external_wp_element_["createElement"])(Consumer, null, context => Object(external_wp_element_["createElement"])(OriginalComponent, Object(esm_extends["a" /* default */])({}, props, {
    BlockContent: context
  })));
}, 'withBlockContentContext');
/* harmony default export */ var block_content_provider = (BlockContentProvider);

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/serializer.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




/**
 * @typedef {Object} WPBlockSerializationOptions Serialization Options.
 *
 * @property {boolean} isInnerBlocks Whether we are serializing inner blocks.
 */

/**
 * Returns the block's default classname from its name.
 *
 * @param {string} blockName The block name.
 *
 * @return {string} The block's default class.
 */

function getBlockDefaultClassName(blockName) {
  // Generated HTML classes for blocks follow the `wp-block-{name}` nomenclature.
  // Blocks provided by WordPress drop the prefixes 'core/' or 'core-' (historically used in 'core-embed/').
  const className = 'wp-block-' + blockName.replace(/\//, '-').replace(/^core-/, '');
  return Object(external_wp_hooks_["applyFilters"])('blocks.getBlockDefaultClassName', className, blockName);
}
/**
 * Returns the block's default menu item classname from its name.
 *
 * @param {string} blockName The block name.
 *
 * @return {string} The block's default menu item class.
 */

function getBlockMenuDefaultClassName(blockName) {
  // Generated HTML classes for blocks follow the `editor-block-list-item-{name}` nomenclature.
  // Blocks provided by WordPress drop the prefixes 'core/' or 'core-' (historically used in 'core-embed/').
  const className = 'editor-block-list-item-' + blockName.replace(/\//, '-').replace(/^core-/, '');
  return Object(external_wp_hooks_["applyFilters"])('blocks.getBlockMenuDefaultClassName', className, blockName);
}
const blockPropsProvider = {};
/**
 * Call within a save function to get the props for the block wrapper.
 *
 * @param {Object} props Optional. Props to pass to the element.
 */

function getBlockProps(props = {}) {
  const {
    blockType,
    attributes
  } = blockPropsProvider;
  return Object(external_wp_hooks_["applyFilters"])('blocks.getSaveContent.extraProps', { ...props
  }, blockType, attributes);
}
/**
 * Given a block type containing a save render implementation and attributes, returns the
 * enhanced element to be saved or string when raw HTML expected.
 *
 * @param {string|Object} blockTypeOrName   Block type or name.
 * @param {Object}        attributes        Block attributes.
 * @param {?Array}        innerBlocks       Nested blocks.
 *
 * @return {Object|string} Save element or raw HTML string.
 */

function getSaveElement(blockTypeOrName, attributes, innerBlocks = []) {
  const blockType = normalizeBlockType(blockTypeOrName);
  let {
    save
  } = blockType; // Component classes are unsupported for save since serialization must
  // occur synchronously. For improved interoperability with higher-order
  // components which often return component class, emulate basic support.

  if (save.prototype instanceof external_wp_element_["Component"]) {
    const instance = new save({
      attributes
    });
    save = instance.render.bind(instance);
  }

  blockPropsProvider.blockType = blockType;
  blockPropsProvider.attributes = attributes;
  let element = save({
    attributes,
    innerBlocks
  });
  const hasLightBlockWrapper = blockType.apiVersion > 1 || registration_hasBlockSupport(blockType, 'lightBlockWrapper', false);

  if (Object(external_lodash_["isObject"])(element) && Object(external_wp_hooks_["hasFilter"])('blocks.getSaveContent.extraProps') && !hasLightBlockWrapper) {
    /**
     * Filters the props applied to the block save result element.
     *
     * @param {Object}  props      Props applied to save element.
     * @param {WPBlock} blockType  Block type definition.
     * @param {Object}  attributes Block attributes.
     */
    const props = Object(external_wp_hooks_["applyFilters"])('blocks.getSaveContent.extraProps', { ...element.props
    }, blockType, attributes);

    if (!external_wp_isShallowEqual_default()(props, element.props)) {
      element = Object(external_wp_element_["cloneElement"])(element, props);
    }
  }
  /**
   * Filters the save result of a block during serialization.
   *
   * @param {WPElement} element    Block save result.
   * @param {WPBlock}   blockType  Block type definition.
   * @param {Object}    attributes Block attributes.
   */


  element = Object(external_wp_hooks_["applyFilters"])('blocks.getSaveElement', element, blockType, attributes);
  return Object(external_wp_element_["createElement"])(block_content_provider, {
    innerBlocks: innerBlocks
  }, element);
}
/**
 * Given a block type containing a save render implementation and attributes, returns the
 * static markup to be saved.
 *
 * @param {string|Object} blockTypeOrName Block type or name.
 * @param {Object}        attributes      Block attributes.
 * @param {?Array}        innerBlocks     Nested blocks.
 *
 * @return {string} Save content.
 */

function getSaveContent(blockTypeOrName, attributes, innerBlocks) {
  const blockType = normalizeBlockType(blockTypeOrName);
  return Object(external_wp_element_["renderToString"])(getSaveElement(blockType, attributes, innerBlocks));
}
/**
 * Returns attributes which are to be saved and serialized into the block
 * comment delimiter.
 *
 * When a block exists in memory it contains as its attributes both those
 * parsed the block comment delimiter _and_ those which matched from the
 * contents of the block.
 *
 * This function returns only those attributes which are needed to persist and
 * which cannot be matched from the block content.
 *
 * @param {Object<string,*>} blockType     Block type.
 * @param {Object<string,*>} attributes Attributes from in-memory block data.
 *
 * @return {Object<string,*>} Subset of attributes for comment serialization.
 */

function getCommentAttributes(blockType, attributes) {
  return Object(external_lodash_["reduce"])(blockType.attributes, (accumulator, attributeSchema, key) => {
    const value = attributes[key]; // Ignore undefined values.

    if (undefined === value) {
      return accumulator;
    } // Ignore all attributes but the ones with an "undefined" source
    // "undefined" source refers to attributes saved in the block comment.


    if (attributeSchema.source !== undefined) {
      return accumulator;
    } // Ignore default value.


    if ('default' in attributeSchema && attributeSchema.default === value) {
      return accumulator;
    } // Otherwise, include in comment set.


    accumulator[key] = value;
    return accumulator;
  }, {});
}
/**
 * Given an attributes object, returns a string in the serialized attributes
 * format prepared for post content.
 *
 * @param {Object} attributes Attributes object.
 *
 * @return {string} Serialized attributes.
 */

function serializeAttributes(attributes) {
  return JSON.stringify(attributes) // Don't break HTML comments.
  .replace(/--/g, '\\u002d\\u002d') // Don't break non-standard-compliant tools.
  .replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026') // Bypass server stripslashes behavior which would unescape stringify's
  // escaping of quotation mark.
  //
  // See: https://developer.wordpress.org/reference/functions/wp_kses_stripslashes/
  .replace(/\\"/g, '\\u0022');
}
/**
 * Given a block object, returns the Block's Inner HTML markup.
 *
 * @param {Object} block Block instance.
 *
 * @return {string} HTML.
 */

function getBlockInnerHTML(block) {
  // If block was parsed as invalid or encounters an error while generating
  // save content, use original content instead to avoid content loss. If a
  // block contains nested content, exempt it from this condition because we
  // otherwise have no access to its original content and content loss would
  // still occur.
  let saveContent = block.originalContent;

  if (block.isValid || block.innerBlocks.length) {
    try {
      saveContent = getSaveContent(block.name, block.attributes, block.innerBlocks);
    } catch (error) {}
  }

  return saveContent;
}
/**
 * Returns the content of a block, including comment delimiters.
 *
 * @param {string} rawBlockName Block name.
 * @param {Object} attributes   Block attributes.
 * @param {string} content      Block save content.
 *
 * @return {string} Comment-delimited block content.
 */

function getCommentDelimitedContent(rawBlockName, attributes, content) {
  const serializedAttributes = !Object(external_lodash_["isEmpty"])(attributes) ? serializeAttributes(attributes) + ' ' : ''; // Strip core blocks of their namespace prefix.

  const blockName = Object(external_lodash_["startsWith"])(rawBlockName, 'core/') ? rawBlockName.slice(5) : rawBlockName; // @todo make the `wp:` prefix potentially configurable.

  if (!content) {
    return `<!-- wp:${blockName} ${serializedAttributes}/-->`;
  }

  return `<!-- wp:${blockName} ${serializedAttributes}-->\n` + content + `\n<!-- /wp:${blockName} -->`;
}
/**
 * Returns the content of a block, including comment delimiters, determining
 * serialized attributes and content form from the current state of the block.
 *
 * @param {Object}                      block   Block instance.
 * @param {WPBlockSerializationOptions} options Serialization options.
 *
 * @return {string} Serialized block.
 */

function serializeBlock(block, {
  isInnerBlocks = false
} = {}) {
  const blockName = block.name;
  const saveContent = getBlockInnerHTML(block);

  if (blockName === getUnregisteredTypeHandlerName() || !isInnerBlocks && blockName === getFreeformContentHandlerName()) {
    return saveContent;
  }

  const blockType = registration_getBlockType(blockName);
  const saveAttributes = getCommentAttributes(blockType, block.attributes);
  return getCommentDelimitedContent(blockName, saveAttributes, saveContent);
}
function __unstableSerializeAndClean(blocks) {
  // A single unmodified default block is assumed to
  // be equivalent to an empty post.
  if (blocks.length === 1 && isUnmodifiedDefaultBlock(blocks[0])) {
    blocks = [];
  }

  let content = serialize(blocks); // For compatibility, treat a post consisting of a
  // single freeform block as legacy content and apply
  // pre-block-editor removep'd content formatting.

  if (blocks.length === 1 && blocks[0].name === getFreeformContentHandlerName()) {
    content = Object(external_wp_autop_["removep"])(content);
  }

  return content;
}
/**
 * Takes a block or set of blocks and returns the serialized post content.
 *
 * @param {Array}                       blocks  Block(s) to serialize.
 * @param {WPBlockSerializationOptions} options Serialization options.
 *
 * @return {string} The post content.
 */

function serialize(blocks, options) {
  return Object(external_lodash_["castArray"])(blocks).map(block => serializeBlock(block, options)).join('\n\n');
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/validation/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Globally matches any consecutive whitespace
 *
 * @type {RegExp}
 */

const REGEXP_WHITESPACE = /[\t\n\r\v\f ]+/g;
/**
 * Matches a string containing only whitespace
 *
 * @type {RegExp}
 */

const REGEXP_ONLY_WHITESPACE = /^[\t\n\r\v\f ]*$/;
/**
 * Matches a CSS URL type value
 *
 * @type {RegExp}
 */

const REGEXP_STYLE_URL_TYPE = /^url\s*\(['"\s]*(.*?)['"\s]*\)$/;
/**
 * Boolean attributes are attributes whose presence as being assigned is
 * meaningful, even if only empty.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( Array.from( document.querySelectorAll( '#attributes-1 > tbody > tr' ) )
 *     .filter( ( tr ) => tr.lastChild.textContent.indexOf( 'Boolean attribute' ) !== -1 )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * @type {Array}
 */

const BOOLEAN_ATTRIBUTES = ['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch'];
/**
 * Enumerated attributes are attributes which must be of a specific value form.
 * Like boolean attributes, these are meaningful if specified, even if not of a
 * valid enumerated value.
 *
 * See: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
 * Extracted from: https://html.spec.whatwg.org/multipage/indices.html#attributes-3
 *
 * Object.keys( Array.from( document.querySelectorAll( '#attributes-1 > tbody > tr' ) )
 *     .filter( ( tr ) => /^("(.+?)";?\s*)+/.test( tr.lastChild.textContent.trim() ) )
 *     .reduce( ( result, tr ) => Object.assign( result, {
 *         [ tr.firstChild.textContent.trim() ]: true
 *     } ), {} ) ).sort();
 *
 * @type {Array}
 */

const ENUMERATED_ATTRIBUTES = ['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap'];
/**
 * Meaningful attributes are those who cannot be safely ignored when omitted in
 * one HTML markup string and not another.
 *
 * @type {Array}
 */

const MEANINGFUL_ATTRIBUTES = [...BOOLEAN_ATTRIBUTES, ...ENUMERATED_ATTRIBUTES];
/**
 * Array of functions which receive a text string on which to apply normalizing
 * behavior for consideration in text token equivalence, carefully ordered from
 * least-to-most expensive operations.
 *
 * @type {Array}
 */

const TEXT_NORMALIZATIONS = [external_lodash_["identity"], getTextWithCollapsedWhitespace];
/**
 * Regular expression matching a named character reference. In lieu of bundling
 * a full set of references, the pattern covers the minimal necessary to test
 * positively against the full set.
 *
 * "The ampersand must be followed by one of the names given in the named
 * character references section, using the same case."
 *
 * Tested aginst "12.5 Named character references":
 *
 * ```
 * const references = Array.from( document.querySelectorAll(
 *     '#named-character-references-table tr[id^=entity-] td:first-child'
 * ) ).map( ( code ) => code.textContent )
 * references.every( ( reference ) => /^[\da-z]+$/i.test( reference ) )
 * ```
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#character-references
 * @see https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references
 *
 * @type {RegExp}
 */

const REGEXP_NAMED_CHARACTER_REFERENCE = /^[\da-z]+$/i;
/**
 * Regular expression matching a decimal character reference.
 *
 * "The ampersand must be followed by a U+0023 NUMBER SIGN character (#),
 * followed by one or more ASCII digits, representing a base-ten integer"
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#character-references
 *
 * @type {RegExp}
 */

const REGEXP_DECIMAL_CHARACTER_REFERENCE = /^#\d+$/;
/**
 * Regular expression matching a hexadecimal character reference.
 *
 * "The ampersand must be followed by a U+0023 NUMBER SIGN character (#), which
 * must be followed by either a U+0078 LATIN SMALL LETTER X character (x) or a
 * U+0058 LATIN CAPITAL LETTER X character (X), which must then be followed by
 * one or more ASCII hex digits, representing a hexadecimal integer"
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#character-references
 *
 * @type {RegExp}
 */

const REGEXP_HEXADECIMAL_CHARACTER_REFERENCE = /^#x[\da-f]+$/i;
/**
 * Returns true if the given string is a valid character reference segment, or
 * false otherwise. The text should be stripped of `&` and `;` demarcations.
 *
 * @param {string} text Text to test.
 *
 * @return {boolean} Whether text is valid character reference.
 */

function isValidCharacterReference(text) {
  return REGEXP_NAMED_CHARACTER_REFERENCE.test(text) || REGEXP_DECIMAL_CHARACTER_REFERENCE.test(text) || REGEXP_HEXADECIMAL_CHARACTER_REFERENCE.test(text);
}
/**
 * Subsitute EntityParser class for `simple-html-tokenizer` which uses the
 * implementation of `decodeEntities` from `html-entities`, in order to avoid
 * bundling a massive named character reference.
 *
 * @see https://github.com/tildeio/simple-html-tokenizer/tree/HEAD/src/entity-parser.ts
 */

class validation_DecodeEntityParser {
  /**
   * Returns a substitute string for an entity string sequence between `&`
   * and `;`, or undefined if no substitution should occur.
   *
   * @param {string} entity Entity fragment discovered in HTML.
   *
   * @return {?string} Entity substitute value.
   */
  parse(entity) {
    if (isValidCharacterReference(entity)) {
      return Object(external_wp_htmlEntities_["decodeEntities"])('&' + entity + ';');
    }
  }

}
/**
 * Given a specified string, returns an array of strings split by consecutive
 * whitespace, ignoring leading or trailing whitespace.
 *
 * @param {string} text Original text.
 *
 * @return {string[]} Text pieces split on whitespace.
 */

function getTextPiecesSplitOnWhitespace(text) {
  return text.trim().split(REGEXP_WHITESPACE);
}
/**
 * Given a specified string, returns a new trimmed string where all consecutive
 * whitespace is collapsed to a single space.
 *
 * @param {string} text Original text.
 *
 * @return {string} Trimmed text with consecutive whitespace collapsed.
 */

function getTextWithCollapsedWhitespace(text) {
  // This is an overly simplified whitespace comparison. The specification is
  // more prescriptive of whitespace behavior in inline and block contexts.
  //
  // See: https://medium.com/@patrickbrosset/when-does-white-space-matter-in-html-b90e8a7cdd33
  return getTextPiecesSplitOnWhitespace(text).join(' ');
}
/**
 * Returns attribute pairs of the given StartTag token, including only pairs
 * where the value is non-empty or the attribute is a boolean attribute, an
 * enumerated attribute, or a custom data- attribute.
 *
 * @see MEANINGFUL_ATTRIBUTES
 *
 * @param {Object} token StartTag token.
 *
 * @return {Array[]} Attribute pairs.
 */

function getMeaningfulAttributePairs(token) {
  return token.attributes.filter(pair => {
    const [key, value] = pair;
    return value || key.indexOf('data-') === 0 || Object(external_lodash_["includes"])(MEANINGFUL_ATTRIBUTES, key);
  });
}
/**
 * Returns true if two text tokens (with `chars` property) are equivalent, or
 * false otherwise.
 *
 * @param {Object} actual   Actual token.
 * @param {Object} expected Expected token.
 * @param {Object} logger   Validation logger object.
 *
 * @return {boolean} Whether two text tokens are equivalent.
 */

function isEquivalentTextTokens(actual, expected, logger = createLogger()) {
  // This function is intentionally written as syntactically "ugly" as a hot
  // path optimization. Text is progressively normalized in order from least-
  // to-most operationally expensive, until the earliest point at which text
  // can be confidently inferred as being equal.
  let actualChars = actual.chars;
  let expectedChars = expected.chars;

  for (let i = 0; i < TEXT_NORMALIZATIONS.length; i++) {
    const normalize = TEXT_NORMALIZATIONS[i];
    actualChars = normalize(actualChars);
    expectedChars = normalize(expectedChars);

    if (actualChars === expectedChars) {
      return true;
    }
  }

  logger.warning('Expected text `%s`, saw `%s`.', expected.chars, actual.chars);
  return false;
}
/**
 * Given a CSS length value, returns a normalized CSS length value for strict equality
 * comparison.
 *
 * @param {string} value CSS length value.
 *
 * @return {string} Normalized CSS length value.
 */

function getNormalizedLength(value) {
  return 0 === parseFloat(value) ? '0' : value;
}
/**
 * Given a style value, returns a normalized style value for strict equality
 * comparison.
 *
 * @param {string} value Style value.
 *
 * @return {string} Normalized style value.
 */

function getNormalizedStyleValue(value) {
  const textPieces = getTextPiecesSplitOnWhitespace(value);
  const normalizedPieces = textPieces.map(getNormalizedLength);
  const result = normalizedPieces.join(' ');
  return result // Normalize URL type to omit whitespace or quotes
  .replace(REGEXP_STYLE_URL_TYPE, 'url($1)');
}
/**
 * Given a style attribute string, returns an object of style properties.
 *
 * @param {string} text Style attribute.
 *
 * @return {Object} Style properties.
 */

function getStyleProperties(text) {
  const pairs = text // Trim ending semicolon (avoid including in split)
  .replace(/;?\s*$/, '') // Split on property assignment
  .split(';') // For each property assignment...
  .map(style => {
    // ...split further into key-value pairs
    const [key, ...valueParts] = style.split(':');
    const value = valueParts.join(':');
    return [key.trim(), getNormalizedStyleValue(value.trim())];
  });
  return Object(external_lodash_["fromPairs"])(pairs);
}
/**
 * Attribute-specific equality handlers
 *
 * @type {Object}
 */

const isEqualAttributesOfName = {
  class: (actual, expected) => {
    // Class matches if members are the same, even if out of order or
    // superfluous whitespace between.
    return !Object(external_lodash_["xor"])(...[actual, expected].map(getTextPiecesSplitOnWhitespace)).length;
  },
  style: (actual, expected) => {
    return Object(external_lodash_["isEqual"])(...[actual, expected].map(getStyleProperties));
  },
  // For each boolean attribute, mere presence of attribute in both is enough
  // to assume equivalence.
  ...Object(external_lodash_["fromPairs"])(BOOLEAN_ATTRIBUTES.map(attribute => [attribute, external_lodash_["stubTrue"]]))
};
/**
 * Given two sets of attribute tuples, returns true if the attribute sets are
 * equivalent.
 *
 * @param {Array[]} actual   Actual attributes tuples.
 * @param {Array[]} expected Expected attributes tuples.
 * @param {Object}  logger   Validation logger object.
 *
 * @return {boolean} Whether attributes are equivalent.
 */

function isEqualTagAttributePairs(actual, expected, logger = createLogger()) {
  // Attributes is tokenized as tuples. Their lengths should match. This also
  // avoids us needing to check both attributes sets, since if A has any keys
  // which do not exist in B, we know the sets to be different.
  if (actual.length !== expected.length) {
    logger.warning('Expected attributes %o, instead saw %o.', expected, actual);
    return false;
  } // Attributes are not guaranteed to occur in the same order. For validating
  // actual attributes, first convert the set of expected attribute values to
  // an object, for lookup by key.


  const expectedAttributes = {};

  for (let i = 0; i < expected.length; i++) {
    expectedAttributes[expected[i][0].toLowerCase()] = expected[i][1];
  }

  for (let i = 0; i < actual.length; i++) {
    const [name, actualValue] = actual[i];
    const nameLower = name.toLowerCase(); // As noted above, if missing member in B, assume different

    if (!expectedAttributes.hasOwnProperty(nameLower)) {
      logger.warning('Encountered unexpected attribute `%s`.', name);
      return false;
    }

    const expectedValue = expectedAttributes[nameLower];
    const isEqualAttributes = isEqualAttributesOfName[nameLower];

    if (isEqualAttributes) {
      // Defer custom attribute equality handling
      if (!isEqualAttributes(actualValue, expectedValue)) {
        logger.warning('Expected attribute `%s` of value `%s`, saw `%s`.', name, expectedValue, actualValue);
        return false;
      }
    } else if (actualValue !== expectedValue) {
      // Otherwise strict inequality should bail
      logger.warning('Expected attribute `%s` of value `%s`, saw `%s`.', name, expectedValue, actualValue);
      return false;
    }
  }

  return true;
}
/**
 * Token-type-specific equality handlers
 *
 * @type {Object}
 */

const isEqualTokensOfType = {
  StartTag: (actual, expected, logger = createLogger()) => {
    if (actual.tagName !== expected.tagName && // Optimization: Use short-circuit evaluation to defer case-
    // insensitive check on the assumption that the majority case will
    // have exactly equal tag names.
    actual.tagName.toLowerCase() !== expected.tagName.toLowerCase()) {
      logger.warning('Expected tag name `%s`, instead saw `%s`.', expected.tagName, actual.tagName);
      return false;
    }

    return isEqualTagAttributePairs(...[actual, expected].map(getMeaningfulAttributePairs), logger);
  },
  Chars: isEquivalentTextTokens,
  Comment: isEquivalentTextTokens
};
/**
 * Given an array of tokens, returns the first token which is not purely
 * whitespace.
 *
 * Mutates the tokens array.
 *
 * @param {Object[]} tokens Set of tokens to search.
 *
 * @return {Object} Next non-whitespace token.
 */

function getNextNonWhitespaceToken(tokens) {
  let token;

  while (token = tokens.shift()) {
    if (token.type !== 'Chars') {
      return token;
    }

    if (!REGEXP_ONLY_WHITESPACE.test(token.chars)) {
      return token;
    }
  }
}
/**
 * Tokenize an HTML string, gracefully handling any errors thrown during
 * underlying tokenization.
 *
 * @param {string} html   HTML string to tokenize.
 * @param {Object} logger Validation logger object.
 *
 * @return {Object[]|null} Array of valid tokenized HTML elements, or null on error
 */

function getHTMLTokens(html, logger = createLogger()) {
  try {
    return new Tokenizer(new validation_DecodeEntityParser()).tokenize(html);
  } catch (e) {
    logger.warning('Malformed HTML detected: %s', html);
  }

  return null;
}
/**
 * Returns true if the next HTML token closes the current token.
 *
 * @param {Object} currentToken Current token to compare with.
 * @param {Object|undefined} nextToken Next token to compare against.
 *
 * @return {boolean} true if `nextToken` closes `currentToken`, false otherwise
 */


function isClosedByToken(currentToken, nextToken) {
  // Ensure this is a self closed token
  if (!currentToken.selfClosing) {
    return false;
  } // Check token names and determine if nextToken is the closing tag for currentToken


  if (nextToken && nextToken.tagName === currentToken.tagName && nextToken.type === 'EndTag') {
    return true;
  }

  return false;
}
/**
 * Returns true if the given HTML strings are effectively equivalent, or
 * false otherwise. Invalid HTML is not considered equivalent, even if the
 * strings directly match.
 *
 * @param {string} actual   Actual HTML string.
 * @param {string} expected Expected HTML string.
 * @param {Object} logger   Validation logger object.
 *
 * @return {boolean} Whether HTML strings are equivalent.
 */

function isEquivalentHTML(actual, expected, logger = createLogger()) {
  // Short-circuit if markup is identical.
  if (actual === expected) {
    return true;
  } // Tokenize input content and reserialized save content


  const [actualTokens, expectedTokens] = [actual, expected].map(html => getHTMLTokens(html, logger)); // If either is malformed then stop comparing - the strings are not equivalent

  if (!actualTokens || !expectedTokens) {
    return false;
  }

  let actualToken, expectedToken;

  while (actualToken = getNextNonWhitespaceToken(actualTokens)) {
    expectedToken = getNextNonWhitespaceToken(expectedTokens); // Inequal if exhausted all expected tokens

    if (!expectedToken) {
      logger.warning('Expected end of content, instead saw %o.', actualToken);
      return false;
    } // Inequal if next non-whitespace token of each set are not same type


    if (actualToken.type !== expectedToken.type) {
      logger.warning('Expected token of type `%s` (%o), instead saw `%s` (%o).', expectedToken.type, expectedToken, actualToken.type, actualToken);
      return false;
    } // Defer custom token type equality handling, otherwise continue and
    // assume as equal


    const isEqualTokens = isEqualTokensOfType[actualToken.type];

    if (isEqualTokens && !isEqualTokens(actualToken, expectedToken, logger)) {
      return false;
    } // Peek at the next tokens (actual and expected) to see if they close
    // a self-closing tag


    if (isClosedByToken(actualToken, expectedTokens[0])) {
      // Consume the next expected token that closes the current actual
      // self-closing token
      getNextNonWhitespaceToken(expectedTokens);
    } else if (isClosedByToken(expectedToken, actualTokens[0])) {
      // Consume the next actual token that closes the current expected
      // self-closing token
      getNextNonWhitespaceToken(actualTokens);
    }
  }

  if (expectedToken = getNextNonWhitespaceToken(expectedTokens)) {
    // If any non-whitespace tokens remain in expected token set, this
    // indicates inequality
    logger.warning('Expected %o, instead saw end of content.', expectedToken);
    return false;
  }

  return true;
}
/**
 * Returns an object with `isValid` property set to `true` if the parsed block
 * is valid given the input content. A block is considered valid if, when serialized
 * with assumed attributes, the content matches the original value. If block is
 * invalid, this function returns all validations issues as well.
 *
 * @param {string|Object} blockTypeOrName      Block type.
 * @param {Object}        attributes           Parsed block attributes.
 * @param {string}        originalBlockContent Original block content.
 * @param {Object}        logger           	   Validation logger object.
 *
 * @return {Object} Whether block is valid and contains validation messages.
 */

function getBlockContentValidationResult(blockTypeOrName, attributes, originalBlockContent, logger = createQueuedLogger()) {
  const blockType = normalizeBlockType(blockTypeOrName);
  let generatedBlockContent;

  try {
    generatedBlockContent = getSaveContent(blockType, attributes);
  } catch (error) {
    logger.error('Block validation failed because an error occurred while generating block content:\n\n%s', error.toString());
    return {
      isValid: false,
      validationIssues: logger.getItems()
    };
  }

  const isValid = isEquivalentHTML(originalBlockContent, generatedBlockContent, logger);

  if (!isValid) {
    logger.error('Block validation failed for `%s` (%o).\n\nContent generated by `save` function:\n\n%s\n\nContent retrieved from post body:\n\n%s', blockType.name, blockType, generatedBlockContent, originalBlockContent);
  }

  return {
    isValid,
    validationIssues: logger.getItems()
  };
}
/**
 * Returns true if the parsed block is valid given the input content. A block
 * is considered valid if, when serialized with assumed attributes, the content
 * matches the original value.
 *
 * Logs to console in development environments when invalid.
 *
 * @param {string|Object} blockTypeOrName      Block type.
 * @param {Object}        attributes           Parsed block attributes.
 * @param {string}        originalBlockContent Original block content.
 *
 * @return {boolean} Whether block is valid.
 */

function isValidBlockContent(blockTypeOrName, attributes, originalBlockContent) {
  const {
    isValid
  } = getBlockContentValidationResult(blockTypeOrName, attributes, originalBlockContent, createLogger());
  return isValid;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/matchers.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function matchers_html(selector, multilineTag) {
  return domNode => {
    let match = domNode;

    if (selector) {
      match = domNode.querySelector(selector);
    }

    if (!match) {
      return '';
    }

    if (multilineTag) {
      let value = '';
      const length = match.children.length;

      for (let index = 0; index < length; index++) {
        const child = match.children[index];

        if (child.nodeName.toLowerCase() !== multilineTag) {
          continue;
        }

        value += child.outerHTML;
      }

      return value;
    }

    return match.innerHTML;
  };
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/node.js
/**
 * Internal dependencies
 */

/**
 * A representation of a single node within a block's rich text value. If
 * representing a text node, the value is simply a string of the node value.
 * As representing an element node, it is an object of:
 *
 * 1. `type` (string): Tag name.
 * 2. `props` (object): Attributes and children array of WPBlockNode.
 *
 * @typedef {string|Object} WPBlockNode
 */

/**
 * Given a single node and a node type (e.g. `'br'`), returns true if the node
 * corresponds to that type, false otherwise.
 *
 * @param {WPBlockNode} node Block node to test
 * @param {string} type      Node to type to test against.
 *
 * @return {boolean} Whether node is of intended type.
 */

function isNodeOfType(node, type) {
  return node && node.type === type;
}
/**
 * Given an object implementing the NamedNodeMap interface, returns a plain
 * object equivalent value of name, value key-value pairs.
 *
 * @see https://dom.spec.whatwg.org/#interface-namednodemap
 *
 * @param {NamedNodeMap} nodeMap NamedNodeMap to convert to object.
 *
 * @return {Object} Object equivalent value of NamedNodeMap.
 */


function getNamedNodeMapAsObject(nodeMap) {
  const result = {};

  for (let i = 0; i < nodeMap.length; i++) {
    const {
      name,
      value
    } = nodeMap[i];
    result[name] = value;
  }

  return result;
}
/**
 * Given a DOM Element or Text node, returns an equivalent block node. Throws
 * if passed any node type other than element or text.
 *
 * @throws {TypeError} If non-element/text node is passed.
 *
 * @param {Node} domNode DOM node to convert.
 *
 * @return {WPBlockNode} Block node equivalent to DOM node.
 */

function fromDOM(domNode) {
  if (domNode.nodeType === domNode.TEXT_NODE) {
    return domNode.nodeValue;
  }

  if (domNode.nodeType !== domNode.ELEMENT_NODE) {
    throw new TypeError('A block node can only be created from a node of type text or ' + 'element.');
  }

  return {
    type: domNode.nodeName.toLowerCase(),
    props: { ...getNamedNodeMapAsObject(domNode.attributes),
      children: children_fromDOM(domNode.childNodes)
    }
  };
}
/**
 * Given a block node, returns its HTML string representation.
 *
 * @param {WPBlockNode} node Block node to convert to string.
 *
 * @return {string} String HTML representation of block node.
 */

function toHTML(node) {
  return children_toHTML([node]);
}
/**
 * Given a selector, returns an hpq matcher generating a WPBlockNode value
 * matching the selector result.
 *
 * @param {string} selector DOM selector.
 *
 * @return {Function} hpq matcher.
 */

function node_matcher(selector) {
  return domNode => {
    let match = domNode;

    if (selector) {
      match = domNode.querySelector(selector);
    }

    try {
      return fromDOM(match);
    } catch (error) {
      return null;
    }
  };
}
/**
 * Object of utility functions used in managing block attribute values of
 * source `node`.
 *
 * @see https://github.com/WordPress/gutenberg/pull/10439
 *
 * @deprecated since 4.0. The `node` source should not be used, and can be
 *             replaced by the `html` source.
 *
 * @private
 */

/* harmony default export */ var api_node = ({
  isNodeOfType,
  fromDOM,
  toHTML,
  matcher: node_matcher
});

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/children.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * A representation of a block's rich text value.
 *
 * @typedef {WPBlockNode[]} WPBlockChildren
 */

/**
 * Given block children, returns a serialize-capable WordPress element.
 *
 * @param {WPBlockChildren} children Block children object to convert.
 *
 * @return {WPElement} A serialize-capable element.
 */

function getSerializeCapableElement(children) {
  // The fact that block children are compatible with the element serializer is
  // merely an implementation detail that currently serves to be true, but
  // should not be mistaken as being a guarantee on the external API. The
  // public API only offers guarantees to work with strings (toHTML) and DOM
  // elements (fromDOM), and should provide utilities to manipulate the value
  // rather than expect consumers to inspect or construct its shape (concat).
  return children;
}
/**
 * Given block children, returns an array of block nodes.
 *
 * @param {WPBlockChildren} children Block children object to convert.
 *
 * @return {Array<WPBlockNode>} An array of individual block nodes.
 */

function getChildrenArray(children) {
  // The fact that block children are compatible with the element serializer
  // is merely an implementation detail that currently serves to be true, but
  // should not be mistaken as being a guarantee on the external API.
  return children;
}
/**
 * Given two or more block nodes, returns a new block node representing a
 * concatenation of its values.
 *
 * @param {...WPBlockChildren} blockNodes Block nodes to concatenate.
 *
 * @return {WPBlockChildren} Concatenated block node.
 */


function concat(...blockNodes) {
  const result = [];

  for (let i = 0; i < blockNodes.length; i++) {
    const blockNode = Object(external_lodash_["castArray"])(blockNodes[i]);

    for (let j = 0; j < blockNode.length; j++) {
      const child = blockNode[j];
      const canConcatToPreviousString = typeof child === 'string' && typeof result[result.length - 1] === 'string';

      if (canConcatToPreviousString) {
        result[result.length - 1] += child;
      } else {
        result.push(child);
      }
    }
  }

  return result;
}
/**
 * Given an iterable set of DOM nodes, returns equivalent block children.
 * Ignores any non-element/text nodes included in set.
 *
 * @param {Iterable.<Node>} domNodes Iterable set of DOM nodes to convert.
 *
 * @return {WPBlockChildren} Block children equivalent to DOM nodes.
 */

function children_fromDOM(domNodes) {
  const result = [];

  for (let i = 0; i < domNodes.length; i++) {
    try {
      result.push(fromDOM(domNodes[i]));
    } catch (error) {// Simply ignore if DOM node could not be converted.
    }
  }

  return result;
}
/**
 * Given a block node, returns its HTML string representation.
 *
 * @param {WPBlockChildren} children Block node(s) to convert to string.
 *
 * @return {string} String HTML representation of block node.
 */

function children_toHTML(children) {
  const element = getSerializeCapableElement(children);
  return Object(external_wp_element_["renderToString"])(element);
}
/**
 * Given a selector, returns an hpq matcher generating a WPBlockChildren value
 * matching the selector result.
 *
 * @param {string} selector DOM selector.
 *
 * @return {Function} hpq matcher.
 */

function children_matcher(selector) {
  return domNode => {
    let match = domNode;

    if (selector) {
      match = domNode.querySelector(selector);
    }

    if (match) {
      return children_fromDOM(match.childNodes);
    }

    return [];
  };
}
/**
 * Object of utility functions used in managing block attribute values of
 * source `children`.
 *
 * @see https://github.com/WordPress/gutenberg/pull/10439
 *
 * @deprecated since 4.0. The `children` source should not be used, and can be
 *             replaced by the `html` source.
 *
 * @private
 */

/* harmony default export */ var api_children = ({
  concat,
  getChildrenArray,
  fromDOM: children_fromDOM,
  toHTML: children_toHTML,
  matcher: children_matcher
});

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/parser.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








/**
 * Sources which are guaranteed to return a string value.
 *
 * @type {Set}
 */

const STRING_SOURCES = new Set(['attribute', 'html', 'text', 'tag']);
/**
 * Higher-order hpq matcher which enhances an attribute matcher to return true
 * or false depending on whether the original matcher returns undefined. This
 * is useful for boolean attributes (e.g. disabled) whose attribute values may
 * be technically falsey (empty string), though their mere presence should be
 * enough to infer as true.
 *
 * @param {Function} matcher Original hpq matcher.
 *
 * @return {Function} Enhanced hpq matcher.
 */

const toBooleanAttributeMatcher = matcher => Object(external_lodash_["flow"])([matcher, // Expected values from `attr( 'disabled' )`:
//
// <input>
// - Value:       `undefined`
// - Transformed: `false`
//
// <input disabled>
// - Value:       `''`
// - Transformed: `true`
//
// <input disabled="disabled">
// - Value:       `'disabled'`
// - Transformed: `true`
value => value !== undefined]);
/**
 * Returns true if value is of the given JSON schema type, or false otherwise.
 *
 * @see http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.25
 *
 * @param {*}      value Value to test.
 * @param {string} type  Type to test.
 *
 * @return {boolean} Whether value is of type.
 */

function isOfType(value, type) {
  switch (type) {
    case 'string':
      return typeof value === 'string';

    case 'boolean':
      return typeof value === 'boolean';

    case 'object':
      return !!value && value.constructor === Object;

    case 'null':
      return value === null;

    case 'array':
      return Array.isArray(value);

    case 'integer':
    case 'number':
      return typeof value === 'number';
  }

  return true;
}
/**
 * Returns true if value is of an array of given JSON schema types, or false
 * otherwise.
 *
 * @see http://json-schema.org/latest/json-schema-validation.html#rfc.section.6.25
 *
 * @param {*}        value Value to test.
 * @param {string[]} types Types to test.
 *
 * @return {boolean} Whether value is of types.
 */

function isOfTypes(value, types) {
  return types.some(type => isOfType(value, type));
}
/**
 * Returns true if value is valid per the given block attribute schema type
 * definition, or false otherwise.
 *
 * @see https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1.1
 *
 * @param {*}                       value Value to test.
 * @param {?(Array<string>|string)} type  Block attribute schema type.
 *
 * @return {boolean} Whether value is valid.
 */

function isValidByType(value, type) {
  return type === undefined || isOfTypes(value, Object(external_lodash_["castArray"])(type));
}
/**
 * Returns true if value is valid per the given block attribute schema enum
 * definition, or false otherwise.
 *
 * @see https://json-schema.org/latest/json-schema-validation.html#rfc.section.6.1.2
 *
 * @param {*}      value   Value to test.
 * @param {?Array} enumSet Block attribute schema enum.
 *
 * @return {boolean} Whether value is valid.
 */

function isValidByEnum(value, enumSet) {
  return !Array.isArray(enumSet) || enumSet.includes(value);
}
/**
 * Returns true if the given attribute schema describes a value which may be
 * an ambiguous string.
 *
 * Some sources are ambiguously serialized as strings, for which value casting
 * is enabled. This is only possible when a singular type is assigned to the
 * attribute schema, since the string ambiguity makes it impossible to know the
 * correct type of multiple to which to cast.
 *
 * @param {Object} attributeSchema Attribute's schema.
 *
 * @return {boolean} Whether attribute schema defines an ambiguous string
 *                   source.
 */

function isAmbiguousStringSource(attributeSchema) {
  const {
    source,
    type
  } = attributeSchema;
  const isStringSource = STRING_SOURCES.has(source);
  const isSingleType = typeof type === 'string';
  return isStringSource && isSingleType;
}
/**
 * Returns an hpq matcher given a source object.
 *
 * @param {Object} sourceConfig Attribute Source object.
 *
 * @return {Function} A hpq Matcher.
 */

function matcherFromSource(sourceConfig) {
  switch (sourceConfig.source) {
    case 'attribute':
      let matcher = attr(sourceConfig.selector, sourceConfig.attribute);

      if (sourceConfig.type === 'boolean') {
        matcher = toBooleanAttributeMatcher(matcher);
      }

      return matcher;

    case 'html':
      return matchers_html(sourceConfig.selector, sourceConfig.multiline);

    case 'text':
      return es_text(sourceConfig.selector);

    case 'children':
      return children_matcher(sourceConfig.selector);

    case 'node':
      return node_matcher(sourceConfig.selector);

    case 'query':
      const subMatchers = Object(external_lodash_["mapValues"])(sourceConfig.query, matcherFromSource);
      return query(sourceConfig.selector, subMatchers);

    case 'tag':
      return Object(external_lodash_["flow"])([prop(sourceConfig.selector, 'nodeName'), nodeName => nodeName ? nodeName.toLowerCase() : undefined]);

    default:
      // eslint-disable-next-line no-console
      console.error(`Unknown source type "${sourceConfig.source}"`);
  }
}
/**
 * Given a block's raw content and an attribute's schema returns the attribute's
 * value depending on its source.
 *
 * @param {string} innerHTML         Block's raw content.
 * @param {Object} attributeSchema   Attribute's schema.
 *
 * @return {*} Attribute value.
 */

function parseWithAttributeSchema(innerHTML, attributeSchema) {
  return parse(innerHTML, matcherFromSource(attributeSchema));
}
/**
 * Given an attribute key, an attribute's schema, a block's raw content and the
 * commentAttributes returns the attribute value depending on its source
 * definition of the given attribute key.
 *
 * @param {string} attributeKey      Attribute key.
 * @param {Object} attributeSchema   Attribute's schema.
 * @param {string} innerHTML         Block's raw content.
 * @param {Object} commentAttributes Block's comment attributes.
 *
 * @return {*} Attribute value.
 */

function getBlockAttribute(attributeKey, attributeSchema, innerHTML, commentAttributes) {
  const {
    type,
    enum: enumSet
  } = attributeSchema;
  let value;

  switch (attributeSchema.source) {
    // An undefined source means that it's an attribute serialized to the
    // block's "comment".
    case undefined:
      value = commentAttributes ? commentAttributes[attributeKey] : undefined;
      break;

    case 'attribute':
    case 'property':
    case 'html':
    case 'text':
    case 'children':
    case 'node':
    case 'query':
    case 'tag':
      value = parseWithAttributeSchema(innerHTML, attributeSchema);
      break;
  }

  if (!isValidByType(value, type) || !isValidByEnum(value, enumSet)) {
    // Reject the value if it is not valid. Reverting to the undefined
    // value ensures the default is respected, if applicable.
    value = undefined;
  }

  if (value === undefined) {
    return attributeSchema.default;
  }

  return value;
}
/**
 * Returns the block attributes of a registered block node given its type.
 *
 * @param {string|Object} blockTypeOrName Block type or name.
 * @param {string}        innerHTML       Raw block content.
 * @param {?Object}       attributes      Known block attributes (from delimiters).
 *
 * @return {Object} All block attributes.
 */

function getBlockAttributes(blockTypeOrName, innerHTML, attributes = {}) {
  const blockType = normalizeBlockType(blockTypeOrName);
  const blockAttributes = Object(external_lodash_["mapValues"])(blockType.attributes, (attributeSchema, attributeKey) => {
    return getBlockAttribute(attributeKey, attributeSchema, innerHTML, attributes);
  });
  return Object(external_wp_hooks_["applyFilters"])('blocks.getBlockAttributes', blockAttributes, blockType, innerHTML, attributes);
}
/**
 * Given a block object, returns a new copy of the block with any applicable
 * deprecated migrations applied, or the original block if it was both valid
 * and no eligible migrations exist.
 *
 * @param {WPBlock} block            Original block object.
 * @param {Object}  parsedAttributes Attributes as parsed from the initial
 *                                   block markup.
 *
 * @return {WPBlock} Migrated block object.
 */

function getMigratedBlock(block, parsedAttributes) {
  const blockType = registration_getBlockType(block.name);
  const {
    deprecated: deprecatedDefinitions
  } = blockType; // Bail early if there are no registered deprecations to be handled.

  if (!deprecatedDefinitions || !deprecatedDefinitions.length) {
    return block;
  }

  const {
    originalContent,
    innerBlocks
  } = block; // By design, blocks lack any sort of version tracking. Instead, to process
  // outdated content the system operates a queue out of all the defined
  // attribute shapes and tries each definition until the input produces a
  // valid result. This mechanism seeks to avoid polluting the user-space with
  // machine-specific code. An invalid block is thus a block that could not be
  // matched successfully with any of the registered deprecation definitions.

  for (let i = 0; i < deprecatedDefinitions.length; i++) {
    // A block can opt into a migration even if the block is valid by
    // defining `isEligible` on its deprecation. If the block is both valid
    // and does not opt to migrate, skip.
    const {
      isEligible = external_lodash_["stubFalse"]
    } = deprecatedDefinitions[i];

    if (block.isValid && !isEligible(parsedAttributes, innerBlocks)) {
      continue;
    } // Block type properties which could impact either serialization or
    // parsing are not considered in the deprecated block type by default,
    // and must be explicitly provided.


    const deprecatedBlockType = Object.assign(Object(external_lodash_["omit"])(blockType, DEPRECATED_ENTRY_KEYS), deprecatedDefinitions[i]);
    let migratedAttributes = getBlockAttributes(deprecatedBlockType, originalContent, parsedAttributes); // Ignore the deprecation if it produces a block which is not valid.

    const {
      isValid,
      validationIssues
    } = getBlockContentValidationResult(deprecatedBlockType, migratedAttributes, originalContent); // An invalid block does not imply incorrect HTML but the fact block
    // source information could be lost on reserialization.

    if (!isValid) {
      block = { ...block,
        validationIssues: [...Object(external_lodash_["get"])(block, 'validationIssues', []), ...validationIssues]
      };
      continue;
    }

    let migratedInnerBlocks = innerBlocks; // A block may provide custom behavior to assign new attributes and/or
    // inner blocks.

    const {
      migrate
    } = deprecatedBlockType;

    if (migrate) {
      [migratedAttributes = parsedAttributes, migratedInnerBlocks = innerBlocks] = Object(external_lodash_["castArray"])(migrate(migratedAttributes, innerBlocks));
    }

    block = { ...block,
      attributes: migratedAttributes,
      innerBlocks: migratedInnerBlocks,
      isValid: true
    };
  }

  return block;
}
/**
 * Convert legacy blocks to their canonical form. This function is used
 * both in the parser level for previous content and to convert such blocks
 * used in Custom Post Types templates.
 *
 * @param {string} name The block's name
 * @param {Object} attributes The block's attributes
 *
 * @return {Object} The block's name and attributes, changed accordingly if a match was found
 */

function convertLegacyBlocks(name, attributes) {
  const newAttributes = { ...attributes
  }; // Convert 'core/cover-image' block in existing content to 'core/cover'.

  if ('core/cover-image' === name) {
    name = 'core/cover';
  } // Convert 'core/text' blocks in existing content to 'core/paragraph'.


  if ('core/text' === name || 'core/cover-text' === name) {
    name = 'core/paragraph';
  } // Convert derivative blocks such as 'core/social-link-wordpress' to the
  // canonical form 'core/social-link'.


  if (name && name.indexOf('core/social-link-') === 0) {
    // Capture `social-link-wordpress` into `{"service":"wordpress"}`
    newAttributes.service = name.substring(17);
    name = 'core/social-link';
  } // Convert derivative blocks such as 'core-embed/instagram' to the
  // canonical form 'core/embed'.


  if (name && name.indexOf('core-embed/') === 0) {
    // Capture `core-embed/instagram` into `{"providerNameSlug":"instagram"}`
    const providerSlug = name.substring(11);
    const deprecated = {
      speaker: 'speaker-deck',
      polldaddy: 'crowdsignal'
    };
    newAttributes.providerNameSlug = providerSlug in deprecated ? deprecated[providerSlug] : providerSlug; // this is needed as the `responsive` attribute was passed
    // in a different way before the refactoring to block variations

    if (!['amazon-kindle', 'wordpress'].includes(providerSlug)) {
      newAttributes.responsive = true;
    }

    name = 'core/embed';
  } // Convert 'core/query-loop' blocks in existing content to 'core/post-template'.
  // TODO: Remove this check when WordPress 5.9 is released.


  if (name === 'core/query-loop') {
    name = 'core/post-template';
  }

  return {
    name,
    attributes: newAttributes
  };
}
/**
 * Creates a block with fallback to the unknown type handler.
 *
 * @param {Object} blockNode Parsed block node.
 *
 * @return {?Object} An initialized block object (if possible).
 */

function createBlockWithFallback(blockNode) {
  const {
    blockName: originalName
  } = blockNode; // The fundamental structure of a blocktype includes its attributes, inner
  // blocks, and inner HTML. It is important to distinguish inner blocks from
  // the HTML content of the block as only the latter is relevant for block
  // validation and edit operations.

  let {
    attrs: attributes,
    innerBlocks = [],
    innerHTML
  } = blockNode;
  const {
    innerContent
  } = blockNode; // Blocks that don't have a registered handler are considered freeform.

  const freeformContentFallbackBlock = getFreeformContentHandlerName();
  const unregisteredFallbackBlock = getUnregisteredTypeHandlerName() || freeformContentFallbackBlock;
  attributes = attributes || {}; // Trim content to avoid creation of intermediary freeform segments.

  innerHTML = innerHTML.trim(); // Use type from block content if available. Otherwise, default to the
  // freeform content fallback.

  let name = originalName || freeformContentFallbackBlock;
  ({
    name,
    attributes
  } = convertLegacyBlocks(name, attributes)); // Fallback content may be upgraded from classic content expecting implicit
  // automatic paragraphs, so preserve them. Assumes wpautop is idempotent,
  // meaning there are no negative consequences to repeated autop calls.

  if (name === freeformContentFallbackBlock) {
    innerHTML = Object(external_wp_autop_["autop"])(innerHTML).trim();
  } // Try finding the type for known block name, else fall back again.


  let blockType = registration_getBlockType(name);

  if (!blockType) {
    // Since the constituents of the block node are extracted at the start
    // of the present function, construct a new object rather than reuse
    // `blockNode`.
    const reconstitutedBlockNode = {
      attrs: attributes,
      blockName: originalName,
      innerBlocks,
      innerContent
    }; // Preserve undelimited content for use by the unregistered type
    // handler. A block node's `innerHTML` isn't enough, as that field only
    // carries the block's own HTML and not its nested blocks.

    const originalUndelimitedContent = serializeBlockNode(reconstitutedBlockNode, {
      isCommentDelimited: false
    }); // Preserve full block content for use by the unregistered type
    // handler, block boundaries included.

    const originalContent = serializeBlockNode(reconstitutedBlockNode, {
      isCommentDelimited: true
    }); // If detected as a block which is not registered, preserve comment
    // delimiters in content of unregistered type handler.

    if (name) {
      innerHTML = originalContent;
    }

    name = unregisteredFallbackBlock;
    attributes = {
      originalName,
      originalContent,
      originalUndelimitedContent
    };
    blockType = registration_getBlockType(name);
  } // Coerce inner blocks from parsed form to canonical form.


  innerBlocks = innerBlocks.map(createBlockWithFallback); // Remove `undefined` innerBlocks.
  //
  // This is a temporary fix to prevent unrecoverable TypeErrors when handling unexpectedly
  // empty freeform block nodes. See https://github.com/WordPress/gutenberg/pull/17164.

  innerBlocks = innerBlocks.filter(innerBlock => innerBlock);
  const isFallbackBlock = name === freeformContentFallbackBlock || name === unregisteredFallbackBlock; // Include in set only if type was determined.

  if (!blockType || !innerHTML && isFallbackBlock) {
    return;
  }

  let block = createBlock(name, getBlockAttributes(blockType, innerHTML, attributes), innerBlocks); // Block validation assumes an idempotent operation from source block to serialized block
  // provided there are no changes in attributes. The validation procedure thus compares the
  // provided source value with the serialized output before there are any modifications to
  // the block. When both match, the block is marked as valid.

  if (!isFallbackBlock) {
    const {
      isValid,
      validationIssues
    } = getBlockContentValidationResult(blockType, block.attributes, innerHTML);
    block.isValid = isValid;
    block.validationIssues = validationIssues;
  } // Preserve original content for future use in case the block is parsed
  // as invalid, or future serialization attempt results in an error.


  block.originalContent = block.originalContent || innerHTML; // Ensure all necessary migrations are applied to the block.

  block = getMigratedBlock(block, attributes);

  if (block.validationIssues && block.validationIssues.length > 0) {
    if (block.isValid) {
      // eslint-disable-next-line no-console
      console.info('Block successfully updated for `%s` (%o).\n\nNew content generated by `save` function:\n\n%s\n\nContent retrieved from post body:\n\n%s', blockType.name, blockType, getSaveContent(blockType, block.attributes), block.originalContent);
    } else {
      block.validationIssues.forEach(({
        log,
        args
      }) => log(...args));
    }
  }

  return block;
}
/**
 * Serializes a block node into the native HTML-comment-powered block format.
 * CAVEAT: This function is intended for reserializing blocks as parsed by
 * valid parsers and skips any validation steps. This is NOT a generic
 * serialization function for in-memory blocks. For most purposes, see the
 * following functions available in the `@wordpress/blocks` package:
 *
 * @see serializeBlock
 * @see serialize
 *
 * For more on the format of block nodes as returned by valid parsers:
 *
 * @see `@wordpress/block-serialization-default-parser` package
 * @see `@wordpress/block-serialization-spec-parser` package
 *
 * @param {Object}   blockNode                  A block node as returned by a valid parser.
 * @param {?Object}  options                    Serialization options.
 * @param {?boolean} options.isCommentDelimited Whether to output HTML comments around blocks.
 *
 * @return {string} An HTML string representing a block.
 */

function serializeBlockNode(blockNode, options = {}) {
  const {
    isCommentDelimited = true
  } = options;
  const {
    blockName,
    attrs = {},
    innerBlocks = [],
    innerContent = []
  } = blockNode;
  let childIndex = 0;
  const content = innerContent.map(item => // `null` denotes a nested block, otherwise we have an HTML fragment.
  item !== null ? item : serializeBlockNode(innerBlocks[childIndex++], options)).join('\n').replace(/\n+/g, '\n').trim();
  return isCommentDelimited ? getCommentDelimitedContent(blockName, attrs, content) : content;
}
/**
 * Creates a parse implementation for the post content which returns a list of blocks.
 *
 * @param {Function} parseImplementation Parse implementation.
 *
 * @return {Function} An implementation which parses the post content.
 */

const createParse = parseImplementation => content => parseImplementation(content).reduce((accumulator, blockNode) => {
  const block = createBlockWithFallback(blockNode);

  if (block) {
    accumulator.push(block);
  }

  return accumulator;
}, []);
/**
 * Utilizes an optimized token-driven parser based on the Gutenberg grammar spec
 * defined through a parsing expression grammar to take advantage of the regular
 * cadence provided by block delimiters -- composed syntactically through HTML
 * comments -- which, given a general HTML document as an input, returns a block
 * list array representation.
 *
 * This is a recursive-descent parser that scans linearly once through the input
 * document. Instead of directly recursing it utilizes a trampoline mechanism to
 * prevent stack overflow. This initial pass is mainly interested in separating
 * and isolating the blocks serialized in the document and manifestly not in the
 * content within the blocks.
 *
 * @see
 * https://developer.wordpress.org/block-editor/packages/packages-block-serialization-default-parser/
 *
 * @param {string} content The post content.
 *
 * @return {Array} Block list.
 */


const parseWithGrammar = createParse(external_wp_blockSerializationDefaultParser_["parse"]);
/* harmony default export */ var parser = (parseWithGrammar);

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/get-raw-transforms.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */


function getRawTransforms() {
  return Object(external_lodash_["filter"])(getBlockTransforms('from'), {
    type: 'raw'
  }).map(transform => {
    return transform.isMatch ? transform : { ...transform,
      isMatch: node => transform.selector && node.matches(transform.selector)
    };
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/html-to-blocks.js
/**
 * Internal dependencies
 */



/**
 * Converts HTML directly to blocks. Looks for a matching transform for each
 * top-level tag. The HTML should be filtered to not have any text between
 * top-level tags and formatted in a way that blocks can handle the HTML.
 *
 * @param {string} html HTML to convert.
 *
 * @return {Array} An array of blocks.
 */

function htmlToBlocks(html) {
  const doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = html;
  return Array.from(doc.body.children).flatMap(node => {
    const rawTransform = findTransform(getRawTransforms(), ({
      isMatch
    }) => isMatch(node));

    if (!rawTransform) {
      return createBlock( // Should not be hardcoded.
      'core/html', getBlockAttributes('core/html', node.outerHTML));
    }

    const {
      transform,
      blockName
    } = rawTransform;

    if (transform) {
      return transform(node);
    }

    return createBlock(blockName, getBlockAttributes(blockName, node.outerHTML));
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/normalise-blocks.js
/**
 * WordPress dependencies
 */

function normaliseBlocks(HTML) {
  const decuDoc = document.implementation.createHTMLDocument('');
  const accuDoc = document.implementation.createHTMLDocument('');
  const decu = decuDoc.body;
  const accu = accuDoc.body;
  decu.innerHTML = HTML;

  while (decu.firstChild) {
    const node = decu.firstChild; // Text nodes: wrap in a paragraph, or append to previous.

    if (node.nodeType === node.TEXT_NODE) {
      if (Object(external_wp_dom_["isEmpty"])(node)) {
        decu.removeChild(node);
      } else {
        if (!accu.lastChild || accu.lastChild.nodeName !== 'P') {
          accu.appendChild(accuDoc.createElement('P'));
        }

        accu.lastChild.appendChild(node);
      } // Element nodes.

    } else if (node.nodeType === node.ELEMENT_NODE) {
      // BR nodes: create a new paragraph on double, or append to previous.
      if (node.nodeName === 'BR') {
        if (node.nextSibling && node.nextSibling.nodeName === 'BR') {
          accu.appendChild(accuDoc.createElement('P'));
          decu.removeChild(node.nextSibling);
        } // Don't append to an empty paragraph.


        if (accu.lastChild && accu.lastChild.nodeName === 'P' && accu.lastChild.hasChildNodes()) {
          accu.lastChild.appendChild(node);
        } else {
          decu.removeChild(node);
        }
      } else if (node.nodeName === 'P') {
        // Only append non-empty paragraph nodes.
        if (Object(external_wp_dom_["isEmpty"])(node)) {
          decu.removeChild(node);
        } else {
          accu.appendChild(node);
        }
      } else if (Object(external_wp_dom_["isPhrasingContent"])(node)) {
        if (!accu.lastChild || accu.lastChild.nodeName !== 'P') {
          accu.appendChild(accuDoc.createElement('P'));
        }

        accu.lastChild.appendChild(node);
      } else {
        accu.appendChild(node);
      }
    } else {
      decu.removeChild(node);
    }
  }

  return accu.innerHTML;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/special-comment-converter.js
/**
 * WordPress dependencies
 */

/**
 * Looks for `<!--nextpage-->` and `<!--more-->` comments, as well as the
 * `<!--more Some text-->` variant and its `<!--noteaser-->` companion,
 * and replaces them with a custom element representing a future block.
 *
 * The custom element is a way to bypass the rest of the `raw-handling`
 * transforms, which would eliminate other kinds of node with which to carry
 * `<!--more-->`'s data: nodes with `data` attributes, empty paragraphs, etc.
 *
 * The custom element is then expected to be recognized by any registered
 * block's `raw` transform.
 *
 * @param {Node}     node The node to be processed.
 * @param {Document} doc  The document of the node.
 * @return {void}
 */

function specialCommentConverter(node, doc) {
  if (node.nodeType !== node.COMMENT_NODE) {
    return;
  }

  if (node.nodeValue === 'nextpage') {
    Object(external_wp_dom_["replace"])(node, createNextpage(doc));
    return;
  }

  if (node.nodeValue.indexOf('more') === 0) {
    // Grab any custom text in the comment.
    const customText = node.nodeValue.slice(4).trim();
    /*
     * When a `<!--more-->` comment is found, we need to look for any
     * `<!--noteaser-->` sibling, but it may not be a direct sibling
     * (whitespace typically lies in between)
     */

    let sibling = node;
    let noTeaser = false;

    while (sibling = sibling.nextSibling) {
      if (sibling.nodeType === sibling.COMMENT_NODE && sibling.nodeValue === 'noteaser') {
        noTeaser = true;
        Object(external_wp_dom_["remove"])(sibling);
        break;
      }
    }

    Object(external_wp_dom_["replace"])(node, createMore(customText, noTeaser, doc));
  }
}

function createMore(customText, noTeaser, doc) {
  const node = doc.createElement('wp-block');
  node.dataset.block = 'core/more';

  if (customText) {
    node.dataset.customText = customText;
  }

  if (noTeaser) {
    // "Boolean" data attribute
    node.dataset.noTeaser = '';
  }

  return node;
}

function createNextpage(doc) {
  const node = doc.createElement('wp-block');
  node.dataset.block = 'core/nextpage';
  return node;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/comment-remover.js
/**
 * WordPress dependencies
 */

/**
 * Looks for comments, and removes them.
 *
 * @param {Node} node The node to be processed.
 * @return {void}
 */

function commentRemover(node) {
  if (node.nodeType === node.COMMENT_NODE) {
    Object(external_wp_dom_["remove"])(node);
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/is-inline-content.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Checks if the given node should be considered inline content, optionally
 * depending on a context tag.
 *
 * @param {Node}   node       Node name.
 * @param {string} contextTag Tag name.
 *
 * @return {boolean} True if the node is inline content, false if nohe.
 */

function isInline(node, contextTag) {
  if (Object(external_wp_dom_["isTextContent"])(node)) {
    return true;
  }

  if (!contextTag) {
    return false;
  }

  const tag = node.nodeName.toLowerCase();
  const inlineAllowedTagGroups = [['ul', 'li', 'ol'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']];
  return inlineAllowedTagGroups.some(tagGroup => Object(external_lodash_["difference"])([tag, contextTag], tagGroup).length === 0);
}

function deepCheck(nodes, contextTag) {
  return nodes.every(node => isInline(node, contextTag) && deepCheck(Array.from(node.children), contextTag));
}

function isDoubleBR(node) {
  return node.nodeName === 'BR' && node.previousSibling && node.previousSibling.nodeName === 'BR';
}

function isInlineContent(HTML, contextTag) {
  const doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  const nodes = Array.from(doc.body.children);
  return !nodes.some(isDoubleBR) && deepCheck(nodes, contextTag);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/phrasing-content-reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function phrasingContentReducer(node, doc) {
  // In jsdom-jscore, 'node.style' can be null.
  // TODO: Explore fixing this by patching jsdom-jscore.
  if (node.nodeName === 'SPAN' && node.style) {
    const {
      fontWeight,
      fontStyle,
      textDecorationLine,
      textDecoration,
      verticalAlign
    } = node.style;

    if (fontWeight === 'bold' || fontWeight === '700') {
      Object(external_wp_dom_["wrap"])(doc.createElement('strong'), node);
    }

    if (fontStyle === 'italic') {
      Object(external_wp_dom_["wrap"])(doc.createElement('em'), node);
    } // Some DOM implementations (Safari, JSDom) don't support
    // style.textDecorationLine, so we check style.textDecoration as a
    // fallback.


    if (textDecorationLine === 'line-through' || Object(external_lodash_["includes"])(textDecoration, 'line-through')) {
      Object(external_wp_dom_["wrap"])(doc.createElement('s'), node);
    }

    if (verticalAlign === 'super') {
      Object(external_wp_dom_["wrap"])(doc.createElement('sup'), node);
    } else if (verticalAlign === 'sub') {
      Object(external_wp_dom_["wrap"])(doc.createElement('sub'), node);
    }
  } else if (node.nodeName === 'B') {
    node = Object(external_wp_dom_["replaceTag"])(node, 'strong');
  } else if (node.nodeName === 'I') {
    node = Object(external_wp_dom_["replaceTag"])(node, 'em');
  } else if (node.nodeName === 'A') {
    // In jsdom-jscore, 'node.target' can be null.
    // TODO: Explore fixing this by patching jsdom-jscore.
    if (node.target && node.target.toLowerCase() === '_blank') {
      node.rel = 'noreferrer noopener';
    } else {
      node.removeAttribute('target');
      node.removeAttribute('rel');
    }
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/head-remover.js
function headRemover(node) {
  if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'NOSCRIPT' && node.nodeName !== 'TEMPLATE' && node.nodeName !== 'STYLE') {
    return;
  }

  node.parentNode.removeChild(node);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/ms-list-converter.js
/**
 * Browser dependencies
 */
const {
  parseInt: ms_list_converter_parseInt
} = window;

function isList(node) {
  return node.nodeName === 'OL' || node.nodeName === 'UL';
}

function msListConverter(node, doc) {
  if (node.nodeName !== 'P') {
    return;
  }

  const style = node.getAttribute('style');

  if (!style) {
    return;
  } // Quick check.


  if (style.indexOf('mso-list') === -1) {
    return;
  }

  const matches = /mso-list\s*:[^;]+level([0-9]+)/i.exec(style);

  if (!matches) {
    return;
  }

  let level = ms_list_converter_parseInt(matches[1], 10) - 1 || 0;
  const prevNode = node.previousElementSibling; // Add new list if no previous.

  if (!prevNode || !isList(prevNode)) {
    // See https://html.spec.whatwg.org/multipage/grouping-content.html#attr-ol-type.
    const type = node.textContent.trim().slice(0, 1);
    const isNumeric = /[1iIaA]/.test(type);
    const newListNode = doc.createElement(isNumeric ? 'ol' : 'ul');

    if (isNumeric) {
      newListNode.setAttribute('type', type);
    }

    node.parentNode.insertBefore(newListNode, node);
  }

  const listNode = node.previousElementSibling;
  const listType = listNode.nodeName;
  const listItem = doc.createElement('li');
  let receivingNode = listNode; // Remove the first span with list info.

  node.removeChild(node.firstElementChild); // Add content.

  while (node.firstChild) {
    listItem.appendChild(node.firstChild);
  } // Change pointer depending on indentation level.


  while (level--) {
    receivingNode = receivingNode.lastElementChild || receivingNode; // If it's a list, move pointer to the last item.

    if (isList(receivingNode)) {
      receivingNode = receivingNode.lastElementChild || receivingNode;
    }
  } // Make sure we append to a list.


  if (!isList(receivingNode)) {
    receivingNode = receivingNode.appendChild(doc.createElement(listType));
  } // Append the list item to the list.


  receivingNode.appendChild(listItem); // Remove the wrapper paragraph.

  node.parentNode.removeChild(node);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/list-reducer.js
/**
 * WordPress dependencies
 */


function list_reducer_isList(node) {
  return node.nodeName === 'OL' || node.nodeName === 'UL';
}

function shallowTextContent(element) {
  return Array.from(element.childNodes).map(({
    nodeValue = ''
  }) => nodeValue).join('');
}

function listReducer(node) {
  if (!list_reducer_isList(node)) {
    return;
  }

  const list = node;
  const prevElement = node.previousElementSibling; // Merge with previous list if:
  // * There is a previous list of the same type.
  // * There is only one list item.

  if (prevElement && prevElement.nodeName === node.nodeName && list.children.length === 1) {
    // Move all child nodes, including any text nodes, if any.
    while (list.firstChild) {
      prevElement.appendChild(list.firstChild);
    }

    list.parentNode.removeChild(list);
  }

  const parentElement = node.parentNode; // Nested list with empty parent item.

  if (parentElement && parentElement.nodeName === 'LI' && parentElement.children.length === 1 && !/\S/.test(shallowTextContent(parentElement))) {
    const parentListItem = parentElement;
    const prevListItem = parentListItem.previousElementSibling;
    const parentList = parentListItem.parentNode;

    if (prevListItem) {
      prevListItem.appendChild(list);
      parentList.removeChild(parentListItem);
    } else {
      parentList.parentNode.insertBefore(list, parentList);
      parentList.parentNode.removeChild(parentList);
    }
  } // Invalid: OL/UL > OL/UL.


  if (parentElement && list_reducer_isList(parentElement)) {
    const prevListItem = node.previousElementSibling;

    if (prevListItem) {
      prevListItem.appendChild(node);
    } else {
      Object(external_wp_dom_["unwrap"])(node);
    }
  }
}

// EXTERNAL MODULE: external ["wp","blob"]
var external_wp_blob_ = __webpack_require__("xTGt");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/image-corrector.js
/**
 * WordPress dependencies
 */

/**
 * Browser dependencies
 */

const {
  atob,
  File
} = window;
function imageCorrector(node) {
  if (node.nodeName !== 'IMG') {
    return;
  }

  if (node.src.indexOf('file:') === 0) {
    node.src = '';
  } // This piece cannot be tested outside a browser env.


  if (node.src.indexOf('data:') === 0) {
    const [properties, data] = node.src.split(',');
    const [type] = properties.slice(5).split(';');

    if (!data || !type) {
      node.src = '';
      return;
    }

    let decoded; // Can throw DOMException!

    try {
      decoded = atob(data);
    } catch (e) {
      node.src = '';
      return;
    }

    const uint8Array = new Uint8Array(decoded.length);

    for (let i = 0; i < uint8Array.length; i++) {
      uint8Array[i] = decoded.charCodeAt(i);
    }

    const name = type.replace('/', '.');
    const file = new File([uint8Array], name, {
      type
    });
    node.src = Object(external_wp_blob_["createBlobURL"])(file);
  } // Remove trackers and hardly visible images.


  if (node.height === 1 || node.width === 1) {
    node.parentNode.removeChild(node);
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/blockquote-normaliser.js
/**
 * Internal dependencies
 */

function blockquoteNormaliser(node) {
  if (node.nodeName !== 'BLOCKQUOTE') {
    return;
  }

  node.innerHTML = normaliseBlocks(node.innerHTML);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/figure-content-reducer.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Whether or not the given node is figure content.
 *
 * @param {Node}   node   The node to check.
 * @param {Object} schema The schema to use.
 *
 * @return {boolean} True if figure content, false if not.
 */

function isFigureContent(node, schema) {
  const tag = node.nodeName.toLowerCase(); // We are looking for tags that can be a child of the figure tag, excluding
  // `figcaption` and any phrasing content.

  if (tag === 'figcaption' || Object(external_wp_dom_["isTextContent"])(node)) {
    return false;
  }

  return Object(external_lodash_["has"])(schema, ['figure', 'children', tag]);
}
/**
 * Whether or not the given node can have an anchor.
 *
 * @param {Node}   node   The node to check.
 * @param {Object} schema The schema to use.
 *
 * @return {boolean} True if it can, false if not.
 */


function canHaveAnchor(node, schema) {
  const tag = node.nodeName.toLowerCase();
  return Object(external_lodash_["has"])(schema, ['figure', 'children', 'a', 'children', tag]);
}
/**
 * Wraps the given element in a figure element.
 *
 * @param {Element} element       The element to wrap.
 * @param {Element} beforeElement The element before which to place the figure.
 */


function wrapFigureContent(element, beforeElement = element) {
  const figure = element.ownerDocument.createElement('figure');
  beforeElement.parentNode.insertBefore(figure, beforeElement);
  figure.appendChild(element);
}
/**
 * This filter takes figure content out of paragraphs, wraps it in a figure
 * element, and moves any anchors with it if needed.
 *
 * @param {Node}     node   The node to filter.
 * @param {Document} doc    The document of the node.
 * @param {Object}   schema The schema to use.
 *
 * @return {void}
 */


function figureContentReducer(node, doc, schema) {
  if (!isFigureContent(node, schema)) {
    return;
  }

  let nodeToInsert = node;
  const parentNode = node.parentNode; // If the figure content can have an anchor and its parent is an anchor with
  // only the figure content, take the anchor out instead of just the content.

  if (canHaveAnchor(node, schema) && parentNode.nodeName === 'A' && parentNode.childNodes.length === 1) {
    nodeToInsert = node.parentNode;
  }

  const wrapper = nodeToInsert.closest('p,div'); // If wrapped in a paragraph or div, only extract if it's aligned or if
  // there is no text content.
  // Otherwise, if directly at the root, wrap in a figure element.

  if (wrapper) {
    // In jsdom-jscore, 'node.classList' can be undefined.
    // In this case, default to extract as it offers a better UI experience on mobile.
    if (!node.classList) {
      wrapFigureContent(nodeToInsert, wrapper);
    } else if (node.classList.contains('alignright') || node.classList.contains('alignleft') || node.classList.contains('aligncenter') || !wrapper.textContent.trim()) {
      wrapFigureContent(nodeToInsert, wrapper);
    }
  } else if (nodeToInsert.parentNode.nodeName === 'BODY') {
    wrapFigureContent(nodeToInsert);
  }
}

// EXTERNAL MODULE: external ["wp","shortcode"]
var external_wp_shortcode_ = __webpack_require__("SVSp");

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/shortcode-converter.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function segmentHTMLToShortcodeBlock(HTML, lastIndex = 0, excludedBlockNames = []) {
  // Get all matches.
  const transformsFrom = getBlockTransforms('from');
  const transformation = findTransform(transformsFrom, transform => excludedBlockNames.indexOf(transform.blockName) === -1 && transform.type === 'shortcode' && Object(external_lodash_["some"])(Object(external_lodash_["castArray"])(transform.tag), tag => Object(external_wp_shortcode_["regexp"])(tag).test(HTML)));

  if (!transformation) {
    return [HTML];
  }

  const transformTags = Object(external_lodash_["castArray"])(transformation.tag);
  const transformTag = Object(external_lodash_["find"])(transformTags, tag => Object(external_wp_shortcode_["regexp"])(tag).test(HTML));
  let match;
  const previousIndex = lastIndex;

  if (match = Object(external_wp_shortcode_["next"])(transformTag, HTML, lastIndex)) {
    lastIndex = match.index + match.content.length;
    const beforeHTML = HTML.substr(0, match.index);
    const afterHTML = HTML.substr(lastIndex); // If the shortcode content does not contain HTML and the shortcode is
    // not on a new line (or in paragraph from Markdown converter),
    // consider the shortcode as inline text, and thus skip conversion for
    // this segment.

    if (!Object(external_lodash_["includes"])(match.shortcode.content || '', '<') && !(/(\n|<p>)\s*$/.test(beforeHTML) && /^\s*(\n|<\/p>)/.test(afterHTML))) {
      return segmentHTMLToShortcodeBlock(HTML, lastIndex);
    } // If a transformation's `isMatch` predicate fails for the inbound
    // shortcode, try again by excluding the current block type.
    //
    // This is the only call to `segmentHTMLToShortcodeBlock` that should
    // ever carry over `excludedBlockNames`. Other calls in the module
    // should skip that argument as a way to reset the exclusion state, so
    // that one `isMatch` fail in an HTML fragment doesn't prevent any
    // valid matches in subsequent fragments.


    if (transformation.isMatch && !transformation.isMatch(match.shortcode.attrs)) {
      return segmentHTMLToShortcodeBlock(HTML, previousIndex, [...excludedBlockNames, transformation.blockName]);
    }

    const attributes = Object(external_lodash_["mapValues"])(Object(external_lodash_["pickBy"])(transformation.attributes, schema => schema.shortcode), // Passing all of `match` as second argument is intentionally broad
    // but shouldn't be too relied upon.
    //
    // See: https://github.com/WordPress/gutenberg/pull/3610#discussion_r152546926
    schema => schema.shortcode(match.shortcode.attrs, match));
    const block = createBlock(transformation.blockName, getBlockAttributes({ ...registration_getBlockType(transformation.blockName),
      attributes: transformation.attributes
    }, match.shortcode.content, attributes));
    return [...segmentHTMLToShortcodeBlock(beforeHTML), block, ...segmentHTMLToShortcodeBlock(afterHTML)];
  }

  return [HTML];
}

/* harmony default export */ var shortcode_converter = (segmentHTMLToShortcodeBlock);

// EXTERNAL MODULE: ./node_modules/showdown/dist/showdown.js
var showdown = __webpack_require__("M55E");
var showdown_default = /*#__PURE__*/__webpack_require__.n(showdown);

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/markdown-converter.js
/**
 * External dependencies
 */
 // Reuse the same showdown converter.

const converter = new showdown_default.a.Converter({
  noHeaderId: true,
  tables: true,
  literalMidWordUnderscores: true,
  omitExtraWLInCodeBlocks: true,
  simpleLineBreaks: true,
  strikethrough: true
});
/**
 * Corrects the Slack Markdown variant of the code block.
 * If uncorrected, it will be converted to inline code.
 *
 * @see https://get.slack.help/hc/en-us/articles/202288908-how-can-i-add-formatting-to-my-messages-#code-blocks
 *
 * @param {string} text The potential Markdown text to correct.
 *
 * @return {string} The corrected Markdown.
 */

function slackMarkdownVariantCorrector(text) {
  return text.replace(/((?:^|\n)```)([^\n`]+)(```(?:$|\n))/, (match, p1, p2, p3) => `${p1}\n${p2}\n${p3}`);
}
/**
 * Converts a piece of text into HTML based on any Markdown present.
 * Also decodes any encoded HTML.
 *
 * @param {string} text The plain text to convert.
 *
 * @return {string} HTML.
 */


function markdownConverter(text) {
  return converter.makeHtml(slackMarkdownVariantCorrector(text));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/iframe-remover.js
/**
 * Removes iframes.
 *
 * @param {Node} node The node to check.
 *
 * @return {void}
 */
function iframeRemover(node) {
  if (node.nodeName === 'IFRAME') {
    const text = node.ownerDocument.createTextNode(node.src);
    node.parentNode.replaceChild(text, node);
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/google-docs-uid-remover.js
/**
 * WordPress dependencies
 */

function googleDocsUIdRemover(node) {
  if (!node.id || node.id.indexOf('docs-internal-guid-') !== 0) {
    return;
  }

  Object(external_wp_dom_["unwrap"])(node);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/utils.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function getBlockContentSchemaFromTransforms(transforms, context) {
  const phrasingContentSchema = Object(external_wp_dom_["getPhrasingContentSchema"])(context);
  const schemaArgs = {
    phrasingContentSchema,
    isPaste: context === 'paste'
  };
  const schemas = transforms.map(({
    isMatch,
    blockName,
    schema
  }) => {
    const hasAnchorSupport = registration_hasBlockSupport(blockName, 'anchor');
    schema = Object(external_lodash_["isFunction"])(schema) ? schema(schemaArgs) : schema; // If the block does not has anchor support and the transform does not
    // provides an isMatch we can return the schema right away.

    if (!hasAnchorSupport && !isMatch) {
      return schema;
    }

    return Object(external_lodash_["mapValues"])(schema, value => {
      let attributes = value.attributes || []; // If the block supports the "anchor" functionality, it needs to keep its ID attribute.

      if (hasAnchorSupport) {
        attributes = [...attributes, 'id'];
      }

      return { ...value,
        attributes,
        isMatch: isMatch ? isMatch : undefined
      };
    });
  });
  return Object(external_lodash_["mergeWith"])({}, ...schemas, (objValue, srcValue, key) => {
    switch (key) {
      case 'children':
        {
          if (objValue === '*' || srcValue === '*') {
            return '*';
          }

          return { ...objValue,
            ...srcValue
          };
        }

      case 'attributes':
      case 'require':
        {
          return [...(objValue || []), ...(srcValue || [])];
        }

      case 'isMatch':
        {
          // If one of the values being merge is undefined (matches everything),
          // the result of the merge will be undefined.
          if (!objValue || !srcValue) {
            return undefined;
          } // When merging two isMatch functions, the result is a new function
          // that returns if one of the source functions returns true.


          return (...args) => {
            return objValue(...args) || srcValue(...args);
          };
        }
    }
  });
}
/**
 * Gets the block content schema, which is extracted and merged from all
 * registered blocks with raw transfroms.
 *
 * @param {string} context Set to "paste" when in paste context, where the
 *                         schema is more strict.
 *
 * @return {Object} A complete block content schema.
 */

function getBlockContentSchema(context) {
  return getBlockContentSchemaFromTransforms(getRawTransforms(), context);
}
/**
 * Checks whether HTML can be considered plain text. That is, it does not contain
 * any elements that are not line breaks.
 *
 * @param {string} HTML The HTML to check.
 *
 * @return {boolean} Whether the HTML can be considered plain text.
 */

function isPlain(HTML) {
  return !/<(?!br[ />])/i.test(HTML);
}
/**
 * Given node filters, deeply filters and mutates a NodeList.
 *
 * @param {NodeList} nodeList The nodeList to filter.
 * @param {Array}    filters  An array of functions that can mutate with the provided node.
 * @param {Document} doc      The document of the nodeList.
 * @param {Object}   schema   The schema to use.
 */

function deepFilterNodeList(nodeList, filters, doc, schema) {
  Array.from(nodeList).forEach(node => {
    deepFilterNodeList(node.childNodes, filters, doc, schema);
    filters.forEach(item => {
      // Make sure the node is still attached to the document.
      if (!doc.contains(node)) {
        return;
      }

      item(node, doc, schema);
    });
  });
}
/**
 * Given node filters, deeply filters HTML tags.
 * Filters from the deepest nodes to the top.
 *
 * @param {string} HTML    The HTML to filter.
 * @param {Array}  filters An array of functions that can mutate with the provided node.
 * @param {Object} schema  The schema to use.
 *
 * @return {string} The filtered HTML.
 */

function deepFilterHTML(HTML, filters = [], schema) {
  const doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  deepFilterNodeList(doc.body.childNodes, filters, doc, schema);
  return doc.body.innerHTML;
}
/**
 * Gets a sibling within text-level context.
 *
 * @param {Element} node  The subject node.
 * @param {string}  which "next" or "previous".
 */

function getSibling(node, which) {
  const sibling = node[`${which}Sibling`];

  if (sibling && Object(external_wp_dom_["isPhrasingContent"])(sibling)) {
    return sibling;
  }

  const {
    parentNode
  } = node;

  if (!parentNode || !Object(external_wp_dom_["isPhrasingContent"])(parentNode)) {
    return;
  }

  return getSibling(parentNode, which);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/html-formatting-remover.js
/**
 * Internal dependencies
 */


function isFormattingSpace(character) {
  return character === ' ' || character === '\r' || character === '\n' || character === '\t';
}
/**
 * Removes spacing that formats HTML.
 *
 * @see https://www.w3.org/TR/css-text-3/#white-space-processing
 *
 * @param {Node} node The node to be processed.
 * @return {void}
 */


function htmlFormattingRemover(node) {
  if (node.nodeType !== node.TEXT_NODE) {
    return;
  } // Ignore pre content. Note that this does not use Element#closest due to
  // a combination of (a) node may not be Element and (b) node.parentElement
  // does not have full support in all browsers (Internet Exporer).
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement#Browser_compatibility

  /** @type {Node?} */


  let parent = node;

  while (parent = parent.parentNode) {
    if (parent.nodeType === parent.ELEMENT_NODE && parent.nodeName === 'PRE') {
      return;
    }
  } // First, replace any sequence of HTML formatting space with a single space.


  let newData = node.data.replace(/[ \r\n\t]+/g, ' '); // Remove the leading space if the text element is at the start of a block,
  // is preceded by a line break element, or has a space in the previous
  // node.

  if (newData[0] === ' ') {
    const previousSibling = getSibling(node, 'previous');

    if (!previousSibling || previousSibling.nodeName === 'BR' || previousSibling.textContent.slice(-1) === ' ') {
      newData = newData.slice(1);
    }
  } // Remove the trailing space if the text element is at the end of a block,
  // is succeded by a line break element, or has a space in the next text
  // node.


  if (newData[newData.length - 1] === ' ') {
    const nextSibling = getSibling(node, 'next');

    if (!nextSibling || nextSibling.nodeName === 'BR' || nextSibling.nodeType === nextSibling.TEXT_NODE && isFormattingSpace(nextSibling.textContent[0])) {
      newData = newData.slice(0, -1);
    }
  } // If there's no data left, remove the node, so `previousSibling` stays
  // accurate. Otherwise, update the node data.


  if (!newData) {
    node.parentNode.removeChild(node);
  } else {
    node.data = newData;
  }
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/br-remover.js
/**
 * Internal dependencies
 */

/**
 * Removes trailing br elements from text-level content.
 *
 * @param {Element} node Node to check.
 */

function brRemover(node) {
  if (node.nodeName !== 'BR') {
    return;
  }

  if (getSibling(node, 'next')) {
    return;
  }

  node.parentNode.removeChild(node);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/empty-paragraph-remover.js
/**
 * Removes empty paragraph elements.
 *
 * @param {Element} node Node to check.
 */
function emptyParagraphRemover(node) {
  if (node.nodeName !== 'P') {
    return;
  }

  if (node.hasChildNodes()) {
    return;
  }

  node.parentNode.removeChild(node);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/paste-handler.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */
























/**
 * Browser dependencies
 */

const {
  console: paste_handler_console
} = window;
/**
 * Filters HTML to only contain phrasing content.
 *
 * @param {string}  HTML The HTML to filter.
 * @param {boolean} preserveWhiteSpace Whether or not to preserve consequent white space.
 *
 * @return {string} HTML only containing phrasing content.
 */

function filterInlineHTML(HTML, preserveWhiteSpace) {
  HTML = deepFilterHTML(HTML, [googleDocsUIdRemover, phrasingContentReducer, commentRemover]);
  HTML = Object(external_wp_dom_["removeInvalidHTML"])(HTML, Object(external_wp_dom_["getPhrasingContentSchema"])('paste'), {
    inline: true
  });

  if (!preserveWhiteSpace) {
    HTML = deepFilterHTML(HTML, [htmlFormattingRemover, brRemover]);
  } // Allows us to ask for this information when we get a report.


  paste_handler_console.log('Processed inline HTML:\n\n', HTML);
  return HTML;
}
/**
 * Converts an HTML string to known blocks. Strips everything else.
 *
 * @param {Object}  options
 * @param {string}  [options.HTML]      The HTML to convert.
 * @param {string}  [options.plainText] Plain text version.
 * @param {string}  [options.mode]      Handle content as blocks or inline content.
 *                                      * 'AUTO': Decide based on the content passed.
 *                                      * 'INLINE': Always handle as inline content, and return string.
 *                                      * 'BLOCKS': Always handle as blocks, and return array of blocks.
 * @param {Array}   [options.tagName]   The tag into which content will be inserted.
 * @param {boolean} [options.preserveWhiteSpace] Whether or not to preserve consequent white space.
 *
 * @return {Array|string} A list of blocks or a string, depending on `handlerMode`.
 */


function pasteHandler({
  HTML = '',
  plainText = '',
  mode = 'AUTO',
  tagName,
  preserveWhiteSpace
}) {
  // First of all, strip any meta tags.
  HTML = HTML.replace(/<meta[^>]+>/g, ''); // Strip Windows markers.

  HTML = HTML.replace(/^\s*<html[^>]*>\s*<body[^>]*>(?:\s*<!--\s*StartFragment\s*-->)?/i, '');
  HTML = HTML.replace(/(?:<!--\s*EndFragment\s*-->\s*)?<\/body>\s*<\/html>\s*$/i, ''); // If we detect block delimiters in HTML, parse entirely as blocks.

  if (mode !== 'INLINE') {
    // Check plain text if there is no HTML.
    const content = HTML ? HTML : plainText;

    if (content.indexOf('<!-- wp:') !== -1) {
      return parseWithGrammar(content);
    }
  } // Normalize unicode to use composed characters.
  // This is unsupported in IE 11 but it's a nice-to-have feature, not mandatory.
  // Not normalizing the content will only affect older browsers and won't
  // entirely break the app.
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
  // See: https://core.trac.wordpress.org/ticket/30130
  // See: https://github.com/WordPress/gutenberg/pull/6983#pullrequestreview-125151075


  if (String.prototype.normalize) {
    HTML = HTML.normalize();
  } // Parse Markdown (and encoded HTML) if:
  // * There is a plain text version.
  // * There is no HTML version, or it has no formatting.


  if (plainText && (!HTML || isPlain(HTML))) {
    HTML = plainText; // The markdown converter (Showdown) trims whitespace.

    if (!/^\s+$/.test(plainText)) {
      HTML = markdownConverter(HTML);
    } // Switch to inline mode if:
    // * The current mode is AUTO.
    // * The original plain text had no line breaks.
    // * The original plain text was not an HTML paragraph.
    // * The converted text is just a paragraph.


    if (mode === 'AUTO' && plainText.indexOf('\n') === -1 && plainText.indexOf('<p>') !== 0 && HTML.indexOf('<p>') === 0) {
      mode = 'INLINE';
    }
  }

  if (mode === 'INLINE') {
    return filterInlineHTML(HTML, preserveWhiteSpace);
  } // An array of HTML strings and block objects. The blocks replace matched
  // shortcodes.


  const pieces = shortcode_converter(HTML); // The call to shortcodeConverter will always return more than one element
  // if shortcodes are matched. The reason is when shortcodes are matched
  // empty HTML strings are included.

  const hasShortcodes = pieces.length > 1;

  if (mode === 'AUTO' && !hasShortcodes && isInlineContent(HTML, tagName)) {
    return filterInlineHTML(HTML, preserveWhiteSpace);
  }

  const phrasingContentSchema = Object(external_wp_dom_["getPhrasingContentSchema"])('paste');
  const blockContentSchema = getBlockContentSchema('paste');
  const blocks = Object(external_lodash_["compact"])(Object(external_lodash_["flatMap"])(pieces, piece => {
    // Already a block from shortcode.
    if (typeof piece !== 'string') {
      return piece;
    }

    const filters = [googleDocsUIdRemover, msListConverter, headRemover, listReducer, imageCorrector, phrasingContentReducer, specialCommentConverter, commentRemover, iframeRemover, figureContentReducer, blockquoteNormaliser];
    const schema = { ...blockContentSchema,
      // Keep top-level phrasing content, normalised by `normaliseBlocks`.
      ...phrasingContentSchema
    };
    piece = deepFilterHTML(piece, filters, blockContentSchema);
    piece = Object(external_wp_dom_["removeInvalidHTML"])(piece, schema);
    piece = normaliseBlocks(piece);
    piece = deepFilterHTML(piece, [htmlFormattingRemover, brRemover, emptyParagraphRemover], blockContentSchema); // Allows us to ask for this information when we get a report.

    paste_handler_console.log('Processed HTML piece:\n\n', piece);
    return htmlToBlocks(piece);
  })); // If we're allowed to return inline content, and there is only one
  // inlineable block, and the original plain text content does not have any
  // line breaks, then treat it as inline paste.

  if (mode === 'AUTO' && blocks.length === 1 && registration_hasBlockSupport(blocks[0].name, '__unstablePasteTextInline', false)) {
    // Don't catch line breaks at the start or end.
    const trimmedPlainText = plainText.replace(/^[\n]+|[\n]+$/g, '');

    if (trimmedPlainText !== '' && trimmedPlainText.indexOf('\n') === -1) {
      return Object(external_wp_dom_["removeInvalidHTML"])(getBlockInnerHTML(blocks[0]), phrasingContentSchema);
    }
  }

  return blocks;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/raw-handling/index.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */











function deprecatedGetPhrasingContentSchema(context) {
  external_wp_deprecated_default()('wp.blocks.getPhrasingContentSchema', {
    since: '5.6',
    alternative: 'wp.dom.getPhrasingContentSchema'
  });
  return Object(external_wp_dom_["getPhrasingContentSchema"])(context);
}
/**
 * Converts an HTML string to known blocks.
 *
 * @param {Object} $1
 * @param {string} $1.HTML The HTML to convert.
 *
 * @return {Array} A list of blocks.
 */

function rawHandler({
  HTML = ''
}) {
  // If we detect block delimiters, parse entirely as blocks.
  if (HTML.indexOf('<!-- wp:') !== -1) {
    return parseWithGrammar(HTML);
  } // An array of HTML strings and block objects. The blocks replace matched
  // shortcodes.


  const pieces = shortcode_converter(HTML);
  const blockContentSchema = getBlockContentSchema();
  return Object(external_lodash_["compact"])(Object(external_lodash_["flatMap"])(pieces, piece => {
    // Already a block from shortcode.
    if (typeof piece !== 'string') {
      return piece;
    } // These filters are essential for some blocks to be able to transform
    // from raw HTML. These filters move around some content or add
    // additional tags, they do not remove any content.


    const filters = [// Needed to adjust invalid lists.
    listReducer, // Needed to create more and nextpage blocks.
    specialCommentConverter, // Needed to create media blocks.
    figureContentReducer, // Needed to create the quote block, which cannot handle text
    // without wrapper paragraphs.
    blockquoteNormaliser];
    piece = deepFilterHTML(piece, filters, blockContentSchema);
    piece = normaliseBlocks(piece);
    return htmlToBlocks(piece);
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/categories.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/** @typedef {import('../store/reducer').WPBlockCategory} WPBlockCategory */

/**
 * Returns all the block categories.
 *
 * @return {WPBlockCategory[]} Block categories.
 */

function categories_getCategories() {
  return Object(external_wp_data_["select"])(store).getCategories();
}
/**
 * Sets the block categories.
 *
 * @param {WPBlockCategory[]} categories Block categories.
 */

function categories_setCategories(categories) {
  Object(external_wp_data_["dispatch"])(store).setCategories(categories);
}
/**
 * Updates a category.
 *
 * @param {string}          slug     Block category slug.
 * @param {WPBlockCategory} category Object containing the category properties
 *                                   that should be updated.
 */

function categories_updateCategory(slug, category) {
  Object(external_wp_data_["dispatch"])(store).updateCategory(slug, category);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/templates.js
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Checks whether a list of blocks matches a template by comparing the block names.
 *
 * @param {Array} blocks    Block list.
 * @param {Array} template  Block template.
 *
 * @return {boolean}        Whether the list of blocks matches a templates
 */

function doBlocksMatchTemplate(blocks = [], template = []) {
  return blocks.length === template.length && Object(external_lodash_["every"])(template, ([name,, innerBlocksTemplate], index) => {
    const block = blocks[index];
    return name === block.name && doBlocksMatchTemplate(block.innerBlocks, innerBlocksTemplate);
  });
}
/**
 * Synchronize a block list with a block template.
 *
 * Synchronizing a block list with a block template means that we loop over the blocks
 * keep the block as is if it matches the block at the same position in the template
 * (If it has the same name) and if doesn't match, we create a new block based on the template.
 * Extra blocks not present in the template are removed.
 *
 * @param {Array} blocks    Block list.
 * @param {Array} template  Block template.
 *
 * @return {Array}          Updated Block list.
 */

function synchronizeBlocksWithTemplate(blocks = [], template) {
  // If no template is provided, return blocks unmodified.
  if (!template) {
    return blocks;
  }

  return Object(external_lodash_["map"])(template, ([name, attributes, innerBlocksTemplate], index) => {
    const block = blocks[index];

    if (block && block.name === name) {
      const innerBlocks = synchronizeBlocksWithTemplate(block.innerBlocks, innerBlocksTemplate);
      return { ...block,
        innerBlocks
      };
    } // To support old templates that were using the "children" format
    // for the attributes using "html" strings now, we normalize the template attributes
    // before creating the blocks.


    const blockType = registration_getBlockType(name);

    const isHTMLAttribute = attributeDefinition => Object(external_lodash_["get"])(attributeDefinition, ['source']) === 'html';

    const isQueryAttribute = attributeDefinition => Object(external_lodash_["get"])(attributeDefinition, ['source']) === 'query';

    const normalizeAttributes = (schema, values) => {
      return Object(external_lodash_["mapValues"])(values, (value, key) => {
        return normalizeAttribute(schema[key], value);
      });
    };

    const normalizeAttribute = (definition, value) => {
      if (isHTMLAttribute(definition) && Object(external_lodash_["isArray"])(value)) {
        // Introduce a deprecated call at this point
        // When we're confident that "children" format should be removed from the templates.
        return Object(external_wp_element_["renderToString"])(value);
      }

      if (isQueryAttribute(definition) && value) {
        return value.map(subValues => {
          return normalizeAttributes(definition.query, subValues);
        });
      }

      return value;
    };

    const normalizedAttributes = normalizeAttributes(Object(external_lodash_["get"])(blockType, ['attributes'], {}), attributes);
    const {
      name: blockName,
      attributes: blockAttributes
    } = convertLegacyBlocks(name, normalizedAttributes);
    return createBlock(blockName, blockAttributes, synchronizeBlocksWithTemplate([], innerBlocksTemplate));
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/api/index.js
// The blocktype is the most important concept within the block API. It defines
// all aspects of the block configuration and its interfaces, including `edit`
// and `save`. The transforms specification allows converting one blocktype to
// another through formulas defined by either the source or the destination.
// Switching a blocktype is to be considered a one-way operation implying a
// transformation in the opposite way has to be handled explicitly.
 // The block tree is composed of a collection of block nodes. Blocks contained
// within other blocks are called inner blocks. An important design
// consideration is that inner blocks are -- conceptually -- not part of the
// territory established by the parent block that contains them.
//
// This has multiple practical implications: when parsing, we can safely dispose
// of any block boundary found within a block from the innerHTML property when
// transfering to state. Not doing so would have a compounding effect on memory
// and uncertainty over the source of truth. This can be illustrated in how,
// given a tree of `n` nested blocks, the entry node would have to contain the
// actual content of each block while each subsequent block node in the state
// tree would replicate the entire chain `n-1`, meaning the extreme end node
// would have been replicated `n` times as the tree is traversed and would
// generate uncertainty as to which one is to hold the current value of the
// block. For composition, it also means inner blocks can effectively be child
// components whose mechanisms can be shielded from the `edit` implementation
// and just passed along.

 // While block transformations account for a specific surface of the API, there
// are also raw transformations which handle arbitrary sources not made out of
// blocks but producing block basaed on various heursitics. This includes
// pasting rich text or HTML data.

 // The process of serialization aims to deflate the internal memory of the block
// editor and its state representation back into an HTML valid string. This
// process restores the document integrity and inserts invisible delimiters
// around each block with HTML comment boundaries which can contain any extra
// attributes needed to operate with the block later on.

 // Validation is the process of comparing a block source with its output before
// there is any user input or interaction with a block. When this operation
// fails -- for whatever reason -- the block is to be considered invalid. As
// part of validating a block the system will attempt to run the source against
// any provided deprecation definitions.
//
// Worth emphasizing that validation is not a case of whether the markup is
// merely HTML spec-compliant but about how the editor knows to create such
// markup and that its inability to create an identical result can be a strong
// indicator of potential data loss (the invalidation is then a protective
// measure).
//
// The invalidation process can also be deconstructed in phases: 1) validate the
// block exists; 2) validate the source matches the output; 3) validate the
// source matches deprecated outputs; 4) work through the significance of
// differences. These are stacked in a way that favors performance and optimizes
// for the majority of cases. That is to say, the evaluation logic can become
// more sophisticated the further down it goes in the process as the cost is
// accounted for. The first logic checks have to be extremely efficient since
// they will be run for all valid and invalid blocks alike. However, once a
// block is detected as invalid -- failing the three first steps -- it is
// adequate to spend more time determining validity before throwing a conflict.


 // Blocks are inherently indifferent about where the data they operate with ends
// up being saved. For example, all blocks can have a static and dynamic aspect
// to them depending on the needs. The static nature of a block is the `save()`
// definition that is meant to be serialized into HTML and which can be left
// void. Any block can also register a `render_callback` on the server, which
// makes its output dynamic either in part or in its totality.
//
// Child blocks are defined as a relationship that builds on top of the inner
// blocks mechanism. A child block is a block node of a particular type that can
// only exist within the inner block boundaries of a specific parent type. This
// allows block authors to compose specific blocks that are not meant to be used
// outside of a specified parent block context. Thus, child blocks extend the
// concept of inner blocks to support a more direct relationship between sets of
// blocks. The addition of parent–child would be a subset of the inner block
// functionality under the premise that certain blocks only make sense as
// children of another block.


 // Templates are, in a general sense, a basic collection of block nodes with any
// given set of predefined attributes that are supplied as the initial state of
// an inner blocks group. These nodes can, in turn, contain any number of nested
// blocks within their definition. Templates allow both to specify a default
// state for an editor session or a default set of blocks for any inner block
// implementation within a specific block.






// CONCATENATED MODULE: ./node_modules/@wordpress/blocks/build-module/index.js
// A "block" is the abstract term used to describe units of markup that,
// when composed together, form the content or layout of a page.
// The API for blocks is exposed via `wp.blocks`.
//
// Supported blocks are registered by calling `registerBlockType`. Once registered,
// the block is made available as an option to the editor interface.
//
// Blocks are inferred from the HTML source of a post through a parsing mechanism
// and then stored as objects in state, from which it is then rendered for editing.





/***/ }),

/***/ "1CF3":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dom"]; }());

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "7Cbv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = __webpack_exports__["a"] = (v4);

/***/ }),

/***/ "GRId":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "K9lf":
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "M55E":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;/*! showdown v 1.9.1 - 02-11-2019 */
(function(){
/**
 * Created by Tivie on 13-07-2015.
 */

function getDefaultOpts (simple) {
  'use strict';

  var defaultOptions = {
    omitExtraWLInCodeBlocks: {
      defaultValue: false,
      describe: 'Omit the default extra whiteline added to code blocks',
      type: 'boolean'
    },
    noHeaderId: {
      defaultValue: false,
      describe: 'Turn on/off generated header id',
      type: 'boolean'
    },
    prefixHeaderId: {
      defaultValue: false,
      describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
      type: 'string'
    },
    rawPrefixHeaderId: {
      defaultValue: false,
      describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
      type: 'boolean'
    },
    ghCompatibleHeaderId: {
      defaultValue: false,
      describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
      type: 'boolean'
    },
    rawHeaderId: {
      defaultValue: false,
      describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
      type: 'boolean'
    },
    headerLevelStart: {
      defaultValue: false,
      describe: 'The header blocks level start',
      type: 'integer'
    },
    parseImgDimensions: {
      defaultValue: false,
      describe: 'Turn on/off image dimension parsing',
      type: 'boolean'
    },
    simplifiedAutoLink: {
      defaultValue: false,
      describe: 'Turn on/off GFM autolink style',
      type: 'boolean'
    },
    excludeTrailingPunctuationFromURLs: {
      defaultValue: false,
      describe: 'Excludes trailing punctuation from links generated with autoLinking',
      type: 'boolean'
    },
    literalMidWordUnderscores: {
      defaultValue: false,
      describe: 'Parse midword underscores as literal underscores',
      type: 'boolean'
    },
    literalMidWordAsterisks: {
      defaultValue: false,
      describe: 'Parse midword asterisks as literal asterisks',
      type: 'boolean'
    },
    strikethrough: {
      defaultValue: false,
      describe: 'Turn on/off strikethrough support',
      type: 'boolean'
    },
    tables: {
      defaultValue: false,
      describe: 'Turn on/off tables support',
      type: 'boolean'
    },
    tablesHeaderId: {
      defaultValue: false,
      describe: 'Add an id to table headers',
      type: 'boolean'
    },
    ghCodeBlocks: {
      defaultValue: true,
      describe: 'Turn on/off GFM fenced code blocks support',
      type: 'boolean'
    },
    tasklists: {
      defaultValue: false,
      describe: 'Turn on/off GFM tasklist support',
      type: 'boolean'
    },
    smoothLivePreview: {
      defaultValue: false,
      describe: 'Prevents weird effects in live previews due to incomplete input',
      type: 'boolean'
    },
    smartIndentationFix: {
      defaultValue: false,
      description: 'Tries to smartly fix indentation in es6 strings',
      type: 'boolean'
    },
    disableForced4SpacesIndentedSublists: {
      defaultValue: false,
      description: 'Disables the requirement of indenting nested sublists by 4 spaces',
      type: 'boolean'
    },
    simpleLineBreaks: {
      defaultValue: false,
      description: 'Parses simple line breaks as <br> (GFM Style)',
      type: 'boolean'
    },
    requireSpaceBeforeHeadingText: {
      defaultValue: false,
      description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
      type: 'boolean'
    },
    ghMentions: {
      defaultValue: false,
      description: 'Enables github @mentions',
      type: 'boolean'
    },
    ghMentionsLink: {
      defaultValue: 'https://github.com/{u}',
      description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
      type: 'string'
    },
    encodeEmails: {
      defaultValue: true,
      description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
      type: 'boolean'
    },
    openLinksInNewWindow: {
      defaultValue: false,
      description: 'Open all links in new windows',
      type: 'boolean'
    },
    backslashEscapesHTMLTags: {
      defaultValue: false,
      description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
      type: 'boolean'
    },
    emoji: {
      defaultValue: false,
      description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
      type: 'boolean'
    },
    underline: {
      defaultValue: false,
      description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
      type: 'boolean'
    },
    completeHTMLDocument: {
      defaultValue: false,
      description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
      type: 'boolean'
    },
    metadata: {
      defaultValue: false,
      description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
      type: 'boolean'
    },
    splitAdjacentBlockquotes: {
      defaultValue: false,
      description: 'Split adjacent blockquote blocks',
      type: 'boolean'
    }
  };
  if (simple === false) {
    return JSON.parse(JSON.stringify(defaultOptions));
  }
  var ret = {};
  for (var opt in defaultOptions) {
    if (defaultOptions.hasOwnProperty(opt)) {
      ret[opt] = defaultOptions[opt].defaultValue;
    }
  }
  return ret;
}

function allOptionsOn () {
  'use strict';
  var options = getDefaultOpts(true),
      ret = {};
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      ret[opt] = true;
    }
  }
  return ret;
}

/**
 * Created by Tivie on 06-01-2015.
 */

// Private properties
var showdown = {},
    parsers = {},
    extensions = {},
    globalOptions = getDefaultOpts(true),
    setFlavor = 'vanilla',
    flavor = {
      github: {
        omitExtraWLInCodeBlocks:              true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks:                     true,
        requireSpaceBeforeHeadingText:        true,
        ghCompatibleHeaderId:                 true,
        ghMentions:                           true,
        backslashEscapesHTMLTags:             true,
        emoji:                                true,
        splitAdjacentBlockquotes:             true
      },
      original: {
        noHeaderId:                           true,
        ghCodeBlocks:                         false
      },
      ghost: {
        omitExtraWLInCodeBlocks:              true,
        parseImgDimensions:                   true,
        simplifiedAutoLink:                   true,
        excludeTrailingPunctuationFromURLs:   true,
        literalMidWordUnderscores:            true,
        strikethrough:                        true,
        tables:                               true,
        tablesHeaderId:                       true,
        ghCodeBlocks:                         true,
        tasklists:                            true,
        smoothLivePreview:                    true,
        simpleLineBreaks:                     