"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[608],{839:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),u=r(243),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/popular","275907f385c33d24dbe69faf1e070b83",t="".concat("https://api.themoviedb.org/3/movie/popular","?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(t);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),"275907f385c33d24dbe69faf1e070b83",n="".concat(r,"?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(n);case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(t,"/").concat(r),"275907f385c33d24dbe69faf1e070b83",a="".concat(n,"?api_key=").concat("275907f385c33d24dbe69faf1e070b83"),e.next=5,u.Z.get(a);case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return"https://api.themoviedb.org/3/search/movie","275907f385c33d24dbe69faf1e070b83",r="".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("275907f385c33d24dbe69faf1e070b83","&query=").concat(t),e.next=7,u.Z.get(r);case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={fetchPopularMovies:o,fetchMoviesById:i,fetchMoviesByQuery:f,fetchInfoById:s};t.Z=p},608:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),i=r(87),s=r(689),f=r(839),p=r(596),v=(r(462),"Movies_container__+-Cnt"),h="Movies_inputBlock__JitVW",d="Movies_inputBtn__iSQSx",l=r(184),b=function(){var e,t=(0,i.lr)(),r=(0,a.Z)(t,2),c=r[0],b=r[1],m=(0,o.useState)([]),x=(0,a.Z)(m,2),y=x[0],k=x[1],_=(0,o.useState)(null),g=(0,a.Z)(_,2),w=g[0],Z=g[1],j=(0,o.useState)(""),M=(0,a.Z)(j,2),S=M[0],B=M[1],C=(0,s.TH)(),q=null!==(e=c.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchMoviesByQuery(q);case 3:if(0!==(t=e.sent).data.results.length){e.next=6;break}return e.abrupt("return",p.Am.error("No movies by your query"));case 6:k(t.data.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();""!==q&&e()}),[q]);return(0,l.jsxs)("div",{className:v,children:[(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("input",{type:"text",value:S,onChange:function(e){return B(e.target.value)}}),(0,l.jsx)("button",{type:"button",className:d,onClick:function(){return function(e){b(""!==e?{query:e}:{}),B("")}(S)},children:"Search"})]}),q&&(0,l.jsx)("ul",{children:y.map((function(e){var t=e.original_title,r=e.id;return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"".concat(r),state:{from:C},children:t})},r)}))}),w&&(0,l.jsx)("p",{children:'"Something went wrong((("'})]})}}}]);
//# sourceMappingURL=608.232d0b12.chunk.js.map