"use strict";(self.webpackChunklx_music_doc=self.webpackChunklx_music_doc||[]).push([[8400],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),a=n(6010),o=n(8425),i=n(9960),c=n(3919),l=n(5999),u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},n)}function d(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){var t,n=e.item,a=(0,o.Wl)(n);return a?r.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function k(e){var t,n,a=e.item,i=(0,c.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=a.docId)?t:void 0);return r.createElement(d,{href:a.href,icon:i,title:a.label,description:null!=(n=a.description)?n:null==l?void 0:l.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.className,n=(0,o.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(h,e);var i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},5129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(2991),c=["components"],l={},u="\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u684c\u9762\u7248\u8bf4\u660e",s={unversionedId:"desktop/index",id:"desktop/index",title:"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u684c\u9762\u7248\u8bf4\u660e",description:"\u8bf4\u660e",source:"@site/docs/desktop/index.md",sourceDirName:"desktop",slug:"/desktop/",permalink:"/desktop/",draft:!1,editUrl:"https://github.com/lyswhut/lx-music-doc/tree/master/docs/desktop/index.md",tags:[],version:"current",lastUpdatedAt:1690114404,formattedLastUpdatedAt:"2023\u5e747\u670823\u65e5",frontMatter:{},sidebar:"desktopSidebar",next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/desktop/faq"}},p={},m=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:3}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u684c\u9762\u7248\u8bf4\u660e"},"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u684c\u9762\u7248\u8bf4\u660e"),(0,o.kt)("h3",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e00\u4e2a\u57fa\u4e8e Electron + Vue \u5f00\u53d1\u7684\u97f3\u4e50\u8f6f\u4ef6\u3002"),(0,o.kt)("p",null,"\u6240\u7528\u6280\u672f\u6808\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Electron 15+"),(0,o.kt)("li",{parentName:"ul"},"Vue 3")),(0,o.kt)("p",null,"\u5df2\u652f\u6301\u7684\u5e73\u53f0\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 7 \u53ca\u4ee5\u4e0a"),(0,o.kt)("li",{parentName:"ul"},"Mac OS"),(0,o.kt)("li",{parentName:"ul"},"Linux")),(0,o.kt)("p",null,"\u8f6f\u4ef6\u53d8\u5316\u8bf7\u67e5\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lyswhut/lx-music-desktop/blob/master/CHANGELOG.md"},"\u66f4\u65b0\u65e5\u5fd7")),(0,o.kt)("p",null,"\u8f6f\u4ef6\u4e0b\u8f7d\u8bf7\u8f6c\u5230\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lyswhut/lx-music-desktop/releases"},"\u53d1\u5e03\u9875\u9762")),(0,o.kt)("p",null,"\u6216\u8005\u5230\u7f51\u76d8\u4e0b\u8f7d\uff08\u7f51\u76d8\u5185\u6709MAC\u3001windows\u7248\uff09\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.lanzoui.com/b0bf2cfa/")," \u5bc6\u7801\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"glqw"),"\uff08\u82e5\u94fe\u63a5\u65e0\u6cd5\u6253\u5f00\u8bf7\u767e\u5ea6\uff1a\u84dd\u594f\u4e91\u94fe\u63a5\u6253\u4e0d\u5f00\uff09"),(0,o.kt)("p",null,"\u4f7f\u7528\u5e38\u89c1\u95ee\u9898\u8bf7\u8f6c\u81f3\uff1a",(0,o.kt)("a",{parentName:"p",href:"/desktop/faq"},"\u5e38\u89c1\u95ee\u9898")),(0,o.kt)("p",null,"\u76ee\u524d\u672c\u9879\u76ee\u7684\u539f\u59cb\u53d1\u5e03\u5730\u5740\u53ea\u6709",(0,o.kt)("strong",{parentName:"p"},"GitHub"),"\u53ca",(0,o.kt)("strong",{parentName:"p"},"\u84dd\u594f\u7f51\u76d8"),"\uff0c\u5176\u4ed6\u6e20\u9053\u5747\u4e3a\u7b2c\u4e09\u65b9\u8f6c\u8f7d\u53d1\u5e03\uff0c\u4e0e\u672c\u9879\u76ee\u65e0\u5173\uff01"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);