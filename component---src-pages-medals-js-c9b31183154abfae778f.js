(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/GqU":function(e,t,r){var n=r("RK3t"),o=r("HYAF");e.exports=function(e){return n(o(e))}},"/b8u":function(e,t,r){var n=r("STAE");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(e,t){e.exports={}},"0Dky":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"0GbY":function(e,t,r){var n=r("Qo9l"),o=r("2oRo"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e])||a(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},"0eef":function(e,t,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!n.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:n},"2oRo":function(e,t,r){(function(t){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||Function("return this")()}).call(this,r("yLpj"))},"33Wh":function(e,t,r){var n=r("yoRg"),o=r("eDl+");e.exports=Object.keys||function(e){return n(e,o)}},"6JNq":function(e,t,r){var n=r("UTVS"),o=r("Vu81"),a=r("Bs8V"),c=r("m/L8");e.exports=function(e,t){for(var r=o(t),i=c.f,u=a.f,s=0;s<r.length;s++){var l=r[s];n(e,l)||i(e,l,u(t,l))}}},"6LWA":function(e,t,r){var n=r("xrYK");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"93I0":function(e,t,r){var n=r("VpIT"),o=r("kOOl"),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},A2ZE:function(e,t,r){var n=r("HAuM");e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},BIHw:function(e,t,r){"use strict";var n=r("I+eb"),o=r("or9q"),a=r("ewvW"),c=r("UMSQ"),i=r("ppGB"),u=r("ZfDv");n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),r=c(t.length),n=u(t,0);return n.length=o(n,t,t,r,0,void 0===e?1:i(e)),n}})},Bs8V:function(e,t,r){var n=r("g6v/"),o=r("0eef"),a=r("XGwC"),c=r("/GqU"),i=r("wE6v"),u=r("UTVS"),s=r("DPsx"),l=Object.getOwnPropertyDescriptor;t.f=n?l:function(e,t){if(e=c(e),t=i(t,!0),s)try{return l(e,t)}catch(r){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},DPsx:function(e,t,r){var n=r("g6v/"),o=r("0Dky"),a=r("zBJ4");e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(e,t,r){var n=r("0GbY");e.exports=n("document","documentElement")},HAuM:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},HYAF:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},"I+eb":function(e,t,r){var n=r("2oRo"),o=r("Bs8V").f,a=r("kRJp"),c=r("busE"),i=r("zk60"),u=r("6JNq"),s=r("lMq5");e.exports=function(e,t){var r,l,f,p,m,y=e.target,v=e.global,d=e.stat;if(r=v?n:d?n[y]||i(y,{}):(n[y]||{}).prototype)for(l in t){if(p=t[l],f=e.noTargetGet?(m=o(r,l))&&m.value:r[l],!s(v?l:y+(d?".":"#")+l,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&a(p,"sham",!0),c(r,l,p,e)}}},I8vh:function(e,t,r){var n=r("ppGB"),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},JBy8:function(e,t,r){var n=r("yoRg"),o=r("eDl+").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},"N+g0":function(e,t,r){var n=r("g6v/"),o=r("m/L8"),a=r("glrk"),c=r("33Wh");e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=c(t),i=n.length,u=0;i>u;)o.f(e,r=n[u++],t[r]);return e}},QGkA:function(e,t,r){r("RNIs")("flat")},Qo9l:function(e,t,r){var n=r("2oRo");e.exports=n},RK3t:function(e,t,r){var n=r("0Dky"),o=r("xrYK"),a="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},RNIs:function(e,t,r){var n=r("tiKp"),o=r("fHMY"),a=r("m/L8"),c=n("unscopables"),i=Array.prototype;null==i[c]&&a.f(i,c,{configurable:!0,value:o(null)}),e.exports=function(e){i[c][e]=!0}},STAE:function(e,t,r){var n=r("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},TWQb:function(e,t,r){var n=r("/GqU"),o=r("UMSQ"),a=r("I8vh"),c=function(e){return function(t,r,c){var i,u=n(t),s=o(u.length),l=a(c,s);if(e&&r!=r){for(;s>l;)if((i=u[l++])!=i)return!0}else for(;s>l;l++)if((e||l in u)&&u[l]===r)return e||l||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},UMSQ:function(e,t,r){var n=r("ppGB"),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},UTVS:function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},VpIT:function(e,t,r){var n=r("xDBR"),o=r("xs3f");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(e,t,r){var n=r("0GbY"),o=r("JBy8"),a=r("dBg+"),c=r("glrk");e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(c(e)),r=a.f;return r?t.concat(r(e)):t}},XGwC:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},ZfDv:function(e,t,r){var n=r("hh1v"),o=r("6LWA"),a=r("tiKp")("species");e.exports=function(e,t){var r;return o(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},afO8:function(e,t,r){var n,o,a,c=r("f5p1"),i=r("2oRo"),u=r("hh1v"),s=r("kRJp"),l=r("UTVS"),f=r("93I0"),p=r("0BK2"),m=i.WeakMap;if(c){var y=new m,v=y.get,d=y.has,b=y.set;n=function(e,t){return b.call(y,e,t),t},o=function(e){return v.call(y,e)||{}},a=function(e){return d.call(y,e)}}else{var h=f("state");p[h]=!0,n=function(e,t){return s(e,h,t),t},o=function(e){return l(e,h)?e[h]:{}},a=function(e){return l(e,h)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},busE:function(e,t,r){var n=r("2oRo"),o=r("kRJp"),a=r("UTVS"),c=r("zk60"),i=r("iSVu"),u=r("afO8"),s=u.get,l=u.enforce,f=String(String).split("String");(e.exports=function(e,t,r,i){var u=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,p=!!i&&!!i.noTargetGet;"function"==typeof r&&("string"!=typeof t||a(r,"name")||o(r,"name",t),l(r).source=f.join("string"==typeof t?t:"")),e!==n?(u?!p&&e[t]&&(s=!0):delete e[t],s?e[t]=r:o(e,t,r)):s?e[t]=r:c(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||i(this)}))},"dBg+":function(e,t){t.f=Object.getOwnPropertySymbols},"eDl+":function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(e,t,r){var n=r("HYAF");e.exports=function(e){return Object(n(e))}},f5p1:function(e,t,r){var n=r("2oRo"),o=r("iSVu"),a=n.WeakMap;e.exports="function"==typeof a&&/native code/.test(o(a))},fHMY:function(e,t,r){var n,o=r("glrk"),a=r("N+g0"),c=r("eDl+"),i=r("0BK2"),u=r("G+Rx"),s=r("zBJ4"),l=r("93I0"),f=l("IE_PROTO"),p=function(){},m=function(e){return"<script>"+e+"<\/script>"},y=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,t;y=n?function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F);for(var r=c.length;r--;)delete y.prototype[c[r]];return y()};i[f]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(p.prototype=o(e),r=new p,p.prototype=null,r[f]=e):r=y(),void 0===t?r:a(r,t)}},"g6v/":function(e,t,r){var n=r("0Dky");e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(e,t,r){var n=r("hh1v");e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},hh1v:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},iSVu:function(e,t,r){var n=r("xs3f"),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},kOOl:function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},kRJp:function(e,t,r){var n=r("g6v/"),o=r("m/L8"),a=r("XGwC");e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},lMq5:function(e,t,r){var n=r("0Dky"),o=/#|\.prototype\./,a=function(e,t){var r=i[c(e)];return r==s||r!=u&&("function"==typeof t?n(t):!!t)},c=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},i=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";e.exports=a},lT8T:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return q}));var n=r("q1tI"),o=r.n(n),a=r("9eSz"),c=r.n(a),i=r("MBJH"),u=r("wx14"),s=r("zLVn"),l=r("TSYQ"),f=r.n(l),p=r("vUet"),m=["xl","lg","md","sm","xs"],y=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.noGutters,c=e.as,i=void 0===c?"div":c,l=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),y=Object(p.a)(r,"row"),v=y+"-cols",d=[];return m.forEach((function(e){var t,r=l[e];delete l[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&d.push(""+v+n+"-"+t)})),o.a.createElement(i,Object(u.a)({ref:t},l,{className:f.a.apply(void 0,[n,y,a&&"no-gutters"].concat(d))}))}));y.displayName="Row",y.defaultProps={noGutters:!1};var v=y,d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.as,c=void 0===a?"div":a,i=Object(s.a)(e,["bsPrefix","className","as"]),l=Object(p.a)(r,"col"),m=[],y=[];return d.forEach((function(e){var t,r,n,o=i[e];if(delete i[e],"object"==typeof o&&null!=o){var a=o.span;t=void 0===a||a,r=o.offset,n=o.order}else t=o;var c="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+l+c:""+l+c+"-"+t),null!=n&&y.push("order"+c+"-"+n),null!=r&&y.push("offset"+c+"-"+r)})),m.length||m.push(l),o.a.createElement(c,Object(u.a)({},i,{ref:t,className:f.a.apply(void 0,[n].concat(m,y))}))}));b.displayName="Col";var h=b,g=r("7O5W"),x=r("17x9"),O=r.n(x);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function P(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=A(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var T=!1;try{T=!0}catch(C){}function R(e){return null===e?null:"object"===w(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function I(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?E({},e,t):{}}function G(e){var t=e.forwardedRef,r=k(e,["forwardedRef"]),n=r.icon,o=r.mask,a=r.symbol,c=r.className,i=r.title,u=R(n),s=I("classes",[].concat(N(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,c=e.border,i=e.listItem,u=e.flip,s=e.size,l=e.rotation,f=e.pull,p=(E(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":c,"fa-li":i,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(s),null!=s),E(t,"fa-rotate-".concat(l),null!=l&&0!==l),E(t,"fa-pull-".concat(f),null!=f),E(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),N(c.split(" ")))),l=I("transform","string"==typeof r.transform?g.c.transform(r.transform):r.transform),f=I("mask",R(o)),p=Object(g.a)(u,S({},s,{},l,{},f,{symbol:a,title:i}));if(!p)return function(){var e;!T&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var m=p.abstract,y={ref:t};return Object.keys(r).forEach((function(e){G.defaultProps.hasOwnProperty(e)||(y[e]=r[e])})),B(m[0],y)}G.displayName="FontAwesomeIcon",G.propTypes={border:O.a.bool,className:O.a.string,mask:O.a.oneOfType([O.a.object,O.a.array,O.a.string]),fixedWidth:O.a.bool,inverse:O.a.bool,flip:O.a.oneOf(["horizontal","vertical","both"]),icon:O.a.oneOfType([O.a.object,O.a.array,O.a.string]),listItem:O.a.bool,pull:O.a.oneOf(["right","left"]),pulse:O.a.bool,rotation:O.a.oneOf([0,90,180,270]),size:O.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:O.a.bool,symbol:O.a.oneOfType([O.a.bool,O.a.string]),title:O.a.string,transform:O.a.oneOfType([O.a.string,O.a.object]),swapOpacity:O.a.bool},G.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var B=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=P(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[A(t)]=n}return e}),{attrs:{}}),c=n.style,i=void 0===c?{}:c,u=k(n,["style"]);return a.attrs.style=S({},a.attrs.style,{},i),t.apply(void 0,[r.tag,S({},a.attrs,{},u)].concat(N(o)))}.bind(null,o.a.createElement),D=r("7oih"),M=r("EYWl"),z=(r("BIHw"),r("QGkA"),{first:3,second:2,third:1}),V=["first","second","third"],W=function(e){for(var t=e.scores,r=e.place,n=[],a=0;a<t[r];a++)n.push(o.a.createElement(G,{key:a,icon:"medal",className:r}));return o.a.createElement(o.a.Fragment,null,n)},L=function(e){return Object.entries(e).sort((function(e,t){return e[1].score>t[1].score?-1:e[1].score<t[1].score?1:0})).reduce((function(e,t,r){return e[t[0]]=V[r],e}),{})},U=function(e){var t=e.scores,r=Object(n.useState)((function(){return t.reduce((function(e,t){return e[t.name]=t.nodes.map((function(e){return e.days})).flat().map((function(e){return e.place})).filter(Boolean).reduce((function(e,t){return void 0!==e[t]&&e[t]++,void 0!==z[t]&&(e.score+=z[t]),e}),{first:0,second:0,third:0,score:0}),e}),{})})),a=r[0],c=(r[1],Object(n.useState)((function(){return L(a)}))),i=c[0];c[1];return o.a.createElement("tbody",{id:"medal-totals",className:"table-center"},o.a.createElement("tr",null,t.map((function(e){return o.a.createElement("td",{key:e.name,className:"medals"},o.a.createElement(W,{scores:a[e.name],place:"third"}),o.a.createElement(W,{scores:a[e.name],place:"second"}),o.a.createElement(W,{scores:a[e.name],place:"first"}))}))),o.a.createElement("tr",null,t.map((function(e){return o.a.createElement("td",{key:e.name},o.a.createElement("span",{className:"mx-1"},a[e.name].third,"x ",o.a.createElement(G,{icon:"medal",className:"third"})),o.a.createElement("span",{className:"mx-1"},a[e.name].second,"x ",o.a.createElement(G,{icon:"medal",className:"second"})),o.a.createElement("span",{className:"mx-1"},a[e.name].first,"x ",o.a.createElement(G,{icon:"medal",className:"first"})))}))),o.a.createElement("tr",null,t.map((function(e){return o.a.createElement("td",{key:e.name},o.a.createElement(G,{icon:"medal",className:"mr-2 "+i[e.name]}),a[e.name].score,"pts")}))))},J=r("Wbzz"),Y=function(e){var t=e.scores,r=e.winners,n=t.map((function(e){var t=r.find((function(t){return t.name===e.name}));return t?o.a.createElement("td",{key:e.name},t.nodes.map((function(e){var t=e.name,r=e.slug;return o.a.createElement(J.Link,{key:r,to:"/"+r,className:"d-block my-3"},o.a.createElement(G,{icon:"trophy",className:"goblet-win"}),o.a.createElement("span",{className:"ml-2 goblet-game"},t))}))):o.a.createElement("td",{key:e.name})}));return o.a.createElement("tbody",null,o.a.createElement("tr",null,n))},q="308461883";t.default=function(e){var t=e.data;return o.a.createElement(D.a,{theme:"medals",variant:"light"},o.a.createElement(M.a,{title:"Medals"}),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(c.a,{fixed:t.headerImage.childImageSharp.fixed,className:"img-fluid"})),o.a.createElement("div",{id:"subtitle",className:"d-flex justify-content-center text-nowrap"},"Golden Goblet"),o.a.createElement(i.a,{variant:"dark",borderless:!0},o.a.createElement("thead",{className:"table-center"},o.a.createElement("tr",null,t.scores.group.map((function(e){var t=e.name,r=e.nodes;return o.a.createElement("th",{key:t},r[0].youtube?o.a.createElement("a",{href:"https://www.youtube.com/user/"+r[0].youtube.channel},t):t)})))),o.a.createElement(Y,{scores:t.scores.group,winners:t.winners.group}),o.a.createElement(U,{scores:t.scores.group}),o.a.createElement("tfoot",{className:"table-center"},o.a.createElement("tr",{id:"points-calc"},o.a.createElement("th",{colSpan:t.winners.group.length+1},o.a.createElement(v,null,o.a.createElement(h,{xs:4,className:"third"},o.a.createElement(G,{icon:"medal"})," = 1 pt"),o.a.createElement(h,{xs:4,className:"second"},o.a.createElement(G,{icon:"medal"})," = 2 pts"),o.a.createElement(h,{xs:4,className:"first"},o.a.createElement(G,{icon:"medal"})," = 3 pts")))))))}},"m/L8":function(e,t,r){var n=r("g6v/"),o=r("DPsx"),a=r("glrk"),c=r("wE6v"),i=Object.defineProperty;t.f=n?i:function(e,t,r){if(a(e),t=c(t,!0),a(r),o)try{return i(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},or9q:function(e,t,r){"use strict";var n=r("6LWA"),o=r("UMSQ"),a=r("A2ZE"),c=function(e,t,r,i,u,s,l,f){for(var p,m=u,y=0,v=!!l&&a(l,f,3);y<i;){if(y in r){if(p=v?v(r[y],y,t):r[y],s>0&&n(p))m=c(e,t,p,o(p.length),m,s-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[m]=p}m++}y++}return m};e.exports=c},ppGB:function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},tiKp:function(e,t,r){var n=r("2oRo"),o=r("VpIT"),a=r("UTVS"),c=r("kOOl"),i=r("STAE"),u=r("/b8u"),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||c;e.exports=function(e){return a(s,e)||(i&&a(l,e)?s[e]=l[e]:s[e]=f("Symbol."+e)),s[e]}},wE6v:function(e,t,r){var n=r("hh1v");e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(e,t){e.exports=!1},xrYK:function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},xs3f:function(e,t,r){var n=r("2oRo"),o=r("zk60"),a=n["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=a},yoRg:function(e,t,r){var n=r("UTVS"),o=r("/GqU"),a=r("TWQb").indexOf,c=r("0BK2");e.exports=function(e,t){var r,i=o(e),u=0,s=[];for(r in i)!n(c,r)&&n(i,r)&&s.push(r);for(;t.length>u;)n(i,r=t[u++])&&(~a(s,r)||s.push(r));return s}},zBJ4:function(e,t,r){var n=r("2oRo"),o=r("hh1v"),a=n.document,c=o(a)&&o(a.createElement);e.exports=function(e){return c?a.createElement(e):{}}},zk60:function(e,t,r){var n=r("2oRo"),o=r("kRJp");e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}}}]);
//# sourceMappingURL=component---src-pages-medals-js-c9b31183154abfae778f.js.map