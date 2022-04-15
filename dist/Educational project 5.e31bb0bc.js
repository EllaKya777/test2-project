// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/image.jpg":[function(require,module,exports) {
module.exports = "/image.70feebc7.jpg";
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = block;
exports.col = col;
exports.css = css;
exports.row = row;

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "<div class = \"row\" style = \"".concat(styles, "\">").concat(content, "</div>");
}

function col(content) {
  return "<div class = \"col-sm\">".concat(content, "</div>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /*const keys = Object.keys(styles);
  const arrey = keys.map(key => {
      return `${key}: ${styles[key]}`
  })
  return arrey.join(';');*/
  if (typeof styles === 'string') return styles;

  var toString = function toString(key) {
    return "".concat(key, ": ").concat(styles[key]);
  };

  return Object.keys(styles).map(toString).join(';');
}

function block(type) {
  return "\n    <form name = \"".concat(type, "\">\n    <h5>").concat(type, "</h5>\n    <div class = \"form-group\">\n    <input class = \"form-control form-control-sm\" name = \"value\" placeholder = \"value\">\n    </div>\n    <div class = \"form-group\">\n    <input class = \"form-control form-control-sm\" name = \"styles\" placeholder = \"styles\">\n    </div>\n    <button type = \"submit\" class = \"btn btn-primary btn-sm\">Add</button>\n    </form>\n    <hr>\n    ");
}
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBlock = exports.TextBlock = exports.ImageBlock = exports.ColumnsBlock = void 0;

var _utils = require("../utils.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value, this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('the method toHTML is to be implemented');
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 'h1' : _this$options$tag,
          styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "<").concat(tag, ">")), (0, _utils.css)(styles));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var TextBlock = /*#__PURE__*/function (_Block2) {
  _inherits(TextBlock, _Block2);

  var _super2 = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super2.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      return (0, _utils.row)((0, _utils.col)("<p>".concat(this.value, "</p>")), (0, _utils.css)(this.options.styles));
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ColumnsBlock, _Block3);

  var _super3 = _createSuper(ColumnsBlock);

  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var html = this.value.map(_utils.col).join('');
      return (0, _utils.row)(html, (0, _utils.css)(this.options.styles));
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;

