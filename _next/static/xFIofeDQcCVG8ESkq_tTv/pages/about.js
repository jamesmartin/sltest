(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Juyh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n("q1tI"),o=n.n(r),i=n("YFqc"),s=n.n(i),a=o.a.createElement;function c(){return a("div",null,a(s.a,{href:"/",as:"".concat("/sltest","/")},a("a",null,"Home")),a("p",null,"About"))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),s=n("Nsbk"),a=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var l,p=u(n("q1tI")),h=n("QmWs"),v=n("g/15"),d=f(n("nOHt"));function y(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var w=new Map,m=window.IntersectionObserver,g={};function _(){return l||(m?l=new m((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var E=function(t){a(u,t);var e,f=(e=u,function(){var t,n=s(e);if(c()){var r=s(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function u(t){var e;return r(this,u),(e=f.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:y(t),as:e?y(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,a=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,t.preventDefault();var f=e.props.scroll;null==f&&(f=a.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),w.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}w.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),o=r.href,i=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var s=p.Children.only(e),a={ref:function(e){t.handleRef(e),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(e):"object"===typeof s.ref&&(s.ref.current=e))},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=i||o);var c=n("P5f7").rewriteUrlForNextExport;return a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=c(a.href)),p.default.cloneElement(s,a)}}]),u}(p.Component);e.default=E},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);