(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{25:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i,s,u){if(!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,u],p=0;(a=new Error(e.replace(/%s/g,function(){return c[p++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},311:function(t,e,n){__NEXT_REGISTER_PAGE("/blog",function(){return t.exports=n(312),{page:t.exports.default}})},312:function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r),i=n(1),s=n.n(i),u=(n(2),n(80)),a=n(18);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){return(p="function"==typeof Symbol&&"symbol"===c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}function f(t,e,n,r,o,i,s){try{var u=t[i](s),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=[{slug:"hello-world",title:"Hello world"},{slug:"another-blog-post",title:"Another blog post"}],v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,h(e).apply(this,arguments))}var n,r,i,u,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,s.a.Component),n=e,r=[{key:"componentDidMount",value:function(){console.log("!!"),console.log(this.props.state)}},{key:"render",value:function(){var t=this.props.post;return t?s.a.createElement("div",null,s.a.createElement(m,null,"asdf"),s.a.createElement(m,null,t.title)):s.a.createElement("div",null,s.a.createElement(m,null,"Post not found"))}}],i=[{key:"getInitialProps",value:(u=o.a.mark(function t(e){var n,r,i,s,u,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.ctx,r=n.query,i=n.res,s=n.store,u=y.find(function(t){return t.slug===r.slug}),a=s.getState(),!u&&i&&(i.statusCode=404),t.next=6,new Promise(function(t){setTimeout(t,700)});case 6:return t.abrupt("return",{post:u,state:a});case 7:case"end":return t.stop()}},t,this)}),a=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=u.apply(t,e);function i(t){f(o,n,r,i,s,"next",t)}function s(t){f(o,n,r,i,s,"throw",t)}i(void 0)})},function(t){return a.apply(this,arguments)})}],r&&l(n.prototype,r),i&&l(n,i),e}(),m=a.a.h1.withConfig({displayName:"blog__H1",componentId:"sc-12yh9qz-0"})(["color:#f00;"]);e.default=Object(u.b)()(v)},40:function(t,e,n){"use strict";(function(t,r){var o,i=n(77);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var s=Object(i.a)(o);e.a=s}).call(this,n(39),n(90)(t))},43:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return p}),n.d(e,"a",function(){return f});var r=n(40),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function u(t){if("object"!==(void 0===t?"undefined":i(t))||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,n){var s;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,p=e,f=[],l=f,d=!1;function h(){l===f&&(l=f.slice())}function b(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return p}function y(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return h(),l.push(t),function(){if(e){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,h();var n=l.indexOf(t);l.splice(n,1)}}}function v(t){if(!u(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,p=c(p,t)}finally{d=!1}for(var e=f=l,n=0;n<e.length;n++){(0,e[n])()}return t}return v({type:o.INIT}),(s={dispatch:v,subscribe:y,getState:b,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,v({type:o.REPLACE})}})[r.a]=function(){var t,e=y;return(t={subscribe:function(t){if("object"!==(void 0===t?"undefined":i(t))||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(b())}return n(),{unsubscribe:e(n)}}})[r.a]=function(){return this},t},s}function c(t,e){return function(){return e(t.apply(this,arguments))}}function p(t,e){if("function"==typeof t)return c(t,e);if("object"!==(void 0===t?"undefined":i(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":void 0===t?"undefined":i(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},o=0;o<n.length;o++){var s=n[o],u=t[s];"function"==typeof u&&(r[s]=c(u,e))}return r}function f(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=t.apply(void 0,r),u=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return u.apply(void 0,arguments)}},c=e.map(function(t){return t(a)});return u=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}.apply(void 0,c)(i.dispatch),s({},i,{dispatch:u})}}}},76:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(39))},77:function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},80:function(t,e,n){"use strict";var r=n(1),o=n(2),i=n.n(o),s=i.a.shape({trySubscribe:i.a.func.isRequired,tryUnsubscribe:i.a.func.isRequired,notifyNestedSubs:i.a.func.isRequired,isSubscribed:i.a.func.isRequired}),u=i.a.shape({subscribe:i.a.func.isRequired,dispatch:i.a.func.isRequired,getState:i.a.func.isRequired});var a=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||e+"Subscription",o=function(t){function o(n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n,r));return i[e]=n.store,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,t),o.prototype.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:u.isRequired,children:i.a.element.isRequired},o.childContextTypes=((t={})[e]=u.isRequired,t[n]=s,t),o}(),c=n(22),p=n.n(c),f=n(25),l=n.n(f);var d=null,h={notify:function(){}};var b=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.store=e,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=h}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){var t,e;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(t=[],e=[],{clear:function(){e=d,t=d},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==d&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}))},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=h)},t}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var v=0,m={};function w(){}function g(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,a=void 0===i?function(t){return"ConnectAdvanced("+t+")"}:i,c=o.methodName,f=void 0===c?"connectAdvanced":c,d=o.renderCountProp,h=void 0===d?void 0:d,g=o.shouldHandleStateChanges,O=void 0===g||g,S=o.storeKey,P=void 0===S?"store":S,E=o.withRef,j=void 0!==E&&E,C=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),x=P+"Subscription",T=v++,N=((e={})[P]=u,e[x]=s,e),q=((n={})[x]=s,n);return function(e){l()("function"==typeof e,"You must pass a component to the function returned by "+f+". Instead received "+JSON.stringify(e));var n=e.displayName||e.name||"Component",o=a(n),i=y({},C,{getDisplayName:a,methodName:f,renderCountProp:h,shouldHandleStateChanges:O,storeKey:P,withRef:j,displayName:o,wrappedComponentName:n,WrappedComponent:e}),s=function(n){function s(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,n.call(this,t,e));return r.version=T,r.state={},r.renderCount=0,r.store=t[P]||e[P],r.propsMode=Boolean(t[P]),r.setWrappedInstance=r.setWrappedInstance.bind(r),l()(r.store,'Could not find "'+P+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+P+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,n),s.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return(t={})[x]=e||this.context[x],t},s.prototype.componentDidMount=function(){O&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},s.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},s.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},s.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=w,this.store=null,this.selector.run=w,this.selector.shouldComponentUpdate=!1},s.prototype.getWrappedInstance=function(){return l()(j,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+f+"() call."),this.wrappedInstance},s.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},s.prototype.initSelector=function(){var e=t(this.store.dispatch,i);this.selector=function(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}(e,this.store),this.selector.run(this.props)},s.prototype.initSubscription=function(){if(O){var t=(this.propsMode?this.props:this.context)[x];this.subscription=new b(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},s.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(m)):this.notifyNestedSubs()},s.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},s.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},s.prototype.addExtraProps=function(t){if(!(j||h||this.propsMode&&this.subscription))return t;var e=y({},t);return j&&(e.ref=this.setWrappedInstance),h&&(e[h]=this.renderCount++),this.propsMode&&this.subscription&&(e[x]=this.subscription),e},s.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return Object(r.createElement)(e,this.addExtraProps(t.props))},s}(r.Component);return s.WrappedComponent=e,s.displayName=o,s.childContextTypes=q,s.contextTypes=N,s.propTypes=N,p()(s,e)}}var O=Object.prototype.hasOwnProperty;function S(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function P(t,e){if(S(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!O.call(e,n[o])||!S(t[n[o]],e[n[o]]))return!1;return!0}var E=n(43),j=n(76),C="object"==typeof self&&self&&self.Object===Object&&self,x=(j.a||C||Function("return this")()).Symbol,T=Object.prototype;T.hasOwnProperty,T.toString,x&&x.toStringTag;Object.prototype.toString;x&&x.toStringTag;Object.getPrototypeOf,Object;var N=Function.prototype,q=Object.prototype,R=N.toString;q.hasOwnProperty,R.call(Object);function M(t){return function(e,n){var r=t(e,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function _(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function I(t,e){return function(e,n){n.displayName;var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=_(t);var o=r(e,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=_(o),o=r(e,n)),o},r}}var U=[function(t){return"function"==typeof t?I(t):void 0},function(t){return t?void 0:M(function(t){return{dispatch:t}})},function(t){return t&&"object"==typeof t?M(function(e){return Object(E.b)(t,e)}):void 0}];var D=[function(t){return"function"==typeof t?I(t):void 0},function(t){return t?void 0:M(function(){return{}})}],A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function k(t,e,n){return A({},n,t,e)}var W=[function(t){return"function"==typeof t?function(t){return function(e,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,i=!1,s=void 0;return function(e,n,u){var a=t(e,n,u);return i?r&&o(a,s)||(s=a):(i=!0,s=a),s}}}(t):void 0},function(t){return t?void 0:function(){return k}}];function H(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function F(t,e,n,r,o){var i=o.areStatesEqual,s=o.areOwnPropsEqual,u=o.areStatePropsEqual,a=!1,c=void 0,p=void 0,f=void 0,l=void 0,d=void 0;function h(o,a){var h,b,y=!s(a,p),v=!i(o,c);return c=o,p=a,y&&v?(f=t(c,p),e.dependsOnOwnProps&&(l=e(r,p)),d=n(f,l,p)):y?(t.dependsOnOwnProps&&(f=t(c,p)),e.dependsOnOwnProps&&(l=e(r,p)),d=n(f,l,p)):v?(h=t(c,p),b=!u(h,f),f=h,b&&(d=n(f,l,p)),d):d}return function(o,i){return a?h(o,i):(f=t(c=o,p=i),l=e(r,p),d=n(f,l,p),a=!0,d)}}function B(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(t,i),u=r(t,i),a=o(t,i);return(i.pure?F:H)(s,u,a,t,i)}var Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function J(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function K(t,e){return t===e}var L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?g:e,r=t.mapStateToPropsFactories,o=void 0===r?D:r,i=t.mapDispatchToPropsFactories,s=void 0===i?U:i,u=t.mergePropsFactories,a=void 0===u?W:u,c=t.selectorFactory,p=void 0===c?B:c;return function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=i.pure,c=void 0===u||u,f=i.areStatesEqual,l=void 0===f?K:f,d=i.areOwnPropsEqual,h=void 0===d?P:d,b=i.areStatePropsEqual,y=void 0===b?P:b,v=i.areMergedPropsEqual,m=void 0===v?P:v,w=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=J(t,o,"mapStateToProps"),O=J(e,s,"mapDispatchToProps"),S=J(r,a,"mergeProps");return n(p,Y({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:g,initMapDispatchToProps:O,initMergeProps:S,pure:c,areStatesEqual:l,areOwnPropsEqual:h,areStatePropsEqual:y,areMergedPropsEqual:m},w))}}();n.d(e,"a",function(){return a}),n.d(e,"b",function(){return L})}},[[311,0,1]]]);