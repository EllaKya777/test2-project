parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Paoz":[function(require,module,exports) {
module.exports="/image.031612d3.jpg";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class = "row" style = "'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class = "col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n    <form name = "'.concat(n,'">\n    <h5>').concat(n,'</h5>\n    <div class = "form-group">\n    <input class = "form-control form-control-sm" name = "value" placeholder = "value">\n    </div>\n    <div class = "form-group">\n    <input class = "form-control form-control-sm" name = "styles" placeholder = "styles">\n    </div>\n    <button type = "submit" class = "btn btn-primary btn-sm">Add</button>\n    </form>\n    <hr>\n    ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.block=r,exports.col=o,exports.css=t,exports.row=n;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TitleBlock=exports.TextBlock=exports.ImageBlock=exports.ColumnsBlock=void 0;var t=require("../utils.js");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=u();return function(){var o,r=s(t);if(e){var n=s(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return c(this,o)}}function c(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("the method toHTML is to be implemented")}}]),t}(),y=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,r=void 0===o?"h1":o,n=e.styles;return(0,t.row)((0,t.col)("<".concat(r,">").concat(this.value,"<").concat(r,">")),(0,t.css)(n))}}]),c}();exports.TitleBlock=y;var h=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),c}();exports.TextBlock=h;var v=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=v;var b=function(e){o(c,p);var r=n(c);function c(t,e){return l(this,c),r.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.imageStyles,r=e.alt,n=void 0===r?"":r,c=e.styles;return(0,t.row)('<img src = "'.concat(this.value,'"  alt = "').concat(n,'" style = "').concat((0,t.css)(o),'"/>'),(0,t.css)(c))}}]),c}();exports.ImageBlock=b;
},{"../utils.js":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=t(require("./assets/image.jpg")),i=require("./classes/blocks.js");function t(e){return e&&e.__esModule?e:{default:e}}var u="Cras mauris nibh, tristique vel justo et, scelerisque accumsan tortor. Integer eu neque ut urna malesuada mollis euismod suscipit urna. Proin vel nisi non augue elementum laoreet. Nam eu lorem mauris. Sed tempus, arcu at consequat pretium, magna erat mattis ante, quis pulvinar elit lorem vitae turpis. Ut volutpat diam ex, non commodo nunc faucibus vitae. Suspendisse sit amet pharetra lorem. Mauris porta euismod ipsum at tincidunt. Nam volutpat laoreet diam et fringilla. Sed sit amet elit lectus. Nulla dignissim, orci sed pretium vulputate, dui diam tincidunt lacus, vitae dignissim ex elit vitae lorem. Duis vitae consequat dolor. In ac pharetra dui.\n\n",a=[new i.TitleBlock("Hello World!",{tag:"h2",styles:{background:"linear-gradient(to right, #bdc3c7, #2c3e50)",color:"#fff",padding:"1.5rem","margin-bottom":"2rem","text-align":"center"}}),new i.TextBlock(u,{styles:{background:"rgb(232,232,232)",padding:"1rem",color:"74, 107, 117","font-weight":"bold"}}),new i.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"100%",height:"auto"},alt:"Picture"}),new i.ColumnsBlock(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque ut nunc ac ornare. Praesent ac metus convallis, lacinia enim blandit, sagittis libero. Ut ut enim vitae leo blandit ultricies sed ullamcorper eros. Suspendisse potenti. Morbi ex dui, lacinia non pellentesque dapibus, condimentum vel mauris. Sed ornare ligula ante, eget euismod massa blandit ac. Maecenas vel volutpat eros. In volutpat blandit est, hendrerit fermentum lacus feugiat vitae. Fusce et vulputate erat, vitae facilisis lectus. Phasellus rutrum euismod suscipit.","Donec eros purus, lobortis sit amet congue a, iaculis sed dui. Sed vitae leo non metus fringilla ullamcorper sodales vel mauris. Nulla facilisi. Nullam vestibulum iaculis magna vel cursus. Aliquam erat volutpat. Integer efficitur metus sed arcu tincidunt, nec elementum diam accumsan. Nam a semper neque. Nunc efficitur elit ac neque semper, non pretium felis tempor. Etiam ultricies lacus non odio sollicitudin, et tempor nibh semper. Curabitur interdum volutpat sodales. Duis bibendum ante dapibus velit bibendum, quis lacinia nunc finibus.","Sed tempus elit ut felis ultricies pretium. Suspendisse et varius elit. Quisque vel dolor mi. Nullam porttitor lorem arcu, in dictum nunc pharetra quis. Morbi vel ante turpis. Aenean congue ut ante a ultrices. Pellentesque convallis, est vel scelerisque lobortis, lacus metus consequat ex, nec ultricies risus nisi eget metus. Nunc sollicitudin, lorem et sodales cursus, nibh felis facilisis quam, nec pulvinar nulla lectus eu orci. Nam viverra laoreet est a laoreet."],{styles:{background:"rgb(235, 235, 224)",padding:"2rem",color:"74, 107, 117","font-weight":"bold"}})];exports.model=a;
},{"./assets/image.jpg":"Paoz","./classes/blocks.js":"dDFO"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var t=require("./model.js");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}require("./styles/main.css");var o=document.querySelector("#site");t.model.forEach(function(t){o.insertAdjacentHTML("beforeend",t.toHTML())});var r=function(){function t(){e(this,t),this.el=document.getElementById("panel"),this.init()}return i(t,[{key:"init",value:function(){this.el.insertAdjacentHTML("beforeend",this.sidebarInner)}},{key:"sidebarInner",get:function(){return'\n        <div class="list-group">\n      <button type="button" class="list-group-item list-group-item-action active">\n        Cras justo odio\n      </button>\n      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>\n      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>\n      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>\n      <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>\n    </div>\n        '}}]),t}(),s=new r("panel");
},{"./model.js":"JDu1","./styles/main.css":"jExt"}]},{},["Focm"], null)