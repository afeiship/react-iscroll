!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("classnames"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","react","react-dom"],e):"object"==typeof exports?exports.ReactIscroll=e(require("classnames"),require("react"),require("react-dom")):t.ReactIscroll=e(t.classnames,t.react,t["react-dom"])}(this,function(t,e,l){return function(t){function e(o){if(l[o])return l[o].exports;var r=l[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var l={};return e.m=t,e.c=l,e.p="/",e(0)}([function(t,e,l){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=l(1),n=o(r);e.default=n.default},function(t,e,l){(function(t,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var l=0;l<e.length;l++){var o=e[l];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,l,o){return l&&t(e.prototype,l),o&&t(e,o),e}}(),u=l(7),p=r(u);l(5);/**!
	 * iScroll React Component
	 * iScroll: http://iscrolljs.com/
	 * reactjs-iscroll: https://github.com/reactjs-ui/reactjs-iscroll
	 *
	 */
var f=["beforeScrollStart","scrollCancel","scrollStart","scroll","scrollEnd","flick","zoomStart","zoomEnd"],d=function(e){function l(t){i(this,l);var e=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));return e.state={isScrolling:!1,pullDownState:0,pullUpState:0,pullDownCls:"scrolled-up",pullUpCls:"",pullDownStyle:null,pullUpStyle:null},e.scrollStartPos=0,e.pullDownOffset=0,e.lock=!1,e}return a(l,e),c(l,[{key:"componentDidMount",value:function(){var t=this.props.pullDown;if(t){var e=this.refs.pullDown;this.pullDownOffset=e.offsetHeight}this.initIscroll(),this.bindIScrollEvents()}},{key:"componentWillUnmount",value:function(){this.destoryIScroll()}},{key:"initIscroll",value:function(){var t=this.props,e=t.iScroll,l=t.options,r=new e(o.findDOMNode(this),l);this.iScrollInstance=r}},{key:"destoryIScroll",value:function(){this.iScrollInstance&&(this.iScrollInstance.destroy(),this.iScrollInstance=null)}},{key:"getIScroll",value:function(){return this.iScrollInstance}},{key:"bindIScrollEvents",value:function(){for(var t=this,e=this.getIScroll(),l=f.length,o=function(l){var o=f[l],r=t.props[o]?t.props[o]:t[o];r&&(r=r.bind(t),e.on(o,function(){for(var t=arguments.length,l=Array(t),o=0;o<t;o++)l[o]=arguments[o];r.apply(void 0,[e].concat(l))}))},r=0;r<l;r++)o(r);this.refresh(e);var n=e.refresh;e.refresh=function(){n.apply(e),t.refresh(e)}}},{key:"forbidScroll",value:function(t){var e=this.props,l=e.pullUp,o=e.pullDown;return!l&&!o||(t>0&&!o||t<0&&!l)}},{key:"scrollStart",value:function(t){this.forbidScroll(t.distY)||this.lock||(this.setState({isScrolling:!0}),this.scrollStartPos=t.y)}},{key:"scroll",value:function(t){var e=this;if(!this.forbidScroll(t.distY)&&!this.lock){var l=t.y,o=this.props,r=o.pullDown,n=o.pullUp,i=o.pullDownThreshold,s=o.pullUpThreshold;if(r||n){var a=this.state,c=a.pullDownCls,u=a.pullUpCls;0===this.scrollStartPos&&0===l?(t.hasVerticalScroll=!0,this.scrollStartPos=-1e3):this.scrollStartPos===-1e3&&(!n&&!c.match("iscroll-flip")&&l<0||!r&&!u.match("iscroll-flip")&&l>0)&&(t.hasVerticalScroll=!1,this.scrollStartPos=0,t.scrollBy(0,-l,0)),r&&(l>this.pullDownOffset+i&&"iscroll-flip"!==c?this.setState({pullDownStyle:{transitionDuration:"",marginTop:""},pullDownCls:"iscroll-flip",pullDownState:1},function(){t.scrollBy(0,-e.pullDownOffset,0)}):l<0&&"iscroll-flip"===c&&this.setState({pullDownStyle:{transitionDuration:"",marginTop:""},pullDownCls:"scrolled-up",pullDownState:0},function(){t.scrollBy(0,e.pullDownOffset,0)})),n&&(l<t.maxScrollY-s&&"iscroll-flip"!==u?this.setState({pullUpCls:"iscroll-flip",pullUpState:1},function(){t.hasVerticalScroll=!0,t.scrollBy(0,0,0)}):l>t.maxScrollY-s&&"iscroll-flip"===u&&this.setState({pullUpCls:"",pullUpState:0},function(){t.hasVerticalScroll=!0}))}}}},{key:"scrollEnd",value:function(t){if(!this.forbidScroll(t.distY)&&!this.lock){var e=this.props,l=e.pullDown,o=e.pullUp,r=this.state,n=r.pullDownCls,i=r.pullUpCls;l&&"iscroll-flip"===n&&(this.setState({pullDownStyle:{transitionDuration:"",marginTop:""},pullDownCls:"iscroll-loading",pullDownState:2}),this.pullActionHandler(t,"down")),o&&"iscroll-flip"===i&&(this.setState({pullUpCls:"iscroll-loading",pullUpState:2}),this.pullActionHandler(t,"up")),this.scrollStartPos===-1e3&&(this.hasVerticalScroll=t.options.scrollY&&t.maxScrollY<0)}}},{key:"refresh",value:function(t){var e=this;if(!this.forbidScroll(t.distY)&&!this.lock){var l=t.y,o=void 0,r=void 0,n=this.props,i=n.pullDown,s=n.pullUp,a=this.state,c=a.pullDownCls,u=a.pullUpCls,p=a.isScrolling;if(i&&"iscroll-loading"===c&&p===!1){var f={pullDownState:0,pullDownCls:"scrolled-up"};if(l>=0)r=1,o=250,f.pullDownStyle={transitionDuration:o+"ms",marginTop:""};else if(l>-this.pullDownOffset){r=2;var d=this.refs.pullDown;d.style.marginTop=l+"px",d.offsetHeight,o=250*(this.pullDownOffset+l)/this.pullDownOffset,f.pullDownStyle={transitionDuration:o+"ms",marginTop:""}}else r=3,o=0,f.pullDownStyle={transitionDuration:"",marginTop:""};this.setState(f,function(){setTimeout(function(){t.refresh()},o+10),2===r?t.scrollTo(0,0,0):3===r&&t.scrollBy(0,e.pullDownOffset,0)})}s&&"iscroll-loading"===u&&p===!1&&this.setState({pullUpCls:"",pullUpState:0})}}},{key:"pullActionHandler",value:function(t,e){var l=this;this.lock=!0;var o=this.props.handleRefresh;o&&"function"==typeof o?o(e,function(){l.setState({pullUpState:0,isScrolling:!1},function(){l.lock=!1,t.refresh()})}):setTimeout(function(){l.setState({pullUpState:0,isScrolling:!1},function(){l.lock=!1,t.refresh()})},1e3)}},{key:"render",value:function(){var e=this.state,l=e.pullDownState,o=e.pullUpState,r=e.pullDownCls,i=e.pullUpCls,s=this.props,a=s.pullDown,c=s.pullUp,u=s.pullDownText,f=s.pullUpText,d=s.className,h=s.style;return d=d?" "+d:"",t.createElement("div",{className:"iscroll-wrapper"+d,style:h||{}},t.createElement("div",{className:"iscroll-body"},a?t.createElement("div",{ref:"pullDown",className:(0,p.default)(n({"iscroll-pull-down":!0},r,!0))},t.createElement("i",null),t.createElement("span",null,u[l])):null,this.props.children,c?t.createElement("div",{className:(0,p.default)(n({"iscroll-pull-up":!0},i,!0))},t.createElement("i",null),t.createElement("span",null,f[o])):null))}}]),l}(t.Component);d.defaultProps={options:{mouseWheel:!0,scrollbars:!0,probeType:2,bounceEasing:"quadratic",fadeScrollbars:!0,interactiveScrollbars:!0},pullDown:!0,pullUp:!0,pullDownText:["下拉刷新","松开刷新","加载中，请稍后..."],pullUpText:["上滑加载更多...","松开加载...","加载中，请稍后..."],pullDownThreshold:5,pullUpThreshold:55},d.defaultPropTypes={options:t.PropTypes.object.isRequired,iScroll:t.PropTypes.func.isRequired,className:t.PropTypes.string,style:t.PropTypes.object,children:t.PropTypes.node,pullDown:t.PropTypes.bool,pullUp:t.PropTypes.bool,pullDownText:t.PropTypes.array,pullUpText:t.PropTypes.array,pullDownThreshold:t.PropTypes.number,pullUpThreshold:t.PropTypes.number,handleRefresh:t.PropTypes.func},e.default=d}).call(e,l(8),l(9))},function(t,e,l){e=t.exports=l(3)(),e.push([t.id,".iscroll-wrapper{top:0;bottom:0;left:0;overflow:hidden}.iscroll-body,.iscroll-wrapper{position:absolute;z-index:1;width:100%}.iscroll-body{-webkit-tap-highlight-color:transparent;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.iscroll-pull-down,.iscroll-pull-up{padding:5px 10px;color:#888;text-align:center}.iscroll-pull-down.scrolled-up{margin-top:-51px}.iscroll-pull-down>i,.iscroll-pull-up>i{display:inline-block;width:40px;height:40px;background:url("+l(6)+") 0 0 no-repeat;background-size:40px 80px;-webkit-transition-property:-webkit-transform;-webkit-transition-duration:.25s;vertical-align:middle;margin:0 5px}.iscroll-pull-down>i{-webkit-transform:rotate(0deg) translateZ(0);transform:rotate(0deg) translateZ(0)}.iscroll-pull-down.iscroll-flip>i,.iscroll-pull-up>i{-webkit-transform:rotate(-180deg) translateZ(0);transform:rotate(-180deg) translateZ(0)}.iscroll-pull-down.iscroll-loading>i,.iscroll-pull-up.iscroll-flip>i,.iscroll-pull-up.iscroll-loading>i{-webkit-transform:rotate(0deg) translateZ(0);transform:rotate(0deg) translateZ(0)}.iscroll-pull-down.iscroll-loading>i,.iscroll-pull-up.iscroll-loading>i{background-position:0 100%;-webkit-transition-duration:0ms;transition-duration:0ms;-webkit-animation-name:iscroll-loading;animation-name:iscroll-loading;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes iscroll-loading{0%{-webkit-transform:rotate(0deg) translateZ(0)}to{-webkit-transform:rotate(1turn) translateZ(0)}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var l=this[e];l[2]?t.push("@media "+l[2]+"{"+l[1]+"}"):t.push(l[1])}return t.join("")},t.i=function(e,l){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(o[n]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(l&&!i[2]?i[2]=l:l&&(i[2]="("+i[2]+") and ("+l+")"),t.push(i))}},t}},function(t,e,l){function o(t,e){for(var l=0;l<t.length;l++){var o=t[l],r=d[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(c(o.parts[n],e))}else{for(var i=[],n=0;n<o.parts.length;n++)i.push(c(o.parts[n],e));d[o.id]={id:o.id,refs:1,parts:i}}}}function r(t){for(var e=[],l={},o=0;o<t.length;o++){var r=t[o],n=r[0],i=r[1],s=r[2],a=r[3],c={css:i,media:s,sourceMap:a};l[n]?l[n].parts.push(c):e.push(l[n]={id:n,parts:[c]})}return e}function n(t,e){var l=x(),o=v[v.length-1];if("top"===t.insertAt)o?o.nextSibling?l.insertBefore(e,o.nextSibling):l.appendChild(e):l.insertBefore(e,l.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");l.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",n(t,e),e}function c(t,e){var l,o,r;if(e.singleton){var n=w++;l=y||(y=s(e)),o=u.bind(null,l,n,!1),r=u.bind(null,l,n,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(l=a(e),o=f.bind(null,l),r=function(){i(l),l.href&&URL.revokeObjectURL(l.href)}):(l=s(e),o=p.bind(null,l),r=function(){i(l)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function u(t,e,l,o){var r=l?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var n=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(n,i[e]):t.appendChild(n)}}function p(t,e){var l=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=l;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(l))}}function f(t,e){var l=e.css,o=e.sourceMap;o&&(l+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([l],{type:"text/css"}),n=t.href;t.href=URL.createObjectURL(r),n&&URL.revokeObjectURL(n)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),x=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,w=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var l=r(t);return o(l,e),function(t){for(var n=[],i=0;i<l.length;i++){var s=l[i],a=d[s.id];a.refs--,n.push(a)}if(t){var c=r(t);o(c,e)}for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var b=function(){var t=[];return function(e,l){return t[e]=l,t.filter(Boolean).join("\n")}}()},function(t,e,l){var o=l(2);"string"==typeof o&&(o=[[t.id,o,""]]);l(4)(o,{});o.locals&&(t.exports=o.locals)},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAACgCAMAAACsXRuGAAAAt1BMVEX////FxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcU7SVrkAAAAPHRSTlMAAPONxyCMRvCjM2n59gzeD/xssVo52Akwh6sDpeTbckJLZroqfhUnRernVxifG9XDgb2ZzzxjeLThEmBcLCjmAAACDklEQVR4Xu2Y124yQQyFM9sh9BJafgik956/7fs/V4RCwiITbMdjCSGfKy4On7THnuLZ8yGTyRWUr1W54NgNIC4Dbm+VrQ+tbQxoQAMa0IAGnO4vtR44WBquCcBuJadrSslwQucNaBm2qbyHEQ3YqNN4l3fUKpdpMV7Q26ZF4T3S+5AU49OIA8RjvLpxDCAeY/PIcYB4jKf8tTzcxDt2fGBt/D3v19kPgK5fRQLkAt0MCZANdIdIgGxg7WBjgHygO1kTY/NVMla8QeBvJwHCGP84CRDG+PefBAhjrHTlo9n/InDiY9a7XfLazgewd//Jqze8AN15sAiw7Gu87XwAW/7m5ec5b+j8AXsveT6uSYAwxmrf7xNBZ+aYQJPJZDLh+20aRlkWhen8twdgnCyO0SCJfQDjUv6lUuwBmOQFJXJgGhSBQSoGhvmKQnFNo1VgBD3MmmarwAx6WDWFQOhh1RR+MvSwagqLwqw7/ndW3UkfCD2bhJcAephAvJGYn4y3OrMouIfZNriH19i4h7v0cI9ww4ce4ZEEPTt6/uJ+UdS4H28G1C9qV9yPLyjUL1vyuB/dlLh+dNtE/dpA+SdrF0XeNsqNLV96+puDfPvaaukfUvJjVP+gl19F9C9L8uuc/oVTfiXWv7TLxwr9wUc+msmHR/3xVj6A6z8RSBej/jMLp+76T1X6j2m7eP6aTO9STHV4CXebKAAAAABJRU5ErkJggg=="},function(e,l){e.exports=t},function(t,l){t.exports=e},function(t,e){t.exports=l}])});
//# sourceMappingURL=react-iscroll.js.map