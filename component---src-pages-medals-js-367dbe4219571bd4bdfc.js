(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lT8T:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return M}));var a=r("q1tI"),n=r.n(a),o=r("9eSz"),l=r.n(o),c=r("MBJH"),s=r("wx14"),i=r("zLVn"),u=r("TSYQ"),f=r.n(u),m=r("vUet"),p=["xl","lg","md","sm","xs"],d=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,o=e.noGutters,l=e.as,c=void 0===l?"div":l,u=Object(i.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(m.a)(r,"row"),b=d+"-cols",y=[];return p.forEach((function(e){var t,r=u[e];delete u[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&y.push(""+b+a+"-"+t)})),n.a.createElement(c,Object(s.a)({ref:t},u,{className:f.a.apply(void 0,[a,d,o&&"no-gutters"].concat(y))}))}));d.displayName="Row",d.defaultProps={noGutters:!1};var b=d,y=["xl","lg","md","sm","xs"],v=n.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,o=e.as,l=void 0===o?"div":o,c=Object(i.a)(e,["bsPrefix","className","as"]),u=Object(m.a)(r,"col"),p=[],d=[];return y.forEach((function(e){var t,r,a,n=c[e];if(delete c[e],"object"==typeof n&&null!=n){var o=n.span;t=void 0===o||o,r=n.offset,a=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+u+l:""+u+l+"-"+t),null!=a&&d.push("order"+l+"-"+a),null!=r&&d.push("offset"+l+"-"+r)})),p.length||p.push(u),n.a.createElement(l,Object(s.a)({},c,{ref:t,className:f.a.apply(void 0,[a].concat(p,d))}))}));v.displayName="Col";var E=v,h=r("7O5W"),O=r("17x9"),g=r.n(O);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function A(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=S(t.slice(0,a)),o=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[n]=o,e}),{})}var z=!1;try{z=!0}catch(Q){}function I(e){return null===e?null:"object"===x(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function T(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?w({},e,t):{}}function C(e){var t=e.forwardedRef,r=k(e,["forwardedRef"]),a=r.icon,n=r.mask,o=r.symbol,l=r.className,c=r.title,s=I(a),i=T("classes",[].concat(P(function(e){var t,r=e.spin,a=e.pulse,n=e.fixedWidth,o=e.inverse,l=e.border,c=e.listItem,s=e.flip,i=e.size,u=e.rotation,f=e.pull,m=(w(t={"fa-spin":r,"fa-pulse":a,"fa-fw":n,"fa-inverse":o,"fa-border":l,"fa-li":c,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(i),null!=i),w(t,"fa-rotate-".concat(u),null!=u&&0!==u),w(t,"fa-pull-".concat(f),null!=f),w(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(m).map((function(e){return m[e]?e:null})).filter((function(e){return e}))}(r)),P(l.split(" ")))),u=T("transform","string"==typeof r.transform?h.c.transform(r.transform):r.transform),f=T("mask",I(n)),m=Object(h.a)(s,N({},i,{},u,{},f,{symbol:o,title:c}));if(!m)return function(){var e;!z&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var p=m.abstract,d={ref:t};return Object.keys(r).forEach((function(e){C.defaultProps.hasOwnProperty(e)||(d[e]=r[e])})),W(p[0],d)}C.displayName="FontAwesomeIcon",C.propTypes={border:g.a.bool,className:g.a.string,mask:g.a.oneOfType([g.a.object,g.a.array,g.a.string]),fixedWidth:g.a.bool,inverse:g.a.bool,flip:g.a.oneOf(["horizontal","vertical","both"]),icon:g.a.oneOfType([g.a.object,g.a.array,g.a.string]),listItem:g.a.bool,pull:g.a.oneOf(["right","left"]),pulse:g.a.bool,rotation:g.a.oneOf([0,90,180,270]),size:g.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.a.bool,symbol:g.a.oneOfType([g.a.bool,g.a.string]),title:g.a.string,transform:g.a.oneOfType([g.a.string,g.a.object]),swapOpacity:g.a.bool},C.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var W=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=A(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[S(t)]=a}return e}),{attrs:{}}),l=a.style,c=void 0===l?{}:l,s=k(a,["style"]);return o.attrs.style=N({},o.attrs.style,{},c),t.apply(void 0,[r.tag,N({},o.attrs,{},s)].concat(P(n)))}.bind(null,n.a.createElement),G=r("7oih"),R=r("EYWl"),D=(r("BIHw"),r("QGkA"),{first:3,second:2,third:1}),L=["first","second","third"],B=function(e){for(var t=e.scores,r=e.place,a=[],o=0;o<t[r];o++)a.push(n.a.createElement(C,{key:o,icon:"medal",className:r}));return n.a.createElement(n.a.Fragment,null,a)},J=function(e){return Object.entries(e).sort((function(e,t){return e[1].score>t[1].score?-1:e[1].score<t[1].score?1:0})).reduce((function(e,t,r){return e[t[0]]=L[r],e}),{})},U=function(e){var t=e.scores,r=Object(a.useState)((function(){return t.reduce((function(e,t){return e[t.name]=t.nodes.map((function(e){return e.days})).flat().map((function(e){return e.place})).filter(Boolean).reduce((function(e,t){return void 0!==e[t]&&e[t]++,void 0!==D[t]&&(e.score+=D[t]),e}),{first:0,second:0,third:0,score:0}),e}),{})})),o=r[0],l=(r[1],Object(a.useState)((function(){return J(o)}))),c=l[0];l[1];return n.a.createElement("tbody",{id:"medal-totals"},n.a.createElement("tr",null,t.map((function(e){return n.a.createElement("td",{key:e.name,className:"medals"},n.a.createElement(B,{scores:o[e.name],place:"first"}),n.a.createElement(B,{scores:o[e.name],place:"second"}),n.a.createElement(B,{scores:o[e.name],place:"third"}))}))),n.a.createElement("tr",null,t.map((function(e){return n.a.createElement("td",{key:e.name},n.a.createElement("span",{className:"mx-1"},o[e.name].third,"x"," ",n.a.createElement(C,{icon:"medal",className:"third"})),n.a.createElement("span",{className:"mx-1"},o[e.name].second,"x"," ",n.a.createElement(C,{icon:"medal",className:"second"})),n.a.createElement("span",{className:"mx-1"},o[e.name].first,"x"," ",n.a.createElement(C,{icon:"medal",className:"first"})))}))),n.a.createElement("tr",null,t.map((function(e){return n.a.createElement("td",{key:e.name},n.a.createElement(C,{icon:"medal",className:"mr-2 "+c[e.name]}),o[e.name].score,"pts")}))))},q=r("Wbzz"),F=function(e){var t=e.scores,r=e.winners,a=t.map((function(e){var t=r.find((function(t){return t.name===e.name}));return t?n.a.createElement("td",{key:e.name},t.nodes.map((function(e){var t=e.name,r=e.slug;return n.a.createElement(q.Link,{key:r,to:"/"+r,className:"d-block my-2"},n.a.createElement(C,{icon:"trophy",className:"goblet-win"}),n.a.createElement("span",{className:"ml-2 goblet-game"},t))}))):n.a.createElement("td",{key:e.name})}));return n.a.createElement("tbody",null,n.a.createElement("tr",null,a))},H=r("dCwo"),M="543291460";t.default=function(e){var t=e.data;return n.a.createElement(G.a,{theme:"medals",variant:"light"},n.a.createElement(R.a,{title:"Medals"}),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(l.a,{fixed:t.headerImage.childImageSharp.fixed,className:"img-fluid"})),n.a.createElement("div",{id:"subtitle",className:"d-flex justify-content-center text-nowrap"},"Golden Goblet"),n.a.createElement(c.a,{variant:"dark",borderless:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,t.scores.group.map((function(e){var t=e.name;return n.a.createElement("th",{key:t},n.a.createElement(H.a,{name:t},t))})))),n.a.createElement(F,{scores:t.scores.group,winners:t.winners.group}),n.a.createElement(U,{scores:t.scores.group}),n.a.createElement("tfoot",null,n.a.createElement("tr",{id:"points-calc"},n.a.createElement("th",{colSpan:t.winners.group.length+1},n.a.createElement(b,null,n.a.createElement(E,{xs:4,className:"third"},n.a.createElement(C,{icon:"medal"})," = 1 pt"),n.a.createElement(E,{xs:4,className:"second"},n.a.createElement(C,{icon:"medal"})," = 2 pts"),n.a.createElement(E,{xs:4,className:"first"},n.a.createElement(C,{icon:"medal"})," = 3 pts")))))))}}}]);
//# sourceMappingURL=component---src-pages-medals-js-367dbe4219571bd4bdfc.js.map