var ImageBlock = /*#__PURE__*/function (_Block4) {
  _inherits(ImageBlock, _Block4);

  var _super4 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super4.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          is = _this$options2.imageStyles,
          _this$options2$alt = _this$options2.alt,
          alt = _this$options2$alt === void 0 ? '' : _this$options2$alt,
          styles = _this$options2.styles;
      return (0, _utils.row)("<img src = \"".concat(this.value, "\"  alt = \"").concat(alt, "\" style = \"").concat((0, _utils.css)(is), "\"/>"), (0, _utils.css)(styles));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;
},{"../utils.js":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _image = _interopRequireDefault(require("./assets/image.jpg"));

var _blocks = require("./classes/blocks.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = "Cras mauris nibh, tristique vel justo et, scelerisque accumsan tortor. Integer eu neque ut urna malesuada mollis euismod suscipit urna. Proin vel nisi non augue elementum laoreet. Nam eu lorem mauris. Sed tempus, arcu at consequat pretium, magna erat mattis ante, quis pulvinar elit lorem vitae turpis. Ut volutpat diam ex, non commodo nunc faucibus vitae. Suspendisse sit amet pharetra lorem. Mauris porta euismod ipsum at tincidunt. Nam volutpat laoreet diam et fringilla. Sed sit amet elit lectus. Nulla dignissim, orci sed pretium vulputate, dui diam tincidunt lacus, vitae dignissim ex elit vitae lorem. Duis vitae consequat dolor. In ac pharetra dui.\n\n";
var model = [new _blocks.TitleBlock('Hello World!', {
  tag: 'h2',
  // styles: background: 'linear-gradient(to right, #bdc3c7, #2c3e50)', color: '#fff',
  styles: {
    background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
    color: '#fff',
    padding: '1.5rem',
    'margin-bottom': '2rem',
    'text-align': 'center'
  }
  /* {type: 'title', value: "Hello World from JS!", options: {
       tag: 'h2',
      // styles: background: 'linear-gradient(to right, #bdc3c7, #2c3e50)', color: '#fff',
      styles: {
          background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
          color: '#fff',
          padding: '1.5rem',
          'text-align': 'center'
      }*/

}), new _blocks.TextBlock(text, {
  styles: {
    background: 'rgb(232,232,232)',
    padding: '1rem',
    color: '74, 107, 117',
    'font-weight': 'bold'
  }
}), new _blocks.ImageBlock(_image.default, {
  styles: {
    padding: '2rem 0',
    display: 'flex',
    'justify-content': 'center'
  },
  imageStyles: {
    width: '100%',
    height: 'auto'
  },
  alt: 'Picture'
}), new _blocks.ColumnsBlock(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ut nunc ac ornare. Praesent ac metus convallis, lacinia enim blandit, sagittis libero. Ut ut enim vitae leo blandit ultricies sed ullamcorper eros. Suspendisse potenti. Morbi ex dui, lacinia non pellentesque dapibus, condimentum vel mauris. Sed ornare ligula ante, eget euismod massa blandit ac. Maecenas vel volutpat eros. In volutpat blandit est, hendrerit fermentum lacus feugiat vitae. Fusce et vulputate erat, vitae facilisis lectus. Phasellus rutrum euismod suscipit.', 'Donec eros purus, lobortis sit amet congue a, iaculis sed dui. Sed vitae leo non metus fringilla ullamcorper sodales vel mauris. Nulla facilisi. Nullam vestibulum iaculis magna vel cursus. Aliquam erat volutpat. Integer efficitur metus sed arcu tincidunt, nec elementum diam accumsan. Nam a semper neque. Nunc efficitur elit ac neque semper, non pretium felis tempor. Etiam ultricies lacus non odio sollicitudin, et tempor nibh semper. Curabitur interdum volutpat sodales. Duis bibendum ante dapibus velit bibendum, quis lacinia nunc finibus.', 'Sed tempus elit ut felis ultricies pretium. Suspendisse et varius elit. Quisque vel dolor mi. Nullam porttitor lorem arcu, in dictum nunc pharetra quis. Morbi vel ante turpis. Aenean congue ut ante a ultrices. Pellentesque convallis, est vel scelerisque lobortis, lacus metus consequat ex, nec ultricies risus nisi eget metus. Nunc sollicitudin, lorem et sodales cursus, nibh felis facilisis quam, nec pulvinar nulla lectus eu orci. Nam viverra laoreet est a laoreet.'], {
  styles: {
    background: 'rgb(235, 235, 224)',
    padding: '2rem',
    color: '74, 107, 117',
    'font-weight': 'bold'
  }
})];
exports.model = model;
},{"./assets/image.jpg":"assets/image.jpg","./classes/blocks.js":"classes/blocks.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model.js");

require("./styles/main.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var site = document.querySelector('#site');

_model.model.forEach(function (block) {
  site.insertAdjacentHTML('beforeend', block.toHTML());
});

var Sidebar = /*#__PURE__*/function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.el = document.getElementById('panel');
    this.init();
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.el.insertAdjacentHTML('beforeend', this.sidebarInner);
    }
  }, {
    key: "sidebarInner",
    get: function get() {
      return "\n        <div class=\"list-group\">\n      <button type=\"button\" class=\"list-group-item list-group-item-action active\">\n        Cras justo odio\n      </button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action\">Morbi leo risus</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action\">Porta ac consectetur ac</button>\n      <button type=\"button\" class=\"list-group-item list-group-item-action\" disabled>Vestibulum at eros</button>\n    </div>\n        ";
    }
  }]);

  return Sidebar;
}();

var sidebar = new Sidebar('panel');
},{"./model.js":"model.js","./styles/main.css":"styles/main.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57258" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/Educational%20project%205.e31bb0bc.js.map