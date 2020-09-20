module.exports=function(o){var t={};function e(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return o[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=o,e.c=t,e.d=function(o,t,n){e.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:n})},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,t){if(1&t&&(o=e(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)e.d(n,r,function(t){return o[t]}.bind(null,r));return n},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},e.p="",e(e.s=12)}([function(o,t){o.exports=flarum.core.compat.app},function(o,t){o.exports=flarum.core.compat.extend},function(o,t){o.exports=flarum.core.compat["components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat["components/IndexPage"]},function(o,t){o.exports=flarum.core.compat["components/Badge"]},function(o,t){o.exports=flarum.core.compat["models/Discussion"]},function(o,t){o.exports=flarum.core.compat["components/Button"]},function(o,t){o.exports=flarum.core.compat["utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionList"]},function(o,t){o.exports=flarum.core.compat["components/LinkButton"]},,,function(o,t,e){"use strict";e.r(t);var n=e(0),r=e.n(n),a=e(1),i=e(4),s=e.n(i),u=e(5),c=e.n(u),f=e(6),p=e.n(f),l=e(2),k=e.n(l),d=e(7),b=e.n(d);function x(o,t,e){void 0===e&&(e="");var n=o.attribute("bookmarked");return p.a.component({className:e+(n?" Button--bookmarked":""),icon:n?"fas fa-bookmark":"far fa-bookmark",onclick:function(){o.save({bookmarked:!n}).then((function(){m.redraw()}))}},r.a.translator.trans("clarkwinkelmann-bookmarks.forum."+t+"."+(n?"remove":"add")))}var y=e(8),v=e.n(y),g=e(3),j=e.n(g),O=e(9),B=e.n(O);r.a.initializers.add("clarkwinkelmann-bookmarks",(function(){Object(a.extend)(c.a.prototype,"badges",(function(o){this.attribute("bookmarked")&&o.add("bookmarked",s.a.component({label:r.a.translator.trans("clarkwinkelmann-bookmarks.forum.badge"),icon:"fas fa-bookmark",type:"bookmark"}))})),Object(a.extend)(b.a,"userControls",(function(o,t,e){!r.a.session.user||r.a.forum.attribute("independentBookmarkButton")&&e instanceof k.a||o.add("bookmark",x(t,"dropdownButton"))})),Object(a.extend)(k.a.prototype,"sidebarItems",(function(o){r.a.session.user&&r.a.forum.attribute("independentBookmarkButton")&&o.add("bookmark",x(this.discussion,"independentButton","Button Button--bookmark"))})),Object(a.extend)(j.a.prototype,"navItems",(function(o){if(r.a.session.user){var t=this.stickyParams();t.filter="bookmarks",o.add("bookmarks",B.a.component({href:r.a.route("index.filter",t),icon:"fas fa-bookmark"},r.a.translator.trans("clarkwinkelmann-bookmarks.forum.page.link")))}})),Object(a.extend)(j.a.prototype,"config",(function(o,t){t||"index.filter"===this.props.routeName&&"bookmarks"===m.route.param("filter")&&r.a.setTitle(r.a.translator.trans("clarkwinkelmann-bookmarks.forum.page.title"))})),Object(a.extend)(v.a.prototype,"requestParams",(function(o){"bookmarks"===this.props.params.filter&&(o.filter.q=(o.filter.q||"")+" is:bookmarked")}))}))}]);
//# sourceMappingURL=forum.js.map