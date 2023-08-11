"use strict";(self.webpackChunklx_music_doc=self.webpackChunklx_music_doc||[]).push([[4126],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,d=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2991:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),i=n(6010),a=n(8425),o=n(9960),l=n(3919),c=n(5999),u="cardContainer_fWXF",m="cardTitle_rnsV",s="cardDescription_PWke";function p(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function f(e){var t=e.href,n=e.icon,a=e.title,o=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",m),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",s),title:o},o))}function d(e){var t,n=e.item,i=(0,a.Wl)(n);return i?r.createElement(f,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function b(e){var t,n,i=e.item,o=(0,l.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(f,{href:i.href,icon:o,title:i.label,description:null!=(n=i.description)?n:null==c?void 0:c.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.className,n=(0,a.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){var t=e.items,n=e.className;if(!t)return r.createElement(h,e);var o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{item:e}))})))}},2727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(2991),l=["components"],c={},u="\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u79fb\u52a8\u7248\u8bf4\u660e",m={unversionedId:"mobile/index",id:"mobile/index",title:"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u79fb\u52a8\u7248\u8bf4\u660e",description:"\u8bf4\u660e",source:"@site/docs/mobile/index.md",sourceDirName:"mobile",slug:"/mobile/",permalink:"/mobile/",draft:!1,editUrl:"https://github.com/lyswhut/lx-music-doc/tree/master/docs/mobile/index.md",tags:[],version:"current",lastUpdatedAt:1691385697,formattedLastUpdatedAt:"2023\u5e748\u67087\u65e5",frontMatter:{},sidebar:"mobileSidebar",next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/mobile/faq"}},s={},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:3}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u79fb\u52a8\u7248\u8bf4\u660e"},"\u6d1b\u96ea\u97f3\u4e50\u52a9\u624b\u79fb\u52a8\u7248\u8bf4\u660e"),(0,a.kt)("h3",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u4e00\u4e2a\u57fa\u4e8e React native \u5f00\u53d1\u7684\u97f3\u4e50\u8f6f\u4ef6\u3002"),(0,a.kt)("p",null,"\u6240\u7528\u6280\u672f\u6808\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React native"),(0,a.kt)("li",{parentName:"ul"},"Redux")),(0,a.kt)("p",null,"\u652f\u6301\u7684\u5e73\u53f0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android")),(0,a.kt)("p",null,"\u6ce8\uff1a\u4e0d\u8ba1\u5212\u652f\u6301IOS"),(0,a.kt)("p",null,"\u8f6f\u4ef6\u53d8\u5316\u8bf7\u67e5\u770b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lyswhut/lx-music-mobile/blob/master/CHANGELOG.md"},"\u66f4\u65b0\u65e5\u5fd7")),(0,a.kt)("p",null,"\u8f6f\u4ef6\u4e0b\u8f7d\u8bf7\u8f6c\u5230\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lyswhut/lx-music-mobile/releases"},"\u53d1\u5e03\u9875\u9762")),(0,a.kt)("p",null,"\u6216\u8005\u5230\u7f51\u76d8\u4e0b\u8f7d\uff08\u7f51\u76d8\u5185\u6709MAC\u3001windows\u7248\uff09\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.lanzoui.com/b0bf2cfa/")," \u5bc6\u7801\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"glqw"),"\uff08\u82e5\u94fe\u63a5\u65e0\u6cd5\u6253\u5f00\u8bf7\u767e\u5ea6\uff1a\u84dd\u594f\u4e91\u94fe\u63a5\u6253\u4e0d\u5f00\uff09"),(0,a.kt)("p",null,"\u4f7f\u7528\u5e38\u89c1\u95ee\u9898\u8bf7\u8f6c\u81f3\uff1a",(0,a.kt)("a",{parentName:"p",href:"/mobile/faq"},"\u5e38\u89c1\u95ee\u9898")),(0,a.kt)("p",null,"\u76ee\u524d\u672c\u9879\u76ee\u7684\u539f\u59cb\u53d1\u5e03\u5730\u5740\u53ea\u6709",(0,a.kt)("strong",{parentName:"p"},"GitHub"),"\u53ca",(0,a.kt)("strong",{parentName:"p"},"\u84dd\u594f\u7f51\u76d8"),"\uff0c\u5176\u4ed6\u6e20\u9053\u5747\u4e3a\u7b2c\u4e09\u65b9\u8f6c\u8f7d\u53d1\u5e03\uff0c\u4e0e\u672c\u9879\u76ee\u65e0\u5173\uff01"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u4f7f\u7528\u95e8\u69db\uff0c\u672c\u8f6f\u4ef6\u5185\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u3001UI\u64cd\u4f5c\u4e0d\u4ee5\u65b0\u624b\u53cb\u597d\u4e3a\u76ee\u6807\uff0c\u6240\u4ee5\u4f7f\u7528\u524d\u5efa\u8bae\u5148\u6839\u636e\u4f60\u7684\u559c\u597d\u6d4f\u89c8\u8c03\u6574\u4e00\u904d\u8f6f\u4ef6\u8bbe\u7f6e\uff0c\u9605\u8bfb\u4e00\u904d",(0,a.kt)("a",{parentName:"p",href:"/mobile/faq/playlist"},"\u97f3\u4e50\u64ad\u653e\u5217\u8868\u673a\u5236")),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);