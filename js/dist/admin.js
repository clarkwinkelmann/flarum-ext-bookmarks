module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=13)}([function(t,n){t.exports=flarum.core.compat.app},,,,,,,,,,function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,n){t.exports=flarum.core.compat["components/Switch"]},,function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r);var a=e(10),i=e.n(a),u=e(11),c=e.n(u),s=function(t){var n,e;function r(){return t.apply(this,arguments)||this}e=t,(n=r).prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e;var a=r.prototype;return a.title=function(){return o.a.translator.trans("clarkwinkelmann-bookmarks.admin.settings.title")},a.form=function(){var t=this;return m(".Form-group",c.a.component({state:"1"===this.setting("bookmarks.independentButton","1")(),onchange:function(n){t.setting("bookmarks.independentButton")(n?"1":"0")}},o.a.translator.trans("clarkwinkelmann-bookmarks.admin.settings.independentButton")))},r}(i.a);o.a.initializers.add("clarkwinkelmann-bookmarks",(function(){o.a.extensionSettings["clarkwinkelmann-bookmarks"]=function(){return o.a.modal.show(new s)}}))}]);
//# sourceMappingURL=admin.js.map