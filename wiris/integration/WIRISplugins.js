/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/dompurify/dist/purify.js":
/*!***************************************************!*\
  !*** ../../node_modules/dompurify/dist/purify.js ***!
  \***************************************************/
/***/ (function(module) {

/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringToString = unapply(String.prototype.toString);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    var _transformCaseFunc;

    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property]) === true) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.4.7';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        TMPLIT_EXPR$1 = TMPLIT_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */

    var ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */

    var SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */

    var SANITIZE_NAMED_PROPS = false;
    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */

    var ALLOWED_NAMESPACES = null;
    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // For XHTML and XML documents that support custom namespaces


      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */


      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');
        content = stringReplace(content, TMPLIT_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (value) {
        return false;
      } else ;

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */


        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode); // Prefix the value and later re-create the attribute with the sanitized value


          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }

              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty) {
      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var properties_1 = __webpack_require__(/*! ./properties */ "./src/properties.ts");
var latex_1 = __webpack_require__(/*! ./latex */ "./src/latex.ts");
var mathml_1 = __webpack_require__(/*! ./mathml */ "./src/mathml.ts");
var retro_1 = __webpack_require__(/*! ./retro */ "./src/retro.ts");
main(window);
function main(w) {
    return __awaiter(this, void 0, void 0, function () {
        var properties, document, start;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, properties_1.Properties.generate()];
                case 1:
                    properties = _a.sent();
                    w.viewer = {
                        properties: properties,
                    };
                    document = w.document;
                    properties.render = function () { return __awaiter(_this, void 0, void 0, function () {
                        var element;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    element = document.querySelector(properties.element);
                                    if (!element) return [3, 3];
                                    return [4, (0, latex_1.renderLatex)(properties, element)];
                                case 1:
                                    _a.sent();
                                    return [4, (0, mathml_1.renderMathML)(properties, element)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2];
                            }
                        });
                    }); };
                    start = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            properties.render();
                            return [2];
                        });
                    }); };
                    if (document.readyState === "loading") {
                        document.addEventListener("DOMContentLoaded", start);
                    }
                    else {
                        start();
                    }
                    (0, retro_1.bypassEncapsulation)(properties, w);
                    document.dispatchEvent(new Event('viewerLoaded'));
                    return [2];
            }
        });
    });
}


/***/ }),

/***/ "./src/latex.ts":
/*!**********************!*\
  !*** ./src/latex.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderLatex = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
function renderLatex(properties, root) {
    return __awaiter(this, void 0, void 0, function () {
        var latexNodes, latexNodes_1, latexNodes_1_1, latexNode, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (properties.viewer !== 'image' && properties.viewer !== 'latex') {
                        return [2];
                    }
                    latexNodes = findLatexTextNodes(root);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    latexNodes_1 = __values(latexNodes), latexNodes_1_1 = latexNodes_1.next();
                    _b.label = 2;
                case 2:
                    if (!!latexNodes_1_1.done) return [3, 5];
                    latexNode = latexNodes_1_1.value;
                    return [4, replaceLatexInTextNode(properties, latexNode)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    latexNodes_1_1 = latexNodes_1.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (latexNodes_1_1 && !latexNodes_1_1.done && (_a = latexNodes_1.return)) _a.call(latexNodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2];
            }
        });
    });
}
exports.renderLatex = renderLatex;
function replaceLatexInTextNode(properties, node) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var textContent, pos, nextLatexPosition, leftText, leftTextNode, latex, response, fragment, text, textNode;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    textContent = node.textContent || '';
                    pos = 0;
                    _e.label = 1;
                case 1:
                    if (!(pos < textContent.length)) return [3, 5];
                    nextLatexPosition = getNextLatexPos(pos, textContent);
                    if (!nextLatexPosition) return [3, 3];
                    leftText = textContent.substring(pos, nextLatexPosition.start);
                    leftTextNode = document.createTextNode(leftText);
                    (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(leftTextNode, node);
                    node.nodeValue = node.nodeValue.substring(pos, nextLatexPosition.start);
                    latex = textContent.substring(nextLatexPosition.start + '$$'.length, nextLatexPosition.end);
                    return [4, (0, services_1.latexToMathml)(latex, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 2:
                    response = _e.sent();
                    fragment = document.createRange().createContextualFragment(response.text);
                    (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(fragment, node);
                    node.nodeValue = node.nodeValue.substring(nextLatexPosition.start, nextLatexPosition.end);
                    pos = nextLatexPosition.end + '$$'.length;
                    return [3, 4];
                case 3:
                    text = textContent.substring(pos);
                    textNode = document.createTextNode(text);
                    (_c = node.parentNode) === null || _c === void 0 ? void 0 : _c.insertBefore(textNode, node);
                    node.nodeValue = '';
                    pos = textContent.length;
                    _e.label = 4;
                case 4: return [3, 1];
                case 5:
                    (_d = node.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(node);
                    return [2];
            }
        });
    });
}
function findLatexTextNodes(root) {
    var nodeIterator = document.createNodeIterator(root, NodeFilter.SHOW_TEXT, function (node) { return /(\$\$)(.*)(\$\$)/.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; });
    var latexNodes = [];
    var currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        latexNodes.push(currentNode);
    }
    return latexNodes;
}
function getNextLatexPos(pos, text) {
    var firstLatexTags = text.indexOf('$$', pos);
    var secondLatexTags = firstLatexTags == -1 ? -1 : text.indexOf('$$', firstLatexTags + '$$'.length);
    return firstLatexTags != -1 && secondLatexTags != -1 ? { 'start': firstLatexTags, 'end': secondLatexTags } : null;
}


/***/ }),

/***/ "./src/mathml.ts":
/*!***********************!*\
  !*** ./src/mathml.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderMathML = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
function renderMathML(properties, root) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, mathElement, mml, result, url, img, e_1_1;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (properties.viewer !== 'image' && properties.viewer !== 'mathml') {
                        return [2];
                    }
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 11, 12, 13]);
                    _b = __values(__spreadArray([], __read(root.getElementsByTagName('math')), false)), _c = _b.next();
                    _e.label = 2;
                case 2:
                    if (!!_c.done) return [3, 10];
                    mathElement = _c.value;
                    mml = (0, utils_1.htmlEntitiesToXmlEntities)(mathElement.outerHTML);
                    result = void 0;
                    if (!(properties.wirispluginperformance === 'true')) return [3, 4];
                    return [4, (0, services_1.showImage)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 3:
                    result = _e.sent();
                    return [3, 7];
                case 4: return [4, (0, services_1.createImage)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 5:
                    url = _e.sent();
                    url = url.replace('pluginsapp', 'plugins/app');
                    return [4, (0, services_1.processJsonResponse)(fetch(url))];
                case 6:
                    result = _e.sent();
                    _e.label = 7;
                case 7: return [4, setImageProperties(properties, result, mml)];
                case 8:
                    img = _e.sent();
                    (_a = mathElement.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(img, mathElement);
                    _e.label = 9;
                case 9:
                    _c = _b.next();
                    return [3, 2];
                case 10: return [3, 13];
                case 11:
                    e_1_1 = _e.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 13: return [2];
            }
        });
    });
}
exports.renderMathML = renderMathML;
;
function setImageProperties(properties, data, mml) {
    return __awaiter(this, void 0, void 0, function () {
        var img, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    img = document.createElement('img');
                    img.src = "data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(data.content));
                    img.setAttribute(properties.wiriseditormathmlattribute, mml);
                    img.setAttribute('class', 'Wirisformula');
                    img.setAttribute('role', 'math');
                    if (+data.height > 0) {
                        img.style.verticalAlign = "-" + (+data.height - +data.baseline) + "px";
                        img.height = +data.height;
                        img.width = +data.width;
                    }
                    if (!!utils_1.corruptMathML.some(function (corruptMathML) { return mml.includes(corruptMathML); })) return [3, 2];
                    return [4, (0, services_1.mathml2accessible)(mml, properties.lang, properties.editorServicesRoot, properties.editorServicesExtension)];
                case 1:
                    text = (_a.sent()).text;
                    img.alt = text;
                    _a.label = 2;
                case 2: return [2, img];
            }
        });
    });
}


/***/ }),

/***/ "./src/properties.ts":
/*!***************************!*\
  !*** ./src/properties.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Properties = void 0;
var services_1 = __webpack_require__(/*! ./services */ "./src/services.ts");
var defaultValues = {
    editorServicesRoot: 'https://www.wiris.net/demo/plugins/app/',
    editorServicesExtension: '',
    backendConfig: {
        wirispluginperformance: 'true',
        wiriseditormathmlattribute: 'data-mathml'
    },
    dpi: 96,
    element: 'body',
    lang: 'en',
    viewer: 'none',
    zoom: 1,
};
var Properties = (function () {
    function Properties() {
        var _this = this;
        this.render = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2];
        }); }); };
        this.config = defaultValues;
    }
    Properties.prototype.new = function () { };
    Properties.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance, pluginName, script, pluginNamePosition, params, urlParams, _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        instance = new Properties();
                        pluginName = 'WIRISplugins.js';
                        script = document.querySelector("script[src*=\"".concat(pluginName, "\"]"));
                        if (!!script) {
                            pluginNamePosition = script.src.lastIndexOf(pluginName);
                            params = script.src.substring(pluginNamePosition + pluginName.length);
                            urlParams = new URLSearchParams(params);
                            if (urlParams.get('dpi') !== null && urlParams.get('dpi') !== undefined) {
                                instance.config.dpi = +urlParams.get('dpi');
                            }
                            if (urlParams.get('element') !== null && urlParams.get('element') !== undefined) {
                                instance.config.element = urlParams.get('element');
                            }
                            if (urlParams.get('lang') !== null && urlParams.get('lang') !== undefined) {
                                instance.config.lang = urlParams.get('lang');
                            }
                            if (urlParams.get('viewer') !== null && urlParams.get('viewer') !== undefined) {
                                instance.config.viewer = urlParams.get('viewer');
                            }
                            if (urlParams.get('zoom') !== null && urlParams.get('zoom') !== undefined) {
                                instance.config.zoom = +urlParams.get('zoom');
                            }
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = instance.config;
                        return [4, (0, services_1.configurationJson)(['wirispluginperformance', 'wiriseditormathmlattribute'], instance.editorServicesRoot, instance.editorServicesExtension)];
                    case 2:
                        _a.backendConfig = _b.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _b.sent();
                        if (e_1 instanceof services_1.StatusError) {
                            console.error(e_1);
                        }
                        else {
                            throw e_1;
                        }
                        return [3, 4];
                    case 4: return [2, instance];
                }
            });
        });
    };
    Object.defineProperty(Properties.prototype, "editorServicesRoot", {
        get: function () {
            return this.config.editorServicesRoot ||
                defaultValues.editorServicesRoot;
        },
        set: function (editorServicesRoot) {
            this.config.editorServicesRoot = editorServicesRoot;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "editorServicesExtension", {
        get: function () {
            return this.config.editorServicesExtension ||
                defaultValues.editorServicesExtension;
        },
        set: function (editorServicesExtension) {
            this.config.editorServicesExtension = editorServicesExtension;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "lang", {
        get: function () {
            var configLang = (this.config.lang === 'inherit') ? null : this.config.lang;
            return configLang ||
                document.getElementsByTagName('html')[0].lang ||
                navigator.language ||
                defaultValues.lang;
        },
        set: function (lang) {
            this.config.lang = lang;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "viewer", {
        get: function () {
            return this.config.viewer ||
                defaultValues.viewer;
        },
        set: function (viewer) {
            this.config.viewer = viewer;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "dpi", {
        get: function () {
            return this.config.dpi ||
                defaultValues.dpi;
        },
        set: function (dpi) {
            this.config.dpi = dpi;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "zoom", {
        get: function () {
            return this.config.zoom ||
                defaultValues.zoom;
        },
        set: function (zoom) {
            this.config.zoom = zoom;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "element", {
        get: function () {
            return this.config.element ||
                defaultValues.element;
        },
        set: function (element) {
            this.config.element = element;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "wirispluginperformance", {
        get: function () {
            return this.config.backendConfig.wirispluginperformance ||
                defaultValues.backendConfig.wirispluginperformance;
        },
        set: function (wirispluginperformance) {
            this.config.backendConfig.wirispluginperformance = wirispluginperformance;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Properties.prototype, "wiriseditormathmlattribute", {
        get: function () {
            return this.config.backendConfig.wiriseditormathmlattribute ||
                defaultValues.backendConfig.wiriseditormathmlattribute;
        },
        set: function (wiriseditormathmlattribute) {
            this.config.backendConfig.wiriseditormathmlattribute = wiriseditormathmlattribute;
            this.render();
        },
        enumerable: false,
        configurable: true
    });
    return Properties;
}());
exports.Properties = Properties;


/***/ }),

/***/ "./src/retro.ts":
/*!**********************!*\
  !*** ./src/retro.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bypassEncapsulation = void 0;
var latex_1 = __webpack_require__(/*! ./latex */ "./src/latex.ts");
var mathml_1 = __webpack_require__(/*! ./mathml */ "./src/mathml.ts");
function bypassEncapsulation(properties, w) {
    var wany = w;
    if (typeof wany.com === 'undefined') {
        wany.com = {};
    }
    if (typeof wany.com.wiris === 'undefined') {
        wany.com.wiris = {};
    }
    if (typeof wany.com.wiris.js === 'undefined') {
        wany.com.wiris.js = {};
    }
    if (typeof wany.com.wiris.js.JsPluginViewer === 'undefined') {
        wany.com.wiris.js.JsPluginViewer = JsPluginViewer.getInstance();
        JsPluginViewer.properties = properties;
    }
}
exports.bypassEncapsulation = bypassEncapsulation;
var JsPluginViewer = (function () {
    function JsPluginViewer() {
    }
    JsPluginViewer.getInstance = function () {
        if (JsPluginViewer.instance == null) {
            JsPluginViewer.instance = new JsPluginViewer();
        }
        return JsPluginViewer.instance;
    };
    JsPluginViewer.prototype.parseSafeMathMLElement = function (element, asynchronously, callbackFunc) {
        var mathmlPositions = [];
        JsPluginViewer.getMathMLPositionsAtElementAndChildren(element, mathmlPositions);
        for (var i = 0; i < mathmlPositions.length; i++) {
            var mathmlPosition = mathmlPositions[i];
            var newNode = document.createElement("math");
            mathmlPosition.nextElement.parentNode.insertBefore(newNode, mathmlPosition.nextElement);
            newNode.outerHTML = JsPluginViewer.decodeSafeMathML(mathmlPosition.safeMML);
        }
    };
    JsPluginViewer.prototype.parseDocument = function (asynchronously, callbackFunc, safeXml) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, mathml_1.renderMathML)(JsPluginViewer.properties, document.documentElement)];
            });
        });
    };
    JsPluginViewer.prototype.parseElement = function (element, asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, mathml_1.renderMathML)(JsPluginViewer.properties, element)];
            });
        });
    };
    JsPluginViewer.prototype.parseLatexDocument = function (asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, latex_1.renderLatex)(JsPluginViewer.properties, document.documentElement)];
            });
        });
    };
    JsPluginViewer.prototype.parseLatexElement = function (element, asynchronously, callbackFunc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, (0, latex_1.renderLatex)(JsPluginViewer.properties, element)];
            });
        });
    };
    JsPluginViewer.decodeSafeMathML = function (input) {
        var safeXMLCharactersEntities = JsCharacters.getSafeXMLCharactersEntities();
        var xmlCharacters = JsCharacters.getXMLCharacters();
        var safeXMLCharacters = JsCharacters.getSafeXMLCharacters();
        var tagOpenerEntity = safeXMLCharactersEntities.tagOpener;
        var tagCloserEntity = safeXMLCharactersEntities.tagCloser;
        var doubleQuoteEntity = safeXMLCharactersEntities.doubleQuote;
        var realDoubleQuoteEntity = safeXMLCharactersEntities.realDoubleQuote;
        var inputCopy = input.slice();
        inputCopy = inputCopy.split(tagOpenerEntity).join(safeXMLCharacters.tagOpener);
        inputCopy = inputCopy.split(tagCloserEntity).join(safeXMLCharacters.tagCloser);
        inputCopy = inputCopy.split(doubleQuoteEntity).join(safeXMLCharacters.doubleQuote);
        inputCopy = inputCopy.split(realDoubleQuoteEntity).join(safeXMLCharacters.realDoubleQuote);
        var tagOpener = safeXMLCharacters.tagOpener;
        var tagCloser = safeXMLCharacters.tagCloser;
        var doubleQuote = safeXMLCharacters.doubleQuote;
        var realDoubleQuote = safeXMLCharacters.realDoubleQuote;
        var ampersand = safeXMLCharacters.ampersand;
        var quote = safeXMLCharacters.quote;
        inputCopy = inputCopy.split(tagOpener).join(xmlCharacters.tagOpener);
        inputCopy = inputCopy.split(tagCloser).join(xmlCharacters.tagCloser);
        inputCopy = inputCopy.split(doubleQuote).join(xmlCharacters.doubleQuote);
        inputCopy = inputCopy.split(ampersand).join(xmlCharacters.ampersand);
        inputCopy = inputCopy.split(quote).join(xmlCharacters.quote);
        var returnValue = '';
        var currentEntity = null;
        var i = 0;
        while (i < inputCopy.length) {
            var character = inputCopy.charAt(i);
            if (currentEntity == null) {
                if (character == '$') {
                    currentEntity = '';
                }
                else {
                    returnValue += character;
                }
            }
            else if (character == ';') {
                returnValue += '&' + currentEntity;
                currentEntity = null;
            }
            else if (character.match(/([a-zA-Z0-9#._-] | '-')/)) {
                currentEntity += character;
            }
            else {
                returnValue += '$' + 'currentEntity';
                currentEntity = null;
                i -= 1;
            }
            i++;
        }
        return returnValue;
    };
    JsPluginViewer.getMathMLPositionsAtElementAndChildren = function (element, mathmlPositions) {
        JsPluginViewer.getMathMLPositionsAtNode(element, mathmlPositions);
        var childNodes = Array.from(element.childNodes);
        if (childNodes.length > 0) {
            for (var i = 0; i < childNodes.length; i++) {
                var child = childNodes[i];
                JsPluginViewer.getMathMLPositionsAtElementAndChildren(child, mathmlPositions);
            }
        }
    };
    JsPluginViewer.getMathMLPositionsAtNode = function (node, mathmlPositions) {
        var safeXMLCharacters = JsCharacters.getSafeXMLCharacters();
        if (node.nodeType == 3) {
            var startMathmlTag = safeXMLCharacters.tagOpener + "math";
            var endMathmlTag = safeXMLCharacters.tagOpener + "/math" + safeXMLCharacters.tagCloser;
            var start = node.textContent.indexOf(startMathmlTag);
            var end = 0;
            while (start != -1) {
                end = node.textContent.indexOf(endMathmlTag, start + startMathmlTag.length);
                if (end == -1)
                    break;
                var nextMathML = node.textContent.indexOf(startMathmlTag, end + endMathmlTag.length);
                if (nextMathML >= 0 && end > nextMathML)
                    break;
                var safeMathml = node.textContent.substring(start, end + endMathmlTag.length);
                node.textContent = node.textContent.substring(0, start) + node.textContent.substring(end + endMathmlTag.length);
                node = node.splitText(start);
                start = node.textContent.indexOf(startMathmlTag);
                mathmlPositions.push({
                    safeMML: safeMathml,
                    nextElement: node
                });
            }
        }
    };
    return JsPluginViewer;
}());
var JsCharacters = (function () {
    function JsCharacters() {
    }
    JsCharacters.getSafeXMLCharactersEntities = function () {
        return {
            tagOpener: '&laquo;',
            tagCloser: '&raquo;',
            doubleQuote: '&uml;',
            realDoubleQuote: '&quot;',
        };
    };
    JsCharacters.getXMLCharacters = function () {
        return {
            id: 'xmlCharacters',
            tagOpener: '<',
            tagCloser: '>',
            doubleQuote: '"',
            ampersand: '&',
            quote: '\'',
        };
    };
    JsCharacters.getSafeXMLCharacters = function () {
        return {
            id: 'safeXmlCharacters',
            tagOpener: '«',
            tagCloser: '»',
            doubleQuote: '¨',
            ampersand: '§',
            quote: '`',
            realDoubleQuote: '¨',
        };
    };
    return JsCharacters;
}());


/***/ }),

/***/ "./src/services.ts":
/*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configurationJson = exports.latexToMathml = exports.createImage = exports.showImage = exports.mathml2accessible = exports.callService = exports.processJsonResponse = exports.StatusError = void 0;
var parser_1 = __importDefault(__webpack_require__(/*! @wiris/mathtype-html-integration-devkit/src/parser */ "../devkit/src/parser.js"));
var MethodType;
(function (MethodType) {
    MethodType["Post"] = "POST";
    MethodType["Get"] = "GET";
})(MethodType || (MethodType = {}));
var StatusError = (function (_super) {
    __extends(StatusError, _super);
    function StatusError(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, StatusError.prototype);
        return _this;
    }
    return StatusError;
}(Error));
exports.StatusError = StatusError;
function processJsonResponse(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, status_1, result, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4, response];
                case 1: return [4, (_b.sent()).json()];
                case 2:
                    _a = _b.sent(), status_1 = _a.status, result = _a.result;
                    if (status_1 !== 'ok') {
                        throw new StatusError('Service responded with a non-ok status');
                    }
                    return [2, result];
                case 3:
                    e_1 = _b.sent();
                    throw e_1;
                case 4: return [2];
            }
        });
    });
}
exports.processJsonResponse = processJsonResponse;
function callService(query, serviceName, method, serverURL, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var url, init, _a, _b, _c, key, value;
        var e_2, _d;
        return __generator(this, function (_e) {
            try {
                url = new URL(serviceName + extension, serverURL);
                init = {
                    method: method,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                };
                if (method === MethodType.Get) {
                    try {
                        for (_a = __values(Object.entries(query)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                            url.searchParams.set(key, value);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    init.body = new URLSearchParams(__assign({}, query));
                }
                return [2, fetch(url.toString(), init)];
            }
            catch (e) {
                throw e;
            }
            return [2];
        });
    });
}
exports.callService = callService;
function mathml2accessible(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'service': 'mathml2accessible',
                'mml': mml,
                'metrics': 'true',
                'centerbaseline': 'false',
                'lang': lang,
                'ignoreStyles': 'true',
            };
            response = callService(params, 'service', MethodType.Post, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.mathml2accessible = mathml2accessible;
function showImage(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, getParams, getResponse, e_3, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        'mml': mml,
                        'metrics': 'true',
                        'centerbaseline': 'false',
                        'lang': lang,
                    };
                    getParams = parser_1.default.createShowImageSrcData({ mml: mml }, lang);
                    getResponse = callService(getParams, 'showimage', MethodType.Get, url, extension);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, processJsonResponse(getResponse)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_3 = _a.sent();
                    if (e_3 instanceof StatusError) {
                    }
                    else {
                        throw e_3;
                    }
                    return [3, 4];
                case 4:
                    response = callService(params, 'showimage', MethodType.Post, url, extension);
                    return [2, processJsonResponse(response)];
            }
        });
    });
}
exports.showImage = showImage;
;
function createImage(mml, lang, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = {
                        'mml': mml,
                        'metrics': 'true',
                        'centerbaseline': 'false',
                        'lang': lang,
                    };
                    response = callService(params, 'createimage', MethodType.Get, url, extension);
                    return [4, response];
                case 1: return [2, (_a.sent()).text()];
            }
        });
    });
}
exports.createImage = createImage;
;
function latexToMathml(latex, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'service': 'latex2mathml',
                'latex': latex,
            };
            response = callService(params, 'service', MethodType.Post, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.latexToMathml = latexToMathml;
function configurationJson(variablekeys, url, extension) {
    return __awaiter(this, void 0, void 0, function () {
        var params, response;
        return __generator(this, function (_a) {
            params = {
                'variablekeys': variablekeys.join(','),
            };
            response = callService(params, 'configurationjson', MethodType.Get, url, extension);
            return [2, processJsonResponse(response)];
        });
    });
}
exports.configurationJson = configurationJson;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corruptMathML = exports.htmlEntitiesToXmlEntities = void 0;
function decodeEntities(text) {
    var element = document.createElement('textarea');
    element.innerHTML = text;
    return element.value;
}
function htmlEntitiesToXmlEntities(text) {
    text = decodeEntities(text);
    text = text.split('"<"').join('"&lt;"')
        .split('">"')
        .join('"&gt;"')
        .split('><<')
        .join('>&lt;<');
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i);
        if (text.charCodeAt(i) > 128) {
            result += '&#' + text.charCodeAt(i) + ';';
        }
        else {
            result += character;
        }
    }
    return result;
}
exports.htmlEntitiesToXmlEntities = htmlEntitiesToXmlEntities;
exports.corruptMathML = ['⟦', '&#10214;', '⟧', '&#10215;', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow'];


/***/ }),

/***/ "../devkit/src/accessibility.js":
/*!**************************************!*\
  !*** ../devkit/src/accessibility.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accessibility)
/* harmony export */ });
/* harmony import */ var _textcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textcache */ "../devkit/src/textcache.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _stringmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringmanager */ "../devkit/src/stringmanager.js");





/**
 * @classdesc
 * This class represents MathType accessible class. Converts MathML to accessible text and manages
 * the associated client-side cache.
 */
class Accessibility {
  /**
  * Static property.
  * Accessibility cache, each entry contains a MathML and its correspondent accessibility text.
  * @type {TextCache}
  */
  static get cache() {
    return Accessibility._cache;
  }

  /**
   * Static property setter.
   * Set accessibility cache.
   * @param {TextCahe} value - The property value.
   * @ignore
   */
  static set cache(value) {
    Accessibility._cache = value;
  }

  /**
   * Converts MathML strings to its accessible text representation.
   * @param {String} mathML - MathML to be converted to accessible text.
   * @param {String} [language] - Language of the accessible text. 'en' by default.
   * @param {Array.<String>} [data] - Parameters to send to mathml2accessible service.
   * @return {String} Accessibility text.
   */
  static mathMLToAccessible(mathML, language, data) {
    if (typeof language === 'undefined') {
      language = 'en';
    }
    // Check MathML class. If the class is chemistry,
    // we add chemistry to data to force accessibility service
    // to load chemistry grammar.
    if (_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].containClass(mathML, 'wrs_chemistry')) {
      data.mode = 'chemistry';
    }
    // Ignore accesibility styles
    data.ignoreStyles = true;
    let accessibleText = '';
    if (Accessibility.cache.get(mathML)) {
      accessibleText = Accessibility.cache.get(mathML);
    } else {
      data.service = 'mathml2accessible';
      data.lang = language;
      const accessibleJsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_1__["default"].getService('service', data));
      if (accessibleJsonResponse.status !== 'error') {
        accessibleText = accessibleJsonResponse.result.text;
        Accessibility.cache.populate(mathML, accessibleText);
      } else {
        accessibleText = _stringmanager__WEBPACK_IMPORTED_MODULE_3__["default"].get('error_convert_accessibility');
      }
    }
    return accessibleText;
  }
}

/**
 * Contains an instance of TextCache class to manage the JavaScript accessible cache.
 * Each entry of the cache object contains the MathML and it's correspondent accessibility text.
 * @private
 * @type {TextCache}
 */
Accessibility._cache = new _textcache__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "../devkit/src/configuration.js":
/*!**************************************!*\
  !*** ../devkit/src/configuration.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Configuration)
/* harmony export */ });
/**
 * This class represents the configuration class.
 * Usually used to retrieve configuration properties generated in the backend into the frontend.
 */
class Configuration {
  /**
   * Adds a properties object to {@link Configuration.properties}.
   * @param {Object} properties - properties to append to current properties.
   */
  static addConfiguration(properties) {
    Object.assign(Configuration.properties, properties);
  }

  /**
  * Static property.
  * The configuration properties object.
  * @private
  * @type {Object}
  */
  static get properties() {
    return Configuration._properties;
  }

  /**
   * Static property setter.
   * Set configuration properties.
   * @param {Object} value - The property value.
   * @ignore
   */
  static set properties(value) {
    Configuration._properties = value;
  }

  /**
   * Returns the value of a property key.
   * @param {String} key - Property key
   * @returns {String} Property value
   */
  static get(key) {
    if (!Object.prototype.hasOwnProperty.call(Configuration.properties, key)) {
      // Backwards compatibility.
      if (Object.prototype.hasOwnProperty.call(Configuration.properties, '_wrs_conf_')) {
        return Configuration.properties[`_wrs_conf_${key}`];
      }
      return false;
    }
    return Configuration.properties[key];
  }

  /**
   * Adds a new property to Configuration class.
   * @param {String} key - Property key.
   * @param {Object} value - Property value.
   */
  static set(key, value) {
    Configuration.properties[key] = value;
  }

  /**
   * Updates a property object value with new values.
   * @param {String} key - The property key to be updated.
   * @param {Object} propertyValue - Object containing the new values.
   */
  static update(key, propertyValue) {
    if (!Configuration.get(key)) {
      Configuration.set(key, propertyValue);
    } else {
      const updateProperty = Object.assign(Configuration.get(key), propertyValue);
      Configuration.set(key, updateProperty);
    }
  }
}

/**
 * Static properties object. Stores all configuration properties.
 * Needed to attribute accessors.
 * @private
 * @type {Object}
 */
Configuration._properties = {};

/***/ }),

/***/ "../devkit/src/constants.js":
/*!**********************************!*\
  !*** ../devkit/src/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Constants)
/* harmony export */ });
/**
 * This class represents all the constants needed in a MathType integration among different classes.
 * If a constant should be used across different classes should be defined using attribute
 * accessors.
 */
class Constants {
  /**
   * Safe XML entities.
   * @type {Object}
   */
  static get safeXmlCharactersEntities() {
    return {
      tagOpener: '&laquo;',
      tagCloser: '&raquo;',
      doubleQuote: '&uml;',
      realDoubleQuote: '&quot;'
    };
  }

  /**
   * Blackboard invalid safe characters.
   * @type {Object}
   */
  static get safeBadBlackboardCharacters() {
    return {
      ltElement: '«mo»<«/mo»',
      gtElement: '«mo»>«/mo»',
      ampElement: '«mo»&«/mo»'
    };
  }

  /**
   * Blackboard valid safe characters.
   * @type{Object}
   */
  static get safeGoodBlackboardCharacters() {
    return {
      ltElement: '«mo»§lt;«/mo»',
      gtElement: '«mo»§gt;«/mo»',
      ampElement: '«mo»§amp;«/mo»'
    };
  }

  /**
   * Standard XML special characters.
   * @type {Object}
   */
  static get xmlCharacters() {
    return {
      id: 'xmlCharacters',
      tagOpener: '<',
      // Hex: \x3C.
      tagCloser: '>',
      // Hex: \x3E.
      doubleQuote: '"',
      // Hex: \x22.
      ampersand: '&',
      // Hex: \x26.
      quote: '\'' // Hex: \x27.
    };
  }

  /**
  * Safe XML special characters. This characters are used instead the standard
  * the standard to parse the  MathML if safeXML save mode is enable. Each XML
  * special character have a UTF-8 representation.
  * @type {Object}
  */
  static get safeXmlCharacters() {
    return {
      id: 'safeXmlCharacters',
      tagOpener: '«',
      // Hex: \xAB.
      tagCloser: '»',
      // Hex: \xBB.
      doubleQuote: '¨',
      // Hex: \xA8.
      ampersand: '§',
      // Hex: \xA7.
      quote: '`',
      // Hex: \x60.
      realDoubleQuote: '¨'
    };
  }
}

/***/ }),

/***/ "../devkit/src/image.js":
/*!******************************!*\
  !*** ../devkit/src/image.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");



/**
 * @classdesc
 * This class represents MathType Image class. Contains all the logic related
 * to MathType images manipulation.
 * All MathType images are generated using the appropriate MathType
 * integration service: showimage or createimage.
 *
 * There are two available image formats:
 * - svg (default)
 * - png
 *
 * There are two formats for the image src attribute:
 * - A data-uri scheme containing the URL-encoded SVG or a PNG's base64.
 * - A link to the showimage service.
 */
class Image {
  /**
   * Removes data attributes from an image.
   * @param {HTMLImageElement} img - Image where remove data attributes.
   */
  static removeImgDataAttributes(img) {
    const attributesToRemove = [];
    const {
      attributes
    } = img;
    Object.keys(attributes).forEach(key => {
      const attribute = attributes[key];
      if (attribute !== undefined && attribute.name !== undefined && attribute.name.indexOf('data-') === 0) {
        // Is preferred keep an array and remove after the search
        // because when attribute is removed the array of attributes
        // is modified.
        attributesToRemove.push(attribute.name);
      }
    });
    attributesToRemove.forEach(attribute => {
      img.removeAttribute(attribute);
    });
  }

  /**
   * @static
   * Clones all MathType image attributes from a HTMLImageElement to another.
   * @param {HTMLImageElement} originImg - The original image.
   * @param {HTMLImageElement} destImg - The destination image.
   */
  static clone(originImg, destImg) {
    const customEditorAttributeName = _configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageCustomEditorName');
    if (!originImg.hasAttribute(customEditorAttributeName)) {
      destImg.removeAttribute(customEditorAttributeName);
    }
    const mathmlAttributeName = _configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageMathmlAttribute');
    const imgAttributes = [mathmlAttributeName, customEditorAttributeName, 'alt', 'height', 'width', 'style', 'src', 'role'];
    imgAttributes.forEach(iterator => {
      const originAttribute = originImg.getAttribute(iterator);
      if (originAttribute) {
        destImg.setAttribute(iterator, originAttribute);
      }
    });
  }

  /**
  * Calculates the metrics of a MathType image given the the service response and the image format.
  * @param {HTMLImageElement} img - The HTMLImageElement.
  * @param {String} uri - The URI generated by the image service: can be a data URI scheme or a URL.
  * @param {Boolean} jsonResponse - True the response of the image service is a
  * JSON object. False otherwise.
  */
  static setImgSize(img, uri, jsonResponse) {
    let ar;
    let base64String;
    let bytes;
    let svgString;
    if (jsonResponse) {
      // Cleaning data:image/png;base64.
      if (_configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('imageFormat') === 'svg') {
        // SVG format.
        // If SVG is encoded in base64 we need to convert the base64 bytes into a SVG string.
        if (_configuration__WEBPACK_IMPORTED_MODULE_0__["default"].get('saveMode') !== 'base64') {
          ar = Image.getMetricsFromSvgString(uri);
        } else {
          base64String = img.src.substr(img.src.indexOf('base64,') + 7, img.src.length);
          svgString = '';
          bytes = _util__WEBPACK_IMPORTED_MODULE_1__["default"].b64ToByteArray(base64String, base64String.length);
          for (let i = 0; i < bytes.length; i += 1) {
            svgString += String.fromCharCode(bytes[i]);
          }
          ar = Image.getMetricsFromSvgString(svgString);
        }
        // PNG format: we store all metrics information in the first 88 bytes.
      } else {
        base64String = img.src.substr(img.src.indexOf('base64,') + 7, img.src.length);
        bytes = _util__WEBPACK_IMPORTED_MODULE_1__["default"].b64ToByteArray(base64String, 88);
        ar = Image.getMetricsFromBytes(bytes);
      }
      // Backwards compatibility: we store the metrics into createimage response.
    } else {
      ar = _util__WEBPACK_IMPORTED_MODULE_1__["default"].urlToAssArray(uri);
    }
    let width = ar.cw;
    if (!width) {
      return;
    }
    let height = ar.ch;
    let baseline = ar.cb;
    const {
      dpi
    } = ar;
    if (dpi) {
      width = width * 96 / dpi;
      height = height * 96 / dpi;
      baseline = baseline * 96 / dpi;
    }
    img.width = width;
    img.height = height;
    img.style.verticalAlign = `-${height - baseline}px`;
  }

  /**
   * Calculates the metrics of an image which has been resized. Is used to restore the original
   * metrics of a resized image.
   * @param {HTMLImageElement } img - The resized HTMLImageElement.
   */
  static fixAfterResize(img) {
    img.removeAttribute('style');
    img.removeAttribute('width');
    img.removeAttribute('height');
    // In order to avoid resize with max-width css property.
    img.style.maxWidth = 'none';
    const processImg = img => {
      if (img.src.indexOf('data:image') !== -1) {
        if (img.src.indexOf('data:image/svg+xml') !== -1) {
          // Image is in base64
          if (img.src.indexOf('data:image/svg+xml;base64,') !== -1) {
            // 'data:image/svg+xml;base64,'.length === 26
            const base64String = img.getAttribute('src').substring(26);
            const svgString = window.atob(base64String);
            const encodedSvgString = encodeURIComponent(svgString);
            img.setAttribute('src', `data:image/svg+xml;charset=utf8,${encodedSvgString}`);
          }

          // 'data:image/svg+xml;charset=utf8,'.length === 32.
          const svg = decodeURIComponent(img.src.substring(32, img.src.length));
          Image.setImgSize(img, svg, true);
        } else {
          // 'data:image/png;base64,' === 22.
          const base64 = img.src.substring(22, img.src.length);
          Image.setImgSize(img, base64, true);
        }
      } else {
        Image.setImgSize(img, img.src);
      }
    };

    // If the image doesn't contain a blob, just process it normally
    if (img.src.indexOf('blob:') === -1) {
      processImg(img);
      // if it does contain a blob, then read that, replace the src with the decoded content, and process it
    } else {
      let reader = new FileReader();
      reader.onload = function () {
        img.setAttribute('src', reader.result);
        processImg(img);
      };
      fetch(img.src).then(r => r.blob()).then(blob => {
        reader.readAsDataURL(blob);
      });
    }
  }

  /**
   * Returns the metrics (height, width and baseline) contained in a SVG image generated
   * by the MathType image service. This image contains as an extra custom attribute:
   * the baseline (wrs:baseline).
   * @param {String} svgString - The SVG image.
   * @return {Array} - The image metrics.
   */
  static getMetricsFromSvgString(svgString) {
    let first = svgString.indexOf('height="');
    let last = svgString.indexOf('"', first + 8, svgString.length);
    const height = svgString.substring(first + 8, last);
    first = svgString.indexOf('width="');
    last = svgString.indexOf('"', first + 7, svgString.length);
    const width = svgString.substring(first + 7, last);
    first = svgString.indexOf('wrs:baseline="');
    last = svgString.indexOf('"', first + 14, svgString.length);
    const baseline = svgString.substring(first + 14, last);
    if (typeof width !== 'undefined') {
      const arr = [];
      arr.cw = width;
      arr.ch = height;
      if (typeof baseline !== 'undefined') {
        arr.cb = baseline;
      }
      return arr;
    }
    return [];
  }

  /**
   * Returns the metrics (width, height, baseline and dpi) contained in a PNG byte array.
   * @param  {Array.<Bytes>} bytes - png byte array.
   * @return {Array} The png metrics.
   */
  static getMetricsFromBytes(bytes) {
    _util__WEBPACK_IMPORTED_MODULE_1__["default"].readBytes(bytes, 0, 8);
    let width;
    let height;
    let typ;
    let baseline;
    let dpi;
    while (bytes.length >= 4) {
      typ = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
      if (typ === 0x49484452) {
        width = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        height = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        // Read 5 bytes.
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readByte(bytes);
      } else if (typ === 0x62615345) {
        // Baseline: 'baSE'.
        baseline = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
      } else if (typ === 0x70485973) {
        // Dpis: 'pHYs'.
        dpi = _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        dpi = Math.round(dpi / 39.37);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].readByte(bytes);
      }
      _util__WEBPACK_IMPORTED_MODULE_1__["default"].readInt32(bytes);
    }
    if (typeof width !== 'undefined') {
      const arr = [];
      arr.cw = width;
      arr.ch = height;
      arr.dpi = dpi;
      if (baseline) {
        arr.cb = baseline;
      }
      return arr;
    }
    return [];
  }
}

/***/ }),

/***/ "../devkit/src/latex.js":
/*!******************************!*\
  !*** ../devkit/src/latex.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Latex)
/* harmony export */ });
/* harmony import */ var _textcache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textcache */ "../devkit/src/textcache.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");






/**
 * @classdesc
 * This class represents a LaTeX parser. Manages the services which allows to convert
 * LaTeX into MathML and MathML into LaTeX.
 */
class Latex {
  /**
   * Static property.
   * Return latex cache.
   * @private
   * @type {Cache}
   */
  static get cache() {
    return Latex._cache;
  }

  /**
   * Static property setter.
   * Set latex cache.
   * @param {Cache} value - The property value.
   * @ignore
  */
  static set cache(value) {
    Latex._cache = value;
  }

  /**
   * Converts MathML to LaTeX by calling mathml2latex service. For text services
   * we call a text service with the param mathml2latex.
   * @param {String} mathml - MathML String.
   * @return {String} LaTeX string generated by the MathML argument.
   */
  static getLatexFromMathML(mathml) {
    const mathmlWithoutSemantics = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].removeSemantics(mathml);
    /**
     * @type {TextCache}
     */
    const {
      cache
    } = Latex;
    const data = {
      service: 'mathml2latex',
      mml: mathmlWithoutSemantics
    };
    const jsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_2__["default"].getService('service', data));

    // TODO: Error handling.
    let latex = '';
    if (jsonResponse.status === 'ok') {
      latex = jsonResponse.result.text;
      const latexHtmlEntitiesEncoded = _util__WEBPACK_IMPORTED_MODULE_4__["default"].htmlEntities(latex);
      // Inserting LaTeX semantics.
      const mathmlWithSemantics = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].addAnnotation(mathml, latexHtmlEntitiesEncoded, 'LaTeX');
      cache.populate(latex, mathmlWithSemantics);
    }
    return latex;
  }

  /**
   * Converts LaTeX to MathML by calling latex2mathml service. For text services
   * we call a text service with the param latex2mathml.
   * @param {String} latex - String containing a LaTeX formula.
   * @param {Boolean} includeLatexOnSemantics
   * - If true LaTeX would me included into MathML semantics.
   * @return {String} MathML string generated by the LaTeX argument.
   */
  static getMathMLFromLatex(latex, includeLatexOnSemantics) {
    /**
     * @type {TextCache}
     */
    const latexCache = Latex.cache;
    if (Latex.cache.get(latex)) {
      return Latex.cache.get(latex);
    }
    const data = {
      service: 'latex2mathml',
      latex
    };
    if (includeLatexOnSemantics) {
      data.saveLatex = '';
    }
    const jsonResponse = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_2__["default"].getService('service', data));
    let output;
    if (jsonResponse.status === 'ok') {
      let mathml = jsonResponse.result.text;
      mathml = mathml.split('\r').join('').split('\n').join(' ');

      // Populate LatexCache.
      if (mathml.indexOf('semantics') === -1 && mathml.indexOf('annotation') === -1) {
        const content = _util__WEBPACK_IMPORTED_MODULE_4__["default"].htmlEntities(latex);
        mathml = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].addAnnotation(mathml, content, 'LaTeX');
        output = mathml;
      } else {
        output = mathml;
      }
      if (!latexCache.get(latex)) {
        latexCache.populate(latex, mathml);
      }
    } else {
      output = `$$${latex}$$`;
    }
    return output;
  }

  /**
   * Converts all occurrences of MathML code to LaTeX.
   * The MathML code should containing <annotation encoding="LaTeX"/> to be converted.
   * @param {String} content - A string containing MathML valid code.
   * @param {Object} characters - An object containing special characters.
   * @return {String} A string containing all MathML annotated occurrences
   * replaced by the corresponding LaTeX code.
   */
  static parseMathmlToLatex(content, characters) {
    let output = '';
    const mathTagBegin = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    const openTarget = `${characters.tagOpener}annotation encoding=${characters.doubleQuote}LaTeX${characters.doubleQuote}${characters.tagCloser}`;
    const closeTarget = `${characters.tagOpener}/annotation${characters.tagCloser}`;
    let start = content.indexOf(mathTagBegin);
    let end = 0;
    let mathml;
    let startAnnotation;
    let closeAnnotation;
    while (start !== -1) {
      output += content.substring(end, start);
      end = content.indexOf(mathTagEnd, start);
      if (end === -1) {
        end = content.length - 1;
      } else {
        end += mathTagEnd.length;
      }
      mathml = content.substring(start, end);
      startAnnotation = mathml.indexOf(openTarget);
      if (startAnnotation !== -1) {
        startAnnotation += openTarget.length;
        closeAnnotation = mathml.indexOf(closeTarget);
        let latex = mathml.substring(startAnnotation, closeAnnotation);
        if (characters === _constants__WEBPACK_IMPORTED_MODULE_3__["default"].safeXmlCharacters) {
          latex = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlDecode(latex);
        }
        output += `$$${latex}$$`;
        // Populate latex into cache.

        Latex.cache.populate(latex, mathml);
      } else {
        output += mathml;
      }
      start = content.indexOf(mathTagBegin, end);
    }
    output += content.substring(end, content.length);
    return output;
  }

  /**
   * Extracts the latex of a determined position in a text.
   * @param {Node} textNode - textNode to extract the LaTeX
   * @param {Number} caretPosition - Starting position to find LaTeX.
   * @param {Object} latexTags - Optional parameter representing tags between latex is inserted.
   * It has the 'open' attribute for the open tag and the 'close' attribute for the close tag.
   * "$$" by default.
   * @return {Object} An object with 3 keys: 'latex', 'start' and 'end'. Null if latex is not found.
   * @static
   */
  static getLatexFromTextNode(textNode, caretPosition, latexTags) {
    // TODO: Set LaTeX Tags as Core variable. Fix the call to this function (third argument).
    // Tags used for LaTeX formulas.
    const defaultLatexTags = {
      open: '$$',
      close: '$$'
    };
    // latexTags is an optional parameter. If is not set, use default latexTags.
    if (typeof latexTags === 'undefined' || latexTags == null) {
      latexTags = defaultLatexTags;
    }
    // Looking for the first textNode.
    let startNode = textNode;
    while (startNode.previousSibling && startNode.previousSibling.nodeType === 3) {
      // TEXT_NODE.
      startNode = startNode.previousSibling;
    }

    /**
     * Returns the next latex position and node from a specific node and position.
     * @param {Node} currentNode - Node where searching latex.
     * @param {Number} currentPosition - Current position inside the currentNode.
     * @param {Object} latexTagsToUse - Tags used at latex beginning and latex final.
     * "$$" by default.
     * @param {Boolean} tag - Tag containing the current search.
     * @returns {Object} Object containing the current node and the position.
     */
    function getNextLatexPosition(currentNode, currentPosition, tag) {
      let position = currentNode.nodeValue.indexOf(tag, currentPosition);
      while (position === -1) {
        currentNode = currentNode.nextSibling;
        if (!currentNode) {
          // TEXT_NODE.
          return null; // Not found.
        }

        position = currentNode.nodeValue ? currentNode.nodeValue.indexOf(latexTags.close) : -1;
      }
      return {
        node: currentNode,
        position
      };
    }

    /**
     * Determines if a node is previous, or not, to a second one.
     * @param {Node} node - Start node.
     * @param {Number} position - Start node position.
     * @param {Node} endNode - End node.
     * @param {Number} endPosition - End node position.
     * @returns {Boolean} True if the starting node is previous thant the en node. false otherwise.
     */
    function isPrevious(node, position, endNode, endPosition) {
      if (node === endNode) {
        return position <= endPosition;
      }
      while (node && node !== endNode) {
        node = node.nextSibling;
      }
      return node === endNode;
    }
    let start;
    let end = {
      node: startNode,
      position: 0
    };
    // Is supposed that open and close tags has the same length.
    const tagLength = latexTags.open.length;
    do {
      start = getNextLatexPosition(end.node, end.position, latexTags.open);
      if (start == null || isPrevious(textNode, caretPosition, start.node, start.position)) {
        return null;
      }
      end = getNextLatexPosition(start.node, start.position + tagLength, latexTags.close);
      if (end == null) {
        return null;
      }
      end.position += tagLength;
    } while (isPrevious(end.node, end.position, textNode, caretPosition));

    // Isolating latex.
    let latex;
    if (start.node === end.node) {
      latex = start.node.nodeValue.substring(start.position + tagLength, end.position - tagLength);
    } else {
      const index = start.position + tagLength;
      latex = start.node.nodeValue.substring(index, start.node.nodeValue.length);
      let currentNode = start.node;
      do {
        currentNode = currentNode.nextSibling;
        if (currentNode === end.node) {
          latex += end.node.nodeValue.substring(0, end.position - tagLength);
        } else {
          latex += currentNode.nodeValue ? currentNode.nodeValue : '';
        }
      } while (currentNode !== end.node);
    }
    return {
      latex,
      startNode: start.node,
      startPosition: start.position,
      endNode: end.node,
      endPosition: end.position
    };
  }
}

/**
 * Text cache. Stores all processed LaTeX strings and it's correspondent MathML string.
 * @type {Cache}
 * @static
 */
Latex._cache = new _textcache__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "../devkit/src/listeners.js":
/*!**********************************!*\
  !*** ../devkit/src/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Listeners)
/* harmony export */ });
/**
 * This object represents a custom listener.
 * @typedef {Object} Listener
 * @property {String} Listener.eventName - The listener name.
 * @property {Function} Listener.callback - The listener callback function.
 */

class Listeners {
  /**
   * @classdesc
   * This class represents a custom listeners manager.
   * @constructs
   */
  constructor() {
    /**
     * Array containing all custom listeners.
     * @type {Object[]}
     */
    this.listeners = [];
  }

  /**
   * Add a listener to Listener class.
   * @param {Object} listener - A listener object.
   */
  add(listener) {
    this.listeners.push(listener);
  }

  /**
   * Fires MathType event listeners
   * @param {String} eventName - event name
   * @param {Event} event - event object.
   * @return {boolean} false if event has been prevented. true otherwise.
   */
  fire(eventName, event) {
    for (let i = 0; i < this.listeners.length && !event.cancelled; i += 1) {
      if (this.listeners[i].eventName === eventName) {
        // Calling listener.
        this.listeners[i].callback(event);
      }
    }
    return event.defaultPrevented;
  }

  /**
   * Creates a new listener object.
   * @param {string} eventName - Event name.
   * @param {Object} callback - Callback function.
   * @returns {object} the listener object.
   */
  static newListener(eventName, callback) {
    const listener = {};
    listener.eventName = eventName;
    listener.callback = callback;
    return listener;
  }
}

/***/ }),

/***/ "../devkit/src/mathml.js":
/*!*******************************!*\
  !*** ../devkit/src/mathml.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MathML)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");



/**
 * @classdesc
 * This class represents a class to manage MathML objects.
 */
class MathML {
  /**
   * Checks if the mathml at position i is inside an HTML attribute or not.
   * @param {string} content - a string containing MathML code.
   * @param {number} i -  search index.
   * @return {boolean} true if is inside an HTML attribute. false otherwise.
   */
  static isMathmlInAttribute(content, i) {
    // Regex =
    // '^[\'"][\\s]*=[\\s]*[\\w-]+([\\s]*("[^"]*"|\'[^\']*\')[\\s]*
    // =[\\s]*[\\w-]+[\\s]*)*[\\s]+gmi<';
    const mathAtt = '[\'"][\\s]*=[\\s]*[\\w-]+'; // "=att OR '=att
    const attContent = '"[^"]*"|\'[^\']*\''; // "blabla" OR 'blabla'
    const att = `[\\s]*(${attContent})[\\s]*=[\\s]*[\\w-]+[\\s]*`; // "blabla"=att OR 'blabla'=att
    const atts = `('${att}')*`; // "blabla"=att1 "blabla"=att2
    const regex = `^${mathAtt}${atts}[\\s]+gmi<`; // "=att "blabla"=att1 "blabla"=att2 gmi< .
    const expression = new RegExp(regex);
    const actualContent = content.substring(0, i);
    const reversed = actualContent.split('').reverse().join('');
    const exists = expression.test(reversed);
    return exists;
  }

  /**
   * Decodes an encoded MathML with standard XML tags.
   * We use these entities because IE doesn't support html entities
   * on its attributes sometimes. Yes, sometimes.
   * @param {string} input - string to be decoded.
   * @return {string} decoded string.
   */
  static safeXmlDecode(input) {
    let {
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    let {
      realDoubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharactersEntities;
    // Decoding entities.
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.doubleQuote);
    // Added to fix problem due to import from 1.9.x.
    input = input.split(realDoubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.realDoubleQuote);

    // Blackboard.
    const {
      ltElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    const {
      gtElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    const {
      ampElement
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeBadBlackboardCharacters;
    if ('_wrs_blackboard' in window && window._wrs_blackboard) {
      input = input.split(ltElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.ltElement);
      input = input.split(gtElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.gtElement);
      input = input.split(ampElement).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeGoodBlackboardCharacters.ampElement);
    }
    ({
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    ({
      realDoubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters);
    const {
      ampersand
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters;
    const {
      quote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters;

    // Decoding characters.
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.doubleQuote);
    input = input.split(ampersand).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.ampersand);
    input = input.split(quote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters.quote);

    // We are replacing $ by & when its part of an entity for retro-compatibility.
    // Now, the standard is replace § by &.
    let returnValue = '';
    let currentEntity = null;
    for (let i = 0; i < input.length; i += 1) {
      const character = input.charAt(i);
      if (currentEntity == null) {
        if (character === '$') {
          currentEntity = '';
        } else {
          returnValue += character;
        }
      } else if (character === ';') {
        returnValue += `&${currentEntity}`;
        currentEntity = null;
      } else if (character.match(/([a-zA-Z0-9#._-] | '-')/)) {
        // Character is part of an entity.
        currentEntity += character;
      } else {
        returnValue += `$${currentEntity}`; // Is not an entity.
        currentEntity = null;
        i -= 1; // Parse again the current character.
      }
    }

    return returnValue;
  }

  /**
   * Encodes a MathML with standard XML tags to a MMathML encoded with safe XML tags.
   * We use these entities because IE doesn't support html entities on its attributes sometimes.
   * @param {string} input - input string to be encoded
   * @returns {string} encoded string.
   */
  static safeXmlEncode(input) {
    const {
      tagOpener
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      tagCloser
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      doubleQuote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      ampersand
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    const {
      quote
    } = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters;
    input = input.split(tagOpener).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagOpener);
    input = input.split(tagCloser).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.tagCloser);
    input = input.split(doubleQuote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.doubleQuote);
    input = input.split(ampersand).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.ampersand);
    input = input.split(quote).join(_constants__WEBPACK_IMPORTED_MODULE_0__["default"].safeXmlCharacters.quote);
    return input;
  }

  /**
   * Converts special symbols (> 128) to entities and replaces all textual
   * entities by its number entities.
   * @param {string} mathml - MathML string containing - or not - special symbols
   * @returns {string} MathML with all textual entities replaced.
   */
  static mathMLEntities(mathml) {
    let toReturn = '';
    for (let i = 0; i < mathml.length; i += 1) {
      const character = mathml.charAt(i);

      // Parsing > 128 characters.
      if (mathml.codePointAt(i) > 128) {
        toReturn += `&#${mathml.codePointAt(i)};`;
        // For UTF-32 characters we need to move the index one position.
        if (mathml.codePointAt(i) > 0xffff) {
          i += 1;
        }
      } else if (character === '&') {
        const end = mathml.indexOf(';', i + 1);
        if (end >= 0) {
          const container = document.createElement('span');
          container.innerHTML = mathml.substring(i, end + 1);
          toReturn += `&#${_util__WEBPACK_IMPORTED_MODULE_1__["default"].fixedCharCodeAt(container.textContent || container.innerText, 0)};`;
          i = end;
        } else {
          toReturn += character;
        }
      } else {
        toReturn += character;
      }
    }
    return toReturn;
  }

  /**
   * Add a custom editor name with the prefix wrs_ to a MathML class attribute.
   * @param {string} mathml - a MathML string created with a custom editor, like chemistry.
   * @param {string} customEditor - custom editor name.
   * @returns {string} MathML string with his class containing the editor toolbar string.
   */
  static addCustomEditorClassAttribute(mathml, customEditor) {
    let toReturn = '';
    const start = mathml.indexOf('<math');
    if (start === 0) {
      const end = mathml.indexOf('>');
      if (mathml.indexOf('class') === -1) {
        // Adding custom editor type.
        toReturn = `${mathml.substr(start, end)} class="wrs_${customEditor}">`;
        toReturn += mathml.substr(end + 1, mathml.length);
        return toReturn;
      }
    }
    return mathml;
  }

  /**
   * Remove a custom editor name from the MathML class attribute.
   * @param {string} mathml - a MathML string.
   * @param {string} customEditor - custom editor name.
   * @returns {string} The input MathML without customEditor name in his class.
   */
  static removeCustomEditorClassAttribute(mathml, customEditor) {
    // Discard MathML without the specified class.
    if (mathml.indexOf('class') === -1 || mathml.indexOf(`wrs_${customEditor}`) === -1) {
      return mathml;
    }

    // Trivial case: class attribute value equal to editor name. Then
    // class attribute is removed.
    // First try to remove it with a space before if there is one
    // Otherwise without the space
    if (mathml.indexOf(` class="wrs_${customEditor}"`) !== -1) {
      return mathml.replace(` class="wrs_${customEditor}"`, '');
    } else if (mathml.indexOf(`class="wrs_${customEditor}"`) !== -1) {
      return mathml.replace(`class="wrs_${customEditor}"`, '');
    }

    // Non Trivial case: class attribute contains editor name.
    return mathml.replace(`wrs_${customEditor}`, '');
  }

  /**
   * Adds annotation tag in MathML element.
   * @param {String} mathml - valid MathML.
   * @param {String} content - value to put inside annotation tag.
   * @param {String} annotationEncoding - annotation encoding.
   * @returns {String} - 'mathml' with an annotation that contains
   * 'content' and encoding 'encoding'.
   */
  static addAnnotation(mathml, content, annotationEncoding) {
    // If contains annotation, also contains semantics tag.
    const containsAnnotation = mathml.indexOf('<annotation');
    let mathmlWithAnnotation = '';
    if (containsAnnotation !== -1) {
      const closeSemanticsIndex = mathml.indexOf('</semantics>');
      mathmlWithAnnotation = `${mathml.substring(0, closeSemanticsIndex)}<annotation encoding="${annotationEncoding}">${content}</annotation>${mathml.substring(closeSemanticsIndex)}`;
    } else if (MathML.isEmpty(mathml)) {
      const endIndexInline = mathml.indexOf('/>');
      const endIndexNonInline = mathml.indexOf('>');
      const endIndex = endIndexNonInline === endIndexInline ? endIndexInline : endIndexNonInline;
      mathmlWithAnnotation = `${mathml.substring(0, endIndex)}><semantics><annotation encoding="${annotationEncoding}">${content}</annotation></semantics></math>`;
    } else {
      const beginMathMLContent = mathml.indexOf('>') + 1;
      const endMathmlContent = mathml.lastIndexOf('</math>');
      const mathmlContent = mathml.substring(beginMathMLContent, endMathmlContent);
      mathmlWithAnnotation = `${mathml.substring(0, beginMathMLContent)}<semantics><mrow>${mathmlContent}</mrow><annotation encoding="${annotationEncoding}">${content}</annotation></semantics></math>`; // eslint-disable-line max-len
    }

    return mathmlWithAnnotation;
  }

  /**
   * Removes specific annotation tag in MathML element.
   * In case of remove the unique annotation, also is removed semantics tag.
   * @param {String} mathml - valid MathML.
   * @param {String} annotationEncoding - annotation encoding to remove.
   * @returns {String} - 'mathml' without the annotation encoding specified.
   */
  static removeAnnotation(mathml, annotationEncoding) {
    let mathmlWithoutAnnotation = mathml;
    const openAnnotationTag = `<annotation encoding="${annotationEncoding}">`;
    const closeAnnotationTag = '</annotation>';
    const startAnnotationIndex = mathml.indexOf(openAnnotationTag);
    if (startAnnotationIndex !== -1) {
      let differentAnnotationFound = false;
      let differentAnnotationIndex = mathml.indexOf('<annotation');
      while (differentAnnotationIndex !== -1) {
        if (differentAnnotationIndex !== startAnnotationIndex) {
          differentAnnotationFound = true;
        }
        differentAnnotationIndex = mathml.indexOf('<annotation', differentAnnotationIndex + 1);
      }
      if (differentAnnotationFound) {
        const closeIndex = mathml.indexOf(closeAnnotationTag, startAnnotationIndex);
        const endAnnotationIndex = closeIndex + closeAnnotationTag.length;
        const startIndex = mathml.substring(0, startAnnotationIndex);
        mathmlWithoutAnnotation = startIndex + mathml.substring(endAnnotationIndex);
      } else {
        mathmlWithoutAnnotation = MathML.removeSemantics(mathml);
      }
    }
    return mathmlWithoutAnnotation;
  }

  /**
   * Removes semantics tag to mathml.
   * When using Hand to create formulas, it adds the mrow tag due to the semantics one, this one is also removed.
   * @param {string} mathml - MathML string.
   * @returns {string} - 'mathml' without semantics tag.
   */
  static removeSemantics(mathml) {
    // If `mrow` is found right before the `semantics` starting tag, it's removed as well 
    const semanticsStartingTagRegex = /<semantics>\s*?(<mrow>)?/gm;

    // If `mrow` is found right after the `annotation` ending tag, it's removed as well
    // alongside `semantics` closing tag and the whole `annotation` tag and its contents.
    const semanticsEndingTagRegex = /(<\/mrow>)?\s*<annotation[\W\w]*?<\/semantics>/gm;
    return mathml.replace(semanticsStartingTagRegex, '').replace(semanticsEndingTagRegex, '');
  }

  /**
   * Transforms all xml mathml occurrences that contain semantics to the same
   * xml mathml occurrences without semantics.
   * @param {string} text - string that can contain xml mathml occurrences.
   * @param {Constants} [characters] - Constant object containing xmlCharacters
   * or safeXmlCharacters relation.
   * xmlCharacters by default.
   * @returns {string} - 'text' with all xml mathml occurrences without annotation tag.
   */
  static removeSemanticsOcurrences(text, characters = _constants__WEBPACK_IMPORTED_MODULE_0__["default"].xmlCharacters) {
    const mathTagStart = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    const mathTagEndline = `/${characters.tagCloser}`;
    const {
      tagCloser
    } = characters;
    const semanticsTagStart = `${characters.tagOpener}semantics${characters.tagCloser}`;
    const annotationTagStart = `${characters.tagOpener}annotation encoding=`;
    let output = '';
    let start = text.indexOf(mathTagStart);
    let end = 0;
    while (start !== -1) {
      output += text.substring(end, start);

      // MathML can be written as '<math></math>' or '<math />'.
      const mathTagEndIndex = text.indexOf(mathTagEnd, start);
      const mathTagEndlineIndex = text.indexOf(mathTagEndline, start);
      const firstTagCloser = text.indexOf(tagCloser, start);
      if (mathTagEndIndex !== -1) {
        end = mathTagEndIndex;
      } else if (mathTagEndlineIndex === firstTagCloser - 1) {
        end = mathTagEndlineIndex;
      }
      const semanticsIndex = text.indexOf(semanticsTagStart, start);
      if (semanticsIndex !== -1) {
        const mmlTagStart = text.substring(start, semanticsIndex);
        const annotationIndex = text.indexOf(annotationTagStart, start);
        if (annotationIndex !== -1) {
          const startIndex = semanticsIndex + semanticsTagStart.length;
          const mmlContent = text.substring(startIndex, annotationIndex);
          output += mmlTagStart + mmlContent + mathTagEnd;
          start = text.indexOf(mathTagStart, start + mathTagStart.length);
          end += mathTagEnd.length;
        } else {
          end = start;
          start = text.indexOf(mathTagStart, start + mathTagStart.length);
        }
      } else {
        end = start;
        start = text.indexOf(mathTagStart, start + mathTagStart.length);
      }
    }
    output += text.substring(end, text.length);
    return output;
  }

  /**
   * Returns true if a MathML contains a certain class.
   * @param {string} mathML - input MathML.
   * @param {string} className - className.
   * @returns {boolean} true if the input MathML contains the input class.
   * false otherwise.
   * @static
   */
  static containClass(mathML, className) {
    const classIndex = mathML.indexOf('class');
    if (classIndex === -1) {
      return false;
    }
    const classTagEndIndex = mathML.indexOf('>', classIndex);
    const classTag = mathML.substring(classIndex, classTagEndIndex);
    if (classTag.indexOf(className) !== -1) {
      return true;
    }
    return false;
  }

  /**
   * Returns true if mathml is empty. Otherwise, false.
   * @param {string} mathml - valid MathML with standard XML tags.
   * @returns {boolean} - true if mathml is empty. Otherwise, false.
   */
  static isEmpty(mathml) {
    // MathML can have the shape <math></math> or '<math />'.
    const closeTag = '>';
    const closeTagInline = '/>';
    const firstCloseTagIndex = mathml.indexOf(closeTag);
    const firstCloseTagInlineIndex = mathml.indexOf(closeTagInline);
    let empty = false;
    // MathML is always empty in the second shape.
    if (firstCloseTagInlineIndex !== -1) {
      if (firstCloseTagInlineIndex === firstCloseTagIndex - 1) {
        empty = true;
      }
    }

    // MathML is always empty in the first shape when there aren't elements
    // between math tags.
    if (!empty) {
      const mathTagEndRegex = new RegExp('</(.+:)?math>');
      const mathTagEndArray = mathTagEndRegex.exec(mathml);
      if (mathTagEndArray) {
        empty = firstCloseTagIndex + 1 === mathTagEndArray.index;
      }
    }
    return empty;
  }

  /**
   * Encodes html entities inside properties.
   * @param {String} mathml - valid MathML with standard XML tags.
   * @returns {String} - 'mathml' with property entities encoded.
   */
  static encodeProperties(mathml) {
    // Search all the properties.
    const regex = /\w+=".*?"/g;
    // Encode html entities.
    const replacer = match => {
      // It has the shape:
      // <math propertyOne="somethingOne"><children propertyTwo="somethingTwo"></children></math>.
      const quoteIndex = match.indexOf('"');
      const propertyValue = match.substring(quoteIndex + 1, match.length - 1);
      const propertyValueEncoded = _util__WEBPACK_IMPORTED_MODULE_1__["default"].htmlEntities(propertyValue);
      const matchEncoded = `${match.substring(0, quoteIndex + 1)}${propertyValueEncoded}"`;
      return matchEncoded;
    };
    const mathmlEncoded = mathml.replace(regex, replacer);
    return mathmlEncoded;
  }
}

/***/ }),

/***/ "../devkit/src/md5.js":
/*!****************************!*\
  !*** ../devkit/src/md5.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
var md5;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (md5);
(function () {
  var HxOverrides = function () {};
  HxOverrides.__name__ = true;
  HxOverrides.dateStr = function (date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
  };
  HxOverrides.strDate = function (s) {
    switch (s.length) {
      case 8:
        var k = s.split(":");
        var d = new Date();
        d.setTime(0);
        d.setUTCHours(k[0]);
        d.setUTCMinutes(k[1]);
        d.setUTCSeconds(k[2]);
        return d;
      case 10:
        var k = s.split("-");
        return new Date(k[0], k[1] - 1, k[2], 0, 0, 0);
      case 19:
        var k = s.split(" ");
        var y = k[0].split("-");
        var t = k[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s;
    }
  };
  HxOverrides.cca = function (s, index) {
    var x = s.charCodeAt(index);
    if (x != x) return undefined;
    return x;
  };
  HxOverrides.substr = function (s, pos, len) {
    if (pos != null && pos != 0 && len != null && len < 0) return "";
    if (len == null) len = s.length;
    if (pos < 0) {
      pos = s.length + pos;
      if (pos < 0) pos = 0;
    } else if (len < 0) len = s.length + len - pos;
    return s.substr(pos, len);
  };
  HxOverrides.remove = function (a, obj) {
    var i = 0;
    var l = a.length;
    while (i < l) {
      if (a[i] == obj) {
        a.splice(i, 1);
        return true;
      }
      i++;
    }
    return false;
  };
  HxOverrides.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur < this.arr.length;
      },
      next: function () {
        return this.arr[this.cur++];
      }
    };
  };
  var IntIter = function (min, max) {
    this.min = min;
    this.max = max;
  };
  IntIter.__name__ = true;
  IntIter.prototype = {
    next: function () {
      return this.min++;
    },
    hasNext: function () {
      return this.min < this.max;
    },
    __class__: IntIter
  };
  var Std = function () {};
  Std.__name__ = true;
  Std["is"] = function (v, t) {
    return js.Boot.__instanceof(v, t);
  };
  Std.string = function (s) {
    return js.Boot.__string_rec(s, "");
  };
  Std["int"] = function (x) {
    return x | 0;
  };
  Std.parseInt = function (x) {
    var v = parseInt(x, 10);
    if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
    if (isNaN(v)) return null;
    return v;
  };
  Std.parseFloat = function (x) {
    return parseFloat(x);
  };
  Std.random = function (x) {
    return Math.floor(Math.random() * x);
  };
  var com = com || {};
  if (!com.wiris) com.wiris = {};
  if (!com.wiris.js) com.wiris.js = {};
  com.wiris.js.JsPluginTools = function () {
    this.tryReady();
  };
  com.wiris.js.JsPluginTools.__name__ = true;
  com.wiris.js.JsPluginTools.main = function () {
    var ev;
    ev = com.wiris.js.JsPluginTools.getInstance();
    haxe.Timer.delay($bind(ev, ev.tryReady), 100);
  };
  com.wiris.js.JsPluginTools.getInstance = function () {
    if (com.wiris.js.JsPluginTools.instance == null) com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools();
    return com.wiris.js.JsPluginTools.instance;
  };
  com.wiris.js.JsPluginTools.bypassEncapsulation = function () {
    if (window.com == null) window.com = {};
    if (window.com.wiris == null) window.com.wiris = {};
    if (window.com.wiris.js == null) window.com.wiris.js = {};
    if (window.com.wiris.js.JsPluginTools == null) window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance();
  };
  com.wiris.js.JsPluginTools.prototype = {
    md5encode: function (content) {
      return haxe.Md5.encode(content);
    },
    doLoad: function () {
      this.ready = true;
      com.wiris.js.JsPluginTools.instance = this;
      com.wiris.js.JsPluginTools.bypassEncapsulation();
    },
    tryReady: function () {
      this.ready = false;
      if (js.Lib.document.readyState) {
        this.doLoad();
        this.ready = true;
      }
      if (!this.ready) haxe.Timer.delay($bind(this, this.tryReady), 100);
    },
    __class__: com.wiris.js.JsPluginTools
  };
  var haxe = haxe || {};
  haxe.Log = function () {};
  haxe.Log.__name__ = true;
  haxe.Log.trace = function (v, infos) {
    js.Boot.__trace(v, infos);
  };
  haxe.Log.clear = function () {
    js.Boot.__clear_trace();
  };
  haxe.Md5 = function () {};
  haxe.Md5.__name__ = true;
  haxe.Md5.encode = function (s) {
    return new haxe.Md5().doEncode(s);
  };
  haxe.Md5.prototype = {
    doEncode: function (str) {
      var x = this.str2blks(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var step;
      var i = 0;
      while (i < x.length) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        step = 0;
        a = this.ff(a, b, c, d, x[i], 7, -680876936);
        d = this.ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.gg(b, c, d, a, x[i], 20, -373897302);
        a = this.gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.hh(d, a, b, c, x[i], 11, -358537222);
        c = this.hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.ii(a, b, c, d, x[i], 6, -198630844);
        d = this.ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.addme(a, olda);
        b = this.addme(b, oldb);
        c = this.addme(c, oldc);
        d = this.addme(d, oldd);
        i += 16;
      }
      return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
    },
    ii: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, x, s, t);
    },
    hh: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, x, s, t);
    },
    gg: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, x, s, t);
    },
    ff: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, x, s, t);
    },
    cmn: function (q, a, b, x, s, t) {
      return this.addme(this.rol(this.addme(this.addme(a, q), this.addme(x, t)), s), b);
    },
    rol: function (num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    },
    str2blks: function (str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array();
      var _g1 = 0,
        _g = nblk * 16;
      while (_g1 < _g) {
        var i = _g1++;
        blks[i] = 0;
      }
      var i = 0;
      while (i < str.length) {
        blks[i >> 2] |= HxOverrides.cca(str, i) << (str.length * 8 + i) % 4 * 8;
        i++;
      }
      blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
      var l = str.length * 8;
      var k = nblk * 16 - 2;
      blks[k] = l & 255;
      blks[k] |= (l >>> 8 & 255) << 8;
      blks[k] |= (l >>> 16 & 255) << 16;
      blks[k] |= (l >>> 24 & 255) << 24;
      return blks;
    },
    rhex: function (num) {
      var str = "";
      var hex_chr = "0123456789abcdef";
      var _g = 0;
      while (_g < 4) {
        var j = _g++;
        str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
      }
      return str;
    },
    addme: function (x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    },
    bitAND: function (a, b) {
      var lsb = a & 1 & (b & 1);
      var msb31 = a >>> 1 & b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitXOR: function (a, b) {
      var lsb = a & 1 ^ b & 1;
      var msb31 = a >>> 1 ^ b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitOR: function (a, b) {
      var lsb = a & 1 | b & 1;
      var msb31 = a >>> 1 | b >>> 1;
      return msb31 << 1 | lsb;
    },
    __class__: haxe.Md5
  };
  haxe.Timer = function (time_ms) {
    var me = this;
    this.id = window.setInterval(function () {
      me.run();
    }, time_ms);
  };
  haxe.Timer.__name__ = true;
  haxe.Timer.delay = function (f, time_ms) {
    var t = new haxe.Timer(time_ms);
    t.run = function () {
      t.stop();
      f();
    };
    return t;
  };
  haxe.Timer.measure = function (f, pos) {
    var t0 = haxe.Timer.stamp();
    var r = f();
    haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos);
    return r;
  };
  haxe.Timer.stamp = function () {
    return new Date().getTime() / 1000;
  };
  haxe.Timer.prototype = {
    run: function () {},
    stop: function () {
      if (this.id == null) return;
      window.clearInterval(this.id);
      this.id = null;
    },
    __class__: haxe.Timer
  };
  var js = js || {};
  js.Boot = function () {};
  js.Boot.__name__ = true;
  js.Boot.__unhtml = function (s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  };
  js.Boot.__trace = function (v, i) {
    var msg = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
    msg += js.Boot.__string_rec(v, "");
    var d;
    if (typeof document != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";else if (typeof console != "undefined" && console.log != null) console.log(msg);
  };
  js.Boot.__clear_trace = function () {
    var d = document.getElementById("haxe:trace");
    if (d != null) d.innerHTML = "";
  };
  js.Boot.isClass = function (o) {
    return o.__name__;
  };
  js.Boot.isEnum = function (e) {
    return e.__ename__;
  };
  js.Boot.getClass = function (o) {
    return o.__class__;
  };
  js.Boot.__string_rec = function (o, s) {
    if (o == null) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof o;
    if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
    switch (t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (o.length == 2) return o[0];
            var str = o[0] + "(";
            s += "\t";
            var _g1 = 2,
              _g = o.length;
            while (_g1 < _g) {
              var i = _g1++;
              if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);else str += js.Boot.__string_rec(o[i], s);
            }
            return str + ")";
          }
          var l = o.length;
          var i;
          var str = "[";
          s += "\t";
          var _g = 0;
          while (_g < l) {
            var i1 = _g++;
            str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
          }
          str += "]";
          return str;
        }
        var tostr;
        try {
          tostr = o.toString;
        } catch (e) {
          return "???";
        }
        if (tostr != null && tostr != Object.toString) {
          var s2 = o.toString();
          if (s2 != "[object Object]") return s2;
        }
        var k = null;
        var str = "{\n";
        s += "\t";
        var hasp = o.hasOwnProperty != null;
        for (var k in o) {
          ;
          if (hasp && !o.hasOwnProperty(k)) {
            continue;
          }
          if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
            continue;
          }
          if (str.length != 2) str += ", \n";
          str += s + k + " : " + js.Boot.__string_rec(o[k], s);
        }
        s = s.substring(1);
        str += "\n" + s + "}";
        return str;
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o);
    }
  };
  js.Boot.__interfLoop = function (cc, cl) {
    if (cc == null) return false;
    if (cc == cl) return true;
    var intf = cc.__interfaces__;
    if (intf != null) {
      var _g1 = 0,
        _g = intf.length;
      while (_g1 < _g) {
        var i = _g1++;
        var i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
      }
    }
    return js.Boot.__interfLoop(cc.__super__, cl);
  };
  js.Boot.__instanceof = function (o, cl) {
    try {
      if (o instanceof cl) {
        if (cl == Array) return o.__enum__ == null;
        return true;
      }
      if (js.Boot.__interfLoop(o.__class__, cl)) return true;
    } catch (e) {
      if (cl == null) return false;
    }
    switch (cl) {
      case Int:
        return Math.ceil(o % 2147483648.0) === o;
      case Float:
        return typeof o == "number";
      case Bool:
        return o === true || o === false;
      case String:
        return typeof o == "string";
      case Dynamic:
        return true;
      default:
        if (o == null) return false;
        if (cl == Class && o.__name__ != null) return true;else null;
        if (cl == Enum && o.__ename__ != null) return true;else null;
        return o.__enum__ == cl;
    }
  };
  js.Boot.__cast = function (o, t) {
    if (js.Boot.__instanceof(o, t)) return o;else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
  };
  js.Lib = function () {};
  js.Lib.__name__ = true;
  js.Lib.debug = function () {
    debugger;
  };
  js.Lib.alert = function (v) {
    alert(js.Boot.__string_rec(v, ""));
  };
  js.Lib.eval = function (code) {
    return eval(code);
  };
  js.Lib.setErrorHandler = function (f) {
    js.Lib.onerror = f;
  };
  var $_;
  function $bind(o, m) {
    var f = function () {
      return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
  }
  ;
  if (Array.prototype.indexOf) HxOverrides.remove = function (a, o) {
    var i = a.indexOf(o);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };else null;
  Math.__name__ = ["Math"];
  Math.NaN = Number.NaN;
  Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  Math.isFinite = function (i) {
    return isFinite(i);
  };
  Math.isNaN = function (i) {
    return isNaN(i);
  };
  String.prototype.__class__ = String;
  String.__name__ = true;
  Array.prototype.__class__ = Array;
  Array.__name__ = true;
  Date.prototype.__class__ = Date;
  Date.__name__ = ["Date"];
  var Int = {
    __name__: ["Int"]
  };
  var Dynamic = {
    __name__: ["Dynamic"]
  };
  var Float = Number;
  Float.__name__ = ["Float"];
  var Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = {
    __name__: ["Class"]
  };
  var Enum = {};
  var Void = {
    __ename__: ["Void"]
  };
  if (typeof document != "undefined") js.Lib.document = document;
  if (typeof window != "undefined") {
    js.Lib.window = window;
    js.Lib.window.onerror = function (msg, url, line) {
      var f = js.Lib.onerror;
      if (f == null) return false;
      return f(msg, [url + ":" + line]);
    };
  }
  com.wiris.js.JsPluginTools.main();
  delete Array.prototype.__class__;
})();
(function () {
  var HxOverrides = function () {};
  HxOverrides.__name__ = true;
  HxOverrides.dateStr = function (date) {
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var mi = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
  };
  HxOverrides.strDate = function (s) {
    switch (s.length) {
      case 8:
        var k = s.split(":");
        var d = new Date();
        d.setTime(0);
        d.setUTCHours(k[0]);
        d.setUTCMinutes(k[1]);
        d.setUTCSeconds(k[2]);
        return d;
      case 10:
        var k = s.split("-");
        return new Date(k[0], k[1] - 1, k[2], 0, 0, 0);
      case 19:
        var k = s.split(" ");
        var y = k[0].split("-");
        var t = k[1].split(":");
        return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
      default:
        throw "Invalid date format : " + s;
    }
  };
  HxOverrides.cca = function (s, index) {
    var x = s.charCodeAt(index);
    if (x != x) return undefined;
    return x;
  };
  HxOverrides.substr = function (s, pos, len) {
    if (pos != null && pos != 0 && len != null && len < 0) return "";
    if (len == null) len = s.length;
    if (pos < 0) {
      pos = s.length + pos;
      if (pos < 0) pos = 0;
    } else if (len < 0) len = s.length + len - pos;
    return s.substr(pos, len);
  };
  HxOverrides.remove = function (a, obj) {
    var i = 0;
    var l = a.length;
    while (i < l) {
      if (a[i] == obj) {
        a.splice(i, 1);
        return true;
      }
      i++;
    }
    return false;
  };
  HxOverrides.iter = function (a) {
    return {
      cur: 0,
      arr: a,
      hasNext: function () {
        return this.cur < this.arr.length;
      },
      next: function () {
        return this.arr[this.cur++];
      }
    };
  };
  var IntIter = function (min, max) {
    this.min = min;
    this.max = max;
  };
  IntIter.__name__ = true;
  IntIter.prototype = {
    next: function () {
      return this.min++;
    },
    hasNext: function () {
      return this.min < this.max;
    },
    __class__: IntIter
  };
  var Std = function () {};
  Std.__name__ = true;
  Std["is"] = function (v, t) {
    return js.Boot.__instanceof(v, t);
  };
  Std.string = function (s) {
    return js.Boot.__string_rec(s, "");
  };
  Std["int"] = function (x) {
    return x | 0;
  };
  Std.parseInt = function (x) {
    var v = parseInt(x, 10);
    if (v == 0 && (HxOverrides.cca(x, 1) == 120 || HxOverrides.cca(x, 1) == 88)) v = parseInt(x);
    if (isNaN(v)) return null;
    return v;
  };
  Std.parseFloat = function (x) {
    return parseFloat(x);
  };
  Std.random = function (x) {
    return Math.floor(Math.random() * x);
  };
  var com = com || {};
  if (!com.wiris) com.wiris = {};
  if (!com.wiris.js) com.wiris.js = {};
  com.wiris.js.JsPluginTools = function () {
    this.tryReady();
  };
  com.wiris.js.JsPluginTools.__name__ = true;
  com.wiris.js.JsPluginTools.main = function () {
    var ev;
    ev = com.wiris.js.JsPluginTools.getInstance();
    haxe.Timer.delay($bind(ev, ev.tryReady), 100);
  };
  com.wiris.js.JsPluginTools.getInstance = function () {
    if (com.wiris.js.JsPluginTools.instance == null) com.wiris.js.JsPluginTools.instance = new com.wiris.js.JsPluginTools();
    return com.wiris.js.JsPluginTools.instance;
  };
  com.wiris.js.JsPluginTools.bypassEncapsulation = function () {
    if (window.com == null) window.com = {};
    if (window.com.wiris == null) window.com.wiris = {};
    if (window.com.wiris.js == null) window.com.wiris.js = {};
    if (window.com.wiris.js.JsPluginTools == null) window.com.wiris.js.JsPluginTools = com.wiris.js.JsPluginTools.getInstance();
  };
  com.wiris.js.JsPluginTools.prototype = {
    md5encode: function (content) {
      return haxe.Md5.encode(content);
    },
    doLoad: function () {
      this.ready = true;
      com.wiris.js.JsPluginTools.instance = this;
      com.wiris.js.JsPluginTools.bypassEncapsulation();
    },
    tryReady: function () {
      this.ready = false;
      if (js.Lib.document.readyState) {
        this.doLoad();
        this.ready = true;
      }
      if (!this.ready) haxe.Timer.delay($bind(this, this.tryReady), 100);
    },
    __class__: com.wiris.js.JsPluginTools
  };
  var haxe = haxe || {};
  haxe.Log = function () {};
  haxe.Log.__name__ = true;
  haxe.Log.trace = function (v, infos) {
    js.Boot.__trace(v, infos);
  };
  haxe.Log.clear = function () {
    js.Boot.__clear_trace();
  };
  haxe.Md5 = function () {};
  haxe.Md5.__name__ = true;
  haxe.Md5.encode = function (s) {
    return new haxe.Md5().doEncode(s);
  };
  haxe.Md5.prototype = {
    doEncode: function (str) {
      var x = this.str2blks(str);
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;
      var step;
      var i = 0;
      while (i < x.length) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        step = 0;
        a = this.ff(a, b, c, d, x[i], 7, -680876936);
        d = this.ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = this.ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = this.ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = this.ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = this.ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = this.ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = this.ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = this.ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = this.ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = this.ff(c, d, a, b, x[i + 10], 17, -42063);
        b = this.ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = this.ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = this.ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = this.ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = this.ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = this.gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = this.gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = this.gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = this.gg(b, c, d, a, x[i], 20, -373897302);
        a = this.gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = this.gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = this.gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = this.gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = this.gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = this.gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = this.gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = this.gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = this.gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = this.gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = this.gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = this.gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = this.hh(a, b, c, d, x[i + 5], 4, -378558);
        d = this.hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = this.hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = this.hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = this.hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = this.hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = this.hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = this.hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = this.hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = this.hh(d, a, b, c, x[i], 11, -358537222);
        c = this.hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = this.hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = this.hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = this.hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = this.hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = this.hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = this.ii(a, b, c, d, x[i], 6, -198630844);
        d = this.ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = this.ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = this.ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = this.ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = this.ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = this.ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = this.ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = this.ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = this.ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = this.ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = this.ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = this.ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = this.ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = this.ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = this.ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = this.addme(a, olda);
        b = this.addme(b, oldb);
        c = this.addme(c, oldc);
        d = this.addme(d, oldd);
        i += 16;
      }
      return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
    },
    ii: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(c, this.bitOR(b, ~d)), a, b, x, s, t);
    },
    hh: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitXOR(this.bitXOR(b, c), d), a, b, x, s, t);
    },
    gg: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, d), this.bitAND(c, ~d)), a, b, x, s, t);
    },
    ff: function (a, b, c, d, x, s, t) {
      return this.cmn(this.bitOR(this.bitAND(b, c), this.bitAND(~b, d)), a, b, x, s, t);
    },
    cmn: function (q, a, b, x, s, t) {
      return this.addme(this.rol(this.addme(this.addme(a, q), this.addme(x, t)), s), b);
    },
    rol: function (num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    },
    str2blks: function (str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array();
      var _g1 = 0,
        _g = nblk * 16;
      while (_g1 < _g) {
        var i = _g1++;
        blks[i] = 0;
      }
      var i = 0;
      while (i < str.length) {
        blks[i >> 2] |= HxOverrides.cca(str, i) << (str.length * 8 + i) % 4 * 8;
        i++;
      }
      blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
      var l = str.length * 8;
      var k = nblk * 16 - 2;
      blks[k] = l & 255;
      blks[k] |= (l >>> 8 & 255) << 8;
      blks[k] |= (l >>> 16 & 255) << 16;
      blks[k] |= (l >>> 24 & 255) << 24;
      return blks;
    },
    rhex: function (num) {
      var str = "";
      var hex_chr = "0123456789abcdef";
      var _g = 0;
      while (_g < 4) {
        var j = _g++;
        str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
      }
      return str;
    },
    addme: function (x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    },
    bitAND: function (a, b) {
      var lsb = a & 1 & (b & 1);
      var msb31 = a >>> 1 & b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitXOR: function (a, b) {
      var lsb = a & 1 ^ b & 1;
      var msb31 = a >>> 1 ^ b >>> 1;
      return msb31 << 1 | lsb;
    },
    bitOR: function (a, b) {
      var lsb = a & 1 | b & 1;
      var msb31 = a >>> 1 | b >>> 1;
      return msb31 << 1 | lsb;
    },
    __class__: haxe.Md5
  };
  haxe.Timer = function (time_ms) {
    var me = this;
    this.id = window.setInterval(function () {
      me.run();
    }, time_ms);
  };
  haxe.Timer.__name__ = true;
  haxe.Timer.delay = function (f, time_ms) {
    var t = new haxe.Timer(time_ms);
    t.run = function () {
      t.stop();
      f();
    };
    return t;
  };
  haxe.Timer.measure = function (f, pos) {
    var t0 = haxe.Timer.stamp();
    var r = f();
    haxe.Log.trace(haxe.Timer.stamp() - t0 + "s", pos);
    return r;
  };
  haxe.Timer.stamp = function () {
    return new Date().getTime() / 1000;
  };
  haxe.Timer.prototype = {
    run: function () {},
    stop: function () {
      if (this.id == null) return;
      window.clearInterval(this.id);
      this.id = null;
    },
    __class__: haxe.Timer
  };
  var js = js || {};
  js.Boot = function () {};
  js.Boot.__name__ = true;
  js.Boot.__unhtml = function (s) {
    return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  };
  js.Boot.__trace = function (v, i) {
    var msg = i != null ? i.fileName + ":" + i.lineNumber + ": " : "";
    msg += js.Boot.__string_rec(v, "");
    var d;
    if (typeof document != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>";else if (typeof console != "undefined" && console.log != null) console.log(msg);
  };
  js.Boot.__clear_trace = function () {
    var d = document.getElementById("haxe:trace");
    if (d != null) d.innerHTML = "";
  };
  js.Boot.isClass = function (o) {
    return o.__name__;
  };
  js.Boot.isEnum = function (e) {
    return e.__ename__;
  };
  js.Boot.getClass = function (o) {
    return o.__class__;
  };
  js.Boot.__string_rec = function (o, s) {
    if (o == null) return "null";
    if (s.length >= 5) return "<...>";
    var t = typeof o;
    if (t == "function" && (o.__name__ || o.__ename__)) t = "object";
    switch (t) {
      case "object":
        if (o instanceof Array) {
          if (o.__enum__) {
            if (o.length == 2) return o[0];
            var str = o[0] + "(";
            s += "\t";
            var _g1 = 2,
              _g = o.length;
            while (_g1 < _g) {
              var i = _g1++;
              if (i != 2) str += "," + js.Boot.__string_rec(o[i], s);else str += js.Boot.__string_rec(o[i], s);
            }
            return str + ")";
          }
          var l = o.length;
          var i;
          var str = "[";
          s += "\t";
          var _g = 0;
          while (_g < l) {
            var i1 = _g++;
            str += (i1 > 0 ? "," : "") + js.Boot.__string_rec(o[i1], s);
          }
          str += "]";
          return str;
        }
        var tostr;
        try {
          tostr = o.toString;
        } catch (e) {
          return "???";
        }
        if (tostr != null && tostr != Object.toString) {
          var s2 = o.toString();
          if (s2 != "[object Object]") return s2;
        }
        var k = null;
        var str = "{\n";
        s += "\t";
        var hasp = o.hasOwnProperty != null;
        for (var k in o) {
          ;
          if (hasp && !o.hasOwnProperty(k)) {
            continue;
          }
          if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
            continue;
          }
          if (str.length != 2) str += ", \n";
          str += s + k + " : " + js.Boot.__string_rec(o[k], s);
        }
        s = s.substring(1);
        str += "\n" + s + "}";
        return str;
      case "function":
        return "<function>";
      case "string":
        return o;
      default:
        return String(o);
    }
  };
  js.Boot.__interfLoop = function (cc, cl) {
    if (cc == null) return false;
    if (cc == cl) return true;
    var intf = cc.__interfaces__;
    if (intf != null) {
      var _g1 = 0,
        _g = intf.length;
      while (_g1 < _g) {
        var i = _g1++;
        var i1 = intf[i];
        if (i1 == cl || js.Boot.__interfLoop(i1, cl)) return true;
      }
    }
    return js.Boot.__interfLoop(cc.__super__, cl);
  };
  js.Boot.__instanceof = function (o, cl) {
    try {
      if (o instanceof cl) {
        if (cl == Array) return o.__enum__ == null;
        return true;
      }
      if (js.Boot.__interfLoop(o.__class__, cl)) return true;
    } catch (e) {
      if (cl == null) return false;
    }
    switch (cl) {
      case Int:
        return Math.ceil(o % 2147483648.0) === o;
      case Float:
        return typeof o == "number";
      case Bool:
        return o === true || o === false;
      case String:
        return typeof o == "string";
      case Dynamic:
        return true;
      default:
        if (o == null) return false;
        if (cl == Class && o.__name__ != null) return true;else null;
        if (cl == Enum && o.__ename__ != null) return true;else null;
        return o.__enum__ == cl;
    }
  };
  js.Boot.__cast = function (o, t) {
    if (js.Boot.__instanceof(o, t)) return o;else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
  };
  js.Lib = function () {};
  js.Lib.__name__ = true;
  js.Lib.debug = function () {
    debugger;
  };
  js.Lib.alert = function (v) {
    alert(js.Boot.__string_rec(v, ""));
  };
  js.Lib.eval = function (code) {
    return eval(code);
  };
  js.Lib.setErrorHandler = function (f) {
    js.Lib.onerror = f;
  };
  var $_;
  function $bind(o, m) {
    var f = function () {
      return f.method.apply(f.scope, arguments);
    };
    f.scope = o;
    f.method = m;
    return f;
  }
  ;
  if (Array.prototype.indexOf) HxOverrides.remove = function (a, o) {
    var i = a.indexOf(o);
    if (i == -1) return false;
    a.splice(i, 1);
    return true;
  };else null;
  Math.__name__ = ["Math"];
  Math.NaN = Number.NaN;
  Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
  Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  Math.isFinite = function (i) {
    return isFinite(i);
  };
  Math.isNaN = function (i) {
    return isNaN(i);
  };
  String.prototype.__class__ = String;
  String.__name__ = true;
  Array.prototype.__class__ = Array;
  Array.__name__ = true;
  Date.prototype.__class__ = Date;
  Date.__name__ = ["Date"];
  var Int = {
    __name__: ["Int"]
  };
  var Dynamic = {
    __name__: ["Dynamic"]
  };
  var Float = Number;
  Float.__name__ = ["Float"];
  var Bool = Boolean;
  Bool.__ename__ = ["Bool"];
  var Class = {
    __name__: ["Class"]
  };
  var Enum = {};
  var Void = {
    __ename__: ["Void"]
  };
  if (typeof document != "undefined") js.Lib.document = document;
  if (typeof window != "undefined") {
    js.Lib.window = window;
    js.Lib.window.onerror = function (msg, url, line) {
      var f = js.Lib.onerror;
      if (f == null) return false;
      return f(msg, [url + ":" + line]);
    };
  }
  com.wiris.js.JsPluginTools.main();
})();
delete Array.prototype.__class__;
// @codingStandardsIgnoreEnd

/***/ }),

/***/ "../devkit/src/parser.js":
/*!*******************************!*\
  !*** ../devkit/src/parser.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");
/* harmony import */ var _latex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./latex */ "../devkit/src/latex.js");
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "../devkit/src/image.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessibility */ "../devkit/src/accessibility.js");
/* harmony import */ var _serviceprovider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceprovider */ "../devkit/src/serviceprovider.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "../devkit/src/constants.js");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md5 */ "../devkit/src/md5.js");








// eslint-disable-next-line no-unused-vars


/**
 * @classdesc
 * This class represent a MahML parser. Converts MathML into formulas depending on the
 * image format (SVG, PNG, base64) and the save mode (XML, safeXML, Image) configured
 * in the backend.
 */
class Parser {
  /**
   * Converts a MathML string to an img element.
   * @param {Document} creator - Document object to call createElement method.
   * @param {string} mathml - MathML code
   * @param {Object[]} wirisProperties - object containing WIRIS custom properties
   * @param {language} language - custom language for accessibility.
   * @returns {HTMLImageElement} the formula image corresponding to initial MathML string.
   * @static
   */
  static mathmlToImgObject(creator, mathml, wirisProperties, language) {
    const imgObject = creator.createElement('img');
    imgObject.align = 'middle';
    imgObject.style.maxWidth = 'none';
    let data = wirisProperties || {};

    // Take into account the backend config
    const wirisEditorProperties = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get("editorParameters");
    data = {
      ...wirisEditorProperties,
      ...data
    };
    data.mml = mathml;
    data.lang = language;
    // Request metrics of the generated image.
    data.metrics = 'true';
    data.centerbaseline = 'false';

    // Full base64 method (edit & save).
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default') {
      data.base64 = true;
    }

    // Render js params: _wrs_int_wirisProperties contains some js render params.
    // Since MathML can support render params, js params should be send only to editor.

    imgObject.className = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName');
    if (mathml.indexOf('class="') !== -1) {
      // We check here if the MathML has been created from a customEditor (such chemistry)
      // to add custom editor name attribute to img object (if necessary).
      let mathmlSubstring = mathml.substring(mathml.indexOf('class="') + 'class="'.length, mathml.length);
      mathmlSubstring = mathmlSubstring.substring(0, mathmlSubstring.indexOf('"'));
      mathmlSubstring = mathmlSubstring.substring(4, mathmlSubstring.length);
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageCustomEditorName'), mathmlSubstring);
    }

    // Performance enabled.
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('wirisPluginPerformance') && (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml' || _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml')) {
      let result = JSON.parse(Parser.createShowImageSrc(data, language));
      if (result.status === 'warning') {
        // POST call.
        // if the mathml is malformed, this function will throw an exception.
        try {
          result = JSON.parse(_serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('showimage', data));
        } catch (e) {
          return null;
        }
      }
      ({
        result
      } = result);
      if (result.format === 'png') {
        imgObject.src = `data:image/png;base64,${result.content}`;
      } else {
        imgObject.src = `data:image/svg+xml;charset=utf8,${_util__WEBPACK_IMPORTED_MODULE_0__["default"].urlEncode(result.content)}`;
      }
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'), _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlEncode(mathml));
      _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgObject, result.content, true);
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('enableAccessibility')) {
        if (typeof result.alt === 'undefined') {
          imgObject.alt = _accessibility__WEBPACK_IMPORTED_MODULE_4__["default"].mathMLToAccessible(mathml, language, data);
        } else {
          imgObject.alt = result.alt;
        }
      }
    } else {
      const result = Parser.createImageSrc(mathml, data);
      imgObject.setAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'), _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlEncode(mathml));
      imgObject.src = result;
      _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgObject, result, _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default');
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('enableAccessibility')) {
        imgObject.alt = _accessibility__WEBPACK_IMPORTED_MODULE_4__["default"].mathMLToAccessible(mathml, language, data);
      }
    }
    if (typeof Parser.observer !== 'undefined') {
      Parser.observer.observe(imgObject);
    }

    // Role math https://www.w3.org/TR/wai-aria/roles#math.
    imgObject.setAttribute('role', 'math');
    return imgObject;
  }

  /**
   * Returns the source to showimage service by calling createimage service. The
   * output of the createimage service is a URL path pointing to showimage service.
   * This method is called when performance is disabled.
   * @param {string} mathml - MathML code.
   * @param {Object[]} data - data object containing service parameters.
   * @returns {string} the showimage path.
   */
  static createImageSrc(mathml, data) {
    // Full base64 method (edit & save).
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'default') {
      data.base64 = true;
    }
    let result = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('createimage', data);
    if (result.indexOf('@BASE@') !== -1) {
      // Replacing '@BASE@' with the base URL of createimage.
      const baseParts = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getServicePath('createimage').split('/');
      baseParts.pop();
      result = result.split('@BASE@').join(baseParts.join('/'));
    }
    return result;
  }

  /**
   * Parses initial HTML code. If the HTML contains data generated by WIRIS,
   * this data would be converted as following:
   * <pre>
   * MathML code: Image containing the corresponding MathML formulas.
   * MathML code with LaTeX annotation : LaTeX string.
   * </pre>
   * @param {string} code - HTML code containing MathML data.
   * @param {string} language - language to create image alt text.
   * @returns {string} HTML code with the original MathML converted into LaTeX and images.
   */
  static initParse(code, language) {
    /* Note: The code inside this function has been inverted.
    If you invert again the code then you cannot use correctly LaTeX
    in Moodle.
    */
    code = Parser.initParseSaveMode(code, language);
    return Parser.initParseEditMode(code);
  }

  /**
   * Parses initial HTML code depending on the save mode. Transforms all MathML
   * occurrences for it's correspondent image or LaTeX.
   * @param {string} code - HTML code to be parsed
   * @param {string} language - language to create image alt text.
   * @returns {string} HTML code parsed.
   */
  static initParseSaveMode(code, language) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
      // Converting XML to tags.
      code = _latex__WEBPACK_IMPORTED_MODULE_1__["default"].parseMathmlToLatex(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters);
      code = _latex__WEBPACK_IMPORTED_MODULE_1__["default"].parseMathmlToLatex(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].xmlCharacters);
      code = Parser.parseMathmlToImg(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters, language);
      code = Parser.parseMathmlToImg(code, _constants__WEBPACK_IMPORTED_MODULE_7__["default"].xmlCharacters, language);
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'image') {
        code = Parser.codeImgTransform(code, 'base642showimage');
      }
    }
    return code;
  }

  /**
   * Parses initial HTML code depending on the edit mode.
   * If 'latex' parseMode is enabled all MathML containing an annotation with encoding='LaTeX' will
   * be converted into a LaTeX string instead of an image.
   * @param {string} code - HTML code containing MathML.
   * @returns {string} parsed HTML code.
   */
  static initParseEditMode(code) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('parseModes').indexOf('latex') !== -1) {
      const imgList = _util__WEBPACK_IMPORTED_MODULE_0__["default"].getElementsByNameFromString(code, 'img', true);
      const token = 'encoding="LaTeX">';
      // While replacing images with latex, the indexes of the found images changes
      // respecting the original code, so this carry is needed.
      let carry = 0;
      for (let i = 0; i < imgList.length; i += 1) {
        const imgCode = code.substring(imgList[i].start + carry, imgList[i].end + carry);
        if (imgCode.indexOf(` class="${_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName')}"`) !== -1) {
          let mathmlStartToken = ` ${_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute')}="`;
          let mathmlStart = imgCode.indexOf(mathmlStartToken);
          if (mathmlStart === -1) {
            mathmlStartToken = ' alt="';
            mathmlStart = imgCode.indexOf(mathmlStartToken);
          }
          if (mathmlStart !== -1) {
            mathmlStart += mathmlStartToken.length;
            const mathmlEnd = imgCode.indexOf('"', mathmlStart);
            const mathml = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlSanitize(_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(imgCode.substring(mathmlStart, mathmlEnd)));
            let latexStartPosition = mathml.indexOf(token);
            if (latexStartPosition !== -1) {
              latexStartPosition += token.length;
              const latexEndPosition = mathml.indexOf('</annotation>', latexStartPosition);
              const latex = mathml.substring(latexStartPosition, latexEndPosition);
              const replaceText = `$$${_util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEntitiesDecode(latex)}$$`;
              const start = code.substring(0, imgList[i].start + carry);
              const end = code.substring(imgList[i].end + carry);
              code = start + replaceText + end;
              carry += replaceText.length - (imgList[i].end - imgList[i].start);
            }
          }
        }
      }
    }
    return code;
  }

  /**
   * Parses end HTML code. The end HTML code is HTML code with embedded images
   * or LaTeX formulas created with MathType. <br>
   * By default this method converts the formula images and LaTeX strings in MathML. <br>
   * If image mode is enabled the images will not be converted into MathML. For further information see {@link https://docs.wiris.com/mathtype/en/mathtype-integrations/mathtype-web-interface-features/full-mathml-mode---wirisplugins-js.html}.
   * @param {string} code - HTML to be parsed
   * @returns {string} the HTML code parsed.
   */
  static endParse(code) {
    // Transform LaTeX ocurrences to MathML elements.
    const codeEndParsedEditMode = Parser.endParseEditMode(code);
    // Transform img elements to MathML elements.
    const codeEndParseSaveMode = Parser.endParseSaveMode(codeEndParsedEditMode);
    return codeEndParseSaveMode;
  }

  /**
   * Parses end HTML code depending on the edit mode.
   * - LaTeX is an enabled parse mode, all LaTeX occurrences will be converted into MathML.
   * @param {string} code - HTML code to be parsed.
   * @returns {string} HTML code parsed.
   */
  static endParseEditMode(code) {
    // Converting LaTeX to images.
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('parseModes').indexOf('latex') !== -1) {
      let output = '';
      let endPosition = 0;
      let startPosition = code.indexOf('$$');
      while (startPosition !== -1) {
        output += code.substring(endPosition, startPosition);
        endPosition = code.indexOf('$$', startPosition + 2);
        if (endPosition !== -1) {
          // Before, it was a condition here to execute the next codelines
          // 'latex.indexOf('<') == -1'.
          // We don't know why it was used, but seems to have a conflict with
          // latex formulas that contains '<'.
          const latex = code.substring(startPosition + 2, endPosition);
          const decodedLatex = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEntitiesDecode(latex);
          let mathml = _util__WEBPACK_IMPORTED_MODULE_0__["default"].htmlSanitize(_latex__WEBPACK_IMPORTED_MODULE_1__["default"].getMathMLFromLatex(decodedLatex, true));
          if (!_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveHandTraces')) {
            // Remove hand traces.
            mathml = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].removeAnnotation(mathml, 'application/json');
          }
          output += mathml;
          endPosition += 2;
        } else {
          output += '$$';
          endPosition = startPosition + 2;
        }
        startPosition = code.indexOf('$$', endPosition);
      }
      output += code.substring(endPosition, code.length);
      code = output;
    }
    return code;
  }

  /**
   * Parses end HTML code depending on the save mode. Converts all
   * images into the element determined by the save mode:
   * - xml: Parses images formulas into MathML.
   * - safeXml: Parses images formulas into safeMAthML
   * - base64: Parses images into base64 images.
   * - image: Parse images into images (no parsing)
   * @param {string} code - HTML code to be parsed
   * @returns {string} HTML code parsed.
   */
  static endParseSaveMode(code) {
    if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
      if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml') {
        code = Parser.codeImgTransform(code, 'img2mathml');
      } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml') {
        code = Parser.codeImgTransform(code, 'img2mathml');
      } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'base64' && _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('base64savemode') === 'image') {
        code = Parser.codeImgTransform(code, 'img264');
      }
    }
    return code;
  }

  /**
   * Auxiliar function that builds the data object to send to the showimage endpoint
   * @param {Object[]} data - object containing showimage service parameters.
   * @param {string} language - string containing the language of the formula.
   * @returns {Object} JSON object with the data to send to showimage.
   */
  static createShowImageSrcData(data, language) {
    const dataMd5 = {};
    const renderParams = ['mml', 'color', 'centerbaseline', 'zoom', 'dpi', 'fontSize', 'fontFamily', 'defaultStretchy', 'backgroundColor', 'format'];
    renderParams.forEach(param => {
      if (typeof data[param] !== 'undefined') {
        dataMd5[param] = data[param];
      }
    });
    // Data variables to get.
    const dataObject = {};
    Object.keys(data).forEach(key => {
      // We don't need mathml in this request we try to get cached.
      // Only need the formula md5 calculated before.
      if (key !== 'mml') {
        dataObject[key] = data[key];
      }
    });
    dataObject.formula = com.wiris.js.JsPluginTools.md5encode(_util__WEBPACK_IMPORTED_MODULE_0__["default"].propertiesToString(dataMd5));
    dataObject.lang = typeof language === 'undefined' ? 'en' : language;
    dataObject.version = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('version');
    return dataObject;
  }

  /**
   * Returns the result to call showimage service with the formula md5 as parameter.
   *  The result could be:
   * - {'status' : warning'} : The image associated to the MathML md5 is not in cache.
   * - {'status' : 'ok' ...} : The image associated to the MathML md5 is in cache.
   * @param {Object[]} data - object containing showimage service parameters.
   * @param {string} language - string containing the language of the formula.
   * @returns {Object} JSON object containing showimage response.
   */
  static createShowImageSrc(data, language) {
    const dataObject = this.createShowImageSrcData(data, language);
    const result = _serviceprovider__WEBPACK_IMPORTED_MODULE_5__["default"].getService('showimage', _util__WEBPACK_IMPORTED_MODULE_0__["default"].httpBuildQuery(dataObject), true);
    return result;
  }

  /**
   * Transform html img tags inside a html code to mathml, base64 img tags (i.e with base64 on src)
   * or showimage img tags (i.e with showimage.php on src)
   * @param  {string} code - HTML code
   * @param  {string} mode - base642showimage or img2mathml or img264 transform.
   * @returns {string} html - code transformed.
   */
  static codeImgTransform(code, mode) {
    let output = '';
    let endPosition = 0;
    const pattern = /<img/gi;
    const patternLength = pattern.source.length;
    while (pattern.test(code)) {
      const startPosition = pattern.lastIndex - patternLength;
      output += code.substring(endPosition, startPosition);
      let i = startPosition + 1;
      while (i < code.length && endPosition <= startPosition) {
        const character = code.charAt(i);
        if (character === '"' || character === '\'') {
          const characterNextPosition = code.indexOf(character, i + 1);
          if (characterNextPosition === -1) {
            i = code.length; // End while.
          } else {
            i = characterNextPosition;
          }
        } else if (character === '>') {
          endPosition = i + 1;
        }
        i += 1;
      }
      if (endPosition < startPosition) {
        // The img tag is stripped.
        output += code.substring(startPosition, code.length);
        return output;
      }
      let imgCode = code.substring(startPosition, endPosition);
      const imgObject = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObject(imgCode);
      let xmlCode = imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'));
      let convertToXml;
      let convertToSafeXml;
      if (mode === 'base642showimage') {
        if (xmlCode == null) {
          xmlCode = imgObject.getAttribute('alt');
        }
        xmlCode = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(xmlCode);
        imgCode = Parser.mathmlToImgObject(document, xmlCode, null, null);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(imgCode);
      } else if (mode === 'img2mathml') {
        if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode')) {
          if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'safeXml') {
            convertToXml = true;
            convertToSafeXml = true;
          } else if (_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('saveMode') === 'xml') {
            convertToXml = true;
            convertToSafeXml = false;
          }
        }
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getWIRISImageOutput(imgCode, convertToXml, convertToSafeXml);
      } else if (mode === 'img264') {
        if (xmlCode === null) {
          xmlCode = imgObject.getAttribute('alt');
        }
        xmlCode = _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(xmlCode);
        const properties = {};
        properties.base64 = 'true';
        imgCode = Parser.mathmlToImgObject(document, xmlCode, properties, null);
        // Metrics.
        _image__WEBPACK_IMPORTED_MODULE_3__["default"].setImgSize(imgCode, imgCode.src, true);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(imgCode);
      }
    }
    output += code.substring(endPosition, code.length);
    return output;
  }

  /**
   * Converts all occurrences of MathML to the corresponding image.
   * @param {string} content - string with valid MathML code.
   * The MathML code doesn't contain semantics.
   * @param {Constants} characters - Constant object containing xmlCharacters
   * or safeXmlCharacters relation.
   * @param {string} language - a valid language code
   * in order to generate formula accessibility.
   * @returns {string} The input string with all the MathML
   * occurrences replaced by the corresponding image.
   */
  static parseMathmlToImg(content, characters, language) {
    let output = '';
    const mathTagBegin = `${characters.tagOpener}math`;
    const mathTagEnd = `${characters.tagOpener}/math${characters.tagCloser}`;
    let start = content.indexOf(mathTagBegin);
    let end = 0;
    while (start !== -1) {
      output += content.substring(end, start);
      // Avoid WIRIS images to be parsed.
      const imageMathmlAtrribute = content.indexOf(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageMathmlAttribute'));
      end = content.indexOf(mathTagEnd, start);
      if (end === -1) {
        end = content.length - 1;
      } else if (imageMathmlAtrribute !== -1) {
        // First close tag of img attribute
        // If a mathmlAttribute exists should be inside a img tag.
        end += content.indexOf('/>', start);
      } else {
        end += mathTagEnd.length;
      }
      if (!_mathml__WEBPACK_IMPORTED_MODULE_2__["default"].isMathmlInAttribute(content, start) && imageMathmlAtrribute === -1) {
        let mathml = content.substring(start, end);
        mathml = characters.id === _constants__WEBPACK_IMPORTED_MODULE_7__["default"].safeXmlCharacters.id ? _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].safeXmlDecode(mathml) : _mathml__WEBPACK_IMPORTED_MODULE_2__["default"].mathMLEntities(mathml);
        output += _util__WEBPACK_IMPORTED_MODULE_0__["default"].createObjectCode(Parser.mathmlToImgObject(document, mathml, null, language));
      } else {
        output += content.substring(start, end);
      }
      start = content.indexOf(mathTagBegin, end);
    }
    output += content.substring(end, content.length);
    return output;
  }
}

// Mutation observers to avoid wiris image formulas class be removed.
if (typeof MutationObserver !== 'undefined') {
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.oldValue === _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName') && mutation.attributeName === 'class' && mutation.target.className.indexOf(_configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName')) === -1) {
        mutation.target.className = _configuration__WEBPACK_IMPORTED_MODULE_6__["default"].get('imageClassName');
      }
    });
  });
  Parser.observer = Object.create(mutationObserver);
  Parser.observer.Config = {
    attributes: true,
    attributeOldValue: true
  };
  // We use own default config.
  Parser.observer.observe = function (target) {
    Object.getPrototypeOf(this).observe(target, this.Config);
  };
}

/***/ }),

/***/ "../devkit/src/serviceprovider.js":
/*!****************************************!*\
  !*** ../devkit/src/serviceprovider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceProvider)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../devkit/src/util.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "../devkit/src/listeners.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");




/**
 * @typedef {Object} ServiceProviderProperties
 * @property {String} URI - Service URI.
 * @property {String} server - Service server language.
 */

/**
 * @classdesc
 * Class representing a serviceProvider. A serviceProvider is a class containing
 * an arbitrary number of services with the correspondent path.
 */
class ServiceProvider {
  /**
   * Returns Service Provider listeners.
   * @type {Listeners}
   */
  static get listeners() {
    return ServiceProvider._listeners;
  }

  /**
   * Adds a {@link Listener} instance to {@link ServiceProvider} class.
   * @param {Listener} listener - Instance of {@link Listener}.
   */
  static addListener(listener) {
    ServiceProvider.listeners.add(listener);
  }

  /**
   * Fires events in Service Provider.
   * @param {String} eventName - Event name.
   * @param {Event} event - Event object.
   */
  static fireEvent(eventName, event) {
    ServiceProvider.listeners.fire(eventName, event);
  }

  /**
   * Service parameters.
   * @type {ServiceProviderProperties}
   *
   */
  static get parameters() {
    return ServiceProvider._parameters;
  }

  /**
   * Service parameters.
   * @private
   * @type {ServiceProviderProperties}
   */
  static set parameters(parameters) {
    ServiceProvider._parameters = parameters;
  }

  /**
   * Static property.
   * Return service provider paths.
   * @private
   * @type {String}
   */
  static get servicePaths() {
    return ServiceProvider._servicePaths;
  }

  /**
   * Static property setter.
   * Set service paths.
   * @param {String} value - The property value.
   * @ignore
   */
  static set servicePaths(value) {
    ServiceProvider._servicePaths = value;
  }

  /**
   * Adds a new service to the ServiceProvider.
   * @param {String} service - Service name.
   * @param {String} path - Service path.
   * @static
   */
  static setServicePath(service, path) {
    ServiceProvider.servicePaths[service] = path;
  }

  /**
   * Returns the service path for a certain service.
   * @param {String} serviceName - Service name.
   * @returns {String} The service path.
   * @static
   */
  static getServicePath(serviceName) {
    return ServiceProvider.servicePaths[serviceName];
  }

  /**
   * Static property.
   * Service provider integration path.
   * @type {String}
   */
  static get integrationPath() {
    return ServiceProvider._integrationPath;
  }

  /**
   * Static property setter.
   * Set service provider integration path.
   * @param {String} value - The property value.
   * @ignore
   */
  static set integrationPath(value) {
    ServiceProvider._integrationPath = value;
  }

  /**
   * Returns the server URL in the form protocol://serverName:serverPort.
   * @return {String} The client side server path.
   */
  static getServerURL() {
    const url = window.location.href;
    const arr = url.split('/');
    const result = `${arr[0]}//${arr[2]}`;
    return result;
  }

  /**
   * Inits {@link this} class. Uses {@link this.integrationPath} as
   * base path to generate all backend services paths.
   * @param {Object} parameters - Function parameters.
   * @param {String} parameters.integrationPath - Service path.
   */
  static init(parameters) {
    ServiceProvider.parameters = parameters;
    // Services path (tech dependant).
    let configurationURI = ServiceProvider.createServiceURI('configurationjs');
    let createImageURI = ServiceProvider.createServiceURI('createimage');
    let showImageURI = ServiceProvider.createServiceURI('showimage');
    let getMathMLURI = ServiceProvider.createServiceURI('getmathml');
    let serviceURI = ServiceProvider.createServiceURI('service');

    // Some backend integrations (like Java o Ruby) have an absolute backend path,
    // for example: /app/service. For them we calculate the absolute URL path, i.e
    // protocol://domain:port/app/service
    if (ServiceProvider.parameters.URI.indexOf('/') === 0) {
      const serverPath = ServiceProvider.getServerURL();
      configurationURI = serverPath + configurationURI;
      showImageURI = serverPath + showImageURI;
      createImageURI = serverPath + createImageURI;
      getMathMLURI = serverPath + getMathMLURI;
      serviceURI = serverPath + serviceURI;
    }
    ServiceProvider.setServicePath('configurationjs', configurationURI);
    ServiceProvider.setServicePath('showimage', showImageURI);
    ServiceProvider.setServicePath('createimage', createImageURI);
    ServiceProvider.setServicePath('service', serviceURI);
    ServiceProvider.setServicePath('getmathml', getMathMLURI);
    ServiceProvider.setServicePath('configurationjs', configurationURI);
    ServiceProvider.listeners.fire('onInit', {});
  }

  /**
   * Gets the content from an URL.
   * @param {String} url - Target URL.
   * @param {Object} [postVariables] - Object containing post variables.
   * null if a GET query should be done.
   * @returns {String} Content of the target URL.
   * @private
   * @static
   */
  static getUrl(url, postVariables) {
    const currentPath = window.location.toString().substr(0, window.location.toString().lastIndexOf('/') + 1);
    const httpRequest = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createHttpRequest();
    if (httpRequest) {
      if (typeof postVariables === 'undefined' || typeof postVariables === 'undefined') {
        httpRequest.open('GET', url, false);
      } else if (url.substr(0, 1) === '/' || url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://') {
        httpRequest.open('POST', url, false);
      } else {
        httpRequest.open('POST', currentPath + url, false);
      }
      let header = _configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('customHeaders');
      if (header) {
        header = header.toString();
        header.split(",").map(element => element.trim().split('=')).forEach(([key, val]) => httpRequest.setRequestHeader(key, val));
      }
      if (typeof postVariables !== 'undefined' && postVariables) {
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        httpRequest.send(_util__WEBPACK_IMPORTED_MODULE_0__["default"].httpBuildQuery(postVariables));
      } else {
        httpRequest.send(null);
      }
      return httpRequest.responseText;
    }
    return '';
  }

  /**
   * Returns the response text of a certain service.
   * @param {String} service - Service name.
   * @param {String} postVariables - Post variables.
   * @param {Boolean} get - True if the request is GET instead of POST. false otherwise.
   * @returns {String} Service response text.
   */
  static getService(service, postVariables, get) {
    let response;
    if (get === true) {
      const getVariables = postVariables ? `?${postVariables}` : '';
      const serviceUrl = `${ServiceProvider.getServicePath(service)}${getVariables}`;
      response = ServiceProvider.getUrl(serviceUrl);
    } else {
      const serviceUrl = ServiceProvider.getServicePath(service);
      response = ServiceProvider.getUrl(serviceUrl, postVariables);
    }
    return response;
  }

  /**
   * Returns the server language of a certain service. The possible values
   * are: php, aspx, java and ruby.
   * This method has backward compatibility purposes.
   * @param {String} service - The configuration service.
   * @returns {String} - The server technology associated with the configuration service.
   */
  static getServerLanguageFromService(service) {
    if (service.indexOf('.php') !== -1) {
      return 'php';
    }
    if (service.indexOf('.aspx') !== -1) {
      return 'aspx';
    }
    if (service.indexOf('wirispluginengine') !== -1) {
      return 'ruby';
    }
    return 'java';
  }

  /**
   * Returns the URI associated with a certain service.
   * @param {String} service - The service name.
   * @return {String} The service path.
   */
  static createServiceURI(service) {
    const extension = ServiceProvider.serverExtension();
    return _util__WEBPACK_IMPORTED_MODULE_0__["default"].concatenateUrl(ServiceProvider.parameters.URI, service) + extension;
  }
  static serverExtension() {
    if (ServiceProvider.parameters.server.indexOf('php') !== -1) {
      return '.php';
    }
    if (ServiceProvider.parameters.server.indexOf('aspx') !== -1) {
      return '.aspx';
    }
    return '';
  }
}

/**
 * @property {String} service - The service name.
 * @property {String} path - The service path.
 * @static
 */
ServiceProvider._servicePaths = {};

/**
 * The integration path. Contains the path of the configuration service.
 * Used to define the path for all services.
 * @type {String}
 * @private
 */
ServiceProvider._integrationPath = '';

/**
 * ServiceProvider static listeners.
 * @type {Listeners}
 * @private
 */
ServiceProvider._listeners = new _listeners__WEBPACK_IMPORTED_MODULE_1__["default"]();

/**
 * Service provider parameters.
 * @type {ServiceProviderParameters}
 */
ServiceProvider._parameters = {};

/***/ }),

/***/ "../devkit/src/stringmanager.js":
/*!**************************************!*\
  !*** ../devkit/src/stringmanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StringManager)
/* harmony export */ });
/* harmony import */ var _lang_strings_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/strings.json */ "../devkit/lang/strings.json");

/**
 * This class represents a string manager. It's used to load localized strings.
 */
class StringManager {
  constructor() {
    throw new Error('Static class StringManager can not be instantiated.');
  }

  /**
   * Returns the associated value of certain string key. If the associated value
   * doesn't exits returns the original key.
   * @param {string} key - string key
   * @param {string} lang - DEFAULT = null. Specify the language to translate the string
   * @returns {string} correspondent value. If doesn't exists original key.
   */
  static get(key, lang) {
    // Default language definition
    let {
      language
    } = this;

    // If parameter language, use it
    if (lang) {
      language = lang;
    }

    // Cut down on strings. e.g. en_US -> en
    if (language && language.length > 2) {
      language = language.slice(0, 2);
    }

    // Check if we support the language
    if (!this.strings.hasOwnProperty(language)) {
      // eslint-disable-line no-prototype-builtins
      console.warn(`Unknown language ${language} set in StringManager.`);
      language = 'en';
    }

    // Check if the key is supported in the given language
    if (!this.strings[language].hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      console.warn(`Unknown key ${key} for language ${language} in StringManager.`);
      return key;
    }
    return this.strings[language][key];
  }
}

/**
 * Dictionary of dictionaries:
 * Key: language code
 * Value: Key: id of the string
 *        Value: translation of the string
 */
StringManager.strings = _lang_strings_json__WEBPACK_IMPORTED_MODULE_0__;

/**
 * Language of the translations; English by default
 */
StringManager.language = 'en';

/***/ }),

/***/ "../devkit/src/textcache.js":
/*!**********************************!*\
  !*** ../devkit/src/textcache.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextCache)
/* harmony export */ });
class TextCache {
  /**
   * @classdesc
   * This class represent a client-side text cache class. Contains pairs of
   * strings (key/value) which can be retrieved in any moment. Usually used
   * to store AJAX responses for text services like mathml2latex
   * (c.f {@link Latex} class) or mathml2accessible (c.f {@link Accessibility} class).
   * @constructs
   */
  constructor() {
    /**
     * Cache array property storing the cache entries.
     * @type {Array.<String>}
     */
    this.cache = [];
  }

  /**
   * This method populates a key/value pair into the {@link this.cache} property.
   * @param {String} key - Cache key, usually the service string parameter.
   * @param {String} value - Cache value, usually the service response.
   */
  populate(key, value) {
    this.cache[key] = value;
  }

  /**
   * Returns the cache value associated to certain cache key.
   * @param {String} key - Cache key, usually the service string parameter.
   * @return {String} value - Cache value, if exists. False otherwise.
   */
  get(key) {
    if (Object.prototype.hasOwnProperty.call(this.cache, key)) {
      return this.cache[key];
    }
    return false;
  }
}

/***/ }),

/***/ "../devkit/src/util.js":
/*!*****************************!*\
  !*** ../devkit/src/util.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ "../../node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mathml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathml */ "../devkit/src/mathml.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "../devkit/src/configuration.js");
/* harmony import */ var _latex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./latex */ "../devkit/src/latex.js");
/* harmony import */ var _stringmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stringmanager */ "../devkit/src/stringmanager.js");
/* eslint-disable no-bitwise */






/**
 * This class represents an utility class.
 */
class Util {
  /**
   * Fires an event in a target.
   * @param {EventTarget} eventTarget - target where event should be fired.
   * @param {string} eventName event to fire.
   * @static
   */
  static fireEvent(eventTarget, eventName) {
    if (document.createEvent) {
      const eventObject = document.createEvent('HTMLEvents');
      eventObject.initEvent(eventName, true, true);
      return !eventTarget.dispatchEvent(eventObject);
    }
    const eventObject = document.createEventObject();
    return eventTarget.fireEvent(`on${eventName}`, eventObject);
  }

  /**
   * Cross-browser addEventListener/attachEvent function.
   * @param {EventTarget} eventTarget - target to add the event.
   * @param {string} eventName - specifies the type of event.
   * @param {Function} callBackFunction - callback function.
   * @static
   */
  static addEvent(eventTarget, eventName, callBackFunction) {
    if (eventTarget.addEventListener) {
      eventTarget.addEventListener(eventName, callBackFunction, true);
    } else if (eventTarget.attachEvent) {
      // Backwards compatibility.
      eventTarget.attachEvent(`on${eventName}`, callBackFunction);
    }
  }

  /**
   * Cross-browser removeEventListener/detachEvent function.
   * @param {EventTarget} eventTarget - target to add the event.
   * @param {string} eventName - specifies the type of event.
   * @param {Function} callBackFunction - function to remove from the event target.
   * @static
   */
  static removeEvent(eventTarget, eventName, callBackFunction) {
    if (eventTarget.removeEventListener) {
      eventTarget.removeEventListener(eventName, callBackFunction, true);
    } else if (eventTarget.detachEvent) {
      eventTarget.detachEvent(`on${eventName}`, callBackFunction);
    }
  }

  /**
   * Adds the a callback function, for a certain event target, to the following event types:
   * - dblclick
   * - mousedown
   * - mouseup
   * @param {EventTarget} eventTarget - event target.
   * @param {Function} doubleClickHandler - function to run when on dblclick event.
   * @param {Function} mousedownHandler - function to run when on mousedown event.
   * @param {Function} mouseupHandler - function to run when on mouseup event.
   * @static
   */
  static addElementEvents(eventTarget, doubleClickHandler, mousedownHandler, mouseupHandler) {
    if (doubleClickHandler) {
      this.callbackDblclick = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        doubleClickHandler(element, realEvent);
      };
      Util.addEvent(eventTarget, 'dblclick', this.callbackDblclick);
    }
    if (mousedownHandler) {
      this.callbackMousedown = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        mousedownHandler(element, realEvent);
      };
      Util.addEvent(eventTarget, 'mousedown', this.callbackMousedown);
    }
    if (mouseupHandler) {
      this.callbackMouseup = event => {
        const realEvent = event || window.event;
        const element = realEvent.srcElement ? realEvent.srcElement : realEvent.target;
        mouseupHandler(element, realEvent);
      };
      // Chrome doesn't trigger this event for eventTarget if we release the mouse button
      // while the mouse is outside the editor text field.
      // This is a workaround: we trigger the event independently of where the mouse
      // is when we release its button.
      Util.addEvent(document, 'mouseup', this.callbackMouseup);
      Util.addEvent(eventTarget, 'mouseup', this.callbackMouseup);
    }
  }

  /**
   * Remove all callback function, for a certain event target, to the following event types:
   * - dblclick
   * - mousedown
   * - mouseup
   * @param {EventTarget} eventTarget - event target.
   * @static
   */
  static removeElementEvents(eventTarget) {
    Util.removeEvent(eventTarget, 'dblclick', this.callbackDblclick);
    Util.removeEvent(eventTarget, 'mousedown', this.callbackMousedown);
    Util.removeEvent(document, 'mouseup', this.callbackMouseup);
    Util.removeEvent(eventTarget, 'mouseup', this.callbackMouseup);
  }

  /**
   * Adds a class name to a HTMLElement.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the class name.
   * @static
   */
  static addClass(element, className) {
    if (!Util.containsClass(element, className)) {
      element.className += ` ${className}`;
    }
  }

  /**
   * Checks if a HTMLElement contains a certain class.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the className.
   * @returns {boolean} true if the HTMLElement contains the class name. false otherwise.
   * @static
   */
  static containsClass(element, className) {
    if (element == null || !('className' in element)) {
      return false;
    }
    const currentClasses = element.className.split(' ');
    for (let i = currentClasses.length - 1; i >= 0; i -= 1) {
      if (currentClasses[i] === className) {
        return true;
      }
    }
    return false;
  }

  /**
   * Remove a certain class for a HTMLElement.
   * @param {HTMLElement} element - the HTML element.
   * @param {string} className - the class name.
   * @static
   */
  static removeClass(element, className) {
    let newClassName = '';
    const classes = element.className.split(' ');
    for (let i = 0; i < classes.length; i += 1) {
      if (classes[i] !== className) {
        newClassName += `${classes[i]} `;
      }
    }
    element.className = newClassName.trim();
  }

  /**
   * Converts old xml initial text attribute (with «») to the correct one(with §lt;§gt;). It's
   * used to parse old applets.
   * @param {string} text - string containing safeXml characters
   * @returns {string} a string with safeXml characters parsed.
   * @static
   */
  static convertOldXmlinitialtextAttribute(text) {
    // Used to fix a bug with Cas imported from Moodle 1.9 to Moodle 2.x.
    // This could be removed in future.
    const val = 'value=';
    const xitpos = text.indexOf('xmlinitialtext');
    const valpos = text.indexOf(val, xitpos);
    const quote = text.charAt(valpos + val.length);
    const startquote = valpos + val.length + 1;
    const endquote = text.indexOf(quote, startquote);
    const value = text.substring(startquote, endquote);
    let newvalue = value.split('«').join('§lt;');
    newvalue = newvalue.split('»').join('§gt;');
    newvalue = newvalue.split('&').join('§');
    newvalue = newvalue.split('¨').join('§quot;');
    text = text.split(value).join(newvalue);
    return text;
  }

  /**
   * Cross-browser solution for creating new elements.
   * @param {string} tagName - tag name of the wished element.
   * @param {Object} attributes - an object where each key is a wished
   * attribute name and each value is its value.
   * @param {Object} [creator] - if supplied, this function will use
   * the "createElement" method from this param. Otherwise
   * document will be used as creator.
   * @returns {Element} The DOM element with the specified attributes assigned.
   * @static
   */
  static createElement(tagName, attributes, creator) {
    if (attributes === undefined) {
      attributes = {};
    }
    if (creator === undefined) {
      creator = document;
    }
    let element;

    /*
    * Internet Explorer fix:
    * If you create a new object dynamically, you can't set a non-standard attribute.
    * For example, you can't set the "src" attribute on an "applet" object.
    * Other browsers will throw an exception and will run the standard code.
    */
    try {
      let html = `<${tagName}`;
      Object.keys(attributes).forEach(attributeName => {
        html += ` ${attributeName}="${Util.htmlEntities(attributes[attributeName])}"`;
      });
      html += '>';
      element = creator.createElement(html);
    } catch (e) {
      element = creator.createElement(tagName);
      Object.keys(attributes).forEach(attributeName => {
        element.setAttribute(attributeName, attributes[attributeName]);
      });
    }
    return element;
  }

  /**
   * Creates new HTML from it's HTML code as string.
   * @param {string} objectCode - html code
   * @returns {Element} the HTML element.
   * @static
   */
  static createObject(objectCode, creator) {
    if (creator === undefined) {
      creator = document;
    }

    // Internet Explorer can't include "param" tag when is setting an innerHTML property.
    objectCode = objectCode.split('<applet ').join('<span wirisObject="WirisApplet" ').split('<APPLET ').join('<span wirisObject="WirisApplet" '); // It is a 'span' because 'span' objects can contain 'br' nodes.
    objectCode = objectCode.split('</applet>').join('</span>').split('</APPLET>').join('</span>');
    objectCode = objectCode.split('<param ').join('<br wirisObject="WirisParam" ').split('<PARAM ').join('<br wirisObject="WirisParam" '); // It is a 'br' because 'br' can't contain nodes.
    objectCode = objectCode.split('</param>').join('</br>').split('</PARAM>').join('</br>');
    const container = Util.createElement('div', {}, creator);
    container.innerHTML = objectCode;
    function recursiveParamsFix(object) {
      if (object.getAttribute && object.getAttribute('wirisObject') === 'WirisParam') {
        const attributesParsed = {};
        for (let i = 0; i < object.attributes.length; i += 1) {
          if (object.attributes[i].nodeValue !== null) {
            attributesParsed[object.attributes[i].nodeName] = object.attributes[i].nodeValue;
          }
        }
        const param = Util.createElement('param', attributesParsed, creator);

        // IE fix.
        if (param.NAME) {
          param.name = param.NAME;
          param.value = param.VALUE;
        }
        param.removeAttribute('wirisObject');
        object.parentNode.replaceChild(param, object);
      } else if (object.getAttribute && object.getAttribute('wirisObject') === 'WirisApplet') {
        const attributesParsed = {};
        for (let i = 0; i < object.attributes.length; i += 1) {
          if (object.attributes[i].nodeValue !== null) {
            attributesParsed[object.attributes[i].nodeName] = object.attributes[i].nodeValue;
          }
        }
        const applet = Util.createElement('applet', attributesParsed, creator);
        applet.removeAttribute('wirisObject');
        for (let i = 0; i < object.childNodes.length; i += 1) {
          recursiveParamsFix(object.childNodes[i]);
          if (object.childNodes[i].nodeName.toLowerCase() === 'param') {
            applet.appendChild(object.childNodes[i]);
            i -= 1; // When we insert the object child into the applet, object loses one child.
          }
        }

        object.parentNode.replaceChild(applet, object);
      } else {
        for (let i = 0; i < object.childNodes.length; i += 1) {
          recursiveParamsFix(object.childNodes[i]);
        }
      }
    }
    recursiveParamsFix(container);
    return container.firstChild;
  }

  /**
   * Converts an Element to its HTML code.
   * @param {Element} element - entry element.
   * @return {string} the HTML code of the input element.
   * @static
   */
  static createObjectCode(element) {
    // In case that the image was not created, the object can be null or undefined.
    if (typeof element === 'undefined' || element === null) {
      return null;
    }
    if (element.nodeType === 1) {
      // ELEMENT_NODE.
      let output = `<${element.tagName}`;
      for (let i = 0; i < element.attributes.length; i += 1) {
        if (element.attributes[i].specified) {
          output += ` ${element.attributes[i].name}="${Util.htmlEntities(element.attributes[i].value)}"`;
        }
      }
      if (element.childNodes.length > 0) {
        output += '>';
        for (let i = 0; i < element.childNodes.length; i += 1) {
          output += Util.createObject(element.childNodes[i]);
        }
        output += `</${element.tagName}>`;
      } else if (element.nodeName === 'DIV' || element.nodeName === 'SCRIPT') {
        output += `></${element.tagName}>`;
      } else {
        output += '/>';
      }
      return output;
    }
    if (element.nodeType === 3) {
      // TEXT_NODE.
      return Util.htmlEntities(element.nodeValue);
    }
    return '';
  }

  /**
   * Concatenates two URL paths.
   * @param {string} path1 - first URL path
   * @param {string} path2 - second URL path
   * @returns {string} new URL.
   */
  static concatenateUrl(path1, path2) {
    let separator = '';
    if (path1.indexOf('/') !== path1.length && path2.indexOf('/') !== 0) {
      separator = '/';
    }
    return (path1 + separator + path2).replace(/([^:]\/)\/+/g, '$1');
  }

  /**
   * Parses a text and replaces all HTML special characters by their correspondent entities.
   * @param {string} input - text to be parsed.
   * @returns {string} the input text with all their special characters replaced by their entities.
   * @static
   */
  static htmlEntities(input) {
    return input.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
  }

  /**
   * Sanitize HTML to prevent XSS injections.
   * @param {string} html - html to be sanitize.
   * @returns {string} html sanitized.
   * @static
   */
  static htmlSanitize(html) {
    let annotationRegex = /\<annotation.+\<\/annotation\>/;
    // Get all the annotation content including the tags.
    let annotation = html.match(annotationRegex);
    // Sanitize html code without removing the <semantics> and <annotation> tags.
    html = dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(html, {
      ADD_TAGS: ['semantics', 'annotation'],
      ALLOWED_ATTR: ['mathvariant', 'class', 'linebreak', 'open', 'close']
    });
    // Readd old annotation content.
    return html.replace(annotationRegex, annotation);
  }

  /**
   * Parses a text and replaces all the HTML entities by their characters.
   * @param {string} input - text to be parsed
   * @returns {string} the input text with all their entities replaced by characters.
   * @static
   */
  static htmlEntitiesDecode(input) {
    // Textarea element decodes when inner html is set.
    const textarea = document.createElement('textarea');
    textarea.innerHTML = input;
    return textarea.value;
  }

  /**
   * Returns a cross-browser http request.
   * @return {object} httpRequest request object.
   * @returns {XMLHttpRequest|ActiveXObject} the proper request object.
   */
  static createHttpRequest() {
    const currentPath = window.location.toString().substr(0, window.location.toString().lastIndexOf('/') + 1);
    if (currentPath.substr(0, 7) === 'file://') {
      throw _stringmanager__WEBPACK_IMPORTED_MODULE_4__["default"].get('exception_cross_site');
    }
    if (typeof XMLHttpRequest !== 'undefined') {
      return new XMLHttpRequest();
    }
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (oc) {
        return null;
      }
    }
  }

  /**
   * Converts a hash to a HTTP query.
   * @param {Object[]} properties - a key/value object.
   * @returns {string} a HTTP query containing all the key value pairs with
   * all the special characters replaced by their entities.
   * @static
   */
  static httpBuildQuery(properties) {
    let result = '';
    Object.keys(properties).forEach(i => {
      if (properties[i] != null) {
        result += `${Util.urlEncode(i)}=${Util.urlEncode(properties[i])}&`;
      }
    });

    // Deleting last '&' empty character.
    if (result.substring(result.length - 1) === '&') {
      result = result.substring(0, result.length - 1);
    }
    return result;
  }

  /**
   * Convert a hash to string sorting keys to get a deterministic output
   * @param {Object[]} hash - a key/value object.
   * @returns {string} a string with the form key1=value1...keyn=valuen
   * @static
   */
  static propertiesToString(hash) {
    // 1. Sort keys. We sort the keys because we want a deterministic output.
    const keys = [];
    Object.keys(hash).forEach(key => {
      if (Object.prototype.hasOwnProperty.call(hash, key)) {
        keys.push(key);
      }
    });
    const n = keys.length;
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        const s1 = keys[i];
        const s2 = keys[j];
        if (Util.compareStrings(s1, s2) > 0) {
          // Swap.
          keys[i] = s2;
          keys[j] = s1;
        }
      }
    }

    // 2. Generate output.
    let output = '';
    for (let i = 0; i < n; i += 1) {
      const key = keys[i];
      output += key;
      output += '=';
      let value = hash[key];
      value = value.replace('\\', '\\\\');
      value = value.replace('\n', '\\n');
      value = value.replace('\r', '\\r');
      value = value.replace('\t', '\\t');
      output += value;
      output += '\n';
    }
    return output;
  }

  /**
   * Compare two strings using charCodeAt method
   * @param {string} a - first string to compare.
   * @param {string} b - second string to compare.
   * @returns {number} the difference between a and b
   * @static
   */
  static compareStrings(a, b) {
    let i;
    const an = a.length;
    const bn = b.length;
    const n = an > bn ? bn : an;
    for (i = 0; i < n; i += 1) {
      const c = Util.fixedCharCodeAt(a, i) - Util.fixedCharCodeAt(b, i);
      if (c !== 0) {
        return c;
      }
    }
    return a.length - b.length;
  }

  /**
   * Fix charCodeAt() JavaScript function to handle non-Basic-Multilingual-Plane characters.
   * @param {string} string - input string
   * @param {number} idx - an integer greater than or equal to 0
   * and less than the length of the string
   * @returns {number} an integer representing the UTF-16 code of the string at the given index.
   * @static
   */
  static fixedCharCodeAt(string, idx) {
    idx = idx || 0;
    const code = string.charCodeAt(idx);
    let hi;
    let low;

    /* High surrogate (could change last hex to 0xDB7F to treat high
    private surrogates as single characters) */

    if (code >= 0xD800 && code <= 0xDBFF) {
      hi = code;
      low = string.charCodeAt(idx + 1);
      if (Number.isNaN(low)) {
        throw _stringmanager__WEBPACK_IMPORTED_MODULE_4__["default"].get('exception_high_surrogate');
      }
      return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
    }
    if (code >= 0xDC00 && code <= 0xDFFF) {
      // Low surrogate.
      /* We return false to allow loops to skip this iteration since should have
      already handled high surrogate above in the previous iteration. */
      return false;
    }
    return code;
  }

  /**
   * Returns an URL with it's query params converted into array.
   * @param {string} url - input URL.
   * @returns {Object[]} an array containing all URL query params.
   * @static
   */
  static urlToAssArray(url) {
    let i;
    i = url.indexOf('?');
    if (i > 0) {
      const query = url.substring(i + 1);
      const ss = query.split('&');
      const h = {};
      for (i = 0; i < ss.length; i += 1) {
        const s = ss[i];
        const kv = s.split('=');
        if (kv.length > 1) {
          h[kv[0]] = decodeURIComponent(kv[1].replace(/\+/g, ' '));
        }
      }
      return h;
    }
    return {};
  }

  /**
   * Returns an encoded URL by replacing each instance of certain characters by
   * one, two, three or four escape sequences using encodeURIComponent method.
   * !'()* . will not be encoded.
   *
   * @param {string} clearString - URL string to be encoded
   * @returns {string} URL with it's special characters replaced.
   * @static
   */
  static urlEncode(clearString) {
    let output = '';
    // Method encodeURIComponent doesn't encode !'()*~ .
    output = encodeURIComponent(clearString);
    return output;
  }

  // TODO: To parser?
  /**
   * Converts the HTML of a image into the output code that WIRIS must return.
   * By default returns the MathML stored on data-mahml attribute (if imgCode is a formula)
   * or the Wiriscas attribute of a WIRIS applet.
   * @param {string} imgCode - the html code from a formula or a CAS image.
   * @param {boolean} convertToXml - true if the image should be converted to XML.
   * @param {boolean} convertToSafeXml - true if the image should be converted to safeXML.
   * @returns {string} the XML or safeXML of a WIRIS image.
   * @static
   */
  static getWIRISImageOutput(imgCode, convertToXml, convertToSafeXml) {
    const imgObject = Util.createObject(imgCode);
    if (imgObject) {
      if (imgObject.className === _configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageClassName') || imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageMathmlAttribute'))) {
        if (!convertToXml) {
          return imgCode;
        }
        const dataMathML = imgObject.getAttribute(_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('imageMathmlAttribute'));
        // To handle annotations, first we need the MathML in XML.
        let mathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlDecode(dataMathML);
        if (!_configuration__WEBPACK_IMPORTED_MODULE_2__["default"].get('saveHandTraces')) {
          mathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].removeAnnotation(mathML, 'application/json');
        }
        if (mathML == null) {
          mathML = imgObject.getAttribute('alt');
        }
        if (convertToSafeXml) {
          const safeMathML = _mathml__WEBPACK_IMPORTED_MODULE_1__["default"].safeXmlEncode(mathML);
          return safeMathML;
        }
        return mathML;
      }
    }
    return imgCode;
  }

  /**
   * Gets the node length in characters.
   * @param {Node} node - HTML node.
   * @returns {number} node length.
   * @static
   */
  static getNodeLength(node) {
    const staticNodeLengths = {
      IMG: 1,
      BR: 1
    };
    if (node.nodeType === 3) {
      // TEXT_NODE.
      return node.nodeValue.length;
    }
    if (node.nodeType === 1) {
      // ELEMENT_NODE.
      let length = staticNodeLengths[node.nodeName.toUpperCase()];
      if (length === undefined) {
        length = 0;
      }
      for (let i = 0; i < node.childNodes.length; i += 1) {
        length += Util.getNodeLength(node.childNodes[i]);
      }
      return length;
    }
    return 0;
  }

  /**
   * Gets a selected node or text from an editable HTMLElement.
   * If the caret is on a text node, concatenates it with all the previous and next text nodes.
   * @param {HTMLElement} target - the editable HTMLElement.
   * @param {boolean} isIframe  - specifies if the target is an iframe or not
   * @param {boolean} forceGetSelection - if true, ignores IE system to get
   * the current selection and uses window.getSelection()
   * @returns {object} an object with the 'node' key set if the item is an
   * element or the keys 'node' and 'caretPosition' if the element is text.
   * @static
   */
  static getSelectedItem(target, isIframe, forceGetSelection) {
    let windowTarget;
    if (isIframe) {
      windowTarget = target.contentWindow;
      windowTarget.focus();
    } else {
      windowTarget = window;
      target.focus();
    }
    if (document.selection && !forceGetSelection) {
      const range = windowTarget.document.selection.createRange();
      if (range.parentElement) {
        if (range.htmlText.length > 0) {
          if (range.text.length === 0) {
            return Util.getSelectedItem(target, isIframe, true);
          }
          return null;
        }
        windowTarget.document.execCommand('InsertImage', false, '#');
        let temporalObject = range.parentElement();
        if (temporalObject.nodeName.toUpperCase() !== 'IMG') {
          // IE9 fix: parentElement() does not return the IMG node,
          // returns the parent DIV node. In IE < 9, pasteHTML does not work well.
          range.pasteHTML('<span id="wrs_openEditorWindow_temporalObject"></span>');
          temporalObject = windowTarget.document.getElementById('wrs_openEditorWindow_temporalObject');
        }
        let node;
        let caretPosition;
        if (temporalObject.nextSibling && temporalObject.nextSibling.nodeType === 3) {
          // TEXT_NODE.
          node = temporalObject.nextSibling;
          caretPosition = 0;
        } else if (temporalObject.previousSibling && temporalObject.previousSibling.nodeType === 3) {
          node = temporalObject.previousSibling;
          caretPosition = node.nodeValue.length;
        } else {
          node = windowTarget.document.createTextNode('');
          temporalObject.parentNode.insertBefore(node, temporalObject);
          caretPosition = 0;
        }
        temporalObject.parentNode.removeChild(temporalObject);
        return {
          node,
          caretPosition
        };
      }
      if (range.length > 1) {
        return null;
      }
      return {
        node: range.item(0)
      };
    }
    if (windowTarget.getSelection) {
      let range;
      const selection = windowTarget.getSelection();
      try {
        range = selection.getRangeAt(0);
      } catch (e) {
        range = windowTarget.document.createRange();
      }
      const node = range.startContainer;
      if (node.nodeType === 3) {
        // TEXT_NODE.
        return {
          node,
          caretPosition: range.startOffset
        };
      }
      if (node !== range.endContainer) {
        return null;
      }
      if (node.nodeType === 1) {
        // ELEMENT_NODE.
        const position = range.startOffset;
        if (node.childNodes[position]) {
          // In case that a formula is detected but not selected,
          // we create an empty span where we could insert the new formula.
          if (range.startOffset === range.endOffset) {
            if (position !== 0 && node.childNodes[position - 1].localName === 'span' && node.childNodes[position].classList.contains('Wirisformula')) {
              node.childNodes[position - 1].remove();
              return Util.getSelectedItem(target, isIframe, forceGetSelection);
            } else if (node.childNodes[position].classList?.contains('Wirisformula')) {
              if (position > 0 && node.childNodes[position - 1].classList.contains('Wirisformula') || position === 0) {
                var emptySpan = document.createElement('span');
                node.insertBefore(emptySpan, node.childNodes[position]);
                return {
                  node: node.childNodes[position]
                };
              }
            }
          }
          return {
            node: node.childNodes[position]
          };
        }
      }
    }
    return null;
  }

  /**
   * Returns null if there isn't any item or if it is malformed.
   * Otherwise returns an object containing the node with the MathML image
   * and the cursor position inside the textarea.
   * @param {HTMLTextAreaElement} textarea - textarea element.
   * @returns {Object} An object containing the node, the index of the
   * beginning  of the selected text, caret position and the start and end position of the
   * text node.
   * @static
   */
  static getSelectedItemOnTextarea(textarea) {
    const textNode = document.createTextNode(textarea.value);
    const textNodeValues = _latex__WEBPACK_IMPORTED_MODULE_3__["default"].getLatexFromTextNode(textNode, textarea.selectionStart);
    if (textNodeValues === null) {
      return null;
    }
    return {
      node: textNode,
      caretPosition: textarea.selectionStart,
      startPosition: textNodeValues.startPosition,
      endPosition: textNodeValues.endPosition
    };
  }

  /**
   * Looks for elements that match the given name in a HTML code string.
   * Important: this function is very concrete for WIRIS code.
   * It takes as preconditions lots of behaviors that are not the general case.
   * @param {string} code -  HTML code.
   * @param {string} name - element name.
   * @param {boolean} autoClosed - true if the elements are autoClosed.
   * @return {Object[]} an object containing all HTML elements of code matching the name argument.
   * @static
   */
  static getElementsByNameFromString(code, name, autoClosed) {
    const elements = [];
    code = code.toLowerCase();
    name = name.toLowerCase();
    let start = code.indexOf(`<${name} `);
    while (start !== -1) {
      // Look for nodes.
      let endString;
      if (autoClosed) {
        endString = '>';
      } else {
        endString = `</${name}>`;
      }
      let end = code.indexOf(endString, start);
      if (end !== -1) {
        end += endString.length;
        elements.push({
          start,
          end
        });
      } else {
        end = start + 1;
      }
      start = code.indexOf(`<${name} `, end);
    }
    return elements;
  }

  /**
   * Returns the numeric value of a base64 character.
   * @param  {string} character - base64 character.
   * @returns {number} base64 character numeric value.
   * @static
   */
  static decode64(character) {
    const PLUS = '+'.charCodeAt(0);
    const SLASH = '/'.charCodeAt(0);
    const NUMBER = '0'.charCodeAt(0);
    const LOWER = 'a'.charCodeAt(0);
    const UPPER = 'A'.charCodeAt(0);
    const PLUS_URL_SAFE = '-'.charCodeAt(0);
    const SLASH_URL_SAFE = '_'.charCodeAt(0);
    const code = character.charCodeAt(0);
    if (code === PLUS || code === PLUS_URL_SAFE) {
      return 62; // Char '+'.
    }

    if (code === SLASH || code === SLASH_URL_SAFE) {
      return 63; // Char '/'.
    }

    if (code < NUMBER) {
      return -1; // No match.
    }

    if (code < NUMBER + 10) {
      return code - NUMBER + 26 + 26;
    }
    if (code < UPPER + 26) {
      return code - UPPER;
    }
    if (code < LOWER + 26) {
      return code - LOWER + 26;
    }
    return null;
  }

  /**
   * Converts a base64 string to a array of bytes.
   * @param {string} b64String - base64 string.
   * @param {number} length - dimension of byte array (by default whole string).
   * @return {Object[]} the resultant byte array.
   * @static
   */
  static b64ToByteArray(b64String, length) {
    let tmp;
    if (b64String.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4'); // Tipped base64. Length is fixed.
    }

    const arr = [];
    let l;
    let placeHolders;
    if (!length) {
      // All b64String string.
      if (b64String.charAt(b64String.length - 2) === '=') {
        placeHolders = 2;
      } else if (b64String.charAt(b64String.length - 1) === '=') {
        placeHolders = 1;
      } else {
        placeHolders = 0;
      }
      l = placeHolders > 0 ? b64String.length - 4 : b64String.length;
    } else {
      l = length;
    }
    let i;
    for (i = 0; i < l; i += 4) {
      // Ignoring code checker standards (bitewise operators).
      // See https://tracker.moodle.org/browse/CONTRIB-5862 for further information.
      // @codingStandardsIgnoreStart
      // eslint-disable-next-line max-len
      tmp = Util.decode64(b64String.charAt(i)) << 18 | Util.decode64(b64String.charAt(i + 1)) << 12 | Util.decode64(b64String.charAt(i + 2)) << 6 | Util.decode64(b64String.charAt(i + 3));
      arr.push(tmp >> 16 & 0xFF);
      arr.push(tmp >> 8 & 0xFF);
      arr.push(tmp & 0xFF);
      // @codingStandardsIgnoreEnd
    }

    if (placeHolders) {
      if (placeHolders === 2) {
        // Ignoring code checker standards (bitewise operators).
        // @codingStandardsIgnoreStart
        // eslint-disable-next-line max-len
        tmp = Util.decode64(b64String.charAt(i)) << 2 | Util.decode64(b64String.charAt(i + 1)) >> 4;
        arr.push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        // eslint-disable-next-line max-len
        tmp = Util.decode64(b64String.charAt(i)) << 10 | Util.decode64(b64String.charAt(i + 1)) << 4 | Util.decode64(b64String.charAt(i + 2)) >> 2;
        arr.push(tmp >> 8 & 0xFF);
        arr.push(tmp & 0xFF);
        // @codingStandardsIgnoreEnd
      }
    }

    return arr;
  }

  /**
   * Returns the first 32-bit signed integer from a byte array.
   * @param {Object[]} bytes - array of bytes.
   * @returns {number} the 32-bit signed integer.
   * @static
   */
  static readInt32(bytes) {
    if (bytes.length < 4) {
      return false;
    }
    const int32 = bytes.splice(0, 4);
    // @codingStandardsIgnoreStart¡
    return int32[0] << 24 | int32[1] << 16 | int32[2] << 8 | int32[3] << 0;
    // @codingStandardsIgnoreEnd
  }

  /**
   * Read the first byte from a byte array.
   * @param {Object} bytes - input byte array.
   * @returns {number} first byte of the byte array.
   * @static
   */
  static readByte(bytes) {
    // @codingStandardsIgnoreStart
    return bytes.shift() << 0;
    // @codingStandardsIgnoreEnd
  }

  /**
   * Read an arbitrary number of bytes, from a fixed position on a byte array.
   * @param  {Object[]} bytes - byte array.
   * @param  {number} pos - start position.
   * @param  {number} len - number of bytes to read.
   * @returns {Object[]} the byte array.
   * @static
   */
  static readBytes(bytes, pos, len) {
    return bytes.splice(pos, len);
  }

  /**
   * Inserts or modifies formulas or CAS on a textarea.
   * @param {HTMLTextAreaElement} textarea - textarea target.
   * @param {string} text - text to add in the textarea. For example, to add the link to the image,
   * call this function as (textarea, Parser.createImageSrc(mathml));
   * @static
   */
  static updateTextArea(textarea, text) {
    if (textarea && text) {
      textarea.focus();
      if (textarea.selectionStart != null) {
        const {
          selectionEnd
        } = textarea;
        const selectionStart = textarea.value.substring(0, textarea.selectionStart);
        const selectionEndSub = textarea.value.substring(selectionEnd, textarea.value.length);
        textarea.value = selectionStart + text + selectionEndSub;
        textarea.selectionEnd = selectionEnd + text.length;
      } else {
        const selection = document.selection.createRange();
        selection.text = text;
      }
    }
  }

  /**
   * Modifies existing formula on a textarea.
   * @param {HTMLTextAreaElement} textarea - text area target.
   * @param {string} text - text to add in the textarea. For example, if you want to add the link
   * to the image,you can call this function as
   * Util.updateTextarea(textarea, Parser.createImageSrc(mathml));
   * @param {number} start - beginning index from textarea where it needs to be replaced by text.
   * @param {number} end - ending index from textarea where it needs to be replaced by text
   * @static
   */
  static updateExistingTextOnTextarea(textarea, text, start, end) {
    textarea.focus();
    const textareaStart = textarea.value.substring(0, start);
    textarea.value = textareaStart + text + textarea.value.substring(end, textarea.value.length);
    textarea.selectionEnd = start + text.length;
  }

  /**
   * Add a parameter with it's correspondent value to an URL (GET).
   * @param {string} path - URL path
   * @param {string} parameter - parameter
   * @param {string} value - value
   * @static
   */
  static addArgument(path, parameter, value) {
    let sep;
    if (path.indexOf('?') > 0) {
      sep = '&';
    } else {
      sep = '?';
    }
    return `${path + sep + parameter}=${value}`;
  }
}

/***/ }),

/***/ "../devkit/lang/strings.json":
/*!***********************************!*\
  !*** ../devkit/lang/strings.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ar":{"latex":"LaTeX","cancel":"إلغاء","accept":"إدراج","manual":"الدليل","insert_math":"إدراج صيغة رياضية - MathType","insert_chem":"إدراج صيغة كيميائية - ChemType","minimize":"تصغير","maximize":"تكبير","fullscreen":"ملء الشاشة","exit_fullscreen":"الخروج من ملء الشاشة","close":"إغلاق","mathtype":"MathType","title_modalwindow":"نافذة MathType مشروطة","close_modal_warning":"هل تريد المغادرة بالتأكيد؟ ستُفقد التغييرات التي أجريتها.","latex_name_label":"صيغة Latex","browser_no_compatible":"المستعرض غير متوافق مع تقنية AJAX. الرجاء استخدام أحدث إصدار من Mozilla Firefox.","error_convert_accessibility":"حدث خطأ أثناء التحويل من MathML إلى نص قابل للاستخدام.","exception_cross_site":"البرمجة النصية للمواقع المشتركة مسموح بها لـ HTTP فقط.","exception_high_surrogate":"المركّب المرتفع غير متبوع بمركّب منخفض في fixedCharCodeAt()‎","exception_string_length":"سلسلة غير صالحة. يجب أن يكون الطول من مضاعفات العدد 4","exception_key_nonobject":"Object.keys مستدعاة على غير كائن","exception_null_or_undefined":" هذا فارغ أو غير محدد","exception_not_function":" ليست دالة","exception_invalid_date_format":"تنسيق تاريخ غير صالح: ","exception_casting":"لا يمكن الصياغة ","exception_casting_to":" إلى "},"ca":{"latex":"LaTeX","cancel":"Cancel·lar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemàtica - MathType","insert_chem":"Inserir fórmula química - ChemType","minimize":"Minimitza","maximize":"Maximitza","fullscreen":"Pantalla completa","exit_fullscreen":"Sortir de la pantalla complera","close":"Tanca","mathtype":"MathType","title_modalwindow":" Finestra modal de MathType","close_modal_warning":"N\'estàs segur que vols sortir? Es perdran els canvis que has fet.","latex_name_label":"Fórmula en Latex","browser_no_compatible":"El teu navegador no és compatible amb AJAX. Si us plau, usa la darrera versió de Mozilla Firefox.","error_convert_accessibility":"Error en convertir de MathML a text accessible.","exception_cross_site":"Els scripts de llocs creuats només estan permesos per HTTP.","exception_high_surrogate":"Subrogat alt no seguit de subrogat baix a fixedCharCodeAt()","exception_string_length":"Cadena invàlida. La longitud ha de ser un múltiple de 4","exception_key_nonobject":"Object.keys anomenat a non-object","exception_null_or_undefined":" això és null o no definit","exception_not_function":" no és una funció","exception_invalid_date_format":"Format de data invàlid : ","exception_casting":"No es pot emetre ","exception_casting_to":" a "},"cs":{"latex":"LaTeX","cancel":"Storno","accept":"Vložit","manual":"Příručka","insert_math":"Vložit matematický vzorec - MathType","insert_chem":"Vložení chemického vzorce – ChemType","minimize":"Minimalizovat","maximize":"Maximalizovat","fullscreen":"Celá obrazovka","exit_fullscreen":"Opustit režim celé obrazovky","close":"Zavřít","mathtype":"MathType","title_modalwindow":"Modální okno MathType","close_modal_warning":"Opravdu chcete okno zavřít? Provedené změny budou ztraceny.","latex_name_label":"Vzorec v LaTeXu","browser_no_compatible":"Váš prohlížeč nepodporuje technologii AJAX. Použijte nejnovější verzi prohlížeče Mozilla Firefox.","error_convert_accessibility":"Při převodu kódu MathML na čitelný text došlo k chybě.","exception_cross_site":"Skriptování mezi více servery je povoleno jen v HTTP.","exception_high_surrogate":"Ve funkci fixedCharCodeAt() nenásleduje po první části kódu znaku druhá část","exception_string_length":"Neplatný řetězec. Délka musí být násobkem 4.","exception_key_nonobject":"Funkce Object.keys byla použita pro prvek, který není objektem","exception_null_or_undefined":" hodnota je null nebo není definovaná","exception_not_function":" není funkce","exception_invalid_date_format":"Neplatný formát data: ","exception_casting":"Nelze přetypovat ","exception_casting_to":" na "},"da":{"latex":"LaTeX","cancel":"Annuller","accept":"Indsæt","manual":"Brugervejledning","insert_math":"Indsæt matematisk formel - MathType","insert_chem":"Indsæt en kemisk formel - ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fuld skærm","exit_fullscreen":"Afslut Fuld skærm","close":"Luk","mathtype":"MathType","title_modalwindow":"MathType-modalvindue","close_modal_warning":"Er du sikker på, du vil lukke? Dine ændringer går tabt.","latex_name_label":"LaTex-formel","browser_no_compatible":"Din browser er ikke kompatibel med AJAX-teknologi. Brug den nyeste version af Mozilla Firefox.","error_convert_accessibility":"Fejl under konvertering fra MathML til tilgængelig tekst.","exception_cross_site":"Scripts på tværs af websteder er kun tilladt for HTTP.","exception_high_surrogate":"Et højt erstatningstegn er ikke fulgt af et lavt erstatningstegn i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Længden skal være et multiplum af 4","exception_key_nonobject":"Object.keys kaldet ved ikke-objekt","exception_null_or_undefined":" dette er nul eller ikke defineret","exception_not_function":" er ikke en funktion","exception_invalid_date_format":"Ugyldigt datoformat: ","exception_casting":"Kan ikke beregne ","exception_casting_to":" til "},"de":{"latex":"LaTeX","cancel":"Abbrechen","accept":"Einfügen","manual":"Handbuch","insert_math":"Mathematische Formel einfügen - MathType","insert_chem":"Eine chemische Formel einfügen – ChemType","minimize":"Verkleinern","maximize":"Vergrößern","fullscreen":"Vollbild","exit_fullscreen":"Vollbild schließen","close":"Schließen","mathtype":"MathType","title_modalwindow":"Modales MathType-Fenster","close_modal_warning":"Bist du sicher, dass du das Programm verlassen willst? Alle vorgenommenen Änderungen gehen damit verloren.","latex_name_label":"Latex-Formel","browser_no_compatible":"Dein Browser ist nicht mit der AJAX-Technologie kompatibel. Verwende bitte die neueste Version von Mozilla Firefox.","error_convert_accessibility":"Fehler beim Konvertieren von MathML in barrierefreien Text.","exception_cross_site":"Cross-Site-Scripting ist nur bei HTTP zulässig.","exception_high_surrogate":"Hoher Ersatz bei bei festerZeichenkodierungbei() nicht von niedrigem Ersatz befolgt.","exception_string_length":"Ungültige Zeichenfolge. Länge muss ein Vielfaches von 4 sein.","exception_key_nonobject":"Object.keys wurde für ein Nicht-Objekt aufgerufen.","exception_null_or_undefined":" Das ist Null oder nicht definiert.","exception_not_function":" ist keine Funktion","exception_invalid_date_format":"Ungültiges Datumsformat: ","exception_casting":"Umwandlung nicht möglich ","exception_casting_to":" zu "},"el":{"latex":"LaTeX","cancel":"Άκυρο","accept":"Εισαγωγή","manual":"Χειροκίνητα","insert_math":"Εισαγωγή μαθηματικού τύπου - MathType","insert_chem":"Εισαγωγή χημικού τύπου - ChemType","minimize":"Ελαχιστοποίηση","maximize":"Μεγιστοποίηση","fullscreen":"Πλήρης οθόνη","exit_fullscreen":"Έξοδος από πλήρη οθόνη","close":"Κλείσιμο","mathtype":"MathType","title_modalwindow":"Τροπικό παράθυρο MathType","close_modal_warning":"Επιθυμείτε σίγουρα αποχώρηση; Θα χαθούν οι αλλαγές που έχετε κάνει.","latex_name_label":"Τύπος LaTeX","browser_no_compatible":"Το πρόγραμμα περιήγησής σας δεν είναι συμβατό με την τεχνολογία AJAX. Χρησιμοποιήστε την πιο πρόσφατη έκδοση του Mozilla Firefox.","error_convert_accessibility":"Σφάλμα κατά τη μετατροπή από MathML σε προσβάσιμο κείμενο.","exception_cross_site":"Το XSS (Cross site scripting) επιτρέπεται μόνο για HTTP.","exception_high_surrogate":"Το υψηλό υποκατάστατο δεν ακολουθείται από χαμηλό υποκατάστατο στο fixedCharCodeAt()","exception_string_length":"Μη έγκυρη συμβολοσειρά. Το μήκος πρέπει να είναι πολλαπλάσιο του 4","exception_key_nonobject":"Έγινε κλήση του Object.keys σε μη αντικείμενο","exception_null_or_undefined":" αυτό είναι μηδενικό ή δεν έχει οριστεί","exception_not_function":" δεν είναι συνάρτηση","exception_invalid_date_format":"Μη έγκυρη μορφή ημερομηνίας: ","exception_casting":"Δεν είναι δυνατή η μετατροπή ","exception_casting_to":" σε "},"en":{"latex":"LaTeX","cancel":"Cancel","accept":"Insert","manual":"Manual","insert_math":"Insert a math equation - MathType","insert_chem":"Insert a chemistry formula - ChemType","minimize":"Minimize","maximize":"Maximize","fullscreen":"Full-screen","exit_fullscreen":"Exit full-screen","close":"Close","mathtype":"MathType","title_modalwindow":"MathType modal window","close_modal_warning":"Are you sure you want to leave? The changes you made will be lost.","latex_name_label":"Latex Formula","browser_no_compatible":"Your browser is not compatible with AJAX technology. Please, use the latest version of Mozilla Firefox.","error_convert_accessibility":"Error converting from MathML to accessible text.","exception_cross_site":"Cross site scripting is only allowed for HTTP.","exception_high_surrogate":"High surrogate not followed by low surrogate in fixedCharCodeAt()","exception_string_length":"Invalid string. Length must be a multiple of 4","exception_key_nonobject":"Object.keys called on non-object","exception_null_or_undefined":" this is null or not defined","exception_not_function":" is not a function","exception_invalid_date_format":"Invalid date format : ","exception_casting":"Cannot cast ","exception_casting_to":" to "},"es":{"latex":"LaTeX","cancel":"Cancelar","accept":"Insertar","manual":"Manual","insert_math":"Insertar fórmula matemática - MathType","insert_chem":"Insertar fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Pantalla completa","exit_fullscreen":"Salir de pantalla completa","close":"Cerrar","mathtype":"MathType","title_modalwindow":"Ventana modal de MathType","close_modal_warning":"Seguro que quieres cerrar? Los cambios que has hecho se perderán","latex_name_label":"Formula en Latex","browser_no_compatible":"Tu navegador no es complatible con AJAX. Por favor, usa la última version de Mozilla Firefox.","error_convert_accessibility":"Error conviertiendo una fórmula MathML a texto accesible.","exception_cross_site":"Cross site scripting solo está permitido para HTTP.","exception_high_surrogate":"Subrogado alto no seguido por subrogado bajo en fixedCharCodeAt()","exception_string_length":"Cadena no válida. La longitud debe ser múltiplo de 4","exception_key_nonobject":"Object.keys called on non-object","exception_null_or_undefined":" esto es null o no definido","exception_not_function":" no es una función","exception_invalid_date_format":"Formato de fecha inválido: ","exception_casting":"No se puede emitir","exception_casting_to":" a "},"et":{"latex":"LaTeX","cancel":"Loobu","accept":"Lisa","manual":"Käsiraamat","insert_math":"Lisa matemaatiline valem – WIRIS","insert_chem":"Lisa keemiline valem – ChemType","minimize":"Minimeeri","maximize":"Maksimeeri","fullscreen":"Täiskuva","exit_fullscreen":"Välju täiskuvalt","close":"Sule","mathtype":"MathType","title_modalwindow":"MathType\'i modaalaken","close_modal_warning":"Kas soovite kindlasti lahkuda? Tehtud muudatused lähevad kaduma.","latex_name_label":"Latexi valem","browser_no_compatible":"Teie brauser ei ühildu AJAXi tehnoloogiaga. Palun kasutage Mozilla Firefoxi uusimat versiooni.","error_convert_accessibility":"Tõrge teisendamisel MathML-ist muudetavaks tekstiks.","exception_cross_site":"Ristskriptimine on lubatud ainult HTTP kasutamisel.","exception_high_surrogate":"Funktsioonis fixedCharCodeAt() ei järgne kõrgemale asendusliikmele madalam asendusliige.","exception_string_length":"Vigane string. Pikkus peab olema 4 kordne.","exception_key_nonobject":"Protseduur Object.keys kutsuti mitteobjekti korral.","exception_null_or_undefined":" see on null või määramata","exception_not_function":" ei ole funktsioon","exception_invalid_date_format":"Sobimatu kuupäeva kuju: ","exception_casting":"Esitamine ei õnnestu ","exception_casting_to":" – "},"eu":{"latex":"LaTeX","cancel":"Ezeztatu","accept":"Txertatu","manual":"Gida","insert_math":"Txertatu matematikako formula - MathType","insert_chem":"Txertatu formula kimiko bat - ChemType","minimize":"Ikonotu","maximize":"Maximizatu","fullscreen":"Pantaila osoa","exit_fullscreen":"Irten pantaila osotik","close":"Itxi","mathtype":"MathType","title_modalwindow":"MathType leiho modala","close_modal_warning":"Ziur irten nahi duzula? Egiten dituzun aldaketak galdu egingo dira.","latex_name_label":"LaTex Formula","browser_no_compatible":"Zure arakatzailea ez da bateragarria AJAX teknologiarekin. Erabili Mozilla Firefoxen azken bertsioa.","error_convert_accessibility":"Errorea MathMLtik testu irisgarrira bihurtzean.","exception_cross_site":"Gune arteko scriptak HTTPrako soilik onartzen dira.","exception_high_surrogate":"Ordezko baxuak ez dio ordezko altuari jarraitzen, hemen: fixedCharCodeAt()","exception_string_length":"Kate baliogabea. Luzerak 4ren multiploa izan behar du","exception_key_nonobject":"Object.keys deitu zaio objektua ez den zerbaiti","exception_null_or_undefined":" nulua edo definitu gabea da","exception_not_function":" ez da funtzio bat","exception_invalid_date_format":"Data-formatu baliogabea : ","exception_casting":"Ezin da igorri ","exception_casting_to":" honi "},"fi":{"latex":"LaTeX","cancel":"Peruuta","accept":"Lisää","manual":"Manual","insert_math":"Liitä matemaattinen kaava - MathType","insert_chem":"Lisää kemian kaava - ChemType","minimize":"Pienennä","maximize":"Suurenna","fullscreen":"Koko ruutu","exit_fullscreen":"Poistu koko ruudun tilasta","close":"Sulje","mathtype":"MathType","title_modalwindow":"MathTypen modaalinen ikkuna","close_modal_warning":"Oletko varma, että haluat poistua? Menetät tekemäsi muutokset.","latex_name_label":"Latex-kaava","browser_no_compatible":"Selaimesi ei tue AJAX-tekniikkaa. Ole hyvä ja käytä uusinta Firefox-versiota.","error_convert_accessibility":"Virhe muunnettaessa MathML:stä tekstiksi.","exception_cross_site":"Cross site scripting sallitaan vain HTTP:llä.","exception_high_surrogate":"fixedCharCodeAt(): yläsijaismerkkiä ei seurannut alasijaismerkki","exception_string_length":"Epäkelpo merkkijono. Pituuden on oltava 4:n kerrannainen","exception_key_nonobject":"Object.keys kutsui muuta kuin oliota","exception_null_or_undefined":" tämä on null tai ei määritelty","exception_not_function":" ei ole funktio","exception_invalid_date_format":"Virheellinen päivämäärämuoto : ","exception_casting":"Ei voida muuntaa tyyppiä ","exception_casting_to":" tyyppiin "},"fr":{"latex":"LaTeX","cancel":"Annuler","accept":"Insérer","manual":"Manuel","insert_math":"Insérer une formule mathématique - MathType","insert_chem":"Insérer une formule chimique - ChemType","minimize":"Minimiser","maximize":"Maximiser","fullscreen":"Plein écran","exit_fullscreen":"Quitter le plein écran","close":"Fermer","mathtype":"MathType","title_modalwindow":"Fenêtre modale MathType","close_modal_warning":"Confirmez-vous vouloir fermer ? Les changements effectués seront perdus.","latex_name_label":"Formule LaTeX","browser_no_compatible":"Votre navigateur n’est pas compatible avec la technologie AJAX. Veuillez utiliser la dernière version de Mozilla Firefox.","error_convert_accessibility":"Une erreur de conversion du format MathML en texte accessible est survenue.","exception_cross_site":"Le cross-site scripting n’est autorisé que pour HTTP.","exception_high_surrogate":"Substitut élevé non suivi d’un substitut inférieur dans fixedCharCodeAt()","exception_string_length":"Chaîne non valide. Longueur limitée aux multiples de 4","exception_key_nonobject":"Object.keys appelé sur un non-objet","exception_null_or_undefined":" nul ou non défini","exception_not_function":" n’est pas une fonction","exception_invalid_date_format":"Format de date non valide : ","exception_casting":"Impossible de convertir ","exception_casting_to":" sur "},"gl":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir unha fórmula matemática - MathType","insert_chem":"Inserir unha fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Pantalla completa","exit_fullscreen":"Saír da pantalla completa","close":"Pechar","mathtype":"MathType","title_modalwindow":"Ventá modal de MathType","close_modal_warning":"Seguro que quere saír? Perderanse os cambios realizados.","latex_name_label":"Fórmula Latex","browser_no_compatible":"O seu explorador non é compatible coa tecnoloxía AJAX. Use a versión máis recente de Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML a texto accesible.","exception_cross_site":"Os scripts de sitios só se permiten para HTTP.","exception_high_surrogate":"Suplente superior non seguido por suplente inferior en fixedCharCodeAt()","exception_string_length":"Cadea non válida. A lonxitude debe ser un múltiplo de 4","exception_key_nonobject":"Claves de obxecto chamadas en non obxecto","exception_null_or_undefined":" nulo ou non definido","exception_not_function":" non é unha función","exception_invalid_date_format":"Formato de data non válido: ","exception_casting":"Non se pode converter ","exception_casting_to":" a "},"he":{"latex":"LaTeX","cancel":"ביטול","accept":"עדכון","manual":"ידני","insert_math":"הוספת נוסחה מתמטית - MathType","insert_chem":"הוספת כתיבה כימית - ChemType","minimize":"מזערי","maximize":"מרבי","fullscreen":"מסך מלא","exit_fullscreen":"יציאה ממצב מסך מלא","close":"סגירה","mathtype":"MathType","title_modalwindow":"חלון מודאלי של MathType","close_modal_warning":"האם לצאת? שינויים אשר בוצעו ימחקו.","latex_name_label":"נוסחת Latex","browser_no_compatible":"הדפדפן שלך אינו תואם לטכנולוגיית AJAX. יש להשתמש בגרסה העדכנית ביותר של Mozilla Firefox.","error_convert_accessibility":"שגיאה בהמרה מ-MathML לטקסט נגיש.","exception_cross_site":"סקריפטינג חוצה-אתרים מורשה עבור HTTP בלבד.","exception_high_surrogate":"ערך ממלא מקום גבוה אינו מופיע אחרי ערך ממלא מקום נמוך ב-fixedCharCodeAt()‎","exception_string_length":"מחרוזת לא חוקית. האורך חייב להיות כפולה של 4","exception_key_nonobject":"בוצעה קריאה אל Object.keys ברכיב שאינו אובייקט","exception_null_or_undefined":" הוא Null או לא מוגדר","exception_not_function":"איננה פונקציה","exception_invalid_date_format":"תסדיר תאריך אינו תקין : ","exception_casting":"לא ניתן להמיר ","exception_casting_to":" ל "},"hr":{"latex":"LaTeX","cancel":"Poništi","accept":"Umetni","manual":"Priručnik","insert_math":"Umetnite matematičku formulu - MathType","insert_chem":"Umetnite kemijsku formulu - ChemType","minimize":"Minimiziraj","maximize":"Maksimiziraj","fullscreen":"Cijeli zaslon","exit_fullscreen":"Izlaz iz prikaza na cijelom zaslonu","close":"Zatvori","mathtype":"MathType","title_modalwindow":"MathType modalni prozor","close_modal_warning":"Sigurno želite zatvoriti? Izgubit će se unesene promjene.","latex_name_label":"Latex formula","browser_no_compatible":"Vaš preglednik nije kompatibilan s AJAX tehnologijom. Upotrijebite najnoviju verziju Mozilla Firefoxa.","error_convert_accessibility":"Pogreška konverzije iz MathML-a u dostupni tekst.","exception_cross_site":"Skriptiranje na različitim web-mjestima dopušteno je samo za HTTP.","exception_high_surrogate":"Iza visoke zamjene ne slijedi niska zamjena u fixedCharCodeAt()","exception_string_length":"Nevažeći niz. Duljina mora biti višekratnik broja 4","exception_key_nonobject":"Object.keys pozvano na ne-objekt","exception_null_or_undefined":" ovo je nula ili nije definirano","exception_not_function":" nije funkcija","exception_invalid_date_format":"Nevažeći format datuma : ","exception_casting":"Ne može se poslati ","exception_casting_to":" na "},"hu":{"latex":"LaTeX","cancel":"Mégsem","accept":"Beszúrás","manual":"Kézikönyv","insert_math":"Matematikai képlet beszúrása - MathType","insert_chem":"Kémiai képet beillesztése - ChemType","minimize":"Kis méret","maximize":"Nagy méret","fullscreen":"Teljes képernyő","exit_fullscreen":"Teljes képernyő elhagyása","close":"Bezárás","mathtype":"MathType","title_modalwindow":"MathType modális ablak","close_modal_warning":"Biztosan kilép? A módosítások el fognak veszni.","latex_name_label":"Latex képlet","browser_no_compatible":"A böngészője nem kompatibilis az AJAX technológiával. Használja a Mozilla Firefox legújabb verzióját.","error_convert_accessibility":"Hiba lépett fel a MathML szöveggé történő konvertálása során.","exception_cross_site":"Az oldalak közti scriptelés csak HTTP esetén engedélyezett.","exception_high_surrogate":"A magas helyettesítő karaktert nem alacsony helyettesítő karakter követi a fixedCharCodeAt() esetében","exception_string_length":"Érvénytelen karakterlánc. A hossznak a 4 többszörösének kell lennie","exception_key_nonobject":"Az Object.keys egy nem objektumra került meghívásra","exception_null_or_undefined":" null vagy nem definiált","exception_not_function":" nem függvény","exception_invalid_date_format":"Érvénytelen dátumformátum: ","exception_casting":"Nem alkalmazható ","exception_casting_to":" erre "},"id":{"latex":"LaTeX","cancel":"Membatalkan","accept":"Masukkan","manual":"Manual","insert_math":"Masukkan rumus matematika - MathType","insert_chem":"Masukkan rumus kimia - ChemType","minimize":"Minikan","maximize":"Perbesar","fullscreen":"Layar penuh","exit_fullscreen":"Keluar layar penuh","close":"Tutup","mathtype":"MathType","title_modalwindow":"Jendela modal MathType","close_modal_warning":"Anda yakin ingin keluar? Anda akan kehilangan perubahan yang Anda buat.","latex_name_label":"Rumus Latex","browser_no_compatible":"Penjelajah Anda tidak kompatibel dengan teknologi AJAX. Harap gunakan Mozilla Firefox versi terbaru.","error_convert_accessibility":"Kesalahan konversi dari MathML menjadi teks yang dapat diakses.","exception_cross_site":"Skrip lintas situs hanya diizinkan untuk HTTP.","exception_high_surrogate":"Pengganti tinggi tidak diikuti oleh pengganti rendah di fixedCharCodeAt()","exception_string_length":"String tidak valid. Panjang harus kelipatan 4","exception_key_nonobject":"Object.keys meminta nonobjek","exception_null_or_undefined":" ini tidak berlaku atau tidak didefinisikan","exception_not_function":" bukan sebuah fungsi","exception_invalid_date_format":"Format tanggal tidak valid : ","exception_casting":"Tidak dapat mentransmisikan ","exception_casting_to":" untuk "},"it":{"latex":"LaTeX","cancel":"Annulla","accept":"Inserisci","manual":"Manuale","insert_math":"Inserisci una formula matematica - MathType","insert_chem":"Inserisci una formula chimica - ChemType","minimize":"Riduci a icona","maximize":"Ingrandisci","fullscreen":"Schermo intero","exit_fullscreen":"Esci da schermo intero","close":"Chiudi","mathtype":"MathType","title_modalwindow":"Finestra modale di MathType","close_modal_warning":"Confermi di voler uscire? Le modifiche effettuate andranno perse.","latex_name_label":"Formula LaTeX","browser_no_compatible":"Il tuo browser non è compatibile con la tecnologia AJAX. Utilizza la versione più recente di Mozilla Firefox.","error_convert_accessibility":"Errore durante la conversione da MathML in testo accessibile.","exception_cross_site":"Lo scripting tra siti è consentito solo per HTTP.","exception_high_surrogate":"Surrogato alto non seguito da surrogato basso in fixedCharCodeAt()","exception_string_length":"Stringa non valida. La lunghezza deve essere un multiplo di 4","exception_key_nonobject":"Metodo Object.keys richiamato in un elemento non oggetto","exception_null_or_undefined":" questo è un valore null o non definito","exception_not_function":" non è una funzione","exception_invalid_date_format":"Formato di data non valido: ","exception_casting":"Impossibile eseguire il cast ","exception_casting_to":" a "},"ja":{"latex":"LaTeX","cancel":"キャンセル","accept":"挿入","manual":"マニュアル","insert_math":"数式を挿入 - MathType","insert_chem":"化学式を挿入 - ChemType","minimize":"最小化","maximize":"最大化","fullscreen":"全画面表示","exit_fullscreen":"全画面表示を解除","close":"閉じる","mathtype":"MathType","title_modalwindow":"MathType モードウィンドウ","close_modal_warning":"このページから移動してもよろしいですか？変更内容は失われます。","latex_name_label":"LaTeX 数式","browser_no_compatible":"お使いのブラウザは、AJAX 技術と互換性がありません。Mozilla Firefox の最新バージョンをご使用ください。","error_convert_accessibility":"MathML からアクセシブルなテキストへの変換中にエラーが発生しました。","exception_cross_site":"クロスサイトスクリプティングは、HTTP のみに許可されています。","exception_high_surrogate":"fixedCharCodeAt（）で上位サロゲートの後に下位サロゲートがありません","exception_string_length":"無効な文字列です。長さは4の倍数である必要があります","exception_key_nonobject":"Object.keys が非オブジェクトで呼び出されました","exception_null_or_undefined":" null であるか、定義されていません","exception_not_function":" は関数ではありません","exception_invalid_date_format":"無効な日付形式: ","exception_casting":"次にキャスト ","exception_casting_to":" できません "},"ko":{"latex":"LaTeX","cancel":"취소","accept":"삽입","manual":"설명서","insert_math":"수학 공식 삽입 - MathType","insert_chem":"화학 공식 입력하기 - ChemType","minimize":"최소화","maximize":"최대화","fullscreen":"전체 화면","exit_fullscreen":"전체 화면 나가기","close":"닫기","mathtype":"MathType","title_modalwindow":"MathType 모달 창","close_modal_warning":"정말로 나가시겠습니까? 변경 사항이 손실됩니다.","latex_name_label":"Latex 공식","browser_no_compatible":"사용자의 브라우저는 AJAX 기술과 호환되지 않습니다. Mozilla Firefox 최신 버전을 사용하십시오.","error_convert_accessibility":"MathML로부터 접근 가능한 텍스트로 오류 변환.","exception_cross_site":"사이트 교차 스크립팅은 HTTP 환경에서만 사용할 수 있습니다.","exception_high_surrogate":"fixedCharCodeAt()에서는 상위 서러게이트 뒤에 하위 서러게이트가 붙지 않습니다","exception_string_length":"유효하지 않은 스트링입니다. 길이는 4의 배수여야 합니다","exception_key_nonobject":"Object.keys가 non-object를 요청하였습니다","exception_null_or_undefined":" Null값이거나 정의되지 않았습니다","exception_not_function":" 함수가 아닙니다","exception_invalid_date_format":"유효하지 않은 날짜 포맷 : ","exception_casting":"캐스팅할 수 없습니다 ","exception_casting_to":" (으)로 "},"nl":{"latex":"LaTeX","cancel":"Annuleren","insert_chem":"Een scheikundige formule invoegen - ChemType","minimize":"Minimaliseer","maximize":"Maximaliseer","fullscreen":"Schermvullend","exit_fullscreen":"Verlaat volledig scherm","close":"Sluit","mathtype":"MathType","title_modalwindow":"Modaal venster MathType","close_modal_warning":"Weet je zeker dat je de app wilt sluiten? De gemaakte wijzigingen gaan verloren.","latex_name_label":"LaTeX-formule","browser_no_compatible":"Je browser is niet compatibel met AJAX-technologie. Gebruik de meest recente versie van Mozilla Firefox.","error_convert_accessibility":"Fout bij conversie van MathML naar toegankelijke tekst.","exception_cross_site":"Cross-site scripting is alleen toegestaan voor HTTP.","exception_high_surrogate":"Hoog surrogaat niet gevolgd door laag surrogaat in fixedCharCodeAt()","exception_string_length":"Ongeldige tekenreeks. Lengte moet een veelvoud van 4 zijn","exception_key_nonobject":"Object.keys opgeroepen voor niet-object","exception_null_or_undefined":" dit is nul of niet gedefinieerd","exception_not_function":" is geen functie","exception_invalid_date_format":"Ongeldige datumnotatie: ","exception_casting":"Kan niet weergeven ","exception_casting_to":" op "},"no":{"latex":"LaTeX","cancel":"Avbryt","accept":"Set inn","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Set inn ein kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringane du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettlesaren er ikkje kompatibel med AJAX-teknologien. Bruk den nyaste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering frå MathML til tilgjengeleg tekst.","exception_cross_site":"Skripting på tvers av nettstadar er bere tillaten med HTTP.","exception_high_surrogate":"Høgt surrogat er ikkje etterfølgt av lågt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengda må vera deleleg på 4","exception_key_nonobject":"Object.keys kalla på eit ikkje-objekt","exception_null_or_undefined":" dette er null eller ikkje definert","exception_not_function":" er ikkje ein funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikkje bruka casting ","exception_casting_to":" til "},"nb":{"latex":"LaTeX","cancel":"Avbryt","accept":"Insert","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Sett inn en kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringene du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettleseren er ikke kompatibel med AJAX-teknologien. Bruk den nyeste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering fra MathML til tilgjengelig tekst.","exception_cross_site":"Skripting på tvers av nettsteder er bare tillatt med HTTP.","exception_high_surrogate":"Høyt surrogat etterfølges ikke av lavt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengden må være delelig på 4","exception_key_nonobject":"Object.keys kalte på et ikke-objekt","exception_null_or_undefined":" dette er null eller ikke definert","exception_not_function":" er ikke en funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikke bruke casting ","exception_casting_to":" til "},"nn":{"latex":"LaTeX","cancel":"Avbryt","accept":"Set inn","manual":"Håndbok","insert_math":"Sett inn matematikkformel - MathType","insert_chem":"Set inn ein kjemisk formel – ChemType","minimize":"Minimer","maximize":"Maksimer","fullscreen":"Fullskjerm","exit_fullscreen":"Avslutt fullskjerm","close":"Lukk","mathtype":"MathType","title_modalwindow":"Modalt MathType-vindu","close_modal_warning":"Er du sikker på at du vil gå ut? Endringane du har gjort, vil gå tapt.","latex_name_label":"LaTeX-formel","browser_no_compatible":"Nettlesaren er ikkje kompatibel med AJAX-teknologien. Bruk den nyaste versjonen av Mozilla Firefox.","error_convert_accessibility":"Feil under konvertering frå MathML til tilgjengeleg tekst.","exception_cross_site":"Skripting på tvers av nettstadar er bere tillaten med HTTP.","exception_high_surrogate":"Høgt surrogat er ikkje etterfølgt av lågt surrogat i fixedCharCodeAt()","exception_string_length":"Ugyldig streng. Lengda må vera deleleg på 4","exception_key_nonobject":"Object.keys kalla på eit ikkje-objekt","exception_null_or_undefined":" dette er null eller ikkje definert","exception_not_function":" er ikkje ein funksjon","exception_invalid_date_format":"Ugyldig datoformat: ","exception_casting":"Kan ikkje bruka casting ","exception_casting_to":" til "},"pl":{"latex":"LaTeX","cancel":"Anuluj","accept":"Wstaw","manual":"Instrukcja","insert_math":"Wstaw formułę matematyczną - MathType","insert_chem":"Wstaw wzór chemiczny — ChemType","minimize":"Minimalizuj","maximize":"Maksymalizuj","fullscreen":"Pełny ekran","exit_fullscreen":"Opuść tryb pełnoekranowy","close":"Zamknij","mathtype":"MathType","title_modalwindow":"Okno modalne MathType","close_modal_warning":"Czy na pewno chcesz zamknąć? Wprowadzone zmiany zostaną utracone.","latex_name_label":"Wzór Latex","browser_no_compatible":"Twoja przeglądarka jest niezgodna z technologią AJAX Użyj najnowszej wersji Mozilla Firefox.","error_convert_accessibility":"Błąd podczas konwertowania z formatu MathML na dostępny tekst.","exception_cross_site":"Krzyżowanie skryptów witryny jest dozwolone tylko dla HTTP.","exception_high_surrogate":"Brak niskiego surogatu po wysokim surogacie w fixedCharCodeAt()","exception_string_length":"Niewłaściwy ciąg znaków. Długość musi być wielokrotnością liczby 4.","exception_key_nonobject":"Argumentem wywołanej funkcji Object.key nie jest obiekt.","exception_null_or_undefined":" jest zerowy lub niezdefiniowany","exception_not_function":" nie jest funkcją","exception_invalid_date_format":"Nieprawidłowy format daty: ","exception_casting":"Nie można rzutować ","exception_casting_to":" na "},"pt":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemática - MathType","insert_chem":"Inserir uma fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Ecrã completo","exit_fullscreen":"Sair do ecrã completo","close":"Fechar","mathtype":"MathType","title_modalwindow":"Janela modal do MathType","close_modal_warning":"Pretende sair? As alterações efetuadas serão perdidas.","latex_name_label":"Fórmula Latex","browser_no_compatible":"O seu navegador não é compatível com a tecnologia AJAX. Utilize a versão mais recente do Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML para texto acessível.","exception_cross_site":"O processamento de scripts em vários sites só é permitido para HTTP.","exception_high_surrogate":"Substituto alto não seguido por um substituto baixo em fixedCharCodeAt()","exception_string_length":"Cadeia inválida. O comprimento tem de ser um múltiplo de 4","exception_key_nonobject":"Object.keys chamou um não-objeto","exception_null_or_undefined":" é nulo ou não está definido","exception_not_function":" não é uma função","exception_invalid_date_format":"Formato de data inválido: ","exception_casting":"Não é possível adicionar ","exception_casting_to":" até "},"pt_br":{"latex":"LaTeX","cancel":"Cancelar","accept":"Inserir","manual":"Manual","insert_math":"Inserir fórmula matemática - MathType","insert_chem":"Insira uma fórmula química - ChemType","minimize":"Minimizar","maximize":"Maximizar","fullscreen":"Tela cheia","exit_fullscreen":"Sair de tela cheia","close":"Fechar","mathtype":"MathType","title_modalwindow":"Janela modal do MathType","close_modal_warning":"Tem certeza de que deseja sair? Todas as alterações serão perdidas.","latex_name_label":"Fórmula LaTeX","browser_no_compatible":"O navegador não é compatível com a tecnologia AJAX. Use a versão mais recente do Mozilla Firefox.","error_convert_accessibility":"Erro ao converter de MathML para texto acessível.","exception_cross_site":"O uso de scripts entre sites só é permitido para HTTP.","exception_high_surrogate":"High surrogate não seguido de low surrogate em fixedCharCodeAt()","exception_string_length":"String inválida. O comprimento deve ser um múltiplo de 4","exception_key_nonobject":"Object.keys chamados em não objeto","exception_null_or_undefined":" isto é nulo ou não definido","exception_not_function":" não é uma função","exception_invalid_date_format":"Formato de data inválido: ","exception_casting":"Não é possível transmitir ","exception_casting_to":" para "},"ro":{"latex":"LaTeX","cancel":"Anulare","accept":"Inserați","manual":"Ghid","insert_math":"Inserați o formulă matematică - MathType","insert_chem":"Inserați o formulă chimică - ChemType","minimize":"Minimizați","maximize":"Maximizați","fullscreen":"Afișați pe tot ecranul","exit_fullscreen":"Opriți afișarea pe tot ecranul","close":"Închideți","mathtype":"MathType","title_modalwindow":"Fereastră modală MathType","close_modal_warning":"Sigur doriți să ieșiți? Modificările realizate se vor pierde.","latex_name_label":"Formulă Latex","browser_no_compatible":"Browserul dvs. nu este compatibil cu tehnologia AJAX. Utilizați cea mai recentă versiune de Mozilla Firefox.","error_convert_accessibility":"Eroare la convertirea din MathML în text accesibil.","exception_cross_site":"Scriptarea între site‑uri este permisă doar pentru HTTP.","exception_high_surrogate":"Surogatul superior nu este urmat de un surogat inferior în fixedCharCodeAt()","exception_string_length":"Șir nevalid. Lungimea trebuie să fie multiplu de 4","exception_key_nonobject":"Object.keys a apelat un non-obiect","exception_null_or_undefined":" este null sau nu este definit","exception_not_function":" nu este funcție","exception_invalid_date_format":"Format de dată nevalid: ","exception_casting":"nu se poate difuza ","exception_casting_to":" către "},"ru":{"latex":"LaTeX","cancel":"отмена","accept":"Вставка","manual":"вручную","insert_math":"Вставить математическую формулу: WIRIS","insert_chem":"Вставить химическую формулу — ChemType","minimize":"Свернуть","maximize":"Развернуть","fullscreen":"На весь экран","exit_fullscreen":"Выйти из полноэкранного режима","close":"Закрыть","mathtype":"MathType","title_modalwindow":"Режимное окно MathType","close_modal_warning":"Вы уверены, что хотите выйти? Все внесенные изменения будут утрачены.","latex_name_label":"Формула Latex","browser_no_compatible":"Ваш браузер несовместим с технологией AJAX. Используйте последнюю версию Mozilla Firefox.","error_convert_accessibility":"При преобразовании формулы в текст допустимого формата произошла ошибка.","exception_cross_site":"Межсайтовые сценарии доступны только для HTTP.","exception_high_surrogate":"Младший символ-заместитель не сопровождает старший символ-заместитель в исправленном методе CharCodeAt()","exception_string_length":"Недопустимая строка. Длинна должна быть кратной 4.","exception_key_nonobject":"Метод Object.keys вызван не для объекта","exception_null_or_undefined":" значение пустое или не определено","exception_not_function":" не функция","exception_invalid_date_format":"Недопустимый формат даты: ","exception_casting":"Не удается привести ","exception_casting_to":" к "},"sv":{"latex":"LaTeX","cancel":"Avbryt","accept":"Infoga","manual":"Bruksanvisning","insert_math":"Infoga matematisk formel - MathType","insert_chem":"Infoga en kemiformel – ChemType","minimize":"Minimera","maximize":"Maximera","fullscreen":"Helskärm","exit_fullscreen":"Stäng helskärm","close":"Stäng","mathtype":"MathType","title_modalwindow":"MathType modulfönster","close_modal_warning":"Vill du avsluta? Inga ändringar kommer att sparas.","latex_name_label":"Latex-formel","browser_no_compatible":"Din webbläsare är inte kompatibel med AJAX-teknik. Använd den senaste versionen av Mozilla Firefox.","error_convert_accessibility":"Det uppstod ett fel vid konvertering från MathML till åtkomlig text.","exception_cross_site":"Skriptkörning över flera sajter är endast tillåtet för HTTP.","exception_high_surrogate":"Hög surrogat följs inte av låg surrogat i fixedCharCodeAt()","exception_string_length":"Ogiltig sträng. Längden måste vara en multipel av 4","exception_key_nonobject":"Object.keys anropade icke-objekt","exception_null_or_undefined":" det är null eller inte definierat","exception_not_function":" är inte en funktion","exception_invalid_date_format":"Ogiltigt datumformat: ","exception_casting":"Går inte att konvertera ","exception_casting_to":" till "},"tr":{"latex":"LaTeX","cancel":"Vazgeç","accept":"Ekle","manual":"Kılavuz","insert_math":"Matematik formülü ekle - MathType","insert_chem":"Kimya formülü ekleyin - ChemType","minimize":"Simge Durumuna Küçült","maximize":"Ekranı Kapla","fullscreen":"Tam Ekran","exit_fullscreen":"Tam Ekrandan Çık","close":"Kapat","mathtype":"MathType","title_modalwindow":"MathType kalıcı penceresi","close_modal_warning":"Çıkmak istediğinizden emin misiniz? Yaptığınız değişiklikler kaybolacak.","latex_name_label":"Latex Formülü","browser_no_compatible":"Tarayıcınız AJAX teknolojisiyle uyumlu değil. Lütfen en güncel Mozilla Firefox sürümünü kullanın.","error_convert_accessibility":"MathML biçiminden erişilebilir metne dönüştürme hatası.","exception_cross_site":"Siteler arası komut dosyası yazma işlemine yalnızca HTTP için izin verilir.","exception_high_surrogate":"fixedCharCodeAt() fonksiyonunda üst vekilin ardından alt vekil gelmiyor","exception_string_length":"Geçersiz dizgi. Uzunluk, 4\'ün katlarından biri olmalıdır","exception_key_nonobject":"Nesne olmayan öğe üzerinde Object.keys çağrıldı","exception_null_or_undefined":" bu değer boş veya tanımlanmamış","exception_not_function":" bir fonksiyon değil","exception_invalid_date_format":"Geçersiz tarih biçimi: ","exception_casting":"Tür dönüştürülemiyor ","exception_casting_to":" hedef: "},"zh":{"latex":"LaTeX","cancel":"取消","accept":"插入","manual":"手册","insert_math":"插入数学公式 - MathType","insert_chem":"插入化学分子式 - ChemType","minimize":"最小化","maximize":"最大化","fullscreen":"全屏幕","exit_fullscreen":"退出全屏幕","close":"关闭","mathtype":"MathType","title_modalwindow":"MathType 模式窗口","close_modal_warning":"您确定要离开吗？您所做的修改将丢失。","latex_name_label":"Latex 分子式","browser_no_compatible":"您的浏览器不兼容 AJAX 技术。请使用最新版 Mozilla Firefox。","error_convert_accessibility":"将 MathML 转换为可访问文本时出错。","exception_cross_site":"仅 HTTP 允许跨站脚本。","exception_high_surrogate":"fixedCharCodeAt() 中的高位代理之后未跟随低位代理","exception_string_length":"无效字符串。长度必须是 4 的倍数","exception_key_nonobject":"非对象调用了 Object.keys","exception_null_or_undefined":" 该值为空或未定义","exception_not_function":" 不是一个函数","exception_invalid_date_format":"无效日期格式： ","exception_casting":"无法转换 ","exception_casting_to":" 为 "},"":{}}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNB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QUV3QixDQUFDLEVBQUVxRCxDQUFDLEVBQUUxRCxDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDQ3FFLEVBQUUsRUFBRSxTQUFBQSxDQUFVOUQsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUVtQixDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxFQUFFO01BQ25DLE9BQU8sSUFBSSxDQUFDeUUsR0FBRyxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDZCxDQUFDLEVBQUVDLENBQUMsQ0FBQyxFQUFFOUUsQ0FBQyxDQUFDLEVBQUV3QixDQUFDLEVBQUVxRCxDQUFDLEVBQUUxRCxDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDQ29FLEVBQUUsRUFBRSxTQUFBQSxDQUFVN0QsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUVtQixDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxFQUFFO01BQ25DLE9BQU8sSUFBSSxDQUFDeUUsR0FBRyxDQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDaEIsQ0FBQyxFQUFFN0UsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDNkYsTUFBTSxDQUFDZixDQUFDLEVBQUUsQ0FBQzlFLENBQUMsQ0FBQyxDQUFDLEVBQUV3QixDQUFDLEVBQUVxRCxDQUFDLEVBQUUxRCxDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDQ21FLEVBQUUsRUFBRSxTQUFBQSxDQUFVNUQsQ0FBQyxFQUFFcUQsQ0FBQyxFQUFFQyxDQUFDLEVBQUU5RSxDQUFDLEVBQUVtQixDQUFDLEVBQUViLENBQUMsRUFBRVcsQ0FBQyxFQUFFO01BQ25DLE9BQU8sSUFBSSxDQUFDeUUsR0FBRyxDQUFDLElBQUksQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQ0MsTUFBTSxDQUFDaEIsQ0FB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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi8uLi9ub2RlX21vZHVsZXMvZG9tcHVyaWZ5L2Rpc3QvcHVyaWZ5LmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvbGF0ZXgudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9tYXRobWwudHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9wcm9wZXJ0aWVzLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi9zcmMvcmV0cm8udHMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uL3NyYy9zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9hY2Nlc3NpYmlsaXR5LmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9jb25maWd1cmF0aW9uLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL2ltYWdlLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9sYXRleC5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvbGlzdGVuZXJzLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9tYXRobWwuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL21kNS5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvcGFyc2VyLmpzIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvLi4vZGV2a2l0L3NyYy9zZXJ2aWNlcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL3N0cmluZ21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci8uLi9kZXZraXQvc3JjL3RleHRjYWNoZS5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyLy4uL2RldmtpdC9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3aXJpcy9tYXRodHlwZS12aWV3ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad2lyaXMvbWF0aHR5cGUtdmlld2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHdpcmlzL21hdGh0eXBlLXZpZXdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEBsaWNlbnNlIERPTVB1cmlmeSAyLjQuNyB8IChjKSBDdXJlNTMgYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IFJlbGVhc2VkIHVuZGVyIHRoZSBBcGFjaGUgbGljZW5zZSAyLjAgYW5kIE1vemlsbGEgUHVibGljIExpY2Vuc2UgMi4wIHwgZ2l0aHViLmNvbS9jdXJlNTMvRE9NUHVyaWZ5L2Jsb2IvMi40LjcvTElDRU5TRSAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ET01QdXJpZnkgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9LCBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgcmV0dXJuIG87XG4gICAgfTtcblxuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cblxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgICB0cnkge1xuICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mLFxuICAgICAgaXNGcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4sXG4gICAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIHZhciBmcmVlemUgPSBPYmplY3QuZnJlZXplLFxuICAgICAgc2VhbCA9IE9iamVjdC5zZWFsLFxuICAgICAgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgUmVmbGVjdCxcbiAgICAgIGFwcGx5ID0gX3JlZi5hcHBseSxcbiAgICAgIGNvbnN0cnVjdCA9IF9yZWYuY29uc3RydWN0O1xuXG4gIGlmICghYXBwbHkpIHtcbiAgICBhcHBseSA9IGZ1bmN0aW9uIGFwcGx5KGZ1biwgdGhpc1ZhbHVlLCBhcmdzKSB7XG4gICAgICByZXR1cm4gZnVuLmFwcGx5KHRoaXNWYWx1ZSwgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZnJlZXplKSB7XG4gICAgZnJlZXplID0gZnVuY3Rpb24gZnJlZXplKHgpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIXNlYWwpIHtcbiAgICBzZWFsID0gZnVuY3Rpb24gc2VhbCh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFjb25zdHJ1Y3QpIHtcbiAgICBjb25zdHJ1Y3QgPSBmdW5jdGlvbiBjb25zdHJ1Y3QoRnVuYywgYXJncykge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoRnVuYywgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFycmF5Rm9yRWFjaCA9IHVuYXBwbHkoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpO1xuICB2YXIgYXJyYXlQb3AgPSB1bmFwcGx5KEFycmF5LnByb3RvdHlwZS5wb3ApO1xuICB2YXIgYXJyYXlQdXNoID0gdW5hcHBseShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gIHZhciBzdHJpbmdUb0xvd2VyQ2FzZSA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b0xvd2VyQ2FzZSk7XG4gIHZhciBzdHJpbmdUb1N0cmluZyA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyk7XG4gIHZhciBzdHJpbmdNYXRjaCA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5tYXRjaCk7XG4gIHZhciBzdHJpbmdSZXBsYWNlID0gdW5hcHBseShTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xuICB2YXIgc3RyaW5nSW5kZXhPZiA9IHVuYXBwbHkoU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mKTtcbiAgdmFyIHN0cmluZ1RyaW0gPSB1bmFwcGx5KFN0cmluZy5wcm90b3R5cGUudHJpbSk7XG4gIHZhciByZWdFeHBUZXN0ID0gdW5hcHBseShSZWdFeHAucHJvdG90eXBlLnRlc3QpO1xuICB2YXIgdHlwZUVycm9yQ3JlYXRlID0gdW5jb25zdHJ1Y3QoVHlwZUVycm9yKTtcbiAgZnVuY3Rpb24gdW5hcHBseShmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzQXJnKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncyk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB1bmNvbnN0cnVjdChmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoZnVuYywgYXJncyk7XG4gICAgfTtcbiAgfVxuICAvKiBBZGQgcHJvcGVydGllcyB0byBhIGxvb2t1cCB0YWJsZSAqL1xuXG4gIGZ1bmN0aW9uIGFkZFRvU2V0KHNldCwgYXJyYXksIHRyYW5zZm9ybUNhc2VGdW5jKSB7XG4gICAgdmFyIF90cmFuc2Zvcm1DYXNlRnVuYztcblxuICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gKF90cmFuc2Zvcm1DYXNlRnVuYyA9IHRyYW5zZm9ybUNhc2VGdW5jKSAhPT0gbnVsbCAmJiBfdHJhbnNmb3JtQ2FzZUZ1bmMgIT09IHZvaWQgMCA/IF90cmFuc2Zvcm1DYXNlRnVuYyA6IHN0cmluZ1RvTG93ZXJDYXNlO1xuXG4gICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAvLyBNYWtlICdpbicgYW5kIHRydXRoeSBjaGVja3MgbGlrZSBCb29sZWFuKHNldC5jb25zdHJ1Y3RvcilcbiAgICAgIC8vIGluZGVwZW5kZW50IG9mIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gT2JqZWN0LnByb3RvdHlwZS5cbiAgICAgIC8vIFByZXZlbnQgcHJvdG90eXBlIHNldHRlcnMgZnJvbSBpbnRlcmNlcHRpbmcgc2V0IGFzIGEgdGhpcyB2YWx1ZS5cbiAgICAgIHNldFByb3RvdHlwZU9mKHNldCwgbnVsbCk7XG4gICAgfVxuXG4gICAgdmFyIGwgPSBhcnJheS5sZW5ndGg7XG5cbiAgICB3aGlsZSAobC0tKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGFycmF5W2xdO1xuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBsY0VsZW1lbnQgPSB0cmFuc2Zvcm1DYXNlRnVuYyhlbGVtZW50KTtcblxuICAgICAgICBpZiAobGNFbGVtZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgLy8gQ29uZmlnIHByZXNldHMgKGUuZy4gdGFncy5qcywgYXR0cnMuanMpIGFyZSBpbW11dGFibGUuXG4gICAgICAgICAgaWYgKCFpc0Zyb3plbihhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5W2xdID0gbGNFbGVtZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQgPSBsY0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0W2VsZW1lbnRdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2V0O1xuICB9XG4gIC8qIFNoYWxsb3cgY2xvbmUgYW4gb2JqZWN0ICovXG5cbiAgZnVuY3Rpb24gY2xvbmUob2JqZWN0KSB7XG4gICAgdmFyIG5ld09iamVjdCA9IGNyZWF0ZShudWxsKTtcbiAgICB2YXIgcHJvcGVydHk7XG5cbiAgICBmb3IgKHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgaWYgKGFwcGx5KGhhc093blByb3BlcnR5LCBvYmplY3QsIFtwcm9wZXJ0eV0pID09PSB0cnVlKSB7XG4gICAgICAgIG5ld09iamVjdFtwcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmplY3Q7XG4gIH1cbiAgLyogSUUxMCBkb2Vzbid0IHN1cHBvcnQgX19sb29rdXBHZXR0ZXJfXyBzbyBsZXRzJ1xuICAgKiBzaW11bGF0ZSBpdC4gSXQgYWxzbyBhdXRvbWF0aWNhbGx5IGNoZWNrc1xuICAgKiBpZiB0aGUgcHJvcCBpcyBmdW5jdGlvbiBvciBnZXR0ZXIgYW5kIGJlaGF2ZXNcbiAgICogYWNjb3JkaW5nbHkuICovXG5cbiAgZnVuY3Rpb24gbG9va3VwR2V0dGVyKG9iamVjdCwgcHJvcCkge1xuICAgIHdoaWxlIChvYmplY3QgIT09IG51bGwpIHtcbiAgICAgIHZhciBkZXNjID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MuZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZGVzYy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiB1bmFwcGx5KGRlc2MudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iamVjdCA9IGdldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFsbGJhY2tWYWx1ZShlbGVtZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2ZhbGxiYWNrIHZhbHVlIGZvcicsIGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XG4gIH1cblxuICB2YXIgaHRtbCQxID0gZnJlZXplKFsnYScsICdhYmJyJywgJ2Fjcm9ueW0nLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiZGknLCAnYmRvJywgJ2JpZycsICdibGluaycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NlbnRlcicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2NvbnRlbnQnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWNvcmF0b3InLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXInLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VsZW1lbnQnLCAnZW0nLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9udCcsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRlcicsICduYXYnLCAnbm9icicsICdvbCcsICdvcHRncm91cCcsICdvcHRpb24nLCAnb3V0cHV0JywgJ3AnLCAncGljdHVyZScsICdwcmUnLCAncHJvZ3Jlc3MnLCAncScsICdycCcsICdydCcsICdydWJ5JywgJ3MnLCAnc2FtcCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzaGFkb3cnLCAnc21hbGwnLCAnc291cmNlJywgJ3NwYWNlcicsICdzcGFuJywgJ3N0cmlrZScsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndHInLCAndHJhY2snLCAndHQnLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJ10pOyAvLyBTVkdcblxuICB2YXIgc3ZnJDEgPSBmcmVlemUoWydzdmcnLCAnYScsICdhbHRnbHlwaCcsICdhbHRnbHlwaGRlZicsICdhbHRnbHlwaGl0ZW0nLCAnYW5pbWF0ZWNvbG9yJywgJ2FuaW1hdGVtb3Rpb24nLCAnYW5pbWF0ZXRyYW5zZm9ybScsICdjaXJjbGUnLCAnY2xpcHBhdGgnLCAnZGVmcycsICdkZXNjJywgJ2VsbGlwc2UnLCAnZmlsdGVyJywgJ2ZvbnQnLCAnZycsICdnbHlwaCcsICdnbHlwaHJlZicsICdoa2VybicsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhcmdyYWRpZW50JywgJ21hcmtlcicsICdtYXNrJywgJ21ldGFkYXRhJywgJ21wYXRoJywgJ3BhdGgnLCAncGF0dGVybicsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JhZGlhbGdyYWRpZW50JywgJ3JlY3QnLCAnc3RvcCcsICdzdHlsZScsICdzd2l0Y2gnLCAnc3ltYm9sJywgJ3RleHQnLCAndGV4dHBhdGgnLCAndGl0bGUnLCAndHJlZicsICd0c3BhbicsICd2aWV3JywgJ3ZrZXJuJ10pO1xuICB2YXIgc3ZnRmlsdGVycyA9IGZyZWV6ZShbJ2ZlQmxlbmQnLCAnZmVDb2xvck1hdHJpeCcsICdmZUNvbXBvbmVudFRyYW5zZmVyJywgJ2ZlQ29tcG9zaXRlJywgJ2ZlQ29udm9sdmVNYXRyaXgnLCAnZmVEaWZmdXNlTGlnaHRpbmcnLCAnZmVEaXNwbGFjZW1lbnRNYXAnLCAnZmVEaXN0YW50TGlnaHQnLCAnZmVGbG9vZCcsICdmZUZ1bmNBJywgJ2ZlRnVuY0InLCAnZmVGdW5jRycsICdmZUZ1bmNSJywgJ2ZlR2F1c3NpYW5CbHVyJywgJ2ZlSW1hZ2UnLCAnZmVNZXJnZScsICdmZU1lcmdlTm9kZScsICdmZU1vcnBob2xvZ3knLCAnZmVPZmZzZXQnLCAnZmVQb2ludExpZ2h0JywgJ2ZlU3BlY3VsYXJMaWdodGluZycsICdmZVNwb3RMaWdodCcsICdmZVRpbGUnLCAnZmVUdXJidWxlbmNlJ10pOyAvLyBMaXN0IG9mIFNWRyBlbGVtZW50cyB0aGF0IGFyZSBkaXNhbGxvd2VkIGJ5IGRlZmF1bHQuXG4gIC8vIFdlIHN0aWxsIG5lZWQgdG8ga25vdyB0aGVtIHNvIHRoYXQgd2UgY2FuIGRvIG5hbWVzcGFjZVxuICAvLyBjaGVja3MgcHJvcGVybHkgaW4gY2FzZSBvbmUgd2FudHMgdG8gYWRkIHRoZW0gdG9cbiAgLy8gYWxsb3ctbGlzdC5cblxuICB2YXIgc3ZnRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ2FuaW1hdGUnLCAnY29sb3ItcHJvZmlsZScsICdjdXJzb3InLCAnZGlzY2FyZCcsICdmZWRyb3BzaGFkb3cnLCAnZm9udC1mYWNlJywgJ2ZvbnQtZmFjZS1mb3JtYXQnLCAnZm9udC1mYWNlLW5hbWUnLCAnZm9udC1mYWNlLXNyYycsICdmb250LWZhY2UtdXJpJywgJ2ZvcmVpZ25vYmplY3QnLCAnaGF0Y2gnLCAnaGF0Y2hwYXRoJywgJ21lc2gnLCAnbWVzaGdyYWRpZW50JywgJ21lc2hwYXRjaCcsICdtZXNocm93JywgJ21pc3NpbmctZ2x5cGgnLCAnc2NyaXB0JywgJ3NldCcsICdzb2xpZGNvbG9yJywgJ3Vua25vd24nLCAndXNlJ10pO1xuICB2YXIgbWF0aE1sJDEgPSBmcmVlemUoWydtYXRoJywgJ21lbmNsb3NlJywgJ21lcnJvcicsICdtZmVuY2VkJywgJ21mcmFjJywgJ21nbHlwaCcsICdtaScsICdtbGFiZWxlZHRyJywgJ21tdWx0aXNjcmlwdHMnLCAnbW4nLCAnbW8nLCAnbW92ZXInLCAnbXBhZGRlZCcsICdtcGhhbnRvbScsICdtcm9vdCcsICdtcm93JywgJ21zJywgJ21zcGFjZScsICdtc3FydCcsICdtc3R5bGUnLCAnbXN1YicsICdtc3VwJywgJ21zdWJzdXAnLCAnbXRhYmxlJywgJ210ZCcsICdtdGV4dCcsICdtdHInLCAnbXVuZGVyJywgJ211bmRlcm92ZXInXSk7IC8vIFNpbWlsYXJseSB0byBTVkcsIHdlIHdhbnQgdG8ga25vdyBhbGwgTWF0aE1MIGVsZW1lbnRzLFxuICAvLyBldmVuIHRob3NlIHRoYXQgd2UgZGlzYWxsb3cgYnkgZGVmYXVsdC5cblxuICB2YXIgbWF0aE1sRGlzYWxsb3dlZCA9IGZyZWV6ZShbJ21hY3Rpb24nLCAnbWFsaWduZ3JvdXAnLCAnbWFsaWdubWFyaycsICdtbG9uZ2RpdicsICdtc2NhcnJpZXMnLCAnbXNjYXJyeScsICdtc2dyb3VwJywgJ21zdGFjaycsICdtc2xpbmUnLCAnbXNyb3cnLCAnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nLCAnYW5ub3RhdGlvbi14bWwnLCAnbXByZXNjcmlwdHMnLCAnbm9uZSddKTtcbiAgdmFyIHRleHQgPSBmcmVlemUoWycjdGV4dCddKTtcblxuICB2YXIgaHRtbCA9IGZyZWV6ZShbJ2FjY2VwdCcsICdhY3Rpb24nLCAnYWxpZ24nLCAnYWx0JywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvcGljdHVyZWlucGljdHVyZScsICdhdXRvcGxheScsICdiYWNrZ3JvdW5kJywgJ2JnY29sb3InLCAnYm9yZGVyJywgJ2NhcHR1cmUnLCAnY2VsbHBhZGRpbmcnLCAnY2VsbHNwYWNpbmcnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzJywgJ2NsZWFyJywgJ2NvbG9yJywgJ2NvbHMnLCAnY29sc3BhbicsICdjb250cm9scycsICdjb250cm9sc2xpc3QnLCAnY29vcmRzJywgJ2Nyb3Nzb3JpZ2luJywgJ2RhdGV0aW1lJywgJ2RlY29kaW5nJywgJ2RlZmF1bHQnLCAnZGlyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVwaWN0dXJlaW5waWN0dXJlJywgJ2Rpc2FibGVyZW1vdGVwbGF5YmFjaycsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLCAnZW5jdHlwZScsICdlbnRlcmtleWhpbnQnLCAnZmFjZScsICdmb3InLCAnaGVhZGVycycsICdoZWlnaHQnLCAnaGlkZGVuJywgJ2hpZ2gnLCAnaHJlZicsICdocmVmbGFuZycsICdpZCcsICdpbnB1dG1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzbWFwJywgJ2tpbmQnLCAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvYWRpbmcnLCAnbG9vcCcsICdsb3cnLCAnbWF4JywgJ21heGxlbmd0aCcsICdtZWRpYScsICdtZXRob2QnLCAnbWluJywgJ21pbmxlbmd0aCcsICdtdWx0aXBsZScsICdtdXRlZCcsICduYW1lJywgJ25vbmNlJywgJ25vc2hhZGUnLCAnbm92YWxpZGF0ZScsICdub3dyYXAnLCAnb3BlbicsICdvcHRpbXVtJywgJ3BhdHRlcm4nLCAncGxhY2Vob2xkZXInLCAncGxheXNpbmxpbmUnLCAncG9zdGVyJywgJ3ByZWxvYWQnLCAncHViZGF0ZScsICdyYWRpb2dyb3VwJywgJ3JlYWRvbmx5JywgJ3JlbCcsICdyZXF1aXJlZCcsICdyZXYnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dzJywgJ3Jvd3NwYW4nLCAnc3BlbGxjaGVjaycsICdzY29wZScsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3JjbGFuZycsICdzdGFydCcsICdzcmMnLCAnc3Jjc2V0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsICd0YWJpbmRleCcsICd0aXRsZScsICd0cmFuc2xhdGUnLCAndHlwZScsICd1c2VtYXAnLCAndmFsaWduJywgJ3ZhbHVlJywgJ3dpZHRoJywgJ3htbG5zJywgJ3Nsb3QnXSk7XG4gIHZhciBzdmcgPSBmcmVlemUoWydhY2NlbnQtaGVpZ2h0JywgJ2FjY3VtdWxhdGUnLCAnYWRkaXRpdmUnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FzY2VudCcsICdhdHRyaWJ1dGVuYW1lJywgJ2F0dHJpYnV0ZXR5cGUnLCAnYXppbXV0aCcsICdiYXNlZnJlcXVlbmN5JywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2JlZ2luJywgJ2JpYXMnLCAnYnknLCAnY2xhc3MnLCAnY2xpcCcsICdjbGlwcGF0aHVuaXRzJywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY29sb3InLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnY3gnLCAnY3knLCAnZCcsICdkeCcsICdkeScsICdkaWZmdXNlY29uc3RhbnQnLCAnZGlyZWN0aW9uJywgJ2Rpc3BsYXknLCAnZGl2aXNvcicsICdkdXInLCAnZWRnZW1vZGUnLCAnZWxldmF0aW9uJywgJ2VuZCcsICdmaWxsJywgJ2ZpbGwtb3BhY2l0eScsICdmaWxsLXJ1bGUnLCAnZmlsdGVyJywgJ2ZpbHRlcnVuaXRzJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2Z4JywgJ2Z5JywgJ2cxJywgJ2cyJywgJ2dseXBoLW5hbWUnLCAnZ2x5cGhyZWYnLCAnZ3JhZGllbnR1bml0cycsICdncmFkaWVudHRyYW5zZm9ybScsICdoZWlnaHQnLCAnaHJlZicsICdpZCcsICdpbWFnZS1yZW5kZXJpbmcnLCAnaW4nLCAnaW4yJywgJ2snLCAnazEnLCAnazInLCAnazMnLCAnazQnLCAna2VybmluZycsICdrZXlwb2ludHMnLCAna2V5c3BsaW5lcycsICdrZXl0aW1lcycsICdsYW5nJywgJ2xlbmd0aGFkanVzdCcsICdsZXR0ZXItc3BhY2luZycsICdrZXJuZWxtYXRyaXgnLCAna2VybmVsdW5pdGxlbmd0aCcsICdsaWdodGluZy1jb2xvcicsICdsb2NhbCcsICdtYXJrZXItZW5kJywgJ21hcmtlci1taWQnLCAnbWFya2VyLXN0YXJ0JywgJ21hcmtlcmhlaWdodCcsICdtYXJrZXJ1bml0cycsICdtYXJrZXJ3aWR0aCcsICdtYXNrY29udGVudHVuaXRzJywgJ21hc2t1bml0cycsICdtYXgnLCAnbWFzaycsICdtZWRpYScsICdtZXRob2QnLCAnbW9kZScsICdtaW4nLCAnbmFtZScsICdudW1vY3RhdmVzJywgJ29mZnNldCcsICdvcGVyYXRvcicsICdvcGFjaXR5JywgJ29yZGVyJywgJ29yaWVudCcsICdvcmllbnRhdGlvbicsICdvcmlnaW4nLCAnb3ZlcmZsb3cnLCAncGFpbnQtb3JkZXInLCAncGF0aCcsICdwYXRobGVuZ3RoJywgJ3BhdHRlcm5jb250ZW50dW5pdHMnLCAncGF0dGVybnRyYW5zZm9ybScsICdwYXR0ZXJudW5pdHMnLCAncG9pbnRzJywgJ3ByZXNlcnZlYWxwaGEnLCAncHJlc2VydmVhc3BlY3RyYXRpbycsICdwcmltaXRpdmV1bml0cycsICdyJywgJ3J4JywgJ3J5JywgJ3JhZGl1cycsICdyZWZ4JywgJ3JlZnknLCAncmVwZWF0Y291bnQnLCAncmVwZWF0ZHVyJywgJ3Jlc3RhcnQnLCAncmVzdWx0JywgJ3JvdGF0ZScsICdzY2FsZScsICdzZWVkJywgJ3NoYXBlLXJlbmRlcmluZycsICdzcGVjdWxhcmNvbnN0YW50JywgJ3NwZWN1bGFyZXhwb25lbnQnLCAnc3ByZWFkbWV0aG9kJywgJ3N0YXJ0b2Zmc2V0JywgJ3N0ZGRldmlhdGlvbicsICdzdGl0Y2h0aWxlcycsICdzdG9wLWNvbG9yJywgJ3N0b3Atb3BhY2l0eScsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2UnLCAnc3Ryb2tlLXdpZHRoJywgJ3N0eWxlJywgJ3N1cmZhY2VzY2FsZScsICdzeXN0ZW1sYW5ndWFnZScsICd0YWJpbmRleCcsICd0YXJnZXR4JywgJ3RhcmdldHknLCAndHJhbnNmb3JtJywgJ3RyYW5zZm9ybS1vcmlnaW4nLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3RleHRsZW5ndGgnLCAndHlwZScsICd1MScsICd1MicsICd1bmljb2RlJywgJ3ZhbHVlcycsICd2aWV3Ym94JywgJ3Zpc2liaWxpdHknLCAndmVyc2lvbicsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3aWR0aCcsICd3b3JkLXNwYWNpbmcnLCAnd3JhcCcsICd3cml0aW5nLW1vZGUnLCAneGNoYW5uZWxzZWxlY3RvcicsICd5Y2hhbm5lbHNlbGVjdG9yJywgJ3gnLCAneDEnLCAneDInLCAneG1sbnMnLCAneScsICd5MScsICd5MicsICd6JywgJ3pvb21hbmRwYW4nXSk7XG4gIHZhciBtYXRoTWwgPSBmcmVlemUoWydhY2NlbnQnLCAnYWNjZW50dW5kZXInLCAnYWxpZ24nLCAnYmV2ZWxsZWQnLCAnY2xvc2UnLCAnY29sdW1uc2FsaWduJywgJ2NvbHVtbmxpbmVzJywgJ2NvbHVtbnNwYW4nLCAnZGVub21hbGlnbicsICdkZXB0aCcsICdkaXInLCAnZGlzcGxheScsICdkaXNwbGF5c3R5bGUnLCAnZW5jb2RpbmcnLCAnZmVuY2UnLCAnZnJhbWUnLCAnaGVpZ2h0JywgJ2hyZWYnLCAnaWQnLCAnbGFyZ2VvcCcsICdsZW5ndGgnLCAnbGluZXRoaWNrbmVzcycsICdsc3BhY2UnLCAnbHF1b3RlJywgJ21hdGhiYWNrZ3JvdW5kJywgJ21hdGhjb2xvcicsICdtYXRoc2l6ZScsICdtYXRodmFyaWFudCcsICdtYXhzaXplJywgJ21pbnNpemUnLCAnbW92YWJsZWxpbWl0cycsICdub3RhdGlvbicsICdudW1hbGlnbicsICdvcGVuJywgJ3Jvd2FsaWduJywgJ3Jvd2xpbmVzJywgJ3Jvd3NwYWNpbmcnLCAncm93c3BhbicsICdyc3BhY2UnLCAncnF1b3RlJywgJ3NjcmlwdGxldmVsJywgJ3NjcmlwdG1pbnNpemUnLCAnc2NyaXB0c2l6ZW11bHRpcGxpZXInLCAnc2VsZWN0aW9uJywgJ3NlcGFyYXRvcicsICdzZXBhcmF0b3JzJywgJ3N0cmV0Y2h5JywgJ3N1YnNjcmlwdHNoaWZ0JywgJ3N1cHNjcmlwdHNoaWZ0JywgJ3N5bW1ldHJpYycsICd2b2Zmc2V0JywgJ3dpZHRoJywgJ3htbG5zJ10pO1xuICB2YXIgeG1sID0gZnJlZXplKFsneGxpbms6aHJlZicsICd4bWw6aWQnLCAneGxpbms6dGl0bGUnLCAneG1sOnNwYWNlJywgJ3htbG5zOnhsaW5rJ10pO1xuXG4gIHZhciBNVVNUQUNIRV9FWFBSID0gc2VhbCgvXFx7XFx7W1xcd1xcV10qfFtcXHdcXFddKlxcfVxcfS9nbSk7IC8vIFNwZWNpZnkgdGVtcGxhdGUgZGV0ZWN0aW9uIHJlZ2V4IGZvciBTQUZFX0ZPUl9URU1QTEFURVMgbW9kZVxuXG4gIHZhciBFUkJfRVhQUiA9IHNlYWwoLzwlW1xcd1xcV10qfFtcXHdcXFddKiU+L2dtKTtcbiAgdmFyIFRNUExJVF9FWFBSID0gc2VhbCgvXFwke1tcXHdcXFddKn0vZ20pO1xuICB2YXIgREFUQV9BVFRSID0gc2VhbCgvXmRhdGEtW1xcLVxcdy5cXHUwMEI3LVxcdUZGRkZdLyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcblxuICB2YXIgQVJJQV9BVFRSID0gc2VhbCgvXmFyaWEtW1xcLVxcd10rJC8pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG5cbiAgdmFyIElTX0FMTE9XRURfVVJJID0gc2VhbCgvXig/Oig/Oig/OmZ8aHQpdHBzP3xtYWlsdG98dGVsfGNhbGx0b3xjaWR8eG1wcCk6fFteYS16XXxbYS16Ky5cXC1dKyg/OlteYS16Ky5cXC06XXwkKSkvaSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICk7XG4gIHZhciBJU19TQ1JJUFRfT1JfREFUQSA9IHNlYWwoL14oPzpcXHcrc2NyaXB0fGRhdGEpOi9pKTtcbiAgdmFyIEFUVFJfV0hJVEVTUEFDRSA9IHNlYWwoL1tcXHUwMDAwLVxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMjlcXHUyMDVGXFx1MzAwMF0vZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbiAgKTtcbiAgdmFyIERPQ1RZUEVfTkFNRSA9IHNlYWwoL15odG1sJC9pKTtcblxuICB2YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3c7XG4gIH07XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbm8tb3AgcG9saWN5IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICogRG9uJ3QgZXhwb3J0IHRoaXMgZnVuY3Rpb24gb3V0c2lkZSB0aGlzIG1vZHVsZSFcbiAgICogQHBhcmFtIHs/VHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fSB0cnVzdGVkVHlwZXMgVGhlIHBvbGljeSBmYWN0b3J5LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0ICh0byBkZXRlcm1pbmUgcG9saWN5IG5hbWUgc3VmZml4KVxuICAgKiBAcmV0dXJuIHs/VHJ1c3RlZFR5cGVQb2xpY3l9IFRoZSBwb2xpY3kgY3JlYXRlZCAob3IgbnVsbCwgaWYgVHJ1c3RlZCBUeXBlc1xuICAgKiBhcmUgbm90IHN1cHBvcnRlZCkuXG4gICAqL1xuXG5cbiAgdmFyIF9jcmVhdGVUcnVzdGVkVHlwZXNQb2xpY3kgPSBmdW5jdGlvbiBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgZG9jdW1lbnQpIHtcbiAgICBpZiAoX3R5cGVvZih0cnVzdGVkVHlwZXMpICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvLyBBbGxvdyB0aGUgY2FsbGVycyB0byBjb250cm9sIHRoZSB1bmlxdWUgcG9saWN5IG5hbWVcbiAgICAvLyBieSBhZGRpbmcgYSBkYXRhLXR0LXBvbGljeS1zdWZmaXggdG8gdGhlIHNjcmlwdCBlbGVtZW50IHdpdGggdGhlIERPTVB1cmlmeS5cbiAgICAvLyBQb2xpY3kgY3JlYXRpb24gd2l0aCBkdXBsaWNhdGUgbmFtZXMgdGhyb3dzIGluIFRydXN0ZWQgVHlwZXMuXG5cblxuICAgIHZhciBzdWZmaXggPSBudWxsO1xuICAgIHZhciBBVFRSX05BTUUgPSAnZGF0YS10dC1wb2xpY3ktc3VmZml4JztcblxuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuaGFzQXR0cmlidXRlKEFUVFJfTkFNRSkpIHtcbiAgICAgIHN1ZmZpeCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKEFUVFJfTkFNRSk7XG4gICAgfVxuXG4gICAgdmFyIHBvbGljeU5hbWUgPSAnZG9tcHVyaWZ5JyArIChzdWZmaXggPyAnIycgKyBzdWZmaXggOiAnJyk7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKGh0bWwpIHtcbiAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlU2NyaXB0VVJMOiBmdW5jdGlvbiBjcmVhdGVTY3JpcHRVUkwoc2NyaXB0VXJsKSB7XG4gICAgICAgICAgcmV0dXJuIHNjcmlwdFVybDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgLy8gUG9saWN5IGNyZWF0aW9uIGZhaWxlZCAobW9zdCBsaWtlbHkgYW5vdGhlciBET01QdXJpZnkgc2NyaXB0IGhhc1xuICAgICAgLy8gYWxyZWFkeSBydW4pLiBTa2lwIGNyZWF0aW5nIHRoZSBwb2xpY3ksIGFzIHRoaXMgd2lsbCBvbmx5IGNhdXNlIGVycm9yc1xuICAgICAgLy8gaWYgVFQgYXJlIGVuZm9yY2VkLlxuICAgICAgY29uc29sZS53YXJuKCdUcnVzdGVkVHlwZXMgcG9saWN5ICcgKyBwb2xpY3lOYW1lICsgJyBjb3VsZCBub3QgYmUgY3JlYXRlZC4nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVET01QdXJpZnkoKSB7XG4gICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0R2xvYmFsKCk7XG5cbiAgICB2YXIgRE9NUHVyaWZ5ID0gZnVuY3Rpb24gRE9NUHVyaWZ5KHJvb3QpIHtcbiAgICAgIHJldHVybiBjcmVhdGVET01QdXJpZnkocm9vdCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIGxhYmVsLCBleHBvc2VkIGZvciBlYXNpZXIgY2hlY2tzXG4gICAgICogaWYgRE9NUHVyaWZ5IGlzIHVwIHRvIGRhdGUgb3Igbm90XG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS52ZXJzaW9uID0gJzIuNC43JztcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBlbGVtZW50cyB0aGF0IERPTVB1cmlmeSByZW1vdmVkIGR1cmluZyBzYW5pdGF0aW9uLlxuICAgICAqIEVtcHR5IGlmIG5vdGhpbmcgd2FzIHJlbW92ZWQuXG4gICAgICovXG5cbiAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuXG4gICAgaWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5kb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQubm9kZVR5cGUgIT09IDkpIHtcbiAgICAgIC8vIE5vdCBydW5uaW5nIGluIGEgYnJvd3NlciwgcHJvdmlkZSBhIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgIC8vIHNvIHRoYXQgeW91IGNhbiBwYXNzIHlvdXIgb3duIFdpbmRvd1xuICAgICAgRE9NUHVyaWZ5LmlzU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICAgIH1cblxuICAgIHZhciBvcmlnaW5hbERvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbiAgICB2YXIgRG9jdW1lbnRGcmFnbWVudCA9IHdpbmRvdy5Eb2N1bWVudEZyYWdtZW50LFxuICAgICAgICBIVE1MVGVtcGxhdGVFbGVtZW50ID0gd2luZG93LkhUTUxUZW1wbGF0ZUVsZW1lbnQsXG4gICAgICAgIE5vZGUgPSB3aW5kb3cuTm9kZSxcbiAgICAgICAgRWxlbWVudCA9IHdpbmRvdy5FbGVtZW50LFxuICAgICAgICBOb2RlRmlsdGVyID0gd2luZG93Lk5vZGVGaWx0ZXIsXG4gICAgICAgIF93aW5kb3ckTmFtZWROb2RlTWFwID0gd2luZG93Lk5hbWVkTm9kZU1hcCxcbiAgICAgICAgTmFtZWROb2RlTWFwID0gX3dpbmRvdyROYW1lZE5vZGVNYXAgPT09IHZvaWQgMCA/IHdpbmRvdy5OYW1lZE5vZGVNYXAgfHwgd2luZG93Lk1vek5hbWVkQXR0ck1hcCA6IF93aW5kb3ckTmFtZWROb2RlTWFwLFxuICAgICAgICBIVE1MRm9ybUVsZW1lbnQgPSB3aW5kb3cuSFRNTEZvcm1FbGVtZW50LFxuICAgICAgICBET01QYXJzZXIgPSB3aW5kb3cuRE9NUGFyc2VyLFxuICAgICAgICB0cnVzdGVkVHlwZXMgPSB3aW5kb3cudHJ1c3RlZFR5cGVzO1xuICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gRWxlbWVudC5wcm90b3R5cGU7XG4gICAgdmFyIGNsb25lTm9kZSA9IGxvb2t1cEdldHRlcihFbGVtZW50UHJvdG90eXBlLCAnY2xvbmVOb2RlJyk7XG4gICAgdmFyIGdldE5leHRTaWJsaW5nID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICduZXh0U2libGluZycpO1xuICAgIHZhciBnZXRDaGlsZE5vZGVzID0gbG9va3VwR2V0dGVyKEVsZW1lbnRQcm90b3R5cGUsICdjaGlsZE5vZGVzJyk7XG4gICAgdmFyIGdldFBhcmVudE5vZGUgPSBsb29rdXBHZXR0ZXIoRWxlbWVudFByb3RvdHlwZSwgJ3BhcmVudE5vZGUnKTsgLy8gQXMgcGVyIGlzc3VlICM0NywgdGhlIHdlYi1jb21wb25lbnRzIHJlZ2lzdHJ5IGlzIGluaGVyaXRlZCBieSBhXG4gICAgLy8gbmV3IGRvY3VtZW50IGNyZWF0ZWQgdmlhIGNyZWF0ZUhUTUxEb2N1bWVudC4gQXMgcGVyIHRoZSBzcGVjXG4gICAgLy8gKGh0dHA6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2NyZWF0aW5nLWFuZC1wYXNzaW5nLXJlZ2lzdHJpZXMpXG4gICAgLy8gYSBuZXcgZW1wdHkgcmVnaXN0cnkgaXMgdXNlZCB3aGVuIGNyZWF0aW5nIGEgdGVtcGxhdGUgY29udGVudHMgb3duZXJcbiAgICAvLyBkb2N1bWVudCwgc28gd2UgdXNlIHRoYXQgYXMgb3VyIHBhcmVudCBkb2N1bWVudCB0byBlbnN1cmUgbm90aGluZ1xuICAgIC8vIGlzIGluaGVyaXRlZC5cblxuICAgIGlmICh0eXBlb2YgSFRNTFRlbXBsYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgICAgaWYgKHRlbXBsYXRlLmNvbnRlbnQgJiYgdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgIGRvY3VtZW50ID0gdGVtcGxhdGUuY29udGVudC5vd25lckRvY3VtZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cnVzdGVkVHlwZXNQb2xpY3kgPSBfY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHRydXN0ZWRUeXBlcywgb3JpZ2luYWxEb2N1bWVudCk7XG5cbiAgICB2YXIgZW1wdHlIVE1MID0gdHJ1c3RlZFR5cGVzUG9saWN5ID8gdHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoJycpIDogJyc7XG4gICAgdmFyIF9kb2N1bWVudCA9IGRvY3VtZW50LFxuICAgICAgICBpbXBsZW1lbnRhdGlvbiA9IF9kb2N1bWVudC5pbXBsZW1lbnRhdGlvbixcbiAgICAgICAgY3JlYXRlTm9kZUl0ZXJhdG9yID0gX2RvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcixcbiAgICAgICAgY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9IF9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICBnZXRFbGVtZW50c0J5VGFnTmFtZSA9IF9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZTtcbiAgICB2YXIgaW1wb3J0Tm9kZSA9IG9yaWdpbmFsRG9jdW1lbnQuaW1wb3J0Tm9kZTtcbiAgICB2YXIgZG9jdW1lbnRNb2RlID0ge307XG5cbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnRNb2RlID0gY2xvbmUoZG9jdW1lbnQpLmRvY3VtZW50TW9kZSA/IGRvY3VtZW50LmRvY3VtZW50TW9kZSA6IHt9O1xuICAgIH0gY2F0Y2ggKF8pIHt9XG5cbiAgICB2YXIgaG9va3MgPSB7fTtcbiAgICAvKipcbiAgICAgKiBFeHBvc2Ugd2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgcnVubmluZyB0aGUgZnVsbCBET01QdXJpZnkuXG4gICAgICovXG5cbiAgICBET01QdXJpZnkuaXNTdXBwb3J0ZWQgPSB0eXBlb2YgZ2V0UGFyZW50Tm9kZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpbXBsZW1lbnRhdGlvbiAmJiBpbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJiBkb2N1bWVudE1vZGUgIT09IDk7XG4gICAgdmFyIE1VU1RBQ0hFX0VYUFIkMSA9IE1VU1RBQ0hFX0VYUFIsXG4gICAgICAgIEVSQl9FWFBSJDEgPSBFUkJfRVhQUixcbiAgICAgICAgVE1QTElUX0VYUFIkMSA9IFRNUExJVF9FWFBSLFxuICAgICAgICBEQVRBX0FUVFIkMSA9IERBVEFfQVRUUixcbiAgICAgICAgQVJJQV9BVFRSJDEgPSBBUklBX0FUVFIsXG4gICAgICAgIElTX1NDUklQVF9PUl9EQVRBJDEgPSBJU19TQ1JJUFRfT1JfREFUQSxcbiAgICAgICAgQVRUUl9XSElURVNQQUNFJDEgPSBBVFRSX1dISVRFU1BBQ0U7XG4gICAgdmFyIElTX0FMTE9XRURfVVJJJDEgPSBJU19BTExPV0VEX1VSSTtcbiAgICAvKipcbiAgICAgKiBXZSBjb25zaWRlciB0aGUgZWxlbWVudHMgYW5kIGF0dHJpYnV0ZXMgYmVsb3cgdG8gYmUgc2FmZS4gSWRlYWxseVxuICAgICAqIGRvbid0IGFkZCBhbnkgbmV3IG9uZXMgYnV0IGZlZWwgZnJlZSB0byByZW1vdmUgdW53YW50ZWQgb25lcy5cbiAgICAgKi9cblxuICAgIC8qIGFsbG93ZWQgZWxlbWVudCBuYW1lcyAqL1xuXG4gICAgdmFyIEFMTE9XRURfVEFHUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoaHRtbCQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2ZyQxKSwgX3RvQ29uc3VtYWJsZUFycmF5KHN2Z0ZpbHRlcnMpLCBfdG9Db25zdW1hYmxlQXJyYXkobWF0aE1sJDEpLCBfdG9Db25zdW1hYmxlQXJyYXkodGV4dCkpKTtcbiAgICAvKiBBbGxvd2VkIGF0dHJpYnV0ZSBuYW1lcyAqL1xuXG4gICAgdmFyIEFMTE9XRURfQVRUUiA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfQUxMT1dFRF9BVFRSID0gYWRkVG9TZXQoe30sIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoaHRtbCksIF90b0NvbnN1bWFibGVBcnJheShzdmcpLCBfdG9Db25zdW1hYmxlQXJyYXkobWF0aE1sKSwgX3RvQ29uc3VtYWJsZUFycmF5KHhtbCkpKTtcbiAgICAvKlxuICAgICAqIENvbmZpZ3VyZSBob3cgRE9NUFVyaWZ5IHNob3VsZCBoYW5kbGUgY3VzdG9tIGVsZW1lbnRzIGFuZCB0aGVpciBhdHRyaWJ1dGVzIGFzIHdlbGwgYXMgY3VzdG9taXplZCBidWlsdC1pbiBlbGVtZW50cy5cbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSB0YWdOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGN1c3RvbSBlbGVtZW50cylcbiAgICAgKiBAcHJvcGVydHkge1JlZ0V4cHxGdW5jdGlvbnxudWxsfSBhdHRyaWJ1dGVOYW1lQ2hlY2sgb25lIG9mIFtudWxsLCByZWdleFBhdHRlcm4sIHByZWRpY2F0ZV0uIERlZmF1bHQ6IGBudWxsYCAoZGlzYWxsb3cgYW55IGF0dHJpYnV0ZXMgbm90IG9uIHRoZSBhbGxvdyBsaXN0KVxuICAgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzIGFsbG93IGN1c3RvbSBlbGVtZW50cyBkZXJpdmVkIGZyb20gYnVpbHQtaW5zIGlmIHRoZXkgcGFzcyBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2suIERlZmF1bHQ6IGBmYWxzZWAuXG4gICAgICovXG5cbiAgICB2YXIgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgPSBPYmplY3Quc2VhbChPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICAgIHRhZ05hbWVDaGVjazoge1xuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVOYW1lQ2hlY2s6IHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuICAgICAgYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzOiB7XG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH1cbiAgICB9KSk7XG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gdGFncyAob3ZlcnJpZGVzIEFMTE9XRURfVEFHUy9BRERfVEFHUykgKi9cblxuICAgIHZhciBGT1JCSURfVEFHUyA9IG51bGw7XG4gICAgLyogRXhwbGljaXRseSBmb3JiaWRkZW4gYXR0cmlidXRlcyAob3ZlcnJpZGVzIEFMTE9XRURfQVRUUi9BRERfQVRUUikgKi9cblxuICAgIHZhciBGT1JCSURfQVRUUiA9IG51bGw7XG4gICAgLyogRGVjaWRlIGlmIEFSSUEgYXR0cmlidXRlcyBhcmUgb2theSAqL1xuXG4gICAgdmFyIEFMTE9XX0FSSUFfQVRUUiA9IHRydWU7XG4gICAgLyogRGVjaWRlIGlmIGN1c3RvbSBkYXRhIGF0dHJpYnV0ZXMgYXJlIG9rYXkgKi9cblxuICAgIHZhciBBTExPV19EQVRBX0FUVFIgPSB0cnVlO1xuICAgIC8qIERlY2lkZSBpZiB1bmtub3duIHByb3RvY29scyBhcmUgb2theSAqL1xuXG4gICAgdmFyIEFMTE9XX1VOS05PV05fUFJPVE9DT0xTID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIHNlbGYtY2xvc2luZyB0YWdzIGluIGF0dHJpYnV0ZXMgYXJlIGFsbG93ZWQuXG4gICAgICogVXN1YWxseSByZW1vdmVkIGR1ZSB0byBhIG1YU1MgaXNzdWUgaW4galF1ZXJ5IDMuMCAqL1xuXG4gICAgdmFyIEFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiA9IHRydWU7XG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBzYWZlIGZvciBjb21tb24gdGVtcGxhdGUgZW5naW5lcy5cbiAgICAgKiBUaGlzIG1lYW5zLCBET01QdXJpZnkgcmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMsIG11c3RhY2hlcyBhbmQgRVJCXG4gICAgICovXG5cbiAgICB2YXIgU0FGRV9GT1JfVEVNUExBVEVTID0gZmFsc2U7XG4gICAgLyogRGVjaWRlIGlmIGRvY3VtZW50IHdpdGggPGh0bWw+Li4uIHNob3VsZCBiZSByZXR1cm5lZCAqL1xuXG4gICAgdmFyIFdIT0xFX0RPQ1VNRU5UID0gZmFsc2U7XG4gICAgLyogVHJhY2sgd2hldGhlciBjb25maWcgaXMgYWxyZWFkeSBzZXQgb24gdGhpcyBpbnN0YW5jZSBvZiBET01QdXJpZnkuICovXG5cbiAgICB2YXIgU0VUX0NPTkZJRyA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBhbGwgZWxlbWVudHMgKGUuZy4gc3R5bGUsIHNjcmlwdCkgbXVzdCBiZSBjaGlsZHJlbiBvZlxuICAgICAqIGRvY3VtZW50LmJvZHkuIEJ5IGRlZmF1bHQsIGJyb3dzZXJzIG1pZ2h0IG1vdmUgdGhlbSB0byBkb2N1bWVudC5oZWFkICovXG5cbiAgICB2YXIgRk9SQ0VfQk9EWSA9IGZhbHNlO1xuICAgIC8qIERlY2lkZSBpZiBhIERPTSBgSFRNTEJvZHlFbGVtZW50YCBzaG91bGQgYmUgcmV0dXJuZWQsIGluc3RlYWQgb2YgYSBodG1sXG4gICAgICogc3RyaW5nIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpLlxuICAgICAqIElmIGBXSE9MRV9ET0NVTUVOVGAgaXMgZW5hYmxlZCBhIGBIVE1MSHRtbEVsZW1lbnRgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZFxuICAgICAqL1xuXG4gICAgdmFyIFJFVFVSTl9ET00gPSBmYWxzZTtcbiAgICAvKiBEZWNpZGUgaWYgYSBET00gYERvY3VtZW50RnJhZ21lbnRgIHNob3VsZCBiZSByZXR1cm5lZCwgaW5zdGVhZCBvZiBhIGh0bWxcbiAgICAgKiBzdHJpbmcgIChvciBhIFRydXN0ZWRIVE1MIG9iamVjdCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBzdXBwb3J0ZWQpICovXG5cbiAgICB2YXIgUkVUVVJOX0RPTV9GUkFHTUVOVCA9IGZhbHNlO1xuICAgIC8qIFRyeSB0byByZXR1cm4gYSBUcnVzdGVkIFR5cGUgb2JqZWN0IGluc3RlYWQgb2YgYSBzdHJpbmcsIHJldHVybiBhIHN0cmluZyBpblxuICAgICAqIGNhc2UgVHJ1c3RlZCBUeXBlcyBhcmUgbm90IHN1cHBvcnRlZCAgKi9cblxuICAgIHZhciBSRVRVUk5fVFJVU1RFRF9UWVBFID0gZmFsc2U7XG4gICAgLyogT3V0cHV0IHNob3VsZCBiZSBmcmVlIGZyb20gRE9NIGNsb2JiZXJpbmcgYXR0YWNrcz9cbiAgICAgKiBUaGlzIHNhbml0aXplcyBtYXJrdXBzIG5hbWVkIHdpdGggY29sbGlkaW5nLCBjbG9iYmVyYWJsZSBidWlsdC1pbiBET00gQVBJcy5cbiAgICAgKi9cblxuICAgIHZhciBTQU5JVElaRV9ET00gPSB0cnVlO1xuICAgIC8qIEFjaGlldmUgZnVsbCBET00gQ2xvYmJlcmluZyBwcm90ZWN0aW9uIGJ5IGlzb2xhdGluZyB0aGUgbmFtZXNwYWNlIG9mIG5hbWVkXG4gICAgICogcHJvcGVydGllcyBhbmQgSlMgdmFyaWFibGVzLCBtaXRpZ2F0aW5nIGF0dGFja3MgdGhhdCBhYnVzZSB0aGUgSFRNTC9ET00gc3BlYyBydWxlcy5cbiAgICAgKlxuICAgICAqIEhUTUwvRE9NIHNwZWMgcnVsZXMgdGhhdCBlbmFibGUgRE9NIENsb2JiZXJpbmc6XG4gICAgICogICAtIE5hbWVkIEFjY2VzcyBvbiBXaW5kb3cgKMKnNy4zLjMpXG4gICAgICogICAtIERPTSBUcmVlIEFjY2Vzc29ycyAowqczLjEuNSlcbiAgICAgKiAgIC0gRm9ybSBFbGVtZW50IFBhcmVudC1DaGlsZCBSZWxhdGlvbnMgKMKnNC4xMC4zKVxuICAgICAqICAgLSBJZnJhbWUgc3JjZG9jIC8gTmVzdGVkIFdpbmRvd1Byb3hpZXMgKMKnNC44LjUpXG4gICAgICogICAtIEhUTUxDb2xsZWN0aW9uICjCpzQuMi4xMC4yKVxuICAgICAqXG4gICAgICogTmFtZXNwYWNlIGlzb2xhdGlvbiBpcyBpbXBsZW1lbnRlZCBieSBwcmVmaXhpbmcgYGlkYCBhbmQgYG5hbWVgIGF0dHJpYnV0ZXNcbiAgICAgKiB3aXRoIGEgY29uc3RhbnQgc3RyaW5nLCBpLmUuLCBgdXNlci1jb250ZW50LWBcbiAgICAgKi9cblxuICAgIHZhciBTQU5JVElaRV9OQU1FRF9QUk9QUyA9IGZhbHNlO1xuICAgIHZhciBTQU5JVElaRV9OQU1FRF9QUk9QU19QUkVGSVggPSAndXNlci1jb250ZW50LSc7XG4gICAgLyogS2VlcCBlbGVtZW50IGNvbnRlbnQgd2hlbiByZW1vdmluZyBlbGVtZW50PyAqL1xuXG4gICAgdmFyIEtFRVBfQ09OVEVOVCA9IHRydWU7XG4gICAgLyogSWYgYSBgTm9kZWAgaXMgcGFzc2VkIHRvIHNhbml0aXplKCksIHRoZW4gcGVyZm9ybXMgc2FuaXRpemF0aW9uIGluLXBsYWNlIGluc3RlYWRcbiAgICAgKiBvZiBpbXBvcnRpbmcgaXQgaW50byBhIG5ldyBEb2N1bWVudCBhbmQgcmV0dXJuaW5nIGEgc2FuaXRpemVkIGNvcHkgKi9cblxuICAgIHZhciBJTl9QTEFDRSA9IGZhbHNlO1xuICAgIC8qIEFsbG93IHVzYWdlIG9mIHByb2ZpbGVzIGxpa2UgaHRtbCwgc3ZnIGFuZCBtYXRoTWwgKi9cblxuICAgIHZhciBVU0VfUFJPRklMRVMgPSB7fTtcbiAgICAvKiBUYWdzIHRvIGlnbm9yZSBjb250ZW50IG9mIHdoZW4gS0VFUF9DT05URU5UIGlzIHRydWUgKi9cblxuICAgIHZhciBGT1JCSURfQ09OVEVOVFMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0ZPUkJJRF9DT05URU5UUyA9IGFkZFRvU2V0KHt9LCBbJ2Fubm90YXRpb24teG1sJywgJ2F1ZGlvJywgJ2NvbGdyb3VwJywgJ2Rlc2MnLCAnZm9yZWlnbm9iamVjdCcsICdoZWFkJywgJ2lmcmFtZScsICdtYXRoJywgJ21pJywgJ21uJywgJ21vJywgJ21zJywgJ210ZXh0JywgJ25vZW1iZWQnLCAnbm9mcmFtZXMnLCAnbm9zY3JpcHQnLCAncGxhaW50ZXh0JywgJ3NjcmlwdCcsICdzdHlsZScsICdzdmcnLCAndGVtcGxhdGUnLCAndGhlYWQnLCAndGl0bGUnLCAndmlkZW8nLCAneG1wJ10pO1xuICAgIC8qIFRhZ3MgdGhhdCBhcmUgc2FmZSBmb3IgZGF0YTogVVJJcyAqL1xuXG4gICAgdmFyIERBVEFfVVJJX1RBR1MgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0RBVEFfVVJJX1RBR1MgPSBhZGRUb1NldCh7fSwgWydhdWRpbycsICd2aWRlbycsICdpbWcnLCAnc291cmNlJywgJ2ltYWdlJywgJ3RyYWNrJ10pO1xuICAgIC8qIEF0dHJpYnV0ZXMgc2FmZSBmb3IgdmFsdWVzIGxpa2UgXCJqYXZhc2NyaXB0OlwiICovXG5cbiAgICB2YXIgVVJJX1NBRkVfQVRUUklCVVRFUyA9IG51bGw7XG4gICAgdmFyIERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUyA9IGFkZFRvU2V0KHt9LCBbJ2FsdCcsICdjbGFzcycsICdmb3InLCAnaWQnLCAnbGFiZWwnLCAnbmFtZScsICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3JvbGUnLCAnc3VtbWFyeScsICd0aXRsZScsICd2YWx1ZScsICdzdHlsZScsICd4bWxucyddKTtcbiAgICB2YXIgTUFUSE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbiAgICB2YXIgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgdmFyIEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuICAgIC8qIERvY3VtZW50IG5hbWVzcGFjZSAqL1xuXG4gICAgdmFyIE5BTUVTUEFDRSA9IEhUTUxfTkFNRVNQQUNFO1xuICAgIHZhciBJU19FTVBUWV9JTlBVVCA9IGZhbHNlO1xuICAgIC8qIEFsbG93ZWQgWEhUTUwrWE1MIG5hbWVzcGFjZXMgKi9cblxuICAgIHZhciBBTExPV0VEX05BTUVTUEFDRVMgPSBudWxsO1xuICAgIHZhciBERUZBVUxUX0FMTE9XRURfTkFNRVNQQUNFUyA9IGFkZFRvU2V0KHt9LCBbTUFUSE1MX05BTUVTUEFDRSwgU1ZHX05BTUVTUEFDRSwgSFRNTF9OQU1FU1BBQ0VdLCBzdHJpbmdUb1N0cmluZyk7XG4gICAgLyogUGFyc2luZyBvZiBzdHJpY3QgWEhUTUwgZG9jdW1lbnRzICovXG5cbiAgICB2YXIgUEFSU0VSX01FRElBX1RZUEU7XG4gICAgdmFyIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsICd0ZXh0L2h0bWwnXTtcbiAgICB2YXIgREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA9ICd0ZXh0L2h0bWwnO1xuICAgIHZhciB0cmFuc2Zvcm1DYXNlRnVuYztcbiAgICAvKiBLZWVwIGEgcmVmZXJlbmNlIHRvIGNvbmZpZyB0byBwYXNzIHRvIGhvb2tzICovXG5cbiAgICB2YXIgQ09ORklHID0gbnVsbDtcbiAgICAvKiBJZGVhbGx5LCBkbyBub3QgdG91Y2ggYW55dGhpbmcgYmVsb3cgdGhpcyBsaW5lICovXG5cbiAgICAvKiBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXG5cbiAgICB2YXIgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICB2YXIgaXNSZWdleE9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc1JlZ2V4T3JGdW5jdGlvbih0ZXN0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0ZXN0VmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgfHwgdGVzdFZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfcGFyc2VDb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge09iamVjdH0gY2ZnIG9wdGlvbmFsIGNvbmZpZyBsaXRlcmFsXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG4gICAgdmFyIF9wYXJzZUNvbmZpZyA9IGZ1bmN0aW9uIF9wYXJzZUNvbmZpZyhjZmcpIHtcbiAgICAgIGlmIChDT05GSUcgJiYgQ09ORklHID09PSBjZmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyogU2hpZWxkIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gdGFtcGVyaW5nICovXG5cblxuICAgICAgaWYgKCFjZmcgfHwgX3R5cGVvZihjZmcpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBjZmcgPSB7fTtcbiAgICAgIH1cbiAgICAgIC8qIFNoaWVsZCBjb25maWd1cmF0aW9uIG9iamVjdCBmcm9tIHByb3RvdHlwZSBwb2xsdXRpb24gKi9cblxuXG4gICAgICBjZmcgPSBjbG9uZShjZmcpO1xuICAgICAgUEFSU0VSX01FRElBX1RZUEUgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItaW5jbHVkZXNcbiAgICAgIFNVUFBPUlRFRF9QQVJTRVJfTUVESUFfVFlQRVMuaW5kZXhPZihjZmcuUEFSU0VSX01FRElBX1RZUEUpID09PSAtMSA/IFBBUlNFUl9NRURJQV9UWVBFID0gREVGQVVMVF9QQVJTRVJfTUVESUFfVFlQRSA6IFBBUlNFUl9NRURJQV9UWVBFID0gY2ZnLlBBUlNFUl9NRURJQV9UWVBFOyAvLyBIVE1MIHRhZ3MgYW5kIGF0dHJpYnV0ZXMgYXJlIG5vdCBjYXNlLXNlbnNpdGl2ZSwgY29udmVydGluZyB0byBsb3dlcmNhc2UuIEtlZXBpbmcgWEhUTUwgYXMgaXMuXG5cbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jID0gUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnID8gc3RyaW5nVG9TdHJpbmcgOiBzdHJpbmdUb0xvd2VyQ2FzZTtcbiAgICAgIC8qIFNldCBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cblxuICAgICAgQUxMT1dFRF9UQUdTID0gJ0FMTE9XRURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX1RBR1MsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfQUxMT1dFRF9UQUdTO1xuICAgICAgQUxMT1dFRF9BVFRSID0gJ0FMTE9XRURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKSA6IERFRkFVTFRfQUxMT1dFRF9BVFRSO1xuICAgICAgQUxMT1dFRF9OQU1FU1BBQ0VTID0gJ0FMTE9XRURfTkFNRVNQQUNFUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5BTExPV0VEX05BTUVTUEFDRVMsIHN0cmluZ1RvU3RyaW5nKSA6IERFRkFVTFRfQUxMT1dFRF9OQU1FU1BBQ0VTO1xuICAgICAgVVJJX1NBRkVfQVRUUklCVVRFUyA9ICdBRERfVVJJX1NBRkVfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoY2xvbmUoREVGQVVMVF9VUklfU0FGRV9BVFRSSUJVVEVTKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIGNmZy5BRERfVVJJX1NBRkVfQVRUUiwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbmRlbnRcbiAgICAgIHRyYW5zZm9ybUNhc2VGdW5jIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICApIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICA6IERFRkFVTFRfVVJJX1NBRkVfQVRUUklCVVRFUztcbiAgICAgIERBVEFfVVJJX1RBR1MgPSAnQUREX0RBVEFfVVJJX1RBR1MnIGluIGNmZyA/IGFkZFRvU2V0KGNsb25lKERFRkFVTFRfREFUQV9VUklfVEFHUyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICBjZmcuQUREX0RBVEFfVVJJX1RBR1MsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW5kZW50XG4gICAgICB0cmFuc2Zvcm1DYXNlRnVuYyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGluZGVudFxuICAgICAgOiBERUZBVUxUX0RBVEFfVVJJX1RBR1M7XG4gICAgICBGT1JCSURfQ09OVEVOVFMgPSAnRk9SQklEX0NPTlRFTlRTJyBpbiBjZmcgPyBhZGRUb1NldCh7fSwgY2ZnLkZPUkJJRF9DT05URU5UUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDogREVGQVVMVF9GT1JCSURfQ09OVEVOVFM7XG4gICAgICBGT1JCSURfVEFHUyA9ICdGT1JCSURfVEFHUycgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfVEFHUywgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgICBGT1JCSURfQVRUUiA9ICdGT1JCSURfQVRUUicgaW4gY2ZnID8gYWRkVG9TZXQoe30sIGNmZy5GT1JCSURfQVRUUiwgdHJhbnNmb3JtQ2FzZUZ1bmMpIDoge307XG4gICAgICBVU0VfUFJPRklMRVMgPSAnVVNFX1BST0ZJTEVTJyBpbiBjZmcgPyBjZmcuVVNFX1BST0ZJTEVTIDogZmFsc2U7XG4gICAgICBBTExPV19BUklBX0FUVFIgPSBjZmcuQUxMT1dfQVJJQV9BVFRSICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGNmZy5BTExPV19EQVRBX0FUVFIgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgPSBjZmcuQUxMT1dfVU5LTk9XTl9QUk9UT0NPTFMgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSID0gY2ZnLkFMTE9XX1NFTEZfQ0xPU0VfSU5fQVRUUiAhPT0gZmFsc2U7IC8vIERlZmF1bHQgdHJ1ZVxuXG4gICAgICBTQUZFX0ZPUl9URU1QTEFURVMgPSBjZmcuU0FGRV9GT1JfVEVNUExBVEVTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFdIT0xFX0RPQ1VNRU5UID0gY2ZnLldIT0xFX0RPQ1VNRU5UIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIFJFVFVSTl9ET00gPSBjZmcuUkVUVVJOX0RPTSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBSRVRVUk5fRE9NX0ZSQUdNRU5UID0gY2ZnLlJFVFVSTl9ET01fRlJBR01FTlQgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgUkVUVVJOX1RSVVNURURfVFlQRSA9IGNmZy5SRVRVUk5fVFJVU1RFRF9UWVBFIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEZPUkNFX0JPRFkgPSBjZmcuRk9SQ0VfQk9EWSB8fCBmYWxzZTsgLy8gRGVmYXVsdCBmYWxzZVxuXG4gICAgICBTQU5JVElaRV9ET00gPSBjZmcuU0FOSVRJWkVfRE9NICE9PSBmYWxzZTsgLy8gRGVmYXVsdCB0cnVlXG5cbiAgICAgIFNBTklUSVpFX05BTUVEX1BST1BTID0gY2ZnLlNBTklUSVpFX05BTUVEX1BST1BTIHx8IGZhbHNlOyAvLyBEZWZhdWx0IGZhbHNlXG5cbiAgICAgIEtFRVBfQ09OVEVOVCA9IGNmZy5LRUVQX0NPTlRFTlQgIT09IGZhbHNlOyAvLyBEZWZhdWx0IHRydWVcblxuICAgICAgSU5fUExBQ0UgPSBjZmcuSU5fUExBQ0UgfHwgZmFsc2U7IC8vIERlZmF1bHQgZmFsc2VcblxuICAgICAgSVNfQUxMT1dFRF9VUkkkMSA9IGNmZy5BTExPV0VEX1VSSV9SRUdFWFAgfHwgSVNfQUxMT1dFRF9VUkkkMTtcbiAgICAgIE5BTUVTUEFDRSA9IGNmZy5OQU1FU1BBQ0UgfHwgSFRNTF9OQU1FU1BBQ0U7XG4gICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORyA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyB8fCB7fTtcblxuICAgICAgaWYgKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORyAmJiBpc1JlZ2V4T3JGdW5jdGlvbihjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrKSkge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2ZnLkNVU1RPTV9FTEVNRU5UX0hBTkRMSU5HICYmIGlzUmVnZXhPckZ1bmN0aW9uKGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2spKSB7XG4gICAgICAgIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVjayA9IGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2s7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcgJiYgdHlwZW9mIGNmZy5DVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPT09ICdib29sZWFuJykge1xuICAgICAgICBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgPSBjZmcuQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYWxsb3dDdXN0b21pemVkQnVpbHRJbkVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgIEFMTE9XX0RBVEFfQVRUUiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICBSRVRVUk5fRE9NID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIFBhcnNlIHByb2ZpbGUgaW5mbyAqL1xuXG5cbiAgICAgIGlmIChVU0VfUFJPRklMRVMpIHtcbiAgICAgICAgQUxMT1dFRF9UQUdTID0gYWRkVG9TZXQoe30sIF90b0NvbnN1bWFibGVBcnJheSh0ZXh0KSk7XG4gICAgICAgIEFMTE9XRURfQVRUUiA9IFtdO1xuXG4gICAgICAgIGlmIChVU0VfUFJPRklMRVMuaHRtbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgaHRtbCQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIGh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmcgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIHN2ZyQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2Zyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5zdmdGaWx0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIHN2Zyk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVTRV9QUk9GSUxFUy5tYXRoTWwgPT09IHRydWUpIHtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX1RBR1MsIG1hdGhNbCQxKTtcbiAgICAgICAgICBhZGRUb1NldChBTExPV0VEX0FUVFIsIG1hdGhNbCk7XG4gICAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCB4bWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBNZXJnZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgKi9cblxuXG4gICAgICBpZiAoY2ZnLkFERF9UQUdTKSB7XG4gICAgICAgIGlmIChBTExPV0VEX1RBR1MgPT09IERFRkFVTFRfQUxMT1dFRF9UQUdTKSB7XG4gICAgICAgICAgQUxMT1dFRF9UQUdTID0gY2xvbmUoQUxMT1dFRF9UQUdTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgY2ZnLkFERF9UQUdTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjZmcuQUREX0FUVFIpIHtcbiAgICAgICAgaWYgKEFMTE9XRURfQVRUUiA9PT0gREVGQVVMVF9BTExPV0VEX0FUVFIpIHtcbiAgICAgICAgICBBTExPV0VEX0FUVFIgPSBjbG9uZShBTExPV0VEX0FUVFIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoQUxMT1dFRF9BVFRSLCBjZmcuQUREX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5BRERfVVJJX1NBRkVfQVRUUikge1xuICAgICAgICBhZGRUb1NldChVUklfU0FGRV9BVFRSSUJVVEVTLCBjZmcuQUREX1VSSV9TQUZFX0FUVFIsIHRyYW5zZm9ybUNhc2VGdW5jKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNmZy5GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgaWYgKEZPUkJJRF9DT05URU5UUyA9PT0gREVGQVVMVF9GT1JCSURfQ09OVEVOVFMpIHtcbiAgICAgICAgICBGT1JCSURfQ09OVEVOVFMgPSBjbG9uZShGT1JCSURfQ09OVEVOVFMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9TZXQoRk9SQklEX0NPTlRFTlRTLCBjZmcuRk9SQklEX0NPTlRFTlRTLCB0cmFuc2Zvcm1DYXNlRnVuYyk7XG4gICAgICB9XG4gICAgICAvKiBBZGQgI3RleHQgaW4gY2FzZSBLRUVQX0NPTlRFTlQgaXMgc2V0IHRvIHRydWUgKi9cblxuXG4gICAgICBpZiAoS0VFUF9DT05URU5UKSB7XG4gICAgICAgIEFMTE9XRURfVEFHU1snI3RleHQnXSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiBBZGQgaHRtbCwgaGVhZCBhbmQgYm9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSBXSE9MRV9ET0NVTUVOVCBpcyB0cnVlICovXG5cblxuICAgICAgaWYgKFdIT0xFX0RPQ1VNRU5UKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWydodG1sJywgJ2hlYWQnLCAnYm9keSddKTtcbiAgICAgIH1cbiAgICAgIC8qIEFkZCB0Ym9keSB0byBBTExPV0VEX1RBR1MgaW4gY2FzZSB0YWJsZXMgYXJlIHBlcm1pdHRlZCwgc2VlICMyODYsICMzNjUgKi9cblxuXG4gICAgICBpZiAoQUxMT1dFRF9UQUdTLnRhYmxlKSB7XG4gICAgICAgIGFkZFRvU2V0KEFMTE9XRURfVEFHUywgWyd0Ym9keSddKTtcbiAgICAgICAgZGVsZXRlIEZPUkJJRF9UQUdTLnRib2R5O1xuICAgICAgfSAvLyBQcmV2ZW50IGZ1cnRoZXIgbWFuaXB1bGF0aW9uIG9mIGNvbmZpZ3VyYXRpb24uXG4gICAgICAvLyBOb3QgYXZhaWxhYmxlIGluIElFOCwgU2FmYXJpIDUsIGV0Yy5cblxuXG4gICAgICBpZiAoZnJlZXplKSB7XG4gICAgICAgIGZyZWV6ZShjZmcpO1xuICAgICAgfVxuXG4gICAgICBDT05GSUcgPSBjZmc7XG4gICAgfTtcblxuICAgIHZhciBNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydtaScsICdtbycsICdtbicsICdtcycsICdtdGV4dCddKTtcbiAgICB2YXIgSFRNTF9JTlRFR1JBVElPTl9QT0lOVFMgPSBhZGRUb1NldCh7fSwgWydmb3JlaWdub2JqZWN0JywgJ2Rlc2MnLCAndGl0bGUnLCAnYW5ub3RhdGlvbi14bWwnXSk7IC8vIENlcnRhaW4gZWxlbWVudHMgYXJlIGFsbG93ZWQgaW4gYm90aCBTVkcgYW5kIEhUTUxcbiAgICAvLyBuYW1lc3BhY2UuIFdlIG5lZWQgdG8gc3BlY2lmeSB0aGVtIGV4cGxpY2l0bHlcbiAgICAvLyBzbyB0aGF0IHRoZXkgZG9uJ3QgZ2V0IGVycm9uZW91c2x5IGRlbGV0ZWQgZnJvbVxuICAgIC8vIEhUTUwgbmFtZXNwYWNlLlxuXG4gICAgdmFyIENPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFMgPSBhZGRUb1NldCh7fSwgWyd0aXRsZScsICdzdHlsZScsICdmb250JywgJ2EnLCAnc2NyaXB0J10pO1xuICAgIC8qIEtlZXAgdHJhY2sgb2YgYWxsIHBvc3NpYmxlIFNWRyBhbmQgTWF0aE1MIHRhZ3NcbiAgICAgKiBzbyB0aGF0IHdlIGNhbiBwZXJmb3JtIHRoZSBuYW1lc3BhY2UgY2hlY2tzXG4gICAgICogY29ycmVjdGx5LiAqL1xuXG4gICAgdmFyIEFMTF9TVkdfVEFHUyA9IGFkZFRvU2V0KHt9LCBzdmckMSk7XG4gICAgYWRkVG9TZXQoQUxMX1NWR19UQUdTLCBzdmdGaWx0ZXJzKTtcbiAgICBhZGRUb1NldChBTExfU1ZHX1RBR1MsIHN2Z0Rpc2FsbG93ZWQpO1xuICAgIHZhciBBTExfTUFUSE1MX1RBR1MgPSBhZGRUb1NldCh7fSwgbWF0aE1sJDEpO1xuICAgIGFkZFRvU2V0KEFMTF9NQVRITUxfVEFHUywgbWF0aE1sRGlzYWxsb3dlZCk7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsZW1lbnQgYSBET00gZWxlbWVudCB3aG9zZSBuYW1lc3BhY2UgaXMgYmVpbmcgY2hlY2tlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm4gZmFsc2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFcbiAgICAgKiAgbmFtZXNwYWNlIHRoYXQgYSBzcGVjLWNvbXBsaWFudCBwYXJzZXIgd291bGQgbmV2ZXJcbiAgICAgKiAgcmV0dXJuLiBSZXR1cm4gdHJ1ZSBvdGhlcndpc2UuXG4gICAgICovXG5cbiAgICB2YXIgX2NoZWNrVmFsaWROYW1lc3BhY2UgPSBmdW5jdGlvbiBfY2hlY2tWYWxpZE5hbWVzcGFjZShlbGVtZW50KSB7XG4gICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTsgLy8gSW4gSlNET00sIGlmIHdlJ3JlIGluc2lkZSBzaGFkb3cgRE9NLCB0aGVuIHBhcmVudE5vZGVcbiAgICAgIC8vIGNhbiBiZSBudWxsLiBXZSBqdXN0IHNpbXVsYXRlIHBhcmVudCBpbiB0aGlzIGNhc2UuXG5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQudGFnTmFtZSkge1xuICAgICAgICBwYXJlbnQgPSB7XG4gICAgICAgICAgbmFtZXNwYWNlVVJJOiBOQU1FU1BBQ0UsXG4gICAgICAgICAgdGFnTmFtZTogJ3RlbXBsYXRlJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XG4gICAgICB2YXIgcGFyZW50VGFnTmFtZSA9IHN0cmluZ1RvTG93ZXJDYXNlKHBhcmVudC50YWdOYW1lKTtcblxuICAgICAgaWYgKCFBTExPV0VEX05BTUVTUEFDRVNbZWxlbWVudC5uYW1lc3BhY2VVUkldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFRoZSBvbmx5IHdheSB0byBzd2l0Y2ggZnJvbSBIVE1MIG5hbWVzcGFjZSB0byBTVkdcbiAgICAgICAgLy8gaXMgdmlhIDxzdmc+LiBJZiBpdCBoYXBwZW5zIHZpYSBhbnkgb3RoZXIgdGFnLCB0aGVuXG4gICAgICAgIC8vIGl0IHNob3VsZCBiZSBraWxsZWQuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAgIHJldHVybiB0YWdOYW1lID09PSAnc3ZnJztcbiAgICAgICAgfSAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gTWF0aE1MIHRvIFNWRyBpcyB2aWFgXG4gICAgICAgIC8vIHN2ZyBpZiBwYXJlbnQgaXMgZWl0aGVyIDxhbm5vdGF0aW9uLXhtbD4gb3IgTWF0aE1MXG4gICAgICAgIC8vIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzLlxuXG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IE1BVEhNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ3N2ZycgJiYgKHBhcmVudFRhZ05hbWUgPT09ICdhbm5vdGF0aW9uLXhtbCcgfHwgTUFUSE1MX1RFWFRfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdKTtcbiAgICAgICAgfSAvLyBXZSBvbmx5IGFsbG93IGVsZW1lbnRzIHRoYXQgYXJlIGRlZmluZWQgaW4gU1ZHXG4gICAgICAgIC8vIHNwZWMuIEFsbCBvdGhlcnMgYXJlIGRpc2FsbG93ZWQgaW4gU1ZHIG5hbWVzcGFjZS5cblxuXG4gICAgICAgIHJldHVybiBCb29sZWFuKEFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0gTUFUSE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gSFRNTCBuYW1lc3BhY2UgdG8gTWF0aE1MXG4gICAgICAgIC8vIGlzIHZpYSA8bWF0aD4uIElmIGl0IGhhcHBlbnMgdmlhIGFueSBvdGhlciB0YWcsIHRoZW5cbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGtpbGxlZC5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuIHRhZ05hbWUgPT09ICdtYXRoJztcbiAgICAgICAgfSAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIE1hdGhNTCBpcyB2aWFcbiAgICAgICAgLy8gPG1hdGg+IGFuZCBIVE1MIGludGVncmF0aW9uIHBvaW50c1xuXG5cbiAgICAgICAgaWYgKHBhcmVudC5uYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0UpIHtcbiAgICAgICAgICByZXR1cm4gdGFnTmFtZSA9PT0gJ21hdGgnICYmIEhUTUxfSU5URUdSQVRJT05fUE9JTlRTW3BhcmVudFRhZ05hbWVdO1xuICAgICAgICB9IC8vIFdlIG9ubHkgYWxsb3cgZWxlbWVudHMgdGhhdCBhcmUgZGVmaW5lZCBpbiBNYXRoTUxcbiAgICAgICAgLy8gc3BlYy4gQWxsIG90aGVycyBhcmUgZGlzYWxsb3dlZCBpbiBNYXRoTUwgbmFtZXNwYWNlLlxuXG5cbiAgICAgICAgcmV0dXJuIEJvb2xlYW4oQUxMX01BVEhNTF9UQUdTW3RhZ05hbWVdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgICAgICAvLyBUaGUgb25seSB3YXkgdG8gc3dpdGNoIGZyb20gU1ZHIHRvIEhUTUwgaXMgdmlhXG4gICAgICAgIC8vIEhUTUwgaW50ZWdyYXRpb24gcG9pbnRzLCBhbmQgZnJvbSBNYXRoTUwgdG8gSFRNTFxuICAgICAgICAvLyBpcyB2aWEgTWF0aE1MIHRleHQgaW50ZWdyYXRpb24gcG9pbnRzXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFICYmICFIVE1MX0lOVEVHUkFUSU9OX1BPSU5UU1twYXJlbnRUYWdOYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnQubmFtZXNwYWNlVVJJID09PSBNQVRITUxfTkFNRVNQQUNFICYmICFNQVRITUxfVEVYVF9JTlRFR1JBVElPTl9QT0lOVFNbcGFyZW50VGFnTmFtZV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gLy8gV2UgZGlzYWxsb3cgdGFncyB0aGF0IGFyZSBzcGVjaWZpYyBmb3IgTWF0aE1MXG4gICAgICAgIC8vIG9yIFNWRyBhbmQgc2hvdWxkIG5ldmVyIGFwcGVhciBpbiBIVE1MIG5hbWVzcGFjZVxuXG5cbiAgICAgICAgcmV0dXJuICFBTExfTUFUSE1MX1RBR1NbdGFnTmFtZV0gJiYgKENPTU1PTl9TVkdfQU5EX0hUTUxfRUxFTUVOVFNbdGFnTmFtZV0gfHwgIUFMTF9TVkdfVEFHU1t0YWdOYW1lXSk7XG4gICAgICB9IC8vIEZvciBYSFRNTCBhbmQgWE1MIGRvY3VtZW50cyB0aGF0IHN1cHBvcnQgY3VzdG9tIG5hbWVzcGFjZXNcblxuXG4gICAgICBpZiAoUEFSU0VSX01FRElBX1RZUEUgPT09ICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnICYmIEFMTE9XRURfTkFNRVNQQUNFU1tlbGVtZW50Lm5hbWVzcGFjZVVSSV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IC8vIFRoZSBjb2RlIHNob3VsZCBuZXZlciByZWFjaCB0aGlzIHBsYWNlICh0aGlzIG1lYW5zXG4gICAgICAvLyB0aGF0IHRoZSBlbGVtZW50IHNvbWVob3cgZ290IG5hbWVzcGFjZSB0aGF0IGlzIG5vdFxuICAgICAgLy8gSFRNTCwgU1ZHLCBNYXRoTUwgb3IgYWxsb3dlZCB2aWEgQUxMT1dFRF9OQU1FU1BBQ0VTKS5cbiAgICAgIC8vIFJldHVybiBmYWxzZSBqdXN0IGluIGNhc2UuXG5cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2ZvcmNlUmVtb3ZlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtOb2RlfSBub2RlIGEgRE9NIG5vZGVcbiAgICAgKi9cblxuXG4gICAgdmFyIF9mb3JjZVJlbW92ZSA9IGZ1bmN0aW9uIF9mb3JjZVJlbW92ZShub2RlKSB7XG4gICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgZWxlbWVudDogbm9kZVxuICAgICAgfSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1yZW1vdmVcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG5vZGUub3V0ZXJIVE1MID0gZW1wdHlIVE1MO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogX3JlbW92ZUF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIGFuIEF0dHJpYnV0ZSBuYW1lXG4gICAgICogQHBhcmFtICB7Tm9kZX0gbm9kZSBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfcmVtb3ZlQXR0cmlidXRlID0gZnVuY3Rpb24gX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBub2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG5vZGUuZ2V0QXR0cmlidXRlTm9kZShuYW1lKSxcbiAgICAgICAgICBmcm9tOiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBhcnJheVB1c2goRE9NUHVyaWZ5LnJlbW92ZWQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGU6IG51bGwsXG4gICAgICAgICAgZnJvbTogbm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IC8vIFdlIHZvaWQgYXR0cmlidXRlIHZhbHVlcyBmb3IgdW5yZW1vdmFibGUgXCJpc1wiXCIgYXR0cmlidXRlc1xuXG4gICAgICBpZiAobmFtZSA9PT0gJ2lzJyAmJiAhQUxMT1dFRF9BVFRSW25hbWVdKSB7XG4gICAgICAgIGlmIChSRVRVUk5fRE9NIHx8IFJFVFVSTl9ET01fRlJBR01FTlQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX2ZvcmNlUmVtb3ZlKG5vZGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsICcnKTtcbiAgICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaW5pdERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtTdHJpbmd9IGRpcnR5IGEgc3RyaW5nIG9mIGRpcnR5IG1hcmt1cFxuICAgICAqIEByZXR1cm4ge0RvY3VtZW50fSBhIERPTSwgZmlsbGVkIHdpdGggdGhlIGRpcnR5IG1hcmt1cFxuICAgICAqL1xuXG5cbiAgICB2YXIgX2luaXREb2N1bWVudCA9IGZ1bmN0aW9uIF9pbml0RG9jdW1lbnQoZGlydHkpIHtcbiAgICAgIC8qIENyZWF0ZSBhIEhUTUwgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBkb2M7XG4gICAgICB2YXIgbGVhZGluZ1doaXRlc3BhY2U7XG5cbiAgICAgIGlmIChGT1JDRV9CT0RZKSB7XG4gICAgICAgIGRpcnR5ID0gJzxyZW1vdmU+PC9yZW1vdmU+JyArIGRpcnR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSWYgRk9SQ0VfQk9EWSBpc24ndCB1c2VkLCBsZWFkaW5nIHdoaXRlc3BhY2UgbmVlZHMgdG8gYmUgcHJlc2VydmVkIG1hbnVhbGx5ICovXG4gICAgICAgIHZhciBtYXRjaGVzID0gc3RyaW5nTWF0Y2goZGlydHksIC9eW1xcclxcblxcdCBdKy8pO1xuICAgICAgICBsZWFkaW5nV2hpdGVzcGFjZSA9IG1hdGNoZXMgJiYgbWF0Y2hlc1swXTtcbiAgICAgIH1cblxuICAgICAgaWYgKFBBUlNFUl9NRURJQV9UWVBFID09PSAnYXBwbGljYXRpb24veGh0bWwreG1sJyAmJiBOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIC8vIFJvb3Qgb2YgWEhUTUwgZG9jIG11c3QgY29udGFpbiB4bWxucyBkZWNsYXJhdGlvbiAoc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94aHRtbDEvbm9ybWF0aXZlLmh0bWwjc3RyaWN0KVxuICAgICAgICBkaXJ0eSA9ICc8aHRtbCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj48aGVhZD48L2hlYWQ+PGJvZHk+JyArIGRpcnR5ICsgJzwvYm9keT48L2h0bWw+JztcbiAgICAgIH1cblxuICAgICAgdmFyIGRpcnR5UGF5bG9hZCA9IHRydXN0ZWRUeXBlc1BvbGljeSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKGRpcnR5KSA6IGRpcnR5O1xuICAgICAgLypcbiAgICAgICAqIFVzZSB0aGUgRE9NUGFyc2VyIEFQSSBieSBkZWZhdWx0LCBmYWxsYmFjayBsYXRlciBpZiBuZWVkcyBiZVxuICAgICAgICogRE9NUGFyc2VyIG5vdCB3b3JrIGZvciBzdmcgd2hlbiBoYXMgbXVsdGlwbGUgcm9vdCBlbGVtZW50LlxuICAgICAgICovXG5cbiAgICAgIGlmIChOQU1FU1BBQ0UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhkaXJ0eVBheWxvYWQsIFBBUlNFUl9NRURJQV9UWVBFKTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgIH1cbiAgICAgIC8qIFVzZSBjcmVhdGVIVE1MRG9jdW1lbnQgaW4gY2FzZSBET01QYXJzZXIgaXMgbm90IGF2YWlsYWJsZSAqL1xuXG5cbiAgICAgIGlmICghZG9jIHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgIGRvYyA9IGltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KE5BTUVTUEFDRSwgJ3RlbXBsYXRlJywgbnVsbCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LmlubmVySFRNTCA9IElTX0VNUFRZX0lOUFVUID8gZW1wdHlIVE1MIDogZGlydHlQYXlsb2FkO1xuICAgICAgICB9IGNhdGNoIChfKSB7Ly8gU3ludGF4IGVycm9yIGlmIGRpcnR5UGF5bG9hZCBpcyBpbnZhbGlkIHhtbFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBib2R5ID0gZG9jLmJvZHkgfHwgZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgaWYgKGRpcnR5ICYmIGxlYWRpbmdXaGl0ZXNwYWNlKSB7XG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxlYWRpbmdXaGl0ZXNwYWNlKSwgYm9keS5jaGlsZE5vZGVzWzBdIHx8IG51bGwpO1xuICAgICAgfVxuICAgICAgLyogV29yayBvbiB3aG9sZSBkb2N1bWVudCBvciBqdXN0IGl0cyBib2R5ICovXG5cblxuICAgICAgaWYgKE5BTUVTUEFDRSA9PT0gSFRNTF9OQU1FU1BBQ0UpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRzQnlUYWdOYW1lLmNhbGwoZG9jLCBXSE9MRV9ET0NVTUVOVCA/ICdodG1sJyA6ICdib2R5JylbMF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBXSE9MRV9ET0NVTUVOVCA/IGRvYy5kb2N1bWVudEVsZW1lbnQgOiBib2R5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2NyZWF0ZUl0ZXJhdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gcm9vdCBkb2N1bWVudC9mcmFnbWVudCB0byBjcmVhdGUgaXRlcmF0b3IgZm9yXG4gICAgICogQHJldHVybiB7SXRlcmF0b3J9IGl0ZXJhdG9yIGluc3RhbmNlXG4gICAgICovXG5cblxuICAgIHZhciBfY3JlYXRlSXRlcmF0b3IgPSBmdW5jdGlvbiBfY3JlYXRlSXRlcmF0b3Iocm9vdCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZU5vZGVJdGVyYXRvci5jYWxsKHJvb3Qub3duZXJEb2N1bWVudCB8fCByb290LCByb290LCAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQgfCBOb2RlRmlsdGVyLlNIT1dfQ09NTUVOVCB8IE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaXNDbG9iYmVyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGVsbSBlbGVtZW50IHRvIGNoZWNrIGZvciBjbG9iYmVyaW5nIGF0dGFja3NcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGNsb2JiZXJlZCwgZmFsc2UgaWYgc2FmZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX2lzQ2xvYmJlcmVkID0gZnVuY3Rpb24gX2lzQ2xvYmJlcmVkKGVsbSkge1xuICAgICAgcmV0dXJuIGVsbSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCAmJiAodHlwZW9mIGVsbS5ub2RlTmFtZSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS50ZXh0Q29udGVudCAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5yZW1vdmVDaGlsZCAhPT0gJ2Z1bmN0aW9uJyB8fCAhKGVsbS5hdHRyaWJ1dGVzIGluc3RhbmNlb2YgTmFtZWROb2RlTWFwKSB8fCB0eXBlb2YgZWxtLnJlbW92ZUF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLnNldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZWxtLm5hbWVzcGFjZVVSSSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGVsbS5pbnNlcnRCZWZvcmUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVsbS5oYXNDaGlsZE5vZGVzICE9PSAnZnVuY3Rpb24nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9pc05vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IG9iaiBvYmplY3QgdG8gY2hlY2sgd2hldGhlciBpdCdzIGEgRE9NIG5vZGVcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlzIG9iamVjdCBpcyBhIERPTSBub2RlXG4gICAgICovXG5cblxuICAgIHZhciBfaXNOb2RlID0gZnVuY3Rpb24gX2lzTm9kZShvYmplY3QpIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKE5vZGUpID09PSAnb2JqZWN0JyA/IG9iamVjdCBpbnN0YW5jZW9mIE5vZGUgOiBvYmplY3QgJiYgX3R5cGVvZihvYmplY3QpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVUeXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygb2JqZWN0Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9leGVjdXRlSG9va1xuICAgICAqIEV4ZWN1dGUgdXNlciBjb25maWd1cmFibGUgaG9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCAgTmFtZSBvZiB0aGUgaG9vaydzIGVudHJ5IHBvaW50XG4gICAgICogQHBhcmFtICB7Tm9kZX0gY3VycmVudE5vZGUgbm9kZSB0byB3b3JrIG9uIHdpdGggdGhlIGhvb2tcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgYWRkaXRpb25hbCBob29rIHBhcmFtZXRlcnNcbiAgICAgKi9cblxuXG4gICAgdmFyIF9leGVjdXRlSG9vayA9IGZ1bmN0aW9uIF9leGVjdXRlSG9vayhlbnRyeVBvaW50LCBjdXJyZW50Tm9kZSwgZGF0YSkge1xuICAgICAgaWYgKCFob29rc1tlbnRyeVBvaW50XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFycmF5Rm9yRWFjaChob29rc1tlbnRyeVBvaW50XSwgZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgaG9vay5jYWxsKERPTVB1cmlmeSwgY3VycmVudE5vZGUsIGRhdGEsIENPTkZJRyk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIF9zYW5pdGl6ZUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBub2RlTmFtZVxuICAgICAqIEBwcm90ZWN0IHRleHRDb250ZW50XG4gICAgICogQHByb3RlY3QgcmVtb3ZlQ2hpbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtOb2RlfSBjdXJyZW50Tm9kZSB0byBjaGVjayBmb3IgcGVybWlzc2lvbiB0byBleGlzdFxuICAgICAqIEByZXR1cm4gIHtCb29sZWFufSB0cnVlIGlmIG5vZGUgd2FzIGtpbGxlZCwgZmFsc2UgaWYgbGVmdCBhbGl2ZVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Nhbml0aXplRWxlbWVudHMgPSBmdW5jdGlvbiBfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGNvbnRlbnQ7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVFbGVtZW50cycsIGN1cnJlbnROb2RlLCBudWxsKTtcbiAgICAgIC8qIENoZWNrIGlmIGVsZW1lbnQgaXMgY2xvYmJlcmVkIG9yIGNhbiBjbG9iYmVyICovXG5cblxuICAgICAgaWYgKF9pc0Nsb2JiZXJlZChjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIGlmIHRhZ25hbWUgY29udGFpbnMgVW5pY29kZSAqL1xuXG5cbiAgICAgIGlmIChyZWdFeHBUZXN0KC9bXFx1MDA4MC1cXHVGRkZGXS8sIGN1cnJlbnROb2RlLm5vZGVOYW1lKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogTm93IGxldCdzIGNoZWNrIHRoZSBlbGVtZW50J3MgdHlwZSBhbmQgbmFtZSAqL1xuXG5cbiAgICAgIHZhciB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoY3VycmVudE5vZGUubm9kZU5hbWUpO1xuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUVsZW1lbnQnLCBjdXJyZW50Tm9kZSwge1xuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhbGxvd2VkVGFnczogQUxMT1dFRF9UQUdTXG4gICAgICB9KTtcbiAgICAgIC8qIERldGVjdCBtWFNTIGF0dGVtcHRzIGFidXNpbmcgbmFtZXNwYWNlIGNvbmZ1c2lvbiAqL1xuXG5cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5oYXNDaGlsZE5vZGVzKCkgJiYgIV9pc05vZGUoY3VycmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpICYmICghX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50KSB8fCAhX2lzTm9kZShjdXJyZW50Tm9kZS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSkgJiYgcmVnRXhwVGVzdCgvPFsvXFx3XS9nLCBjdXJyZW50Tm9kZS5pbm5lckhUTUwpICYmIHJlZ0V4cFRlc3QoLzxbL1xcd10vZywgY3VycmVudE5vZGUudGV4dENvbnRlbnQpKSB7XG4gICAgICAgIF9mb3JjZVJlbW92ZShjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvKiBNaXRpZ2F0ZSBhIHByb2JsZW0gd2l0aCB0ZW1wbGF0ZXMgaW5zaWRlIHNlbGVjdCAqL1xuXG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0JyAmJiByZWdFeHBUZXN0KC88dGVtcGxhdGUvaSwgY3VycmVudE5vZGUuaW5uZXJIVE1MKSkge1xuICAgICAgICBfZm9yY2VSZW1vdmUoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgLyogUmVtb3ZlIGVsZW1lbnQgaWYgYW55dGhpbmcgZm9yYmlkcyBpdHMgcHJlc2VuY2UgKi9cblxuXG4gICAgICBpZiAoIUFMTE9XRURfVEFHU1t0YWdOYW1lXSB8fCBGT1JCSURfVEFHU1t0YWdOYW1lXSkge1xuICAgICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGEgY3VzdG9tIGVsZW1lbnQgdG8gaGFuZGxlICovXG4gICAgICAgIGlmICghRk9SQklEX1RBR1NbdGFnTmFtZV0gJiYgX2Jhc2ljQ3VzdG9tRWxlbWVudFRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICBpZiAoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrIGluc3RhbmNlb2YgUmVnRXhwICYmIHJlZ0V4cFRlc3QoQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrLCB0YWdOYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGlmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2sodGFnTmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBLZWVwIGNvbnRlbnQgZXhjZXB0IGZvciBiYWQtbGlzdGVkIGVsZW1lbnRzICovXG5cblxuICAgICAgICBpZiAoS0VFUF9DT05URU5UICYmICFGT1JCSURfQ09OVEVOVFNbdGFnTmFtZV0pIHtcbiAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoY3VycmVudE5vZGUpIHx8IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKGN1cnJlbnROb2RlKSB8fCBjdXJyZW50Tm9kZS5jaGlsZE5vZGVzO1xuXG4gICAgICAgICAgaWYgKGNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkQ291bnQgPSBjaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZU5vZGUoY2hpbGROb2Rlc1tpXSwgdHJ1ZSksIGdldE5leHRTaWJsaW5nKGN1cnJlbnROb2RlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIENoZWNrIHdoZXRoZXIgZWxlbWVudCBoYXMgYSB2YWxpZCBuYW1lc3BhY2UgKi9cblxuXG4gICAgICBpZiAoY3VycmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50ICYmICFfY2hlY2tWYWxpZE5hbWVzcGFjZShjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIE1ha2Ugc3VyZSB0aGF0IG9sZGVyIGJyb3dzZXJzIGRvbid0IGdldCBmYWxsYmFjay10YWcgbVhTUyAqL1xuXG5cbiAgICAgIGlmICgodGFnTmFtZSA9PT0gJ25vc2NyaXB0JyB8fCB0YWdOYW1lID09PSAnbm9lbWJlZCcgfHwgdGFnTmFtZSA9PT0gJ25vZnJhbWVzJykgJiYgcmVnRXhwVGVzdCgvPFxcL25vKHNjcmlwdHxlbWJlZHxmcmFtZXMpL2ksIGN1cnJlbnROb2RlLmlubmVySFRNTCkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGN1cnJlbnROb2RlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qIFNhbml0aXplIGVsZW1lbnQgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG5cblxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUyAmJiBjdXJyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAvKiBHZXQgdGhlIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgKi9cbiAgICAgICAgY29udGVudCA9IGN1cnJlbnROb2RlLnRleHRDb250ZW50O1xuICAgICAgICBjb250ZW50ID0gc3RyaW5nUmVwbGFjZShjb250ZW50LCBNVVNUQUNIRV9FWFBSJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIEVSQl9FWFBSJDEsICcgJyk7XG4gICAgICAgIGNvbnRlbnQgPSBzdHJpbmdSZXBsYWNlKGNvbnRlbnQsIFRNUExJVF9FWFBSJDEsICcgJyk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLnRleHRDb250ZW50ICE9PSBjb250ZW50KSB7XG4gICAgICAgICAgYXJyYXlQdXNoKERPTVB1cmlmeS5yZW1vdmVkLCB7XG4gICAgICAgICAgICBlbGVtZW50OiBjdXJyZW50Tm9kZS5jbG9uZU5vZGUoKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnROb2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUVsZW1lbnRzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfaXNWYWxpZEF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBsY1RhZyBMb3dlcmNhc2UgdGFnIG5hbWUgb2YgY29udGFpbmluZyBlbGVtZW50LlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gbGNOYW1lIExvd2VyY2FzZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlIEF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5cblxuICAgIHZhciBfaXNWYWxpZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIF9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSB7XG4gICAgICAvKiBNYWtlIHN1cmUgYXR0cmlidXRlIGNhbm5vdCBjbG9iYmVyICovXG4gICAgICBpZiAoU0FOSVRJWkVfRE9NICYmIChsY05hbWUgPT09ICdpZCcgfHwgbGNOYW1lID09PSAnbmFtZScpICYmICh2YWx1ZSBpbiBkb2N1bWVudCB8fCB2YWx1ZSBpbiBmb3JtRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLyogQWxsb3cgdmFsaWQgZGF0YS0qIGF0dHJpYnV0ZXM6IEF0IGxlYXN0IG9uZSBjaGFyYWN0ZXIgYWZ0ZXIgXCItXCJcbiAgICAgICAgICAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZG9tLmh0bWwjZW1iZWRkaW5nLWN1c3RvbS1ub24tdmlzaWJsZS1kYXRhLXdpdGgtdGhlLWRhdGEtKi1hdHRyaWJ1dGVzKVxuICAgICAgICAgIFhNTC1jb21wYXRpYmxlIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3htbC1jb21wYXRpYmxlIGFuZCBodHRwOi8vd3d3LnczLm9yZy9UUi94bWwvI2QwZTgwNClcbiAgICAgICAgICBXZSBkb24ndCBuZWVkIHRvIGNoZWNrIHRoZSB2YWx1ZTsgaXQncyBhbHdheXMgVVJJIHNhZmUuICovXG5cblxuICAgICAgaWYgKEFMTE9XX0RBVEFfQVRUUiAmJiAhRk9SQklEX0FUVFJbbGNOYW1lXSAmJiByZWdFeHBUZXN0KERBVEFfQVRUUiQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKEFMTE9XX0FSSUFfQVRUUiAmJiByZWdFeHBUZXN0KEFSSUFfQVRUUiQxLCBsY05hbWUpKSA7IGVsc2UgaWYgKCFBTExPV0VEX0FUVFJbbGNOYW1lXSB8fCBGT1JCSURfQVRUUltsY05hbWVdKSB7XG4gICAgICAgIGlmICggLy8gRmlyc3QgY29uZGl0aW9uIGRvZXMgYSB2ZXJ5IGJhc2ljIGNoZWNrIGlmIGEpIGl0J3MgYmFzaWNhbGx5IGEgdmFsaWQgY3VzdG9tIGVsZW1lbnQgdGFnbmFtZSBBTkRcbiAgICAgICAgLy8gYikgaWYgdGhlIHRhZ05hbWUgcGFzc2VzIHdoYXRldmVyIHRoZSB1c2VyIGhhcyBjb25maWd1cmVkIGZvciBDVVNUT01fRUxFTUVOVF9IQU5ETElORy50YWdOYW1lQ2hlY2tcbiAgICAgICAgLy8gYW5kIGMpIGlmIHRoZSBhdHRyaWJ1dGUgbmFtZSBwYXNzZXMgd2hhdGV2ZXIgdGhlIHVzZXIgaGFzIGNvbmZpZ3VyZWQgZm9yIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLmF0dHJpYnV0ZU5hbWVDaGVja1xuICAgICAgICBfYmFzaWNDdXN0b21FbGVtZW50VGVzdChsY1RhZykgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgbGNUYWcpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayhsY1RhZykpICYmIChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2sgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmVnRXhwVGVzdChDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hdHRyaWJ1dGVOYW1lQ2hlY2ssIGxjTmFtZSkgfHwgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gJiYgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcuYXR0cmlidXRlTmFtZUNoZWNrKGxjTmFtZSkpIHx8IC8vIEFsdGVybmF0aXZlLCBzZWNvbmQgY29uZGl0aW9uIGNoZWNrcyBpZiBpdCdzIGFuIGBpc2AtYXR0cmlidXRlLCBBTkRcbiAgICAgICAgLy8gdGhlIHZhbHVlIHBhc3NlcyB3aGF0ZXZlciB0aGUgdXNlciBoYXMgY29uZmlndXJlZCBmb3IgQ1VTVE9NX0VMRU1FTlRfSEFORExJTkcudGFnTmFtZUNoZWNrXG4gICAgICAgIGxjTmFtZSA9PT0gJ2lzJyAmJiBDVVNUT01fRUxFTUVOVF9IQU5ETElORy5hbGxvd0N1c3RvbWl6ZWRCdWlsdEluRWxlbWVudHMgJiYgKENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByZWdFeHBUZXN0KENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjaywgdmFsdWUpIHx8IENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICYmIENVU1RPTV9FTEVNRU5UX0hBTkRMSU5HLnRhZ05hbWVDaGVjayh2YWx1ZSkpKSA7IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVjayB2YWx1ZSBpcyBzYWZlLiBGaXJzdCwgaXMgYXR0ciBpbmVydD8gSWYgc28sIGlzIHNhZmUgKi9cblxuICAgICAgfSBlbHNlIGlmIChVUklfU0FGRV9BVFRSSUJVVEVTW2xjTmFtZV0pIDsgZWxzZSBpZiAocmVnRXhwVGVzdChJU19BTExPV0VEX1VSSSQxLCBzdHJpbmdSZXBsYWNlKHZhbHVlLCBBVFRSX1dISVRFU1BBQ0UkMSwgJycpKSkgOyBlbHNlIGlmICgobGNOYW1lID09PSAnc3JjJyB8fCBsY05hbWUgPT09ICd4bGluazpocmVmJyB8fCBsY05hbWUgPT09ICdocmVmJykgJiYgbGNUYWcgIT09ICdzY3JpcHQnICYmIHN0cmluZ0luZGV4T2YodmFsdWUsICdkYXRhOicpID09PSAwICYmIERBVEFfVVJJX1RBR1NbbGNUYWddKSA7IGVsc2UgaWYgKEFMTE9XX1VOS05PV05fUFJPVE9DT0xTICYmICFyZWdFeHBUZXN0KElTX1NDUklQVF9PUl9EQVRBJDEsIHN0cmluZ1JlcGxhY2UodmFsdWUsIEFUVFJfV0hJVEVTUEFDRSQxLCAnJykpKSA7IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSA7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogX2Jhc2ljQ3VzdG9tRWxlbWVudENoZWNrXG4gICAgICogY2hlY2tzIGlmIGF0IGxlYXN0IG9uZSBkYXNoIGlzIGluY2x1ZGVkIGluIHRhZ05hbWUsIGFuZCBpdCdzIG5vdCB0aGUgZmlyc3QgY2hhclxuICAgICAqIGZvciBtb3JlIHNvcGhpc3RpY2F0ZWQgY2hlY2tpbmcgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvdmFsaWRhdGUtZWxlbWVudC1uYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgbmFtZSBvZiB0aGUgdGFnIG9mIHRoZSBub2RlIHRvIHNhbml0aXplXG4gICAgICovXG5cblxuICAgIHZhciBfYmFzaWNDdXN0b21FbGVtZW50VGVzdCA9IGZ1bmN0aW9uIF9iYXNpY0N1c3RvbUVsZW1lbnRUZXN0KHRhZ05hbWUpIHtcbiAgICAgIHJldHVybiB0YWdOYW1lLmluZGV4T2YoJy0nKSA+IDA7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVBdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdCBhdHRyaWJ1dGVzXG4gICAgICogQHByb3RlY3Qgbm9kZU5hbWVcbiAgICAgKiBAcHJvdGVjdCByZW1vdmVBdHRyaWJ1dGVcbiAgICAgKiBAcHJvdGVjdCBzZXRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge05vZGV9IGN1cnJlbnROb2RlIHRvIHNhbml0aXplXG4gICAgICovXG5cblxuICAgIHZhciBfc2FuaXRpemVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSkge1xuICAgICAgdmFyIGF0dHI7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgbGNOYW1lO1xuICAgICAgdmFyIGw7XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYmVmb3JlU2FuaXRpemVBdHRyaWJ1dGVzJywgY3VycmVudE5vZGUsIG51bGwpO1xuXG4gICAgICB2YXIgYXR0cmlidXRlcyA9IGN1cnJlbnROb2RlLmF0dHJpYnV0ZXM7XG4gICAgICAvKiBDaGVjayBpZiB3ZSBoYXZlIGF0dHJpYnV0ZXM7IGlmIG5vdCB3ZSBtaWdodCBoYXZlIGEgdGV4dCBub2RlICovXG5cbiAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBob29rRXZlbnQgPSB7XG4gICAgICAgIGF0dHJOYW1lOiAnJyxcbiAgICAgICAgYXR0clZhbHVlOiAnJyxcbiAgICAgICAga2VlcEF0dHI6IHRydWUsXG4gICAgICAgIGFsbG93ZWRBdHRyaWJ1dGVzOiBBTExPV0VEX0FUVFJcbiAgICAgIH07XG4gICAgICBsID0gYXR0cmlidXRlcy5sZW5ndGg7XG4gICAgICAvKiBHbyBiYWNrd2FyZHMgb3ZlciBhbGwgYXR0cmlidXRlczsgc2FmZWx5IHJlbW92ZSBiYWQgb25lcyAqL1xuXG4gICAgICB3aGlsZSAobC0tKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyaWJ1dGVzW2xdO1xuICAgICAgICB2YXIgX2F0dHIgPSBhdHRyLFxuICAgICAgICAgICAgbmFtZSA9IF9hdHRyLm5hbWUsXG4gICAgICAgICAgICBuYW1lc3BhY2VVUkkgPSBfYXR0ci5uYW1lc3BhY2VVUkk7XG4gICAgICAgIHZhbHVlID0gbmFtZSA9PT0gJ3ZhbHVlJyA/IGF0dHIudmFsdWUgOiBzdHJpbmdUcmltKGF0dHIudmFsdWUpO1xuICAgICAgICBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhuYW1lKTtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG4gICAgICAgIGhvb2tFdmVudC5hdHRyTmFtZSA9IGxjTmFtZTtcbiAgICAgICAgaG9va0V2ZW50LmF0dHJWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBob29rRXZlbnQua2VlcEF0dHIgPSB0cnVlO1xuICAgICAgICBob29rRXZlbnQuZm9yY2VLZWVwQXR0ciA9IHVuZGVmaW5lZDsgLy8gQWxsb3dzIGRldmVsb3BlcnMgdG8gc2VlIHRoaXMgaXMgYSBwcm9wZXJ0eSB0aGV5IGNhbiBzZXRcblxuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZUF0dHJpYnV0ZScsIGN1cnJlbnROb2RlLCBob29rRXZlbnQpO1xuXG4gICAgICAgIHZhbHVlID0gaG9va0V2ZW50LmF0dHJWYWx1ZTtcbiAgICAgICAgLyogRGlkIHRoZSBob29rcyBhcHByb3ZlIG9mIHRoZSBhdHRyaWJ1dGU/ICovXG5cbiAgICAgICAgaWYgKGhvb2tFdmVudC5mb3JjZUtlZXBBdHRyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogUmVtb3ZlIGF0dHJpYnV0ZSAqL1xuXG5cbiAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgIC8qIERpZCB0aGUgaG9va3MgYXBwcm92ZSBvZiB0aGUgYXR0cmlidXRlPyAqL1xuXG5cbiAgICAgICAgaWYgKCFob29rRXZlbnQua2VlcEF0dHIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBXb3JrIGFyb3VuZCBhIHNlY3VyaXR5IGlzc3VlIGluIGpRdWVyeSAzLjAgKi9cblxuXG4gICAgICAgIGlmICghQUxMT1dfU0VMRl9DTE9TRV9JTl9BVFRSICYmIHJlZ0V4cFRlc3QoL1xcLz4vaSwgdmFsdWUpKSB7XG4gICAgICAgICAgX3JlbW92ZUF0dHJpYnV0ZShuYW1lLCBjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBTYW5pdGl6ZSBhdHRyaWJ1dGUgY29udGVudCB0byBiZSB0ZW1wbGF0ZS1zYWZlICovXG5cblxuICAgICAgICBpZiAoU0FGRV9GT1JfVEVNUExBVEVTKSB7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBNVVNUQUNIRV9FWFBSJDEsICcgJyk7XG4gICAgICAgICAgdmFsdWUgPSBzdHJpbmdSZXBsYWNlKHZhbHVlLCBFUkJfRVhQUiQxLCAnICcpO1xuICAgICAgICAgIHZhbHVlID0gc3RyaW5nUmVwbGFjZSh2YWx1ZSwgVE1QTElUX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICAvKiBJcyBgdmFsdWVgIHZhbGlkIGZvciB0aGlzIGF0dHJpYnV0ZT8gKi9cblxuXG4gICAgICAgIHZhciBsY1RhZyA9IHRyYW5zZm9ybUNhc2VGdW5jKGN1cnJlbnROb2RlLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAoIV9pc1ZhbGlkQXR0cmlidXRlKGxjVGFnLCBsY05hbWUsIHZhbHVlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIEZ1bGwgRE9NIENsb2JiZXJpbmcgcHJvdGVjdGlvbiB2aWEgbmFtZXNwYWNlIGlzb2xhdGlvbixcbiAgICAgICAgICogUHJlZml4IGlkIGFuZCBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgdXNlci1jb250ZW50LWBcbiAgICAgICAgICovXG5cblxuICAgICAgICBpZiAoU0FOSVRJWkVfTkFNRURfUFJPUFMgJiYgKGxjTmFtZSA9PT0gJ2lkJyB8fCBsY05hbWUgPT09ICduYW1lJykpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgdGhlIGF0dHJpYnV0ZSB3aXRoIHRoaXMgdmFsdWVcbiAgICAgICAgICBfcmVtb3ZlQXR0cmlidXRlKG5hbWUsIGN1cnJlbnROb2RlKTsgLy8gUHJlZml4IHRoZSB2YWx1ZSBhbmQgbGF0ZXIgcmUtY3JlYXRlIHRoZSBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FuaXRpemVkIHZhbHVlXG5cblxuICAgICAgICAgIHZhbHVlID0gU0FOSVRJWkVfTkFNRURfUFJPUFNfUFJFRklYICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogSGFuZGxlIGF0dHJpYnV0ZXMgdGhhdCByZXF1aXJlIFRydXN0ZWQgVHlwZXMgKi9cblxuXG4gICAgICAgIGlmICh0cnVzdGVkVHlwZXNQb2xpY3kgJiYgX3R5cGVvZih0cnVzdGVkVHlwZXMpID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdHJ1c3RlZFR5cGVzLmdldEF0dHJpYnV0ZVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAobmFtZXNwYWNlVVJJKSA7IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0cnVzdGVkVHlwZXMuZ2V0QXR0cmlidXRlVHlwZShsY1RhZywgbGNOYW1lKSkge1xuICAgICAgICAgICAgICBjYXNlICdUcnVzdGVkSFRNTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2FzZSAnVHJ1c3RlZFNjcmlwdFVSTCc6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogSGFuZGxlIGludmFsaWQgZGF0YS0qIGF0dHJpYnV0ZSBzZXQgYnkgdHJ5LWNhdGNoaW5nIGl0ICovXG5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChuYW1lc3BhY2VVUkkpIHtcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZVVSSSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvKiBGYWxsYmFjayB0byBzZXRBdHRyaWJ1dGUoKSBmb3IgYnJvd3Nlci11bnJlY29nbml6ZWQgbmFtZXNwYWNlcyBlLmcuIFwieC1zY2hlbWFcIi4gKi9cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyYXlQb3AoRE9NUHVyaWZ5LnJlbW92ZWQpO1xuICAgICAgICB9IGNhdGNoIChfKSB7fVxuICAgICAgfVxuICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuXG5cbiAgICAgIF9leGVjdXRlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBjdXJyZW50Tm9kZSwgbnVsbCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBfc2FuaXRpemVTaGFkb3dET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdtZW50IHRvIGl0ZXJhdGUgb3ZlciByZWN1cnNpdmVseVxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Nhbml0aXplU2hhZG93RE9NID0gZnVuY3Rpb24gX3Nhbml0aXplU2hhZG93RE9NKGZyYWdtZW50KSB7XG4gICAgICB2YXIgc2hhZG93Tm9kZTtcblxuICAgICAgdmFyIHNoYWRvd0l0ZXJhdG9yID0gX2NyZWF0ZUl0ZXJhdG9yKGZyYWdtZW50KTtcbiAgICAgIC8qIEV4ZWN1dGUgYSBob29rIGlmIHByZXNlbnQgKi9cblxuXG4gICAgICBfZXhlY3V0ZUhvb2soJ2JlZm9yZVNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuXG4gICAgICB3aGlsZSAoc2hhZG93Tm9kZSA9IHNoYWRvd0l0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRXhlY3V0ZSBhIGhvb2sgaWYgcHJlc2VudCAqL1xuICAgICAgICBfZXhlY3V0ZUhvb2soJ3Vwb25TYW5pdGl6ZVNoYWRvd05vZGUnLCBzaGFkb3dOb2RlLCBudWxsKTtcbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cblxuXG4gICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhzaGFkb3dOb2RlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIC8qIERlZXAgc2hhZG93IERPTSBkZXRlY3RlZCAqL1xuXG5cbiAgICAgICAgaWYgKHNoYWRvd05vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICBfc2FuaXRpemVTaGFkb3dET00oc2hhZG93Tm9kZS5jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvKiBDaGVjayBhdHRyaWJ1dGVzLCBzYW5pdGl6ZSBpZiBuZWNlc3NhcnkgKi9cblxuXG4gICAgICAgIF9zYW5pdGl6ZUF0dHJpYnV0ZXMoc2hhZG93Tm9kZSk7XG4gICAgICB9XG4gICAgICAvKiBFeGVjdXRlIGEgaG9vayBpZiBwcmVzZW50ICovXG5cblxuICAgICAgX2V4ZWN1dGVIb29rKCdhZnRlclNhbml0aXplU2hhZG93RE9NJywgZnJhZ21lbnQsIG51bGwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2FuaXRpemVcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHByb3ZpZGluZyBjb3JlIHNhbml0YXRpb24gZnVuY3Rpb25hbGl0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gZGlydHkgc3RyaW5nIG9yIERPTSBub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb24gb2JqZWN0XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcblxuXG4gICAgRE9NUHVyaWZ5LnNhbml0aXplID0gZnVuY3Rpb24gKGRpcnR5KSB7XG4gICAgICB2YXIgY2ZnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBib2R5O1xuICAgICAgdmFyIGltcG9ydGVkTm9kZTtcbiAgICAgIHZhciBjdXJyZW50Tm9kZTtcbiAgICAgIHZhciBvbGROb2RlO1xuICAgICAgdmFyIHJldHVybk5vZGU7XG4gICAgICAvKiBNYWtlIHN1cmUgd2UgaGF2ZSBhIHN0cmluZyB0byBzYW5pdGl6ZS5cbiAgICAgICAgRE8gTk9UIHJldHVybiBlYXJseSwgYXMgdGhpcyB3aWxsIHJldHVybiB0aGUgd3JvbmcgdHlwZSBpZlxuICAgICAgICB0aGUgdXNlciBoYXMgcmVxdWVzdGVkIGEgRE9NIG9iamVjdCByYXRoZXIgdGhhbiBhIHN0cmluZyAqL1xuXG4gICAgICBJU19FTVBUWV9JTlBVVCA9ICFkaXJ0eTtcblxuICAgICAgaWYgKElTX0VNUFRZX0lOUFVUKSB7XG4gICAgICAgIGRpcnR5ID0gJzwhLS0+JztcbiAgICAgIH1cbiAgICAgIC8qIFN0cmluZ2lmeSwgaW4gY2FzZSBkaXJ0eSBpcyBhbiBvYmplY3QgKi9cblxuXG4gICAgICBpZiAodHlwZW9mIGRpcnR5ICE9PSAnc3RyaW5nJyAmJiAhX2lzTm9kZShkaXJ0eSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkaXJ0eS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRpcnR5ID0gZGlydHkudG9TdHJpbmcoKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlRXJyb3JDcmVhdGUoJ2RpcnR5IGlzIG5vdCBhIHN0cmluZywgYWJvcnRpbmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgdHlwZUVycm9yQ3JlYXRlKCd0b1N0cmluZyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBDaGVjayB3ZSBjYW4gcnVuLiBPdGhlcndpc2UgZmFsbCBiYWNrIG9yIGlnbm9yZSAqL1xuXG5cbiAgICAgIGlmICghRE9NUHVyaWZ5LmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIGlmIChfdHlwZW9mKHdpbmRvdy50b1N0YXRpY0hUTUwpID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygd2luZG93LnRvU3RhdGljSFRNTCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGlydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9pc05vZGUoZGlydHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnRvU3RhdGljSFRNTChkaXJ0eS5vdXRlckhUTUwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJ0eTtcbiAgICAgIH1cbiAgICAgIC8qIEFzc2lnbiBjb25maWcgdmFycyAqL1xuXG5cbiAgICAgIGlmICghU0VUX0NPTkZJRykge1xuICAgICAgICBfcGFyc2VDb25maWcoY2ZnKTtcbiAgICAgIH1cbiAgICAgIC8qIENsZWFuIHVwIHJlbW92ZWQgZWxlbWVudHMgKi9cblxuXG4gICAgICBET01QdXJpZnkucmVtb3ZlZCA9IFtdO1xuICAgICAgLyogQ2hlY2sgaWYgZGlydHkgaXMgY29ycmVjdGx5IHR5cGVkIGZvciBJTl9QTEFDRSAqL1xuXG4gICAgICBpZiAodHlwZW9mIGRpcnR5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBJTl9QTEFDRSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoSU5fUExBQ0UpIHtcbiAgICAgICAgLyogRG8gc29tZSBlYXJseSBwcmUtc2FuaXRpemF0aW9uIHRvIGF2b2lkIHVuc2FmZSByb290IG5vZGVzICovXG4gICAgICAgIGlmIChkaXJ0eS5ub2RlTmFtZSkge1xuICAgICAgICAgIHZhciB0YWdOYW1lID0gdHJhbnNmb3JtQ2FzZUZ1bmMoZGlydHkubm9kZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFBTExPV0VEX1RBR1NbdGFnTmFtZV0gfHwgRk9SQklEX1RBR1NbdGFnTmFtZV0pIHtcbiAgICAgICAgICAgIHRocm93IHR5cGVFcnJvckNyZWF0ZSgncm9vdCBub2RlIGlzIGZvcmJpZGRlbiBhbmQgY2Fubm90IGJlIHNhbml0aXplZCBpbi1wbGFjZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkaXJ0eSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgLyogSWYgZGlydHkgaXMgYSBET00gZWxlbWVudCwgYXBwZW5kIHRvIGFuIGVtcHR5IGRvY3VtZW50IHRvIGF2b2lkXG4gICAgICAgICAgIGVsZW1lbnRzIGJlaW5nIHN0cmlwcGVkIGJ5IHRoZSBwYXJzZXIgKi9cbiAgICAgICAgYm9keSA9IF9pbml0RG9jdW1lbnQoJzwhLS0tLT4nKTtcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gYm9keS5vd25lckRvY3VtZW50LmltcG9ydE5vZGUoZGlydHksIHRydWUpO1xuXG4gICAgICAgIGlmIChpbXBvcnRlZE5vZGUubm9kZVR5cGUgPT09IDEgJiYgaW1wb3J0ZWROb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICAvKiBOb2RlIGlzIGFscmVhZHkgYSBib2R5LCB1c2UgYXMgaXMgKi9cbiAgICAgICAgICBib2R5ID0gaW1wb3J0ZWROb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgICAgYm9keSA9IGltcG9ydGVkTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItZG9tLW5vZGUtYXBwZW5kXG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChpbXBvcnRlZE5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBFeGl0IGRpcmVjdGx5IGlmIHdlIGhhdmUgbm90aGluZyB0byBkbyAqL1xuICAgICAgICBpZiAoIVJFVFVSTl9ET00gJiYgIVNBRkVfRk9SX1RFTVBMQVRFUyAmJiAhV0hPTEVfRE9DVU1FTlQgJiYgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLWluY2x1ZGVzXG4gICAgICAgIGRpcnR5LmluZGV4T2YoJzwnKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1c3RlZFR5cGVzUG9saWN5ICYmIFJFVFVSTl9UUlVTVEVEX1RZUEUgPyB0cnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChkaXJ0eSkgOiBkaXJ0eTtcbiAgICAgICAgfVxuICAgICAgICAvKiBJbml0aWFsaXplIHRoZSBkb2N1bWVudCB0byB3b3JrIG9uICovXG5cblxuICAgICAgICBib2R5ID0gX2luaXREb2N1bWVudChkaXJ0eSk7XG4gICAgICAgIC8qIENoZWNrIHdlIGhhdmUgYSBET00gbm9kZSBmcm9tIHRoZSBkYXRhICovXG5cbiAgICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgICAgcmV0dXJuIFJFVFVSTl9ET00gPyBudWxsIDogUkVUVVJOX1RSVVNURURfVFlQRSA/IGVtcHR5SFRNTCA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiBSZW1vdmUgZmlyc3QgZWxlbWVudCBub2RlIChvdXJzKSBpZiBGT1JDRV9CT0RZIGlzIHNldCAqL1xuXG5cbiAgICAgIGlmIChib2R5ICYmIEZPUkNFX0JPRFkpIHtcbiAgICAgICAgX2ZvcmNlUmVtb3ZlKGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICAvKiBHZXQgbm9kZSBpdGVyYXRvciAqL1xuXG5cbiAgICAgIHZhciBub2RlSXRlcmF0b3IgPSBfY3JlYXRlSXRlcmF0b3IoSU5fUExBQ0UgPyBkaXJ0eSA6IGJvZHkpO1xuICAgICAgLyogTm93IHN0YXJ0IGl0ZXJhdGluZyBvdmVyIHRoZSBjcmVhdGVkIGRvY3VtZW50ICovXG5cblxuICAgICAgd2hpbGUgKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICAgICAgLyogRml4IElFJ3Mgc3RyYW5nZSBiZWhhdmlvciB3aXRoIG1hbmlwdWxhdGVkIHRleHROb2RlcyAjODkgKi9cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLm5vZGVUeXBlID09PSAzICYmIGN1cnJlbnROb2RlID09PSBvbGROb2RlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLyogU2FuaXRpemUgdGFncyBhbmQgZWxlbWVudHMgKi9cblxuXG4gICAgICAgIGlmIChfc2FuaXRpemVFbGVtZW50cyhjdXJyZW50Tm9kZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiBTaGFkb3cgRE9NIGRldGVjdGVkLCBzYW5pdGl6ZSBpdCAqL1xuXG5cbiAgICAgICAgaWYgKGN1cnJlbnROb2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgX3Nhbml0aXplU2hhZG93RE9NKGN1cnJlbnROb2RlLmNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8qIENoZWNrIGF0dHJpYnV0ZXMsIHNhbml0aXplIGlmIG5lY2Vzc2FyeSAqL1xuXG5cbiAgICAgICAgX3Nhbml0aXplQXR0cmlidXRlcyhjdXJyZW50Tm9kZSk7XG5cbiAgICAgICAgb2xkTm9kZSA9IGN1cnJlbnROb2RlO1xuICAgICAgfVxuXG4gICAgICBvbGROb2RlID0gbnVsbDtcbiAgICAgIC8qIElmIHdlIHNhbml0aXplZCBgZGlydHlgIGluLXBsYWNlLCByZXR1cm4gaXQuICovXG5cbiAgICAgIGlmIChJTl9QTEFDRSkge1xuICAgICAgICByZXR1cm4gZGlydHk7XG4gICAgICB9XG4gICAgICAvKiBSZXR1cm4gc2FuaXRpemVkIHN0cmluZyBvciBET00gKi9cblxuXG4gICAgICBpZiAoUkVUVVJOX0RPTSkge1xuICAgICAgICBpZiAoUkVUVVJOX0RPTV9GUkFHTUVOVCkge1xuICAgICAgICAgIHJldHVybk5vZGUgPSBjcmVhdGVEb2N1bWVudEZyYWdtZW50LmNhbGwoYm9keS5vd25lckRvY3VtZW50KTtcblxuICAgICAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS1hcHBlbmRcbiAgICAgICAgICAgIHJldHVybk5vZGUuYXBwZW5kQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuTm9kZSA9IGJvZHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQUxMT1dFRF9BVFRSLnNoYWRvd3Jvb3QgfHwgQUxMT1dFRF9BVFRSLnNoYWRvd3Jvb3Rtb2QpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgQWRvcHROb2RlKCkgaXMgbm90IHVzZWQgYmVjYXVzZSBpbnRlcm5hbCBzdGF0ZSBpcyBub3QgcmVzZXRcbiAgICAgICAgICAgIChlLmcuIHRoZSBwYXN0IG5hbWVzIG1hcCBvZiBhIEhUTUxGb3JtRWxlbWVudCksIHRoaXMgaXMgc2FmZVxuICAgICAgICAgICAgaW4gdGhlb3J5IGJ1dCB3ZSB3b3VsZCByYXRoZXIgbm90IHJpc2sgYW5vdGhlciBhdHRhY2sgdmVjdG9yLlxuICAgICAgICAgICAgVGhlIHN0YXRlIHRoYXQgaXMgY2xvbmVkIGJ5IGltcG9ydE5vZGUoKSBpcyBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICAgIGJ5IHRoZSBzcGVjcy5cbiAgICAgICAgICAqL1xuICAgICAgICAgIHJldHVybk5vZGUgPSBpbXBvcnROb2RlLmNhbGwob3JpZ2luYWxEb2N1bWVudCwgcmV0dXJuTm9kZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuTm9kZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcmlhbGl6ZWRIVE1MID0gV0hPTEVfRE9DVU1FTlQgPyBib2R5Lm91dGVySFRNTCA6IGJvZHkuaW5uZXJIVE1MO1xuICAgICAgLyogU2VyaWFsaXplIGRvY3R5cGUgaWYgYWxsb3dlZCAqL1xuXG4gICAgICBpZiAoV0hPTEVfRE9DVU1FTlQgJiYgQUxMT1dFRF9UQUdTWychZG9jdHlwZSddICYmIGJvZHkub3duZXJEb2N1bWVudCAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZSAmJiBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lICYmIHJlZ0V4cFRlc3QoRE9DVFlQRV9OQU1FLCBib2R5Lm93bmVyRG9jdW1lbnQuZG9jdHlwZS5uYW1lKSkge1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9ICc8IURPQ1RZUEUgJyArIGJvZHkub3duZXJEb2N1bWVudC5kb2N0eXBlLm5hbWUgKyAnPlxcbicgKyBzZXJpYWxpemVkSFRNTDtcbiAgICAgIH1cbiAgICAgIC8qIFNhbml0aXplIGZpbmFsIHN0cmluZyB0ZW1wbGF0ZS1zYWZlICovXG5cblxuICAgICAgaWYgKFNBRkVfRk9SX1RFTVBMQVRFUykge1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIE1VU1RBQ0hFX0VYUFIkMSwgJyAnKTtcbiAgICAgICAgc2VyaWFsaXplZEhUTUwgPSBzdHJpbmdSZXBsYWNlKHNlcmlhbGl6ZWRIVE1MLCBFUkJfRVhQUiQxLCAnICcpO1xuICAgICAgICBzZXJpYWxpemVkSFRNTCA9IHN0cmluZ1JlcGxhY2Uoc2VyaWFsaXplZEhUTUwsIFRNUExJVF9FWFBSJDEsICcgJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3kgJiYgUkVUVVJOX1RSVVNURURfVFlQRSA/IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVIVE1MKHNlcmlhbGl6ZWRIVE1MKSA6IHNlcmlhbGl6ZWRIVE1MO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byBzZXQgdGhlIGNvbmZpZ3VyYXRpb24gb25jZVxuICAgICAqIHNldENvbmZpZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkuc2V0Q29uZmlnID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgX3BhcnNlQ29uZmlnKGNmZyk7XG5cbiAgICAgIFNFVF9DT05GSUcgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgdGhlIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBjbGVhckNvbmZpZ1xuICAgICAqXG4gICAgICovXG5cblxuICAgIERPTVB1cmlmeS5jbGVhckNvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIENPTkZJRyA9IG51bGw7XG4gICAgICBTRVRfQ09ORklHID0gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbWV0aG9kIHRvIGNoZWNrIGlmIGFuIGF0dHJpYnV0ZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICAgKiBVc2VzIGxhc3Qgc2V0IGNvbmZpZywgaWYgYW55LiBPdGhlcndpc2UsIHVzZXMgY29uZmlnIGRlZmF1bHRzLlxuICAgICAqIGlzVmFsaWRBdHRyaWJ1dGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gdGFnIFRhZyBuYW1lIG9mIGNvbnRhaW5pbmcgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dHIgQXR0cmlidXRlIG5hbWUuXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB2YWx1ZSBBdHRyaWJ1dGUgdmFsdWUuXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIE90aGVyd2lzZSwgcmV0dXJucyBmYWxzZS5cbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LmlzVmFsaWRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAodGFnLCBhdHRyLCB2YWx1ZSkge1xuICAgICAgLyogSW5pdGlhbGl6ZSBzaGFyZWQgY29uZmlnIHZhcnMgaWYgbmVjZXNzYXJ5LiAqL1xuICAgICAgaWYgKCFDT05GSUcpIHtcbiAgICAgICAgX3BhcnNlQ29uZmlnKHt9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxjVGFnID0gdHJhbnNmb3JtQ2FzZUZ1bmModGFnKTtcbiAgICAgIHZhciBsY05hbWUgPSB0cmFuc2Zvcm1DYXNlRnVuYyhhdHRyKTtcbiAgICAgIHJldHVybiBfaXNWYWxpZEF0dHJpYnV0ZShsY1RhZywgbGNOYW1lLCB2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byBhZGQgRE9NUHVyaWZ5IGhvb2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2sgdG8gYWRkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va0Z1bmN0aW9uIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcbiAgICAgKi9cblxuXG4gICAgRE9NUHVyaWZ5LmFkZEhvb2sgPSBmdW5jdGlvbiAoZW50cnlQb2ludCwgaG9va0Z1bmN0aW9uKSB7XG4gICAgICBpZiAodHlwZW9mIGhvb2tGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gaG9va3NbZW50cnlQb2ludF0gfHwgW107XG4gICAgICBhcnJheVB1c2goaG9va3NbZW50cnlQb2ludF0sIGhvb2tGdW5jdGlvbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVIb29rXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYSBET01QdXJpZnkgaG9vayBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKiAocG9wcyBpdCBmcm9tIHRoZSBzdGFjayBvZiBob29rcyBpZiBtb3JlIGFyZSBwcmVzZW50KVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGVudHJ5UG9pbnQgZW50cnkgcG9pbnQgZm9yIHRoZSBob29rIHRvIHJlbW92ZVxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSByZW1vdmVkKHBvcHBlZCkgaG9va1xuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkucmVtb3ZlSG9vayA9IGZ1bmN0aW9uIChlbnRyeVBvaW50KSB7XG4gICAgICBpZiAoaG9va3NbZW50cnlQb2ludF0pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5UG9wKGhvb2tzW2VudHJ5UG9pbnRdKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZUhvb2tzXG4gICAgICogUHVibGljIG1ldGhvZCB0byByZW1vdmUgYWxsIERPTVB1cmlmeSBob29rcyBhdCBhIGdpdmVuIGVudHJ5UG9pbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gZW50cnlQb2ludCBlbnRyeSBwb2ludCBmb3IgdGhlIGhvb2tzIHRvIHJlbW92ZVxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkucmVtb3ZlSG9va3MgPSBmdW5jdGlvbiAoZW50cnlQb2ludCkge1xuICAgICAgaWYgKGhvb2tzW2VudHJ5UG9pbnRdKSB7XG4gICAgICAgIGhvb2tzW2VudHJ5UG9pbnRdID0gW107XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVBbGxIb29rc1xuICAgICAqIFB1YmxpYyBtZXRob2QgdG8gcmVtb3ZlIGFsbCBET01QdXJpZnkgaG9va3NcbiAgICAgKlxuICAgICAqL1xuXG5cbiAgICBET01QdXJpZnkucmVtb3ZlQWxsSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBob29rcyA9IHt9O1xuICAgIH07XG5cbiAgICByZXR1cm4gRE9NUHVyaWZ5O1xuICB9XG5cbiAgdmFyIHB1cmlmeSA9IGNyZWF0ZURPTVB1cmlmeSgpO1xuXG4gIHJldHVybiBwdXJpZnk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1cmlmeS5qcy5tYXBcbiIsImltcG9ydCB7IFByb3BlcnRpZXMgfSBmcm9tICcuL3Byb3BlcnRpZXMnO1xuaW1wb3J0IHsgcmVuZGVyTGF0ZXggfSBmcm9tICcuL2xhdGV4JztcbmltcG9ydCB7IHJlbmRlck1hdGhNTCB9IGZyb20gJy4vbWF0aG1sJztcbmltcG9ydCB7IGJ5cGFzc0VuY2Fwc3VsYXRpb24gfSBmcm9tICcuL3JldHJvJztcblxuLy8gVGhpcyBzaG91bGQgYmUgdGhlIG9ubHkgY29kZSBleGVjdXRlZCBvdXRzaWRlIG9mIGEgZnVuY3Rpb25cbi8vIGFuZCB0aGUgb25seSBjb2RlIGNvbnRhaW5pbmcgYnJvd3NlciBnbG9iYWxzIChlLmcuIHdpbmRvdylcbi8vIFRPRE8gdHJ5IHRvIHNldCB1cCB0aGUgbGludGVyIHRvIGNoZWNrIHRoZXNlIHR3byBjb25zdHJhaW50c1xubWFpbih3aW5kb3cpO1xuXG4vKipcbiAqIEluaXRpYWwgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZGluZyB0aGUgc2NyaXB0LlxuICogQHBhcmFtIHtXaW5kb3d9IHcgLSBUaGUgd2luZG93IGluc3RhbmNlIG9mIHRoZSBicm93c2VyLlxuICovXG5hc3luYyBmdW5jdGlvbiBtYWluKHc6IFdpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuXG4gIGNvbnN0IHByb3BlcnRpZXM6IFByb3BlcnRpZXMgPSBhd2FpdCBQcm9wZXJ0aWVzLmdlbmVyYXRlKCk7XG5cbiAgLy8gRXhwb3NlIHRoZSBnbG9iYWxzIHRvIHRoZSBicm93c2VyXG4gICh3IGFzIGFueSkudmlld2VyID0ge1xuICAgIHByb3BlcnRpZXMsXG4gIH07XG5cbiAgY29uc3QgZG9jdW1lbnQgPSB3LmRvY3VtZW50O1xuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgRE9NIGxvb2tpbmcgZm9yIExhVGVYIGFuZCA8bWF0aD4gZWxlbWVudHMuXG4gICAqIFJlcGxhY2VzIHRoZW0gd2l0aCB0aGUgY29ycmVzcG9uZGluZyByZW5kZXJlZCBpbWFnZXMgd2l0aGluIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0RvY3VtZW50fSBkb2N1bWVudCAtIFRoZSBET00gZG9jdW1lbnQgaW4gd2hpY2ggdG8gc2VhcmNoIGZvciB0aGUgcmVuZGVyaW5nIHJvb3QuXG4gICAqIEBwYXJhbSB7TXV0YXRpb25PYnNlcnZlcn0gb2JzZXJ2ZXIgLSBNdXRhdGlvbiBvYnNlcnZlciB0byBhY3RpdmF0ZSBvciByZWFjdGl2YXRlIGV2ZXJ5IHRpbWUgdGhlIHJlbmRlcmluZyByb290IGNoYW5nZXMuXG4gICAqL1xuICBwcm9wZXJ0aWVzLnJlbmRlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcGVydGllcy5lbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgYXdhaXQgcmVuZGVyTGF0ZXgocHJvcGVydGllcywgZWxlbWVudCk7XG4gICAgICBhd2FpdCByZW5kZXJNYXRoTUwocHJvcGVydGllcywgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEluaXRpYWwgZnVuY3Rpb24gdG8gY2FsbCBvbmNlIGRvY3VtZW50IGlzIGxvYWRlZFxuICAvLyBSZW5kZXJzIGZvcm11bGFzIGFuZCBzZXRzIG9ic2VydmVyXG4gIGNvbnN0IHN0YXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIEZpcnN0IHJlbmRlclxuICAgIHByb3BlcnRpZXMucmVuZGVyKCk7XG5cbiAgICAvLyBDYWxsYmFjayBjYWxsZWQgZXZlcnkgdGltZSB0aGVyZSBpcyBhIG11dGF0aW9uIGluIHRoZSB3YXRjaGVkIERPTSBlbGVtZW50XG4gICAgLy8gRmVhdHVyZSB0ZW1wb3JhcmlseSBkaXNhYmxlZCBkdWUgdG8gS0ItMzc4MzRcbiAgICAvLyBuZXcgTXV0YXRpb25PYnNlcnZlcihhc3luYyAobXV0YXRpb25MaXN0LCBvYnNlcnZlcikgPT4ge1xuICAgIC8vICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAvLyAgICAgZm9yIChjb25zdCBub2RlIG9mIG11dGF0aW9uLmFkZGVkTm9kZXMpIHtcbiAgICAvLyAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgLy8gICAgICAgICBhd2FpdCBwcm9wZXJ0aWVzLnJlbmRlcigpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gICAgLy8gLy8gV2UgbmVlZCB0byB3YXRjaCBvdmVyIHRoZSB3aG9sZSBkb2N1bWVudCwgaW4gY2FzZSB0aGUgUHJvcGVydGllcy5lbGVtZW50IGlzIGluc2VydGVkXG4gICAgLy8gLy8gZS5nLiB3ZSBzZXQgUHJvcGVydGllcy5lbGVtZW50ID0gJyNyZW5kZXJBcmVhJyBhbmQgdGhlbiB3ZSBhcHBlbmQgPGRpdiBpZD1cInJlbmRlckFyZWFcIj4kJDIrMj00JCQ8L2Rpdj4gdG8gdGhlIGRvY3VtZW50XG4gICAgLy8gLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAvLyAgIGF0dHJpYnV0ZXM6IHRydWUsIC8vIEluIGNhc2UgYW4gYXR0cmlidXRlIGlzIGNoYW5nZWQgaW4gYSA8bWF0aD4gbm9kZSwgZm9yIGluc3RhbmNlXG4gICAgLy8gICBjaGlsZExpc3Q6IHRydWUsIC8vIEluIGNhc2UgYSBuZXcgPG1hdGg+IG9yICQkbGF0ZXgkJCBub2RlIGlzIGFkZGVkLCBmb3IgaW5zdGFuY2VcbiAgICAvLyAgIHN1YnRyZWU6IHRydWUsIC8vIEluIGNhc2UgYSA8bWF0aD4gbm9kZSBpcyBhZGRlZCBhcyBhIGRlc2NlbmRhbnQgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnQsIGZvciBpbnN0YW5jZVxuICAgIC8vIH0pO1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9ET01Db250ZW50TG9hZGVkX2V2ZW50I2NoZWNraW5nX3doZXRoZXJfbG9hZGluZ19pc19hbHJlYWR5X2NvbXBsZXRlXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgIC8vIExvYWRpbmcgaGFzbid0IGZpbmlzaGVkIHlldFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHN0YXJ0KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBgRE9NQ29udGVudExvYWRlZGAgaGFzIGFscmVhZHkgZmlyZWRcbiAgICBzdGFydCgpO1xuICB9XG5cbiAgLy8gRXhwb3NlIHRoZSBvbGQgVmlld2VyIEFQSSBhcyBhIGdsb2JhbFxuICBieXBhc3NFbmNhcHN1bGF0aW9uKHByb3BlcnRpZXMsIHcpO1xuXG4gIC8vIERpc3BhdGNoIGFuIGV2ZW50IG5vdGlmeWluZyB0aGF0IHRoZSB2aWV3ZXIgaGFzIGJlZW4gbG9hZGVkXG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2aWV3ZXJMb2FkZWQnKSk7XG59XG4iLCJpbXBvcnQgeyBsYXRleFRvTWF0aG1sIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzIH0gZnJvbSAnLi9wcm9wZXJ0aWVzJztcblxuaW50ZXJmYWNlIExhdGV4UG9zaXRpb24ge1xuICBzdGFydDogbnVtYmVyLFxuICBlbmQ6IG51bWJlcixcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgRE9NIGxvb2tpbmcgZm9yIExhVGVYIG5vZGVzIGFuZCByZXBsYWNlcyB0aGVtIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgcmVuZGVyZWQgaW1hZ2VzLlxuICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllcyBvZiB0aGUgdmlld2VyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIEFueSBET00gZWxlbWVudCB0aGF0IGNhbiBjb250YWluIE1hdGhNTC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlckxhdGV4KHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIHJvb3Q6IEhUTUxFbGVtZW50KSB7XG5cbiAgaWYgKHByb3BlcnRpZXMudmlld2VyICE9PSAnaW1hZ2UnICYmIHByb3BlcnRpZXMudmlld2VyICE9PSAnbGF0ZXgnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbGF0ZXhOb2RlcyA9IGZpbmRMYXRleFRleHROb2Rlcyhyb290KTtcblxuICBmb3IgKGNvbnN0IGxhdGV4Tm9kZSBvZiBsYXRleE5vZGVzKSB7XG4gICAgYXdhaXQgcmVwbGFjZUxhdGV4SW5UZXh0Tm9kZShwcm9wZXJ0aWVzLCBsYXRleE5vZGUpO1xuICB9XG59XG5cbi8qKlxuICogUmVwbGFjZSBMYVRlWCBpbnN0YW5jZXMgd2l0aCBNYXRoTUwgaW5zaWRlIGEgZ2l2ZW4gbm9kZS5cbiAqIEBwYXJhbSB7UHJvcGVydGllc30gcHJvcGVydGllcyAtIFByb3BlcnRpZXMgb2YgdGhlIHZpZXdlci5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFRleHQgbm9kZSBpbiB3aGljaCB0byBzZWFyY2ggYW5kIHJlcGxhY2UgTGFUZVggaW5zdGFuY2VzLlxuICovXG5hc3luYyBmdW5jdGlvbiByZXBsYWNlTGF0ZXhJblRleHROb2RlKHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIG5vZGU6IE5vZGUpIHtcbiAgY29uc3QgdGV4dENvbnRlbnQ6IHN0cmluZyA9IG5vZGUudGV4dENvbnRlbnQgfHwgJyc7XG4gIGxldCBwb3M6IG51bWJlciA9IDA7XG5cbiAgd2hpbGUgKHBvcyA8IHRleHRDb250ZW50Lmxlbmd0aCkge1xuICAgIGNvbnN0IG5leHRMYXRleFBvc2l0aW9uOiBMYXRleFBvc2l0aW9uID0gZ2V0TmV4dExhdGV4UG9zKHBvcywgdGV4dENvbnRlbnQpO1xuICAgIGlmIChuZXh0TGF0ZXhQb3NpdGlvbikge1xuICAgICAgLy8gR2V0IGxlZnQgbm9uIExhVGVYIHRleHQuXG4gICAgICBjb25zdCBsZWZ0VGV4dDogc3RyaW5nID0gdGV4dENvbnRlbnQuc3Vic3RyaW5nKHBvcywgbmV4dExhdGV4UG9zaXRpb24uc3RhcnQpO1xuICAgICAgY29uc3QgbGVmdFRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGVmdFRleHQpO1xuICAgICAgLy8gQ3JlYXRlIGEgbm9kZSB3aXRoIGxlZnQgdGV4dC5cbiAgICAgIG5vZGUucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKGxlZnRUZXh0Tm9kZSwgbm9kZSk7XG4gICAgICBub2RlLm5vZGVWYWx1ZSA9IG5vZGUubm9kZVZhbHVlLnN1YnN0cmluZyhwb3MsIG5leHRMYXRleFBvc2l0aW9uLnN0YXJ0KTtcblxuICAgICAgLy8gR2V0IExhVGVYIHRleHQuXG4gICAgICBjb25zdCBsYXRleCA9IHRleHRDb250ZW50LnN1YnN0cmluZyhuZXh0TGF0ZXhQb3NpdGlvbi5zdGFydCArICckJCcubGVuZ3RoLCBuZXh0TGF0ZXhQb3NpdGlvbi5lbmQpO1xuICAgICAgLy8gQ29udmVydCBMYVRlWCB0byBtYXRobWwuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhdGV4VG9NYXRobWwobGF0ZXgsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNSb290LCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uKTtcbiAgICAgIC8vIEluc2VydCBtYXRobWwgbm9kZS5cbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQocmVzcG9uc2UudGV4dCk7XG5cbiAgICAgIG5vZGUucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBub2RlKTtcbiAgICAgIG5vZGUubm9kZVZhbHVlID0gbm9kZS5ub2RlVmFsdWUuc3Vic3RyaW5nKG5leHRMYXRleFBvc2l0aW9uLnN0YXJ0LCBuZXh0TGF0ZXhQb3NpdGlvbi5lbmQpO1xuXG4gICAgICBwb3MgPSBuZXh0TGF0ZXhQb3NpdGlvbi5lbmQgKyAnJCQnLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm8gbW9yZSBMYVRlWCBub2RlIGZvdW5kLlxuICAgICAgY29uc3QgdGV4dCA9IHRleHRDb250ZW50LnN1YnN0cmluZyhwb3MpO1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZT8uaW5zZXJ0QmVmb3JlKHRleHROb2RlLCBub2RlKTtcbiAgICAgIG5vZGUubm9kZVZhbHVlID0gJyc7XG4gICAgICBwb3MgPSB0ZXh0Q29udGVudC5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVsZXRlIG9yaWdpbmFsIHRleHQgbm9kZS5cbiAgbm9kZS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgd2l0aCBhbGwgSFRNTCBMYVRlWCBub2Rlcy5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBBbnkgRE9NIGVsZW1lbnQgdGhhdCBjYW4gY29udGFpbiBMYVRlWC5cbiAqIEByZXR1cm5zIHtOb2RlW119IEFycmF5IHdpdGggYWxsIEhUTUwgTGFUZVggbm9kZXMgaW5zaWRlIHJvb3QuXG4gKi9cbmZ1bmN0aW9uIGZpbmRMYXRleFRleHROb2Rlcyhyb290OiBhbnkpOiBOb2RlW10ge1xuICBjb25zdCBub2RlSXRlcmF0b3I6IE5vZGVJdGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZU5vZGVJdGVyYXRvcihcbiAgICByb290LFxuICAgIE5vZGVGaWx0ZXIuU0hPV19URVhULFxuICAgIG5vZGUgPT4gLyhcXCRcXCQpKC4qKShcXCRcXCQpLy50ZXN0KG5vZGUubm9kZVZhbHVlIHx8ICcnKSA/IE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCA6IE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVFxuICApO1xuICBjb25zdCBsYXRleE5vZGVzIDogTm9kZVtdID0gW107XG5cbiAgbGV0IGN1cnJlbnROb2RlOiBOb2RlIHwgbnVsbDtcbiAgd2hpbGUgKGN1cnJlbnROb2RlID0gbm9kZUl0ZXJhdG9yLm5leHROb2RlKCkpIHtcbiAgICBsYXRleE5vZGVzLnB1c2goY3VycmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGxhdGV4Tm9kZXM7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qge3N0YXJ0LCBlbmR9IHdpdGggdGhlIHN0YXJ0IGFuZCBlbmQgbGF0ZXggcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIC0gQ3VycmVudCBwb3NpdGlvbiBpbnNpZGUgdGhlIHRleHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgd2hlcmUgdGhlIG5leHQgbGF0ZXggaXQgd2lsbCBiZSBzZWFyY2hlZC5cbiAqIEBcbiAqL1xuZnVuY3Rpb24gZ2V0TmV4dExhdGV4UG9zKHBvczogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBMYXRleFBvc2l0aW9uIHtcbiAgY29uc3QgZmlyc3RMYXRleFRhZ3MgPSB0ZXh0LmluZGV4T2YoJyQkJywgcG9zKTtcbiAgY29uc3Qgc2Vjb25kTGF0ZXhUYWdzID0gZmlyc3RMYXRleFRhZ3MgPT0gLTEgPyAtMSA6IHRleHQuaW5kZXhPZignJCQnLCBmaXJzdExhdGV4VGFncyArICckJCcubGVuZ3RoKTtcbiAgcmV0dXJuIGZpcnN0TGF0ZXhUYWdzICE9IC0xICYmIHNlY29uZExhdGV4VGFncyAhPSAtMSA/IHsnc3RhcnQnOiBmaXJzdExhdGV4VGFncywgJ2VuZCc6IHNlY29uZExhdGV4VGFnc30gOiBudWxsO1xufVxuIiwiaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gXCIuL3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IHNob3dJbWFnZSwgY3JlYXRlSW1hZ2UsIG1hdGhtbDJhY2Nlc3NpYmxlLCBwcm9jZXNzSnNvblJlc3BvbnNlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBodG1sRW50aXRpZXNUb1htbEVudGl0aWVzLCBjb3JydXB0TWF0aE1MIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogRGF0YSBvYnRhaW5lZCB3aGVuIHJlbmRlcmluZyBpbWFnZS4gRGF0YSBuZWVkZWQgdG8gc2V0IHRoZSBmb3JtdWxhIGltYWdlIHBhcmFtZXRlcnMuXG4gKi9cbmludGVyZmFjZSBGb3JtdWxhRGF0YSB7XG4gIGNvbnRlbnQ6IHN0cmluZyxcbiAgYmFzZWxpbmU6IHN0cmluZyxcbiAgaGVpZ2h0OiBzdHJpbmcsXG4gIHdpZHRoOiBzdHJpbmcsXG59XG5cbi8qKlxuICogUGFyc2UgdGhlIERPTSBsb29raW5nIGZvciA8bWF0aD4gZWxlbWVudHMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHJlbmRlcmVkIGltYWdlcyB3aXRoaW4gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gQW55IERPTSBlbGVtZW50IHRoYXQgY2FuIGNvbnRhaW4gTWF0aE1MLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyTWF0aE1MKHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIHJvb3Q6IEhUTUxFbGVtZW50KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgaWYgKHByb3BlcnRpZXMudmlld2VyICE9PSAnaW1hZ2UnICYmIHByb3BlcnRpZXMudmlld2VyICE9PSAnbWF0aG1sJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvcihjb25zdCBtYXRoRWxlbWVudCBvZiBbLi4ucm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWF0aCcpXSkge1xuICAgIGNvbnN0IG1tbCA9IGh0bWxFbnRpdGllc1RvWG1sRW50aXRpZXMobWF0aEVsZW1lbnQub3V0ZXJIVE1MKTtcblxuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAocHJvcGVydGllcy53aXJpc3BsdWdpbnBlcmZvcm1hbmNlID09PSAndHJ1ZScpIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBtbWwgdG8gaW1nLlxuICAgICAgcmVzdWx0ID0gYXdhaXQgc2hvd0ltYWdlKG1tbCwgcHJvcGVydGllcy5sYW5nLCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzUm9vdCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNyZWF0ZWltYWdlIHJldHVybnMgdGhlIFVSTCB0byBzaG93aW1hZ2Ugb2YgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2VcbiAgICAgIGxldCB1cmwgPSBhd2FpdCBjcmVhdGVJbWFnZShtbWwsIHByb3BlcnRpZXMubGFuZywgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc1Jvb3QsIHByb3BlcnRpZXMuZWRpdG9yU2VydmljZXNFeHRlbnNpb24pO1xuICAgICAgLy8gVGhpcyBsaW5lIGlzIG5lY2Vzc2FyeSBkdWUgdG8gYSBidWcgaW4gaG93IHRoZSBzZXJ2aWNlcyBpbnRlcm9wZXJhdGUuXG4gICAgICAvLyBUT0RPIGZpeCB0aGUgY2F1c2luZyBidWdcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKCdwbHVnaW5zYXBwJywgJ3BsdWdpbnMvYXBwJyk7XG4gICAgICByZXN1bHQgPSBhd2FpdCBwcm9jZXNzSnNvblJlc3BvbnNlKGZldGNoKHVybCkpO1xuICAgIH1cblxuICAgIC8vIFNldCBpbWcgcHJvcGVydGllcy5cbiAgICBjb25zdCBpbWcgPSBhd2FpdCBzZXRJbWFnZVByb3BlcnRpZXMocHJvcGVydGllcywgcmVzdWx0LCBtbWwpO1xuICAgIC8vIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoZGF0YS5yZXN1bHQuY29udGVudCk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBNYXRoTUwgZm9yIHRoZSBnZW5lcmF0ZWQgZm9ybXVsYSBpbWFnZS5cbiAgICBtYXRoRWxlbWVudC5wYXJlbnROb2RlPy5yZXBsYWNlQ2hpbGQoaW1nLCBtYXRoRWxlbWVudCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBpbWFnZSBmb3JtdWxhIGNvbnRhaW5pbmcgYWxsIE1hdGhUeXBlIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge1Byb3BlcnRpZXN9IHByb3BlcnRpZXMgLSBQcm9wZXJ0aWVzIG9mIHRoZSB2aWV3ZXIuXG4gKiBAcGFyYW0ge0Zvcm11bGFEYXRhfSBkYXRhIC0gT2JqZWN0IGNvbnRhaW5pbmcgaW1hZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIFRoZSBNYXRoTUwgb2YgdGhlIGZvcm11bGEgaW1hZ2UgYmVlaW5nIGNyZWF0ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50Pn0gLSBGb3JtdWxhIGltYWdlLlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRJbWFnZVByb3BlcnRpZXMocHJvcGVydGllczogUHJvcGVydGllcywgZGF0YTogRm9ybXVsYURhdGEsIG1tbDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XG5cbiAgLy8gQ3JlYXRlIGltYWcgZWxlbWVudC5cbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIC8vIFNldCBpbWFnZSBzcmMuIEVuY29kZSB0aGUgcmVzdWx0IHN2Zy5cbiAgaW1nLnNyYyA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEuY29udGVudCl9YDtcblxuICAvLyBTZXQgb3RoZXIgaW1hZ2UgcHJvcGVydGllcy5cbiAgaW1nLnNldEF0dHJpYnV0ZShwcm9wZXJ0aWVzLndpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlLCBtbWwpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdXaXJpc2Zvcm11bGEnKTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgncm9sZScsICdtYXRoJyk7XG5cbiAgLy8gSWYgdGhlIHJlbmRlciByZXR1cm5zIGRpbWVuc2lvbnMgcHJvcGVydGllcywgc2V0IHRoZW0gdG8gdGhlIGltYWdlLlxuICBpZiAoK2RhdGEuaGVpZ2h0ID4gMCkge1xuICAgIGltZy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCItXCIgKyAoK2RhdGEuaGVpZ2h0IC0gK2RhdGEuYmFzZWxpbmUpICsgXCJweFwiO1xuICAgIGltZy5oZWlnaHQgPSArZGF0YS5oZWlnaHQ7XG4gICAgaW1nLndpZHRoID0gK2RhdGEud2lkdGg7XG4gIH1cblxuICAvLyBTZXQgdGhlIGFsdCB0ZXh0IHdoZW5ldmVyIHRoZXJlJ3MgYSB0cmFuc2xhdGlvbiBmb3IgdGhlIGNoYXJhY3RlcnMgYW5kIE1hdGhNTCBvbiB0aGUgbW1sLlxuICBpZiAoIWNvcnJ1cHRNYXRoTUwuc29tZShjb3JydXB0TWF0aE1MID0+IG1tbC5pbmNsdWRlcyhjb3JydXB0TWF0aE1MKSkpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IGF3YWl0IG1hdGhtbDJhY2Nlc3NpYmxlKG1tbCwgcHJvcGVydGllcy5sYW5nLCBwcm9wZXJ0aWVzLmVkaXRvclNlcnZpY2VzUm9vdCwgcHJvcGVydGllcy5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbik7XG4gICAgaW1nLmFsdCA9IHRleHQ7XG4gIH1cblxuICByZXR1cm4gaW1nO1xuXG59XG4iLCJpbXBvcnQgeyBjb25maWd1cmF0aW9uSnNvbiwgU3RhdHVzRXJyb3IgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLy8gSGVscGVyIHR5cGVzIGZvciBDb25maWcgYmVsb3dcbnR5cGUgVmlld2VyID0gJ25vbmUnIHwgJ2ltYWdlJyB8ICdtYXRobWwnIHwgJ2xhdGV4JztcbnR5cGUgV2lyaXNwbHVnaW5wZXJmb3JtYW5jZSA9ICd0cnVlJyB8ICdmYWxzZSc7XG5cbi8qKlxuICogVHlwZSByZXByZXNlbnRpbmcgYWxsIHRoZSBjb25maWd1cmF0aW9uIGZvciB0aGUgdmlld2VyLlxuICovXG5leHBvcnQgdHlwZSBDb25maWcgPSB7XG4gIGVkaXRvclNlcnZpY2VzUm9vdD86IHN0cmluZyxcbiAgZWRpdG9yU2VydmljZXNFeHRlbnNpb24/OiBzdHJpbmcsXG4gIGJhY2tlbmRDb25maWc/OiB7XG4gICAgd2lyaXNwbHVnaW5wZXJmb3JtYW5jZT86IFdpcmlzcGx1Z2lucGVyZm9ybWFuY2UsXG4gICAgd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGU/OiBzdHJpbmcsXG4gIH0sXG4gIGRwaT86IG51bWJlcixcbiAgZWxlbWVudD86IHN0cmluZyxcbiAgbGFuZz86IHN0cmluZyxcbiAgdmlld2VyPzogVmlld2VyLFxuICB6b29tPzogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBGYWxsYmFjayB2YWx1ZXMgZm9yIHRoZSBjb25maWd1cmF0aW9ucyB0aGF0IGFyZSBub3Qgc2V0LlxuICovXG5jb25zdCBkZWZhdWx0VmFsdWVzOiBDb25maWcgPSB7XG4gIGVkaXRvclNlcnZpY2VzUm9vdDogJ2h0dHBzOi8vd3d3LndpcmlzLm5ldC9kZW1vL3BsdWdpbnMvYXBwLycsXG4gIGVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uOiAnJyxcbiAgYmFja2VuZENvbmZpZzoge1xuICAgIHdpcmlzcGx1Z2lucGVyZm9ybWFuY2U6ICd0cnVlJyxcbiAgICB3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZTogJ2RhdGEtbWF0aG1sJ1xuICB9LFxuICBkcGk6IDk2LFxuICBlbGVtZW50OiAnYm9keScsXG4gIGxhbmc6ICdlbicsXG4gIHZpZXdlcjogJ25vbmUnLFxuICB6b29tOiAxLFxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3Mgd2lsbCBoYW5kbGUgdGhlIHBhcmFtZXRlcnMgZGVmaW5lZCBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb3BlcnRpZXMge1xuXG4gIHJlbmRlcjogKCkgPT4gUHJvbWlzZTx2b2lkPiA9IGFzeW5jICgpID0+IHt9O1xuXG4gIC8vIEdldCBVUkwgcHJvcGVydGllcyAocmV0cm9jb21wYXRpYmlsaXR5KS5cbiAgY29uZmlnOiBDb25maWcgPSBkZWZhdWx0VmFsdWVzO1xuXG4gIC8qKlxuICAgKiBEbyBub3QgdXNlIHRoaXMgbWV0aG9kLiBJbnN0ZWFkLCB1c2Uge0BsaW5rIFByb3BlcnRpZXMuZ2VuZXJhdGV9LlxuICAgKiBDb25zdHJ1Y3RvcnMgY2Fubm90IGJlIGFzeW5jIHNvIHdlIG1ha2UgaXQgcHJpdmF0ZSBhbmQgZm9yY2UgaW5zdGFudGlhdGlvbiB0aHJvdWdoIGFuIGFsdGVybmF0aXZlIHN0YXRpYyBtZXRob2QuXG4gICAqL1xuICBwcml2YXRlIG5ldygpIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIHNldHMgdXAgYSBuZXcgaW5zdGFuY2Ugb2YgY2xhc3MgUHJvcGVydGllc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdlbmVyYXRlKCk6IFByb21pc2U8UHJvcGVydGllcz4ge1xuXG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgUHJvcGVydGllcygpO1xuXG4gICAgLy8gR2V0IFVSTCBwYXJhbWV0ZXJzIGZyb20gPHNjcmlwdD5cbiAgICBjb25zdCBwbHVnaW5OYW1lID0gJ1dJUklTcGx1Z2lucy5qcyc7XG4gICAgY29uc3Qgc2NyaXB0OiBIVE1MU2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtwbHVnaW5OYW1lfVwiXWApO1xuXG4gICAgaWYgKCEhc2NyaXB0KSB7XG5cbiAgICAgIGNvbnN0IHBsdWdpbk5hbWVQb3NpdGlvbjogbnVtYmVyID0gc2NyaXB0LnNyYy5sYXN0SW5kZXhPZihwbHVnaW5OYW1lKTtcbiAgICAgIGNvbnN0IHBhcmFtczogc3RyaW5nID0gc2NyaXB0LnNyYy5zdWJzdHJpbmcocGx1Z2luTmFtZVBvc2l0aW9uICsgcGx1Z2luTmFtZS5sZW5ndGgpO1xuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpO1xuXG4gICAgICBpZiAodXJsUGFyYW1zLmdldCgnZHBpJykgIT09IG51bGwgJiYgdXJsUGFyYW1zLmdldCgnZHBpJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5jb25maWcuZHBpID0gK3VybFBhcmFtcy5nZXQoJ2RwaScpO1xuICAgICAgfVxuICAgICAgaWYgKHVybFBhcmFtcy5nZXQoJ2VsZW1lbnQnKSAhPT0gbnVsbCAmJiB1cmxQYXJhbXMuZ2V0KCdlbGVtZW50JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5jb25maWcuZWxlbWVudCA9IHVybFBhcmFtcy5nZXQoJ2VsZW1lbnQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh1cmxQYXJhbXMuZ2V0KCdsYW5nJykgIT09IG51bGwgJiYgdXJsUGFyYW1zLmdldCgnbGFuZycpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuY29uZmlnLmxhbmcgPSB1cmxQYXJhbXMuZ2V0KCdsYW5nJyk7XG4gICAgICB9XG4gICAgICBpZiAodXJsUGFyYW1zLmdldCgndmlld2VyJykgIT09IG51bGwgJiYgdXJsUGFyYW1zLmdldCgndmlld2VyJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZS5jb25maWcudmlld2VyID0gKHVybFBhcmFtcy5nZXQoJ3ZpZXdlcicpIGFzIFZpZXdlcik7XG4gICAgICB9XG4gICAgICBpZiAodXJsUGFyYW1zLmdldCgnem9vbScpICE9PSBudWxsICYmIHVybFBhcmFtcy5nZXQoJ3pvb20nKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbmZpZy56b29tID0gK3VybFBhcmFtcy5nZXQoJ3pvb20nKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIEdldCBiYWNrZW5kIHBhcmFtZXRlcnMgY2FsbGluZyB0aGUgY29uZmlndXJhdGlvbmpzb24gc2VydmljZVxuICAgIHRyeSB7XG4gICAgICBpbnN0YW5jZS5jb25maWcuYmFja2VuZENvbmZpZyA9IGF3YWl0IGNvbmZpZ3VyYXRpb25Kc29uKFxuICAgICAgICBbJ3dpcmlzcGx1Z2lucGVyZm9ybWFuY2UnLCAnd2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUnXSxcbiAgICAgICAgaW5zdGFuY2UuZWRpdG9yU2VydmljZXNSb290LFxuICAgICAgICBpbnN0YW5jZS5lZGl0b3JTZXJ2aWNlc0V4dGVuc2lvbixcbiAgICAgICk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFN0YXR1c0Vycm9yKSB7XG4gICAgICAgIC8vIERvIG5vdGhpbmc7IGxlYXZlIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBnZXQgZWRpdG9yU2VydmljZXNSb290KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmVkaXRvclNlcnZpY2VzUm9vdCB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5lZGl0b3JTZXJ2aWNlc1Jvb3Q7XG4gIH1cblxuICBzZXQgZWRpdG9yU2VydmljZXNSb290KGVkaXRvclNlcnZpY2VzUm9vdDogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNSb290ID0gZWRpdG9yU2VydmljZXNSb290O1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBnZXQgZWRpdG9yU2VydmljZXNFeHRlbnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZWRpdG9yU2VydmljZXNFeHRlbnNpb24gfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuZWRpdG9yU2VydmljZXNFeHRlbnNpb247XG4gIH1cblxuICBzZXQgZWRpdG9yU2VydmljZXNFeHRlbnNpb24oZWRpdG9yU2VydmljZXNFeHRlbnNpb246IHN0cmluZykge1xuICAgIHRoaXMuY29uZmlnLmVkaXRvclNlcnZpY2VzRXh0ZW5zaW9uID0gZWRpdG9yU2VydmljZXNFeHRlbnNpb247XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGxhbmd1YWdlLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIGxhbmcgcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP2xhbmc9Li4uKVxuICAgKiAtIFRoZSBIVE1MIGRvY3VtZW50IGxhbmd1YWdlICg8aHRtbCBsYW5nPS4uLj4pLlxuICAgKiAtIFRoZSBsYW5ndWFnZSBvZiB0aGUgYnJvd3Nlci5cbiAgICogLSBFbmdsaXNoLCBieSBkZWZhdWx0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNvZGVkIGxhbmd1YWdlIHN0cmluZy5cbiAgICovXG4gIGdldCBsYW5nKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnTGFuZyA9ICh0aGlzLmNvbmZpZy5sYW5nID09PSAnaW5oZXJpdCcpID8gbnVsbCA6IHRoaXMuY29uZmlnLmxhbmc7XG4gICAgcmV0dXJuIGNvbmZpZ0xhbmcgfHxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0ubGFuZyB8fFxuICAgICAgbmF2aWdhdG9yLmxhbmd1YWdlIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmxhbmc7XG4gIH1cblxuICBzZXQgbGFuZyhsYW5nOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5sYW5nID0gbGFuZztcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdmlld2VyIG1vZGUgZm9yIHRoZSBNYXRoTUwuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgdmlld2VyIHBhcmFtZXRlciBzZXQgaW4gdGhlIDxzY3JpcHQ+IChXSVJJU3BsdWdpbi5qcz92aWV3ZXI9Li4uKVxuICAgKiAtIG5vbmUsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgdmlld2VyKCk6IFZpZXdlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnZpZXdlciB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy52aWV3ZXI7XG4gIH1cblxuICBzZXQgdmlld2VyKHZpZXdlcjogVmlld2VyKSB7XG4gICAgdGhpcy5jb25maWcudmlld2VyID0gdmlld2VyO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkcGkgb2YgdGhlIGltYWdlcy5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSBkcGkgcGFyYW1ldGVyIHNldCBpbiB0aGUgPHNjcmlwdD4gKFdJUklTcGx1Z2luLmpzP2RwaT0uLi4pXG4gICAqIC0gOTYsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgZHBpKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRwaSB8fFxuICAgICAgZGVmYXVsdFZhbHVlcy5kcGk7XG4gIH1cblxuICBzZXQgZHBpKGRwaTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb25maWcuZHBpID0gZHBpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB6b29tIG9mIHRoZSBpbWFnZXMuXG4gICAqIEluIG9yZGVyIG9mIHByaW9yaXR5LCB0aGUgZmlyc3Qgb2YgdGhlIGZvbGxvd2luZyB0aGF0IGlzIHNldCBpcyByZXR1cm5lZDpcbiAgICogLSBUaGUgem9vbSBwYXJhbWV0ZXIgc2V0IGluIHRoZSA8c2NyaXB0PiAoV0lSSVNwbHVnaW4uanM/em9vbT0uLi4pXG4gICAqIC0gMSwgYnkgZGVmYXVsdC5cbiAgICovXG4gIGdldCB6b29tKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnpvb20gfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuem9vbTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb206IG51bWJlcikge1xuICAgIHRoaXMuY29uZmlnLnpvb20gPSB6b29tO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBlbGVtZW50IGluIHdoaWNoIHRvIHJlbmRlciBmb3JtdWxhcy5cbiAgICogSW4gb3JkZXIgb2YgcHJpb3JpdHksIHRoZSBmaXJzdCBvZiB0aGUgZm9sbG93aW5nIHRoYXQgaXMgc2V0IGlzIHJldHVybmVkOlxuICAgKiAtIFRoZSB6b29tIHBhcmFtZXRlciBzZXQgaW4gdGhlIDxzY3JpcHQ+IChXSVJJU3BsdWdpbi5qcz9lbGVtZW50PS4uLilcbiAgICogLSAnYm9keScsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgZWxlbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5lbGVtZW50IHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmVsZW1lbnQ7XG4gIH1cblxuICBzZXQgZWxlbWVudChlbGVtZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgV2lyaXMgcGx1Z2luIHBlcmZvcm1hbmNlLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIGJhY2tlbmQgY29uZmlndXJhdGlvbiBvZiB0aGUgcGFyYW1ldGVyLlxuICAgKiAtIHRydWUsIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBnZXQgd2lyaXNwbHVnaW5wZXJmb3JtYW5jZSgpOiBXaXJpc3BsdWdpbnBlcmZvcm1hbmNlIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZENvbmZpZy53aXJpc3BsdWdpbnBlcmZvcm1hbmNlIHx8XG4gICAgICBkZWZhdWx0VmFsdWVzLmJhY2tlbmRDb25maWcud2lyaXNwbHVnaW5wZXJmb3JtYW5jZTtcbiAgfVxuXG4gIHNldCB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlKHdpcmlzcGx1Z2lucGVyZm9ybWFuY2U6IFdpcmlzcGx1Z2lucGVyZm9ybWFuY2UpIHtcbiAgICB0aGlzLmNvbmZpZy5iYWNrZW5kQ29uZmlnLndpcmlzcGx1Z2lucGVyZm9ybWFuY2UgPSB3aXJpc3BsdWdpbnBlcmZvcm1hbmNlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBXaXJpcyBNYXRoTUwgYXR0cmlidXRlLlxuICAgKiBJbiBvcmRlciBvZiBwcmlvcml0eSwgdGhlIGZpcnN0IG9mIHRoZSBmb2xsb3dpbmcgdGhhdCBpcyBzZXQgaXMgcmV0dXJuZWQ6XG4gICAqIC0gVGhlIGJhY2tlbmQgY29uZmlndXJhdGlvbiBvZiB0aGUgcGFyYW1ldGVyLlxuICAgKiAtIGRhdGEtbWF0aG1sLCBieSBkZWZhdWx0LlxuICAgKi9cbiAgZ2V0IHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmJhY2tlbmRDb25maWcud2lyaXNlZGl0b3JtYXRobWxhdHRyaWJ1dGUgfHxcbiAgICAgIGRlZmF1bHRWYWx1ZXMuYmFja2VuZENvbmZpZy53aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZTtcbiAgfVxuXG4gIHNldCB3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSh3aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcuYmFja2VuZENvbmZpZy53aXJpc2VkaXRvcm1hdGhtbGF0dHJpYnV0ZSA9IHdpcmlzZWRpdG9ybWF0aG1sYXR0cmlidXRlO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlckxhdGV4IH0gZnJvbSBcIi4vbGF0ZXhcIjtcbmltcG9ydCB7IHJlbmRlck1hdGhNTCB9IGZyb20gXCIuL21hdGhtbFwiO1xuaW1wb3J0IHsgUHJvcGVydGllcyB9IGZyb20gXCIuL3Byb3BlcnRpZXNcIjtcblxuLyoqXG4gKiBFeHBvc2VzIHRoZSB7QGxpbmsgSnNQbHVnaW5WaWV3ZXJ9IHNpbmdsZXRvbiBpbnN0YW5jZSBhcyB3aW5kb3cuY29tLndpcmlzLmpzLkpzUGx1Z2luVmlld2VyLlxuICogQHBhcmFtIHtQcm9wZXJ0aWVzfSBwcm9wZXJ0aWVzIC0gUHJvcGVydGllcyBvZiB0aGUgdmlld2VyLlxuICogQHBhcmFtIHtXaW5kb3d9IHcgLSBJbnN0YW5jZSBvZiB0aGUgZ2xvYmFsIHdpbmRvdy5cbiAqIEBkZXByZWNhdGVkIENvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0gb3Ige0BsaW5rIHJlbmRlck1hdGhNTH0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBieXBhc3NFbmNhcHN1bGF0aW9uKHByb3BlcnRpZXM6IFByb3BlcnRpZXMsIHc6IFdpbmRvdykge1xuICBjb25zdCB3YW55ID0gdyBhcyBhbnk7XG5cbiAgaWYgKHR5cGVvZiB3YW55LmNvbSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3YW55LmNvbSA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3YW55LmNvbS53aXJpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3YW55LmNvbS53aXJpcyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3YW55LmNvbS53aXJpcy5qcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3YW55LmNvbS53aXJpcy5qcyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3YW55LmNvbS53aXJpcy5qcy5Kc1BsdWdpblZpZXdlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3YW55LmNvbS53aXJpcy5qcy5Kc1BsdWdpblZpZXdlciA9IEpzUGx1Z2luVmlld2VyLmdldEluc3RhbmNlKCk7XG4gICAgSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgY29tcGF0aWJpbGl0eSBsYXllciB3aXRoIHRoZSBvbGQgVmlld2VyLlxuICogU2VlIGhheGUvc3JjLWhheGUvY29tL3dpcmlzL2pzL0pzUGx1Z2luVmlld2VyLmh4IGluIGluIHRoZSByZXBvIHdpcmlzL3BsdWdpbnMgcHJldmlvdXMgdG8gY29tbWl0IGRmMTI0OGEuXG4gKlxuICogV0FSTklORzogdGhlIG1ldGhvZHMgaW4gdGhpcyBjbGFzcyBtYXkgY29udGFpbiBkaXJlY3QgcmVmZXJlbmNlcyB0byBnbG9iYWxzIHN1Y2ggYXMgd2luZG93IGFuZCBkb2N1bWVudC5cbiAqXG4gKiBAZGVwcmVjYXRlZCBDb25zaWRlciB1c2luZyB7QGxpbmsgcmVuZGVyTGF0ZXh9IG9yIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICovXG5jbGFzcyBKc1BsdWdpblZpZXdlciB7XG4gIHN0YXRpYyBpbnN0YW5jZTogSnNQbHVnaW5WaWV3ZXI7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBKc1BsdWdpblZpZXdlciB7XG4gICAgaWYgKEpzUGx1Z2luVmlld2VyLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIEpzUGx1Z2luVmlld2VyLmluc3RhbmNlID0gbmV3IEpzUGx1Z2luVmlld2VyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpzUGx1Z2luVmlld2VyLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbGwgdGhlIGZvcm11bGFzIHdyaXR0ZW4gaW4gU2FmZU1hdGhNTCBpbnNpZGUgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHdoZXJlaW4gdG8gcmVuZGVyIFNhZmVNYXRoTUwgZm9ybXVsYXMuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAZGVwcmVjYXRlZCBUaGVyZSBpcyBjdXJyZW50bHkgbm8gcmVwbGFjZW1lbnQgZm9yIHJlbmRlcmluZyBTYWZlTWF0aE1MIGZvcm11bGFzLlxuICAgKiBQbGVhc2UgY29uc2lkZXIgdXNpbmcge0BsaW5rIHJlbmRlckxhdGV4fSBvciB7QGxpbmsgcmVuZGVyTWF0aE1MfS5cbiAgICovXG4gIHBhcnNlU2FmZU1hdGhNTEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFzeW5jaHJvbm91c2x5PzogYm9vbGVhbiwgY2FsbGJhY2tGdW5jPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHZhciBtYXRobWxQb3NpdGlvbnMgPSBbXTtcbiAgICBKc1BsdWdpblZpZXdlci5nZXRNYXRoTUxQb3NpdGlvbnNBdEVsZW1lbnRBbmRDaGlsZHJlbihlbGVtZW50LCBtYXRobWxQb3NpdGlvbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0aG1sUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWF0aG1sUG9zaXRpb24gPSBtYXRobWxQb3NpdGlvbnNbaV07XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYXRoXCIpO1xuICAgICAgbWF0aG1sUG9zaXRpb24ubmV4dEVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbWF0aG1sUG9zaXRpb24ubmV4dEVsZW1lbnQpO1xuICAgICAgbmV3Tm9kZS5vdXRlckhUTUwgPSBKc1BsdWdpblZpZXdlci5kZWNvZGVTYWZlTWF0aE1MKG1hdGhtbFBvc2l0aW9uLnNhZmVNTUwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYWxsIHRoZSBmb3JtdWxhcyBpbiB0aGUgZG9jdW1lbnQuXG4gICAqIEBwYXJhbSBhc3luY2hyb25vdXNseSAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmMgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0gc2FmZVhtbCAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBkZXByZWNhdGVkIFBsZWFzZSBjb25zaWRlciB1c2luZyB7QGxpbmsgcmVuZGVyTWF0aE1MfS5cbiAgICovXG4gIGFzeW5jIHBhcnNlRG9jdW1lbnQoYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkLCBzYWZlWG1sPzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiByZW5kZXJNYXRoTUwoSnNQbHVnaW5WaWV3ZXIucHJvcGVydGllcywgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYWxsIHRoZSBmb3JtdWxhcyBpbnNpZGUgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHdoZXJlaW4gdG8gcmVuZGVyIGZvcm11bGFzLlxuICAgKiBAcGFyYW0gYXN5bmNocm9ub3VzbHkgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tGdW5jIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJNYXRoTUx9LlxuICAgKi9cbiAgYXN5bmMgcGFyc2VFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhc3luY2hyb25vdXNseT86IGJvb2xlYW4sIGNhbGxiYWNrRnVuYz86ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gcmVuZGVyTWF0aE1MKEpzUGx1Z2luVmlld2VyLnByb3BlcnRpZXMsIGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYWxsIHRoZSBMYVRlWCBmb3JtdWxhcyBpbiB0aGUgZG9jdW1lbnQgdG8gTWF0aE1MLlxuICAgKiBAcGFyYW0gYXN5bmNocm9ub3VzbHkgLSBDdXJyZW50bHkgaWdub3JlZCwgb25seSBpbmNsdWRlZCBmb3IgcmV0cm9jb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tGdW5jIC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQGRlcHJlY2F0ZWQgUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHtAbGluayByZW5kZXJMYXRleH0uXG4gICAqL1xuICBhc3luYyBwYXJzZUxhdGV4RG9jdW1lbnQoYXN5bmNocm9ub3VzbHk/OiBib29sZWFuLCBjYWxsYmFja0Z1bmM/OiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHJlbmRlckxhdGV4KEpzUGx1Z2luVmlld2VyLnByb3BlcnRpZXMsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhbGwgdGhlIExhVGVYIGZvcm11bGFzIGluc2lkZSB0aGUgZ2l2ZW4gZWxlbWVudCB0byBNYXRoTUwuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHdoZXJlaW4gdG8gY29udmVydCBmb3JtdWxhcy5cbiAgICogQHBhcmFtIGFzeW5jaHJvbm91c2x5IC0gQ3VycmVudGx5IGlnbm9yZWQsIG9ubHkgaW5jbHVkZWQgZm9yIHJldHJvY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIGNhbGxiYWNrRnVuYyAtIEN1cnJlbnRseSBpZ25vcmVkLCBvbmx5IGluY2x1ZGVkIGZvciByZXRyb2NvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICAqIEBkZXByZWNhdGVkIFBsZWFzZSBjb25zaWRlciB1c2luZyB7QGxpbmsgcmVuZGVyTGF0ZXh9LlxuICAgKi9cbiAgYXN5bmMgcGFyc2VMYXRleEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFzeW5jaHJvbm91c2x5PzogYm9vbGVhbiwgY2FsbGJhY2tGdW5jPzogKCkgPT4gdm9pZCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiByZW5kZXJMYXRleChKc1BsdWdpblZpZXdlci5wcm9wZXJ0aWVzLCBlbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRlY29kZVNhZmVNYXRoTUwoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHNhZmVYTUxDaGFyYWN0ZXJzRW50aXRpZXMgPSBKc0NoYXJhY3RlcnMuZ2V0U2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcygpO1xuICAgIHZhciB4bWxDaGFyYWN0ZXJzID0gSnNDaGFyYWN0ZXJzLmdldFhNTENoYXJhY3RlcnMoKTtcbiAgICB2YXIgc2FmZVhNTENoYXJhY3RlcnMgPSBKc0NoYXJhY3RlcnMuZ2V0U2FmZVhNTENoYXJhY3RlcnMoKTtcblxuICAgIHZhciB0YWdPcGVuZXJFbnRpdHkgPSBzYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzLnRhZ09wZW5lcjtcbiAgICB2YXIgdGFnQ2xvc2VyRW50aXR5ID0gc2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcy50YWdDbG9zZXI7XG4gICAgdmFyIGRvdWJsZVF1b3RlRW50aXR5ID0gc2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcy5kb3VibGVRdW90ZTtcbiAgICB2YXIgcmVhbERvdWJsZVF1b3RlRW50aXR5ID0gc2FmZVhNTENoYXJhY3RlcnNFbnRpdGllcy5yZWFsRG91YmxlUXVvdGU7XG5cblxuICAgIC8vIEltcG9ydGFudCB0byBub3QgY2hhbmdlIGZ1bmN0aW9uIHBhcmFtZXRlci5cbiAgICB2YXIgaW5wdXRDb3B5ID0gaW5wdXQuc2xpY2UoKTtcblxuICAgIC8vIERlY29kaW5nIGVudGl0aWVzLlxuICAgIGlucHV0Q29weSA9IGlucHV0Q29weS5zcGxpdCh0YWdPcGVuZXJFbnRpdHkpLmpvaW4oc2FmZVhNTENoYXJhY3RlcnMudGFnT3BlbmVyKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQodGFnQ2xvc2VyRW50aXR5KS5qb2luKHNhZmVYTUxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXRDb3B5ID0gaW5wdXRDb3B5LnNwbGl0KGRvdWJsZVF1b3RlRW50aXR5KS5qb2luKHNhZmVYTUxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQocmVhbERvdWJsZVF1b3RlRW50aXR5KS5qb2luKHNhZmVYTUxDaGFyYWN0ZXJzLnJlYWxEb3VibGVRdW90ZSk7XG5cbiAgICB2YXIgdGFnT3BlbmVyID0gc2FmZVhNTENoYXJhY3RlcnMudGFnT3BlbmVyO1xuICAgIHZhciB0YWdDbG9zZXIgPSBzYWZlWE1MQ2hhcmFjdGVycy50YWdDbG9zZXI7XG4gICAgdmFyIGRvdWJsZVF1b3RlID0gc2FmZVhNTENoYXJhY3RlcnMuZG91YmxlUXVvdGU7XG4gICAgdmFyIHJlYWxEb3VibGVRdW90ZSA9IHNhZmVYTUxDaGFyYWN0ZXJzLnJlYWxEb3VibGVRdW90ZTtcbiAgICB2YXIgYW1wZXJzYW5kID0gc2FmZVhNTENoYXJhY3RlcnMuYW1wZXJzYW5kO1xuICAgIHZhciBxdW90ZSA9IHNhZmVYTUxDaGFyYWN0ZXJzLnF1b3RlO1xuXG4gICAgLy8gRGVjb2RpbmcgY2hhcmFjdGVycy5cbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQodGFnT3BlbmVyKS5qb2luKHhtbENoYXJhY3RlcnMudGFnT3BlbmVyKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQodGFnQ2xvc2VyKS5qb2luKHhtbENoYXJhY3RlcnMudGFnQ2xvc2VyKTtcbiAgICBpbnB1dENvcHkgPSBpbnB1dENvcHkuc3BsaXQoZG91YmxlUXVvdGUpLmpvaW4oeG1sQ2hhcmFjdGVycy5kb3VibGVRdW90ZSk7XG4gICAgaW5wdXRDb3B5ID0gaW5wdXRDb3B5LnNwbGl0KGFtcGVyc2FuZCkuam9pbih4bWxDaGFyYWN0ZXJzLmFtcGVyc2FuZCk7XG4gICAgaW5wdXRDb3B5ID0gaW5wdXRDb3B5LnNwbGl0KHF1b3RlKS5qb2luKHhtbENoYXJhY3RlcnMucXVvdGUpO1xuXG4gICAgLy8gV2UgYXJlIHJlcGxhY2luZyAkIGJ5ICYgd2hlbiBpdHMgcGFydCBvZiBhbiBlbnRpdHkgZm9yIHJldHJvY29tcGF0aWJpbGl0eS5cbiAgICAvLyBOb3csIHRoZSBzdGFuZGFyZCBpcyByZXBsYWNlIMKnIGJ5ICYuXG4gICAgdmFyIHJldHVyblZhbHVlID0gJyc7XG4gICAgdmFyIGN1cnJlbnRFbnRpdHkgPSBudWxsO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgaW5wdXRDb3B5Lmxlbmd0aCkge1xuICAgICAgdmFyIGNoYXJhY3RlciA9IGlucHV0Q29weS5jaGFyQXQoaSk7XG4gICAgICBpZiAoY3VycmVudEVudGl0eSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT0gJyQnKSB7XG4gICAgICAgICAgY3VycmVudEVudGl0eSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVyblZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT0gJzsnKSB7XG4gICAgICAgIHJldHVyblZhbHVlICs9ICcmJyArIGN1cnJlbnRFbnRpdHk7XG4gICAgICAgIGN1cnJlbnRFbnRpdHkgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIubWF0Y2goLyhbYS16QS1aMC05Iy5fLV0gfCAnLScpLykpIHsgLy8gQ2hhcmFjdGVyIGlzIHBhcnQgb2YgYW4gZW50aXR5LlxuICAgICAgICBjdXJyZW50RW50aXR5ICs9IGNoYXJhY3RlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblZhbHVlICs9ICckJyArICdjdXJyZW50RW50aXR5JzsgLy8gSXMgbm90IGFuIGVudGl0eS5cbiAgICAgICAgY3VycmVudEVudGl0eSA9IG51bGw7XG4gICAgICAgIGkgLT0gMTsgLy8gUGFyc2UgYWdhaW4gdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldE1hdGhNTFBvc2l0aW9uc0F0RWxlbWVudEFuZENoaWxkcmVuKGVsZW1lbnQ6IE5vZGUsIG1hdGhtbFBvc2l0aW9ucykge1xuICAgIEpzUGx1Z2luVmlld2VyLmdldE1hdGhNTFBvc2l0aW9uc0F0Tm9kZShlbGVtZW50LCBtYXRobWxQb3NpdGlvbnMpO1xuICAgIC8vIENvcHkgY3VycmVudCBjaGlsZHJlbiBiZWNhdXNlIERPTSB3aWxsIGJlIGNoYW5nZWQgYW5kIGVsZW1lbnQuY2hpbGROb2RlcyB3b24ndCBiZVxuICAgIC8vIGNvbnNpc3RlbnQgb24gY2FsbCBnZXRNYXRoTUxQb3NpdGlvbnNBdEVsZW1lbnRBbmRDaGlsZHJlbigpLlxuICAgIHZhciBjaGlsZE5vZGVzID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBKc1BsdWdpblZpZXdlci5nZXRNYXRoTUxQb3NpdGlvbnNBdEVsZW1lbnRBbmRDaGlsZHJlbihjaGlsZCwgbWF0aG1sUG9zaXRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRNYXRoTUxQb3NpdGlvbnNBdE5vZGUobm9kZTogTm9kZSwgbWF0aG1sUG9zaXRpb25zKSB7XG4gICAgdmFyIHNhZmVYTUxDaGFyYWN0ZXJzID0gSnNDaGFyYWN0ZXJzLmdldFNhZmVYTUxDaGFyYWN0ZXJzKCk7XG4gICAgaWYobm9kZS5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICB2YXIgc3RhcnRNYXRobWxUYWcgPSBzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXIgKyBcIm1hdGhcIjtcbiAgICAgIHZhciBlbmRNYXRobWxUYWcgPSBzYWZlWE1MQ2hhcmFjdGVycy50YWdPcGVuZXIgKyBcIi9tYXRoXCIgKyBzYWZlWE1MQ2hhcmFjdGVycy50YWdDbG9zZXI7XG4gICAgICB2YXIgc3RhcnQgPSBub2RlLnRleHRDb250ZW50LmluZGV4T2Yoc3RhcnRNYXRobWxUYWcpO1xuICAgICAgdmFyIGVuZCA9IDA7XG4gICAgICB3aGlsZShzdGFydCAhPSAtMSkge1xuICAgICAgICBlbmQgPSBub2RlLnRleHRDb250ZW50LmluZGV4T2YoZW5kTWF0aG1sVGFnLHN0YXJ0ICsgc3RhcnRNYXRobWxUYWcubGVuZ3RoKTtcblxuICAgICAgICBpZihlbmQgPT0gLTEpIGJyZWFrO1xuXG4gICAgICAgIHZhciBuZXh0TWF0aE1MID0gbm9kZS50ZXh0Q29udGVudC5pbmRleE9mKHN0YXJ0TWF0aG1sVGFnLGVuZCArIGVuZE1hdGhtbFRhZy5sZW5ndGgpO1xuXG4gICAgICAgIGlmKG5leHRNYXRoTUwgPj0gMCAmJiBlbmQgPiBuZXh0TWF0aE1MKSBicmVhaztcblxuICAgICAgICB2YXIgc2FmZU1hdGhtbCA9IG5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LGVuZCArIGVuZE1hdGhtbFRhZy5sZW5ndGgpO1xuXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50LnN1YnN0cmluZygwLHN0YXJ0KSArIG5vZGUudGV4dENvbnRlbnQuc3Vic3RyaW5nKGVuZCArIGVuZE1hdGhtbFRhZy5sZW5ndGgpO1xuICAgICAgICBub2RlID0gKG5vZGUgYXMgVGV4dCkuc3BsaXRUZXh0KHN0YXJ0KTtcbiAgICAgICAgc3RhcnQgPSBub2RlLnRleHRDb250ZW50LmluZGV4T2Yoc3RhcnRNYXRobWxUYWcpO1xuXG4gICAgICAgIG1hdGhtbFBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgICBzYWZlTU1MOiBzYWZlTWF0aG1sLFxuICAgICAgICAgIG5leHRFbGVtZW50OiBub2RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmNsYXNzIEpzQ2hhcmFjdGVycyB7XG4gIHN0YXRpYyBnZXRTYWZlWE1MQ2hhcmFjdGVyc0VudGl0aWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ09wZW5lcjogJyZsYXF1bzsnLFxuICAgICAgdGFnQ2xvc2VyOiAnJnJhcXVvOycsXG4gICAgICBkb3VibGVRdW90ZTogJyZ1bWw7JyxcbiAgICAgIHJlYWxEb3VibGVRdW90ZTogJyZxdW90OycsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRYTUxDaGFyYWN0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAneG1sQ2hhcmFjdGVycycsXG4gICAgICB0YWdPcGVuZXI6ICc8JywgLy8gSGV4OiBcXHgzQy5cbiAgICAgIHRhZ0Nsb3NlcjogJz4nLCAvLyBIZXg6IFxceDNFLlxuICAgICAgZG91YmxlUXVvdGU6ICdcIicsIC8vIEhleDogXFx4MjIuXG4gICAgICBhbXBlcnNhbmQ6ICcmJywgLy8gSGV4OiBcXHgyNi5cbiAgICAgIHF1b3RlOiAnXFwnJywgLy8gSGV4OiBcXHgyNy5cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFNhZmVYTUxDaGFyYWN0ZXJzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnc2FmZVhtbENoYXJhY3RlcnMnLFxuICAgICAgdGFnT3BlbmVyOiAnwqsnLCAvLyBIZXg6IFxceEFCLlxuICAgICAgdGFnQ2xvc2VyOiAnwrsnLCAvLyBIZXg6IFxceEJCLlxuICAgICAgZG91YmxlUXVvdGU6ICfCqCcsIC8vIEhleDogXFx4QTguXG4gICAgICBhbXBlcnNhbmQ6ICfCpycsIC8vIEhleDogXFx4QTcuXG4gICAgICBxdW90ZTogJ2AnLCAvLyBIZXg6IFxceDYwLlxuICAgICAgcmVhbERvdWJsZVF1b3RlOiAnwqgnLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBQYXJzZXIgZnJvbSAnQHdpcmlzL21hdGh0eXBlLWh0bWwtaW50ZWdyYXRpb24tZGV2a2l0L3NyYy9wYXJzZXInO1xuXG5lbnVtIE1ldGhvZFR5cGUge1xuICBQb3N0ID0gXCJQT1NUXCIsXG4gIEdldCA9IFwiR0VUXCIsXG59XG5cbi8qKlxuICogVGhyb3duIHdoZW4gYSBzZXJ2aWNlIHJldHVybnMgYSBKU09OIHdpdGggYSBub24tb2sgc3RhdHVzIHZhbHVlIGluIGl0cyBKU09OIGJvZHlcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXR1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFN0YXR1c0Vycm9yLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvY2VzcyByZXNwb25zZXMgZnJvbSB0aGUgZWRpdG9yIHNlcnZpY2VzLlxuICogVGhlc2UgdXN1YWxseSBjb21lIHdyYXBwZWQgaW4gYSBKU09OIHdpdGggYSBzdGF0dXMgZmllbGQgdGhhdCBjYW4gYmUgZWl0aGVyIFwib2tcIiBvciBcIndhcm5pbmdcIi5cbiAqIElmIHN0YXR1cyBpcyBcIm9rXCIsIHJldHVybiB0aGUgcmVzdWx0IHZhbHVlIGFsb25nIGl0LiBPdGhlcndpc2UsIHRocm93IGEgU3RhdHVzRXJyb3IuXG4gKiBAcGFyYW0ge1Byb21pc2U8UmVzcG9uc2U+fSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBnaXZlbiBieSB0aGUgc2VydmljZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFRoZSB1bndyYXBwZWQgcmVzdWx0IG9mIHRoZSByZXNwb25zZSwgaWYgdmFsaWQuXG4gKiBAdGhyb3dzIHtTdGF0dXNFcnJvcn0gU2VydmljZSByZXNwb25kZWQgd2l0aCBhIG5vbi1vayBzdGF0dXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzSnNvblJlc3BvbnNlKHJlc3BvbnNlOiBQcm9taXNlPFJlc3BvbnNlPik6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIHJlc3VsdCB9ID0gYXdhaXQgKGF3YWl0IHJlc3BvbnNlKS5qc29uKCk7XG5cbiAgICBpZiAoc3RhdHVzICE9PSAnb2snKSB7XG4gICAgICB0aHJvdyBuZXcgU3RhdHVzRXJyb3IoJ1NlcnZpY2UgcmVzcG9uZGVkIHdpdGggYSBub24tb2sgc3RhdHVzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaChlKSB7XG4gICAgLy8gVE9ETyBtYW5hZ2UgbmV0d29yayBhbmQgc3RhdHVzIG5vbi1vayBlcnJvcnNcbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogQ2FsbHMgdGhlIGVuZHBvaW50IHNlcnZpY2VuYW1lIGFuZCByZXR1cm5zIGl0cyByZXNwb25zZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSAtIE9iamVjdCBvZiBwYXJhbWV0ZXJzIHRvIHBhc3MgYXMgdGhlIGJvZHkgcmVxdWVzdCBvciBzZWFyY2ggcGFyYW1ldGVycy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlTmFtZSAtIE5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gYmUgY2FsbGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcnZlclVSTCAtIFVybCBvZiB0aGUgc2VydmVyIHdoZXJlIHdlIHdhbnQgdG8gY2FsbCB0aGUgc2VydmljZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBleHRlbnNpb24gLSBFeHRlbnNpb24gdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIHNlcnZpY2VOYW1lIChpbmNsdWRpbmcgdGhlIGRvdCBpZiBuZWNlc3NhcnkpLlxuICogQHJldHVybnMge1Byb21pc2U8UmVzcG9uc2U+fSBUaGUgcmVxdWVzdCByZXNwb25zZS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxTZXJ2aWNlKHF1ZXJ5OiBvYmplY3QsIHNlcnZpY2VOYW1lOiBzdHJpbmcsIG1ldGhvZDogTWV0aG9kVHlwZSwgc2VydmVyVVJMOiBzdHJpbmcsIGV4dGVuc2lvbjogc3RyaW5nKSA6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZXJ2aWNlTmFtZSArIGV4dGVuc2lvbiwgc2VydmVyVVJMKTtcbiAgICBjb25zdCBpbml0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gTWV0aG9kVHlwZS5HZXQpIHtcbiAgICAgIC8vIEFkZCB0aGUgcXVlcnkgYXMgc2VhcmNoIHBhcmFtc1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnkpKSB7XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgdGhlIHF1ZXJ5IGFzIHRoZSBib2R5IG9mIHRoZSByZXF1ZXN0XG4gICAgICBpbml0LmJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsuLi5xdWVyeX0pO1xuICAgIH1cblxuICAgIHJldHVybiBmZXRjaCh1cmwudG9TdHJpbmcoKSwgaW5pdCk7XG4gIH0gY2F0Y2goZSkge1xuICAgIC8vIFRPRE8gbWFuYWdlIG5ldHdvcmsgYW5kIHN0YXR1cyBub24tb2sgZXJyb3JzXG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGFsdCB0ZXh0IG9mIHRoZSBNYXRoTUwgcGFzc2VkIGFzIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtbWwgLSBNYXRoTUwgdG8gYmUgdHJhbnNmb3JtZWQgaW50byBhbHQgdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIC0gTGFuZ3VhZ2Ugb2YgdGhlIGFjY2Vzc2libGUgdGV4dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gVGhlIG1hdGhtbDJhY2Nlc3NpYmxlIHNlcnZpY2UgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXRobWwyYWNjZXNzaWJsZShtbWw6IHN0cmluZywgbGFuZzogc3RyaW5nLCB1cmw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgLy8gU2V0IHRoZSBuZWVkZWQgcGFyYW1zIHRvIHJldHJpZXZlIHRoZSBhbHQgdGV4dC5cbiAgY29uc3QgcGFyYW1zID0ge1xuICAgICdzZXJ2aWNlJzogJ21hdGhtbDJhY2Nlc3NpYmxlJyxcbiAgICAnbW1sJzogbW1sLFxuICAgICdtZXRyaWNzJzogJ3RydWUnLFxuICAgICdjZW50ZXJiYXNlbGluZSc6ICdmYWxzZScsXG4gICAgJ2xhbmcnOiBsYW5nLFxuICAgICdpZ25vcmVTdHlsZXMnOiAndHJ1ZScsXG4gIH1cblxuICBjb25zdCByZXNwb25zZSA9IGNhbGxTZXJ2aWNlKHBhcmFtcywgJ3NlcnZpY2UnLCBNZXRob2RUeXBlLlBvc3QsIHVybCwgZXh0ZW5zaW9uKTtcbiAgcmV0dXJuIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2UpO1xufVxuXG4vKipcbiAqIENhbGxzIHRoZSBzaG93SW1hZ2Ugc2VydmljZSB3aXRoIHRoZSBnaXZlbiBNYXRoTUwgYW5kIHJldHVybnMgdGhlIHJlY2VpdmVkIFJlc3BvbnNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtbWwgLSBNYXRoTUwgdG8gcmVuZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgLSBMYW5ndWFnZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgb2YgdGhlIHNlcnZlciB3aGVyZSB3ZSB3YW50IHRvIGNhbGwgdGhlIHNlcnZpY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gdGhlIFJlc3BvbnNlIG9iamVjdCB0byB0aGUgcGV0aXRpb24gbWFkZSB0byBzaG93SW1hZ2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3dJbWFnZShtbWw6IHN0cmluZywgbGFuZzogc3RyaW5nLCB1cmw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ21tbCc6IG1tbCxcbiAgICAnbWV0cmljcyc6ICd0cnVlJyxcbiAgICAnY2VudGVyYmFzZWxpbmUnOiAnZmFsc2UnLFxuICAgICdsYW5nJzpsYW5nLFxuICB9XG5cbiAgLy8gVHJ5IHRvIG9idGFpbiB0aGUgaW1hZ2UgdmlhIEdFVFxuICBjb25zdCBnZXRQYXJhbXMgPSBQYXJzZXIuY3JlYXRlU2hvd0ltYWdlU3JjRGF0YSh7IG1tbCB9LCBsYW5nKTtcbiAgY29uc3QgZ2V0UmVzcG9uc2UgPSBjYWxsU2VydmljZShnZXRQYXJhbXMsICdzaG93aW1hZ2UnLCBNZXRob2RUeXBlLkdldCwgdXJsLCBleHRlbnNpb24pO1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBwcm9jZXNzSnNvblJlc3BvbnNlKGdldFJlc3BvbnNlKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBTdGF0dXNFcnJvcikge1xuICAgICAgLy8gRm9ybXVsYSB3YXMgbm90IGluIGNhY2hlOyBwcm9jZWVkIHdpdGggY2FsbGluZyBzaG93aW1hZ2UgdmlhIFBPU1RcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBHRVQgcmVxdWVzdCBmYWlscywgaXQgbWVhbnMgdGhhdCB0aGUgZm9ybXVsYSB3YXMgbm90IGluIGNhY2hlLiBQcm9jZWVkIHdpdGggUE9TVDpcbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdzaG93aW1hZ2UnLCBNZXRob2RUeXBlLlBvc3QsIHVybCwgZXh0ZW5zaW9uKTtcbiAgcmV0dXJuIHByb2Nlc3NKc29uUmVzcG9uc2UocmVzcG9uc2UpO1xuXG59O1xuXG4vKipcbiAqIENhbGxzIHRoZSBjcmVhdGVJbWFnZSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIE1hdGhNTCBhbmQgcmV0dXJucyB0aGUgcmVjZWl2ZWQgUmVzcG9uc2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG1tbCAtIE1hdGhNTCB0byByZW5kZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIC0gTGFuZ3VhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIG9mIHRoZSBzZXJ2ZXIgd2hlcmUgd2Ugd2FudCB0byBjYWxsIHRoZSBzZXJ2aWNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuc2lvbiAtIEV4dGVuc2lvbiB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgc2VydmljZU5hbWUgKGluY2x1ZGluZyB0aGUgZG90IGlmIG5lY2Vzc2FyeSkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59IHRoZSBSZXNwb25zZSBvYmplY3QgdG8gdGhlIHBldGl0aW9uIG1hZGUgdG8gc2hvd0ltYWdlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJbWFnZShtbWw6IHN0cmluZywgbGFuZzogc3RyaW5nLCB1cmw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ21tbCc6IG1tbCxcbiAgICAnbWV0cmljcyc6ICd0cnVlJyxcbiAgICAnY2VudGVyYmFzZWxpbmUnOiAnZmFsc2UnLFxuICAgICdsYW5nJzogbGFuZyxcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gY2FsbFNlcnZpY2UocGFyYW1zLCAnY3JlYXRlaW1hZ2UnLCBNZXRob2RUeXBlLkdldCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gKGF3YWl0IHJlc3BvbnNlKS50ZXh0KCk7XG59O1xuXG4vKipcbiAqIENhbGxzIHRoZSBsYXRleDJtYXRobWwgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBMYVRlWCBhbmQgcmV0dXJucyB0aGUgcmVjZWl2ZWQgUmVzcG9uc2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxhdGV4IC0gTGFUZVggdG8gcmVuZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVXJsIG9mIHRoZSBzZXJ2ZXIgd2hlcmUgd2Ugd2FudCB0byBjYWxsIHRoZSBzZXJ2aWNlLlxuICogQHBhcmFtIHtzdHJpbmd9IGV4dGVuc2lvbiAtIEV4dGVuc2lvbiB0byBhZGQgdG8gdGhlIGVuZCBvZiB0aGUgc2VydmljZU5hbWUgKGluY2x1ZGluZyB0aGUgZG90IGlmIG5lY2Vzc2FyeSkuXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxSZXNwb25zZT59IHRoZSBSZXNwb25zZSBvYmplY3QgdG8gdGhlIHBldGl0aW9uIG1hZGUgdG8gc2VydmljZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGF0ZXhUb01hdGhtbChsYXRleDogc3RyaW5nLCB1cmw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgJ3NlcnZpY2UnOiAnbGF0ZXgybWF0aG1sJyxcbiAgICAnbGF0ZXgnOiBsYXRleCxcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gY2FsbFNlcnZpY2UocGFyYW1zLCAnc2VydmljZScsIE1ldGhvZFR5cGUuUG9zdCwgdXJsLCBleHRlbnNpb24pO1xuICByZXR1cm4gcHJvY2Vzc0pzb25SZXNwb25zZShyZXNwb25zZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBiYWNrZW5kLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gdmFyaWFibGVrZXlzIC0gTGlzdCBvZiB0aGUga2V5IG5hbWVzIG9mIHRoZSB2YXJpYWJsZXMgdG8gZmV0Y2guXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uIC0gRXh0ZW5zaW9uIHRvIGFkZCB0byB0aGUgZW5kIG9mIHRoZSBzZXJ2aWNlTmFtZSAoaW5jbHVkaW5nIHRoZSBkb3QgaWYgbmVjZXNzYXJ5KS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPFJlc3BvbnNlPn0gVGhlIGNvbmZpZ3VyYXRpb25qc29uIHNlcnZpY2UgcmVzcG9uc2UuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25maWd1cmF0aW9uSnNvbih2YXJpYWJsZWtleXM6IHN0cmluZ1tdLCB1cmw6IHN0cmluZywgZXh0ZW5zaW9uOiBzdHJpbmcpIDogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgICd2YXJpYWJsZWtleXMnOiB2YXJpYWJsZWtleXMuam9pbignLCcpLFxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBjYWxsU2VydmljZShwYXJhbXMsICdjb25maWd1cmF0aW9uanNvbicsIE1ldGhvZFR5cGUuR2V0LCB1cmwsIGV4dGVuc2lvbik7XG4gIHJldHVybiBwcm9jZXNzSnNvblJlc3BvbnNlKHJlc3BvbnNlKTtcbn1cbiIsIi8qKlxuICogVGFrZXMgYSBzdHJpbmcgcG9zc2libHkgY29udGFpbmluZyBlbmNvZGVkIGVudGl0aWVzIChlLmcuICZuYnNwOyAmIzE2MDspIGFuZFxuICogcmV0dXJucyB0aGUgc2FtZSBzdHJpbmcgd2l0aCB0aGVzZSByZXBsYWNlZCBieSB0aGUgVVRGLTggY2hhcmFjdGVycyB0aGV5IHJlcHJlc2VudFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHdpdGggZW5jb2RlZCBlbnRpdGllc1xuICogQHJldHVybnMgdGhlIHNhbWUgc3RyaW5nIHdpdGggdGhlIGVudGl0aWVzIGRlY29kZWRcbiAqL1xuZnVuY3Rpb24gZGVjb2RlRW50aXRpZXModGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG59XG5cbi8qKlxuICogVGFrZXMgYSBzdHJpbmcgcG9zc2libHkgY29udGFpbmluZyBlbmNvZGVkIG5hbWVkIEhUTUwgZW50aXRpZXMgKGUuZy4gJm5ic3A7KSBhbmRcbiAqIHJldHVybnMgdGhlIHNhbWUgc3RyaW5nIHdpdGggdGhlc2UgcmVwbGFjZWQgYnkgdGhlIGVuY29kaW5nIHRoYXQgdXNlcyBudW1iZXJzIChlLmcuICYjMTYwOykuXG4gKiBCeSBpdHMgaW1wbGVtZW50YXRpb24sIHRoaXMgbWV0aG9kIGFsc28gcG9zc2libHkgZW5jb2RlcyBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3ZXJlXG4gKiBwcmV2aW91c2x5IHVuZW5jb2RlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB3aXRoIGVuY29kZWQgZW50aXRpZXNcbiAqIEByZXR1cm5zIHRoZSBzYW1lIHN0cmluZyB3aXRoIHRoZSBlbnRpdGllcyBkZWNvZGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBodG1sRW50aXRpZXNUb1htbEVudGl0aWVzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHRleHQgPSBkZWNvZGVFbnRpdGllcyh0ZXh0KTtcblxuICAvLyBSZXBsYWNlcyB0aGUgPCAmID4gY2hhcmFjdGVycyB0byBpdHMgSFRNTEVudGl0eSB0byBhdm9pZCByZW5kZXIgaXNzdWVzLlxuICB0ZXh0ID0gdGV4dC5zcGxpdCgnXCI8XCInKS5qb2luKCdcIiZsdDtcIicpXG4gICAgLnNwbGl0KCdcIj5cIicpXG4gICAgLmpvaW4oJ1wiJmd0O1wiJylcbiAgICAuc3BsaXQoJz48PCcpXG4gICAgLmpvaW4oJz4mbHQ7PCcpO1xuXG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gdGV4dC5jaGFyQXQoaSk7XG4gICAgaWYgKHRleHQuY2hhckNvZGVBdChpKSA+IDEyOCkge1xuICAgICAgcmVzdWx0ICs9ICcmIycgKyB0ZXh0LmNoYXJDb2RlQXQoaSkgKyAnOyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFNldCBvZiBtYXRobWwgYW5kIGNoYXJhY3RlcnMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBhY2Nlc3NpYmxlIHRleHQgYXNzb2NpYXRlZFxuLy8gYW5kIGNhbiBub3QgYmUgdHJhbnNsYXRlZCBvciB0cmFuc2Zvcm1lZCB0byBMYVRlWC5cbmV4cG9ydCBjb25zdCBjb3JydXB0TWF0aE1MID0gWyfin6YnLCAnJiMxMDIxNDsnLCAn4p+nJywgJyYjMTAyMTU7JywgJ21zY2FycmllcycsICdtc2NhcnJ5JywgJ21zZ3JvdXAnLCAnbXN0YWNrJywgJ21zbGluZScsICdtc3JvdyddO1xuIiwiaW1wb3J0IFRleHRDYWNoZSBmcm9tICcuL3RleHRjYWNoZSc7XG5pbXBvcnQgU2VydmljZVByb3ZpZGVyIGZyb20gJy4vc2VydmljZXByb3ZpZGVyJztcbmltcG9ydCBNYXRoTUwgZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IFN0cmluZ01hbmFnZXIgZnJvbSAnLi9zdHJpbmdtYW5hZ2VyJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgTWF0aFR5cGUgYWNjZXNzaWJsZSBjbGFzcy4gQ29udmVydHMgTWF0aE1MIHRvIGFjY2Vzc2libGUgdGV4dCBhbmQgbWFuYWdlc1xuICogdGhlIGFzc29jaWF0ZWQgY2xpZW50LXNpZGUgY2FjaGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY2Vzc2liaWxpdHkge1xuICAvKipcbiAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICogQWNjZXNzaWJpbGl0eSBjYWNoZSwgZWFjaCBlbnRyeSBjb250YWlucyBhIE1hdGhNTCBhbmQgaXRzIGNvcnJlc3BvbmRlbnQgYWNjZXNzaWJpbGl0eSB0ZXh0LlxuICAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gICovXG4gIHN0YXRpYyBnZXQgY2FjaGUoKSB7XG4gICAgcmV0dXJuIEFjY2Vzc2liaWxpdHkuX2NhY2hlO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBwcm9wZXJ0eSBzZXR0ZXIuXG4gICAqIFNldCBhY2Nlc3NpYmlsaXR5IGNhY2hlLlxuICAgKiBAcGFyYW0ge1RleHRDYWhlfSB2YWx1ZSAtIFRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3RhdGljIHNldCBjYWNoZSh2YWx1ZSkge1xuICAgIEFjY2Vzc2liaWxpdHkuX2NhY2hlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgTWF0aE1MIHN0cmluZ3MgdG8gaXRzIGFjY2Vzc2libGUgdGV4dCByZXByZXNlbnRhdGlvbi5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhNTCAtIE1hdGhNTCB0byBiZSBjb252ZXJ0ZWQgdG8gYWNjZXNzaWJsZSB0ZXh0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2xhbmd1YWdlXSAtIExhbmd1YWdlIG9mIHRoZSBhY2Nlc3NpYmxlIHRleHQuICdlbicgYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gW2RhdGFdIC0gUGFyYW1ldGVycyB0byBzZW5kIHRvIG1hdGhtbDJhY2Nlc3NpYmxlIHNlcnZpY2UuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gQWNjZXNzaWJpbGl0eSB0ZXh0LlxuICAgKi9cbiAgc3RhdGljIG1hdGhNTFRvQWNjZXNzaWJsZShtYXRoTUwsIGxhbmd1YWdlLCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiAobGFuZ3VhZ2UpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbGFuZ3VhZ2UgPSAnZW4nO1xuICAgIH1cbiAgICAvLyBDaGVjayBNYXRoTUwgY2xhc3MuIElmIHRoZSBjbGFzcyBpcyBjaGVtaXN0cnksXG4gICAgLy8gd2UgYWRkIGNoZW1pc3RyeSB0byBkYXRhIHRvIGZvcmNlIGFjY2Vzc2liaWxpdHkgc2VydmljZVxuICAgIC8vIHRvIGxvYWQgY2hlbWlzdHJ5IGdyYW1tYXIuXG4gICAgaWYgKE1hdGhNTC5jb250YWluQ2xhc3MobWF0aE1MLCAnd3JzX2NoZW1pc3RyeScpKSB7XG4gICAgICBkYXRhLm1vZGUgPSAnY2hlbWlzdHJ5JztcbiAgICB9XG4gICAgLy8gSWdub3JlIGFjY2VzaWJpbGl0eSBzdHlsZXNcbiAgICBkYXRhLmlnbm9yZVN0eWxlcyA9IHRydWU7XG4gICAgbGV0IGFjY2Vzc2libGVUZXh0ID0gJyc7XG5cbiAgICBpZiAoQWNjZXNzaWJpbGl0eS5jYWNoZS5nZXQobWF0aE1MKSkge1xuICAgICAgYWNjZXNzaWJsZVRleHQgPSBBY2Nlc3NpYmlsaXR5LmNhY2hlLmdldChtYXRoTUwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnNlcnZpY2UgPSAnbWF0aG1sMmFjY2Vzc2libGUnO1xuICAgICAgZGF0YS5sYW5nID0gbGFuZ3VhZ2U7XG4gICAgICBjb25zdCBhY2Nlc3NpYmxlSnNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnc2VydmljZScsIGRhdGEpKTtcbiAgICAgIGlmIChhY2Nlc3NpYmxlSnNvblJlc3BvbnNlLnN0YXR1cyAhPT0gJ2Vycm9yJykge1xuICAgICAgICBhY2Nlc3NpYmxlVGV4dCA9IGFjY2Vzc2libGVKc29uUmVzcG9uc2UucmVzdWx0LnRleHQ7XG4gICAgICAgIEFjY2Vzc2liaWxpdHkuY2FjaGUucG9wdWxhdGUobWF0aE1MLCBhY2Nlc3NpYmxlVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2Nlc3NpYmxlVGV4dCA9IFN0cmluZ01hbmFnZXIuZ2V0KCdlcnJvcl9jb252ZXJ0X2FjY2Vzc2liaWxpdHknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjZXNzaWJsZVRleHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb250YWlucyBhbiBpbnN0YW5jZSBvZiBUZXh0Q2FjaGUgY2xhc3MgdG8gbWFuYWdlIHRoZSBKYXZhU2NyaXB0IGFjY2Vzc2libGUgY2FjaGUuXG4gKiBFYWNoIGVudHJ5IG9mIHRoZSBjYWNoZSBvYmplY3QgY29udGFpbnMgdGhlIE1hdGhNTCBhbmQgaXQncyBjb3JyZXNwb25kZW50IGFjY2Vzc2liaWxpdHkgdGV4dC5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7VGV4dENhY2hlfVxuICovXG5BY2Nlc3NpYmlsaXR5Ll9jYWNoZSA9IG5ldyBUZXh0Q2FjaGUoKTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBjb25maWd1cmF0aW9uIGNsYXNzLlxuICogVXN1YWxseSB1c2VkIHRvIHJldHJpZXZlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBnZW5lcmF0ZWQgaW4gdGhlIGJhY2tlbmQgaW50byB0aGUgZnJvbnRlbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogQWRkcyBhIHByb3BlcnRpZXMgb2JqZWN0IHRvIHtAbGluayBDb25maWd1cmF0aW9uLnByb3BlcnRpZXN9LlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHByb3BlcnRpZXMgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcHJvcGVydGllcy5cbiAgICovXG4gIHN0YXRpYyBhZGRDb25maWd1cmF0aW9uKHByb3BlcnRpZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKENvbmZpZ3VyYXRpb24ucHJvcGVydGllcywgcHJvcGVydGllcyk7XG4gIH1cblxuICAvKipcbiAgKiBTdGF0aWMgcHJvcGVydHkuXG4gICogVGhlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBvYmplY3QuXG4gICogQHByaXZhdGVcbiAgKiBAdHlwZSB7T2JqZWN0fVxuICAqL1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIENvbmZpZ3VyYXRpb24uX3Byb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IHNldHRlci5cbiAgICogU2V0IGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IHByb3BlcnRpZXModmFsdWUpIHtcbiAgICBDb25maWd1cmF0aW9uLl9wcm9wZXJ0aWVzID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBrZXkuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSBQcm9wZXJ0eSBrZXlcbiAgICogQHJldHVybnMge1N0cmluZ30gUHJvcGVydHkgdmFsdWVcbiAgICovXG4gIHN0YXRpYyBnZXQoa2V5KSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzLCBrZXkpKSB7XG4gICAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQ29uZmlndXJhdGlvbi5wcm9wZXJ0aWVzLCAnX3dyc19jb25mXycpKSB7XG4gICAgICAgIHJldHVybiBDb25maWd1cmF0aW9uLnByb3BlcnRpZXNbYF93cnNfY29uZl8ke2tleX1gXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIENvbmZpZ3VyYXRpb24ucHJvcGVydGllc1trZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgcHJvcGVydHkgdG8gQ29uZmlndXJhdGlvbiBjbGFzcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIFByb3BlcnR5IGtleS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIC0gUHJvcGVydHkgdmFsdWUuXG4gICAqL1xuICBzdGF0aWMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBDb25maWd1cmF0aW9uLnByb3BlcnRpZXNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSBwcm9wZXJ0eSBvYmplY3QgdmFsdWUgd2l0aCBuZXcgdmFsdWVzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gVGhlIHByb3BlcnR5IGtleSB0byBiZSB1cGRhdGVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydHlWYWx1ZSAtIE9iamVjdCBjb250YWluaW5nIHRoZSBuZXcgdmFsdWVzLlxuICAgKi9cbiAgc3RhdGljIHVwZGF0ZShrZXksIHByb3BlcnR5VmFsdWUpIHtcbiAgICBpZiAoIUNvbmZpZ3VyYXRpb24uZ2V0KGtleSkpIHtcbiAgICAgIENvbmZpZ3VyYXRpb24uc2V0KGtleSwgcHJvcGVydHlWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVByb3BlcnR5ID0gT2JqZWN0LmFzc2lnbihDb25maWd1cmF0aW9uLmdldChrZXkpLCBwcm9wZXJ0eVZhbHVlKTtcbiAgICAgIENvbmZpZ3VyYXRpb24uc2V0KGtleSwgdXBkYXRlUHJvcGVydHkpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFN0YXRpYyBwcm9wZXJ0aWVzIG9iamVjdC4gU3RvcmVzIGFsbCBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMuXG4gKiBOZWVkZWQgdG8gYXR0cmlidXRlIGFjY2Vzc29ycy5cbiAqIEBwcml2YXRlXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5Db25maWd1cmF0aW9uLl9wcm9wZXJ0aWVzID0ge307XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhbGwgdGhlIGNvbnN0YW50cyBuZWVkZWQgaW4gYSBNYXRoVHlwZSBpbnRlZ3JhdGlvbiBhbW9uZyBkaWZmZXJlbnQgY2xhc3Nlcy5cbiAqIElmIGEgY29uc3RhbnQgc2hvdWxkIGJlIHVzZWQgYWNyb3NzIGRpZmZlcmVudCBjbGFzc2VzIHNob3VsZCBiZSBkZWZpbmVkIHVzaW5nIGF0dHJpYnV0ZVxuICogYWNjZXNzb3JzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuICAvKipcbiAgICogU2FmZSBYTUwgZW50aXRpZXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVYbWxDaGFyYWN0ZXJzRW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ09wZW5lcjogJyZsYXF1bzsnLFxuICAgICAgdGFnQ2xvc2VyOiAnJnJhcXVvOycsXG4gICAgICBkb3VibGVRdW90ZTogJyZ1bWw7JyxcbiAgICAgIHJlYWxEb3VibGVRdW90ZTogJyZxdW90OycsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCbGFja2JvYXJkIGludmFsaWQgc2FmZSBjaGFyYWN0ZXJzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBzYWZlQmFkQmxhY2tib2FyZENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGx0RWxlbWVudDogJ8KrbW/CuzzCqy9tb8K7JyxcbiAgICAgIGd0RWxlbWVudDogJ8KrbW/Cuz7Cqy9tb8K7JyxcbiAgICAgIGFtcEVsZW1lbnQ6ICfCq21vwrsmwqsvbW/CuycsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCbGFja2JvYXJkIHZhbGlkIHNhZmUgY2hhcmFjdGVycy5cbiAgICogQHR5cGV7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBzYWZlR29vZEJsYWNrYm9hcmRDaGFyYWN0ZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsdEVsZW1lbnQ6ICfCq21vwrvCp2x0O8KrL21vwrsnLFxuICAgICAgZ3RFbGVtZW50OiAnwqttb8K7wqdndDvCqy9tb8K7JyxcbiAgICAgIGFtcEVsZW1lbnQ6ICfCq21vwrvCp2FtcDvCqy9tb8K7JyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YW5kYXJkIFhNTCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHhtbENoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAneG1sQ2hhcmFjdGVycycsXG4gICAgICB0YWdPcGVuZXI6ICc8JywgLy8gSGV4OiBcXHgzQy5cbiAgICAgIHRhZ0Nsb3NlcjogJz4nLCAvLyBIZXg6IFxceDNFLlxuICAgICAgZG91YmxlUXVvdGU6ICdcIicsIC8vIEhleDogXFx4MjIuXG4gICAgICBhbXBlcnNhbmQ6ICcmJywgLy8gSGV4OiBcXHgyNi5cbiAgICAgIHF1b3RlOiAnXFwnJywgLy8gSGV4OiBcXHgyNy5cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICogU2FmZSBYTUwgc3BlY2lhbCBjaGFyYWN0ZXJzLiBUaGlzIGNoYXJhY3RlcnMgYXJlIHVzZWQgaW5zdGVhZCB0aGUgc3RhbmRhcmRcbiAgKiB0aGUgc3RhbmRhcmQgdG8gcGFyc2UgdGhlICBNYXRoTUwgaWYgc2FmZVhNTCBzYXZlIG1vZGUgaXMgZW5hYmxlLiBFYWNoIFhNTFxuICAqIHNwZWNpYWwgY2hhcmFjdGVyIGhhdmUgYSBVVEYtOCByZXByZXNlbnRhdGlvbi5cbiAgKiBAdHlwZSB7T2JqZWN0fVxuICAqL1xuICBzdGF0aWMgZ2V0IHNhZmVYbWxDaGFyYWN0ZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogJ3NhZmVYbWxDaGFyYWN0ZXJzJyxcbiAgICAgIHRhZ09wZW5lcjogJ8KrJywgLy8gSGV4OiBcXHhBQi5cbiAgICAgIHRhZ0Nsb3NlcjogJ8K7JywgLy8gSGV4OiBcXHhCQi5cbiAgICAgIGRvdWJsZVF1b3RlOiAnwqgnLCAvLyBIZXg6IFxceEE4LlxuICAgICAgYW1wZXJzYW5kOiAnwqcnLCAvLyBIZXg6IFxceEE3LlxuICAgICAgcXVvdGU6ICdgJywgLy8gSGV4OiBcXHg2MC5cbiAgICAgIHJlYWxEb3VibGVRdW90ZTogJ8KoJyxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgTWF0aFR5cGUgSW1hZ2UgY2xhc3MuIENvbnRhaW5zIGFsbCB0aGUgbG9naWMgcmVsYXRlZFxuICogdG8gTWF0aFR5cGUgaW1hZ2VzIG1hbmlwdWxhdGlvbi5cbiAqIEFsbCBNYXRoVHlwZSBpbWFnZXMgYXJlIGdlbmVyYXRlZCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgTWF0aFR5cGVcbiAqIGludGVncmF0aW9uIHNlcnZpY2U6IHNob3dpbWFnZSBvciBjcmVhdGVpbWFnZS5cbiAqXG4gKiBUaGVyZSBhcmUgdHdvIGF2YWlsYWJsZSBpbWFnZSBmb3JtYXRzOlxuICogLSBzdmcgKGRlZmF1bHQpXG4gKiAtIHBuZ1xuICpcbiAqIFRoZXJlIGFyZSB0d28gZm9ybWF0cyBmb3IgdGhlIGltYWdlIHNyYyBhdHRyaWJ1dGU6XG4gKiAtIEEgZGF0YS11cmkgc2NoZW1lIGNvbnRhaW5pbmcgdGhlIFVSTC1lbmNvZGVkIFNWRyBvciBhIFBORydzIGJhc2U2NC5cbiAqIC0gQSBsaW5rIHRvIHRoZSBzaG93aW1hZ2Ugc2VydmljZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2Uge1xuICAvKipcbiAgICogUmVtb3ZlcyBkYXRhIGF0dHJpYnV0ZXMgZnJvbSBhbiBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWcgLSBJbWFnZSB3aGVyZSByZW1vdmUgZGF0YSBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZUltZ0RhdGFBdHRyaWJ1dGVzKGltZykge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXNUb1JlbW92ZSA9IFtdO1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gaW1nO1xuXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICBpZiAoYXR0cmlidXRlICE9PSB1bmRlZmluZWQgJiYgYXR0cmlidXRlLm5hbWUgIT09IHVuZGVmaW5lZCAmJiBhdHRyaWJ1dGUubmFtZS5pbmRleE9mKCdkYXRhLScpID09PSAwKSB7XG4gICAgICAgIC8vIElzIHByZWZlcnJlZCBrZWVwIGFuIGFycmF5IGFuZCByZW1vdmUgYWZ0ZXIgdGhlIHNlYXJjaFxuICAgICAgICAvLyBiZWNhdXNlIHdoZW4gYXR0cmlidXRlIGlzIHJlbW92ZWQgdGhlIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICAgICAgLy8gaXMgbW9kaWZpZWQuXG4gICAgICAgIGF0dHJpYnV0ZXNUb1JlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGF0dHJpYnV0ZXNUb1JlbW92ZS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGltZy5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIENsb25lcyBhbGwgTWF0aFR5cGUgaW1hZ2UgYXR0cmlidXRlcyBmcm9tIGEgSFRNTEltYWdlRWxlbWVudCB0byBhbm90aGVyLlxuICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IG9yaWdpbkltZyAtIFRoZSBvcmlnaW5hbCBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBkZXN0SW1nIC0gVGhlIGRlc3RpbmF0aW9uIGltYWdlLlxuICAgKi9cbiAgc3RhdGljIGNsb25lKG9yaWdpbkltZywgZGVzdEltZykge1xuICAgIGNvbnN0IGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUgPSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDdXN0b21FZGl0b3JOYW1lJyk7XG4gICAgaWYgKCFvcmlnaW5JbWcuaGFzQXR0cmlidXRlKGN1c3RvbUVkaXRvckF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICBkZXN0SW1nLnJlbW92ZUF0dHJpYnV0ZShjdXN0b21FZGl0b3JBdHRyaWJ1dGVOYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRobWxBdHRyaWJ1dGVOYW1lID0gQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJyk7XG4gICAgY29uc3QgaW1nQXR0cmlidXRlcyA9IFtcbiAgICAgIG1hdGhtbEF0dHJpYnV0ZU5hbWUsXG4gICAgICBjdXN0b21FZGl0b3JBdHRyaWJ1dGVOYW1lLFxuICAgICAgJ2FsdCcsXG4gICAgICAnaGVpZ2h0JyxcbiAgICAgICd3aWR0aCcsXG4gICAgICAnc3R5bGUnLFxuICAgICAgJ3NyYycsXG4gICAgICAncm9sZScsXG4gICAgXTtcblxuICAgIGltZ0F0dHJpYnV0ZXMuZm9yRWFjaCgoaXRlcmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbkF0dHJpYnV0ZSA9IG9yaWdpbkltZy5nZXRBdHRyaWJ1dGUoaXRlcmF0b3IpO1xuICAgICAgaWYgKG9yaWdpbkF0dHJpYnV0ZSkge1xuICAgICAgICBkZXN0SW1nLnNldEF0dHJpYnV0ZShpdGVyYXRvciwgb3JpZ2luQXR0cmlidXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAqIENhbGN1bGF0ZXMgdGhlIG1ldHJpY3Mgb2YgYSBNYXRoVHlwZSBpbWFnZSBnaXZlbiB0aGUgdGhlIHNlcnZpY2UgcmVzcG9uc2UgYW5kIHRoZSBpbWFnZSBmb3JtYXQuXG4gICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBpbWcgLSBUaGUgSFRNTEltYWdlRWxlbWVudC5cbiAgKiBAcGFyYW0ge1N0cmluZ30gdXJpIC0gVGhlIFVSSSBnZW5lcmF0ZWQgYnkgdGhlIGltYWdlIHNlcnZpY2U6IGNhbiBiZSBhIGRhdGEgVVJJIHNjaGVtZSBvciBhIFVSTC5cbiAgKiBAcGFyYW0ge0Jvb2xlYW59IGpzb25SZXNwb25zZSAtIFRydWUgdGhlIHJlc3BvbnNlIG9mIHRoZSBpbWFnZSBzZXJ2aWNlIGlzIGFcbiAgKiBKU09OIG9iamVjdC4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAqL1xuICBzdGF0aWMgc2V0SW1nU2l6ZShpbWcsIHVyaSwganNvblJlc3BvbnNlKSB7XG4gICAgbGV0IGFyO1xuICAgIGxldCBiYXNlNjRTdHJpbmc7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGxldCBzdmdTdHJpbmc7XG4gICAgaWYgKGpzb25SZXNwb25zZSkge1xuICAgICAgLy8gQ2xlYW5pbmcgZGF0YTppbWFnZS9wbmc7YmFzZTY0LlxuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUZvcm1hdCcpID09PSAnc3ZnJykge1xuICAgICAgICAvLyBTVkcgZm9ybWF0LlxuICAgICAgICAvLyBJZiBTVkcgaXMgZW5jb2RlZCBpbiBiYXNlNjQgd2UgbmVlZCB0byBjb252ZXJ0IHRoZSBiYXNlNjQgYnl0ZXMgaW50byBhIFNWRyBzdHJpbmcuXG4gICAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSAhPT0gJ2Jhc2U2NCcpIHtcbiAgICAgICAgICBhciA9IEltYWdlLmdldE1ldHJpY3NGcm9tU3ZnU3RyaW5nKHVyaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZTY0U3RyaW5nID0gaW1nLnNyYy5zdWJzdHIoaW1nLnNyYy5pbmRleE9mKCdiYXNlNjQsJykgKyA3LCBpbWcuc3JjLmxlbmd0aCk7XG4gICAgICAgICAgc3ZnU3RyaW5nID0gJyc7XG4gICAgICAgICAgYnl0ZXMgPSBVdGlsLmI2NFRvQnl0ZUFycmF5KGJhc2U2NFN0cmluZywgYmFzZTY0U3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgc3ZnU3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhciA9IEltYWdlLmdldE1ldHJpY3NGcm9tU3ZnU3RyaW5nKHN2Z1N0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUE5HIGZvcm1hdDogd2Ugc3RvcmUgYWxsIG1ldHJpY3MgaW5mb3JtYXRpb24gaW4gdGhlIGZpcnN0IDg4IGJ5dGVzLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gaW1nLnNyYy5zdWJzdHIoaW1nLnNyYy5pbmRleE9mKCdiYXNlNjQsJykgKyA3LCBpbWcuc3JjLmxlbmd0aCk7XG4gICAgICAgIGJ5dGVzID0gVXRpbC5iNjRUb0J5dGVBcnJheShiYXNlNjRTdHJpbmcsIDg4KTtcbiAgICAgICAgYXIgPSBJbWFnZS5nZXRNZXRyaWNzRnJvbUJ5dGVzKGJ5dGVzKTtcbiAgICAgIH1cbiAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5OiB3ZSBzdG9yZSB0aGUgbWV0cmljcyBpbnRvIGNyZWF0ZWltYWdlIHJlc3BvbnNlLlxuICAgIH0gZWxzZSB7XG4gICAgICBhciA9IFV0aWwudXJsVG9Bc3NBcnJheSh1cmkpO1xuICAgIH1cbiAgICBsZXQgd2lkdGggPSBhci5jdztcbiAgICBpZiAoIXdpZHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBoZWlnaHQgPSBhci5jaDtcbiAgICBsZXQgYmFzZWxpbmUgPSBhci5jYjtcbiAgICBjb25zdCB7IGRwaSB9ID0gYXI7XG4gICAgaWYgKGRwaSkge1xuICAgICAgd2lkdGggPSB3aWR0aCAqIDk2IC8gZHBpO1xuICAgICAgaGVpZ2h0ID0gaGVpZ2h0ICogOTYgLyBkcGk7XG4gICAgICBiYXNlbGluZSA9IGJhc2VsaW5lICogOTYgLyBkcGk7XG4gICAgfVxuICAgIGltZy53aWR0aCA9IHdpZHRoO1xuICAgIGltZy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgaW1nLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBgLSR7aGVpZ2h0IC0gYmFzZWxpbmV9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIG1ldHJpY3Mgb2YgYW4gaW1hZ2Ugd2hpY2ggaGFzIGJlZW4gcmVzaXplZC4gSXMgdXNlZCB0byByZXN0b3JlIHRoZSBvcmlnaW5hbFxuICAgKiBtZXRyaWNzIG9mIGEgcmVzaXplZCBpbWFnZS5cbiAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50IH0gaW1nIC0gVGhlIHJlc2l6ZWQgSFRNTEltYWdlRWxlbWVudC5cbiAgICovXG4gIHN0YXRpYyBmaXhBZnRlclJlc2l6ZShpbWcpIHtcbiAgICBpbWcucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIGltZy5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgaW1nLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgcmVzaXplIHdpdGggbWF4LXdpZHRoIGNzcyBwcm9wZXJ0eS5cbiAgICBpbWcuc3R5bGUubWF4V2lkdGggPSAnbm9uZSc7XG5cbiAgICBjb25zdCBwcm9jZXNzSW1nID0gKGltZykgPT4ge1xuICAgICAgaWYgKGltZy5zcmMuaW5kZXhPZignZGF0YTppbWFnZScpICE9PSAtMSkge1xuICAgICAgICBpZiAoaW1nLnNyYy5pbmRleE9mKCdkYXRhOmltYWdlL3N2Zyt4bWwnKSAhPT0gLTEpIHtcblxuICAgICAgICAgIC8vIEltYWdlIGlzIGluIGJhc2U2NFxuICAgICAgICAgIGlmIChpbWcuc3JjLmluZGV4T2YoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJykgIT09IC0xKSB7XG4gICAgICAgICAgICAvLyAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnLmxlbmd0aCA9PT0gMjZcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IGltZy5nZXRBdHRyaWJ1dGUoJ3NyYycpLnN1YnN0cmluZygyNik7XG4gICAgICAgICAgICBjb25zdCBzdmdTdHJpbmcgPSB3aW5kb3cuYXRvYihiYXNlNjRTdHJpbmcpO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZFN2Z1N0cmluZyA9IGVuY29kZVVSSUNvbXBvbmVudChzdmdTdHJpbmcpO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJHtlbmNvZGVkU3ZnU3RyaW5nfWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCcubGVuZ3RoID09PSAzMi5cbiAgICAgICAgICBjb25zdCBzdmcgPSBkZWNvZGVVUklDb21wb25lbnQoaW1nLnNyYy5zdWJzdHJpbmcoMzIsIGltZy5zcmMubGVuZ3RoKSk7XG4gICAgICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWcsIHN2ZywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwnID09PSAyMi5cbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSBpbWcuc3JjLnN1YnN0cmluZygyMiwgaW1nLnNyYy5sZW5ndGgpO1xuICAgICAgICAgIEltYWdlLnNldEltZ1NpemUoaW1nLCBiYXNlNjQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBJbWFnZS5zZXRJbWdTaXplKGltZywgaW1nLnNyYyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIElmIHRoZSBpbWFnZSBkb2Vzbid0IGNvbnRhaW4gYSBibG9iLCBqdXN0IHByb2Nlc3MgaXQgbm9ybWFsbHlcbiAgICBpZiAoaW1nLnNyYy5pbmRleE9mKCdibG9iOicpID09PSAtMSkge1xuICAgICAgcHJvY2Vzc0ltZyhpbWcpO1xuICAgIC8vIGlmIGl0IGRvZXMgY29udGFpbiBhIGJsb2IsIHRoZW4gcmVhZCB0aGF0LCByZXBsYWNlIHRoZSBzcmMgd2l0aCB0aGUgZGVjb2RlZCBjb250ZW50LCBhbmQgcHJvY2VzcyBpdFxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVhZGVyLnJlc3VsdCk7XG4gICAgICAgIHByb2Nlc3NJbWcoaW1nKTtcbiAgICAgIH07XG4gICAgICBmZXRjaChpbWcuc3JjKS50aGVuKHIgPT4gci5ibG9iKCkpLnRoZW4oYmxvYiA9PiB7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1ldHJpY3MgKGhlaWdodCwgd2lkdGggYW5kIGJhc2VsaW5lKSBjb250YWluZWQgaW4gYSBTVkcgaW1hZ2UgZ2VuZXJhdGVkXG4gICAqIGJ5IHRoZSBNYXRoVHlwZSBpbWFnZSBzZXJ2aWNlLiBUaGlzIGltYWdlIGNvbnRhaW5zIGFzIGFuIGV4dHJhIGN1c3RvbSBhdHRyaWJ1dGU6XG4gICAqIHRoZSBiYXNlbGluZSAod3JzOmJhc2VsaW5lKS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN2Z1N0cmluZyAtIFRoZSBTVkcgaW1hZ2UuXG4gICAqIEByZXR1cm4ge0FycmF5fSAtIFRoZSBpbWFnZSBtZXRyaWNzLlxuICAgKi9cbiAgc3RhdGljIGdldE1ldHJpY3NGcm9tU3ZnU3RyaW5nKHN2Z1N0cmluZykge1xuICAgIGxldCBmaXJzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCdoZWlnaHQ9XCInKTtcbiAgICBsZXQgbGFzdCA9IHN2Z1N0cmluZy5pbmRleE9mKCdcIicsIGZpcnN0ICsgOCwgc3ZnU3RyaW5nLmxlbmd0aCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gc3ZnU3RyaW5nLnN1YnN0cmluZyhmaXJzdCArIDgsIGxhc3QpO1xuXG4gICAgZmlyc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignd2lkdGg9XCInKTtcbiAgICBsYXN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ1wiJywgZmlyc3QgKyA3LCBzdmdTdHJpbmcubGVuZ3RoKTtcbiAgICBjb25zdCB3aWR0aCA9IHN2Z1N0cmluZy5zdWJzdHJpbmcoZmlyc3QgKyA3LCBsYXN0KTtcblxuICAgIGZpcnN0ID0gc3ZnU3RyaW5nLmluZGV4T2YoJ3dyczpiYXNlbGluZT1cIicpO1xuICAgIGxhc3QgPSBzdmdTdHJpbmcuaW5kZXhPZignXCInLCBmaXJzdCArIDE0LCBzdmdTdHJpbmcubGVuZ3RoKTtcbiAgICBjb25zdCBiYXNlbGluZSA9IHN2Z1N0cmluZy5zdWJzdHJpbmcoZmlyc3QgKyAxNCwgbGFzdCk7XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICBhcnIuY3cgPSB3aWR0aDtcbiAgICAgIGFyci5jaCA9IGhlaWdodDtcbiAgICAgIGlmICh0eXBlb2YgYmFzZWxpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFyci5jYiA9IGJhc2VsaW5lO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1ldHJpY3MgKHdpZHRoLCBoZWlnaHQsIGJhc2VsaW5lIGFuZCBkcGkpIGNvbnRhaW5lZCBpbiBhIFBORyBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtBcnJheS48Qnl0ZXM+fSBieXRlcyAtIHBuZyBieXRlIGFycmF5LlxuICAgKiBAcmV0dXJuIHtBcnJheX0gVGhlIHBuZyBtZXRyaWNzLlxuICAgKi9cbiAgc3RhdGljIGdldE1ldHJpY3NGcm9tQnl0ZXMoYnl0ZXMpIHtcbiAgICBVdGlsLnJlYWRCeXRlcyhieXRlcywgMCwgOCk7XG4gICAgbGV0IHdpZHRoO1xuICAgIGxldCBoZWlnaHQ7XG4gICAgbGV0IHR5cDtcbiAgICBsZXQgYmFzZWxpbmU7XG4gICAgbGV0IGRwaTtcbiAgICB3aGlsZSAoYnl0ZXMubGVuZ3RoID49IDQpIHtcbiAgICAgIHR5cCA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgIGlmICh0eXAgPT09IDB4NDk0ODQ0NTIpIHtcbiAgICAgICAgd2lkdGggPSBVdGlsLnJlYWRJbnQzMihieXRlcyk7XG4gICAgICAgIGhlaWdodCA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgLy8gUmVhZCA1IGJ5dGVzLlxuICAgICAgICBVdGlsLnJlYWRJbnQzMihieXRlcyk7XG4gICAgICAgIFV0aWwucmVhZEJ5dGUoYnl0ZXMpO1xuICAgICAgfSBlbHNlIGlmICh0eXAgPT09IDB4NjI2MTUzNDUpIHsgLy8gQmFzZWxpbmU6ICdiYVNFJy5cbiAgICAgICAgYmFzZWxpbmUgPSBVdGlsLnJlYWRJbnQzMihieXRlcyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cCA9PT0gMHg3MDQ4NTk3MykgeyAvLyBEcGlzOiAncEhZcycuXG4gICAgICAgIGRwaSA9IFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICAgICAgZHBpID0gKE1hdGgucm91bmQoZHBpIC8gMzkuMzcpKTtcbiAgICAgICAgVXRpbC5yZWFkSW50MzIoYnl0ZXMpO1xuICAgICAgICBVdGlsLnJlYWRCeXRlKGJ5dGVzKTtcbiAgICAgIH1cbiAgICAgIFV0aWwucmVhZEludDMyKGJ5dGVzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICBhcnIuY3cgPSB3aWR0aDtcbiAgICAgIGFyci5jaCA9IGhlaWdodDtcbiAgICAgIGFyci5kcGkgPSBkcGk7XG4gICAgICBpZiAoYmFzZWxpbmUpIHtcbiAgICAgICAgYXJyLmNiID0gYmFzZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIiwiaW1wb3J0IFRleHRDYWNoZSBmcm9tICcuL3RleHRjYWNoZSc7XG5pbXBvcnQgTWF0aE1MIGZyb20gJy4vbWF0aG1sJztcbmltcG9ydCBTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9zZXJ2aWNlcHJvdmlkZXInO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIExhVGVYIHBhcnNlci4gTWFuYWdlcyB0aGUgc2VydmljZXMgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnRcbiAqIExhVGVYIGludG8gTWF0aE1MIGFuZCBNYXRoTUwgaW50byBMYVRlWC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF0ZXgge1xuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5LlxuICAgKiBSZXR1cm4gbGF0ZXggY2FjaGUuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtDYWNoZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgY2FjaGUoKSB7XG4gICAgcmV0dXJuIExhdGV4Ll9jYWNoZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgcHJvcGVydHkgc2V0dGVyLlxuICAgKiBTZXQgbGF0ZXggY2FjaGUuXG4gICAqIEBwYXJhbSB7Q2FjaGV9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICovXG4gIHN0YXRpYyBzZXQgY2FjaGUodmFsdWUpIHtcbiAgICBMYXRleC5fY2FjaGUgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBNYXRoTUwgdG8gTGFUZVggYnkgY2FsbGluZyBtYXRobWwybGF0ZXggc2VydmljZS4gRm9yIHRleHQgc2VydmljZXNcbiAgICogd2UgY2FsbCBhIHRleHQgc2VydmljZSB3aXRoIHRoZSBwYXJhbSBtYXRobWwybGF0ZXguXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtYXRobWwgLSBNYXRoTUwgU3RyaW5nLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IExhVGVYIHN0cmluZyBnZW5lcmF0ZWQgYnkgdGhlIE1hdGhNTCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBnZXRMYXRleEZyb21NYXRoTUwobWF0aG1sKSB7XG4gICAgY29uc3QgbWF0aG1sV2l0aG91dFNlbWFudGljcyA9IE1hdGhNTC5yZW1vdmVTZW1hbnRpY3MobWF0aG1sKTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VGV4dENhY2hlfVxuICAgICAqL1xuICAgIGNvbnN0IHsgY2FjaGUgfSA9IExhdGV4O1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHNlcnZpY2U6ICdtYXRobWwybGF0ZXgnLFxuICAgICAgbW1sOiBtYXRobWxXaXRob3V0U2VtYW50aWNzLFxuICAgIH07XG5cbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzZXJ2aWNlJywgZGF0YSkpO1xuXG4gICAgLy8gVE9ETzogRXJyb3IgaGFuZGxpbmcuXG4gICAgbGV0IGxhdGV4ID0gJyc7XG5cbiAgICBpZiAoanNvblJlc3BvbnNlLnN0YXR1cyA9PT0gJ29rJykge1xuICAgICAgbGF0ZXggPSBqc29uUmVzcG9uc2UucmVzdWx0LnRleHQ7XG4gICAgICBjb25zdCBsYXRleEh0bWxFbnRpdGllc0VuY29kZWQgPSBVdGlsLmh0bWxFbnRpdGllcyhsYXRleCk7XG4gICAgICAvLyBJbnNlcnRpbmcgTGFUZVggc2VtYW50aWNzLlxuICAgICAgY29uc3QgbWF0aG1sV2l0aFNlbWFudGljcyA9IE1hdGhNTC5hZGRBbm5vdGF0aW9uKG1hdGhtbCwgbGF0ZXhIdG1sRW50aXRpZXNFbmNvZGVkLCAnTGFUZVgnKTtcbiAgICAgIGNhY2hlLnBvcHVsYXRlKGxhdGV4LCBtYXRobWxXaXRoU2VtYW50aWNzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGF0ZXg7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgTGFUZVggdG8gTWF0aE1MIGJ5IGNhbGxpbmcgbGF0ZXgybWF0aG1sIHNlcnZpY2UuIEZvciB0ZXh0IHNlcnZpY2VzXG4gICAqIHdlIGNhbGwgYSB0ZXh0IHNlcnZpY2Ugd2l0aCB0aGUgcGFyYW0gbGF0ZXgybWF0aG1sLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGF0ZXggLSBTdHJpbmcgY29udGFpbmluZyBhIExhVGVYIGZvcm11bGEuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5jbHVkZUxhdGV4T25TZW1hbnRpY3NcbiAgICogLSBJZiB0cnVlIExhVGVYIHdvdWxkIG1lIGluY2x1ZGVkIGludG8gTWF0aE1MIHNlbWFudGljcy5cbiAgICogQHJldHVybiB7U3RyaW5nfSBNYXRoTUwgc3RyaW5nIGdlbmVyYXRlZCBieSB0aGUgTGFUZVggYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWF0aE1MRnJvbUxhdGV4KGxhdGV4LCBpbmNsdWRlTGF0ZXhPblNlbWFudGljcykge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtUZXh0Q2FjaGV9XG4gICAgICovXG4gICAgY29uc3QgbGF0ZXhDYWNoZSA9IExhdGV4LmNhY2hlO1xuXG4gICAgaWYgKExhdGV4LmNhY2hlLmdldChsYXRleCkpIHtcbiAgICAgIHJldHVybiBMYXRleC5jYWNoZS5nZXQobGF0ZXgpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2VydmljZTogJ2xhdGV4Mm1hdGhtbCcsXG4gICAgICBsYXRleCxcbiAgICB9O1xuXG4gICAgaWYgKGluY2x1ZGVMYXRleE9uU2VtYW50aWNzKSB7XG4gICAgICBkYXRhLnNhdmVMYXRleCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ3NlcnZpY2UnLCBkYXRhKSk7XG5cbiAgICBsZXQgb3V0cHV0O1xuICAgIGlmIChqc29uUmVzcG9uc2Uuc3RhdHVzID09PSAnb2snKSB7XG4gICAgICBsZXQgbWF0aG1sID0ganNvblJlc3BvbnNlLnJlc3VsdC50ZXh0O1xuICAgICAgbWF0aG1sID0gbWF0aG1sLnNwbGl0KCdcXHInKS5qb2luKCcnKS5zcGxpdCgnXFxuJykuam9pbignICcpO1xuXG4gICAgICAvLyBQb3B1bGF0ZSBMYXRleENhY2hlLlxuICAgICAgaWYgKG1hdGhtbC5pbmRleE9mKCdzZW1hbnRpY3MnKSA9PT0gLTEgJiYgbWF0aG1sLmluZGV4T2YoJ2Fubm90YXRpb24nKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IFV0aWwuaHRtbEVudGl0aWVzKGxhdGV4KTtcbiAgICAgICAgbWF0aG1sID0gTWF0aE1MLmFkZEFubm90YXRpb24obWF0aG1sLCBjb250ZW50LCAnTGFUZVgnKTtcbiAgICAgICAgb3V0cHV0ID0gbWF0aG1sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gbWF0aG1sO1xuICAgICAgfVxuICAgICAgaWYgKCFsYXRleENhY2hlLmdldChsYXRleCkpIHtcbiAgICAgICAgbGF0ZXhDYWNoZS5wb3B1bGF0ZShsYXRleCwgbWF0aG1sKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0ID0gYCQkJHtsYXRleH0kJGA7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYWxsIG9jY3VycmVuY2VzIG9mIE1hdGhNTCBjb2RlIHRvIExhVGVYLlxuICAgKiBUaGUgTWF0aE1MIGNvZGUgc2hvdWxkIGNvbnRhaW5pbmcgPGFubm90YXRpb24gZW5jb2Rpbmc9XCJMYVRlWFwiLz4gdG8gYmUgY29udmVydGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29udGVudCAtIEEgc3RyaW5nIGNvbnRhaW5pbmcgTWF0aE1MIHZhbGlkIGNvZGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjaGFyYWN0ZXJzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIE1hdGhNTCBhbm5vdGF0ZWQgb2NjdXJyZW5jZXNcbiAgICogcmVwbGFjZWQgYnkgdGhlIGNvcnJlc3BvbmRpbmcgTGFUZVggY29kZS5cbiAgICovXG4gIHN0YXRpYyBwYXJzZU1hdGhtbFRvTGF0ZXgoY29udGVudCwgY2hhcmFjdGVycykge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBjb25zdCBtYXRoVGFnQmVnaW4gPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1tYXRoYDtcbiAgICBjb25zdCBtYXRoVGFnRW5kID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9L21hdGgke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgY29uc3Qgb3BlblRhcmdldCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfWFubm90YXRpb24gZW5jb2Rpbmc9JHtjaGFyYWN0ZXJzLmRvdWJsZVF1b3RlfUxhVGVYJHtjaGFyYWN0ZXJzLmRvdWJsZVF1b3RlfSR7Y2hhcmFjdGVycy50YWdDbG9zZXJ9YDtcbiAgICBjb25zdCBjbG9zZVRhcmdldCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfS9hbm5vdGF0aW9uJHtjaGFyYWN0ZXJzLnRhZ0Nsb3Nlcn1gO1xuICAgIGxldCBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4pO1xuICAgIGxldCBlbmQgPSAwO1xuICAgIGxldCBtYXRobWw7XG4gICAgbGV0IHN0YXJ0QW5ub3RhdGlvbjtcbiAgICBsZXQgY2xvc2VBbm5vdGF0aW9uO1xuXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkge1xuICAgICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgc3RhcnQpO1xuICAgICAgZW5kID0gY29udGVudC5pbmRleE9mKG1hdGhUYWdFbmQsIHN0YXJ0KTtcblxuICAgICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgICAgZW5kID0gY29udGVudC5sZW5ndGggLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kICs9IG1hdGhUYWdFbmQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBtYXRobWwgPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcblxuICAgICAgc3RhcnRBbm5vdGF0aW9uID0gbWF0aG1sLmluZGV4T2Yob3BlblRhcmdldCk7XG4gICAgICBpZiAoc3RhcnRBbm5vdGF0aW9uICE9PSAtMSkge1xuICAgICAgICBzdGFydEFubm90YXRpb24gKz0gb3BlblRhcmdldC5sZW5ndGg7XG4gICAgICAgIGNsb3NlQW5ub3RhdGlvbiA9IG1hdGhtbC5pbmRleE9mKGNsb3NlVGFyZ2V0KTtcbiAgICAgICAgbGV0IGxhdGV4ID0gbWF0aG1sLnN1YnN0cmluZyhzdGFydEFubm90YXRpb24sIGNsb3NlQW5ub3RhdGlvbik7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJzID09PSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMpIHtcbiAgICAgICAgICBsYXRleCA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKGxhdGV4KTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gYCQkJHtsYXRleH0kJGA7XG4gICAgICAgIC8vIFBvcHVsYXRlIGxhdGV4IGludG8gY2FjaGUuXG5cbiAgICAgICAgTGF0ZXguY2FjaGUucG9wdWxhdGUobGF0ZXgsIG1hdGhtbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgKz0gbWF0aG1sO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSBjb250ZW50LmluZGV4T2YobWF0aFRhZ0JlZ2luLCBlbmQpO1xuICAgIH1cblxuICAgIG91dHB1dCArPSBjb250ZW50LnN1YnN0cmluZyhlbmQsIGNvbnRlbnQubGVuZ3RoKTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBsYXRleCBvZiBhIGRldGVybWluZWQgcG9zaXRpb24gaW4gYSB0ZXh0LlxuICAgKiBAcGFyYW0ge05vZGV9IHRleHROb2RlIC0gdGV4dE5vZGUgdG8gZXh0cmFjdCB0aGUgTGFUZVhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNhcmV0UG9zaXRpb24gLSBTdGFydGluZyBwb3NpdGlvbiB0byBmaW5kIExhVGVYLlxuICAgKiBAcGFyYW0ge09iamVjdH0gbGF0ZXhUYWdzIC0gT3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyB0YWdzIGJldHdlZW4gbGF0ZXggaXMgaW5zZXJ0ZWQuXG4gICAqIEl0IGhhcyB0aGUgJ29wZW4nIGF0dHJpYnV0ZSBmb3IgdGhlIG9wZW4gdGFnIGFuZCB0aGUgJ2Nsb3NlJyBhdHRyaWJ1dGUgZm9yIHRoZSBjbG9zZSB0YWcuXG4gICAqIFwiJCRcIiBieSBkZWZhdWx0LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIDMga2V5czogJ2xhdGV4JywgJ3N0YXJ0JyBhbmQgJ2VuZCcuIE51bGwgaWYgbGF0ZXggaXMgbm90IGZvdW5kLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0TGF0ZXhGcm9tVGV4dE5vZGUodGV4dE5vZGUsIGNhcmV0UG9zaXRpb24sIGxhdGV4VGFncykge1xuICAgIC8vIFRPRE86IFNldCBMYVRlWCBUYWdzIGFzIENvcmUgdmFyaWFibGUuIEZpeCB0aGUgY2FsbCB0byB0aGlzIGZ1bmN0aW9uICh0aGlyZCBhcmd1bWVudCkuXG4gICAgLy8gVGFncyB1c2VkIGZvciBMYVRlWCBmb3JtdWxhcy5cbiAgICBjb25zdCBkZWZhdWx0TGF0ZXhUYWdzID0ge1xuICAgICAgb3BlbjogJyQkJyxcbiAgICAgIGNsb3NlOiAnJCQnLFxuICAgIH07XG4gICAgLy8gbGF0ZXhUYWdzIGlzIGFuIG9wdGlvbmFsIHBhcmFtZXRlci4gSWYgaXMgbm90IHNldCwgdXNlIGRlZmF1bHQgbGF0ZXhUYWdzLlxuICAgIGlmICh0eXBlb2YgbGF0ZXhUYWdzID09PSAndW5kZWZpbmVkJyB8fCBsYXRleFRhZ3MgPT0gbnVsbCkge1xuICAgICAgbGF0ZXhUYWdzID0gZGVmYXVsdExhdGV4VGFncztcbiAgICB9XG4gICAgLy8gTG9va2luZyBmb3IgdGhlIGZpcnN0IHRleHROb2RlLlxuICAgIGxldCBzdGFydE5vZGUgPSB0ZXh0Tm9kZTtcblxuICAgIHdoaWxlIChzdGFydE5vZGUucHJldmlvdXNTaWJsaW5nICYmIHN0YXJ0Tm9kZS5wcmV2aW91c1NpYmxpbmcubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgc3RhcnROb2RlID0gc3RhcnROb2RlLnByZXZpb3VzU2libGluZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IGxhdGV4IHBvc2l0aW9uIGFuZCBub2RlIGZyb20gYSBzcGVjaWZpYyBub2RlIGFuZCBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0ge05vZGV9IGN1cnJlbnROb2RlIC0gTm9kZSB3aGVyZSBzZWFyY2hpbmcgbGF0ZXguXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGN1cnJlbnRQb3NpdGlvbiAtIEN1cnJlbnQgcG9zaXRpb24gaW5zaWRlIHRoZSBjdXJyZW50Tm9kZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGF0ZXhUYWdzVG9Vc2UgLSBUYWdzIHVzZWQgYXQgbGF0ZXggYmVnaW5uaW5nIGFuZCBsYXRleCBmaW5hbC5cbiAgICAgKiBcIiQkXCIgYnkgZGVmYXVsdC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRhZyAtIFRhZyBjb250YWluaW5nIHRoZSBjdXJyZW50IHNlYXJjaC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgY3VycmVudCBub2RlIGFuZCB0aGUgcG9zaXRpb24uXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TmV4dExhdGV4UG9zaXRpb24oY3VycmVudE5vZGUsIGN1cnJlbnRQb3NpdGlvbiwgdGFnKSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSBjdXJyZW50Tm9kZS5ub2RlVmFsdWUuaW5kZXhPZih0YWcsIGN1cnJlbnRQb3NpdGlvbik7XG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0U2libGluZztcblxuICAgICAgICBpZiAoIWN1cnJlbnROb2RlKSB7IC8vIFRFWFRfTk9ERS5cbiAgICAgICAgICByZXR1cm4gbnVsbDsgLy8gTm90IGZvdW5kLlxuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb24gPSBjdXJyZW50Tm9kZS5ub2RlVmFsdWUgPyBjdXJyZW50Tm9kZS5ub2RlVmFsdWUuaW5kZXhPZihsYXRleFRhZ3MuY2xvc2UpIDogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IGN1cnJlbnROb2RlLFxuICAgICAgICBwb3NpdGlvbixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUgaXMgcHJldmlvdXMsIG9yIG5vdCwgdG8gYSBzZWNvbmQgb25lLlxuICAgICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAtIFN0YXJ0IG5vZGUuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gU3RhcnQgbm9kZSBwb3NpdGlvbi5cbiAgICAgKiBAcGFyYW0ge05vZGV9IGVuZE5vZGUgLSBFbmQgbm9kZS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZW5kUG9zaXRpb24gLSBFbmQgbm9kZSBwb3NpdGlvbi5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3RhcnRpbmcgbm9kZSBpcyBwcmV2aW91cyB0aGFudCB0aGUgZW4gbm9kZS4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzUHJldmlvdXMobm9kZSwgcG9zaXRpb24sIGVuZE5vZGUsIGVuZFBvc2l0aW9uKSB7XG4gICAgICBpZiAobm9kZSA9PT0gZW5kTm9kZSkge1xuICAgICAgICByZXR1cm4gKHBvc2l0aW9uIDw9IGVuZFBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChub2RlICYmIG5vZGUgIT09IGVuZE5vZGUpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobm9kZSA9PT0gZW5kTm9kZSk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0O1xuICAgIGxldCBlbmQgPSB7XG4gICAgICBub2RlOiBzdGFydE5vZGUsXG4gICAgICBwb3NpdGlvbjogMCxcbiAgICB9O1xuICAgIC8vIElzIHN1cHBvc2VkIHRoYXQgb3BlbiBhbmQgY2xvc2UgdGFncyBoYXMgdGhlIHNhbWUgbGVuZ3RoLlxuICAgIGNvbnN0IHRhZ0xlbmd0aCA9IGxhdGV4VGFncy5vcGVuLmxlbmd0aDtcbiAgICBkbyB7XG4gICAgICBzdGFydCA9IGdldE5leHRMYXRleFBvc2l0aW9uKGVuZC5ub2RlLCBlbmQucG9zaXRpb24sIGxhdGV4VGFncy5vcGVuKTtcblxuICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgaXNQcmV2aW91cyh0ZXh0Tm9kZSwgY2FyZXRQb3NpdGlvbiwgc3RhcnQubm9kZSwgc3RhcnQucG9zaXRpb24pKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBlbmQgPSBnZXROZXh0TGF0ZXhQb3NpdGlvbihzdGFydC5ub2RlLCBzdGFydC5wb3NpdGlvbiArIHRhZ0xlbmd0aCwgbGF0ZXhUYWdzLmNsb3NlKTtcblxuICAgICAgaWYgKGVuZCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBlbmQucG9zaXRpb24gKz0gdGFnTGVuZ3RoO1xuICAgIH0gd2hpbGUgKGlzUHJldmlvdXMoZW5kLm5vZGUsIGVuZC5wb3NpdGlvbiwgdGV4dE5vZGUsIGNhcmV0UG9zaXRpb24pKTtcblxuICAgIC8vIElzb2xhdGluZyBsYXRleC5cbiAgICBsZXQgbGF0ZXg7XG5cbiAgICBpZiAoc3RhcnQubm9kZSA9PT0gZW5kLm5vZGUpIHtcbiAgICAgIGxhdGV4ID0gc3RhcnQubm9kZS5ub2RlVmFsdWUuc3Vic3RyaW5nKHN0YXJ0LnBvc2l0aW9uICsgdGFnTGVuZ3RoLCBlbmQucG9zaXRpb24gLSB0YWdMZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXJ0LnBvc2l0aW9uICsgdGFnTGVuZ3RoO1xuICAgICAgbGF0ZXggPSBzdGFydC5ub2RlLm5vZGVWYWx1ZS5zdWJzdHJpbmcoaW5kZXgsIHN0YXJ0Lm5vZGUubm9kZVZhbHVlLmxlbmd0aCk7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSBzdGFydC5ub2RlO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZSA9PT0gZW5kLm5vZGUpIHtcbiAgICAgICAgICBsYXRleCArPSBlbmQubm9kZS5ub2RlVmFsdWUuc3Vic3RyaW5nKDAsIGVuZC5wb3NpdGlvbiAtIHRhZ0xlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGF0ZXggKz0gY3VycmVudE5vZGUubm9kZVZhbHVlID8gY3VycmVudE5vZGUubm9kZVZhbHVlIDogJyc7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKGN1cnJlbnROb2RlICE9PSBlbmQubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdGV4LFxuICAgICAgc3RhcnROb2RlOiBzdGFydC5ub2RlLFxuICAgICAgc3RhcnRQb3NpdGlvbjogc3RhcnQucG9zaXRpb24sXG4gICAgICBlbmROb2RlOiBlbmQubm9kZSxcbiAgICAgIGVuZFBvc2l0aW9uOiBlbmQucG9zaXRpb24sXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFRleHQgY2FjaGUuIFN0b3JlcyBhbGwgcHJvY2Vzc2VkIExhVGVYIHN0cmluZ3MgYW5kIGl0J3MgY29ycmVzcG9uZGVudCBNYXRoTUwgc3RyaW5nLlxuICogQHR5cGUge0NhY2hlfVxuICogQHN0YXRpY1xuICovXG5MYXRleC5fY2FjaGUgPSBuZXcgVGV4dENhY2hlKCk7XG4iLCIvKipcbiAqIFRoaXMgb2JqZWN0IHJlcHJlc2VudHMgYSBjdXN0b20gbGlzdGVuZXIuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMaXN0ZW5lclxuICogQHByb3BlcnR5IHtTdHJpbmd9IExpc3RlbmVyLmV2ZW50TmFtZSAtIFRoZSBsaXN0ZW5lciBuYW1lLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gTGlzdGVuZXIuY2FsbGJhY2sgLSBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdGVuZXJzIHtcbiAgLyoqXG4gICAqIEBjbGFzc2Rlc2NcbiAgICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgY3VzdG9tIGxpc3RlbmVycyBtYW5hZ2VyLlxuICAgKiBAY29uc3RydWN0c1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQXJyYXkgY29udGFpbmluZyBhbGwgY3VzdG9tIGxpc3RlbmVycy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0W119XG4gICAgICovXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciB0byBMaXN0ZW5lciBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBvYmplY3QuXG4gICAqL1xuICBhZGQobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBNYXRoVHlwZSBldmVudCBsaXN0ZW5lcnNcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSAtIGV2ZW50IG5hbWVcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBldmVudCBvYmplY3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIGlmIGV2ZW50IGhhcyBiZWVuIHByZXZlbnRlZC4gdHJ1ZSBvdGhlcndpc2UuXG4gICAqL1xuICBmaXJlKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aCAmJiAhZXZlbnQuY2FuY2VsbGVkOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RlbmVyc1tpXS5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkge1xuICAgICAgICAvLyBDYWxsaW5nIGxpc3RlbmVyLlxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXS5jYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBldmVudC5kZWZhdWx0UHJldmVudGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgbGlzdGVuZXIgb2JqZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gRXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBsaXN0ZW5lciBvYmplY3QuXG4gICAqL1xuICBzdGF0aWMgbmV3TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGxpc3RlbmVyID0ge307XG4gICAgbGlzdGVuZXIuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgIGxpc3RlbmVyLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgY2xhc3MgdG8gbWFuYWdlIE1hdGhNTCBvYmplY3RzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRoTUwge1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBtYXRobWwgYXQgcG9zaXRpb24gaSBpcyBpbnNpZGUgYW4gSFRNTCBhdHRyaWJ1dGUgb3Igbm90LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIGEgc3RyaW5nIGNvbnRhaW5pbmcgTWF0aE1MIGNvZGUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpIC0gIHNlYXJjaCBpbmRleC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBpcyBpbnNpZGUgYW4gSFRNTCBhdHRyaWJ1dGUuIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIHN0YXRpYyBpc01hdGhtbEluQXR0cmlidXRlKGNvbnRlbnQsIGkpIHtcbiAgICAvLyBSZWdleCA9XG4gICAgLy8gJ15bXFwnXCJdW1xcXFxzXSo9W1xcXFxzXSpbXFxcXHctXSsoW1xcXFxzXSooXCJbXlwiXSpcInxcXCdbXlxcJ10qXFwnKVtcXFxcc10qXG4gICAgLy8gPVtcXFxcc10qW1xcXFx3LV0rW1xcXFxzXSopKltcXFxcc10rZ21pPCc7XG4gICAgY29uc3QgbWF0aEF0dCA9ICdbXFwnXCJdW1xcXFxzXSo9W1xcXFxzXSpbXFxcXHctXSsnOyAvLyBcIj1hdHQgT1IgJz1hdHRcbiAgICBjb25zdCBhdHRDb250ZW50ID0gJ1wiW15cIl0qXCJ8XFwnW15cXCddKlxcJyc7IC8vIFwiYmxhYmxhXCIgT1IgJ2JsYWJsYSdcbiAgICBjb25zdCBhdHQgPSBgW1xcXFxzXSooJHthdHRDb250ZW50fSlbXFxcXHNdKj1bXFxcXHNdKltcXFxcdy1dK1tcXFxcc10qYDsgLy8gXCJibGFibGFcIj1hdHQgT1IgJ2JsYWJsYSc9YXR0XG4gICAgY29uc3QgYXR0cyA9IGAoJyR7YXR0fScpKmA7IC8vIFwiYmxhYmxhXCI9YXR0MSBcImJsYWJsYVwiPWF0dDJcbiAgICBjb25zdCByZWdleCA9IGBeJHttYXRoQXR0fSR7YXR0c31bXFxcXHNdK2dtaTxgOyAvLyBcIj1hdHQgXCJibGFibGFcIj1hdHQxIFwiYmxhYmxhXCI9YXR0MiBnbWk8IC5cbiAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IFJlZ0V4cChyZWdleCk7XG5cbiAgICBjb25zdCBhY3R1YWxDb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoMCwgaSk7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSBhY3R1YWxDb250ZW50LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgY29uc3QgZXhpc3RzID0gZXhwcmVzc2lvbi50ZXN0KHJldmVyc2VkKTtcblxuICAgIHJldHVybiBleGlzdHM7XG4gIH1cblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIE1hdGhNTCB3aXRoIHN0YW5kYXJkIFhNTCB0YWdzLlxuICAgKiBXZSB1c2UgdGhlc2UgZW50aXRpZXMgYmVjYXVzZSBJRSBkb2Vzbid0IHN1cHBvcnQgaHRtbCBlbnRpdGllc1xuICAgKiBvbiBpdHMgYXR0cmlidXRlcyBzb21ldGltZXMuIFllcywgc29tZXRpbWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgLSBzdHJpbmcgdG8gYmUgZGVjb2RlZC5cbiAgICogQHJldHVybiB7c3RyaW5nfSBkZWNvZGVkIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyBzYWZlWG1sRGVjb2RlKGlucHV0KSB7XG4gICAgbGV0IHsgdGFnT3BlbmVyIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcztcbiAgICBsZXQgeyB0YWdDbG9zZXIgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIGxldCB7IGRvdWJsZVF1b3RlIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcztcbiAgICBsZXQgeyByZWFsRG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVyc0VudGl0aWVzO1xuICAgIC8vIERlY29kaW5nIGVudGl0aWVzLlxuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnT3BlbmVyKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnQ2xvc2VyKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy50YWdDbG9zZXIpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoZG91YmxlUXVvdGUpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICAvLyBBZGRlZCB0byBmaXggcHJvYmxlbSBkdWUgdG8gaW1wb3J0IGZyb20gMS45LnguXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChyZWFsRG91YmxlUXVvdGUpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLnJlYWxEb3VibGVRdW90ZSk7XG5cbiAgICAvLyBCbGFja2JvYXJkLlxuICAgIGNvbnN0IHsgbHRFbGVtZW50IH0gPSBDb25zdGFudHMuc2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgZ3RFbGVtZW50IH0gPSBDb25zdGFudHMuc2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgYW1wRWxlbWVudCB9ID0gQ29uc3RhbnRzLnNhZmVCYWRCbGFja2JvYXJkQ2hhcmFjdGVycztcbiAgICBpZiAoJ193cnNfYmxhY2tib2FyZCcgaW4gd2luZG93ICYmIHdpbmRvdy5fd3JzX2JsYWNrYm9hcmQpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQuc3BsaXQobHRFbGVtZW50KS5qb2luKENvbnN0YW50cy5zYWZlR29vZEJsYWNrYm9hcmRDaGFyYWN0ZXJzLmx0RWxlbWVudCk7XG4gICAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGd0RWxlbWVudCkuam9pbihDb25zdGFudHMuc2FmZUdvb2RCbGFja2JvYXJkQ2hhcmFjdGVycy5ndEVsZW1lbnQpO1xuICAgICAgaW5wdXQgPSBpbnB1dC5zcGxpdChhbXBFbGVtZW50KS5qb2luKENvbnN0YW50cy5zYWZlR29vZEJsYWNrYm9hcmRDaGFyYWN0ZXJzLmFtcEVsZW1lbnQpO1xuICAgIH1cblxuICAgICh7IHRhZ09wZW5lciB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzKTtcbiAgICAoeyB0YWdDbG9zZXIgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgKHsgZG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycyk7XG4gICAgKHsgcmVhbERvdWJsZVF1b3RlIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMpO1xuICAgIGNvbnN0IHsgYW1wZXJzYW5kIH0gPSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyBxdW90ZSB9ID0gQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzO1xuXG4gICAgLy8gRGVjb2RpbmcgY2hhcmFjdGVycy5cbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KHRhZ09wZW5lcikuam9pbihDb25zdGFudHMueG1sQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnQ2xvc2VyKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLnRhZ0Nsb3Nlcik7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChkb3VibGVRdW90ZSkuam9pbihDb25zdGFudHMueG1sQ2hhcmFjdGVycy5kb3VibGVRdW90ZSk7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdChhbXBlcnNhbmQpLmpvaW4oQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMuYW1wZXJzYW5kKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KHF1b3RlKS5qb2luKENvbnN0YW50cy54bWxDaGFyYWN0ZXJzLnF1b3RlKTtcblxuICAgIC8vIFdlIGFyZSByZXBsYWNpbmcgJCBieSAmIHdoZW4gaXRzIHBhcnQgb2YgYW4gZW50aXR5IGZvciByZXRyby1jb21wYXRpYmlsaXR5LlxuICAgIC8vIE5vdywgdGhlIHN0YW5kYXJkIGlzIHJlcGxhY2UgwqcgYnkgJi5cbiAgICBsZXQgcmV0dXJuVmFsdWUgPSAnJztcbiAgICBsZXQgY3VycmVudEVudGl0eSA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGFyYWN0ZXIgPSBpbnB1dC5jaGFyQXQoaSk7XG4gICAgICBpZiAoY3VycmVudEVudGl0eSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICckJykge1xuICAgICAgICAgIGN1cnJlbnRFbnRpdHkgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSAnOycpIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gYCYke2N1cnJlbnRFbnRpdHl9YDtcbiAgICAgICAgY3VycmVudEVudGl0eSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlci5tYXRjaCgvKFthLXpBLVowLTkjLl8tXSB8ICctJykvKSkgeyAvLyBDaGFyYWN0ZXIgaXMgcGFydCBvZiBhbiBlbnRpdHkuXG4gICAgICAgIGN1cnJlbnRFbnRpdHkgKz0gY2hhcmFjdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgKz0gYCQke2N1cnJlbnRFbnRpdHl9YDsgLy8gSXMgbm90IGFuIGVudGl0eS5cbiAgICAgICAgY3VycmVudEVudGl0eSA9IG51bGw7XG4gICAgICAgIGkgLT0gMTsgLy8gUGFyc2UgYWdhaW4gdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgTWF0aE1MIHdpdGggc3RhbmRhcmQgWE1MIHRhZ3MgdG8gYSBNTWF0aE1MIGVuY29kZWQgd2l0aCBzYWZlIFhNTCB0YWdzLlxuICAgKiBXZSB1c2UgdGhlc2UgZW50aXRpZXMgYmVjYXVzZSBJRSBkb2Vzbid0IHN1cHBvcnQgaHRtbCBlbnRpdGllcyBvbiBpdHMgYXR0cmlidXRlcyBzb21ldGltZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAtIGlucHV0IHN0cmluZyB0byBiZSBlbmNvZGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGVuY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgc3RhdGljIHNhZmVYbWxFbmNvZGUoaW5wdXQpIHtcbiAgICBjb25zdCB7IHRhZ09wZW5lciB9ID0gQ29uc3RhbnRzLnhtbENoYXJhY3RlcnM7XG4gICAgY29uc3QgeyB0YWdDbG9zZXIgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgZG91YmxlUXVvdGUgfSA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzO1xuICAgIGNvbnN0IHsgYW1wZXJzYW5kIH0gPSBDb25zdGFudHMueG1sQ2hhcmFjdGVycztcbiAgICBjb25zdCB7IHF1b3RlIH0gPSBDb25zdGFudHMueG1sQ2hhcmFjdGVycztcblxuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnT3BlbmVyKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy50YWdPcGVuZXIpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQodGFnQ2xvc2VyKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy50YWdDbG9zZXIpO1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoZG91YmxlUXVvdGUpLmpvaW4oQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLmRvdWJsZVF1b3RlKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KGFtcGVyc2FuZCkuam9pbihDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuYW1wZXJzYW5kKTtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KHF1b3RlKS5qb2luKENvbnN0YW50cy5zYWZlWG1sQ2hhcmFjdGVycy5xdW90ZSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgc3BlY2lhbCBzeW1ib2xzICg+IDEyOCkgdG8gZW50aXRpZXMgYW5kIHJlcGxhY2VzIGFsbCB0ZXh0dWFsXG4gICAqIGVudGl0aWVzIGJ5IGl0cyBudW1iZXIgZW50aXRpZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRobWwgLSBNYXRoTUwgc3RyaW5nIGNvbnRhaW5pbmcgLSBvciBub3QgLSBzcGVjaWFsIHN5bWJvbHNcbiAgICogQHJldHVybnMge3N0cmluZ30gTWF0aE1MIHdpdGggYWxsIHRleHR1YWwgZW50aXRpZXMgcmVwbGFjZWQuXG4gICAqL1xuICBzdGF0aWMgbWF0aE1MRW50aXRpZXMobWF0aG1sKSB7XG4gICAgbGV0IHRvUmV0dXJuID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGhtbC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hhcmFjdGVyID0gbWF0aG1sLmNoYXJBdChpKTtcblxuICAgICAgLy8gUGFyc2luZyA+IDEyOCBjaGFyYWN0ZXJzLlxuICAgICAgaWYgKG1hdGhtbC5jb2RlUG9pbnRBdChpKSA+IDEyOCkge1xuICAgICAgICB0b1JldHVybiArPSBgJiMke21hdGhtbC5jb2RlUG9pbnRBdChpKX07YDtcbiAgICAgICAgLy8gRm9yIFVURi0zMiBjaGFyYWN0ZXJzIHdlIG5lZWQgdG8gbW92ZSB0aGUgaW5kZXggb25lIHBvc2l0aW9uLlxuICAgICAgICBpZiAobWF0aG1sLmNvZGVQb2ludEF0KGkpID4gMHhmZmZmKSB7XG4gICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gJyYnKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IG1hdGhtbC5pbmRleE9mKCc7JywgaSArIDEpO1xuICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IG1hdGhtbC5zdWJzdHJpbmcoaSwgZW5kICsgMSk7XG4gICAgICAgICAgdG9SZXR1cm4gKz0gYCYjJHtVdGlsLmZpeGVkQ2hhckNvZGVBdCgoY29udGFpbmVyLnRleHRDb250ZW50IHx8IGNvbnRhaW5lci5pbm5lclRleHQpLCAwKX07YDtcbiAgICAgICAgICBpID0gZW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvUmV0dXJuICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9SZXR1cm4gKz0gY2hhcmFjdGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1JldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gZWRpdG9yIG5hbWUgd2l0aCB0aGUgcHJlZml4IHdyc18gdG8gYSBNYXRoTUwgY2xhc3MgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gYSBNYXRoTUwgc3RyaW5nIGNyZWF0ZWQgd2l0aCBhIGN1c3RvbSBlZGl0b3IsIGxpa2UgY2hlbWlzdHJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VzdG9tRWRpdG9yIC0gY3VzdG9tIGVkaXRvciBuYW1lLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBNYXRoTUwgc3RyaW5nIHdpdGggaGlzIGNsYXNzIGNvbnRhaW5pbmcgdGhlIGVkaXRvciB0b29sYmFyIHN0cmluZy5cbiAgICovXG4gIHN0YXRpYyBhZGRDdXN0b21FZGl0b3JDbGFzc0F0dHJpYnV0ZShtYXRobWwsIGN1c3RvbUVkaXRvcikge1xuICAgIGxldCB0b1JldHVybiA9ICcnO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBtYXRobWwuaW5kZXhPZignPG1hdGgnKTtcbiAgICBpZiAoc3RhcnQgPT09IDApIHtcbiAgICAgIGNvbnN0IGVuZCA9IG1hdGhtbC5pbmRleE9mKCc+Jyk7XG4gICAgICBpZiAobWF0aG1sLmluZGV4T2YoJ2NsYXNzJykgPT09IC0xKSB7XG4gICAgICAgIC8vIEFkZGluZyBjdXN0b20gZWRpdG9yIHR5cGUuXG4gICAgICAgIHRvUmV0dXJuID0gYCR7bWF0aG1sLnN1YnN0cihzdGFydCwgZW5kKX0gY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCI+YDtcbiAgICAgICAgdG9SZXR1cm4gKz0gbWF0aG1sLnN1YnN0cihlbmQgKyAxLCBtYXRobWwubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0aG1sO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGN1c3RvbSBlZGl0b3IgbmFtZSBmcm9tIHRoZSBNYXRoTUwgY2xhc3MgYXR0cmlidXRlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gYSBNYXRoTUwgc3RyaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY3VzdG9tRWRpdG9yIC0gY3VzdG9tIGVkaXRvciBuYW1lLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaW5wdXQgTWF0aE1MIHdpdGhvdXQgY3VzdG9tRWRpdG9yIG5hbWUgaW4gaGlzIGNsYXNzLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZUN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlKG1hdGhtbCwgY3VzdG9tRWRpdG9yKSB7XG4gICAgLy8gRGlzY2FyZCBNYXRoTUwgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGNsYXNzLlxuICAgIGlmIChtYXRobWwuaW5kZXhPZignY2xhc3MnKSA9PT0gLTEgfHwgbWF0aG1sLmluZGV4T2YoYHdyc18ke2N1c3RvbUVkaXRvcn1gKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBtYXRobWw7XG4gICAgfVxuXG4gICAgLy8gVHJpdmlhbCBjYXNlOiBjbGFzcyBhdHRyaWJ1dGUgdmFsdWUgZXF1YWwgdG8gZWRpdG9yIG5hbWUuIFRoZW5cbiAgICAvLyBjbGFzcyBhdHRyaWJ1dGUgaXMgcmVtb3ZlZC5cbiAgICAvLyBGaXJzdCB0cnkgdG8gcmVtb3ZlIGl0IHdpdGggYSBzcGFjZSBiZWZvcmUgaWYgdGhlcmUgaXMgb25lXG4gICAgLy8gT3RoZXJ3aXNlIHdpdGhvdXQgdGhlIHNwYWNlXG4gICAgaWYgKG1hdGhtbC5pbmRleE9mKGAgY2xhc3M9XCJ3cnNfJHtjdXN0b21FZGl0b3J9XCJgKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBtYXRobWwucmVwbGFjZShgIGNsYXNzPVwid3JzXyR7Y3VzdG9tRWRpdG9yfVwiYCwgJycpO1xuICAgIH0gZWxzZSBpZiAobWF0aG1sLmluZGV4T2YoYGNsYXNzPVwid3JzXyR7Y3VzdG9tRWRpdG9yfVwiYCkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gbWF0aG1sLnJlcGxhY2UoYGNsYXNzPVwid3JzXyR7Y3VzdG9tRWRpdG9yfVwiYCwgJycpO1xuICAgIH1cblxuICAgIC8vIE5vbiBUcml2aWFsIGNhc2U6IGNsYXNzIGF0dHJpYnV0ZSBjb250YWlucyBlZGl0b3IgbmFtZS5cbiAgICByZXR1cm4gbWF0aG1sLnJlcGxhY2UoYHdyc18ke2N1c3RvbUVkaXRvcn1gLCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbm5vdGF0aW9uIHRhZyBpbiBNYXRoTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hdGhtbCAtIHZhbGlkIE1hdGhNTC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnQgLSB2YWx1ZSB0byBwdXQgaW5zaWRlIGFubm90YXRpb24gdGFnLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYW5ub3RhdGlvbkVuY29kaW5nIC0gYW5ub3RhdGlvbiBlbmNvZGluZy5cbiAgICogQHJldHVybnMge1N0cmluZ30gLSAnbWF0aG1sJyB3aXRoIGFuIGFubm90YXRpb24gdGhhdCBjb250YWluc1xuICAgKiAnY29udGVudCcgYW5kIGVuY29kaW5nICdlbmNvZGluZycuXG4gICAqL1xuICBzdGF0aWMgYWRkQW5ub3RhdGlvbihtYXRobWwsIGNvbnRlbnQsIGFubm90YXRpb25FbmNvZGluZykge1xuICAgIC8vIElmIGNvbnRhaW5zIGFubm90YXRpb24sIGFsc28gY29udGFpbnMgc2VtYW50aWNzIHRhZy5cbiAgICBjb25zdCBjb250YWluc0Fubm90YXRpb24gPSBtYXRobWwuaW5kZXhPZignPGFubm90YXRpb24nKTtcblxuICAgIGxldCBtYXRobWxXaXRoQW5ub3RhdGlvbiA9ICcnO1xuICAgIGlmIChjb250YWluc0Fubm90YXRpb24gIT09IC0xKSB7XG4gICAgICBjb25zdCBjbG9zZVNlbWFudGljc0luZGV4ID0gbWF0aG1sLmluZGV4T2YoJzwvc2VtYW50aWNzPicpO1xuICAgICAgbWF0aG1sV2l0aEFubm90YXRpb24gPSBgJHttYXRobWwuc3Vic3RyaW5nKDAsIGNsb3NlU2VtYW50aWNzSW5kZXgpfTxhbm5vdGF0aW9uIGVuY29kaW5nPVwiJHthbm5vdGF0aW9uRW5jb2Rpbmd9XCI+JHtjb250ZW50fTwvYW5ub3RhdGlvbj4ke21hdGhtbC5zdWJzdHJpbmcoY2xvc2VTZW1hbnRpY3NJbmRleCl9YDtcbiAgICB9IGVsc2UgaWYgKE1hdGhNTC5pc0VtcHR5KG1hdGhtbCkpIHtcbiAgICAgIGNvbnN0IGVuZEluZGV4SW5saW5lID0gbWF0aG1sLmluZGV4T2YoJy8+Jyk7XG4gICAgICBjb25zdCBlbmRJbmRleE5vbklubGluZSA9IG1hdGhtbC5pbmRleE9mKCc+Jyk7XG4gICAgICBjb25zdCBlbmRJbmRleCA9IGVuZEluZGV4Tm9uSW5saW5lID09PSBlbmRJbmRleElubGluZSA/IGVuZEluZGV4SW5saW5lIDogZW5kSW5kZXhOb25JbmxpbmU7XG4gICAgICBtYXRobWxXaXRoQW5ub3RhdGlvbiA9IGAke21hdGhtbC5zdWJzdHJpbmcoMCwgZW5kSW5kZXgpfT48c2VtYW50aWNzPjxhbm5vdGF0aW9uIGVuY29kaW5nPVwiJHthbm5vdGF0aW9uRW5jb2Rpbmd9XCI+JHtjb250ZW50fTwvYW5ub3RhdGlvbj48L3NlbWFudGljcz48L21hdGg+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYmVnaW5NYXRoTUxDb250ZW50ID0gbWF0aG1sLmluZGV4T2YoJz4nKSArIDE7XG4gICAgICBjb25zdCBlbmRNYXRobWxDb250ZW50ID0gbWF0aG1sLmxhc3RJbmRleE9mKCc8L21hdGg+Jyk7XG4gICAgICBjb25zdCBtYXRobWxDb250ZW50ID0gbWF0aG1sLnN1YnN0cmluZyhiZWdpbk1hdGhNTENvbnRlbnQsIGVuZE1hdGhtbENvbnRlbnQpO1xuICAgICAgbWF0aG1sV2l0aEFubm90YXRpb24gPSBgJHttYXRobWwuc3Vic3RyaW5nKDAsIGJlZ2luTWF0aE1MQ29udGVudCl9PHNlbWFudGljcz48bXJvdz4ke21hdGhtbENvbnRlbnR9PC9tcm93Pjxhbm5vdGF0aW9uIGVuY29kaW5nPVwiJHthbm5vdGF0aW9uRW5jb2Rpbmd9XCI+JHtjb250ZW50fTwvYW5ub3RhdGlvbj48L3NlbWFudGljcz48L21hdGg+YDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGhtbFdpdGhBbm5vdGF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc3BlY2lmaWMgYW5ub3RhdGlvbiB0YWcgaW4gTWF0aE1MIGVsZW1lbnQuXG4gICAqIEluIGNhc2Ugb2YgcmVtb3ZlIHRoZSB1bmlxdWUgYW5ub3RhdGlvbiwgYWxzbyBpcyByZW1vdmVkIHNlbWFudGljcyB0YWcuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtYXRobWwgLSB2YWxpZCBNYXRoTUwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbm5vdGF0aW9uRW5jb2RpbmcgLSBhbm5vdGF0aW9uIGVuY29kaW5nIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge1N0cmluZ30gLSAnbWF0aG1sJyB3aXRob3V0IHRoZSBhbm5vdGF0aW9uIGVuY29kaW5nIHNwZWNpZmllZC5cbiAgICovXG4gIHN0YXRpYyByZW1vdmVBbm5vdGF0aW9uKG1hdGhtbCwgYW5ub3RhdGlvbkVuY29kaW5nKSB7XG4gICAgbGV0IG1hdGhtbFdpdGhvdXRBbm5vdGF0aW9uID0gbWF0aG1sO1xuICAgIGNvbnN0IG9wZW5Bbm5vdGF0aW9uVGFnID0gYDxhbm5vdGF0aW9uIGVuY29kaW5nPVwiJHthbm5vdGF0aW9uRW5jb2Rpbmd9XCI+YDtcbiAgICBjb25zdCBjbG9zZUFubm90YXRpb25UYWcgPSAnPC9hbm5vdGF0aW9uPic7XG4gICAgY29uc3Qgc3RhcnRBbm5vdGF0aW9uSW5kZXggPSBtYXRobWwuaW5kZXhPZihvcGVuQW5ub3RhdGlvblRhZyk7XG4gICAgaWYgKHN0YXJ0QW5ub3RhdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgbGV0IGRpZmZlcmVudEFubm90YXRpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgbGV0IGRpZmZlcmVudEFubm90YXRpb25JbmRleCA9IG1hdGhtbC5pbmRleE9mKCc8YW5ub3RhdGlvbicpO1xuICAgICAgd2hpbGUgKGRpZmZlcmVudEFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRpZmZlcmVudEFubm90YXRpb25JbmRleCAhPT0gc3RhcnRBbm5vdGF0aW9uSW5kZXgpIHtcbiAgICAgICAgICBkaWZmZXJlbnRBbm5vdGF0aW9uRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRpZmZlcmVudEFubm90YXRpb25JbmRleCA9IG1hdGhtbC5pbmRleE9mKCc8YW5ub3RhdGlvbicsIGRpZmZlcmVudEFubm90YXRpb25JbmRleCArIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlmZmVyZW50QW5ub3RhdGlvbkZvdW5kKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlSW5kZXggPSBtYXRobWwuaW5kZXhPZihjbG9zZUFubm90YXRpb25UYWcsIHN0YXJ0QW5ub3RhdGlvbkluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kQW5ub3RhdGlvbkluZGV4ID0gY2xvc2VJbmRleCArIGNsb3NlQW5ub3RhdGlvblRhZy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBtYXRobWwuc3Vic3RyaW5nKDAsIHN0YXJ0QW5ub3RhdGlvbkluZGV4KTtcbiAgICAgICAgbWF0aG1sV2l0aG91dEFubm90YXRpb24gPSBzdGFydEluZGV4ICsgbWF0aG1sLnN1YnN0cmluZyhlbmRBbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0aG1sV2l0aG91dEFubm90YXRpb24gPSBNYXRoTUwucmVtb3ZlU2VtYW50aWNzKG1hdGhtbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGhtbFdpdGhvdXRBbm5vdGF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgc2VtYW50aWNzIHRhZyB0byBtYXRobWwuXG4gICAqIFdoZW4gdXNpbmcgSGFuZCB0byBjcmVhdGUgZm9ybXVsYXMsIGl0IGFkZHMgdGhlIG1yb3cgdGFnIGR1ZSB0byB0aGUgc2VtYW50aWNzIG9uZSwgdGhpcyBvbmUgaXMgYWxzbyByZW1vdmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gTWF0aE1MIHN0cmluZy5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSAnbWF0aG1sJyB3aXRob3V0IHNlbWFudGljcyB0YWcuXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlU2VtYW50aWNzKG1hdGhtbCkge1xuICAgIC8vIElmIGBtcm93YCBpcyBmb3VuZCByaWdodCBiZWZvcmUgdGhlIGBzZW1hbnRpY3NgIHN0YXJ0aW5nIHRhZywgaXQncyByZW1vdmVkIGFzIHdlbGwgXG4gICAgY29uc3Qgc2VtYW50aWNzU3RhcnRpbmdUYWdSZWdleCA9IC88c2VtYW50aWNzPlxccyo/KDxtcm93Pik/L2dtO1xuXG4gICAgLy8gSWYgYG1yb3dgIGlzIGZvdW5kIHJpZ2h0IGFmdGVyIHRoZSBgYW5ub3RhdGlvbmAgZW5kaW5nIHRhZywgaXQncyByZW1vdmVkIGFzIHdlbGxcbiAgICAvLyBhbG9uZ3NpZGUgYHNlbWFudGljc2AgY2xvc2luZyB0YWcgYW5kIHRoZSB3aG9sZSBgYW5ub3RhdGlvbmAgdGFnIGFuZCBpdHMgY29udGVudHMuXG4gICAgY29uc3Qgc2VtYW50aWNzRW5kaW5nVGFnUmVnZXggPSAvKDxcXC9tcm93Pik/XFxzKjxhbm5vdGF0aW9uW1xcV1xcd10qPzxcXC9zZW1hbnRpY3M+L2dtO1xuXG4gICAgcmV0dXJuIG1hdGhtbFxuICAgIC5yZXBsYWNlKHNlbWFudGljc1N0YXJ0aW5nVGFnUmVnZXgsICcnKVxuICAgIC5yZXBsYWNlKHNlbWFudGljc0VuZGluZ1RhZ1JlZ2V4LCAnJyk7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBhbGwgeG1sIG1hdGhtbCBvY2N1cnJlbmNlcyB0aGF0IGNvbnRhaW4gc2VtYW50aWNzIHRvIHRoZSBzYW1lXG4gICAqIHhtbCBtYXRobWwgb2NjdXJyZW5jZXMgd2l0aG91dCBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gc3RyaW5nIHRoYXQgY2FuIGNvbnRhaW4geG1sIG1hdGhtbCBvY2N1cnJlbmNlcy5cbiAgICogQHBhcmFtIHtDb25zdGFudHN9IFtjaGFyYWN0ZXJzXSAtIENvbnN0YW50IG9iamVjdCBjb250YWluaW5nIHhtbENoYXJhY3RlcnNcbiAgICogb3Igc2FmZVhtbENoYXJhY3RlcnMgcmVsYXRpb24uXG4gICAqIHhtbENoYXJhY3RlcnMgYnkgZGVmYXVsdC5cbiAgICogQHJldHVybnMge3N0cmluZ30gLSAndGV4dCcgd2l0aCBhbGwgeG1sIG1hdGhtbCBvY2N1cnJlbmNlcyB3aXRob3V0IGFubm90YXRpb24gdGFnLlxuICAgKi9cbiAgc3RhdGljIHJlbW92ZVNlbWFudGljc09jdXJyZW5jZXModGV4dCwgY2hhcmFjdGVycyA9IENvbnN0YW50cy54bWxDaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgbWF0aFRhZ1N0YXJ0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9bWF0aGA7XG4gICAgY29uc3QgbWF0aFRhZ0VuZCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfS9tYXRoJHtjaGFyYWN0ZXJzLnRhZ0Nsb3Nlcn1gO1xuICAgIGNvbnN0IG1hdGhUYWdFbmRsaW5lID0gYC8ke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgY29uc3QgeyB0YWdDbG9zZXIgfSA9IGNoYXJhY3RlcnM7XG4gICAgY29uc3Qgc2VtYW50aWNzVGFnU3RhcnQgPSBgJHtjaGFyYWN0ZXJzLnRhZ09wZW5lcn1zZW1hbnRpY3Mke2NoYXJhY3RlcnMudGFnQ2xvc2VyfWA7XG4gICAgY29uc3QgYW5ub3RhdGlvblRhZ1N0YXJ0ID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9YW5ub3RhdGlvbiBlbmNvZGluZz1gO1xuXG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIGxldCBzdGFydCA9IHRleHQuaW5kZXhPZihtYXRoVGFnU3RhcnQpO1xuICAgIGxldCBlbmQgPSAwO1xuICAgIHdoaWxlIChzdGFydCAhPT0gLTEpIHtcbiAgICAgIG91dHB1dCArPSB0ZXh0LnN1YnN0cmluZyhlbmQsIHN0YXJ0KTtcblxuICAgICAgLy8gTWF0aE1MIGNhbiBiZSB3cml0dGVuIGFzICc8bWF0aD48L21hdGg+JyBvciAnPG1hdGggLz4nLlxuICAgICAgY29uc3QgbWF0aFRhZ0VuZEluZGV4ID0gdGV4dC5pbmRleE9mKG1hdGhUYWdFbmQsIHN0YXJ0KTtcbiAgICAgIGNvbnN0IG1hdGhUYWdFbmRsaW5lSW5kZXggPSB0ZXh0LmluZGV4T2YobWF0aFRhZ0VuZGxpbmUsIHN0YXJ0KTtcbiAgICAgIGNvbnN0IGZpcnN0VGFnQ2xvc2VyID0gdGV4dC5pbmRleE9mKHRhZ0Nsb3Nlciwgc3RhcnQpO1xuICAgICAgaWYgKG1hdGhUYWdFbmRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZW5kID0gbWF0aFRhZ0VuZEluZGV4O1xuICAgICAgfSBlbHNlIGlmIChtYXRoVGFnRW5kbGluZUluZGV4ID09PSBmaXJzdFRhZ0Nsb3NlciAtIDEpIHtcbiAgICAgICAgZW5kID0gbWF0aFRhZ0VuZGxpbmVJbmRleDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VtYW50aWNzSW5kZXggPSB0ZXh0LmluZGV4T2Yoc2VtYW50aWNzVGFnU3RhcnQsIHN0YXJ0KTtcbiAgICAgIGlmIChzZW1hbnRpY3NJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgbW1sVGFnU3RhcnQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgc2VtYW50aWNzSW5kZXgpO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uSW5kZXggPSB0ZXh0LmluZGV4T2YoYW5ub3RhdGlvblRhZ1N0YXJ0LCBzdGFydCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHNlbWFudGljc0luZGV4ICsgc2VtYW50aWNzVGFnU3RhcnQubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IG1tbENvbnRlbnQgPSB0ZXh0LnN1YnN0cmluZyhzdGFydEluZGV4LCBhbm5vdGF0aW9uSW5kZXgpO1xuICAgICAgICAgIG91dHB1dCArPSBtbWxUYWdTdGFydCArIG1tbENvbnRlbnQgKyBtYXRoVGFnRW5kO1xuICAgICAgICAgIHN0YXJ0ID0gdGV4dC5pbmRleE9mKG1hdGhUYWdTdGFydCwgc3RhcnQgKyBtYXRoVGFnU3RhcnQubGVuZ3RoKTtcbiAgICAgICAgICBlbmQgKz0gbWF0aFRhZ0VuZC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5kID0gc3RhcnQ7XG4gICAgICAgICAgc3RhcnQgPSB0ZXh0LmluZGV4T2YobWF0aFRhZ1N0YXJ0LCBzdGFydCArIG1hdGhUYWdTdGFydC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBzdGFydDtcbiAgICAgICAgc3RhcnQgPSB0ZXh0LmluZGV4T2YobWF0aFRhZ1N0YXJ0LCBzdGFydCArIG1hdGhUYWdTdGFydC5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG91dHB1dCArPSB0ZXh0LnN1YnN0cmluZyhlbmQsIHRleHQubGVuZ3RoKTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIE1hdGhNTCBjb250YWlucyBhIGNlcnRhaW4gY2xhc3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRoTUwgLSBpbnB1dCBNYXRoTUwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBjbGFzc05hbWUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBpbnB1dCBNYXRoTUwgY29udGFpbnMgdGhlIGlucHV0IGNsYXNzLlxuICAgKiBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjb250YWluQ2xhc3MobWF0aE1MLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjbGFzc0luZGV4ID0gbWF0aE1MLmluZGV4T2YoJ2NsYXNzJyk7XG4gICAgaWYgKGNsYXNzSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNsYXNzVGFnRW5kSW5kZXggPSBtYXRoTUwuaW5kZXhPZignPicsIGNsYXNzSW5kZXgpO1xuICAgIGNvbnN0IGNsYXNzVGFnID0gbWF0aE1MLnN1YnN0cmluZyhjbGFzc0luZGV4LCBjbGFzc1RhZ0VuZEluZGV4KTtcbiAgICBpZiAoY2xhc3NUYWcuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgbWF0aG1sIGlzIGVtcHR5LiBPdGhlcndpc2UsIGZhbHNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0aG1sIC0gdmFsaWQgTWF0aE1MIHdpdGggc3RhbmRhcmQgWE1MIHRhZ3MuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIHRydWUgaWYgbWF0aG1sIGlzIGVtcHR5LiBPdGhlcndpc2UsIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkobWF0aG1sKSB7XG4gICAgLy8gTWF0aE1MIGNhbiBoYXZlIHRoZSBzaGFwZSA8bWF0aD48L21hdGg+IG9yICc8bWF0aCAvPicuXG4gICAgY29uc3QgY2xvc2VUYWcgPSAnPic7XG4gICAgY29uc3QgY2xvc2VUYWdJbmxpbmUgPSAnLz4nO1xuICAgIGNvbnN0IGZpcnN0Q2xvc2VUYWdJbmRleCA9IG1hdGhtbC5pbmRleE9mKGNsb3NlVGFnKTtcbiAgICBjb25zdCBmaXJzdENsb3NlVGFnSW5saW5lSW5kZXggPSBtYXRobWwuaW5kZXhPZihjbG9zZVRhZ0lubGluZSk7XG4gICAgbGV0IGVtcHR5ID0gZmFsc2U7XG4gICAgLy8gTWF0aE1MIGlzIGFsd2F5cyBlbXB0eSBpbiB0aGUgc2Vjb25kIHNoYXBlLlxuICAgIGlmIChmaXJzdENsb3NlVGFnSW5saW5lSW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoZmlyc3RDbG9zZVRhZ0lubGluZUluZGV4ID09PSBmaXJzdENsb3NlVGFnSW5kZXggLSAxKSB7XG4gICAgICAgIGVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYXRoTUwgaXMgYWx3YXlzIGVtcHR5IGluIHRoZSBmaXJzdCBzaGFwZSB3aGVuIHRoZXJlIGFyZW4ndCBlbGVtZW50c1xuICAgIC8vIGJldHdlZW4gbWF0aCB0YWdzLlxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIGNvbnN0IG1hdGhUYWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoJzwvKC4rOik/bWF0aD4nKTtcbiAgICAgIGNvbnN0IG1hdGhUYWdFbmRBcnJheSA9IG1hdGhUYWdFbmRSZWdleC5leGVjKG1hdGhtbCk7XG4gICAgICBpZiAobWF0aFRhZ0VuZEFycmF5KSB7XG4gICAgICAgIGVtcHR5ID0gZmlyc3RDbG9zZVRhZ0luZGV4ICsgMSA9PT0gbWF0aFRhZ0VuZEFycmF5LmluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGh0bWwgZW50aXRpZXMgaW5zaWRlIHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtYXRobWwgLSB2YWxpZCBNYXRoTUwgd2l0aCBzdGFuZGFyZCBYTUwgdGFncy5cbiAgICogQHJldHVybnMge1N0cmluZ30gLSAnbWF0aG1sJyB3aXRoIHByb3BlcnR5IGVudGl0aWVzIGVuY29kZWQuXG4gICAqL1xuICBzdGF0aWMgZW5jb2RlUHJvcGVydGllcyhtYXRobWwpIHtcbiAgICAvLyBTZWFyY2ggYWxsIHRoZSBwcm9wZXJ0aWVzLlxuICAgIGNvbnN0IHJlZ2V4ID0gL1xcdys9XCIuKj9cIi9nO1xuICAgIC8vIEVuY29kZSBodG1sIGVudGl0aWVzLlxuICAgIGNvbnN0IHJlcGxhY2VyID0gKG1hdGNoKSA9PiB7XG4gICAgICAvLyBJdCBoYXMgdGhlIHNoYXBlOlxuICAgICAgLy8gPG1hdGggcHJvcGVydHlPbmU9XCJzb21ldGhpbmdPbmVcIj48Y2hpbGRyZW4gcHJvcGVydHlUd289XCJzb21ldGhpbmdUd29cIj48L2NoaWxkcmVuPjwvbWF0aD4uXG4gICAgICBjb25zdCBxdW90ZUluZGV4ID0gbWF0Y2guaW5kZXhPZignXCInKTtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBtYXRjaC5zdWJzdHJpbmcocXVvdGVJbmRleCArIDEsIG1hdGNoLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZUVuY29kZWQgPSBVdGlsLmh0bWxFbnRpdGllcyhwcm9wZXJ0eVZhbHVlKTtcbiAgICAgIGNvbnN0IG1hdGNoRW5jb2RlZCA9IGAke21hdGNoLnN1YnN0cmluZygwLCBxdW90ZUluZGV4ICsgMSl9JHtwcm9wZXJ0eVZhbHVlRW5jb2RlZH1cImA7XG4gICAgICByZXR1cm4gbWF0Y2hFbmNvZGVkO1xuICAgIH07XG5cbiAgICBjb25zdCBtYXRobWxFbmNvZGVkID0gbWF0aG1sLnJlcGxhY2UocmVnZXgsIHJlcGxhY2VyKTtcbiAgICByZXR1cm4gbWF0aG1sRW5jb2RlZDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBtZDU7XG5leHBvcnQgZGVmYXVsdCBtZDU7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBIeE92ZXJyaWRlcyA9IGZ1bmN0aW9uICgpIHsgfVxuICBIeE92ZXJyaWRlcy5fX25hbWVfXyA9IHRydWU7XG4gIEh4T3ZlcnJpZGVzLmRhdGVTdHIgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHZhciBtID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZCA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIHZhciBoID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIHZhciBtaSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIHZhciBzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG0gPCAxMCA/IFwiMFwiICsgbSA6IFwiXCIgKyBtKSArIFwiLVwiICsgKGQgPCAxMCA/IFwiMFwiICsgZCA6IFwiXCIgKyBkKSArIFwiIFwiICsgKGggPCAxMCA/IFwiMFwiICsgaCA6IFwiXCIgKyBoKSArIFwiOlwiICsgKG1pIDwgMTAgPyBcIjBcIiArIG1pIDogXCJcIiArIG1pKSArIFwiOlwiICsgKHMgPCAxMCA/IFwiMFwiICsgcyA6IFwiXCIgKyBzKTtcbiAgfVxuICBIeE92ZXJyaWRlcy5zdHJEYXRlID0gZnVuY3Rpb24gKHMpIHtcbiAgICBzd2l0Y2ggKHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIjpcIik7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKDApO1xuICAgICAgICBkLnNldFVUQ0hvdXJzKGtbMF0pO1xuICAgICAgICBkLnNldFVUQ01pbnV0ZXMoa1sxXSk7XG4gICAgICAgIGQuc2V0VVRDU2Vjb25kcyhrWzJdKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICBjYXNlIDEwOlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCItXCIpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoa1swXSwga1sxXSAtIDEsIGtbMl0sIDAsIDAsIDApO1xuICAgICAgY2FzZSAxOTpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdmFyIHkgPSBrWzBdLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgdmFyIHQgPSBrWzFdLnNwbGl0KFwiOlwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHlbMF0sIHlbMV0gLSAxLCB5WzJdLCB0WzBdLCB0WzFdLCB0WzJdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IFwiSW52YWxpZCBkYXRlIGZvcm1hdCA6IFwiICsgcztcbiAgICB9XG4gIH1cbiAgSHhPdmVycmlkZXMuY2NhID0gZnVuY3Rpb24gKHMsIGluZGV4KSB7XG4gICAgdmFyIHggPSBzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgIGlmICh4ICE9IHgpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgSHhPdmVycmlkZXMuc3Vic3RyID0gZnVuY3Rpb24gKHMsIHBvcywgbGVuKSB7XG4gICAgaWYgKHBvcyAhPSBudWxsICYmIHBvcyAhPSAwICYmIGxlbiAhPSBudWxsICYmIGxlbiA8IDApIHJldHVybiBcIlwiO1xuICAgIGlmIChsZW4gPT0gbnVsbCkgbGVuID0gcy5sZW5ndGg7XG4gICAgaWYgKHBvcyA8IDApIHtcbiAgICAgIHBvcyA9IHMubGVuZ3RoICsgcG9zO1xuICAgICAgaWYgKHBvcyA8IDApIHBvcyA9IDA7XG4gICAgfSBlbHNlIGlmIChsZW4gPCAwKSBsZW4gPSBzLmxlbmd0aCArIGxlbiAtIHBvcztcbiAgICByZXR1cm4gcy5zdWJzdHIocG9zLCBsZW4pO1xuICB9XG4gIEh4T3ZlcnJpZGVzLnJlbW92ZSA9IGZ1bmN0aW9uIChhLCBvYmopIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGwpIHtcbiAgICAgIGlmIChhW2ldID09IG9iaikge1xuICAgICAgICBhLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBIeE92ZXJyaWRlcy5pdGVyID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VyOiAwLCBhcnI6IGEsIGhhc05leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyIDwgdGhpcy5hcnIubGVuZ3RoO1xuICAgICAgfSwgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnJbdGhpcy5jdXIrK107XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB2YXIgSW50SXRlciA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICB9O1xuICBJbnRJdGVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgSW50SXRlci5wcm90b3R5cGUgPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluKys7XG4gICAgfVxuICAgICwgaGFzTmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWluIDwgdGhpcy5tYXg7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBJbnRJdGVyXG4gIH1cbiAgdmFyIFN0ZCA9IGZ1bmN0aW9uICgpIHsgfVxuICBTdGQuX19uYW1lX18gPSB0cnVlO1xuICBTdGRbXCJpc1wiXSA9IGZ1bmN0aW9uICh2LCB0KSB7XG4gICAgcmV0dXJuIGpzLkJvb3QuX19pbnN0YW5jZW9mKHYsIHQpO1xuICB9XG4gIFN0ZC5zdHJpbmcgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBqcy5Cb290Ll9fc3RyaW5nX3JlYyhzLCBcIlwiKTtcbiAgfVxuICBTdGRbXCJpbnRcIl0gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB4IHwgMDtcbiAgfVxuICBTdGQucGFyc2VJbnQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHZhciB2ID0gcGFyc2VJbnQoeCwgMTApO1xuICAgIGlmICh2ID09IDAgJiYgKEh4T3ZlcnJpZGVzLmNjYSh4LCAxKSA9PSAxMjAgfHwgSHhPdmVycmlkZXMuY2NhKHgsIDEpID09IDg4KSkgdiA9IHBhcnNlSW50KHgpO1xuICAgIGlmIChpc05hTih2KSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHY7XG4gIH1cbiAgU3RkLnBhcnNlRmxvYXQgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHgpO1xuICB9XG4gIFN0ZC5yYW5kb20gPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB4KTtcbiAgfVxuICB2YXIgY29tID0gY29tIHx8IHt9XG4gIGlmICghY29tLndpcmlzKSBjb20ud2lyaXMgPSB7fVxuICBpZiAoIWNvbS53aXJpcy5qcykgY29tLndpcmlzLmpzID0ge31cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50cnlSZWFkeSgpO1xuICB9O1xuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5fX25hbWVfXyA9IHRydWU7XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLm1haW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2O1xuICAgIGV2ID0gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UoKTtcbiAgICBoYXhlLlRpbWVyLmRlbGF5KCRiaW5kKGV2LCBldi50cnlSZWFkeSksIDEwMCk7XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID09IG51bGwpIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlID0gbmV3IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzKCk7XG4gICAgcmV0dXJuIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmluc3RhbmNlO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmJ5cGFzc0VuY2Fwc3VsYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5jb20gPT0gbnVsbCkgd2luZG93LmNvbSA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzID09IG51bGwpIHdpbmRvdy5jb20ud2lyaXMgPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcy5qcyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5nZXRJbnN0YW5jZSgpO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLnByb3RvdHlwZSA9IHtcbiAgICBtZDVlbmNvZGU6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICByZXR1cm4gaGF4ZS5NZDUuZW5jb2RlKGNvbnRlbnQpO1xuICAgIH1cbiAgICAsIGRvTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5ieXBhc3NFbmNhcHN1bGF0aW9uKCk7XG4gICAgfVxuICAgICwgdHJ5UmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgIGlmIChqcy5MaWIuZG9jdW1lbnQucmVhZHlTdGF0ZSkge1xuICAgICAgICB0aGlzLmRvTG9hZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5yZWFkeSkgaGF4ZS5UaW1lci5kZWxheSgkYmluZCh0aGlzLCB0aGlzLnRyeVJlYWR5KSwgMTAwKTtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzXG4gIH1cbiAgdmFyIGhheGUgPSBoYXhlIHx8IHt9XG4gIGhheGUuTG9nID0gZnVuY3Rpb24gKCkgeyB9XG4gIGhheGUuTG9nLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5Mb2cudHJhY2UgPSBmdW5jdGlvbiAodiwgaW5mb3MpIHtcbiAgICBqcy5Cb290Ll9fdHJhY2UodiwgaW5mb3MpO1xuICB9XG4gIGhheGUuTG9nLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGpzLkJvb3QuX19jbGVhcl90cmFjZSgpO1xuICB9XG4gIGhheGUuTWQ1ID0gZnVuY3Rpb24gKCkge1xuICB9O1xuICBoYXhlLk1kNS5fX25hbWVfXyA9IHRydWU7XG4gIGhheGUuTWQ1LmVuY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIG5ldyBoYXhlLk1kNSgpLmRvRW5jb2RlKHMpO1xuICB9XG4gIGhheGUuTWQ1LnByb3RvdHlwZSA9IHtcbiAgICBkb0VuY29kZTogZnVuY3Rpb24gKHN0cikge1xuICAgICAgdmFyIHggPSB0aGlzLnN0cjJibGtzKHN0cik7XG4gICAgICB2YXIgYSA9IDE3MzI1ODQxOTM7XG4gICAgICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gICAgICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICAgICAgdmFyIGQgPSAyNzE3MzM4Nzg7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgeC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9sZGEgPSBhO1xuICAgICAgICB2YXIgb2xkYiA9IGI7XG4gICAgICAgIHZhciBvbGRjID0gYztcbiAgICAgICAgdmFyIG9sZGQgPSBkO1xuICAgICAgICBzdGVwID0gMDtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICAgICAgYiA9IHRoaXMuZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgICAgIGQgPSB0aGlzLmdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgICAgICBiID0gdGhpcy5oaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgICAgICBkID0gdGhpcy5oaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgICAgIGEgPSB0aGlzLmFkZG1lKGEsIG9sZGEpO1xuICAgICAgICBiID0gdGhpcy5hZGRtZShiLCBvbGRiKTtcbiAgICAgICAgYyA9IHRoaXMuYWRkbWUoYywgb2xkYyk7XG4gICAgICAgIGQgPSB0aGlzLmFkZG1lKGQsIG9sZGQpO1xuICAgICAgICBpICs9IDE2O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmhleChhKSArIHRoaXMucmhleChiKSArIHRoaXMucmhleChjKSArIHRoaXMucmhleChkKTtcbiAgICB9XG4gICAgLCBpaTogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdFhPUihjLCB0aGlzLmJpdE9SKGIsIH5kKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGhoOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0WE9SKHRoaXMuYml0WE9SKGIsIGMpLCBkKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZ2c6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBkKSwgdGhpcy5iaXRBTkQoYywgfmQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgZmY6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRPUih0aGlzLmJpdEFORChiLCBjKSwgdGhpcy5iaXRBTkQofmIsIGQpKSwgYSwgYiwgeCwgcywgdCk7XG4gICAgfVxuICAgICwgY21uOiBmdW5jdGlvbiAocSwgYSwgYiwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkbWUodGhpcy5yb2wodGhpcy5hZGRtZSh0aGlzLmFkZG1lKGEsIHEpLCB0aGlzLmFkZG1lKHgsIHQpKSwgcyksIGIpO1xuICAgIH1cbiAgICAsIHJvbDogZnVuY3Rpb24gKG51bSwgY250KSB7XG4gICAgICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG4gICAgfVxuICAgICwgc3RyMmJsa3M6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciBuYmxrID0gKHN0ci5sZW5ndGggKyA4ID4+IDYpICsgMTtcbiAgICAgIHZhciBibGtzID0gbmV3IEFycmF5KCk7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBuYmxrICogMTY7XG4gICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgYmxrc1tpXSA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgYmxrc1tpID4+IDJdIHw9IEh4T3ZlcnJpZGVzLmNjYShzdHIsIGkpIDw8IChzdHIubGVuZ3RoICogOCArIGkpICUgNCAqIDg7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGJsa3NbaSA+PiAyXSB8PSAxMjggPDwgKHN0ci5sZW5ndGggKiA4ICsgaSkgJSA0ICogODtcbiAgICAgIHZhciBsID0gc3RyLmxlbmd0aCAqIDg7XG4gICAgICB2YXIgayA9IG5ibGsgKiAxNiAtIDI7XG4gICAgICBibGtzW2tdID0gbCAmIDI1NTtcbiAgICAgIGJsa3Nba10gfD0gKGwgPj4+IDggJiAyNTUpIDw8IDg7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAxNiAmIDI1NSkgPDwgMTY7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiAyNCAmIDI1NSkgPDwgMjQ7XG4gICAgICByZXR1cm4gYmxrcztcbiAgICB9XG4gICAgLCByaGV4OiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIHZhciBoZXhfY2hyID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XG4gICAgICB2YXIgX2cgPSAwO1xuICAgICAgd2hpbGUgKF9nIDwgNCkge1xuICAgICAgICB2YXIgaiA9IF9nKys7XG4gICAgICAgIHN0ciArPSBoZXhfY2hyLmNoYXJBdChudW0gPj4gaiAqIDggKyA0ICYgMTUpICsgaGV4X2Noci5jaGFyQXQobnVtID4+IGogKiA4ICYgMTUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgLCBhZGRtZTogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgIHZhciBsc3cgPSAoeCAmIDY1NTM1KSArICh5ICYgNjU1MzUpO1xuICAgICAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICAgICAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDY1NTM1O1xuICAgIH1cbiAgICAsIGJpdEFORDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSAmIChiICYgMSk7XG4gICAgICB2YXIgbXNiMzEgPSBhID4+PiAxICYgYiA+Pj4gMTtcbiAgICAgIHJldHVybiBtc2IzMSA8PCAxIHwgbHNiO1xuICAgIH1cbiAgICAsIGJpdFhPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSBeIGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSBeIGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBiaXRPUjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBsc2IgPSBhICYgMSB8IGIgJiAxO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSB8IGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGhheGUuTWQ1XG4gIH1cbiAgaGF4ZS5UaW1lciA9IGZ1bmN0aW9uICh0aW1lX21zKSB7XG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB0aGlzLmlkID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lLnJ1bigpO1xuICAgIH0sIHRpbWVfbXMpO1xuICB9O1xuICBoYXhlLlRpbWVyLl9fbmFtZV9fID0gdHJ1ZTtcbiAgaGF4ZS5UaW1lci5kZWxheSA9IGZ1bmN0aW9uIChmLCB0aW1lX21zKSB7XG4gICAgdmFyIHQgPSBuZXcgaGF4ZS5UaW1lcih0aW1lX21zKTtcbiAgICB0LnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuc3RvcCgpO1xuICAgICAgZigpO1xuICAgIH07XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgaGF4ZS5UaW1lci5tZWFzdXJlID0gZnVuY3Rpb24gKGYsIHBvcykge1xuICAgIHZhciB0MCA9IGhheGUuVGltZXIuc3RhbXAoKTtcbiAgICB2YXIgciA9IGYoKTtcbiAgICBoYXhlLkxvZy50cmFjZShoYXhlLlRpbWVyLnN0YW1wKCkgLSB0MCArIFwic1wiLCBwb3MpO1xuICAgIHJldHVybiByO1xuICB9XG4gIGhheGUuVGltZXIuc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgfVxuICBoYXhlLlRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICBydW46IGZ1bmN0aW9uICgpIHtcbiAgICB9XG4gICAgLCBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5pZCA9PSBudWxsKSByZXR1cm47XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogaGF4ZS5UaW1lclxuICB9XG4gIHZhciBqcyA9IGpzIHx8IHt9XG4gIGpzLkJvb3QgPSBmdW5jdGlvbiAoKSB7IH1cbiAganMuQm9vdC5fX25hbWVfXyA9IHRydWU7XG4gIGpzLkJvb3QuX191bmh0bWwgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBzLnNwbGl0KFwiJlwiKS5qb2luKFwiJmFtcDtcIikuc3BsaXQoXCI8XCIpLmpvaW4oXCImbHQ7XCIpLnNwbGl0KFwiPlwiKS5qb2luKFwiJmd0O1wiKTtcbiAgfVxuICBqcy5Cb290Ll9fdHJhY2UgPSBmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBtc2cgPSBpICE9IG51bGwgPyBpLmZpbGVOYW1lICsgXCI6XCIgKyBpLmxpbmVOdW1iZXIgKyBcIjogXCIgOiBcIlwiO1xuICAgIG1zZyArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKTtcbiAgICB2YXIgZDtcbiAgICBpZiAodHlwZW9mIChkb2N1bWVudCkgIT0gXCJ1bmRlZmluZWRcIiAmJiAoZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGF4ZTp0cmFjZVwiKSkgIT0gbnVsbCkgZC5pbm5lckhUTUwgKz0ganMuQm9vdC5fX3VuaHRtbChtc2cpICsgXCI8YnIvPlwiOyBlbHNlIGlmICh0eXBlb2YgKGNvbnNvbGUpICE9IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS5sb2cgIT0gbnVsbCkgY29uc29sZS5sb2cobXNnKTtcbiAgfVxuICBqcy5Cb290Ll9fY2xlYXJfdHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhheGU6dHJhY2VcIik7XG4gICAgaWYgKGQgIT0gbnVsbCkgZC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG4gIGpzLkJvb3QuaXNDbGFzcyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8uX19uYW1lX187XG4gIH1cbiAganMuQm9vdC5pc0VudW0gPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLl9fZW5hbWVfXztcbiAgfVxuICBqcy5Cb290LmdldENsYXNzID0gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gby5fX2NsYXNzX187XG4gIH1cbiAganMuQm9vdC5fX3N0cmluZ19yZWMgPSBmdW5jdGlvbiAobywgcykge1xuICAgIGlmIChvID09IG51bGwpIHJldHVybiBcIm51bGxcIjtcbiAgICBpZiAocy5sZW5ndGggPj0gNSkgcmV0dXJuIFwiPC4uLj5cIjtcbiAgICB2YXIgdCA9IHR5cGVvZiAobyk7XG4gICAgaWYgKHQgPT0gXCJmdW5jdGlvblwiICYmIChvLl9fbmFtZV9fIHx8IG8uX19lbmFtZV9fKSkgdCA9IFwib2JqZWN0XCI7XG4gICAgc3dpdGNoICh0KSB7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIGlmIChvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICBpZiAoby5fX2VudW1fXykge1xuICAgICAgICAgICAgaWYgKG8ubGVuZ3RoID09IDIpIHJldHVybiBvWzBdO1xuICAgICAgICAgICAgdmFyIHN0ciA9IG9bMF0gKyBcIihcIjtcbiAgICAgICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgICAgIHZhciBfZzEgPSAyLCBfZyA9IG8ubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgICAgICAgIGlmIChpICE9IDIpIHN0ciArPSBcIixcIiArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baV0sIHMpOyBlbHNlIHN0ciArPSBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2ldLCBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHIgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICB2YXIgc3RyID0gXCJbXCI7XG4gICAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICAgIHZhciBfZyA9IDA7XG4gICAgICAgICAgd2hpbGUgKF9nIDwgbCkge1xuICAgICAgICAgICAgdmFyIGkxID0gX2crKztcbiAgICAgICAgICAgIHN0ciArPSAoaTEgPiAwID8gXCIsXCIgOiBcIlwiKSArIGpzLkJvb3QuX19zdHJpbmdfcmVjKG9baTFdLCBzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyICs9IFwiXVwiO1xuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRvc3RyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRvc3RyID0gby50b1N0cmluZztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBcIj8/P1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3N0ciAhPSBudWxsICYmIHRvc3RyICE9IE9iamVjdC50b1N0cmluZykge1xuICAgICAgICAgIHZhciBzMiA9IG8udG9TdHJpbmcoKTtcbiAgICAgICAgICBpZiAoczIgIT0gXCJbb2JqZWN0IE9iamVjdF1cIikgcmV0dXJuIHMyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrID0gbnVsbDtcbiAgICAgICAgdmFyIHN0ciA9IFwie1xcblwiO1xuICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgIHZhciBoYXNwID0gby5oYXNPd25Qcm9wZXJ0eSAhPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBrIGluIG8pIHtcbiAgICAgICAgICA7XG4gICAgICAgICAgaWYgKGhhc3AgJiYgIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoayA9PSBcInByb3RvdHlwZVwiIHx8IGsgPT0gXCJfX2NsYXNzX19cIiB8fCBrID09IFwiX19zdXBlcl9fXCIgfHwgayA9PSBcIl9faW50ZXJmYWNlc19fXCIgfHwgayA9PSBcIl9fcHJvcGVydGllc19fXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCAhPSAyKSBzdHIgKz0gXCIsIFxcblwiO1xuICAgICAgICAgIHN0ciArPSBzICsgayArIFwiIDogXCIgKyBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2tdLCBzKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHN0ciArPSBcIlxcblwiICsgcyArIFwifVwiO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgIHJldHVybiBcIjxmdW5jdGlvbj5cIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gU3RyaW5nKG8pO1xuICAgIH1cbiAgfVxuICBqcy5Cb290Ll9faW50ZXJmTG9vcCA9IGZ1bmN0aW9uIChjYywgY2wpIHtcbiAgICBpZiAoY2MgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjYyA9PSBjbCkgcmV0dXJuIHRydWU7XG4gICAgdmFyIGludGYgPSBjYy5fX2ludGVyZmFjZXNfXztcbiAgICBpZiAoaW50ZiAhPSBudWxsKSB7XG4gICAgICB2YXIgX2cxID0gMCwgX2cgPSBpbnRmLmxlbmd0aDtcbiAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICB2YXIgaTEgPSBpbnRmW2ldO1xuICAgICAgICBpZiAoaTEgPT0gY2wgfHwganMuQm9vdC5fX2ludGVyZkxvb3AoaTEsIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBqcy5Cb290Ll9faW50ZXJmTG9vcChjYy5fX3N1cGVyX18sIGNsKTtcbiAgfVxuICBqcy5Cb290Ll9faW5zdGFuY2VvZiA9IGZ1bmN0aW9uIChvLCBjbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAobyBpbnN0YW5jZW9mIGNsKSB7XG4gICAgICAgIGlmIChjbCA9PSBBcnJheSkgcmV0dXJuIG8uX19lbnVtX18gPT0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoanMuQm9vdC5fX2ludGVyZkxvb3Aoby5fX2NsYXNzX18sIGNsKSkgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGNsID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3dpdGNoIChjbCkge1xuICAgICAgY2FzZSBJbnQ6XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobyAlIDIxNDc0ODM2NDguMCkgPT09IG87XG4gICAgICBjYXNlIEZsb2F0OlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcIm51bWJlclwiO1xuICAgICAgY2FzZSBCb29sOlxuICAgICAgICByZXR1cm4gbyA9PT0gdHJ1ZSB8fCBvID09PSBmYWxzZTtcbiAgICAgIGNhc2UgU3RyaW5nOlxuICAgICAgICByZXR1cm4gdHlwZW9mIChvKSA9PSBcInN0cmluZ1wiO1xuICAgICAgY2FzZSBEeW5hbWljOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChvID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGNsID09IENsYXNzICYmIG8uX19uYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgaWYgKGNsID09IEVudW0gJiYgby5fX2VuYW1lX18gIT0gbnVsbCkgcmV0dXJuIHRydWU7IGVsc2UgbnVsbDtcbiAgICAgICAgcmV0dXJuIG8uX19lbnVtX18gPT0gY2w7XG4gICAgfVxuICB9XG4gIGpzLkJvb3QuX19jYXN0ID0gZnVuY3Rpb24gKG8sIHQpIHtcbiAgICBpZiAoanMuQm9vdC5fX2luc3RhbmNlb2YobywgdCkpIHJldHVybiBvOyBlbHNlIHRocm93IFwiQ2Fubm90IGNhc3QgXCIgKyBTdGQuc3RyaW5nKG8pICsgXCIgdG8gXCIgKyBTdGQuc3RyaW5nKHQpO1xuICB9XG4gIGpzLkxpYiA9IGZ1bmN0aW9uICgpIHsgfVxuICBqcy5MaWIuX19uYW1lX18gPSB0cnVlO1xuICBqcy5MaWIuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWdnZXI7XG4gIH1cbiAganMuTGliLmFsZXJ0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICBhbGVydChqcy5Cb290Ll9fc3RyaW5nX3JlYyh2LCBcIlwiKSk7XG4gIH1cbiAganMuTGliLmV2YWwgPSBmdW5jdGlvbiAoY29kZSkge1xuICAgIHJldHVybiBldmFsKGNvZGUpO1xuICB9XG4gIGpzLkxpYi5zZXRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZikge1xuICAgIGpzLkxpYi5vbmVycm9yID0gZjtcbiAgfVxuICB2YXIgJF87XG4gIGZ1bmN0aW9uICRiaW5kKG8sIG0pIHsgdmFyIGYgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmLm1ldGhvZC5hcHBseShmLnNjb3BlLCBhcmd1bWVudHMpOyB9OyBmLnNjb3BlID0gbzsgZi5tZXRob2QgPSBtOyByZXR1cm4gZjsgfTtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSBIeE92ZXJyaWRlcy5yZW1vdmUgPSBmdW5jdGlvbiAoYSwgbykge1xuICAgIHZhciBpID0gYS5pbmRleE9mKG8pO1xuICAgIGlmIChpID09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07IGVsc2UgbnVsbDtcbiAgTWF0aC5fX25hbWVfXyA9IFtcIk1hdGhcIl07XG4gIE1hdGguTmFOID0gTnVtYmVyLk5hTjtcbiAgTWF0aC5ORUdBVElWRV9JTkZJTklUWSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgTWF0aC5QT1NJVElWRV9JTkZJTklUWSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgTWF0aC5pc0Zpbml0ZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGlzRmluaXRlKGkpO1xuICB9O1xuICBNYXRoLmlzTmFOID0gZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaXNOYU4oaSk7XG4gIH07XG4gIFN0cmluZy5wcm90b3R5cGUuX19jbGFzc19fID0gU3RyaW5nO1xuICBTdHJpbmcuX19uYW1lX18gPSB0cnVlO1xuICBBcnJheS5wcm90b3R5cGUuX19jbGFzc19fID0gQXJyYXk7XG4gIEFycmF5Ll9fbmFtZV9fID0gdHJ1ZTtcbiAgRGF0ZS5wcm90b3R5cGUuX19jbGFzc19fID0gRGF0ZTtcbiAgRGF0ZS5fX25hbWVfXyA9IFtcIkRhdGVcIl07XG4gIHZhciBJbnQgPSB7IF9fbmFtZV9fOiBbXCJJbnRcIl0gfTtcbiAgdmFyIER5bmFtaWMgPSB7IF9fbmFtZV9fOiBbXCJEeW5hbWljXCJdIH07XG4gIHZhciBGbG9hdCA9IE51bWJlcjtcbiAgRmxvYXQuX19uYW1lX18gPSBbXCJGbG9hdFwiXTtcbiAgdmFyIEJvb2wgPSBCb29sZWFuO1xuICBCb29sLl9fZW5hbWVfXyA9IFtcIkJvb2xcIl07XG4gIHZhciBDbGFzcyA9IHsgX19uYW1lX186IFtcIkNsYXNzXCJdIH07XG4gIHZhciBFbnVtID0ge307XG4gIHZhciBWb2lkID0geyBfX2VuYW1lX186IFtcIlZvaWRcIl0gfTtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiKSBqcy5MaWIuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGpzLkxpYi53aW5kb3cgPSB3aW5kb3c7XG4gICAganMuTGliLndpbmRvdy5vbmVycm9yID0gZnVuY3Rpb24gKG1zZywgdXJsLCBsaW5lKSB7XG4gICAgICB2YXIgZiA9IGpzLkxpYi5vbmVycm9yO1xuICAgICAgaWYgKGYgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGYobXNnLCBbdXJsICsgXCI6XCIgKyBsaW5lXSk7XG4gICAgfTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5tYWluKCk7XG4gIGRlbGV0ZSBBcnJheS5wcm90b3R5cGUuX19jbGFzc19fO1xufSgpKTtcblxuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgSHhPdmVycmlkZXMgPSBmdW5jdGlvbiAoKSB7IH1cbiAgSHhPdmVycmlkZXMuX19uYW1lX18gPSB0cnVlO1xuICBIeE92ZXJyaWRlcy5kYXRlU3RyID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgbSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIGQgPSBkYXRlLmdldERhdGUoKTtcbiAgICB2YXIgaCA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICB2YXIgbWkgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICB2YXIgcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIChtIDwgMTAgPyBcIjBcIiArIG0gOiBcIlwiICsgbSkgKyBcIi1cIiArIChkIDwgMTAgPyBcIjBcIiArIGQgOiBcIlwiICsgZCkgKyBcIiBcIiArIChoIDwgMTAgPyBcIjBcIiArIGggOiBcIlwiICsgaCkgKyBcIjpcIiArIChtaSA8IDEwID8gXCIwXCIgKyBtaSA6IFwiXCIgKyBtaSkgKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiArIHMgOiBcIlwiICsgcyk7XG4gIH1cbiAgSHhPdmVycmlkZXMuc3RyRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgc3dpdGNoIChzLmxlbmd0aCkge1xuICAgICAgY2FzZSA4OlxuICAgICAgICB2YXIgayA9IHMuc3BsaXQoXCI6XCIpO1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0VGltZSgwKTtcbiAgICAgICAgZC5zZXRVVENIb3VycyhrWzBdKTtcbiAgICAgICAgZC5zZXRVVENNaW51dGVzKGtbMV0pO1xuICAgICAgICBkLnNldFVUQ1NlY29uZHMoa1syXSk7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgdmFyIGsgPSBzLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGtbMF0sIGtbMV0gLSAxLCBrWzJdLCAwLCAwLCAwKTtcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIHZhciBrID0gcy5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciB5ID0ga1swXS5zcGxpdChcIi1cIik7XG4gICAgICAgIHZhciB0ID0ga1sxXS5zcGxpdChcIjpcIik7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5WzBdLCB5WzFdIC0gMSwgeVsyXSwgdFswXSwgdFsxXSwgdFsyXSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBcIkludmFsaWQgZGF0ZSBmb3JtYXQgOiBcIiArIHM7XG4gICAgfVxuICB9XG4gIEh4T3ZlcnJpZGVzLmNjYSA9IGZ1bmN0aW9uIChzLCBpbmRleCkge1xuICAgIHZhciB4ID0gcy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpZiAoeCAhPSB4KSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiB4O1xuICB9XG4gIEh4T3ZlcnJpZGVzLnN1YnN0ciA9IGZ1bmN0aW9uIChzLCBwb3MsIGxlbikge1xuICAgIGlmIChwb3MgIT0gbnVsbCAmJiBwb3MgIT0gMCAmJiBsZW4gIT0gbnVsbCAmJiBsZW4gPCAwKSByZXR1cm4gXCJcIjtcbiAgICBpZiAobGVuID09IG51bGwpIGxlbiA9IHMubGVuZ3RoO1xuICAgIGlmIChwb3MgPCAwKSB7XG4gICAgICBwb3MgPSBzLmxlbmd0aCArIHBvcztcbiAgICAgIGlmIChwb3MgPCAwKSBwb3MgPSAwO1xuICAgIH0gZWxzZSBpZiAobGVuIDwgMCkgbGVuID0gcy5sZW5ndGggKyBsZW4gLSBwb3M7XG4gICAgcmV0dXJuIHMuc3Vic3RyKHBvcywgbGVuKTtcbiAgfVxuICBIeE92ZXJyaWRlcy5yZW1vdmUgPSBmdW5jdGlvbiAoYSwgb2JqKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsID0gYS5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsKSB7XG4gICAgICBpZiAoYVtpXSA9PSBvYmopIHtcbiAgICAgICAgYS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgSHhPdmVycmlkZXMuaXRlciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cjogMCwgYXJyOiBhLCBoYXNOZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1ciA8IHRoaXMuYXJyLmxlbmd0aDtcbiAgICAgIH0sIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyW3RoaXMuY3VyKytdO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgdmFyIEludEl0ZXIgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICB0aGlzLm1pbiA9IG1pbjtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgfTtcbiAgSW50SXRlci5fX25hbWVfXyA9IHRydWU7XG4gIEludEl0ZXIucHJvdG90eXBlID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbisrO1xuICAgIH1cbiAgICAsIGhhc05leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbiA8IHRoaXMubWF4O1xuICAgIH1cbiAgICAsIF9fY2xhc3NfXzogSW50SXRlclxuICB9XG4gIHZhciBTdGQgPSBmdW5jdGlvbiAoKSB7IH1cbiAgU3RkLl9fbmFtZV9fID0gdHJ1ZTtcbiAgU3RkW1wiaXNcIl0gPSBmdW5jdGlvbiAodiwgdCkge1xuICAgIHJldHVybiBqcy5Cb290Ll9faW5zdGFuY2VvZih2LCB0KTtcbiAgfVxuICBTdGQuc3RyaW5nID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4ganMuQm9vdC5fX3N0cmluZ19yZWMocywgXCJcIik7XG4gIH1cbiAgU3RkW1wiaW50XCJdID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geCB8IDA7XG4gIH1cbiAgU3RkLnBhcnNlSW50ID0gZnVuY3Rpb24gKHgpIHtcbiAgICB2YXIgdiA9IHBhcnNlSW50KHgsIDEwKTtcbiAgICBpZiAodiA9PSAwICYmIChIeE92ZXJyaWRlcy5jY2EoeCwgMSkgPT0gMTIwIHx8IEh4T3ZlcnJpZGVzLmNjYSh4LCAxKSA9PSA4OCkpIHYgPSBwYXJzZUludCh4KTtcbiAgICBpZiAoaXNOYU4odikpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB2O1xuICB9XG4gIFN0ZC5wYXJzZUZsb2F0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh4KTtcbiAgfVxuICBTdGQucmFuZG9tID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogeCk7XG4gIH1cbiAgdmFyIGNvbSA9IGNvbSB8fCB7fVxuICBpZiAoIWNvbS53aXJpcykgY29tLndpcmlzID0ge31cbiAgaWYgKCFjb20ud2lyaXMuanMpIGNvbS53aXJpcy5qcyA9IHt9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudHJ5UmVhZHkoKTtcbiAgfTtcbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuX19uYW1lX18gPSB0cnVlO1xuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5tYWluID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldjtcbiAgICBldiA9IGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmdldEluc3RhbmNlKCk7XG4gICAgaGF4ZS5UaW1lci5kZWxheSgkYmluZChldiwgZXYudHJ5UmVhZHkpLCAxMDApO1xuICB9XG4gIGNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZSA9PSBudWxsKSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZSA9IG5ldyBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scygpO1xuICAgIHJldHVybiBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5pbnN0YW5jZTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5ieXBhc3NFbmNhcHN1bGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh3aW5kb3cuY29tID09IG51bGwpIHdpbmRvdy5jb20gPSB7fTtcbiAgICBpZiAod2luZG93LmNvbS53aXJpcyA9PSBudWxsKSB3aW5kb3cuY29tLndpcmlzID0ge307XG4gICAgaWYgKHdpbmRvdy5jb20ud2lyaXMuanMgPT0gbnVsbCkgd2luZG93LmNvbS53aXJpcy5qcyA9IHt9O1xuICAgIGlmICh3aW5kb3cuY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMgPT0gbnVsbCkgd2luZG93LmNvbS53aXJpcy5qcy5Kc1BsdWdpblRvb2xzID0gY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5wcm90b3R5cGUgPSB7XG4gICAgbWQ1ZW5jb2RlOiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgcmV0dXJuIGhheGUuTWQ1LmVuY29kZShjb250ZW50KTtcbiAgICB9XG4gICAgLCBkb0xvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMuYnlwYXNzRW5jYXBzdWxhdGlvbigpO1xuICAgIH1cbiAgICAsIHRyeVJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICBpZiAoanMuTGliLmRvY3VtZW50LnJlYWR5U3RhdGUpIHtcbiAgICAgICAgdGhpcy5kb0xvYWQoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucmVhZHkpIGhheGUuVGltZXIuZGVsYXkoJGJpbmQodGhpcywgdGhpcy50cnlSZWFkeSksIDEwMCk7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29sc1xuICB9XG4gIHZhciBoYXhlID0gaGF4ZSB8fCB7fVxuICBoYXhlLkxvZyA9IGZ1bmN0aW9uICgpIHsgfVxuICBoYXhlLkxvZy5fX25hbWVfXyA9IHRydWU7XG4gIGhheGUuTG9nLnRyYWNlID0gZnVuY3Rpb24gKHYsIGluZm9zKSB7XG4gICAganMuQm9vdC5fX3RyYWNlKHYsIGluZm9zKTtcbiAgfVxuICBoYXhlLkxvZy5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBqcy5Cb290Ll9fY2xlYXJfdHJhY2UoKTtcbiAgfVxuICBoYXhlLk1kNSA9IGZ1bmN0aW9uICgpIHtcbiAgfTtcbiAgaGF4ZS5NZDUuX19uYW1lX18gPSB0cnVlO1xuICBoYXhlLk1kNS5lbmNvZGUgPSBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBuZXcgaGF4ZS5NZDUoKS5kb0VuY29kZShzKTtcbiAgfVxuICBoYXhlLk1kNS5wcm90b3R5cGUgPSB7XG4gICAgZG9FbmNvZGU6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5zdHIyYmxrcyhzdHIpO1xuICAgICAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICAgICAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICAgICAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgICAgIHZhciBkID0gMjcxNzMzODc4O1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHgubGVuZ3RoKSB7XG4gICAgICAgIHZhciBvbGRhID0gYTtcbiAgICAgICAgdmFyIG9sZGIgPSBiO1xuICAgICAgICB2YXIgb2xkYyA9IGM7XG4gICAgICAgIHZhciBvbGRkID0gZDtcbiAgICAgICAgc3RlcCA9IDA7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgICAgICBkID0gdGhpcy5mZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgICAgICBjID0gdGhpcy5mZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgICAgICBhID0gdGhpcy5mZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgICAgIGQgPSB0aGlzLmZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgICAgIGEgPSB0aGlzLmZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgICAgIGMgPSB0aGlzLmZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgICAgIGIgPSB0aGlzLmZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICAgICAgYSA9IHRoaXMuZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICAgICAgZCA9IHRoaXMuZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICAgICAgYyA9IHRoaXMuZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgICAgICBiID0gdGhpcy5mZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICAgICAgYSA9IHRoaXMuZ2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgICAgICBjID0gdGhpcy5nZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgICAgICBiID0gdGhpcy5nZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgICAgICBhID0gdGhpcy5nZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICAgICAgZCA9IHRoaXMuZ2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgICAgIGMgPSB0aGlzLmdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgICAgIGIgPSB0aGlzLmdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgICAgIGEgPSB0aGlzLmdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgICAgICBkID0gdGhpcy5nZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICAgICAgYyA9IHRoaXMuZ2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICAgICAgYiA9IHRoaXMuZ2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgICAgICBjID0gdGhpcy5oaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICAgICAgYSA9IHRoaXMuaGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgICAgICBhID0gdGhpcy5oaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgICAgIGQgPSB0aGlzLmhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICAgICAgYyA9IHRoaXMuaGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICAgICAgYiA9IHRoaXMuaGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgICAgIGEgPSB0aGlzLmhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICAgICAgZCA9IHRoaXMuaGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgICAgIGMgPSB0aGlzLmhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgICAgIGIgPSB0aGlzLmhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgICAgICBkID0gdGhpcy5paShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgICAgICBjID0gdGhpcy5paShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICAgICAgYSA9IHRoaXMuaWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgICAgIGMgPSB0aGlzLmlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICAgICAgYiA9IHRoaXMuaWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgICAgIGEgPSB0aGlzLmlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICAgICAgZCA9IHRoaXMuaWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgICAgIGIgPSB0aGlzLmlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgICAgICBhID0gdGhpcy5paShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgICAgIGQgPSB0aGlzLmlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICAgICAgYyA9IHRoaXMuaWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgICAgICBiID0gdGhpcy5paShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgICAgICBhID0gdGhpcy5hZGRtZShhLCBvbGRhKTtcbiAgICAgICAgYiA9IHRoaXMuYWRkbWUoYiwgb2xkYik7XG4gICAgICAgIGMgPSB0aGlzLmFkZG1lKGMsIG9sZGMpO1xuICAgICAgICBkID0gdGhpcy5hZGRtZShkLCBvbGRkKTtcbiAgICAgICAgaSArPSAxNjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJoZXgoYSkgKyB0aGlzLnJoZXgoYikgKyB0aGlzLnJoZXgoYykgKyB0aGlzLnJoZXgoZCk7XG4gICAgfVxuICAgICwgaWk6IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbW4odGhpcy5iaXRYT1IoYywgdGhpcy5iaXRPUihiLCB+ZCkpLCBhLCBiLCB4LCBzLCB0KTtcbiAgICB9XG4gICAgLCBoaDogZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtbih0aGlzLmJpdFhPUih0aGlzLmJpdFhPUihiLCBjKSwgZCksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGdnOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0T1IodGhpcy5iaXRBTkQoYiwgZCksIHRoaXMuYml0QU5EKGMsIH5kKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGZmOiBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21uKHRoaXMuYml0T1IodGhpcy5iaXRBTkQoYiwgYyksIHRoaXMuYml0QU5EKH5iLCBkKSksIGEsIGIsIHgsIHMsIHQpO1xuICAgIH1cbiAgICAsIGNtbjogZnVuY3Rpb24gKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZG1lKHRoaXMucm9sKHRoaXMuYWRkbWUodGhpcy5hZGRtZShhLCBxKSwgdGhpcy5hZGRtZSh4LCB0KSksIHMpLCBiKTtcbiAgICB9XG4gICAgLCByb2w6IGZ1bmN0aW9uIChudW0sIGNudCkge1xuICAgICAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xuICAgIH1cbiAgICAsIHN0cjJibGtzOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICB2YXIgbmJsayA9IChzdHIubGVuZ3RoICsgOCA+PiA2KSArIDE7XG4gICAgICB2YXIgYmxrcyA9IG5ldyBBcnJheSgpO1xuICAgICAgdmFyIF9nMSA9IDAsIF9nID0gbmJsayAqIDE2O1xuICAgICAgd2hpbGUgKF9nMSA8IF9nKSB7XG4gICAgICAgIHZhciBpID0gX2cxKys7XG4gICAgICAgIGJsa3NbaV0gPSAwO1xuICAgICAgfVxuICAgICAgdmFyIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIGJsa3NbaSA+PiAyXSB8PSBIeE92ZXJyaWRlcy5jY2Eoc3RyLCBpKSA8PCAoc3RyLmxlbmd0aCAqIDggKyBpKSAlIDQgKiA4O1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICBibGtzW2kgPj4gMl0gfD0gMTI4IDw8IChzdHIubGVuZ3RoICogOCArIGkpICUgNCAqIDg7XG4gICAgICB2YXIgbCA9IHN0ci5sZW5ndGggKiA4O1xuICAgICAgdmFyIGsgPSBuYmxrICogMTYgLSAyO1xuICAgICAgYmxrc1trXSA9IGwgJiAyNTU7XG4gICAgICBibGtzW2tdIHw9IChsID4+PiA4ICYgMjU1KSA8PCA4O1xuICAgICAgYmxrc1trXSB8PSAobCA+Pj4gMTYgJiAyNTUpIDw8IDE2O1xuICAgICAgYmxrc1trXSB8PSAobCA+Pj4gMjQgJiAyNTUpIDw8IDI0O1xuICAgICAgcmV0dXJuIGJsa3M7XG4gICAgfVxuICAgICwgcmhleDogZnVuY3Rpb24gKG51bSkge1xuICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICB2YXIgaGV4X2NociA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgICAgdmFyIF9nID0gMDtcbiAgICAgIHdoaWxlIChfZyA8IDQpIHtcbiAgICAgICAgdmFyIGogPSBfZysrO1xuICAgICAgICBzdHIgKz0gaGV4X2Noci5jaGFyQXQobnVtID4+IGogKiA4ICsgNCAmIDE1KSArIGhleF9jaHIuY2hhckF0KG51bSA+PiBqICogOCAmIDE1KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgICwgYWRkbWU6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICB2YXIgbHN3ID0gKHggJiA2NTUzNSkgKyAoeSAmIDY1NTM1KTtcbiAgICAgIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgICAgIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiA2NTUzNTtcbiAgICB9XG4gICAgLCBiaXRBTkQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgbHNiID0gYSAmIDEgJiAoYiAmIDEpO1xuICAgICAgdmFyIG1zYjMxID0gYSA+Pj4gMSAmIGIgPj4+IDE7XG4gICAgICByZXR1cm4gbXNiMzEgPDwgMSB8IGxzYjtcbiAgICB9XG4gICAgLCBiaXRYT1I6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgbHNiID0gYSAmIDEgXiBiICYgMTtcbiAgICAgIHZhciBtc2IzMSA9IGEgPj4+IDEgXiBiID4+PiAxO1xuICAgICAgcmV0dXJuIG1zYjMxIDw8IDEgfCBsc2I7XG4gICAgfVxuICAgICwgYml0T1I6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgbHNiID0gYSAmIDEgfCBiICYgMTtcbiAgICAgIHZhciBtc2IzMSA9IGEgPj4+IDEgfCBiID4+PiAxO1xuICAgICAgcmV0dXJuIG1zYjMxIDw8IDEgfCBsc2I7XG4gICAgfVxuICAgICwgX19jbGFzc19fOiBoYXhlLk1kNVxuICB9XG4gIGhheGUuVGltZXIgPSBmdW5jdGlvbiAodGltZV9tcykge1xuICAgIHZhciBtZSA9IHRoaXM7XG4gICAgdGhpcy5pZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBtZS5ydW4oKTtcbiAgICB9LCB0aW1lX21zKTtcbiAgfTtcbiAgaGF4ZS5UaW1lci5fX25hbWVfXyA9IHRydWU7XG4gIGhheGUuVGltZXIuZGVsYXkgPSBmdW5jdGlvbiAoZiwgdGltZV9tcykge1xuICAgIHZhciB0ID0gbmV3IGhheGUuVGltZXIodGltZV9tcyk7XG4gICAgdC5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0LnN0b3AoKTtcbiAgICAgIGYoKTtcbiAgICB9O1xuICAgIHJldHVybiB0O1xuICB9XG4gIGhheGUuVGltZXIubWVhc3VyZSA9IGZ1bmN0aW9uIChmLCBwb3MpIHtcbiAgICB2YXIgdDAgPSBoYXhlLlRpbWVyLnN0YW1wKCk7XG4gICAgdmFyIHIgPSBmKCk7XG4gICAgaGF4ZS5Mb2cudHJhY2UoaGF4ZS5UaW1lci5zdGFtcCgpIC0gdDAgKyBcInNcIiwgcG9zKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuICBoYXhlLlRpbWVyLnN0YW1wID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDA7XG4gIH1cbiAgaGF4ZS5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgcnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgfVxuICAgICwgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuaWQgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4gICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB9XG4gICAgLCBfX2NsYXNzX186IGhheGUuVGltZXJcbiAgfVxuICB2YXIganMgPSBqcyB8fCB7fVxuICBqcy5Cb290ID0gZnVuY3Rpb24gKCkgeyB9XG4gIGpzLkJvb3QuX19uYW1lX18gPSB0cnVlO1xuICBqcy5Cb290Ll9fdW5odG1sID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcy5zcGxpdChcIiZcIikuam9pbihcIiZhbXA7XCIpLnNwbGl0KFwiPFwiKS5qb2luKFwiJmx0O1wiKS5zcGxpdChcIj5cIikuam9pbihcIiZndDtcIik7XG4gIH1cbiAganMuQm9vdC5fX3RyYWNlID0gZnVuY3Rpb24gKHYsIGkpIHtcbiAgICB2YXIgbXNnID0gaSAhPSBudWxsID8gaS5maWxlTmFtZSArIFwiOlwiICsgaS5saW5lTnVtYmVyICsgXCI6IFwiIDogXCJcIjtcbiAgICBtc2cgKz0ganMuQm9vdC5fX3N0cmluZ19yZWModiwgXCJcIik7XG4gICAgdmFyIGQ7XG4gICAgaWYgKHR5cGVvZiAoZG9jdW1lbnQpICE9IFwidW5kZWZpbmVkXCIgJiYgKGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhheGU6dHJhY2VcIikpICE9IG51bGwpIGQuaW5uZXJIVE1MICs9IGpzLkJvb3QuX191bmh0bWwobXNnKSArIFwiPGJyLz5cIjsgZWxzZSBpZiAodHlwZW9mIChjb25zb2xlKSAhPSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUubG9nICE9IG51bGwpIGNvbnNvbGUubG9nKG1zZyk7XG4gIH1cbiAganMuQm9vdC5fX2NsZWFyX3RyYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXhlOnRyYWNlXCIpO1xuICAgIGlmIChkICE9IG51bGwpIGQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfVxuICBqcy5Cb290LmlzQ2xhc3MgPSBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvLl9fbmFtZV9fO1xuICB9XG4gIGpzLkJvb3QuaXNFbnVtID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5fX2VuYW1lX187XG4gIH1cbiAganMuQm9vdC5nZXRDbGFzcyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8uX19jbGFzc19fO1xuICB9XG4gIGpzLkJvb3QuX19zdHJpbmdfcmVjID0gZnVuY3Rpb24gKG8sIHMpIHtcbiAgICBpZiAobyA9PSBudWxsKSByZXR1cm4gXCJudWxsXCI7XG4gICAgaWYgKHMubGVuZ3RoID49IDUpIHJldHVybiBcIjwuLi4+XCI7XG4gICAgdmFyIHQgPSB0eXBlb2YgKG8pO1xuICAgIGlmICh0ID09IFwiZnVuY3Rpb25cIiAmJiAoby5fX25hbWVfXyB8fCBvLl9fZW5hbWVfXykpIHQgPSBcIm9iamVjdFwiO1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICBpZiAobyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgaWYgKG8uX19lbnVtX18pIHtcbiAgICAgICAgICAgIGlmIChvLmxlbmd0aCA9PSAyKSByZXR1cm4gb1swXTtcbiAgICAgICAgICAgIHZhciBzdHIgPSBvWzBdICsgXCIoXCI7XG4gICAgICAgICAgICBzICs9IFwiXFx0XCI7XG4gICAgICAgICAgICB2YXIgX2cxID0gMiwgX2cgPSBvLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChfZzEgPCBfZykge1xuICAgICAgICAgICAgICB2YXIgaSA9IF9nMSsrO1xuICAgICAgICAgICAgICBpZiAoaSAhPSAyKSBzdHIgKz0gXCIsXCIgKyBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2ldLCBzKTsgZWxzZSBzdHIgKz0ganMuQm9vdC5fX3N0cmluZ19yZWMob1tpXSwgcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyICsgXCIpXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBsID0gby5sZW5ndGg7XG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgdmFyIHN0ciA9IFwiW1wiO1xuICAgICAgICAgIHMgKz0gXCJcXHRcIjtcbiAgICAgICAgICB2YXIgX2cgPSAwO1xuICAgICAgICAgIHdoaWxlIChfZyA8IGwpIHtcbiAgICAgICAgICAgIHZhciBpMSA9IF9nKys7XG4gICAgICAgICAgICBzdHIgKz0gKGkxID4gMCA/IFwiLFwiIDogXCJcIikgKyBqcy5Cb290Ll9fc3RyaW5nX3JlYyhvW2kxXSwgcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ciArPSBcIl1cIjtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0b3N0cjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0b3N0ciA9IG8udG9TdHJpbmc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gXCI/Pz9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9zdHIgIT0gbnVsbCAmJiB0b3N0ciAhPSBPYmplY3QudG9TdHJpbmcpIHtcbiAgICAgICAgICB2YXIgczIgPSBvLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHMyICE9IFwiW29iamVjdCBPYmplY3RdXCIpIHJldHVybiBzMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgayA9IG51bGw7XG4gICAgICAgIHZhciBzdHIgPSBcIntcXG5cIjtcbiAgICAgICAgcyArPSBcIlxcdFwiO1xuICAgICAgICB2YXIgaGFzcCA9IG8uaGFzT3duUHJvcGVydHkgIT0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKSB7XG4gICAgICAgICAgO1xuICAgICAgICAgIGlmIChoYXNwICYmICFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGsgPT0gXCJwcm90b3R5cGVcIiB8fCBrID09IFwiX19jbGFzc19fXCIgfHwgayA9PSBcIl9fc3VwZXJfX1wiIHx8IGsgPT0gXCJfX2ludGVyZmFjZXNfX1wiIHx8IGsgPT0gXCJfX3Byb3BlcnRpZXNfX1wiKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggIT0gMikgc3RyICs9IFwiLCBcXG5cIjtcbiAgICAgICAgICBzdHIgKz0gcyArIGsgKyBcIiA6IFwiICsganMuQm9vdC5fX3N0cmluZ19yZWMob1trXSwgcyk7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IHMuc3Vic3RyaW5nKDEpO1xuICAgICAgICBzdHIgKz0gXCJcXG5cIiArIHMgKyBcIn1cIjtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICByZXR1cm4gXCI8ZnVuY3Rpb24+XCI7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhvKTtcbiAgICB9XG4gIH1cbiAganMuQm9vdC5fX2ludGVyZkxvb3AgPSBmdW5jdGlvbiAoY2MsIGNsKSB7XG4gICAgaWYgKGNjID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoY2MgPT0gY2wpIHJldHVybiB0cnVlO1xuICAgIHZhciBpbnRmID0gY2MuX19pbnRlcmZhY2VzX187XG4gICAgaWYgKGludGYgIT0gbnVsbCkge1xuICAgICAgdmFyIF9nMSA9IDAsIF9nID0gaW50Zi5sZW5ndGg7XG4gICAgICB3aGlsZSAoX2cxIDwgX2cpIHtcbiAgICAgICAgdmFyIGkgPSBfZzErKztcbiAgICAgICAgdmFyIGkxID0gaW50ZltpXTtcbiAgICAgICAgaWYgKGkxID09IGNsIHx8IGpzLkJvb3QuX19pbnRlcmZMb29wKGkxLCBjbCkpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ganMuQm9vdC5fX2ludGVyZkxvb3AoY2MuX19zdXBlcl9fLCBjbCk7XG4gIH1cbiAganMuQm9vdC5fX2luc3RhbmNlb2YgPSBmdW5jdGlvbiAobywgY2wpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKG8gaW5zdGFuY2VvZiBjbCkge1xuICAgICAgICBpZiAoY2wgPT0gQXJyYXkpIHJldHVybiBvLl9fZW51bV9fID09IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGpzLkJvb3QuX19pbnRlcmZMb29wKG8uX19jbGFzc19fLCBjbCkpIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChjbCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHN3aXRjaCAoY2wpIHtcbiAgICAgIGNhc2UgSW50OlxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG8gJSAyMTQ3NDgzNjQ4LjApID09PSBvO1xuICAgICAgY2FzZSBGbG9hdDpcbiAgICAgICAgcmV0dXJuIHR5cGVvZiAobykgPT0gXCJudW1iZXJcIjtcbiAgICAgIGNhc2UgQm9vbDpcbiAgICAgICAgcmV0dXJuIG8gPT09IHRydWUgfHwgbyA9PT0gZmFsc2U7XG4gICAgICBjYXNlIFN0cmluZzpcbiAgICAgICAgcmV0dXJuIHR5cGVvZiAobykgPT0gXCJzdHJpbmdcIjtcbiAgICAgIGNhc2UgRHluYW1pYzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobyA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChjbCA9PSBDbGFzcyAmJiBvLl9fbmFtZV9fICE9IG51bGwpIHJldHVybiB0cnVlOyBlbHNlIG51bGw7XG4gICAgICAgIGlmIChjbCA9PSBFbnVtICYmIG8uX19lbmFtZV9fICE9IG51bGwpIHJldHVybiB0cnVlOyBlbHNlIG51bGw7XG4gICAgICAgIHJldHVybiBvLl9fZW51bV9fID09IGNsO1xuICAgIH1cbiAgfVxuICBqcy5Cb290Ll9fY2FzdCA9IGZ1bmN0aW9uIChvLCB0KSB7XG4gICAgaWYgKGpzLkJvb3QuX19pbnN0YW5jZW9mKG8sIHQpKSByZXR1cm4gbzsgZWxzZSB0aHJvdyBcIkNhbm5vdCBjYXN0IFwiICsgU3RkLnN0cmluZyhvKSArIFwiIHRvIFwiICsgU3RkLnN0cmluZyh0KTtcbiAgfVxuICBqcy5MaWIgPSBmdW5jdGlvbiAoKSB7IH1cbiAganMuTGliLl9fbmFtZV9fID0gdHJ1ZTtcbiAganMuTGliLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnZ2VyO1xuICB9XG4gIGpzLkxpYi5hbGVydCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgYWxlcnQoanMuQm9vdC5fX3N0cmluZ19yZWModiwgXCJcIikpO1xuICB9XG4gIGpzLkxpYi5ldmFsID0gZnVuY3Rpb24gKGNvZGUpIHtcbiAgICByZXR1cm4gZXZhbChjb2RlKTtcbiAgfVxuICBqcy5MaWIuc2V0RXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGYpIHtcbiAgICBqcy5MaWIub25lcnJvciA9IGY7XG4gIH1cbiAgdmFyICRfO1xuICBmdW5jdGlvbiAkYmluZChvLCBtKSB7IHZhciBmID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZi5tZXRob2QuYXBwbHkoZi5zY29wZSwgYXJndW1lbnRzKTsgfTsgZi5zY29wZSA9IG87IGYubWV0aG9kID0gbTsgcmV0dXJuIGY7IH07XG4gIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikgSHhPdmVycmlkZXMucmVtb3ZlID0gZnVuY3Rpb24gKGEsIG8pIHtcbiAgICB2YXIgaSA9IGEuaW5kZXhPZihvKTtcbiAgICBpZiAoaSA9PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGEuc3BsaWNlKGksIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9OyBlbHNlIG51bGw7XG4gIE1hdGguX19uYW1lX18gPSBbXCJNYXRoXCJdO1xuICBNYXRoLk5hTiA9IE51bWJlci5OYU47XG4gIE1hdGguTkVHQVRJVkVfSU5GSU5JVFkgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gIE1hdGguUE9TSVRJVkVfSU5GSU5JVFkgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gIE1hdGguaXNGaW5pdGUgPSBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpc0Zpbml0ZShpKTtcbiAgfTtcbiAgTWF0aC5pc05hTiA9IGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIGlzTmFOKGkpO1xuICB9O1xuICBTdHJpbmcucHJvdG90eXBlLl9fY2xhc3NfXyA9IFN0cmluZztcbiAgU3RyaW5nLl9fbmFtZV9fID0gdHJ1ZTtcbiAgQXJyYXkucHJvdG90eXBlLl9fY2xhc3NfXyA9IEFycmF5O1xuICBBcnJheS5fX25hbWVfXyA9IHRydWU7XG4gIERhdGUucHJvdG90eXBlLl9fY2xhc3NfXyA9IERhdGU7XG4gIERhdGUuX19uYW1lX18gPSBbXCJEYXRlXCJdO1xuICB2YXIgSW50ID0geyBfX25hbWVfXzogW1wiSW50XCJdIH07XG4gIHZhciBEeW5hbWljID0geyBfX25hbWVfXzogW1wiRHluYW1pY1wiXSB9O1xuICB2YXIgRmxvYXQgPSBOdW1iZXI7XG4gIEZsb2F0Ll9fbmFtZV9fID0gW1wiRmxvYXRcIl07XG4gIHZhciBCb29sID0gQm9vbGVhbjtcbiAgQm9vbC5fX2VuYW1lX18gPSBbXCJCb29sXCJdO1xuICB2YXIgQ2xhc3MgPSB7IF9fbmFtZV9fOiBbXCJDbGFzc1wiXSB9O1xuICB2YXIgRW51bSA9IHt9O1xuICB2YXIgVm9pZCA9IHsgX19lbmFtZV9fOiBbXCJWb2lkXCJdIH07XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIikganMuTGliLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICBqcy5MaWIud2luZG93ID0gd2luZG93O1xuICAgIGpzLkxpYi53aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIChtc2csIHVybCwgbGluZSkge1xuICAgICAgdmFyIGYgPSBqcy5MaWIub25lcnJvcjtcbiAgICAgIGlmIChmID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmKG1zZywgW3VybCArIFwiOlwiICsgbGluZV0pO1xuICAgIH07XG4gIH1cbiAgY29tLndpcmlzLmpzLkpzUGx1Z2luVG9vbHMubWFpbigpO1xufSgpKTtcbmRlbGV0ZSBBcnJheS5wcm90b3R5cGUuX19jbGFzc19fO1xuLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZUVuZFxuIiwiaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCBMYXRleCBmcm9tICcuL2xhdGV4JztcbmltcG9ydCBNYXRoTUwgZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vaW1hZ2UnO1xuaW1wb3J0IEFjY2Vzc2liaWxpdHkgZnJvbSAnLi9hY2Nlc3NpYmlsaXR5JztcbmltcG9ydCBTZXJ2aWNlUHJvdmlkZXIgZnJvbSAnLi9zZXJ2aWNlcHJvdmlkZXInO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgbWQ1IGZyb20gJy4vbWQ1JztcblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudCBhIE1haE1MIHBhcnNlci4gQ29udmVydHMgTWF0aE1MIGludG8gZm9ybXVsYXMgZGVwZW5kaW5nIG9uIHRoZVxuICogaW1hZ2UgZm9ybWF0IChTVkcsIFBORywgYmFzZTY0KSBhbmQgdGhlIHNhdmUgbW9kZSAoWE1MLCBzYWZlWE1MLCBJbWFnZSkgY29uZmlndXJlZFxuICogaW4gdGhlIGJhY2tlbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlciB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIE1hdGhNTCBzdHJpbmcgdG8gYW4gaW1nIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RG9jdW1lbnR9IGNyZWF0b3IgLSBEb2N1bWVudCBvYmplY3QgdG8gY2FsbCBjcmVhdGVFbGVtZW50IG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBjb2RlXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHdpcmlzUHJvcGVydGllcyAtIG9iamVjdCBjb250YWluaW5nIFdJUklTIGN1c3RvbSBwcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSB7bGFuZ3VhZ2V9IGxhbmd1YWdlIC0gY3VzdG9tIGxhbmd1YWdlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgKiBAcmV0dXJucyB7SFRNTEltYWdlRWxlbWVudH0gdGhlIGZvcm11bGEgaW1hZ2UgY29ycmVzcG9uZGluZyB0byBpbml0aWFsIE1hdGhNTCBzdHJpbmcuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBtYXRobWxUb0ltZ09iamVjdChjcmVhdG9yLCBtYXRobWwsIHdpcmlzUHJvcGVydGllcywgbGFuZ3VhZ2UpIHtcbiAgICBjb25zdCBpbWdPYmplY3QgPSBjcmVhdG9yLmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ09iamVjdC5hbGlnbiA9ICdtaWRkbGUnO1xuICAgIGltZ09iamVjdC5zdHlsZS5tYXhXaWR0aCA9ICdub25lJztcbiAgICBsZXQgZGF0YSA9IHdpcmlzUHJvcGVydGllcyB8fCB7fTtcblxuICAgIC8vIFRha2UgaW50byBhY2NvdW50IHRoZSBiYWNrZW5kIGNvbmZpZ1xuICAgIGNvbnN0IHdpcmlzRWRpdG9yUHJvcGVydGllcyA9IENvbmZpZ3VyYXRpb24uZ2V0KFwiZWRpdG9yUGFyYW1ldGVyc1wiKTtcbiAgICBkYXRhID0geyAuLi53aXJpc0VkaXRvclByb3BlcnRpZXMsIC4uLmRhdGEgfTtcblxuICAgIGRhdGEubW1sID0gbWF0aG1sO1xuICAgIGRhdGEubGFuZyA9IGxhbmd1YWdlO1xuICAgIC8vIFJlcXVlc3QgbWV0cmljcyBvZiB0aGUgZ2VuZXJhdGVkIGltYWdlLlxuICAgIGRhdGEubWV0cmljcyA9ICd0cnVlJztcbiAgICBkYXRhLmNlbnRlcmJhc2VsaW5lID0gJ2ZhbHNlJztcblxuICAgIC8vIEZ1bGwgYmFzZTY0IG1ldGhvZCAoZWRpdCAmIHNhdmUpLlxuICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ2Jhc2U2NCcgJiYgQ29uZmlndXJhdGlvbi5nZXQoJ2Jhc2U2NHNhdmVtb2RlJykgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZGF0YS5iYXNlNjQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciBqcyBwYXJhbXM6IF93cnNfaW50X3dpcmlzUHJvcGVydGllcyBjb250YWlucyBzb21lIGpzIHJlbmRlciBwYXJhbXMuXG4gICAgLy8gU2luY2UgTWF0aE1MIGNhbiBzdXBwb3J0IHJlbmRlciBwYXJhbXMsIGpzIHBhcmFtcyBzaG91bGQgYmUgc2VuZCBvbmx5IHRvIGVkaXRvci5cblxuICAgIGltZ09iamVjdC5jbGFzc05hbWUgPSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDbGFzc05hbWUnKTtcblxuICAgIGlmIChtYXRobWwuaW5kZXhPZignY2xhc3M9XCInKSAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIGNoZWNrIGhlcmUgaWYgdGhlIE1hdGhNTCBoYXMgYmVlbiBjcmVhdGVkIGZyb20gYSBjdXN0b21FZGl0b3IgKHN1Y2ggY2hlbWlzdHJ5KVxuICAgICAgLy8gdG8gYWRkIGN1c3RvbSBlZGl0b3IgbmFtZSBhdHRyaWJ1dGUgdG8gaW1nIG9iamVjdCAoaWYgbmVjZXNzYXJ5KS5cbiAgICAgIGxldCBtYXRobWxTdWJzdHJpbmcgPSBtYXRobWwuc3Vic3RyaW5nKG1hdGhtbC5pbmRleE9mKCdjbGFzcz1cIicpICsgJ2NsYXNzPVwiJy5sZW5ndGgsIG1hdGhtbC5sZW5ndGgpO1xuICAgICAgbWF0aG1sU3Vic3RyaW5nID0gbWF0aG1sU3Vic3RyaW5nLnN1YnN0cmluZygwLCBtYXRobWxTdWJzdHJpbmcuaW5kZXhPZignXCInKSk7XG4gICAgICBtYXRobWxTdWJzdHJpbmcgPSBtYXRobWxTdWJzdHJpbmcuc3Vic3RyaW5nKDQsIG1hdGhtbFN1YnN0cmluZy5sZW5ndGgpO1xuICAgICAgaW1nT2JqZWN0LnNldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDdXN0b21FZGl0b3JOYW1lJyksIG1hdGhtbFN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybWFuY2UgZW5hYmxlZC5cbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3dpcmlzUGx1Z2luUGVyZm9ybWFuY2UnKSAmJiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICd4bWwnIHx8IENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnc2FmZVhtbCcpKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShQYXJzZXIuY3JlYXRlU2hvd0ltYWdlU3JjKGRhdGEsIGxhbmd1YWdlKSk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3dhcm5pbmcnKSB7XG4gICAgICAgIC8vIFBPU1QgY2FsbC5cbiAgICAgICAgLy8gaWYgdGhlIG1hdGhtbCBpcyBtYWxmb3JtZWQsIHRoaXMgZnVuY3Rpb24gd2lsbCB0aHJvdyBhbiBleGNlcHRpb24uXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShTZXJ2aWNlUHJvdmlkZXIuZ2V0U2VydmljZSgnc2hvd2ltYWdlJywgZGF0YSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICh7IHJlc3VsdCB9ID0gcmVzdWx0KTtcbiAgICAgIGlmIChyZXN1bHQuZm9ybWF0ID09PSAncG5nJykge1xuICAgICAgICBpbWdPYmplY3Quc3JjID0gYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke3Jlc3VsdC5jb250ZW50fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWdPYmplY3Quc3JjID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJHtVdGlsLnVybEVuY29kZShyZXN1bHQuY29udGVudCl9YDtcbiAgICAgIH1cbiAgICAgIGltZ09iamVjdC5zZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJyksIE1hdGhNTC5zYWZlWG1sRW5jb2RlKG1hdGhtbCkpO1xuICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWdPYmplY3QsIHJlc3VsdC5jb250ZW50LCB0cnVlKTtcblxuICAgICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdlbmFibGVBY2Nlc3NpYmlsaXR5JykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuYWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGltZ09iamVjdC5hbHQgPSBBY2Nlc3NpYmlsaXR5Lm1hdGhNTFRvQWNjZXNzaWJsZShtYXRobWwsIGxhbmd1YWdlLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWdPYmplY3QuYWx0ID0gcmVzdWx0LmFsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBQYXJzZXIuY3JlYXRlSW1hZ2VTcmMobWF0aG1sLCBkYXRhKTtcbiAgICAgIGltZ09iamVjdC5zZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJyksIE1hdGhNTC5zYWZlWG1sRW5jb2RlKG1hdGhtbCkpO1xuICAgICAgaW1nT2JqZWN0LnNyYyA9IHJlc3VsdDtcbiAgICAgIEltYWdlLnNldEltZ1NpemUoaW1nT2JqZWN0LCByZXN1bHQsIENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpID09PSAnYmFzZTY0JyAmJiBDb25maWd1cmF0aW9uLmdldCgnYmFzZTY0c2F2ZW1vZGUnKSA9PT0gJ2RlZmF1bHQnKTtcbiAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnZW5hYmxlQWNjZXNzaWJpbGl0eScpKSB7XG4gICAgICAgIGltZ09iamVjdC5hbHQgPSBBY2Nlc3NpYmlsaXR5Lm1hdGhNTFRvQWNjZXNzaWJsZShtYXRobWwsIGxhbmd1YWdlLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFBhcnNlci5vYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIFBhcnNlci5vYnNlcnZlci5vYnNlcnZlKGltZ09iamVjdCk7XG4gICAgfVxuXG4gICAgLy8gUm9sZSBtYXRoIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS9yb2xlcyNtYXRoLlxuICAgIGltZ09iamVjdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWF0aCcpO1xuICAgIHJldHVybiBpbWdPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc291cmNlIHRvIHNob3dpbWFnZSBzZXJ2aWNlIGJ5IGNhbGxpbmcgY3JlYXRlaW1hZ2Ugc2VydmljZS4gVGhlXG4gICAqIG91dHB1dCBvZiB0aGUgY3JlYXRlaW1hZ2Ugc2VydmljZSBpcyBhIFVSTCBwYXRoIHBvaW50aW5nIHRvIHNob3dpbWFnZSBzZXJ2aWNlLlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBwZXJmb3JtYW5jZSBpcyBkaXNhYmxlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGhtbCAtIE1hdGhNTCBjb2RlLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBkYXRhIC0gZGF0YSBvYmplY3QgY29udGFpbmluZyBzZXJ2aWNlIHBhcmFtZXRlcnMuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBzaG93aW1hZ2UgcGF0aC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVJbWFnZVNyYyhtYXRobWwsIGRhdGEpIHtcbiAgICAvLyBGdWxsIGJhc2U2NCBtZXRob2QgKGVkaXQgJiBzYXZlKS5cbiAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdiYXNlNjQnICYmIENvbmZpZ3VyYXRpb24uZ2V0KCdiYXNlNjRzYXZlbW9kZScpID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGRhdGEuYmFzZTY0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2UoJ2NyZWF0ZWltYWdlJywgZGF0YSk7XG5cbiAgICBpZiAocmVzdWx0LmluZGV4T2YoJ0BCQVNFQCcpICE9PSAtMSkge1xuICAgICAgLy8gUmVwbGFjaW5nICdAQkFTRUAnIHdpdGggdGhlIGJhc2UgVVJMIG9mIGNyZWF0ZWltYWdlLlxuICAgICAgY29uc3QgYmFzZVBhcnRzID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2VQYXRoKCdjcmVhdGVpbWFnZScpLnNwbGl0KCcvJyk7XG4gICAgICBiYXNlUGFydHMucG9wKCk7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQoJ0BCQVNFQCcpLmpvaW4oYmFzZVBhcnRzLmpvaW4oJy8nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgaW5pdGlhbCBIVE1MIGNvZGUuIElmIHRoZSBIVE1MIGNvbnRhaW5zIGRhdGEgZ2VuZXJhdGVkIGJ5IFdJUklTLFxuICAgKiB0aGlzIGRhdGEgd291bGQgYmUgY29udmVydGVkIGFzIGZvbGxvd2luZzpcbiAgICogPHByZT5cbiAgICogTWF0aE1MIGNvZGU6IEltYWdlIGNvbnRhaW5pbmcgdGhlIGNvcnJlc3BvbmRpbmcgTWF0aE1MIGZvcm11bGFzLlxuICAgKiBNYXRoTUwgY29kZSB3aXRoIExhVGVYIGFubm90YXRpb24gOiBMYVRlWCBzdHJpbmcuXG4gICAqIDwvcHJlPlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSBjb250YWluaW5nIE1hdGhNTCBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBsYW5ndWFnZSB0byBjcmVhdGUgaW1hZ2UgYWx0IHRleHQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgY29kZSB3aXRoIHRoZSBvcmlnaW5hbCBNYXRoTUwgY29udmVydGVkIGludG8gTGFUZVggYW5kIGltYWdlcy5cbiAgICovXG4gIHN0YXRpYyBpbml0UGFyc2UoY29kZSwgbGFuZ3VhZ2UpIHtcbiAgICAvKiBOb3RlOiBUaGUgY29kZSBpbnNpZGUgdGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBpbnZlcnRlZC5cbiAgICBJZiB5b3UgaW52ZXJ0IGFnYWluIHRoZSBjb2RlIHRoZW4geW91IGNhbm5vdCB1c2UgY29ycmVjdGx5IExhVGVYXG4gICAgaW4gTW9vZGxlLlxuICAgICovXG4gICAgY29kZSA9IFBhcnNlci5pbml0UGFyc2VTYXZlTW9kZShjb2RlLCBsYW5ndWFnZSk7XG4gICAgcmV0dXJuIFBhcnNlci5pbml0UGFyc2VFZGl0TW9kZShjb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgaW5pdGlhbCBIVE1MIGNvZGUgZGVwZW5kaW5nIG9uIHRoZSBzYXZlIG1vZGUuIFRyYW5zZm9ybXMgYWxsIE1hdGhNTFxuICAgKiBvY2N1cnJlbmNlcyBmb3IgaXQncyBjb3JyZXNwb25kZW50IGltYWdlIG9yIExhVGVYLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSB0byBiZSBwYXJzZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIC0gbGFuZ3VhZ2UgdG8gY3JlYXRlIGltYWdlIGFsdCB0ZXh0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBIVE1MIGNvZGUgcGFyc2VkLlxuICAgKi9cbiAgc3RhdGljIGluaXRQYXJzZVNhdmVNb2RlKGNvZGUsIGxhbmd1YWdlKSB7XG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpKSB7XG4gICAgICAvLyBDb252ZXJ0aW5nIFhNTCB0byB0YWdzLlxuICAgICAgY29kZSA9IExhdGV4LnBhcnNlTWF0aG1sVG9MYXRleChjb2RlLCBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMpO1xuICAgICAgY29kZSA9IExhdGV4LnBhcnNlTWF0aG1sVG9MYXRleChjb2RlLCBDb25zdGFudHMueG1sQ2hhcmFjdGVycyk7XG4gICAgICBjb2RlID0gUGFyc2VyLnBhcnNlTWF0aG1sVG9JbWcoY29kZSwgQ29uc3RhbnRzLnNhZmVYbWxDaGFyYWN0ZXJzLCBsYW5ndWFnZSk7XG4gICAgICBjb2RlID0gUGFyc2VyLnBhcnNlTWF0aG1sVG9JbWcoY29kZSwgQ29uc3RhbnRzLnhtbENoYXJhY3RlcnMsIGxhbmd1YWdlKTtcbiAgICAgIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ2Jhc2U2NCcgJiYgQ29uZmlndXJhdGlvbi5nZXQoJ2Jhc2U2NHNhdmVtb2RlJykgPT09ICdpbWFnZScpIHtcbiAgICAgICAgY29kZSA9IFBhcnNlci5jb2RlSW1nVHJhbnNmb3JtKGNvZGUsICdiYXNlNjQyc2hvd2ltYWdlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBpbml0aWFsIEhUTUwgY29kZSBkZXBlbmRpbmcgb24gdGhlIGVkaXQgbW9kZS5cbiAgICogSWYgJ2xhdGV4JyBwYXJzZU1vZGUgaXMgZW5hYmxlZCBhbGwgTWF0aE1MIGNvbnRhaW5pbmcgYW4gYW5ub3RhdGlvbiB3aXRoIGVuY29kaW5nPSdMYVRlWCcgd2lsbFxuICAgKiBiZSBjb252ZXJ0ZWQgaW50byBhIExhVGVYIHN0cmluZyBpbnN0ZWFkIG9mIGFuIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSBjb250YWluaW5nIE1hdGhNTC5cbiAgICogQHJldHVybnMge3N0cmluZ30gcGFyc2VkIEhUTUwgY29kZS5cbiAgICovXG4gIHN0YXRpYyBpbml0UGFyc2VFZGl0TW9kZShjb2RlKSB7XG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdwYXJzZU1vZGVzJykuaW5kZXhPZignbGF0ZXgnKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBVdGlsLmdldEVsZW1lbnRzQnlOYW1lRnJvbVN0cmluZyhjb2RlLCAnaW1nJywgdHJ1ZSk7XG4gICAgICBjb25zdCB0b2tlbiA9ICdlbmNvZGluZz1cIkxhVGVYXCI+JztcbiAgICAgIC8vIFdoaWxlIHJlcGxhY2luZyBpbWFnZXMgd2l0aCBsYXRleCwgdGhlIGluZGV4ZXMgb2YgdGhlIGZvdW5kIGltYWdlcyBjaGFuZ2VzXG4gICAgICAvLyByZXNwZWN0aW5nIHRoZSBvcmlnaW5hbCBjb2RlLCBzbyB0aGlzIGNhcnJ5IGlzIG5lZWRlZC5cbiAgICAgIGxldCBjYXJyeSA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1nTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpbWdDb2RlID0gY29kZS5zdWJzdHJpbmcoaW1nTGlzdFtpXS5zdGFydCArIGNhcnJ5LCBpbWdMaXN0W2ldLmVuZCArIGNhcnJ5KTtcblxuICAgICAgICBpZiAoaW1nQ29kZS5pbmRleE9mKGAgY2xhc3M9XCIke0NvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpfVwiYCkgIT09IC0xKSB7XG4gICAgICAgICAgbGV0IG1hdGhtbFN0YXJ0VG9rZW4gPSBgICR7Q29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJyl9PVwiYDtcbiAgICAgICAgICBsZXQgbWF0aG1sU3RhcnQgPSBpbWdDb2RlLmluZGV4T2YobWF0aG1sU3RhcnRUb2tlbik7XG5cbiAgICAgICAgICBpZiAobWF0aG1sU3RhcnQgPT09IC0xKSB7XG4gICAgICAgICAgICBtYXRobWxTdGFydFRva2VuID0gJyBhbHQ9XCInO1xuICAgICAgICAgICAgbWF0aG1sU3RhcnQgPSBpbWdDb2RlLmluZGV4T2YobWF0aG1sU3RhcnRUb2tlbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGhtbFN0YXJ0ICE9PSAtMSkge1xuICAgICAgICAgICAgbWF0aG1sU3RhcnQgKz0gbWF0aG1sU3RhcnRUb2tlbi5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBtYXRobWxFbmQgPSBpbWdDb2RlLmluZGV4T2YoJ1wiJywgbWF0aG1sU3RhcnQpO1xuICAgICAgICAgICAgY29uc3QgbWF0aG1sID0gVXRpbC5odG1sU2FuaXRpemUoTWF0aE1MLnNhZmVYbWxEZWNvZGUoaW1nQ29kZS5zdWJzdHJpbmcobWF0aG1sU3RhcnQsIG1hdGhtbEVuZCkpKTtcbiAgICAgICAgICAgIGxldCBsYXRleFN0YXJ0UG9zaXRpb24gPSBtYXRobWwuaW5kZXhPZih0b2tlbik7XG5cbiAgICAgICAgICAgIGlmIChsYXRleFN0YXJ0UG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgIGxhdGV4U3RhcnRQb3NpdGlvbiArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICAgIGNvbnN0IGxhdGV4RW5kUG9zaXRpb24gPSBtYXRobWwuaW5kZXhPZignPC9hbm5vdGF0aW9uPicsIGxhdGV4U3RhcnRQb3NpdGlvbik7XG4gICAgICAgICAgICAgIGNvbnN0IGxhdGV4ID0gbWF0aG1sLnN1YnN0cmluZyhsYXRleFN0YXJ0UG9zaXRpb24sIGxhdGV4RW5kUG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VUZXh0ID0gYCQkJHtVdGlsLmh0bWxFbnRpdGllc0RlY29kZShsYXRleCl9JCRgO1xuICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGNvZGUuc3Vic3RyaW5nKDAsIGltZ0xpc3RbaV0uc3RhcnQgKyBjYXJyeSk7XG4gICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGNvZGUuc3Vic3RyaW5nKGltZ0xpc3RbaV0uZW5kICsgY2FycnkpO1xuICAgICAgICAgICAgICBjb2RlID0gc3RhcnQgKyByZXBsYWNlVGV4dCArIGVuZDtcbiAgICAgICAgICAgICAgY2FycnkgKz0gcmVwbGFjZVRleHQubGVuZ3RoIC0gKGltZ0xpc3RbaV0uZW5kIC0gaW1nTGlzdFtpXS5zdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGVuZCBIVE1MIGNvZGUuIFRoZSBlbmQgSFRNTCBjb2RlIGlzIEhUTUwgY29kZSB3aXRoIGVtYmVkZGVkIGltYWdlc1xuICAgKiBvciBMYVRlWCBmb3JtdWxhcyBjcmVhdGVkIHdpdGggTWF0aFR5cGUuIDxicj5cbiAgICogQnkgZGVmYXVsdCB0aGlzIG1ldGhvZCBjb252ZXJ0cyB0aGUgZm9ybXVsYSBpbWFnZXMgYW5kIExhVGVYIHN0cmluZ3MgaW4gTWF0aE1MLiA8YnI+XG4gICAqIElmIGltYWdlIG1vZGUgaXMgZW5hYmxlZCB0aGUgaW1hZ2VzIHdpbGwgbm90IGJlIGNvbnZlcnRlZCBpbnRvIE1hdGhNTC4gRm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24gc2VlIHtAbGluayBodHRwczovL2RvY3Mud2lyaXMuY29tL21hdGh0eXBlL2VuL21hdGh0eXBlLWludGVncmF0aW9ucy9tYXRodHlwZS13ZWItaW50ZXJmYWNlLWZlYXR1cmVzL2Z1bGwtbWF0aG1sLW1vZGUtLS13aXJpc3BsdWdpbnMtanMuaHRtbH0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gSFRNTCB0byBiZSBwYXJzZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIEhUTUwgY29kZSBwYXJzZWQuXG4gICAqL1xuICBzdGF0aWMgZW5kUGFyc2UoY29kZSkge1xuICAgIC8vIFRyYW5zZm9ybSBMYVRlWCBvY3VycmVuY2VzIHRvIE1hdGhNTCBlbGVtZW50cy5cbiAgICBjb25zdCBjb2RlRW5kUGFyc2VkRWRpdE1vZGUgPSBQYXJzZXIuZW5kUGFyc2VFZGl0TW9kZShjb2RlKTtcbiAgICAvLyBUcmFuc2Zvcm0gaW1nIGVsZW1lbnRzIHRvIE1hdGhNTCBlbGVtZW50cy5cbiAgICBjb25zdCBjb2RlRW5kUGFyc2VTYXZlTW9kZSA9IFBhcnNlci5lbmRQYXJzZVNhdmVNb2RlKGNvZGVFbmRQYXJzZWRFZGl0TW9kZSk7XG4gICAgcmV0dXJuIGNvZGVFbmRQYXJzZVNhdmVNb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBlbmQgSFRNTCBjb2RlIGRlcGVuZGluZyBvbiB0aGUgZWRpdCBtb2RlLlxuICAgKiAtIExhVGVYIGlzIGFuIGVuYWJsZWQgcGFyc2UgbW9kZSwgYWxsIExhVGVYIG9jY3VycmVuY2VzIHdpbGwgYmUgY29udmVydGVkIGludG8gTWF0aE1MLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEhUTUwgY29kZSB0byBiZSBwYXJzZWQuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgY29kZSBwYXJzZWQuXG4gICAqL1xuICBzdGF0aWMgZW5kUGFyc2VFZGl0TW9kZShjb2RlKSB7XG4gICAgLy8gQ29udmVydGluZyBMYVRlWCB0byBpbWFnZXMuXG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdwYXJzZU1vZGVzJykuaW5kZXhPZignbGF0ZXgnKSAhPT0gLTEpIHtcbiAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgIGxldCBlbmRQb3NpdGlvbiA9IDA7XG4gICAgICBsZXQgc3RhcnRQb3NpdGlvbiA9IGNvZGUuaW5kZXhPZignJCQnKTtcbiAgICAgIHdoaWxlIChzdGFydFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICBvdXRwdXQgKz0gY29kZS5zdWJzdHJpbmcoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pO1xuICAgICAgICBlbmRQb3NpdGlvbiA9IGNvZGUuaW5kZXhPZignJCQnLCBzdGFydFBvc2l0aW9uICsgMik7XG5cbiAgICAgICAgaWYgKGVuZFBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgIC8vIEJlZm9yZSwgaXQgd2FzIGEgY29uZGl0aW9uIGhlcmUgdG8gZXhlY3V0ZSB0aGUgbmV4dCBjb2RlbGluZXNcbiAgICAgICAgICAvLyAnbGF0ZXguaW5kZXhPZignPCcpID09IC0xJy5cbiAgICAgICAgICAvLyBXZSBkb24ndCBrbm93IHdoeSBpdCB3YXMgdXNlZCwgYnV0IHNlZW1zIHRvIGhhdmUgYSBjb25mbGljdCB3aXRoXG4gICAgICAgICAgLy8gbGF0ZXggZm9ybXVsYXMgdGhhdCBjb250YWlucyAnPCcuXG4gICAgICAgICAgY29uc3QgbGF0ZXggPSBjb2RlLnN1YnN0cmluZyhzdGFydFBvc2l0aW9uICsgMiwgZW5kUG9zaXRpb24pO1xuICAgICAgICAgIGNvbnN0IGRlY29kZWRMYXRleCA9IFV0aWwuaHRtbEVudGl0aWVzRGVjb2RlKGxhdGV4KTtcbiAgICAgICAgICBsZXQgbWF0aG1sID0gVXRpbC5odG1sU2FuaXRpemUoTGF0ZXguZ2V0TWF0aE1MRnJvbUxhdGV4KGRlY29kZWRMYXRleCwgdHJ1ZSkpO1xuICAgICAgICAgIGlmICghQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVIYW5kVHJhY2VzJykpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBoYW5kIHRyYWNlcy5cbiAgICAgICAgICAgIG1hdGhtbCA9IE1hdGhNTC5yZW1vdmVBbm5vdGF0aW9uKG1hdGhtbCwgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0cHV0ICs9IG1hdGhtbDtcbiAgICAgICAgICBlbmRQb3NpdGlvbiArPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCArPSAnJCQnO1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbiArIDI7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydFBvc2l0aW9uID0gY29kZS5pbmRleE9mKCckJCcsIGVuZFBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ICs9IGNvZGUuc3Vic3RyaW5nKGVuZFBvc2l0aW9uLCBjb2RlLmxlbmd0aCk7XG4gICAgICBjb2RlID0gb3V0cHV0O1xuICAgIH1cblxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBlbmQgSFRNTCBjb2RlIGRlcGVuZGluZyBvbiB0aGUgc2F2ZSBtb2RlLiBDb252ZXJ0cyBhbGxcbiAgICogaW1hZ2VzIGludG8gdGhlIGVsZW1lbnQgZGV0ZXJtaW5lZCBieSB0aGUgc2F2ZSBtb2RlOlxuICAgKiAtIHhtbDogUGFyc2VzIGltYWdlcyBmb3JtdWxhcyBpbnRvIE1hdGhNTC5cbiAgICogLSBzYWZlWG1sOiBQYXJzZXMgaW1hZ2VzIGZvcm11bGFzIGludG8gc2FmZU1BdGhNTFxuICAgKiAtIGJhc2U2NDogUGFyc2VzIGltYWdlcyBpbnRvIGJhc2U2NCBpbWFnZXMuXG4gICAqIC0gaW1hZ2U6IFBhcnNlIGltYWdlcyBpbnRvIGltYWdlcyAobm8gcGFyc2luZylcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSBIVE1MIGNvZGUgdG8gYmUgcGFyc2VkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEhUTUwgY29kZSBwYXJzZWQuXG4gICAqL1xuICBzdGF0aWMgZW5kUGFyc2VTYXZlTW9kZShjb2RlKSB7XG4gICAgaWYgKENvbmZpZ3VyYXRpb24uZ2V0KCdzYXZlTW9kZScpKSB7XG4gICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdzYWZlWG1sJykge1xuICAgICAgICBjb2RlID0gUGFyc2VyLmNvZGVJbWdUcmFuc2Zvcm0oY29kZSwgJ2ltZzJtYXRobWwnKTtcbiAgICAgIH0gZWxzZSBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICd4bWwnKSB7XG4gICAgICAgIGNvZGUgPSBQYXJzZXIuY29kZUltZ1RyYW5zZm9ybShjb2RlLCAnaW1nMm1hdGhtbCcpO1xuICAgICAgfSBlbHNlIGlmIChDb25maWd1cmF0aW9uLmdldCgnc2F2ZU1vZGUnKSA9PT0gJ2Jhc2U2NCcgJiYgQ29uZmlndXJhdGlvbi5nZXQoJ2Jhc2U2NHNhdmVtb2RlJykgPT09ICdpbWFnZScpIHtcbiAgICAgICAgY29kZSA9IFBhcnNlci5jb2RlSW1nVHJhbnNmb3JtKGNvZGUsICdpbWcyNjQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEF1eGlsaWFyIGZ1bmN0aW9uIHRoYXQgYnVpbGRzIHRoZSBkYXRhIG9iamVjdCB0byBzZW5kIHRvIHRoZSBzaG93aW1hZ2UgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YSAtIG9iamVjdCBjb250YWluaW5nIHNob3dpbWFnZSBzZXJ2aWNlIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSAtIHN0cmluZyBjb250YWluaW5nIHRoZSBsYW5ndWFnZSBvZiB0aGUgZm9ybXVsYS5cbiAgICogQHJldHVybnMge09iamVjdH0gSlNPTiBvYmplY3Qgd2l0aCB0aGUgZGF0YSB0byBzZW5kIHRvIHNob3dpbWFnZS5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVTaG93SW1hZ2VTcmNEYXRhKGRhdGEsIGxhbmd1YWdlKSB7XG4gICAgY29uc3QgZGF0YU1kNSA9IHt9O1xuICAgIGNvbnN0IHJlbmRlclBhcmFtcyA9IFsnbW1sJywgJ2NvbG9yJywgJ2NlbnRlcmJhc2VsaW5lJywgJ3pvb20nLCAnZHBpJywgJ2ZvbnRTaXplJywgJ2ZvbnRGYW1pbHknLCAnZGVmYXVsdFN0cmV0Y2h5JywgJ2JhY2tncm91bmRDb2xvcicsICdmb3JtYXQnXTtcbiAgICByZW5kZXJQYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YVtwYXJhbV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRhdGFNZDVbcGFyYW1dID0gZGF0YVtwYXJhbV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gRGF0YSB2YXJpYWJsZXMgdG8gZ2V0LlxuICAgIGNvbnN0IGRhdGFPYmplY3QgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgbWF0aG1sIGluIHRoaXMgcmVxdWVzdCB3ZSB0cnkgdG8gZ2V0IGNhY2hlZC5cbiAgICAgIC8vIE9ubHkgbmVlZCB0aGUgZm9ybXVsYSBtZDUgY2FsY3VsYXRlZCBiZWZvcmUuXG4gICAgICBpZiAoa2V5ICE9PSAnbW1sJykge1xuICAgICAgICBkYXRhT2JqZWN0W2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkYXRhT2JqZWN0LmZvcm11bGEgPSBjb20ud2lyaXMuanMuSnNQbHVnaW5Ub29scy5tZDVlbmNvZGUoVXRpbC5wcm9wZXJ0aWVzVG9TdHJpbmcoZGF0YU1kNSkpO1xuICAgIGRhdGFPYmplY3QubGFuZyA9ICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICd1bmRlZmluZWQnKSA/ICdlbicgOiBsYW5ndWFnZTtcbiAgICBkYXRhT2JqZWN0LnZlcnNpb24gPSBDb25maWd1cmF0aW9uLmdldCgndmVyc2lvbicpO1xuXG4gICAgcmV0dXJuIGRhdGFPYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IHRvIGNhbGwgc2hvd2ltYWdlIHNlcnZpY2Ugd2l0aCB0aGUgZm9ybXVsYSBtZDUgYXMgcGFyYW1ldGVyLlxuICAgKiAgVGhlIHJlc3VsdCBjb3VsZCBiZTpcbiAgICogLSB7J3N0YXR1cycgOiB3YXJuaW5nJ30gOiBUaGUgaW1hZ2UgYXNzb2NpYXRlZCB0byB0aGUgTWF0aE1MIG1kNSBpcyBub3QgaW4gY2FjaGUuXG4gICAqIC0geydzdGF0dXMnIDogJ29rJyAuLi59IDogVGhlIGltYWdlIGFzc29jaWF0ZWQgdG8gdGhlIE1hdGhNTCBtZDUgaXMgaW4gY2FjaGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGEgLSBvYmplY3QgY29udGFpbmluZyBzaG93aW1hZ2Ugc2VydmljZSBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgLSBzdHJpbmcgY29udGFpbmluZyB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIGZvcm11bGEuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgc2hvd2ltYWdlIHJlc3BvbnNlLlxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVNob3dJbWFnZVNyYyhkYXRhLCBsYW5ndWFnZSkge1xuICAgIGNvbnN0IGRhdGFPYmplY3QgPSB0aGlzLmNyZWF0ZVNob3dJbWFnZVNyY0RhdGEoZGF0YSwgbGFuZ3VhZ2UpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlKCdzaG93aW1hZ2UnLCBVdGlsLmh0dHBCdWlsZFF1ZXJ5KGRhdGFPYmplY3QpLCB0cnVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBodG1sIGltZyB0YWdzIGluc2lkZSBhIGh0bWwgY29kZSB0byBtYXRobWwsIGJhc2U2NCBpbWcgdGFncyAoaS5lIHdpdGggYmFzZTY0IG9uIHNyYylcbiAgICogb3Igc2hvd2ltYWdlIGltZyB0YWdzIChpLmUgd2l0aCBzaG93aW1hZ2UucGhwIG9uIHNyYylcbiAgICogQHBhcmFtICB7c3RyaW5nfSBjb2RlIC0gSFRNTCBjb2RlXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbW9kZSAtIGJhc2U2NDJzaG93aW1hZ2Ugb3IgaW1nMm1hdGhtbCBvciBpbWcyNjQgdHJhbnNmb3JtLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBodG1sIC0gY29kZSB0cmFuc2Zvcm1lZC5cbiAgICovXG4gIHN0YXRpYyBjb2RlSW1nVHJhbnNmb3JtKGNvZGUsIG1vZGUpIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgbGV0IGVuZFBvc2l0aW9uID0gMDtcbiAgICBjb25zdCBwYXR0ZXJuID0gLzxpbWcvZ2k7XG4gICAgY29uc3QgcGF0dGVybkxlbmd0aCA9IHBhdHRlcm4uc291cmNlLmxlbmd0aDtcblxuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3QoY29kZSkpIHtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBwYXR0ZXJuLmxhc3RJbmRleCAtIHBhdHRlcm5MZW5ndGg7XG4gICAgICBvdXRwdXQgKz0gY29kZS5zdWJzdHJpbmcoZW5kUG9zaXRpb24sIHN0YXJ0UG9zaXRpb24pO1xuXG4gICAgICBsZXQgaSA9IHN0YXJ0UG9zaXRpb24gKyAxO1xuXG4gICAgICB3aGlsZSAoaSA8IGNvZGUubGVuZ3RoICYmIGVuZFBvc2l0aW9uIDw9IHN0YXJ0UG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gY29kZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gJ1wiJyB8fCBjaGFyYWN0ZXIgPT09ICdcXCcnKSB7XG4gICAgICAgICAgY29uc3QgY2hhcmFjdGVyTmV4dFBvc2l0aW9uID0gY29kZS5pbmRleE9mKGNoYXJhY3RlciwgaSArIDEpO1xuXG4gICAgICAgICAgaWYgKGNoYXJhY3Rlck5leHRQb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgICAgIGkgPSBjb2RlLmxlbmd0aDsgLy8gRW5kIHdoaWxlLlxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpID0gY2hhcmFjdGVyTmV4dFBvc2l0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09ICc+Jykge1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gaSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQb3NpdGlvbiA8IHN0YXJ0UG9zaXRpb24pIHsgLy8gVGhlIGltZyB0YWcgaXMgc3RyaXBwZWQuXG4gICAgICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhzdGFydFBvc2l0aW9uLCBjb2RlLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICB9XG4gICAgICBsZXQgaW1nQ29kZSA9IGNvZGUuc3Vic3RyaW5nKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcbiAgICAgIGNvbnN0IGltZ09iamVjdCA9IFV0aWwuY3JlYXRlT2JqZWN0KGltZ0NvZGUpO1xuICAgICAgbGV0IHhtbENvZGUgPSBpbWdPYmplY3QuZ2V0QXR0cmlidXRlKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZU1hdGhtbEF0dHJpYnV0ZScpKTtcbiAgICAgIGxldCBjb252ZXJ0VG9YbWw7XG4gICAgICBsZXQgY29udmVydFRvU2FmZVhtbDtcblxuICAgICAgaWYgKG1vZGUgPT09ICdiYXNlNjQyc2hvd2ltYWdlJykge1xuICAgICAgICBpZiAoeG1sQ29kZSA9PSBudWxsKSB7XG4gICAgICAgICAgeG1sQ29kZSA9IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgICB9XG4gICAgICAgIHhtbENvZGUgPSBNYXRoTUwuc2FmZVhtbERlY29kZSh4bWxDb2RlKTtcbiAgICAgICAgaW1nQ29kZSA9IFBhcnNlci5tYXRobWxUb0ltZ09iamVjdChkb2N1bWVudCwgeG1sQ29kZSwgbnVsbCwgbnVsbCk7XG4gICAgICAgIG91dHB1dCArPSBVdGlsLmNyZWF0ZU9iamVjdENvZGUoaW1nQ29kZSk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbWcybWF0aG1sJykge1xuICAgICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykpIHtcbiAgICAgICAgICBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICdzYWZlWG1sJykge1xuICAgICAgICAgICAgY29udmVydFRvWG1sID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnZlcnRUb1NhZmVYbWwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVNb2RlJykgPT09ICd4bWwnKSB7XG4gICAgICAgICAgICBjb252ZXJ0VG9YbWwgPSB0cnVlO1xuICAgICAgICAgICAgY29udmVydFRvU2FmZVhtbCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gVXRpbC5nZXRXSVJJU0ltYWdlT3V0cHV0KGltZ0NvZGUsIGNvbnZlcnRUb1htbCwgY29udmVydFRvU2FmZVhtbCk7XG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdpbWcyNjQnKSB7XG4gICAgICAgIGlmICh4bWxDb2RlID09PSBudWxsKSB7XG4gICAgICAgICAgeG1sQ29kZSA9IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgICB9XG4gICAgICAgIHhtbENvZGUgPSBNYXRoTUwuc2FmZVhtbERlY29kZSh4bWxDb2RlKTtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHByb3BlcnRpZXMuYmFzZTY0ID0gJ3RydWUnO1xuICAgICAgICBpbWdDb2RlID0gUGFyc2VyLm1hdGhtbFRvSW1nT2JqZWN0KGRvY3VtZW50LCB4bWxDb2RlLCBwcm9wZXJ0aWVzLCBudWxsKTtcbiAgICAgICAgLy8gTWV0cmljcy5cbiAgICAgICAgSW1hZ2Uuc2V0SW1nU2l6ZShpbWdDb2RlLCBpbWdDb2RlLnNyYywgdHJ1ZSk7XG4gICAgICAgIG91dHB1dCArPSBVdGlsLmNyZWF0ZU9iamVjdENvZGUoaW1nQ29kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIG91dHB1dCArPSBjb2RlLnN1YnN0cmluZyhlbmRQb3NpdGlvbiwgY29kZS5sZW5ndGgpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYWxsIG9jY3VycmVuY2VzIG9mIE1hdGhNTCB0byB0aGUgY29ycmVzcG9uZGluZyBpbWFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBzdHJpbmcgd2l0aCB2YWxpZCBNYXRoTUwgY29kZS5cbiAgICogVGhlIE1hdGhNTCBjb2RlIGRvZXNuJ3QgY29udGFpbiBzZW1hbnRpY3MuXG4gICAqIEBwYXJhbSB7Q29uc3RhbnRzfSBjaGFyYWN0ZXJzIC0gQ29uc3RhbnQgb2JqZWN0IGNvbnRhaW5pbmcgeG1sQ2hhcmFjdGVyc1xuICAgKiBvciBzYWZlWG1sQ2hhcmFjdGVycyByZWxhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIC0gYSB2YWxpZCBsYW5ndWFnZSBjb2RlXG4gICAqIGluIG9yZGVyIHRvIGdlbmVyYXRlIGZvcm11bGEgYWNjZXNzaWJpbGl0eS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGlucHV0IHN0cmluZyB3aXRoIGFsbCB0aGUgTWF0aE1MXG4gICAqIG9jY3VycmVuY2VzIHJlcGxhY2VkIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGltYWdlLlxuICAgKi9cbiAgc3RhdGljIHBhcnNlTWF0aG1sVG9JbWcoY29udGVudCwgY2hhcmFjdGVycywgbGFuZ3VhZ2UpIHtcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgY29uc3QgbWF0aFRhZ0JlZ2luID0gYCR7Y2hhcmFjdGVycy50YWdPcGVuZXJ9bWF0aGA7XG4gICAgY29uc3QgbWF0aFRhZ0VuZCA9IGAke2NoYXJhY3RlcnMudGFnT3BlbmVyfS9tYXRoJHtjaGFyYWN0ZXJzLnRhZ0Nsb3Nlcn1gO1xuICAgIGxldCBzdGFydCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnQmVnaW4pO1xuICAgIGxldCBlbmQgPSAwO1xuXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkge1xuICAgICAgb3V0cHV0ICs9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCwgc3RhcnQpO1xuICAgICAgLy8gQXZvaWQgV0lSSVMgaW1hZ2VzIHRvIGJlIHBhcnNlZC5cbiAgICAgIGNvbnN0IGltYWdlTWF0aG1sQXRycmlidXRlID0gY29udGVudC5pbmRleE9mKENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZU1hdGhtbEF0dHJpYnV0ZScpKTtcbiAgICAgIGVuZCA9IGNvbnRlbnQuaW5kZXhPZihtYXRoVGFnRW5kLCBzdGFydCk7XG5cbiAgICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAgIGVuZCA9IGNvbnRlbnQubGVuZ3RoIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAoaW1hZ2VNYXRobWxBdHJyaWJ1dGUgIT09IC0xKSB7XG4gICAgICAgIC8vIEZpcnN0IGNsb3NlIHRhZyBvZiBpbWcgYXR0cmlidXRlXG4gICAgICAgIC8vIElmIGEgbWF0aG1sQXR0cmlidXRlIGV4aXN0cyBzaG91bGQgYmUgaW5zaWRlIGEgaW1nIHRhZy5cbiAgICAgICAgZW5kICs9IGNvbnRlbnQuaW5kZXhPZignLz4nLCBzdGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgKz0gbWF0aFRhZ0VuZC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGlmICghTWF0aE1MLmlzTWF0aG1sSW5BdHRyaWJ1dGUoY29udGVudCwgc3RhcnQpICYmIGltYWdlTWF0aG1sQXRycmlidXRlID09PSAtMSkge1xuICAgICAgICBsZXQgbWF0aG1sID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIG1hdGhtbCA9IChjaGFyYWN0ZXJzLmlkID09PSBDb25zdGFudHMuc2FmZVhtbENoYXJhY3RlcnMuaWQpXG4gICAgICAgICAgPyBNYXRoTUwuc2FmZVhtbERlY29kZShtYXRobWwpXG4gICAgICAgICAgOiBNYXRoTUwubWF0aE1MRW50aXRpZXMobWF0aG1sKTtcbiAgICAgICAgb3V0cHV0ICs9IFV0aWwuY3JlYXRlT2JqZWN0Q29kZShQYXJzZXIubWF0aG1sVG9JbWdPYmplY3QoZG9jdW1lbnQsIG1hdGhtbCwgbnVsbCwgbGFuZ3VhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSBjb250ZW50LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBjb250ZW50LmluZGV4T2YobWF0aFRhZ0JlZ2luLCBlbmQpO1xuICAgIH1cblxuICAgIG91dHB1dCArPSBjb250ZW50LnN1YnN0cmluZyhlbmQsIGNvbnRlbnQubGVuZ3RoKTtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG59XG5cbi8vIE11dGF0aW9uIG9ic2VydmVycyB0byBhdm9pZCB3aXJpcyBpbWFnZSBmb3JtdWxhcyBjbGFzcyBiZSByZW1vdmVkLlxuaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgaWYgKG11dGF0aW9uLm9sZFZhbHVlID09PSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDbGFzc05hbWUnKVxuICAgICAgICAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnXG4gICAgICAgICYmIG11dGF0aW9uLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDbGFzc05hbWUnKSkgPT09IC0xKSB7XG4gICAgICAgIG11dGF0aW9uLnRhcmdldC5jbGFzc05hbWUgPSBDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VDbGFzc05hbWUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgUGFyc2VyLm9ic2VydmVyID0gT2JqZWN0LmNyZWF0ZShtdXRhdGlvbk9ic2VydmVyKTtcbiAgUGFyc2VyLm9ic2VydmVyLkNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUgfTtcbiAgLy8gV2UgdXNlIG93biBkZWZhdWx0IGNvbmZpZy5cbiAgUGFyc2VyLm9ic2VydmVyLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLm9ic2VydmUodGFyZ2V0LCB0aGlzLkNvbmZpZyk7XG4gIH07XG59XG4iLCJpbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IExpc3RlbmVycyBmcm9tICcuL2xpc3RlbmVycyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNlcnZpY2VQcm92aWRlclByb3BlcnRpZXNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBVUkkgLSBTZXJ2aWNlIFVSSS5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzZXJ2ZXIgLSBTZXJ2aWNlIHNlcnZlciBsYW5ndWFnZS5cbiAqL1xuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIHNlcnZpY2VQcm92aWRlci4gQSBzZXJ2aWNlUHJvdmlkZXIgaXMgYSBjbGFzcyBjb250YWluaW5nXG4gKiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIHNlcnZpY2VzIHdpdGggdGhlIGNvcnJlc3BvbmRlbnQgcGF0aC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZVByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIFJldHVybnMgU2VydmljZSBQcm92aWRlciBsaXN0ZW5lcnMuXG4gICAqIEB0eXBlIHtMaXN0ZW5lcnN9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGxpc3RlbmVycygpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLl9saXN0ZW5lcnM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHtAbGluayBMaXN0ZW5lcn0gaW5zdGFuY2UgdG8ge0BsaW5rIFNlcnZpY2VQcm92aWRlcn0gY2xhc3MuXG4gICAqIEBwYXJhbSB7TGlzdGVuZXJ9IGxpc3RlbmVyIC0gSW5zdGFuY2Ugb2Yge0BsaW5rIExpc3RlbmVyfS5cbiAgICovXG4gIHN0YXRpYyBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIFNlcnZpY2VQcm92aWRlci5saXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBldmVudHMgaW4gU2VydmljZSBQcm92aWRlci5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZSAtIEV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gRXZlbnQgb2JqZWN0LlxuICAgKi9cbiAgc3RhdGljIGZpcmVFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgU2VydmljZVByb3ZpZGVyLmxpc3RlbmVycy5maXJlKGV2ZW50TmFtZSwgZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcnZpY2UgcGFyYW1ldGVycy5cbiAgICogQHR5cGUge1NlcnZpY2VQcm92aWRlclByb3BlcnRpZXN9XG4gICAqXG4gICAqL1xuICBzdGF0aWMgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIFNlcnZpY2VQcm92aWRlci5fcGFyYW1ldGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJ2aWNlIHBhcmFtZXRlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtTZXJ2aWNlUHJvdmlkZXJQcm9wZXJ0aWVzfVxuICAgKi9cbiAgc3RhdGljIHNldCBwYXJhbWV0ZXJzKHBhcmFtZXRlcnMpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBwcm9wZXJ0eS5cbiAgICogUmV0dXJuIHNlcnZpY2UgcHJvdmlkZXIgcGF0aHMuXG4gICAqIEBwcml2YXRlXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHNlcnZpY2VQYXRocygpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLl9zZXJ2aWNlUGF0aHM7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IHNldHRlci5cbiAgICogU2V0IHNlcnZpY2UgcGF0aHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSAtIFRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3RhdGljIHNldCBzZXJ2aWNlUGF0aHModmFsdWUpIHtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuX3NlcnZpY2VQYXRocyA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBuZXcgc2VydmljZSB0byB0aGUgU2VydmljZVByb3ZpZGVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFNlcnZpY2UgbmFtZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGggLSBTZXJ2aWNlIHBhdGguXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBzZXRTZXJ2aWNlUGF0aChzZXJ2aWNlLCBwYXRoKSB7XG4gICAgU2VydmljZVByb3ZpZGVyLnNlcnZpY2VQYXRoc1tzZXJ2aWNlXSA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmljZSBwYXRoIGZvciBhIGNlcnRhaW4gc2VydmljZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlcnZpY2VOYW1lIC0gU2VydmljZSBuYW1lLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgc2VydmljZSBwYXRoLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0U2VydmljZVBhdGgoc2VydmljZU5hbWUpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLnNlcnZpY2VQYXRoc1tzZXJ2aWNlTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5LlxuICAgKiBTZXJ2aWNlIHByb3ZpZGVyIGludGVncmF0aW9uIHBhdGguXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGludGVncmF0aW9uUGF0aCgpIHtcbiAgICByZXR1cm4gU2VydmljZVByb3ZpZGVyLl9pbnRlZ3JhdGlvblBhdGg7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIHByb3BlcnR5IHNldHRlci5cbiAgICogU2V0IHNlcnZpY2UgcHJvdmlkZXIgaW50ZWdyYXRpb24gcGF0aC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlLlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdGF0aWMgc2V0IGludGVncmF0aW9uUGF0aCh2YWx1ZSkge1xuICAgIFNlcnZpY2VQcm92aWRlci5faW50ZWdyYXRpb25QYXRoID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmVyIFVSTCBpbiB0aGUgZm9ybSBwcm90b2NvbDovL3NlcnZlck5hbWU6c2VydmVyUG9ydC5cbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgY2xpZW50IHNpZGUgc2VydmVyIHBhdGguXG4gICAqL1xuICBzdGF0aWMgZ2V0U2VydmVyVVJMKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IGFyciA9IHVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGAke2FyclswXX0vLyR7YXJyWzJdfWA7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0cyB7QGxpbmsgdGhpc30gY2xhc3MuIFVzZXMge0BsaW5rIHRoaXMuaW50ZWdyYXRpb25QYXRofSBhc1xuICAgKiBiYXNlIHBhdGggdG8gZ2VuZXJhdGUgYWxsIGJhY2tlbmQgc2VydmljZXMgcGF0aHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzIC0gRnVuY3Rpb24gcGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtZXRlcnMuaW50ZWdyYXRpb25QYXRoIC0gU2VydmljZSBwYXRoLlxuICAgKi9cbiAgc3RhdGljIGluaXQocGFyYW1ldGVycykge1xuICAgIFNlcnZpY2VQcm92aWRlci5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICAvLyBTZXJ2aWNlcyBwYXRoICh0ZWNoIGRlcGVuZGFudCkuXG4gICAgbGV0IGNvbmZpZ3VyYXRpb25VUkkgPSBTZXJ2aWNlUHJvdmlkZXIuY3JlYXRlU2VydmljZVVSSSgnY29uZmlndXJhdGlvbmpzJyk7XG4gICAgbGV0IGNyZWF0ZUltYWdlVVJJID0gU2VydmljZVByb3ZpZGVyLmNyZWF0ZVNlcnZpY2VVUkkoJ2NyZWF0ZWltYWdlJyk7XG4gICAgbGV0IHNob3dJbWFnZVVSSSA9IFNlcnZpY2VQcm92aWRlci5jcmVhdGVTZXJ2aWNlVVJJKCdzaG93aW1hZ2UnKTtcbiAgICBsZXQgZ2V0TWF0aE1MVVJJID0gU2VydmljZVByb3ZpZGVyLmNyZWF0ZVNlcnZpY2VVUkkoJ2dldG1hdGhtbCcpO1xuICAgIGxldCBzZXJ2aWNlVVJJID0gU2VydmljZVByb3ZpZGVyLmNyZWF0ZVNlcnZpY2VVUkkoJ3NlcnZpY2UnKTtcblxuICAgIC8vIFNvbWUgYmFja2VuZCBpbnRlZ3JhdGlvbnMgKGxpa2UgSmF2YSBvIFJ1YnkpIGhhdmUgYW4gYWJzb2x1dGUgYmFja2VuZCBwYXRoLFxuICAgIC8vIGZvciBleGFtcGxlOiAvYXBwL3NlcnZpY2UuIEZvciB0aGVtIHdlIGNhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgVVJMIHBhdGgsIGkuZVxuICAgIC8vIHByb3RvY29sOi8vZG9tYWluOnBvcnQvYXBwL3NlcnZpY2VcbiAgICBpZiAoU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMuVVJJLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgICAgY29uc3Qgc2VydmVyUGF0aCA9IFNlcnZpY2VQcm92aWRlci5nZXRTZXJ2ZXJVUkwoKTtcbiAgICAgIGNvbmZpZ3VyYXRpb25VUkkgPSBzZXJ2ZXJQYXRoICsgY29uZmlndXJhdGlvblVSSTtcbiAgICAgIHNob3dJbWFnZVVSSSA9IHNlcnZlclBhdGggKyBzaG93SW1hZ2VVUkk7XG4gICAgICBjcmVhdGVJbWFnZVVSSSA9IHNlcnZlclBhdGggKyBjcmVhdGVJbWFnZVVSSTtcbiAgICAgIGdldE1hdGhNTFVSSSA9IHNlcnZlclBhdGggKyBnZXRNYXRoTUxVUkk7XG4gICAgICBzZXJ2aWNlVVJJID0gc2VydmVyUGF0aCArIHNlcnZpY2VVUkk7XG4gICAgfVxuXG4gICAgU2VydmljZVByb3ZpZGVyLnNldFNlcnZpY2VQYXRoKCdjb25maWd1cmF0aW9uanMnLCBjb25maWd1cmF0aW9uVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ3Nob3dpbWFnZScsIHNob3dJbWFnZVVSSSk7XG4gICAgU2VydmljZVByb3ZpZGVyLnNldFNlcnZpY2VQYXRoKCdjcmVhdGVpbWFnZScsIGNyZWF0ZUltYWdlVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ3NlcnZpY2UnLCBzZXJ2aWNlVVJJKTtcbiAgICBTZXJ2aWNlUHJvdmlkZXIuc2V0U2VydmljZVBhdGgoJ2dldG1hdGhtbCcsIGdldE1hdGhNTFVSSSk7XG4gICAgU2VydmljZVByb3ZpZGVyLnNldFNlcnZpY2VQYXRoKCdjb25maWd1cmF0aW9uanMnLCBjb25maWd1cmF0aW9uVVJJKTtcblxuICAgIFNlcnZpY2VQcm92aWRlci5saXN0ZW5lcnMuZmlyZSgnb25Jbml0Jywge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvbnRlbnQgZnJvbSBhbiBVUkwuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgLSBUYXJnZXQgVVJMLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Bvc3RWYXJpYWJsZXNdIC0gT2JqZWN0IGNvbnRhaW5pbmcgcG9zdCB2YXJpYWJsZXMuXG4gICAqIG51bGwgaWYgYSBHRVQgcXVlcnkgc2hvdWxkIGJlIGRvbmUuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IENvbnRlbnQgb2YgdGhlIHRhcmdldCBVUkwuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRVcmwodXJsLCBwb3N0VmFyaWFibGVzKSB7XG4gICAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5zdWJzdHIoMCwgd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgIGNvbnN0IGh0dHBSZXF1ZXN0ID0gVXRpbC5jcmVhdGVIdHRwUmVxdWVzdCgpO1xuXG4gICAgaWYgKGh0dHBSZXF1ZXN0KSB7XG4gICAgICBpZiAodHlwZW9mIHBvc3RWYXJpYWJsZXMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwb3N0VmFyaWFibGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBodHRwUmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAodXJsLnN1YnN0cigwLCAxKSA9PT0gJy8nIHx8IHVybC5zdWJzdHIoMCwgNykgPT09ICdodHRwOi8vJyB8fCB1cmwuc3Vic3RyKDAsIDgpID09PSAnaHR0cHM6Ly8nKSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ1BPU1QnLCB1cmwsIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBSZXF1ZXN0Lm9wZW4oJ1BPU1QnLCBjdXJyZW50UGF0aCArIHVybCwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyID0gQ29uZmlndXJhdGlvbi5nZXQoJ2N1c3RvbUhlYWRlcnMnKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaGVhZGVyID0gaGVhZGVyLnRvU3RyaW5nKClcbiAgICAgICAgaGVhZGVyLnNwbGl0KFwiLFwiKVxuICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LnRyaW0oKS5zcGxpdCgnPScpKVxuICAgICAgICAgIC5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcG9zdFZhcmlhYmxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcG9zdFZhcmlhYmxlcykge1xuICAgICAgICBodHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIGh0dHBSZXF1ZXN0LnNlbmQoVXRpbC5odHRwQnVpbGRRdWVyeShwb3N0VmFyaWFibGVzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodHRwUmVxdWVzdC5zZW5kKG51bGwpO1xuICAgICAgfVxuICAgXG4gICAgICByZXR1cm4gaHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzcG9uc2UgdGV4dCBvZiBhIGNlcnRhaW4gc2VydmljZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlcnZpY2UgLSBTZXJ2aWNlIG5hbWUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwb3N0VmFyaWFibGVzIC0gUG9zdCB2YXJpYWJsZXMuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZ2V0IC0gVHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBHRVQgaW5zdGVhZCBvZiBQT1NULiBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IFNlcnZpY2UgcmVzcG9uc2UgdGV4dC5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2aWNlKHNlcnZpY2UsIHBvc3RWYXJpYWJsZXMsIGdldCkge1xuICAgIGxldCByZXNwb25zZTtcbiAgICBpZiAoZ2V0ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBnZXRWYXJpYWJsZXMgPSBwb3N0VmFyaWFibGVzID8gYD8ke3Bvc3RWYXJpYWJsZXN9YCA6ICcnO1xuICAgICAgY29uc3Qgc2VydmljZVVybCA9IGAke1NlcnZpY2VQcm92aWRlci5nZXRTZXJ2aWNlUGF0aChzZXJ2aWNlKX0ke2dldFZhcmlhYmxlc31gO1xuICAgICAgcmVzcG9uc2UgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0VXJsKHNlcnZpY2VVcmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzZXJ2aWNlVXJsID0gU2VydmljZVByb3ZpZGVyLmdldFNlcnZpY2VQYXRoKHNlcnZpY2UpO1xuICAgICAgcmVzcG9uc2UgPSBTZXJ2aWNlUHJvdmlkZXIuZ2V0VXJsKHNlcnZpY2VVcmwsIHBvc3RWYXJpYWJsZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2VydmVyIGxhbmd1YWdlIG9mIGEgY2VydGFpbiBzZXJ2aWNlLiBUaGUgcG9zc2libGUgdmFsdWVzXG4gICAqIGFyZTogcGhwLCBhc3B4LCBqYXZhIGFuZCBydWJ5LlxuICAgKiBUaGlzIG1ldGhvZCBoYXMgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlcnZpY2UgLSBUaGUgY29uZmlndXJhdGlvbiBzZXJ2aWNlLlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIFRoZSBzZXJ2ZXIgdGVjaG5vbG9neSBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbmZpZ3VyYXRpb24gc2VydmljZS5cbiAgICovXG4gIHN0YXRpYyBnZXRTZXJ2ZXJMYW5ndWFnZUZyb21TZXJ2aWNlKHNlcnZpY2UpIHtcbiAgICBpZiAoc2VydmljZS5pbmRleE9mKCcucGhwJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJ3BocCc7XG4gICAgfVxuICAgIGlmIChzZXJ2aWNlLmluZGV4T2YoJy5hc3B4JykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJ2FzcHgnO1xuICAgIH1cbiAgICBpZiAoc2VydmljZS5pbmRleE9mKCd3aXJpc3BsdWdpbmVuZ2luZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICdydWJ5JztcbiAgICB9XG4gICAgcmV0dXJuICdqYXZhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkkgYXNzb2NpYXRlZCB3aXRoIGEgY2VydGFpbiBzZXJ2aWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VydmljZSAtIFRoZSBzZXJ2aWNlIG5hbWUuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHNlcnZpY2UgcGF0aC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVTZXJ2aWNlVVJJKHNlcnZpY2UpIHtcbiAgICBjb25zdCBleHRlbnNpb24gPSBTZXJ2aWNlUHJvdmlkZXIuc2VydmVyRXh0ZW5zaW9uKCk7XG4gICAgcmV0dXJuIFV0aWwuY29uY2F0ZW5hdGVVcmwoU2VydmljZVByb3ZpZGVyLnBhcmFtZXRlcnMuVVJJLCBzZXJ2aWNlKSArIGV4dGVuc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBzZXJ2ZXJFeHRlbnNpb24oKSB7XG4gICAgaWYgKFNlcnZpY2VQcm92aWRlci5wYXJhbWV0ZXJzLnNlcnZlci5pbmRleE9mKCdwaHAnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnLnBocCc7XG4gICAgfVxuICAgIGlmIChTZXJ2aWNlUHJvdmlkZXIucGFyYW1ldGVycy5zZXJ2ZXIuaW5kZXhPZignYXNweCcpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcuYXNweCc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKipcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzZXJ2aWNlIC0gVGhlIHNlcnZpY2UgbmFtZS5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwYXRoIC0gVGhlIHNlcnZpY2UgcGF0aC5cbiAqIEBzdGF0aWNcbiAqL1xuU2VydmljZVByb3ZpZGVyLl9zZXJ2aWNlUGF0aHMgPSB7fTtcblxuLyoqXG4gKiBUaGUgaW50ZWdyYXRpb24gcGF0aC4gQ29udGFpbnMgdGhlIHBhdGggb2YgdGhlIGNvbmZpZ3VyYXRpb24gc2VydmljZS5cbiAqIFVzZWQgdG8gZGVmaW5lIHRoZSBwYXRoIGZvciBhbGwgc2VydmljZXMuXG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuU2VydmljZVByb3ZpZGVyLl9pbnRlZ3JhdGlvblBhdGggPSAnJztcblxuLyoqXG4gKiBTZXJ2aWNlUHJvdmlkZXIgc3RhdGljIGxpc3RlbmVycy5cbiAqIEB0eXBlIHtMaXN0ZW5lcnN9XG4gKiBAcHJpdmF0ZVxuICovXG5TZXJ2aWNlUHJvdmlkZXIuX2xpc3RlbmVycyA9IG5ldyBMaXN0ZW5lcnMoKTtcblxuLyoqXG4gKiBTZXJ2aWNlIHByb3ZpZGVyIHBhcmFtZXRlcnMuXG4gKiBAdHlwZSB7U2VydmljZVByb3ZpZGVyUGFyYW1ldGVyc31cbiAqL1xuU2VydmljZVByb3ZpZGVyLl9wYXJhbWV0ZXJzID0ge307XG4iLCJpbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4uL2xhbmcvc3RyaW5ncy5qc29uJztcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgc3RyaW5nIG1hbmFnZXIuIEl0J3MgdXNlZCB0byBsb2FkIGxvY2FsaXplZCBzdHJpbmdzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdGF0aWMgY2xhc3MgU3RyaW5nTWFuYWdlciBjYW4gbm90IGJlIGluc3RhbnRpYXRlZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhc3NvY2lhdGVkIHZhbHVlIG9mIGNlcnRhaW4gc3RyaW5nIGtleS4gSWYgdGhlIGFzc29jaWF0ZWQgdmFsdWVcbiAgICogZG9lc24ndCBleGl0cyByZXR1cm5zIHRoZSBvcmlnaW5hbCBrZXkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBzdHJpbmcga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIC0gREVGQVVMVCA9IG51bGwuIFNwZWNpZnkgdGhlIGxhbmd1YWdlIHRvIHRyYW5zbGF0ZSB0aGUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGNvcnJlc3BvbmRlbnQgdmFsdWUuIElmIGRvZXNuJ3QgZXhpc3RzIG9yaWdpbmFsIGtleS5cbiAgICovXG4gIHN0YXRpYyBnZXQoa2V5LCBsYW5nKSB7XG5cbiAgICAvLyBEZWZhdWx0IGxhbmd1YWdlIGRlZmluaXRpb25cbiAgICBsZXQge2xhbmd1YWdlfSA9IHRoaXM7XG5cbiAgICAvLyBJZiBwYXJhbWV0ZXIgbGFuZ3VhZ2UsIHVzZSBpdFxuICAgIGlmIChsYW5nKSB7XG4gICAgICBsYW5ndWFnZSA9IGxhbmc7XG4gICAgfVxuXG4gICAgLy8gQ3V0IGRvd24gb24gc3RyaW5ncy4gZS5nLiBlbl9VUyAtPiBlblxuICAgIGlmIChsYW5ndWFnZSAmJiBsYW5ndWFnZS5sZW5ndGggPiAyKSB7XG4gICAgICBsYW5ndWFnZSA9IGxhbmd1YWdlLnNsaWNlKDAsIDIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHdlIHN1cHBvcnQgdGhlIGxhbmd1YWdlXG4gICAgaWYgKCF0aGlzLnN0cmluZ3MuaGFzT3duUHJvcGVydHkobGFuZ3VhZ2UpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICBjb25zb2xlLndhcm4oYFVua25vd24gbGFuZ3VhZ2UgJHtsYW5ndWFnZX0gc2V0IGluIFN0cmluZ01hbmFnZXIuYCk7XG4gICAgICBsYW5ndWFnZSA9ICdlbic7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGtleSBpcyBzdXBwb3J0ZWQgaW4gdGhlIGdpdmVuIGxhbmd1YWdlXG4gICAgaWYgKCF0aGlzLnN0cmluZ3NbbGFuZ3VhZ2VdLmhhc093blByb3BlcnR5KGtleSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgJHtrZXl9IGZvciBsYW5ndWFnZSAke2xhbmd1YWdlfSBpbiBTdHJpbmdNYW5hZ2VyLmApO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdHJpbmdzW2xhbmd1YWdlXVtrZXldO1xuICB9XG59XG5cbi8qKlxuICogRGljdGlvbmFyeSBvZiBkaWN0aW9uYXJpZXM6XG4gKiBLZXk6IGxhbmd1YWdlIGNvZGVcbiAqIFZhbHVlOiBLZXk6IGlkIG9mIHRoZSBzdHJpbmdcbiAqICAgICAgICBWYWx1ZTogdHJhbnNsYXRpb24gb2YgdGhlIHN0cmluZ1xuICovXG5TdHJpbmdNYW5hZ2VyLnN0cmluZ3MgPSB0cmFuc2xhdGlvbnM7XG5cbi8qKlxuICogTGFuZ3VhZ2Ugb2YgdGhlIHRyYW5zbGF0aW9uczsgRW5nbGlzaCBieSBkZWZhdWx0XG4gKi9cblN0cmluZ01hbmFnZXIubGFuZ3VhZ2UgPSAnZW4nO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dENhY2hlIHtcbiAgLyoqXG4gICAqIEBjbGFzc2Rlc2NcbiAgICogVGhpcyBjbGFzcyByZXByZXNlbnQgYSBjbGllbnQtc2lkZSB0ZXh0IGNhY2hlIGNsYXNzLiBDb250YWlucyBwYWlycyBvZlxuICAgKiBzdHJpbmdzIChrZXkvdmFsdWUpIHdoaWNoIGNhbiBiZSByZXRyaWV2ZWQgaW4gYW55IG1vbWVudC4gVXN1YWxseSB1c2VkXG4gICAqIHRvIHN0b3JlIEFKQVggcmVzcG9uc2VzIGZvciB0ZXh0IHNlcnZpY2VzIGxpa2UgbWF0aG1sMmxhdGV4XG4gICAqIChjLmYge0BsaW5rIExhdGV4fSBjbGFzcykgb3IgbWF0aG1sMmFjY2Vzc2libGUgKGMuZiB7QGxpbmsgQWNjZXNzaWJpbGl0eX0gY2xhc3MpLlxuICAgKiBAY29uc3RydWN0c1xuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqXG4gICAgICogQ2FjaGUgYXJyYXkgcHJvcGVydHkgc3RvcmluZyB0aGUgY2FjaGUgZW50cmllcy5cbiAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XG4gICAgICovXG4gICAgdGhpcy5jYWNoZSA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHBvcHVsYXRlcyBhIGtleS92YWx1ZSBwYWlyIGludG8gdGhlIHtAbGluayB0aGlzLmNhY2hlfSBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIENhY2hlIGtleSwgdXN1YWxseSB0aGUgc2VydmljZSBzdHJpbmcgcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLSBDYWNoZSB2YWx1ZSwgdXN1YWxseSB0aGUgc2VydmljZSByZXNwb25zZS5cbiAgICovXG4gIHBvcHVsYXRlKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLmNhY2hlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYWNoZSB2YWx1ZSBhc3NvY2lhdGVkIHRvIGNlcnRhaW4gY2FjaGUga2V5LlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gQ2FjaGUga2V5LCB1c3VhbGx5IHRoZSBzZXJ2aWNlIHN0cmluZyBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm4ge1N0cmluZ30gdmFsdWUgLSBDYWNoZSB2YWx1ZSwgaWYgZXhpc3RzLiBGYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBnZXQoa2V5KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmNhY2hlLCBrZXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbmltcG9ydCBET01QdXJpZnkgZnJvbSAnZG9tcHVyaWZ5JztcbmltcG9ydCBNYXRoTUwgZnJvbSAnLi9tYXRobWwnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnLi9jb25maWd1cmF0aW9uJztcbmltcG9ydCBMYXRleCBmcm9tICcuL2xhdGV4JztcbmltcG9ydCBTdHJpbmdNYW5hZ2VyIGZyb20gJy4vc3RyaW5nbWFuYWdlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGFuIHV0aWxpdHkgY2xhc3MuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuICAvKipcbiAgICogRmlyZXMgYW4gZXZlbnQgaW4gYSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gdGFyZ2V0IHdoZXJlIGV2ZW50IHNob3VsZCBiZSBmaXJlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBldmVudCB0byBmaXJlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZmlyZUV2ZW50KGV2ZW50VGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcbiAgICAgIGNvbnN0IGV2ZW50T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgIGV2ZW50T2JqZWN0LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgICAgcmV0dXJuICFldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50T2JqZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudE9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgcmV0dXJuIGV2ZW50VGFyZ2V0LmZpcmVFdmVudChgb24ke2V2ZW50TmFtZX1gLCBldmVudE9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3Jvc3MtYnJvd3NlciBhZGRFdmVudExpc3RlbmVyL2F0dGFjaEV2ZW50IGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCAtIHRhcmdldCB0byBhZGQgdGhlIGV2ZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gc3BlY2lmaWVzIHRoZSB0eXBlIG9mIGV2ZW50LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsQmFja0Z1bmN0aW9uIC0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBhZGRFdmVudChldmVudFRhcmdldCwgZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uKSB7XG4gICAgaWYgKGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsQmFja0Z1bmN0aW9uLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50VGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgIGV2ZW50VGFyZ2V0LmF0dGFjaEV2ZW50KGBvbiR7ZXZlbnROYW1lfWAsIGNhbGxCYWNrRnVuY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcm9zcy1icm93c2VyIHJlbW92ZUV2ZW50TGlzdGVuZXIvZGV0YWNoRXZlbnQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7RXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0IC0gdGFyZ2V0IHRvIGFkZCB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBzcGVjaWZpZXMgdGhlIHR5cGUgb2YgZXZlbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxCYWNrRnVuY3Rpb24gLSBmdW5jdGlvbiB0byByZW1vdmUgZnJvbSB0aGUgZXZlbnQgdGFyZ2V0LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlRXZlbnQoZXZlbnRUYXJnZXQsIGV2ZW50TmFtZSwgY2FsbEJhY2tGdW5jdGlvbikge1xuICAgIGlmIChldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbEJhY2tGdW5jdGlvbiwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChldmVudFRhcmdldC5kZXRhY2hFdmVudCkge1xuICAgICAgZXZlbnRUYXJnZXQuZGV0YWNoRXZlbnQoYG9uJHtldmVudE5hbWV9YCwgY2FsbEJhY2tGdW5jdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGEgY2FsbGJhY2sgZnVuY3Rpb24sIGZvciBhIGNlcnRhaW4gZXZlbnQgdGFyZ2V0LCB0byB0aGUgZm9sbG93aW5nIGV2ZW50IHR5cGVzOlxuICAgKiAtIGRibGNsaWNrXG4gICAqIC0gbW91c2Vkb3duXG4gICAqIC0gbW91c2V1cFxuICAgKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSBldmVudFRhcmdldCAtIGV2ZW50IHRhcmdldC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZG91YmxlQ2xpY2tIYW5kbGVyIC0gZnVuY3Rpb24gdG8gcnVuIHdoZW4gb24gZGJsY2xpY2sgZXZlbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vdXNlZG93bkhhbmRsZXIgLSBmdW5jdGlvbiB0byBydW4gd2hlbiBvbiBtb3VzZWRvd24gZXZlbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vdXNldXBIYW5kbGVyIC0gZnVuY3Rpb24gdG8gcnVuIHdoZW4gb24gbW91c2V1cCBldmVudC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGFkZEVsZW1lbnRFdmVudHMoZXZlbnRUYXJnZXQsIGRvdWJsZUNsaWNrSGFuZGxlciwgbW91c2Vkb3duSGFuZGxlciwgbW91c2V1cEhhbmRsZXIpIHtcbiAgICBpZiAoZG91YmxlQ2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrRGJsY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhbEV2ZW50ID0gKGV2ZW50KSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsRXZlbnQuc3JjRWxlbWVudCA/IHJlYWxFdmVudC5zcmNFbGVtZW50IDogcmVhbEV2ZW50LnRhcmdldDtcbiAgICAgICAgZG91YmxlQ2xpY2tIYW5kbGVyKGVsZW1lbnQsIHJlYWxFdmVudCk7XG4gICAgICB9O1xuXG4gICAgICBVdGlsLmFkZEV2ZW50KGV2ZW50VGFyZ2V0LCAnZGJsY2xpY2snLCB0aGlzLmNhbGxiYWNrRGJsY2xpY2spO1xuICAgIH1cblxuICAgIGlmIChtb3VzZWRvd25IYW5kbGVyKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrTW91c2Vkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWxFdmVudCA9IChldmVudCkgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVhbEV2ZW50LnNyY0VsZW1lbnQgPyByZWFsRXZlbnQuc3JjRWxlbWVudCA6IHJlYWxFdmVudC50YXJnZXQ7XG4gICAgICAgIG1vdXNlZG93bkhhbmRsZXIoZWxlbWVudCwgcmVhbEV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIFV0aWwuYWRkRXZlbnQoZXZlbnRUYXJnZXQsICdtb3VzZWRvd24nLCB0aGlzLmNhbGxiYWNrTW91c2Vkb3duKTtcbiAgICB9XG5cbiAgICBpZiAobW91c2V1cEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tNb3VzZXVwID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWxFdmVudCA9IChldmVudCkgfHwgd2luZG93LmV2ZW50O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVhbEV2ZW50LnNyY0VsZW1lbnQgPyByZWFsRXZlbnQuc3JjRWxlbWVudCA6IHJlYWxFdmVudC50YXJnZXQ7XG4gICAgICAgIG1vdXNldXBIYW5kbGVyKGVsZW1lbnQsIHJlYWxFdmVudCk7XG4gICAgICB9O1xuICAgICAgLy8gQ2hyb21lIGRvZXNuJ3QgdHJpZ2dlciB0aGlzIGV2ZW50IGZvciBldmVudFRhcmdldCBpZiB3ZSByZWxlYXNlIHRoZSBtb3VzZSBidXR0b25cbiAgICAgIC8vIHdoaWxlIHRoZSBtb3VzZSBpcyBvdXRzaWRlIHRoZSBlZGl0b3IgdGV4dCBmaWVsZC5cbiAgICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kOiB3ZSB0cmlnZ2VyIHRoZSBldmVudCBpbmRlcGVuZGVudGx5IG9mIHdoZXJlIHRoZSBtb3VzZVxuICAgICAgLy8gaXMgd2hlbiB3ZSByZWxlYXNlIGl0cyBidXR0b24uXG4gICAgICBVdGlsLmFkZEV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuY2FsbGJhY2tNb3VzZXVwKTtcbiAgICAgIFV0aWwuYWRkRXZlbnQoZXZlbnRUYXJnZXQsICdtb3VzZXVwJywgdGhpcy5jYWxsYmFja01vdXNldXApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNhbGxiYWNrIGZ1bmN0aW9uLCBmb3IgYSBjZXJ0YWluIGV2ZW50IHRhcmdldCwgdG8gdGhlIGZvbGxvd2luZyBldmVudCB0eXBlczpcbiAgICogLSBkYmxjbGlja1xuICAgKiAtIG1vdXNlZG93blxuICAgKiAtIG1vdXNldXBcbiAgICogQHBhcmFtIHtFdmVudFRhcmdldH0gZXZlbnRUYXJnZXQgLSBldmVudCB0YXJnZXQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZW1vdmVFbGVtZW50RXZlbnRzKGV2ZW50VGFyZ2V0KSB7XG4gICAgVXRpbC5yZW1vdmVFdmVudChldmVudFRhcmdldCwgJ2RibGNsaWNrJywgdGhpcy5jYWxsYmFja0RibGNsaWNrKTtcbiAgICBVdGlsLnJlbW92ZUV2ZW50KGV2ZW50VGFyZ2V0LCAnbW91c2Vkb3duJywgdGhpcy5jYWxsYmFja01vdXNlZG93bik7XG4gICAgVXRpbC5yZW1vdmVFdmVudChkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLmNhbGxiYWNrTW91c2V1cCk7XG4gICAgVXRpbC5yZW1vdmVFdmVudChldmVudFRhcmdldCwgJ21vdXNldXAnLCB0aGlzLmNhbGxiYWNrTW91c2V1cCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNsYXNzIG5hbWUgdG8gYSBIVE1MRWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIHRoZSBIVE1MIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSB0aGUgY2xhc3MgbmFtZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGlmICghVXRpbC5jb250YWluc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgSFRNTEVsZW1lbnQgY29udGFpbnMgYSBjZXJ0YWluIGNsYXNzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIHRoZSBjbGFzc05hbWUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBIVE1MRWxlbWVudCBjb250YWlucyB0aGUgY2xhc3MgbmFtZS4gZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY29udGFpbnNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbWVudCA9PSBudWxsIHx8ICEoJ2NsYXNzTmFtZScgaW4gZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50Q2xhc3NlcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgICBmb3IgKGxldCBpID0gY3VycmVudENsYXNzZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGlmIChjdXJyZW50Q2xhc3Nlc1tpXSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBjZXJ0YWluIGNsYXNzIGZvciBhIEhUTUxFbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gdGhlIEhUTUwgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIHRoZSBjbGFzcyBuYW1lLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IG5ld0NsYXNzTmFtZSA9ICcnO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSAhPT0gY2xhc3NOYW1lKSB7XG4gICAgICAgIG5ld0NsYXNzTmFtZSArPSBgJHtjbGFzc2VzW2ldfSBgO1xuICAgICAgfVxuICAgIH1cbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG5ld0NsYXNzTmFtZS50cmltKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgb2xkIHhtbCBpbml0aWFsIHRleHQgYXR0cmlidXRlICh3aXRoIMKrwrspIHRvIHRoZSBjb3JyZWN0IG9uZSh3aXRoIMKnbHQ7wqdndDspLiBJdCdzXG4gICAqIHVzZWQgdG8gcGFyc2Ugb2xkIGFwcGxldHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gc3RyaW5nIGNvbnRhaW5pbmcgc2FmZVhtbCBjaGFyYWN0ZXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgc3RyaW5nIHdpdGggc2FmZVhtbCBjaGFyYWN0ZXJzIHBhcnNlZC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNvbnZlcnRPbGRYbWxpbml0aWFsdGV4dEF0dHJpYnV0ZSh0ZXh0KSB7XG4gICAgLy8gVXNlZCB0byBmaXggYSBidWcgd2l0aCBDYXMgaW1wb3J0ZWQgZnJvbSBNb29kbGUgMS45IHRvIE1vb2RsZSAyLnguXG4gICAgLy8gVGhpcyBjb3VsZCBiZSByZW1vdmVkIGluIGZ1dHVyZS5cbiAgICBjb25zdCB2YWwgPSAndmFsdWU9JztcblxuICAgIGNvbnN0IHhpdHBvcyA9IHRleHQuaW5kZXhPZigneG1saW5pdGlhbHRleHQnKTtcbiAgICBjb25zdCB2YWxwb3MgPSB0ZXh0LmluZGV4T2YodmFsLCB4aXRwb3MpO1xuICAgIGNvbnN0IHF1b3RlID0gdGV4dC5jaGFyQXQodmFscG9zICsgdmFsLmxlbmd0aCk7XG4gICAgY29uc3Qgc3RhcnRxdW90ZSA9IHZhbHBvcyArIHZhbC5sZW5ndGggKyAxO1xuICAgIGNvbnN0IGVuZHF1b3RlID0gdGV4dC5pbmRleE9mKHF1b3RlLCBzdGFydHF1b3RlKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGV4dC5zdWJzdHJpbmcoc3RhcnRxdW90ZSwgZW5kcXVvdGUpO1xuXG4gICAgbGV0IG5ld3ZhbHVlID0gdmFsdWUuc3BsaXQoJ8KrJykuam9pbignwqdsdDsnKTtcbiAgICBuZXd2YWx1ZSA9IG5ld3ZhbHVlLnNwbGl0KCfCuycpLmpvaW4oJ8KnZ3Q7Jyk7XG4gICAgbmV3dmFsdWUgPSBuZXd2YWx1ZS5zcGxpdCgnJicpLmpvaW4oJ8KnJyk7XG4gICAgbmV3dmFsdWUgPSBuZXd2YWx1ZS5zcGxpdCgnwqgnKS5qb2luKCfCp3F1b3Q7Jyk7XG5cbiAgICB0ZXh0ID0gdGV4dC5zcGxpdCh2YWx1ZSkuam9pbihuZXd2YWx1ZSk7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQ3Jvc3MtYnJvd3NlciBzb2x1dGlvbiBmb3IgY3JlYXRpbmcgbmV3IGVsZW1lbnRzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSAtIHRhZyBuYW1lIG9mIHRoZSB3aXNoZWQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgLSBhbiBvYmplY3Qgd2hlcmUgZWFjaCBrZXkgaXMgYSB3aXNoZWRcbiAgICogYXR0cmlidXRlIG5hbWUgYW5kIGVhY2ggdmFsdWUgaXMgaXRzIHZhbHVlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2NyZWF0b3JdIC0gaWYgc3VwcGxpZWQsIHRoaXMgZnVuY3Rpb24gd2lsbCB1c2VcbiAgICogdGhlIFwiY3JlYXRlRWxlbWVudFwiIG1ldGhvZCBmcm9tIHRoaXMgcGFyYW0uIE90aGVyd2lzZVxuICAgKiBkb2N1bWVudCB3aWxsIGJlIHVzZWQgYXMgY3JlYXRvci5cbiAgICogQHJldHVybnMge0VsZW1lbnR9IFRoZSBET00gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgYXR0cmlidXRlcyBhc3NpZ25lZC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgYXR0cmlidXRlcywgY3JlYXRvcikge1xuICAgIGlmIChhdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGF0dHJpYnV0ZXMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoY3JlYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdG9yID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAvKlxuICAgICogSW50ZXJuZXQgRXhwbG9yZXIgZml4OlxuICAgICogSWYgeW91IGNyZWF0ZSBhIG5ldyBvYmplY3QgZHluYW1pY2FsbHksIHlvdSBjYW4ndCBzZXQgYSBub24tc3RhbmRhcmQgYXR0cmlidXRlLlxuICAgICogRm9yIGV4YW1wbGUsIHlvdSBjYW4ndCBzZXQgdGhlIFwic3JjXCIgYXR0cmlidXRlIG9uIGFuIFwiYXBwbGV0XCIgb2JqZWN0LlxuICAgICogT3RoZXIgYnJvd3NlcnMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gYW5kIHdpbGwgcnVuIHRoZSBzdGFuZGFyZCBjb2RlLlxuICAgICovXG4gICAgdHJ5IHtcbiAgICAgIGxldCBodG1sID0gYDwke3RhZ05hbWV9YDtcblxuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cmlidXRlTmFtZSkgPT4ge1xuICAgICAgICBodG1sICs9IGAgJHthdHRyaWJ1dGVOYW1lfT1cIiR7VXRpbC5odG1sRW50aXRpZXMoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSl9XCJgO1xuICAgICAgfSk7XG4gICAgICBodG1sICs9ICc+JztcbiAgICAgIGVsZW1lbnQgPSBjcmVhdG9yLmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZWxlbWVudCA9IGNyZWF0b3IuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBuZXcgSFRNTCBmcm9tIGl0J3MgSFRNTCBjb2RlIGFzIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdENvZGUgLSBodG1sIGNvZGVcbiAgICogQHJldHVybnMge0VsZW1lbnR9IHRoZSBIVE1MIGVsZW1lbnQuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVPYmplY3Qob2JqZWN0Q29kZSwgY3JlYXRvcikge1xuICAgIGlmIChjcmVhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNyZWF0b3IgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciBjYW4ndCBpbmNsdWRlIFwicGFyYW1cIiB0YWcgd2hlbiBpcyBzZXR0aW5nIGFuIGlubmVySFRNTCBwcm9wZXJ0eS5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPGFwcGxldCAnKS5qb2luKCc8c3BhbiB3aXJpc09iamVjdD1cIldpcmlzQXBwbGV0XCIgJykuc3BsaXQoJzxBUFBMRVQgJykuam9pbignPHNwYW4gd2lyaXNPYmplY3Q9XCJXaXJpc0FwcGxldFwiICcpOyAvLyBJdCBpcyBhICdzcGFuJyBiZWNhdXNlICdzcGFuJyBvYmplY3RzIGNhbiBjb250YWluICdicicgbm9kZXMuXG4gICAgb2JqZWN0Q29kZSA9IG9iamVjdENvZGUuc3BsaXQoJzwvYXBwbGV0PicpLmpvaW4oJzwvc3Bhbj4nKS5zcGxpdCgnPC9BUFBMRVQ+Jykuam9pbignPC9zcGFuPicpO1xuXG4gICAgb2JqZWN0Q29kZSA9IG9iamVjdENvZGUuc3BsaXQoJzxwYXJhbSAnKS5qb2luKCc8YnIgd2lyaXNPYmplY3Q9XCJXaXJpc1BhcmFtXCIgJykuc3BsaXQoJzxQQVJBTSAnKS5qb2luKCc8YnIgd2lyaXNPYmplY3Q9XCJXaXJpc1BhcmFtXCIgJyk7IC8vIEl0IGlzIGEgJ2JyJyBiZWNhdXNlICdicicgY2FuJ3QgY29udGFpbiBub2Rlcy5cbiAgICBvYmplY3RDb2RlID0gb2JqZWN0Q29kZS5zcGxpdCgnPC9wYXJhbT4nKS5qb2luKCc8L2JyPicpLnNwbGl0KCc8L1BBUkFNPicpLmpvaW4oJzwvYnI+Jyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBVdGlsLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHt9LCBjcmVhdG9yKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gb2JqZWN0Q29kZTtcblxuICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVBhcmFtc0ZpeChvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QuZ2V0QXR0cmlidXRlICYmIG9iamVjdC5nZXRBdHRyaWJ1dGUoJ3dpcmlzT2JqZWN0JykgPT09ICdXaXJpc1BhcmFtJykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzUGFyc2VkID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNQYXJzZWRbb2JqZWN0LmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gb2JqZWN0LmF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtID0gVXRpbC5jcmVhdGVFbGVtZW50KCdwYXJhbScsIGF0dHJpYnV0ZXNQYXJzZWQsIGNyZWF0b3IpO1xuXG4gICAgICAgIC8vIElFIGZpeC5cbiAgICAgICAgaWYgKHBhcmFtLk5BTUUpIHtcbiAgICAgICAgICBwYXJhbS5uYW1lID0gcGFyYW0uTkFNRTtcbiAgICAgICAgICBwYXJhbS52YWx1ZSA9IHBhcmFtLlZBTFVFO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyYW0ucmVtb3ZlQXR0cmlidXRlKCd3aXJpc09iamVjdCcpO1xuICAgICAgICBvYmplY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocGFyYW0sIG9iamVjdCk7XG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5nZXRBdHRyaWJ1dGUgJiYgb2JqZWN0LmdldEF0dHJpYnV0ZSgnd2lyaXNPYmplY3QnKSA9PT0gJ1dpcmlzQXBwbGV0Jykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzUGFyc2VkID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChvYmplY3QuYXR0cmlidXRlc1tpXS5ub2RlVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNQYXJzZWRbb2JqZWN0LmF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gb2JqZWN0LmF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFwcGxldCA9IFV0aWwuY3JlYXRlRWxlbWVudCgnYXBwbGV0JywgYXR0cmlidXRlc1BhcnNlZCwgY3JlYXRvcik7XG4gICAgICAgIGFwcGxldC5yZW1vdmVBdHRyaWJ1dGUoJ3dpcmlzT2JqZWN0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHJlY3Vyc2l2ZVBhcmFtc0ZpeChvYmplY3QuY2hpbGROb2Rlc1tpXSk7XG5cbiAgICAgICAgICBpZiAob2JqZWN0LmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3BhcmFtJykge1xuICAgICAgICAgICAgYXBwbGV0LmFwcGVuZENoaWxkKG9iamVjdC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgIGkgLT0gMTsgLy8gV2hlbiB3ZSBpbnNlcnQgdGhlIG9iamVjdCBjaGlsZCBpbnRvIHRoZSBhcHBsZXQsIG9iamVjdCBsb3NlcyBvbmUgY2hpbGQuXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JqZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGFwcGxldCwgb2JqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICByZWN1cnNpdmVQYXJhbXNGaXgob2JqZWN0LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVjdXJzaXZlUGFyYW1zRml4KGNvbnRhaW5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5maXJzdENoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEVsZW1lbnQgdG8gaXRzIEhUTUwgY29kZS5cbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gZW50cnkgZWxlbWVudC5cbiAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgSFRNTCBjb2RlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlT2JqZWN0Q29kZShlbGVtZW50KSB7XG4gICAgLy8gSW4gY2FzZSB0aGF0IHRoZSBpbWFnZSB3YXMgbm90IGNyZWF0ZWQsIHRoZSBvYmplY3QgY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkLlxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHsgLy8gRUxFTUVOVF9OT0RFLlxuICAgICAgbGV0IG91dHB1dCA9IGA8JHtlbGVtZW50LnRhZ05hbWV9YDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlc1tpXS5zcGVjaWZpZWQpIHtcbiAgICAgICAgICBvdXRwdXQgKz0gYCAke2VsZW1lbnQuYXR0cmlidXRlc1tpXS5uYW1lfT1cIiR7VXRpbC5odG1sRW50aXRpZXMoZWxlbWVudC5hdHRyaWJ1dGVzW2ldLnZhbHVlKX1cImA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG91dHB1dCArPSAnPic7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvdXRwdXQgKz0gVXRpbC5jcmVhdGVPYmplY3QoZWxlbWVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dCArPSBgPC8ke2VsZW1lbnQudGFnTmFtZX0+YDtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0RJVicgfHwgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgb3V0cHV0ICs9IGA+PC8ke2VsZW1lbnQudGFnTmFtZX0+YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dHB1dCArPSAnLz4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSAzKSB7IC8vIFRFWFRfTk9ERS5cbiAgICAgIHJldHVybiBVdGlsLmh0bWxFbnRpdGllcyhlbGVtZW50Lm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmNhdGVuYXRlcyB0d28gVVJMIHBhdGhzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aDEgLSBmaXJzdCBVUkwgcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aDIgLSBzZWNvbmQgVVJMIHBhdGhcbiAgICogQHJldHVybnMge3N0cmluZ30gbmV3IFVSTC5cbiAgICovXG4gIHN0YXRpYyBjb25jYXRlbmF0ZVVybChwYXRoMSwgcGF0aDIpIHtcbiAgICBsZXQgc2VwYXJhdG9yID0gJyc7XG4gICAgaWYgKChwYXRoMS5pbmRleE9mKCcvJykgIT09IHBhdGgxLmxlbmd0aCkgJiYgKHBhdGgyLmluZGV4T2YoJy8nKSAhPT0gMCkpIHtcbiAgICAgIHNlcGFyYXRvciA9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIChwYXRoMSArIHNlcGFyYXRvciArIHBhdGgyKS5yZXBsYWNlKC8oW146XVxcLylcXC8rL2csICckMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhIHRleHQgYW5kIHJlcGxhY2VzIGFsbCBIVE1MIHNwZWNpYWwgY2hhcmFjdGVycyBieSB0aGVpciBjb3JyZXNwb25kZW50IGVudGl0aWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgLSB0ZXh0IHRvIGJlIHBhcnNlZC5cbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGlucHV0IHRleHQgd2l0aCBhbGwgdGhlaXIgc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZWlyIGVudGl0aWVzLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaHRtbEVudGl0aWVzKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KCcmJykuam9pbignJmFtcDsnKS5zcGxpdCgnPCcpLmpvaW4oJyZsdDsnKVxuICAgICAgLnNwbGl0KCc+JylcbiAgICAgIC5qb2luKCcmZ3Q7JylcbiAgICAgIC5zcGxpdCgnXCInKVxuICAgICAgLmpvaW4oJyZxdW90OycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbml0aXplIEhUTUwgdG8gcHJldmVudCBYU1MgaW5qZWN0aW9ucy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgLSBodG1sIHRvIGJlIHNhbml0aXplLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBodG1sIHNhbml0aXplZC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGh0bWxTYW5pdGl6ZShodG1sKSB7XG4gICAgbGV0IGFubm90YXRpb25SZWdleCA9IC9cXDxhbm5vdGF0aW9uLitcXDxcXC9hbm5vdGF0aW9uXFw+L1xuICAgIC8vIEdldCBhbGwgdGhlIGFubm90YXRpb24gY29udGVudCBpbmNsdWRpbmcgdGhlIHRhZ3MuXG4gICAgbGV0IGFubm90YXRpb24gPSBodG1sLm1hdGNoKGFubm90YXRpb25SZWdleCk7XG4gICAgLy8gU2FuaXRpemUgaHRtbCBjb2RlIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIDxzZW1hbnRpY3M+IGFuZCA8YW5ub3RhdGlvbj4gdGFncy5cbiAgICBodG1sID0gRE9NUHVyaWZ5LnNhbml0aXplKGh0bWwsIHsgQUREX1RBR1M6IFsnc2VtYW50aWNzJywgJ2Fubm90YXRpb24nXSwgQUxMT1dFRF9BVFRSOiBbJ21hdGh2YXJpYW50JywgJ2NsYXNzJywgJ2xpbmVicmVhaycsICdvcGVuJywgJ2Nsb3NlJ119KTtcbiAgICAvLyBSZWFkZCBvbGQgYW5ub3RhdGlvbiBjb250ZW50LlxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoYW5ub3RhdGlvblJlZ2V4LCBhbm5vdGF0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgYSB0ZXh0IGFuZCByZXBsYWNlcyBhbGwgdGhlIEhUTUwgZW50aXRpZXMgYnkgdGhlaXIgY2hhcmFjdGVycy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IC0gdGV4dCB0byBiZSBwYXJzZWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGlucHV0IHRleHQgd2l0aCBhbGwgdGhlaXIgZW50aXRpZXMgcmVwbGFjZWQgYnkgY2hhcmFjdGVycy5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGh0bWxFbnRpdGllc0RlY29kZShpbnB1dCkge1xuICAgIC8vIFRleHRhcmVhIGVsZW1lbnQgZGVjb2RlcyB3aGVuIGlubmVyIGh0bWwgaXMgc2V0LlxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0ZXh0YXJlYS5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNyb3NzLWJyb3dzZXIgaHR0cCByZXF1ZXN0LlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGh0dHBSZXF1ZXN0IHJlcXVlc3Qgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R8QWN0aXZlWE9iamVjdH0gdGhlIHByb3BlciByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHN0YXRpYyBjcmVhdGVIdHRwUmVxdWVzdCgpIHtcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpLnN1YnN0cigwLCB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgaWYgKGN1cnJlbnRQYXRoLnN1YnN0cigwLCA3KSA9PT0gJ2ZpbGU6Ly8nKSB7XG4gICAgICB0aHJvdyBTdHJpbmdNYW5hZ2VyLmdldCgnZXhjZXB0aW9uX2Nyb3NzX3NpdGUnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgICAgfSBjYXRjaCAob2MpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgaGFzaCB0byBhIEhUVFAgcXVlcnkuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHByb3BlcnRpZXMgLSBhIGtleS92YWx1ZSBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGEgSFRUUCBxdWVyeSBjb250YWluaW5nIGFsbCB0aGUga2V5IHZhbHVlIHBhaXJzIHdpdGhcbiAgICogYWxsIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlaXIgZW50aXRpZXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBodHRwQnVpbGRRdWVyeShwcm9wZXJ0aWVzKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKHByb3BlcnRpZXNbaV0gIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQgKz0gYCR7VXRpbC51cmxFbmNvZGUoaSl9PSR7VXRpbC51cmxFbmNvZGUocHJvcGVydGllc1tpXSl9JmA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGluZyBsYXN0ICcmJyBlbXB0eSBjaGFyYWN0ZXIuXG4gICAgaWYgKHJlc3VsdC5zdWJzdHJpbmcocmVzdWx0Lmxlbmd0aCAtIDEpID09PSAnJicpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhIGhhc2ggdG8gc3RyaW5nIHNvcnRpbmcga2V5cyB0byBnZXQgYSBkZXRlcm1pbmlzdGljIG91dHB1dFxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBoYXNoIC0gYSBrZXkvdmFsdWUgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhIHN0cmluZyB3aXRoIHRoZSBmb3JtIGtleTE9dmFsdWUxLi4ua2V5bj12YWx1ZW5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHByb3BlcnRpZXNUb1N0cmluZyhoYXNoKSB7XG4gICAgLy8gMS4gU29ydCBrZXlzLiBXZSBzb3J0IHRoZSBrZXlzIGJlY2F1c2Ugd2Ugd2FudCBhIGRldGVybWluaXN0aWMgb3V0cHV0LlxuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhoYXNoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGFzaCwga2V5KSkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG4gPSBrZXlzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHMxID0ga2V5c1tpXTtcbiAgICAgICAgY29uc3QgczIgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoVXRpbC5jb21wYXJlU3RyaW5ncyhzMSwgczIpID4gMCkge1xuICAgICAgICAgIC8vIFN3YXAuXG4gICAgICAgICAga2V5c1tpXSA9IHMyO1xuICAgICAgICAgIGtleXNbal0gPSBzMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEdlbmVyYXRlIG91dHB1dC5cbiAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICBvdXRwdXQgKz0ga2V5O1xuICAgICAgb3V0cHV0ICs9ICc9JztcbiAgICAgIGxldCB2YWx1ZSA9IGhhc2hba2V5XTtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFxcXCcsICdcXFxcXFxcXCcpO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCdcXG4nLCAnXFxcXG4nKTtcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnXFxyJywgJ1xcXFxyJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJ1xcdCcsICdcXFxcdCcpO1xuXG4gICAgICBvdXRwdXQgKz0gdmFsdWU7XG4gICAgICBvdXRwdXQgKz0gJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0d28gc3RyaW5ncyB1c2luZyBjaGFyQ29kZUF0IG1ldGhvZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYSAtIGZpcnN0IHN0cmluZyB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYiAtIHNlY29uZCBzdHJpbmcgdG8gY29tcGFyZS5cbiAgICogQHJldHVybnMge251bWJlcn0gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCBiXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBjb21wYXJlU3RyaW5ncyhhLCBiKSB7XG4gICAgbGV0IGk7XG4gICAgY29uc3QgYW4gPSBhLmxlbmd0aDtcbiAgICBjb25zdCBibiA9IGIubGVuZ3RoO1xuICAgIGNvbnN0IG4gPSAoYW4gPiBibikgPyBibiA6IGFuO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGMgPSBVdGlsLmZpeGVkQ2hhckNvZGVBdChhLCBpKSAtIFV0aWwuZml4ZWRDaGFyQ29kZUF0KGIsIGkpO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhLmxlbmd0aCAtIGIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpeCBjaGFyQ29kZUF0KCkgSmF2YVNjcmlwdCBmdW5jdGlvbiB0byBoYW5kbGUgbm9uLUJhc2ljLU11bHRpbGluZ3VhbC1QbGFuZSBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gaW5wdXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZHggLSBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwXG4gICAqIGFuZCBsZXNzIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBVVEYtMTYgY29kZSBvZiB0aGUgc3RyaW5nIGF0IHRoZSBnaXZlbiBpbmRleC5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGZpeGVkQ2hhckNvZGVBdChzdHJpbmcsIGlkeCkge1xuICAgIGlkeCA9IGlkeCB8fCAwO1xuICAgIGNvbnN0IGNvZGUgPSBzdHJpbmcuY2hhckNvZGVBdChpZHgpO1xuICAgIGxldCBoaTtcbiAgICBsZXQgbG93O1xuXG4gICAgLyogSGlnaCBzdXJyb2dhdGUgKGNvdWxkIGNoYW5nZSBsYXN0IGhleCB0byAweERCN0YgdG8gdHJlYXQgaGlnaFxuICAgIHByaXZhdGUgc3Vycm9nYXRlcyBhcyBzaW5nbGUgY2hhcmFjdGVycykgKi9cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REJGRikge1xuICAgICAgaGkgPSBjb2RlO1xuICAgICAgbG93ID0gc3RyaW5nLmNoYXJDb2RlQXQoaWR4ICsgMSk7XG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKGxvdykpIHtcbiAgICAgICAgdGhyb3cgU3RyaW5nTWFuYWdlci5nZXQoJ2V4Y2VwdGlvbl9oaWdoX3N1cnJvZ2F0ZScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgoaGkgLSAweEQ4MDApICogMHg0MDApICsgKGxvdyAtIDB4REMwMCkgKyAweDEwMDAwO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4REMwMCAmJiBjb2RlIDw9IDB4REZGRikgeyAvLyBMb3cgc3Vycm9nYXRlLlxuICAgICAgLyogV2UgcmV0dXJuIGZhbHNlIHRvIGFsbG93IGxvb3BzIHRvIHNraXAgdGhpcyBpdGVyYXRpb24gc2luY2Ugc2hvdWxkIGhhdmVcbiAgICAgIGFscmVhZHkgaGFuZGxlZCBoaWdoIHN1cnJvZ2F0ZSBhYm92ZSBpbiB0aGUgcHJldmlvdXMgaXRlcmF0aW9uLiAqL1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIFVSTCB3aXRoIGl0J3MgcXVlcnkgcGFyYW1zIGNvbnZlcnRlZCBpbnRvIGFycmF5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gaW5wdXQgVVJMLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0W119IGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIFVSTCBxdWVyeSBwYXJhbXMuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cmxUb0Fzc0FycmF5KHVybCkge1xuICAgIGxldCBpO1xuICAgIGkgPSB1cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpID4gMCkge1xuICAgICAgY29uc3QgcXVlcnkgPSB1cmwuc3Vic3RyaW5nKGkgKyAxKTtcbiAgICAgIGNvbnN0IHNzID0gcXVlcnkuc3BsaXQoJyYnKTtcbiAgICAgIGNvbnN0IGggPSB7fTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzID0gc3NbaV07XG4gICAgICAgIGNvbnN0IGt2ID0gcy5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoa3YubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGhba3ZbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGt2WzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGg7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVuY29kZWQgVVJMIGJ5IHJlcGxhY2luZyBlYWNoIGluc3RhbmNlIG9mIGNlcnRhaW4gY2hhcmFjdGVycyBieVxuICAgKiBvbmUsIHR3bywgdGhyZWUgb3IgZm91ciBlc2NhcGUgc2VxdWVuY2VzIHVzaW5nIGVuY29kZVVSSUNvbXBvbmVudCBtZXRob2QuXG4gICAqICEnKCkqIC4gd2lsbCBub3QgYmUgZW5jb2RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsZWFyU3RyaW5nIC0gVVJMIHN0cmluZyB0byBiZSBlbmNvZGVkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFVSTCB3aXRoIGl0J3Mgc3BlY2lhbCBjaGFyYWN0ZXJzIHJlcGxhY2VkLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgdXJsRW5jb2RlKGNsZWFyU3RyaW5nKSB7XG4gICAgbGV0IG91dHB1dCA9ICcnO1xuICAgIC8vIE1ldGhvZCBlbmNvZGVVUklDb21wb25lbnQgZG9lc24ndCBlbmNvZGUgIScoKSp+IC5cbiAgICBvdXRwdXQgPSBlbmNvZGVVUklDb21wb25lbnQoY2xlYXJTdHJpbmcpO1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICAvLyBUT0RPOiBUbyBwYXJzZXI/XG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgSFRNTCBvZiBhIGltYWdlIGludG8gdGhlIG91dHB1dCBjb2RlIHRoYXQgV0lSSVMgbXVzdCByZXR1cm4uXG4gICAqIEJ5IGRlZmF1bHQgcmV0dXJucyB0aGUgTWF0aE1MIHN0b3JlZCBvbiBkYXRhLW1haG1sIGF0dHJpYnV0ZSAoaWYgaW1nQ29kZSBpcyBhIGZvcm11bGEpXG4gICAqIG9yIHRoZSBXaXJpc2NhcyBhdHRyaWJ1dGUgb2YgYSBXSVJJUyBhcHBsZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbWdDb2RlIC0gdGhlIGh0bWwgY29kZSBmcm9tIGEgZm9ybXVsYSBvciBhIENBUyBpbWFnZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBjb252ZXJ0VG9YbWwgLSB0cnVlIGlmIHRoZSBpbWFnZSBzaG91bGQgYmUgY29udmVydGVkIHRvIFhNTC5cbiAgICogQHBhcmFtIHtib29sZWFufSBjb252ZXJ0VG9TYWZlWG1sIC0gdHJ1ZSBpZiB0aGUgaW1hZ2Ugc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzYWZlWE1MLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgWE1MIG9yIHNhZmVYTUwgb2YgYSBXSVJJUyBpbWFnZS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldFdJUklTSW1hZ2VPdXRwdXQoaW1nQ29kZSwgY29udmVydFRvWG1sLCBjb252ZXJ0VG9TYWZlWG1sKSB7XG4gICAgY29uc3QgaW1nT2JqZWN0ID0gVXRpbC5jcmVhdGVPYmplY3QoaW1nQ29kZSk7XG4gICAgaWYgKGltZ09iamVjdCkge1xuICAgICAgaWYgKGltZ09iamVjdC5jbGFzc05hbWUgPT09IENvbmZpZ3VyYXRpb24uZ2V0KCdpbWFnZUNsYXNzTmFtZScpIHx8IGltZ09iamVjdC5nZXRBdHRyaWJ1dGUoQ29uZmlndXJhdGlvbi5nZXQoJ2ltYWdlTWF0aG1sQXR0cmlidXRlJykpKSB7XG4gICAgICAgIGlmICghY29udmVydFRvWG1sKSB7XG4gICAgICAgICAgcmV0dXJuIGltZ0NvZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhTWF0aE1MID0gaW1nT2JqZWN0LmdldEF0dHJpYnV0ZShDb25maWd1cmF0aW9uLmdldCgnaW1hZ2VNYXRobWxBdHRyaWJ1dGUnKSk7XG4gICAgICAgIC8vIFRvIGhhbmRsZSBhbm5vdGF0aW9ucywgZmlyc3Qgd2UgbmVlZCB0aGUgTWF0aE1MIGluIFhNTC5cbiAgICAgICAgbGV0IG1hdGhNTCA9IE1hdGhNTC5zYWZlWG1sRGVjb2RlKGRhdGFNYXRoTUwpO1xuXG4gICAgICAgIGlmICghQ29uZmlndXJhdGlvbi5nZXQoJ3NhdmVIYW5kVHJhY2VzJykpIHtcbiAgICAgICAgICBtYXRoTUwgPSBNYXRoTUwucmVtb3ZlQW5ub3RhdGlvbihtYXRoTUwsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0aE1MID09IG51bGwpIHtcbiAgICAgICAgICBtYXRoTUwgPSBpbWdPYmplY3QuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb252ZXJ0VG9TYWZlWG1sKSB7XG4gICAgICAgICAgY29uc3Qgc2FmZU1hdGhNTCA9IE1hdGhNTC5zYWZlWG1sRW5jb2RlKG1hdGhNTCk7XG4gICAgICAgICAgcmV0dXJuIHNhZmVNYXRoTUw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0aE1MO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1nQ29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBub2RlIGxlbmd0aCBpbiBjaGFyYWN0ZXJzLlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgLSBIVE1MIG5vZGUuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IG5vZGUgbGVuZ3RoLlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0Tm9kZUxlbmd0aChub2RlKSB7XG4gICAgY29uc3Qgc3RhdGljTm9kZUxlbmd0aHMgPSB7XG4gICAgICBJTUc6IDEsXG4gICAgICBCUjogMSxcbiAgICB9O1xuXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgcmV0dXJuIG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkgeyAvLyBFTEVNRU5UX05PREUuXG4gICAgICBsZXQgbGVuZ3RoID0gc3RhdGljTm9kZUxlbmd0aHNbbm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpXTtcblxuICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxlbmd0aCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxlbmd0aCArPSBVdGlsLmdldE5vZGVMZW5ndGgobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzZWxlY3RlZCBub2RlIG9yIHRleHQgZnJvbSBhbiBlZGl0YWJsZSBIVE1MRWxlbWVudC5cbiAgICogSWYgdGhlIGNhcmV0IGlzIG9uIGEgdGV4dCBub2RlLCBjb25jYXRlbmF0ZXMgaXQgd2l0aCBhbGwgdGhlIHByZXZpb3VzIGFuZCBuZXh0IHRleHQgbm9kZXMuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldCAtIHRoZSBlZGl0YWJsZSBIVE1MRWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0lmcmFtZSAgLSBzcGVjaWZpZXMgaWYgdGhlIHRhcmdldCBpcyBhbiBpZnJhbWUgb3Igbm90XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZm9yY2VHZXRTZWxlY3Rpb24gLSBpZiB0cnVlLCBpZ25vcmVzIElFIHN5c3RlbSB0byBnZXRcbiAgICogdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGFuZCB1c2VzIHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBhbiBvYmplY3Qgd2l0aCB0aGUgJ25vZGUnIGtleSBzZXQgaWYgdGhlIGl0ZW0gaXMgYW5cbiAgICogZWxlbWVudCBvciB0aGUga2V5cyAnbm9kZScgYW5kICdjYXJldFBvc2l0aW9uJyBpZiB0aGUgZWxlbWVudCBpcyB0ZXh0LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0U2VsZWN0ZWRJdGVtKHRhcmdldCwgaXNJZnJhbWUsIGZvcmNlR2V0U2VsZWN0aW9uKSB7XG4gICAgbGV0IHdpbmRvd1RhcmdldDtcblxuICAgIGlmIChpc0lmcmFtZSkge1xuICAgICAgd2luZG93VGFyZ2V0ID0gdGFyZ2V0LmNvbnRlbnRXaW5kb3c7XG4gICAgICB3aW5kb3dUYXJnZXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93VGFyZ2V0ID0gd2luZG93O1xuICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiAhZm9yY2VHZXRTZWxlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHJhbmdlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuXG4gICAgICBpZiAocmFuZ2UucGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocmFuZ2UuaHRtbFRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChyYW5nZS50ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFV0aWwuZ2V0U2VsZWN0ZWRJdGVtKHRhcmdldCwgaXNJZnJhbWUsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93VGFyZ2V0LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdJbnNlcnRJbWFnZScsIGZhbHNlLCAnIycpO1xuICAgICAgICBsZXQgdGVtcG9yYWxPYmplY3QgPSByYW5nZS5wYXJlbnRFbGVtZW50KCk7XG5cbiAgICAgICAgaWYgKHRlbXBvcmFsT2JqZWN0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdJTUcnKSB7XG4gICAgICAgICAgLy8gSUU5IGZpeDogcGFyZW50RWxlbWVudCgpIGRvZXMgbm90IHJldHVybiB0aGUgSU1HIG5vZGUsXG4gICAgICAgICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IERJViBub2RlLiBJbiBJRSA8IDksIHBhc3RlSFRNTCBkb2VzIG5vdCB3b3JrIHdlbGwuXG4gICAgICAgICAgcmFuZ2UucGFzdGVIVE1MKCc8c3BhbiBpZD1cIndyc19vcGVuRWRpdG9yV2luZG93X3RlbXBvcmFsT2JqZWN0XCI+PC9zcGFuPicpO1xuICAgICAgICAgIHRlbXBvcmFsT2JqZWN0ID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cnNfb3BlbkVkaXRvcldpbmRvd190ZW1wb3JhbE9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vZGU7XG4gICAgICAgIGxldCBjYXJldFBvc2l0aW9uO1xuXG4gICAgICAgIGlmICh0ZW1wb3JhbE9iamVjdC5uZXh0U2libGluZyAmJiB0ZW1wb3JhbE9iamVjdC5uZXh0U2libGluZy5ub2RlVHlwZSA9PT0gMykgeyAvLyBURVhUX05PREUuXG4gICAgICAgICAgbm9kZSA9IHRlbXBvcmFsT2JqZWN0Lm5leHRTaWJsaW5nO1xuICAgICAgICAgIGNhcmV0UG9zaXRpb24gPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRlbXBvcmFsT2JqZWN0LnByZXZpb3VzU2libGluZ1xuICAgICAgICAgICYmIHRlbXBvcmFsT2JqZWN0LnByZXZpb3VzU2libGluZy5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgIG5vZGUgPSB0ZW1wb3JhbE9iamVjdC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IG5vZGUubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICB0ZW1wb3JhbE9iamVjdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCB0ZW1wb3JhbE9iamVjdCk7XG4gICAgICAgICAgY2FyZXRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wb3JhbE9iamVjdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRlbXBvcmFsT2JqZWN0KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgY2FyZXRQb3NpdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHJhbmdlLml0ZW0oMCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dUYXJnZXQuZ2V0U2VsZWN0aW9uKSB7XG4gICAgICBsZXQgcmFuZ2U7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3dUYXJnZXQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJhbmdlID0gd2luZG93VGFyZ2V0LmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGUgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHsgLy8gVEVYVF9OT0RFLlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgY2FyZXRQb3NpdGlvbjogcmFuZ2Uuc3RhcnRPZmZzZXQsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICE9PSByYW5nZS5lbmRDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7IC8vIEVMRU1FTlRfTk9ERS5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSByYW5nZS5zdGFydE9mZnNldDtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uXSkge1xuXG4gICAgICAgICAgLy8gSW4gY2FzZSB0aGF0IGEgZm9ybXVsYSBpcyBkZXRlY3RlZCBidXQgbm90IHNlbGVjdGVkLFxuICAgICAgICAgIC8vIHdlIGNyZWF0ZSBhbiBlbXB0eSBzcGFuIHdoZXJlIHdlIGNvdWxkIGluc2VydCB0aGUgbmV3IGZvcm11bGEuXG4gICAgICAgICAgaWYgKHJhbmdlLnN0YXJ0T2Zmc2V0ID09PSByYW5nZS5lbmRPZmZzZXQpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gMCAmJiBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb24gLSAxXS5sb2NhbE5hbWUgPT09ICdzcGFuJyAmJiBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dLmNsYXNzTGlzdC5jb250YWlucygnV2lyaXNmb3JtdWxhJykpIHtcbiAgICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBVdGlsLmdldFNlbGVjdGVkSXRlbSh0YXJnZXQsIGlzSWZyYW1lLCBmb3JjZUdldFNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dLmNsYXNzTGlzdD8uY29udGFpbnMoJ1dpcmlzZm9ybXVsYScpKSB7XG4gICAgICAgICAgICAgIGlmICgocG9zaXRpb24gPiAwICYmIG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbiAtIDFdLmNsYXNzTGlzdC5jb250YWlucygnV2lyaXNmb3JtdWxhJykpIHx8IHBvc2l0aW9uID09PSAwICkge1xuICAgICAgICAgICAgICAgIHZhciBlbXB0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUoZW1wdHlTcGFuLCBub2RlLmNoaWxkTm9kZXNbcG9zaXRpb25dKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZS5jaGlsZE5vZGVzW3Bvc2l0aW9uXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGU6IG5vZGUuY2hpbGROb2Rlc1twb3NpdGlvbl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGVyZSBpc24ndCBhbnkgaXRlbSBvciBpZiBpdCBpcyBtYWxmb3JtZWQuXG4gICAqIE90aGVyd2lzZSByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBub2RlIHdpdGggdGhlIE1hdGhNTCBpbWFnZVxuICAgKiBhbmQgdGhlIGN1cnNvciBwb3NpdGlvbiBpbnNpZGUgdGhlIHRleHRhcmVhLlxuICAgKiBAcGFyYW0ge0hUTUxUZXh0QXJlYUVsZW1lbnR9IHRleHRhcmVhIC0gdGV4dGFyZWEgZWxlbWVudC5cbiAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG5vZGUsIHRoZSBpbmRleCBvZiB0aGVcbiAgICogYmVnaW5uaW5nICBvZiB0aGUgc2VsZWN0ZWQgdGV4dCwgY2FyZXQgcG9zaXRpb24gYW5kIHRoZSBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIG9mIHRoZVxuICAgKiB0ZXh0IG5vZGUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXRTZWxlY3RlZEl0ZW1PblRleHRhcmVhKHRleHRhcmVhKSB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0YXJlYS52YWx1ZSk7XG4gICAgY29uc3QgdGV4dE5vZGVWYWx1ZXMgPSBMYXRleC5nZXRMYXRleEZyb21UZXh0Tm9kZSh0ZXh0Tm9kZSwgdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQpO1xuICAgIGlmICh0ZXh0Tm9kZVZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGU6IHRleHROb2RlLFxuICAgICAgY2FyZXRQb3NpdGlvbjogdGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQsXG4gICAgICBzdGFydFBvc2l0aW9uOiB0ZXh0Tm9kZVZhbHVlcy5zdGFydFBvc2l0aW9uLFxuICAgICAgZW5kUG9zaXRpb246IHRleHROb2RlVmFsdWVzLmVuZFBvc2l0aW9uLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgZm9yIGVsZW1lbnRzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIG5hbWUgaW4gYSBIVE1MIGNvZGUgc3RyaW5nLlxuICAgKiBJbXBvcnRhbnQ6IHRoaXMgZnVuY3Rpb24gaXMgdmVyeSBjb25jcmV0ZSBmb3IgV0lSSVMgY29kZS5cbiAgICogSXQgdGFrZXMgYXMgcHJlY29uZGl0aW9ucyBsb3RzIG9mIGJlaGF2aW9ycyB0aGF0IGFyZSBub3QgdGhlIGdlbmVyYWwgY2FzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSAgSFRNTCBjb2RlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIGVsZW1lbnQgbmFtZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBhdXRvQ2xvc2VkIC0gdHJ1ZSBpZiB0aGUgZWxlbWVudHMgYXJlIGF1dG9DbG9zZWQuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgSFRNTCBlbGVtZW50cyBvZiBjb2RlIG1hdGNoaW5nIHRoZSBuYW1lIGFyZ3VtZW50LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0RWxlbWVudHNCeU5hbWVGcm9tU3RyaW5nKGNvZGUsIG5hbWUsIGF1dG9DbG9zZWQpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgIGNvZGUgPSBjb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc3RhcnQgPSBjb2RlLmluZGV4T2YoYDwke25hbWV9IGApO1xuXG4gICAgd2hpbGUgKHN0YXJ0ICE9PSAtMSkgeyAvLyBMb29rIGZvciBub2Rlcy5cbiAgICAgIGxldCBlbmRTdHJpbmc7XG5cbiAgICAgIGlmIChhdXRvQ2xvc2VkKSB7XG4gICAgICAgIGVuZFN0cmluZyA9ICc+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFN0cmluZyA9IGA8LyR7bmFtZX0+YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGVuZCA9IGNvZGUuaW5kZXhPZihlbmRTdHJpbmcsIHN0YXJ0KTtcblxuICAgICAgaWYgKGVuZCAhPT0gLTEpIHtcbiAgICAgICAgZW5kICs9IGVuZFN0cmluZy5sZW5ndGg7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIGVuZCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQgPSBzdGFydCArIDE7XG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gY29kZS5pbmRleE9mKGA8JHtuYW1lfSBgLCBlbmQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzZTY0IGNoYXJhY3Rlci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBjaGFyYWN0ZXIgLSBiYXNlNjQgY2hhcmFjdGVyLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBiYXNlNjQgY2hhcmFjdGVyIG51bWVyaWMgdmFsdWUuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBkZWNvZGU2NChjaGFyYWN0ZXIpIHtcbiAgICBjb25zdCBQTFVTID0gJysnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgU0xBU0ggPSAnLycuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKTtcbiAgICBjb25zdCBMT1dFUiA9ICdhJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IFVQUEVSID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgUExVU19VUkxfU0FGRSA9ICctJy5jaGFyQ29kZUF0KDApO1xuICAgIGNvbnN0IFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMCk7XG4gICAgY29uc3QgY29kZSA9IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApO1xuXG4gICAgaWYgKGNvZGUgPT09IFBMVVMgfHwgY29kZSA9PT0gUExVU19VUkxfU0FGRSkge1xuICAgICAgcmV0dXJuIDYyOyAvLyBDaGFyICcrJy5cbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IFNMQVNIIHx8IGNvZGUgPT09IFNMQVNIX1VSTF9TQUZFKSB7XG4gICAgICByZXR1cm4gNjM7IC8vIENoYXIgJy8nLlxuICAgIH1cbiAgICBpZiAoY29kZSA8IE5VTUJFUikge1xuICAgICAgcmV0dXJuIC0xOyAvLyBObyBtYXRjaC5cbiAgICB9XG4gICAgaWYgKGNvZGUgPCBOVU1CRVIgKyAxMCkge1xuICAgICAgcmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2O1xuICAgIH1cbiAgICBpZiAoY29kZSA8IFVQUEVSICsgMjYpIHtcbiAgICAgIHJldHVybiBjb2RlIC0gVVBQRVI7XG4gICAgfVxuICAgIGlmIChjb2RlIDwgTE9XRVIgKyAyNikge1xuICAgICAgcmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgYmFzZTY0IHN0cmluZyB0byBhIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYjY0U3RyaW5nIC0gYmFzZTY0IHN0cmluZy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIGRpbWVuc2lvbiBvZiBieXRlIGFycmF5IChieSBkZWZhdWx0IHdob2xlIHN0cmluZykuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfSB0aGUgcmVzdWx0YW50IGJ5dGUgYXJyYXkuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBiNjRUb0J5dGVBcnJheShiNjRTdHJpbmcsIGxlbmd0aCkge1xuICAgIGxldCB0bXA7XG5cbiAgICBpZiAoYjY0U3RyaW5nLmxlbmd0aCAlIDQgPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKTsgLy8gVGlwcGVkIGJhc2U2NC4gTGVuZ3RoIGlzIGZpeGVkLlxuICAgIH1cblxuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgbGV0IGw7XG4gICAgbGV0IHBsYWNlSG9sZGVycztcbiAgICBpZiAoIWxlbmd0aCkgeyAvLyBBbGwgYjY0U3RyaW5nIHN0cmluZy5cbiAgICAgIGlmIChiNjRTdHJpbmcuY2hhckF0KGI2NFN0cmluZy5sZW5ndGggLSAyKSA9PT0gJz0nKSB7XG4gICAgICAgIHBsYWNlSG9sZGVycyA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGI2NFN0cmluZy5jaGFyQXQoYjY0U3RyaW5nLmxlbmd0aCAtIDEpID09PSAnPScpIHtcbiAgICAgICAgcGxhY2VIb2xkZXJzID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlSG9sZGVycyA9IDA7XG4gICAgICB9XG4gICAgICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NFN0cmluZy5sZW5ndGggLSA0IDogYjY0U3RyaW5nLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSArPSA0KSB7XG4gICAgICAvLyBJZ25vcmluZyBjb2RlIGNoZWNrZXIgc3RhbmRhcmRzIChiaXRld2lzZSBvcGVyYXRvcnMpLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vdHJhY2tlci5tb29kbGUub3JnL2Jyb3dzZS9DT05UUklCLTU4NjIgZm9yIGZ1cnRoZXIgaW5mb3JtYXRpb24uXG4gICAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlU3RhcnRcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAxOCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKFV0aWwuZGVjb2RlNjQoYjY0U3RyaW5nLmNoYXJBdChpICsgMikpIDw8IDYpIHwgVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAzKSk7XG5cbiAgICAgIGFyci5wdXNoKCh0bXAgPj4gMTYpICYgMHhGRik7XG4gICAgICBhcnIucHVzaCgodG1wID4+IDgpICYgMHhGRik7XG4gICAgICBhcnIucHVzaCh0bXAgJiAweEZGKTtcbiAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgICB9XG5cbiAgICBpZiAocGxhY2VIb2xkZXJzKSB7XG4gICAgICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgICAgIC8vIElnbm9yaW5nIGNvZGUgY2hlY2tlciBzdGFuZGFyZHMgKGJpdGV3aXNlIG9wZXJhdG9ycykuXG4gICAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVTdGFydFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAyKSB8IChVdGlsLmRlY29kZTY0KGI2NFN0cmluZy5jaGFyQXQoaSArIDEpKSA+PiA0KTtcbiAgICAgICAgYXJyLnB1c2godG1wICYgMHhGRik7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICB0bXAgPSAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkpKSA8PCAxMCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoVXRpbC5kZWNvZGU2NChiNjRTdHJpbmcuY2hhckF0KGkgKyAyKSkgPj4gMik7XG4gICAgICAgIGFyci5wdXNoKCh0bXAgPj4gOCkgJiAweEZGKTtcbiAgICAgICAgYXJyLnB1c2godG1wICYgMHhGRik7XG4gICAgICAgIC8vIEBjb2RpbmdTdGFuZGFyZHNJZ25vcmVFbmRcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaXJzdCAzMi1iaXQgc2lnbmVkIGludGVnZXIgZnJvbSBhIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGJ5dGVzIC0gYXJyYXkgb2YgYnl0ZXMuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSAzMi1iaXQgc2lnbmVkIGludGVnZXIuXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyByZWFkSW50MzIoYnl0ZXMpIHtcbiAgICBpZiAoYnl0ZXMubGVuZ3RoIDwgNCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpbnQzMiA9IGJ5dGVzLnNwbGljZSgwLCA0KTtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlU3RhcnTCoVxuICAgIHJldHVybiAoaW50MzJbMF0gPDwgMjQgfCBpbnQzMlsxXSA8PCAxNiB8IGludDMyWzJdIDw8IDggfCBpbnQzMlszXSA8PCAwKTtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgZmlyc3QgYnl0ZSBmcm9tIGEgYnl0ZSBhcnJheS5cbiAgICogQHBhcmFtIHtPYmplY3R9IGJ5dGVzIC0gaW5wdXQgYnl0ZSBhcnJheS5cbiAgICogQHJldHVybnMge251bWJlcn0gZmlyc3QgYnl0ZSBvZiB0aGUgYnl0ZSBhcnJheS5cbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHJlYWRCeXRlKGJ5dGVzKSB7XG4gICAgLy8gQGNvZGluZ1N0YW5kYXJkc0lnbm9yZVN0YXJ0XG4gICAgcmV0dXJuIGJ5dGVzLnNoaWZ0KCkgPDwgMDtcbiAgICAvLyBAY29kaW5nU3RhbmRhcmRzSWdub3JlRW5kXG4gIH1cblxuICAvKipcbiAgICogUmVhZCBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIGJ5dGVzLCBmcm9tIGEgZml4ZWQgcG9zaXRpb24gb24gYSBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtPYmplY3RbXX0gYnl0ZXMgLSBieXRlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHBvcyAtIHN0YXJ0IHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGxlbiAtIG51bWJlciBvZiBieXRlcyB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0W119IHRoZSBieXRlIGFycmF5LlxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgcmVhZEJ5dGVzKGJ5dGVzLCBwb3MsIGxlbikge1xuICAgIHJldHVybiBieXRlcy5zcGxpY2UocG9zLCBsZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgb3IgbW9kaWZpZXMgZm9ybXVsYXMgb3IgQ0FTIG9uIGEgdGV4dGFyZWEuXG4gICAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudH0gdGV4dGFyZWEgLSB0ZXh0YXJlYSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBhZGQgaW4gdGhlIHRleHRhcmVhLiBGb3IgZXhhbXBsZSwgdG8gYWRkIHRoZSBsaW5rIHRvIHRoZSBpbWFnZSxcbiAgICogY2FsbCB0aGlzIGZ1bmN0aW9uIGFzICh0ZXh0YXJlYSwgUGFyc2VyLmNyZWF0ZUltYWdlU3JjKG1hdGhtbCkpO1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgdXBkYXRlVGV4dEFyZWEodGV4dGFyZWEsIHRleHQpIHtcbiAgICBpZiAodGV4dGFyZWEgJiYgdGV4dCkge1xuICAgICAgdGV4dGFyZWEuZm9jdXMoKTtcblxuICAgICAgaWYgKHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0ICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25FbmQgfSA9IHRleHRhcmVhO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRleHRhcmVhLnZhbHVlLnN1YnN0cmluZygwLCB0ZXh0YXJlYS5zZWxlY3Rpb25TdGFydCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVuZFN1YiA9IHRleHRhcmVhLnZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb25FbmQsIHRleHRhcmVhLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gc2VsZWN0aW9uU3RhcnQgKyB0ZXh0ICsgc2VsZWN0aW9uRW5kU3ViO1xuICAgICAgICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQgKyB0ZXh0Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuICAgICAgICBzZWxlY3Rpb24udGV4dCA9IHRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vZGlmaWVzIGV4aXN0aW5nIGZvcm11bGEgb24gYSB0ZXh0YXJlYS5cbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0YXJlYSAtIHRleHQgYXJlYSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBhZGQgaW4gdGhlIHRleHRhcmVhLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgdG8gYWRkIHRoZSBsaW5rXG4gICAqIHRvIHRoZSBpbWFnZSx5b3UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbiBhc1xuICAgKiBVdGlsLnVwZGF0ZVRleHRhcmVhKHRleHRhcmVhLCBQYXJzZXIuY3JlYXRlSW1hZ2VTcmMobWF0aG1sKSk7XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAtIGJlZ2lubmluZyBpbmRleCBmcm9tIHRleHRhcmVhIHdoZXJlIGl0IG5lZWRzIHRvIGJlIHJlcGxhY2VkIGJ5IHRleHQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgLSBlbmRpbmcgaW5kZXggZnJvbSB0ZXh0YXJlYSB3aGVyZSBpdCBuZWVkcyB0byBiZSByZXBsYWNlZCBieSB0ZXh0XG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB1cGRhdGVFeGlzdGluZ1RleHRPblRleHRhcmVhKHRleHRhcmVhLCB0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgdGV4dGFyZWEuZm9jdXMoKTtcbiAgICBjb25zdCB0ZXh0YXJlYVN0YXJ0ID0gdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0KTtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IHRleHRhcmVhU3RhcnQgKyB0ZXh0ICsgdGV4dGFyZWEudmFsdWUuc3Vic3RyaW5nKGVuZCwgdGV4dGFyZWEudmFsdWUubGVuZ3RoKTtcbiAgICB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBzdGFydCArIHRleHQubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBhcmFtZXRlciB3aXRoIGl0J3MgY29ycmVzcG9uZGVudCB2YWx1ZSB0byBhbiBVUkwgKEdFVCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVVJMIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtZXRlciAtIHBhcmFtZXRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgYWRkQXJndW1lbnQocGF0aCwgcGFyYW1ldGVyLCB2YWx1ZSkge1xuICAgIGxldCBzZXA7XG4gICAgaWYgKHBhdGguaW5kZXhPZignPycpID4gMCkge1xuICAgICAgc2VwID0gJyYnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXAgPSAnPyc7XG4gICAgfVxuICAgIHJldHVybiBgJHtwYXRoICsgc2VwICsgcGFyYW1ldGVyfT0ke3ZhbHVlfWA7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOlsiVGV4dENhY2hlIiwiU2VydmljZVByb3ZpZGVyIiwiTWF0aE1MIiwiU3RyaW5nTWFuYWdlciIsIkFjY2Vzc2liaWxpdHkiLCJjYWNoZSIsIl9jYWNoZSIsInZhbHVlIiwibWF0aE1MVG9BY2Nlc3NpYmxlIiwibWF0aE1MIiwibGFuZ3VhZ2UiLCJkYXRhIiwiY29udGFpbkNsYXNzIiwibW9kZSIsImlnbm9yZVN0eWxlcyIsImFjY2Vzc2libGVUZXh0IiwiZ2V0Iiwic2VydmljZSIsImxhbmciLCJhY2Nlc3NpYmxlSnNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZ2V0U2VydmljZSIsInN0YXR1cyIsInJlc3VsdCIsInRleHQiLCJwb3B1bGF0ZSIsIkNvbmZpZ3VyYXRpb24iLCJhZGRDb25maWd1cmF0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsIl9wcm9wZXJ0aWVzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2V0IiwidXBkYXRlIiwicHJvcGVydHlWYWx1ZSIsInVwZGF0ZVByb3BlcnR5IiwiQ29uc3RhbnRzIiwic2FmZVhtbENoYXJhY3RlcnNFbnRpdGllcyIsInRhZ09wZW5lciIsInRhZ0Nsb3NlciIsImRvdWJsZVF1b3RlIiwicmVhbERvdWJsZVF1b3RlIiwic2FmZUJhZEJsYWNrYm9hcmRDaGFyYWN0ZXJzIiwibHRFbGVtZW50IiwiZ3RFbGVtZW50IiwiYW1wRWxlbWVudCIsInNhZmVHb29kQmxhY2tib2FyZENoYXJhY3RlcnMiLCJ4bWxDaGFyYWN0ZXJzIiwiaWQiLCJhbXBlcnNhbmQiLCJxdW90ZSIsInNhZmVYbWxDaGFyYWN0ZXJzIiwiVXRpbCIsIkltYWdlIiwicmVtb3ZlSW1nRGF0YUF0dHJpYnV0ZXMiLCJpbWciLCJhdHRyaWJ1dGVzVG9SZW1vdmUiLCJhdHRyaWJ1dGVzIiwia2V5cyIsImZvckVhY2giLCJhdHRyaWJ1dGUiLCJ1bmRlZmluZWQiLCJuYW1lIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbG9uZSIsIm9yaWdpbkltZyIsImRlc3RJbWciLCJjdXN0b21FZGl0b3JBdHRyaWJ1dGVOYW1lIiwiaGFzQXR0cmlidXRlIiwibWF0aG1sQXR0cmlidXRlTmFtZSIsImltZ0F0dHJpYnV0ZXMiLCJpdGVyYXRvciIsIm9yaWdpbkF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNldEltZ1NpemUiLCJ1cmkiLCJqc29uUmVzcG9uc2UiLCJhciIsImJhc2U2NFN0cmluZyIsImJ5dGVzIiwic3ZnU3RyaW5nIiwiZ2V0TWV0cmljc0Zyb21TdmdTdHJpbmciLCJzcmMiLCJzdWJzdHIiLCJsZW5ndGgiLCJiNjRUb0J5dGVBcnJheSIsImkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJnZXRNZXRyaWNzRnJvbUJ5dGVzIiwidXJsVG9Bc3NBcnJheSIsIndpZHRoIiwiY3ciLCJoZWlnaHQiLCJjaCIsImJhc2VsaW5lIiwiY2IiLCJkcGkiLCJzdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJmaXhBZnRlclJlc2l6ZSIsIm1heFdpZHRoIiwicHJvY2Vzc0ltZyIsInN1YnN0cmluZyIsIndpbmRvdyIsImF0b2IiLCJlbmNvZGVkU3ZnU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3ZnIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYmFzZTY0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImZldGNoIiwidGhlbiIsInIiLCJibG9iIiwicmVhZEFzRGF0YVVSTCIsImZpcnN0IiwibGFzdCIsImFyciIsInJlYWRCeXRlcyIsInR5cCIsInJlYWRJbnQzMiIsInJlYWRCeXRlIiwiTWF0aCIsInJvdW5kIiwiTGF0ZXgiLCJnZXRMYXRleEZyb21NYXRoTUwiLCJtYXRobWwiLCJtYXRobWxXaXRob3V0U2VtYW50aWNzIiwicmVtb3ZlU2VtYW50aWNzIiwibW1sIiwibGF0ZXgiLCJsYXRleEh0bWxFbnRpdGllc0VuY29kZWQiLCJodG1sRW50aXRpZXMiLCJtYXRobWxXaXRoU2VtYW50aWNzIiwiYWRkQW5ub3RhdGlvbiIsImdldE1hdGhNTEZyb21MYXRleCIsImluY2x1ZGVMYXRleE9uU2VtYW50aWNzIiwibGF0ZXhDYWNoZSIsInNhdmVMYXRleCIsIm91dHB1dCIsInNwbGl0Iiwiam9pbiIsImNvbnRlbnQiLCJwYXJzZU1hdGhtbFRvTGF0ZXgiLCJjaGFyYWN0ZXJzIiwibWF0aFRhZ0JlZ2luIiwibWF0aFRhZ0VuZCIsIm9wZW5UYXJnZXQiLCJjbG9zZVRhcmdldCIsInN0YXJ0IiwiZW5kIiwic3RhcnRBbm5vdGF0aW9uIiwiY2xvc2VBbm5vdGF0aW9uIiwic2FmZVhtbERlY29kZSIsImdldExhdGV4RnJvbVRleHROb2RlIiwidGV4dE5vZGUiLCJjYXJldFBvc2l0aW9uIiwibGF0ZXhUYWdzIiwiZGVmYXVsdExhdGV4VGFncyIsIm9wZW4iLCJjbG9zZSIsInN0YXJ0Tm9kZSIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiZ2V0TmV4dExhdGV4UG9zaXRpb24iLCJjdXJyZW50Tm9kZSIsImN1cnJlbnRQb3NpdGlvbiIsInRhZyIsInBvc2l0aW9uIiwibm9kZVZhbHVlIiwibmV4dFNpYmxpbmciLCJub2RlIiwiaXNQcmV2aW91cyIsImVuZE5vZGUiLCJlbmRQb3NpdGlvbiIsInRhZ0xlbmd0aCIsImluZGV4Iiwic3RhcnRQb3NpdGlvbiIsIkxpc3RlbmVycyIsImNvbnN0cnVjdG9yIiwibGlzdGVuZXJzIiwiYWRkIiwibGlzdGVuZXIiLCJmaXJlIiwiZXZlbnROYW1lIiwiZXZlbnQiLCJjYW5jZWxsZWQiLCJjYWxsYmFjayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJuZXdMaXN0ZW5lciIsImlzTWF0aG1sSW5BdHRyaWJ1dGUiLCJtYXRoQXR0IiwiYXR0Q29udGVudCIsImF0dCIsImF0dHMiLCJyZWdleCIsImV4cHJlc3Npb24iLCJSZWdFeHAiLCJhY3R1YWxDb250ZW50IiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwiZXhpc3RzIiwidGVzdCIsImlucHV0IiwiX3dyc19ibGFja2JvYXJkIiwicmV0dXJuVmFsdWUiLCJjdXJyZW50RW50aXR5IiwiY2hhcmFjdGVyIiwiY2hhckF0IiwibWF0Y2giLCJzYWZlWG1sRW5jb2RlIiwibWF0aE1MRW50aXRpZXMiLCJ0b1JldHVybiIsImNvZGVQb2ludEF0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZml4ZWRDaGFyQ29kZUF0IiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJhZGRDdXN0b21FZGl0b3JDbGFzc0F0dHJpYnV0ZSIsImN1c3RvbUVkaXRvciIsInJlbW92ZUN1c3RvbUVkaXRvckNsYXNzQXR0cmlidXRlIiwicmVwbGFjZSIsImFubm90YXRpb25FbmNvZGluZyIsImNvbnRhaW5zQW5ub3RhdGlvbiIsIm1hdGhtbFdpdGhBbm5vdGF0aW9uIiwiY2xvc2VTZW1hbnRpY3NJbmRleCIsImlzRW1wdHkiLCJlbmRJbmRleElubGluZSIsImVuZEluZGV4Tm9uSW5saW5lIiwiZW5kSW5kZXgiLCJiZWdpbk1hdGhNTENvbnRlbnQiLCJlbmRNYXRobWxDb250ZW50IiwibGFzdEluZGV4T2YiLCJtYXRobWxDb250ZW50IiwicmVtb3ZlQW5ub3RhdGlvbiIsIm1hdGhtbFdpdGhvdXRBbm5vdGF0aW9uIiwib3BlbkFubm90YXRpb25UYWciLCJjbG9zZUFubm90YXRpb25UYWciLCJzdGFydEFubm90YXRpb25JbmRleCIsImRpZmZlcmVudEFubm90YXRpb25Gb3VuZCIsImRpZmZlcmVudEFubm90YXRpb25JbmRleCIsImNsb3NlSW5kZXgiLCJlbmRBbm5vdGF0aW9uSW5kZXgiLCJzdGFydEluZGV4Iiwic2VtYW50aWNzU3RhcnRpbmdUYWdSZWdleCIsInNlbWFudGljc0VuZGluZ1RhZ1JlZ2V4IiwicmVtb3ZlU2VtYW50aWNzT2N1cnJlbmNlcyIsIm1hdGhUYWdTdGFydCIsIm1hdGhUYWdFbmRsaW5lIiwic2VtYW50aWNzVGFnU3RhcnQiLCJhbm5vdGF0aW9uVGFnU3RhcnQiLCJtYXRoVGFnRW5kSW5kZXgiLCJtYXRoVGFnRW5kbGluZUluZGV4IiwiZmlyc3RUYWdDbG9zZXIiLCJzZW1hbnRpY3NJbmRleCIsIm1tbFRhZ1N0YXJ0IiwiYW5ub3RhdGlvbkluZGV4IiwibW1sQ29udGVudCIsImNsYXNzTmFtZSIsImNsYXNzSW5kZXgiLCJjbGFzc1RhZ0VuZEluZGV4IiwiY2xhc3NUYWciLCJjbG9zZVRhZyIsImNsb3NlVGFnSW5saW5lIiwiZmlyc3RDbG9zZVRhZ0luZGV4IiwiZmlyc3RDbG9zZVRhZ0lubGluZUluZGV4IiwiZW1wdHkiLCJtYXRoVGFnRW5kUmVnZXgiLCJtYXRoVGFnRW5kQXJyYXkiLCJleGVjIiwiZW5jb2RlUHJvcGVydGllcyIsInJlcGxhY2VyIiwicXVvdGVJbmRleCIsInByb3BlcnR5VmFsdWVFbmNvZGVkIiwibWF0Y2hFbmNvZGVkIiwibWF0aG1sRW5jb2RlZCIsIm1kNSIsIkh4T3ZlcnJpZGVzIiwiX19uYW1lX18iLCJkYXRlU3RyIiwiZGF0ZSIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibWkiLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJnZXRGdWxsWWVhciIsInN0ckRhdGUiLCJrIiwiRGF0ZSIsInNldFRpbWUiLCJzZXRVVENIb3VycyIsInNldFVUQ01pbnV0ZXMiLCJzZXRVVENTZWNvbmRzIiwieSIsInQiLCJjY2EiLCJ4IiwiY2hhckNvZGVBdCIsInBvcyIsImxlbiIsInJlbW92ZSIsImEiLCJvYmoiLCJsIiwic3BsaWNlIiwiaXRlciIsImN1ciIsImhhc05leHQiLCJuZXh0IiwiSW50SXRlciIsIm1pbiIsIm1heCIsIl9fY2xhc3NfXyIsIlN0ZCIsInYiLCJqcyIsIkJvb3QiLCJfX2luc3RhbmNlb2YiLCJzdHJpbmciLCJfX3N0cmluZ19yZWMiLCJwYXJzZUludCIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJhbmRvbSIsImZsb29yIiwiY29tIiwid2lyaXMiLCJKc1BsdWdpblRvb2xzIiwidHJ5UmVhZHkiLCJtYWluIiwiZXYiLCJnZXRJbnN0YW5jZSIsImhheGUiLCJUaW1lciIsImRlbGF5IiwiJGJpbmQiLCJpbnN0YW5jZSIsImJ5cGFzc0VuY2Fwc3VsYXRpb24iLCJtZDVlbmNvZGUiLCJNZDUiLCJlbmNvZGUiLCJkb0xvYWQiLCJyZWFkeSIsIkxpYiIsInJlYWR5U3RhdGUiLCJMb2ciLCJ0cmFjZSIsImluZm9zIiwiX190cmFjZSIsImNsZWFyIiwiX19jbGVhcl90cmFjZSIsImRvRW5jb2RlIiwic3RyIiwic3RyMmJsa3MiLCJiIiwiYyIsInN0ZXAiLCJvbGRhIiwib2xkYiIsIm9sZGMiLCJvbGRkIiwiZmYiLCJnZyIsImhoIiwiaWkiLCJhZGRtZSIsInJoZXgiLCJjbW4iLCJiaXRYT1IiLCJiaXRPUiIsImJpdEFORCIsInEiLCJyb2wiLCJudW0iLCJjbnQiLCJuYmxrIiwiYmxrcyIsIkFycmF5IiwiX2cxIiwiX2ciLCJoZXhfY2hyIiwiaiIsImxzdyIsIm1zdyIsImxzYiIsIm1zYjMxIiwidGltZV9tcyIsIm1lIiwic2V0SW50ZXJ2YWwiLCJydW4iLCJmIiwic3RvcCIsIm1lYXN1cmUiLCJ0MCIsInN0YW1wIiwiZ2V0VGltZSIsImNsZWFySW50ZXJ2YWwiLCJfX3VuaHRtbCIsIm1zZyIsImZpbGVOYW1lIiwibGluZU51bWJlciIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlzQ2xhc3MiLCJvIiwiaXNFbnVtIiwiZSIsIl9fZW5hbWVfXyIsImdldENsYXNzIiwiX19lbnVtX18iLCJpMSIsInRvc3RyIiwidG9TdHJpbmciLCJzMiIsImhhc3AiLCJfX2ludGVyZkxvb3AiLCJjYyIsImNsIiwiaW50ZiIsIl9faW50ZXJmYWNlc19fIiwiX19zdXBlcl9fIiwiSW50IiwiY2VpbCIsIkZsb2F0IiwiQm9vbCIsIkR5bmFtaWMiLCJDbGFzcyIsIkVudW0iLCJfX2Nhc3QiLCJkZWJ1ZyIsImFsZXJ0IiwiZXZhbCIsImNvZGUiLCJzZXRFcnJvckhhbmRsZXIiLCJvbmVycm9yIiwiJF8iLCJtZXRob2QiLCJhcHBseSIsInNjb3BlIiwiYXJndW1lbnRzIiwiTmFOIiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJQT1NJVElWRV9JTkZJTklUWSIsImlzRmluaXRlIiwiQm9vbGVhbiIsIlZvaWQiLCJ1cmwiLCJsaW5lIiwiUGFyc2VyIiwibWF0aG1sVG9JbWdPYmplY3QiLCJjcmVhdG9yIiwid2lyaXNQcm9wZXJ0aWVzIiwiaW1nT2JqZWN0IiwiYWxpZ24iLCJ3aXJpc0VkaXRvclByb3BlcnRpZXMiLCJtZXRyaWNzIiwiY2VudGVyYmFzZWxpbmUiLCJtYXRobWxTdWJzdHJpbmciLCJjcmVhdGVTaG93SW1hZ2VTcmMiLCJmb3JtYXQiLCJ1cmxFbmNvZGUiLCJhbHQiLCJjcmVhdGVJbWFnZVNyYyIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsImJhc2VQYXJ0cyIsImdldFNlcnZpY2VQYXRoIiwicG9wIiwiaW5pdFBhcnNlIiwiaW5pdFBhcnNlU2F2ZU1vZGUiLCJpbml0UGFyc2VFZGl0TW9kZSIsInBhcnNlTWF0aG1sVG9JbWciLCJjb2RlSW1nVHJhbnNmb3JtIiwiaW1nTGlzdCIsImdldEVsZW1lbnRzQnlOYW1lRnJvbVN0cmluZyIsInRva2VuIiwiY2FycnkiLCJpbWdDb2RlIiwibWF0aG1sU3RhcnRUb2tlbiIsIm1hdGhtbFN0YXJ0IiwibWF0aG1sRW5kIiwiaHRtbFNhbml0aXplIiwibGF0ZXhTdGFydFBvc2l0aW9uIiwibGF0ZXhFbmRQb3NpdGlvbiIsInJlcGxhY2VUZXh0IiwiaHRtbEVudGl0aWVzRGVjb2RlIiwiZW5kUGFyc2UiLCJjb2RlRW5kUGFyc2VkRWRpdE1vZGUiLCJlbmRQYXJzZUVkaXRNb2RlIiwiY29kZUVuZFBhcnNlU2F2ZU1vZGUiLCJlbmRQYXJzZVNhdmVNb2RlIiwiZGVjb2RlZExhdGV4IiwiY3JlYXRlU2hvd0ltYWdlU3JjRGF0YSIsImRhdGFNZDUiLCJyZW5kZXJQYXJhbXMiLCJwYXJhbSIsImRhdGFPYmplY3QiLCJmb3JtdWxhIiwicHJvcGVydGllc1RvU3RyaW5nIiwidmVyc2lvbiIsImh0dHBCdWlsZFF1ZXJ5IiwicGF0dGVybiIsInBhdHRlcm5MZW5ndGgiLCJzb3VyY2UiLCJsYXN0SW5kZXgiLCJjaGFyYWN0ZXJOZXh0UG9zaXRpb24iLCJjcmVhdGVPYmplY3QiLCJ4bWxDb2RlIiwiY29udmVydFRvWG1sIiwiY29udmVydFRvU2FmZVhtbCIsImNyZWF0ZU9iamVjdENvZGUiLCJnZXRXSVJJU0ltYWdlT3V0cHV0IiwiaW1hZ2VNYXRobWxBdHJyaWJ1dGUiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwib2xkVmFsdWUiLCJhdHRyaWJ1dGVOYW1lIiwidGFyZ2V0IiwiY3JlYXRlIiwiQ29uZmlnIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJnZXRQcm90b3R5cGVPZiIsIl9saXN0ZW5lcnMiLCJhZGRMaXN0ZW5lciIsImZpcmVFdmVudCIsInBhcmFtZXRlcnMiLCJfcGFyYW1ldGVycyIsInNlcnZpY2VQYXRocyIsIl9zZXJ2aWNlUGF0aHMiLCJzZXRTZXJ2aWNlUGF0aCIsInBhdGgiLCJzZXJ2aWNlTmFtZSIsImludGVncmF0aW9uUGF0aCIsIl9pbnRlZ3JhdGlvblBhdGgiLCJnZXRTZXJ2ZXJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJpbml0IiwiY29uZmlndXJhdGlvblVSSSIsImNyZWF0ZVNlcnZpY2VVUkkiLCJjcmVhdGVJbWFnZVVSSSIsInNob3dJbWFnZVVSSSIsImdldE1hdGhNTFVSSSIsInNlcnZpY2VVUkkiLCJVUkkiLCJzZXJ2ZXJQYXRoIiwiZ2V0VXJsIiwicG9zdFZhcmlhYmxlcyIsImN1cnJlbnRQYXRoIiwiaHR0cFJlcXVlc3QiLCJjcmVhdGVIdHRwUmVxdWVzdCIsImhlYWRlciIsIm1hcCIsImVsZW1lbnQiLCJ0cmltIiwidmFsIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsImdldFZhcmlhYmxlcyIsInNlcnZpY2VVcmwiLCJnZXRTZXJ2ZXJMYW5ndWFnZUZyb21TZXJ2aWNlIiwiZXh0ZW5zaW9uIiwic2VydmVyRXh0ZW5zaW9uIiwiY29uY2F0ZW5hdGVVcmwiLCJzZXJ2ZXIiLCJ0cmFuc2xhdGlvbnMiLCJFcnJvciIsInNsaWNlIiwic3RyaW5ncyIsIndhcm4iLCJET01QdXJpZnkiLCJldmVudFRhcmdldCIsImNyZWF0ZUV2ZW50IiwiZXZlbnRPYmplY3QiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3JlYXRlRXZlbnRPYmplY3QiLCJhZGRFdmVudCIsImNhbGxCYWNrRnVuY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJyZW1vdmVFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsImFkZEVsZW1lbnRFdmVudHMiLCJkb3VibGVDbGlja0hhbmRsZXIiLCJtb3VzZWRvd25IYW5kbGVyIiwibW91c2V1cEhhbmRsZXIiLCJjYWxsYmFja0RibGNsaWNrIiwicmVhbEV2ZW50Iiwic3JjRWxlbWVudCIsImNhbGxiYWNrTW91c2Vkb3duIiwiY2FsbGJhY2tNb3VzZXVwIiwicmVtb3ZlRWxlbWVudEV2ZW50cyIsImFkZENsYXNzIiwiY29udGFpbnNDbGFzcyIsImN1cnJlbnRDbGFzc2VzIiwicmVtb3ZlQ2xhc3MiLCJuZXdDbGFzc05hbWUiLCJjbGFzc2VzIiwiY29udmVydE9sZFhtbGluaXRpYWx0ZXh0QXR0cmlidXRlIiwieGl0cG9zIiwidmFscG9zIiwic3RhcnRxdW90ZSIsImVuZHF1b3RlIiwibmV3dmFsdWUiLCJ0YWdOYW1lIiwiaHRtbCIsIm9iamVjdENvZGUiLCJyZWN1cnNpdmVQYXJhbXNGaXgiLCJvYmplY3QiLCJhdHRyaWJ1dGVzUGFyc2VkIiwibm9kZU5hbWUiLCJOQU1FIiwiVkFMVUUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYXBwbGV0IiwiY2hpbGROb2RlcyIsInRvTG93ZXJDYXNlIiwiYXBwZW5kQ2hpbGQiLCJmaXJzdENoaWxkIiwic3BlY2lmaWVkIiwicGF0aDEiLCJwYXRoMiIsInNlcGFyYXRvciIsImFubm90YXRpb25SZWdleCIsImFubm90YXRpb24iLCJzYW5pdGl6ZSIsIkFERF9UQUdTIiwiQUxMT1dFRF9BVFRSIiwidGV4dGFyZWEiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvYyIsImhhc2giLCJuIiwiczEiLCJjb21wYXJlU3RyaW5ncyIsImFuIiwiYm4iLCJpZHgiLCJoaSIsImxvdyIsInF1ZXJ5Iiwic3MiLCJrdiIsImNsZWFyU3RyaW5nIiwiZGF0YU1hdGhNTCIsInNhZmVNYXRoTUwiLCJnZXROb2RlTGVuZ3RoIiwic3RhdGljTm9kZUxlbmd0aHMiLCJJTUciLCJCUiIsInRvVXBwZXJDYXNlIiwiZ2V0U2VsZWN0ZWRJdGVtIiwiaXNJZnJhbWUiLCJmb3JjZUdldFNlbGVjdGlvbiIsIndpbmRvd1RhcmdldCIsImNvbnRlbnRXaW5kb3ciLCJmb2N1cyIsInNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJwYXJlbnRFbGVtZW50IiwiaHRtbFRleHQiLCJleGVjQ29tbWFuZCIsInRlbXBvcmFsT2JqZWN0IiwicGFzdGVIVE1MIiwiY3JlYXRlVGV4dE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIml0ZW0iLCJnZXRTZWxlY3Rpb24iLCJnZXRSYW5nZUF0Iiwic3RhcnRDb250YWluZXIiLCJzdGFydE9mZnNldCIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsImxvY2FsTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZW1wdHlTcGFuIiwiZ2V0U2VsZWN0ZWRJdGVtT25UZXh0YXJlYSIsInRleHROb2RlVmFsdWVzIiwic2VsZWN0aW9uU3RhcnQiLCJhdXRvQ2xvc2VkIiwiZWxlbWVudHMiLCJlbmRTdHJpbmciLCJkZWNvZGU2NCIsIlBMVVMiLCJTTEFTSCIsIk5VTUJFUiIsIkxPV0VSIiwiVVBQRVIiLCJQTFVTX1VSTF9TQUZFIiwiU0xBU0hfVVJMX1NBRkUiLCJiNjRTdHJpbmciLCJ0bXAiLCJwbGFjZUhvbGRlcnMiLCJpbnQzMiIsInNoaWZ0IiwidXBkYXRlVGV4dEFyZWEiLCJzZWxlY3Rpb25FbmQiLCJzZWxlY3Rpb25FbmRTdWIiLCJ1cGRhdGVFeGlzdGluZ1RleHRPblRleHRhcmVhIiwidGV4dGFyZWFTdGFydCIsImFkZEFyZ3VtZW50IiwicGFyYW1ldGVyIiwic2VwIl0sInNvdXJjZVJvb3QiOiIifQ==