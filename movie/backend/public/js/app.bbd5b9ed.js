(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)i=o[p],s[i]&&d.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),o={},u=Object(i["a"])(o,s,a,!1,null,null,null),c=u.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("h1",[t._v("5월 마지막주 영화 예매 순위")]),n("ul",{staticClass:"movies"},t._l(t.movies,function(e){return n("li",{staticClass:"item"},[n("span",{staticClass:"rank"},[t._v(t._s(e.id))]),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[n("img",{staticClass:"poster",attrs:{src:e.poster}})]),n("div",{staticClass:"detail"},[n("strong",{staticClass:"tit"},[t._v(t._s(e.name))]),n("span",{staticClass:"rate"},[t._v("예매율 "),n("span",{staticClass:"num"},[t._v(t._s(e.rate))])]),n("router-link",{staticClass:"link",attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("자세히보기")])],1)],1)}),0)])},d=[],v={created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},f=v,m=Object(i["a"])(f,p,d,!1,null,null,null),h=m.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("h1",[t._v(t._s(t.movie.name))]),n("img",{staticClass:"poster",attrs:{src:t.movie.poster}}),n("section",[n("h2",[t._v("영화정보")]),n("dl",{staticClass:"info"},[n("dt",[t._v("감독")]),n("dd",[t._v(t._s(t.movie.director))]),n("dt",[t._v("출연")]),n("dd",[t._v(t._s(t.movie.actors))]),n("dt",[t._v("러닝타임")]),n("dd",[t._v(t._s(t.movie.time))])])]),n("section",[n("h2",[t._v("줄거리")]),n("p",{staticClass:"synopsis",domProps:{innerHTML:t._s(t.movie.synopsis)}})]),n("router-link",{staticClass:"link",attrs:{to:{name:"index",params:{id:t.movie.id}}}},[t._v("돌아가기")])],1)},b=[],y={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data[0]})},data:function(){return{movie:{}}}},g=y,w=Object(i["a"])(g,_,b,!1,null,null,null),C=w.exports;r["a"].use(l["a"]);var O=new l["a"]({mode:"history",routes:[{path:"/",name:"index",component:h},{path:"/:id",name:"show",component:C}]}),j=n("bc3a"),x=n.n(j);r["a"].config.productionTip=!1,r["a"].prototype.$http=x.a,new r["a"]({render:function(t){return t(c)},router:O}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.bbd5b9ed.js.map