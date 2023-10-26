function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(t){if(t)setTimeout(function(){if(!document.body.hasAttribute("data-body-scroll-fix")){let t=window.pageYOffset||document.documentElement.scrollTop;document.body.setAttribute("data-body-scroll-fix",t),document.body.style.overflow="hidden",document.body.style.top="-"+t+"px",document.body.style.left="0",document.body.style.width="100%"}},15);else if(document.body.hasAttribute("data-body-scroll-fix")){let t=Number(document.body.getAttribute("data-body-scroll-fix"));document.body.removeAttribute("data-body-scroll-fix"),document.body.style.overflow="",document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.width="",window.scroll(0,t)}}function s(){let t=document.querySelector(".header__btn"),e=document.querySelector(".header__nav");if(window.innerWidth>1024||t.classList.contains("header__btn--inited")){s();return}function s(){i(!1),t.classList.remove("header__btn--active"),e.classList.remove("header__nav--active")}t.classList.add("header__btn--inited"),t.addEventListener("click",function(){e.classList.contains("header__nav--active")?s():(i(!0),t.classList.add("header__btn--active"),e.classList.add("header__nav--active"))})}/**
 * simplebar - v6.2.5
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */var r={};r=!!("undefined"!=typeof window&&window.document&&window.document.createElement);var n=/**
 * simplebar-core - v1.2.4
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 *//**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},o="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,a=o||l||Function("return this")(),c=function(){return a.Date.now()},h=/\s/,d=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(t){for(var e=t.length;e--&&h.test(t.charAt(e)););return e},u=/^\s+/,p=a.Symbol,f=Object.prototype,v=f.hasOwnProperty,b=f.toString,m=p?p.toStringTag:void 0,g=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(t){var e=v.call(t,m),i=t[m];try{t[m]=void 0;var s=!0}catch(t){}var r=b.call(t);return s&&(e?t[m]=i:delete t[m]),r},y=Object.prototype.toString,E=p?p.toStringTag:void 0,x=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(t){var e;return"symbol"==typeof t||null!=t&&"object"==typeof t&&"[object Symbol]"==(null==(e=t)?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?g(e):y.call(e))},w=0/0,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,S=/^0o[0-7]+$/i,A=parseInt,M=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(t){if("number"==typeof t)return t;if(x(t))return w;if(n(t)){var e,i="function"==typeof t.valueOf?t.valueOf():t;t=n(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=(e=t)?e.slice(0,d(e)+1).replace(u,""):e;var s=_.test(t);return s||S.test(t)?A(t.slice(2),s?2:8):O.test(t)?w:+t},k=Math.max,L=Math.min,W=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(t,e,i){var s,r,o,l,a,h,d=0,u=!1,p=!1,f=!0;if("function"!=typeof t)throw TypeError("Expected a function");function v(e){var i=s,n=r;return s=r=void 0,d=e,l=t.apply(n,i)}function b(t){var i=t-h,s=t-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===h||i>=e||i<0||p&&s>=o}function m(){var t,i,s,r=c();if(b(r))return g(r);// Restart the timer.
a=setTimeout(m,(t=r-h,i=r-d,s=e-t,p?L(s,o-i):s))}function g(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(a=void 0,f&&s)?v(t):(s=r=void 0,l))}function y(){var t,i=c(),n=b(i);if(s=arguments,r=this,h=i,n){if(void 0===a)return(// Reset any `maxWait` timer.
d=t=h,// Start the timer for the trailing edge.
a=setTimeout(m,e),u?v(t):l);if(p)return(// Handle invocations in a tight loop.
clearTimeout(a),a=setTimeout(m,e),v(h))}return void 0===a&&(a=setTimeout(m,e)),l}return e=M(e)||0,n(i)&&(u=!!i.leading,o=(p="maxWait"in i)?k(M(i.maxWait)||0,e):o,f="trailing"in i?!!i.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),d=0,s=h=r=a=void 0},y.flush=function(){return void 0===a?l:g(c())},y},C=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(t,e,i){var s=!0,r=!0;if("function"!=typeof t)throw TypeError("Expected a function");return n(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),W(t,e,{leading:s,maxWait:e,trailing:r})},z=function(){return(z=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},N=null,T=null;function R(){if(null===N){if("undefined"==typeof document)return N=0;var t=document.body,e=document.createElement("div");e.classList.add("simplebar-hide-scrollbar"),t.appendChild(e);var i=e.getBoundingClientRect().right;t.removeChild(e),N=i}return N}function D(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function V(t){return t&&t.ownerDocument?t.ownerDocument:document}/*@__PURE__*/t(r)&&window.addEventListener("resize",function(){T!==window.devicePixelRatio&&(T=window.devicePixelRatio,N=null)});// Helper function to retrieve options from element attributes
var j=function(t){return Array.prototype.reduce.call(t,function(t,e){var i=e.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,function(t,e){return e.toUpperCase()});switch(e.value){case"true":case void 0:t[s]=!0;break;case"false":t[s]=!1;break;default:t[s]=e.value}}return t},{})};function q(t,e){var i;t&&(i=t.classList).add.apply(i,e.split(" "))}function H(t,e){t&&e.split(" ").forEach(function(e){t.classList.remove(e)})}function B(t){return".".concat(t.split(" ").join("."))}var P=/*#__PURE__*/Object.freeze({__proto__:null,getElementWindow:D,getElementDocument:V,getOptions:j,addClasses:q,removeClasses:H,classNamesToQuery:B}),Y=/** @class */function(){function e(t,i){void 0===i&&(i={});var s=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},/**
         * On scroll event handling
         */this.onScroll=function(){var t=D(s.el);s.scrollXTicking||(t.requestAnimationFrame(s.scrollX),s.scrollXTicking=!0),s.scrollYTicking||(t.requestAnimationFrame(s.scrollY),s.scrollYTicking=!0),s.isScrolling||(s.isScrolling=!0,q(s.el,s.classNames.scrolling)),s.showScrollbar("x"),s.showScrollbar("y"),s.onStopScrolling()},this.scrollX=function(){s.axis.x.isOverflowing&&s.positionScrollbar("x"),s.scrollXTicking=!1},this.scrollY=function(){s.axis.y.isOverflowing&&s.positionScrollbar("y"),s.scrollYTicking=!1},this._onStopScrolling=function(){H(s.el,s.classNames.scrolling),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isScrolling=!1},this.onMouseEnter=function(){s.isMouseEntering||(q(s.el,s.classNames.mouseEntered),s.showScrollbar("x"),s.showScrollbar("y"),s.isMouseEntering=!0),s.onMouseEntered()},this._onMouseEntered=function(){H(s.el,s.classNames.mouseEntered),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isMouseEntering=!1},this._onMouseMove=function(t){s.mouseX=t.clientX,s.mouseY=t.clientY,(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseMoveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseMoveForAxis("y")},this.onMouseLeave=function(){s.onMouseMove.cancel(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseLeaveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseLeaveForAxis("y"),s.mouseX=-1,s.mouseY=-1},this._onWindowResize=function(){// Recalculate scrollbarWidth in case it's a zoom
s.scrollbarWidth=s.getScrollbarWidth(),s.hideNativeScrollbar()},this.onPointerEvent=function(t){var e,i;s.axis.x.track.el&&s.axis.y.track.el&&s.axis.x.scrollbar.el&&s.axis.y.scrollbar.el&&(s.axis.x.track.rect=s.axis.x.track.el.getBoundingClientRect(),s.axis.y.track.rect=s.axis.y.track.el.getBoundingClientRect(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&(e=s.isWithinBounds(s.axis.x.track.rect)),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&(i=s.isWithinBounds(s.axis.y.track.rect)),(e||i)&&(// Prevent event leaking
t.stopPropagation(),"pointerdown"===t.type&&"touch"!==t.pointerType&&(e&&(s.axis.x.scrollbar.rect=s.axis.x.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.x.scrollbar.rect)?s.onDragStart(t,"x"):s.onTrackClick(t,"x")),i&&(s.axis.y.scrollbar.rect=s.axis.y.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.y.scrollbar.rect)?s.onDragStart(t,"y"):s.onTrackClick(t,"y")))))},/**
         * Drag scrollbar handle
         */this.drag=function(t){if(s.draggedAxis&&s.contentWrapperEl){var i,r,n,o,l,a,c,h,d,u,p,f=s.axis[s.draggedAxis].track,v=null!==(r=null===(i=f.rect)||void 0===i?void 0:i[s.axis[s.draggedAxis].sizeAttr])&&void 0!==r?r:0,b=s.axis[s.draggedAxis].scrollbar,m=null!==(o=null===(n=s.contentWrapperEl)||void 0===n?void 0:n[s.axis[s.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,g=parseInt(null!==(a=null===(l=s.elStyles)||void 0===l?void 0:l[s.axis[s.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);t.preventDefault(),t.stopPropagation();// Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).
var y=("y"===s.draggedAxis?t.pageY:t.pageX)-(null!==(h=null===(c=f.rect)||void 0===c?void 0:c[s.axis[s.draggedAxis].offsetAttr])&&void 0!==h?h:0)-s.axis[s.draggedAxis].dragOffset,E=(y="x"===s.draggedAxis&&s.isRtl?(null!==(u=null===(d=f.rect)||void 0===d?void 0:d[s.axis[s.draggedAxis].sizeAttr])&&void 0!==u?u:0)-b.size-y:y)/(v-b.size)*(m-g);"x"===s.draggedAxis&&s.isRtl&&(E=(null===(p=e.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-E:E),s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr]=E}},/**
         * End scroll handle drag
         */this.onEndDrag=function(t){var e=V(s.el),i=D(s.el);t.preventDefault(),t.stopPropagation(),H(s.el,s.classNames.dragging),e.removeEventListener("mousemove",s.drag,!0),e.removeEventListener("mouseup",s.onEndDrag,!0),s.removePreventClickId=i.setTimeout(function(){// Remove these asynchronously so we still suppress click events
// generated simultaneously with mouseup.
e.removeEventListener("click",s.preventClick,!0),e.removeEventListener("dblclick",s.preventClick,!0),s.removePreventClickId=null})},/**
         * Handler to ignore click events during drag
         */this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=t,this.options=z(z({},e.defaultOptions),i),this.classNames=z(z({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=C(this._onMouseMove,64),this.onWindowResize=W(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=W(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=W(this._onMouseEntered,this.stopScrollDelay),this.init()}return(/**
     * Helper to fix browsers inconsistency on RTL:
     *  - Firefox inverts the scrollbar initial position
     *  - IE11 inverts both scrollbar position and scrolling offset
     * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
     */e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,s=null==i?void 0:i.firstElementChild;if(!s)return null;document.body.appendChild(i),i.scrollLeft=0;var r=e.getOffset(i),n=e.getOffset(s);i.scrollLeft=-999;var o=e.getOffset(s);return document.body.removeChild(i),e.rtlHelpers={// determines if the scrolling is responding with negative values
isScrollOriginAtZero:r.left!==n.left,// determines if the origin scrollbar position is inverted or not (positioned on left or right)
isScrollingToNegative:n.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){// Try/catch for FF 56 throwing on undefined computedStyles
try{// Detect browsers supporting CSS scrollbar styling and do not calculate
if(this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style)return 0;return R()}catch(t){return R()}},e.getOffset=function(t){var e=t.getBoundingClientRect(),i=V(t),s=D(t);return{top:e.top+(s.pageYOffset||i.documentElement.scrollTop),left:e.left+(s.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){// We stop here on server-side
/*@__PURE__*/t(r)&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var t,e;// assume that element has his DOM already initiated
this.wrapperEl=this.el.querySelector(B(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(B(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(B(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(B(this.classNames.offset)),this.maskEl=this.el.querySelector(B(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,B(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(B(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(B(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(B(this.classNames.track)).concat(B(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(B(this.classNames.track)).concat(B(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(t=this.axis.x.track.el)||void 0===t?void 0:t.querySelector(B(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(e=this.axis.y.track.el)||void 0===e?void 0:e.querySelector(B(this.classNames.scrollbar)))||null,this.options.autoHide||(q(this.axis.x.scrollbar.el,this.classNames.visible),q(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var t,e=this,i=D(this.el);if(// Event listeners
this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(t=this.contentWrapperEl)||void 0===t||t.addEventListener("scroll",this.onScroll),// Browser zoom triggers a window resize
i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){// Hack for https://github.com/WICG/ResizeObserver/issues/38
var s=!1,r=i.ResizeObserver||ResizeObserver;this.resizeObserver=new r(function(){s&&i.requestAnimationFrame(function(){e.recalculate()})}),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame(function(){s=!0})}// This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.
this.mutationObserver=new i.MutationObserver(function(){i.requestAnimationFrame(function(){e.recalculate()})}),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var t=D(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||e>0,r=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var l=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",// Determine placeholder size
this.placeholderEl.style.width=s?"".concat(e||a,"px"):"auto",this.placeholderEl.style.height="".concat(l,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==e&&a>e,this.axis.y.isOverflowing=l>c,// Set isOverflowing to false if user explicitely set hidden overflow
this.axis.x.isOverflowing="hidden"!==n&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();// Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)
var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,d=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>r-d,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&l>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},/**
     * Calculate scrollbar size
     */e.prototype.getScrollbarSize=function(t){if(void 0===t&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var e,i,s,r=this.contentEl[this.axis[t].scrollSizeAttr],n=null!==(i=null===(e=this.axis[t].track.el)||void 0===e?void 0:e[this.axis[t].offsetSizeAttr])&&void 0!==i?i:0;return(// Calculate new height/position of drag handle.
s=Math.max(~~(n/r*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s)},e.prototype.positionScrollbar=function(t){void 0===t&&(t="y");var i,s,r,n=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&n.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],l=(null===(i=this.axis[t].track.el)||void 0===i?void 0:i[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c="x"===t&&this.isRtl&&(null===(s=e.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===t&&this.isRtl&&(c=(null===(r=e.getRtlHelpers())||void 0===r?void 0:r.isScrollingToNegative)?c:-c);var h=c/(o-a),d=~~((l-n.size)*h);d="x"===t&&this.isRtl?-d+(l-n.size):d,n.el.style.transform="x"===t?"translate3d(".concat(d,"px, 0, 0)"):"translate3d(0, ".concat(d,"px, 0)")}},e.prototype.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,i=this.axis[t].scrollbar.el;e&&i&&this.contentWrapperEl&&(this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(t){void 0===t&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(q(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(t){void 0===t&&(t="y"),this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(H(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(t){void 0===t&&(t="y");var e=this.axis[t];e.track.el&&e.scrollbar.el&&(e.track.rect=e.track.el.getBoundingClientRect(),e.scrollbar.rect=e.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(e.track.rect)?(this.showScrollbar(t),q(e.track.el,this.classNames.hover),this.isWithinBounds(e.scrollbar.rect)?q(e.scrollbar.el,this.classNames.hover):H(e.scrollbar.el,this.classNames.hover)):(H(e.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},e.prototype.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),H(this.axis[t].track.el,this.classNames.hover),H(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},/**
     * on scrollbar handle drag movement starts
     */e.prototype.onDragStart=function(t,e){void 0===e&&(e="y");var i,s=V(this.el),r=D(this.el),n=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-((null===(i=n.rect)||void 0===i?void 0:i[this.axis[e].offsetAttr])||0),this.draggedAxis=e,q(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(t,e){var i,s,r,n,o=this;void 0===e&&(e="y");var l=this.axis[e];if(this.options.clickOnTrack&&l.scrollbar.el&&this.contentWrapperEl){// Preventing the event's default to trigger click underneath
t.preventDefault();var a=D(this.el);this.axis[e].scrollbar.rect=l.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[e].scrollbar.rect)||void 0===i?void 0:i[this.axis[e].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(n=null===(r=this.elStyles)||void 0===r?void 0:r[this.axis[e].sizeAttr])&&void 0!==n?n:"0px",10),d=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],u=("y"===e?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===u?d-h:d+h,f=function(){o.contentWrapperEl&&(-1===u?d>p&&(d-=40,o.contentWrapperEl[o.axis[e].scrollOffsetAttr]=d,a.requestAnimationFrame(f)):d<p&&(d+=40,o.contentWrapperEl[o.axis[e].scrollOffsetAttr]=d,a.requestAnimationFrame(f)))};f()}},/**
     * Getter for content element
     */e.prototype.getContentElement=function(){return this.contentEl},/**
     * Getter for original scrolling element
     */e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var t=D(this.el);// Event listeners
this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),// Cancel all debounced functions
this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},/**
     * Remove all listeners from DOM nodes
     */e.prototype.unMount=function(){this.removeListeners()},/**
     * Check if mouse is within bounds
     */e.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},/**
     * Find element children matches query
     */e.prototype.findChild=function(t,e){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(t){return i.call(t,e)})[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},/**
     * Static functions
     */e.getOptions=j,e.helpers=P,e)}(),F=function(t,e){return(F=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},X=Y.helpers,I=X.getOptions,G=X.addClasses,Z=/** @class */function(t){function e(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var r=t.apply(this,i)||this;return(// // Save a reference to the instance, so we know this DOM node has already been instancied
e.instances.set(i[0],r),r)}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}F(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(t){"init"===t.getAttribute("data-simplebar")||e.instances.has(t)||new e(t,I(t.attributes))})},e.removeObserver=function(){var t;null===(t=e.globalObserver)||void 0===t||t.disconnect()},e.prototype.initDOM=function(){var t,e,i,s=this;// make sure this element doesn't have the elements yet
if(!Array.prototype.filter.call(this.el.children,function(t){return t.classList.contains(s.classNames.wrapper)}).length){for(// Prepare DOM
this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),G(this.wrapperEl,this.classNames.wrapper),G(this.contentWrapperEl,this.classNames.contentWrapper),G(this.offsetEl,this.classNames.offset),G(this.maskEl,this.classNames.mask),G(this.contentEl,this.classNames.contentEl),G(this.placeholderEl,this.classNames.placeholder),G(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),G(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("tabindex","0"),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var r=document.createElement("div"),n=document.createElement("div");G(r,this.classNames.track),G(n,this.classNames.scrollbar),r.appendChild(n),this.axis.x.track.el=r.cloneNode(!0),G(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=r.cloneNode(!0),G(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}Y.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},e.prototype.unMount=function(){Y.prototype.unMount.call(this),e.instances.delete(this.el)},e.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(// Mutation observer to observe dynamically added elements
this.globalObserver=new MutationObserver(e.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"!==document.readyState&&// @ts-ignore: IE specific
("loading"===document.readyState||document.documentElement.doScroll)?(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements)):window.setTimeout(this.initDOMLoadedElements)},e.handleMutations=function(t){t.forEach(function(t){t.addedNodes.forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!e.instances.has(t)&&document.documentElement.contains(t)&&new e(t,I(t.attributes)):t.querySelectorAll("[data-simplebar]").forEach(function(t){"init"!==t.getAttribute("data-simplebar")&&!e.instances.has(t)&&document.documentElement.contains(t)&&new e(t,I(t.attributes))}))}),t.removedNodes.forEach(function(t){1===t.nodeType&&("init"===t.getAttribute("data-simplebar")?e.instances.has(t)&&!document.documentElement.contains(t)&&e.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),function(t){e.instances.has(t)&&!document.documentElement.contains(t)&&e.instances.get(t).unMount()}))})})},e.instances=new WeakMap,e}(Y);/*@__PURE__*/t(r)&&Z.initHtmlApi();/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 *//* eslint-disable require-jsdoc, valid-jsdoc */var $=function(){if("undefined"!=typeof Map)return Map;/**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */function t(t,e){var i=-1;return t.some(function(t,s){return t[0]===e&&(i=s,!0)}),i}return /** @class */function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{/**
             * @returns {boolean}
             */get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),/**
         * @param {*} key
         * @returns {*}
         */e.prototype.get=function(e){var i=t(this.__entries__,e),s=this.__entries__[i];return s&&s[1]},/**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */e.prototype.set=function(e,i){var s=t(this.__entries__,e);~s?this.__entries__[s][1]=i:this.__entries__.push([e,i])},/**
         * @param {*} key
         * @returns {void}
         */e.prototype.delete=function(e){var i=this.__entries__,s=t(i,e);~s&&i.splice(s,1)},/**
         * @param {*} key
         * @returns {void}
         */e.prototype.has=function(e){return!!~t(this.__entries__,e)},/**
         * @returns {void}
         */e.prototype.clear=function(){this.__entries__.splice(0)},/**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,s=this.__entries__;i<s.length;i++){var r=s[i];t.call(e,r[1],r[0])}},e}()}(),U="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Q=void 0!==e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),J="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Q):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},K=["top","right","bottom","left","width","height","size","weight"],tt="undefined"!=typeof MutationObserver,te=/** @class */function(){/**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */function t(){/**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */this.connected_=!1,/**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */this.mutationEventsAdded_=!1,/**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */this.mutationsObserver_=null,/**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */function(t,e){var i=!1,s=!1,r=0;/**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */function n(){i&&(i=!1,t()),s&&l()}/**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */function o(){J(n)}/**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */function l(){var t=Date.now();if(i){// Reject immediately following calls.
if(t-r<2)return;// Schedule new call to be in invoked when the pending one is resolved.
// This is important for "transitions" which never actually start
// immediately so there is a chance that we might miss one if change
// happens amids the pending invocation.
s=!0}else i=!0,s=!1,setTimeout(o,20);r=t}return l}(this.refresh.bind(this),0)}return(/**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},/**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},/**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */t.prototype.refresh=function(){// Continue running updates if changes have been detected as there might
// be future ones caused by CSS transitions.
this.updateObservers_()&&this.refresh()},/**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */t.prototype.updateObservers_=function(){// Collect observers that have active observations.
var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return(// Deliver notifications in a separate cycle in order to avoid any
// collisions between observers, e.g. when multiple instances of
// ResizeObserver are tracking the same element and the callback of one
// of them changes content dimensions of the observed target. Sometimes
// this may result in notifications being blocked for the rest of observers.
t.forEach(function(t){return t.broadcastActive()}),t.length>0)},/**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */t.prototype.connect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already added.
U&&!this.connected_&&(// Subscription to the "Transitionend" event is used as a workaround for
// delayed transitions. This way it's possible to capture at least the
// final state of an element.
document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),tt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},/**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */t.prototype.disconnect_=function(){// Do nothing if running in a non-browser environment or if listeners
// have been already removed.
U&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},/**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;K.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},/**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},/**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */t.instance_=null,t)}(),ti=function(t,e){for(var i=0,s=Object.keys(e);i<s.length;i++){var r=s[i];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},ts=function(t){// Return the local global object if it's not possible extract one from
// provided element.
return t&&t.ownerDocument&&t.ownerDocument.defaultView||Q},tr=ta(0,0,0,0);/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */function tn(t){return parseFloat(t)||0}/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */function to(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+tn(t["border-"+i+"-width"])},0)}/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */var tl=// Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
// interface.
"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof ts(t).SVGGraphicsElement}:function(t){return t instanceof ts(t).SVGElement&&"function"==typeof t.getBBox};/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */function ta(t,e,i,s){return{x:t,y:e,width:i,height:s}}/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */var tc=/** @class */function(){/**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */function t(t){/**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */this.broadcastWidth=0,/**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */this.broadcastHeight=0,/**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */this.contentRect_=ta(0,0,0,0),this.target=t}return(/**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */t.prototype.isActive=function(){var t=/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */function(t){if(!U)return tr;if(tl(t)){var e;return ta(0,0,(e=t.getBBox()).width,e.height)}return(/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */function(t){// Client width & height properties can't be
// used exclusively as they provide rounded values.
var e=t.clientWidth,i=t.clientHeight;// By this condition we can catch all non-replaced inline, hidden and
// detached elements. Though elements with width & height properties less
// than 0.5 will be discarded as well.
//
// Without it we would need to implement separate methods for each of
// those cases and it's not possible to perform a precise and performance
// effective test for hidden elements. E.g. even jQuery's ':visible' filter
// gives wrong results for elements with width & height less than 0.5.
if(!e&&!i)return tr;var s=ts(t).getComputedStyle(t),r=/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */function(t){for(var e={},i=0,s=["top","right","bottom","left"];i<s.length;i++){var r=s[i],n=t["padding-"+r];e[r]=tn(n)}return e}(s),n=r.left+r.right,o=r.top+r.bottom,l=tn(s.width),a=tn(s.height);// Following steps can't be applied to the document's root element as its
// client[Width/Height] properties represent viewport area of the window.
// Besides, it's as well not necessary as the <html> itself neither has
// rendered scroll bars nor it can be clipped.
if("border-box"===s.boxSizing&&(Math.round(l+n)!==e&&(l-=to(s,"left","right")+n),Math.round(a+o)!==i&&(a-=to(s,"top","bottom")+o)),t!==ts(t).document.documentElement){// In some browsers (only in Firefox, actually) CSS width & height
// include scroll bars size which can be removed at this step as scroll
// bars are the only difference between rounded dimensions + paddings
// and "client" properties, though that is not always true in Chrome.
var c=Math.round(l+n)-e,h=Math.round(a+o)-i;1!==Math.abs(c)&&(l-=c),1!==Math.abs(h)&&(a-=h)}return ta(r.left,r.top,l,a)}(t))}(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},/**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t)}(),th=/**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */function(t,e){var i,s,r,n,o,l=(i=e.x,s=e.y,r=e.width,n=e.height,// Rectangle's properties are not writable and non-enumerable.
ti(o=Object.create(("undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype),{x:i,y:s,width:r,height:n,top:s,right:i+r,bottom:n+s,left:i}),o);// According to the specification following properties are not writable
// and are also not enumerable in the native implementation.
//
// Property accessors are not being used as they'd require to define a
// private WeakMap storage which may cause memory leaks in browsers that
// don't support this type of collections.
ti(this,{target:t,contentRect:l})},td=/** @class */function(){/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */function t(t,e,i){if(/**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */this.activeObservations_=[],/**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */this.observations_=new $,"function"!=typeof t)throw TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return(/**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */t.prototype.observe=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ts(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is already being observed.
e.has(t)||(e.set(t,new tc(t)),this.controller_.addObserver(this),// Force the update of observations.
this.controller_.refresh())}},/**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */t.prototype.unobserve=function(t){if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");// Do nothing if current environment doesn't have the Element interface.
if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof ts(t).Element))throw TypeError('parameter 1 is not of type "Element".');var e=this.observations_;// Do nothing if element is not being observed.
e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},/**
     * Stops observing all elements.
     *
     * @returns {void}
     */t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},/**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},/**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */t.prototype.broadcastActive=function(){// Do nothing if observer doesn't have active observations.
if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new th(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},/**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */t.prototype.clearActive=function(){this.activeObservations_.splice(0)},/**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */t.prototype.hasActive=function(){return this.activeObservations_.length>0},t)}(),tu="undefined"!=typeof WeakMap?new WeakMap:new $,tp=/**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */function t(e){if(!(this instanceof t))throw TypeError("Cannot call a class as a function.");if(!arguments.length)throw TypeError("1 argument required, but only 0 present.");var i=new td(e,te.getInstance(),this);tu.set(this,i)};// Expose public methods of ResizeObserver.
["observe","unobserve","disconnect"].forEach(function(t){tp.prototype[t]=function(){var e;return(e=tu.get(this))[t].apply(e,arguments)}});var tf=// Export existing implementation if available.
void 0!==Q.ResizeObserver?Q.ResizeObserver:tp;window.ResizeObserver=tf;class tv{constructor(t){this.obj=t,this.select=this.obj.querySelector("select"),this.options=t.querySelectorAll("option"),this.build()}build(){this.head=document.createElement("div"),this.value=document.createElement("span"),this.arrow=document.createElement("div"),this.list=document.createElement("div"),this.head.classList.add("select__head"),this.value.classList.add("select__value"),this.arrow.classList.add("select__arrow"),this.list.classList.add("select__list"),this.list.setAttribute("data-simplebar",!0),this.options.forEach(t=>{let e=document.createElement("div");e.classList.add("select__option"),e.textContent=t.textContent,e.setAttribute("data-value",t.textContent),t.hidden||t.default?this.value.textContent=t.textContent:this.list.append(e),e.addEventListener("click",()=>{this.setValue(e)})}),this.arrow.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M14.9337 8.51079C14.9337 8.43936 14.898 8.359 14.8445 8.30543L14.398 7.859C14.3445 7.80543 14.2641 7.76971 14.1927 7.76971C14.1212 7.76971 14.0409 7.80543 13.9873 7.859L10.4784 11.3679L6.96946 7.859C6.91589 7.80543 6.83553 7.76971 6.7641 7.76971C6.68375 7.76971 6.61232 7.80543 6.55875 7.859L6.11232 8.30543C6.05875 8.359 6.02303 8.43936 6.02303 8.51079C6.02303 8.58221 6.05875 8.66257 6.11232 8.71614L10.273 12.8769C10.3266 12.9304 10.407 12.9661 10.4784 12.9661C10.5498 12.9661 10.6302 12.9304 10.6837 12.8769L14.8445 8.71614C14.898 8.66257 14.9337 8.58221 14.9337 8.51079Z" fill="black"/></svg>',this.head.append(this.value,this.arrow),this.obj.append(this.head,this.list),this.setListeners()}setListeners(){document.addEventListener("click",t=>{t.target!==this.head?this.hide():this.toggle()})}toggle(){this.obj.classList.contains("select__block--active")?this.hide():this.show()}show(){this.obj.classList.add("select__block--active")}hide(){this.obj.classList.remove("select__block--active")}setValue(t){document.querySelectorAll(".select__option").forEach(t=>{t.classList.remove("select__option--active")});let e=t.getAttribute("data-value");this.value.textContent=e,this.select.value=e,t.classList.add("select__option--active"),this.hide()}}document.addEventListener("DOMContentLoaded",function(){!function(){let t=document.querySelector('[type="range"]'),e=document.querySelector(".form__value");function i(){e.innerText=t.value+" %"}t.addEventListener("input",i),i()}(),function(){let t=document.querySelector('[type="file"'),e=t.closest(".form__file-upload"),i=e.querySelector("span");t.addEventListener("change",function(){i.innerText="Загрузка...",e.style.pointerEvents="none",fetch(t.files[0]).then(t=>{t.ok&&(i.innerText="Загружено")}).catch(t=>{console.log(t),i.innerText="Ошибка!"}).then(()=>{e.style.pointerEvents="all"})})}();let t=document.querySelectorAll(".select__block");t&&t.forEach(t=>{new tv(t)}),window.addEventListener("load",s),window.addEventListener("resize",s)});//# sourceMappingURL=index.f1908fa5.js.map

//# sourceMappingURL=index.f1908fa5.js.map
